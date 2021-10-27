import React from "react";
import {Field, Form} from "react-final-form";


const ProfileFormData = (props) => {

    let formData = {
        fullName: props.profile.fullName,
        aboutMe: props.profile.aboutMe,
    }

    return (
        <>
            <li className='wrapper__information'> {props.isOwner &&
            <input  type={'file'} onChange={props.onSavePhoto}/>}</li>
            <Form
                onSubmit={(value) => props.upDateProfile(value)}
                initialValues={{
                    ...formData
                }}
                validate={values => {
                    const errors = {}
                    if (!values.fullName) {
                        errors.fullName = 'Required'
                    }
                    if (!values.lookingForAJobDescription) {
                        errors.lookingForAJobDescription = 'Required'
                    }
                    return errors
                }}
                render={({
                             submitError,
                             handleSubmit,
                             submitting,
                         }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name='fullName'>
                            {({input, meta}) => (
                                <div>
                                    <label>Full name</label>
                                    <input {...input} type="text"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name='aboutMe'>
                            {({input, meta}) => (
                                <div>
                                    <label>about Me</label>
                                    <input {...input} type="text"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name='lookingForAJobDescription' defaultValue={'weewee'}>
                            {({input, meta}) => (
                                <div>
                                    <label>Looking for a job description</label>
                                    <input {...input} type="text"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        {Object.keys(props.profile.contacts).map(key => {
                            return <ContactFormFields key={key} placeholder={key}
                                                      name={`contacts.` + key} label={key}
                                                      defaultValue={props.profile.contacts[key]}/>
                        })}
                        {submitError && <div className="error">{submitError}</div>}
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Save
                            </button>

                        </div>

                    </form>
                )}
            />
        </>
    )
}

const ContactFormFields = (props) => {

    return (
        <Field name={props.name} defaultValue={props.defaultValue}>
            {({input, meta}) => (
                <div>
                    <label>{props.label}</label>
                    <input {...input} type="text" placeholder={props.placeholder}/>
                    {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                    )}
                </div>
            )}
        </Field>
    )
}

export default ProfileFormData;