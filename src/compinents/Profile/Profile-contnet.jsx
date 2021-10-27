import ProfileStatus from './ProfileStatus'
import avatar from '../../assets/avatar.png'
import {useState} from "react";
import ProfileFormData from "./ProfileFormData";

const ProfileContent = (props) => {

    const updateEditMode = (arg) => {
        setEditMode(arg);
    }

    const onSavePhoto = (e) => {
        props.savePhoto(e.target.files[0])
    }

    let [editMode, setEditMode] = useState(false);

    return (
        <div className='wrapper__profile'>

            <img className='wrapper__avatar'
                 src={props.profile.photos.large || avatar}/>

            <ul className='wrapper__data'>
                <li className='wrapper__name'>
                    <h3 className='name'>{props.profile.fullName}</h3>
                </li>
                <li><ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/></li>

                {editMode ? <ProfileFormData isOwner={props.isOwner} onSavePhoto={onSavePhoto} initialValues={props.profile.contacts} profile={props.profile} useState={updateEditMode} upDateProfile={props.upDateProfile}/> :
                    <ProfileData profile={props.profile}  setEditMode={setEditMode}/>}
            </ul>
        </div>)

}

const ProfileData = (props) => {
    return (
        <>
            <li className='wrapper__information'> Looking for a
                job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</li>
            <li className='wrapper__information'>{props.profile.aboutMe}</li>
            <li className='wrapper__information'>{props.profile.lookingForAJobDescription}</li>
            {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} title={key} value={props.profile.contacts[key]}/>
            })}
            <button onClick={() => props.setEditMode(true)}>Edit</button>
        </>
    )
}

const Contacts = (props) => {

    return (
        <li>
            <span>{props.title}</span>
            <span>{props.value}</span>
        </li>
    )
}


export default ProfileContent;