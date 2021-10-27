import PostElem from "./Post";
import React from 'react';
import {Field, Form} from "react-final-form";
import {required} from "../../Validators/validator-textarea";

const Posts = React.memo(props => {
    console.log('render')

    return (
        <div className='post'>
            <div>
                <Form onSubmit={(obg) => {
                    props.addPost(obg.newPost);
                }}>
                    {({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Field name='newPost' validate={required}>
                                {({input, meta}) => <div>
                                    <textarea {...input} type="text" placeholder="Type your text"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>}
                            </Field>
                            <button type='submit'>Send</button>
                        </form>
                    )}
                </Form>
            </div>
            <PostElem post={props.profilePage.post}/>
        </div>
    )
});

export default Posts;