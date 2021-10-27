import {connect} from "react-redux";
import {
    followAC, getFollow, getUsersThunkCreator,
    statusBtn,
    unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getDisabledBtn,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSuperSelector
} from "../../redux/users-selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChange(p) {
        this.props.getUsersThunkCreator(p, this.props.pageSize);
    }

    render() {

        console.log(this.props.users)
        return <div>{this.props.isLoading ? <Preloader/> :
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChange={this.onPageChange.bind(this)}
                   users={this.props.users} disabledBtn={this.props.disabledBtn}
                   getFollow={this.props.getFollow} fake={this.props.fake}/>
        } </div>
    }


}

const mapStateToProps = (state) => {
    console.log('mapStateToProps')
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        disabledBtn: getDisabledBtn(state),
        fake: state.usersPage.fake
    }
}


export default compose(connect(mapStateToProps, { getUsersThunkCreator, getFollow}),
    withAuthRedirect)(UsersContainer)




