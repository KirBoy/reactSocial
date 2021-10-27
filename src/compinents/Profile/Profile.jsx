import React from "react";
import PostsContainer from "./PostsContainer";
import ProfileContent from "./Profile-contnet";
import Preloader from "../../common/Preloader";


const Profile = (props) => {

    if (!props.profile) {
        return <div>сасаить</div>
    }

    return (
        <div>
            {props.isLoading ? <Preloader/> : <ProfileContent upDateProfile={props.upDateProfile} profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} />}
            <PostsContainer/>
        </div>

    )
}

export default Profile;