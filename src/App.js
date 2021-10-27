import './App.css';
import Aside from "./compinents/Aside/Aside";
import {BrowserRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import s from './compinents/Aside/Aside.module.css'
import DialogsContainer from "./compinents/Dialogs/DialogsContainer";
import HeaderContainer from "./compinents/Header/HeaderContainer";
import React from "react";
import Login from "./compinents/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";

const ProfileContainer = React.lazy(() => import('./compinents/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./compinents/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <React.Suspense fallback={<Preloader/>}>
                <BrowserRouter>
                    <div className='container'>
                        <div className="wrapper">
                            <HeaderContainer/>
                            <div className='wrapper__inner'>
                                <Aside/>
                                <div className={s.wrapper__content}>
                                    <Switch>
                                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                        <Route path='/users' render={() => <UsersContainer/>}/>
                                        <Route path='/login' render={() => <Login/>}/>
                                        <Redirect from="/" to="/profile" />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </React.Suspense>
        );
    }
}

let mapStateToProps = (state) => (
    {
        initialized: state.app.initialized
    }
)

export default connect(mapStateToProps, {initializeApp})(App);



