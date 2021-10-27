import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    savePhoto,
    setProfilePage,
    setProfileStatus,
    upDateProfile,
    updateProfileStatus
} from "../../redux/posts-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
   
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.setProfilePage(userId);
        this.props.setProfileStatus(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.userId;
            }
            this.props.setProfilePage(userId);
            this.props.setProfileStatus(userId);
        }

    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         isOwner={!this.props.match.params.userId}/>)
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
    status: state.profilePage.status,
    userId: state.auth.userId
})


export default compose(connect(mapStateToProps, {setProfilePage, setProfileStatus, updateProfileStatus, savePhoto, upDateProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer)