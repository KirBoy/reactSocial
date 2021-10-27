import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getLogoutUser} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} getLogoutUser={this.props.getLogoutUser}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})


export default compose(withRouter, connect(mapStateToProps, {getLogoutUser}))(HeaderContainer);