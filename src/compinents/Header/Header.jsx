import React from "react";
import s from "../Aside/Aside.module.css";
import {NavLink, Redirect} from "react-router-dom";


const Header = (props) => {

    if (!props.isAuth) {
        return   <Redirect to={'/login'}/>
    }

    return (

        <header className="wrapper__header">
            <a className='logo' href='#'>
                <img/>
            </a>
            <div className={s.loginBlock}>
                {props.login}
                <button onClick={props.getLogoutUser}>Logout</button>
            </div>
        </header>
    )
}

export default Header;