import React from "react";
import style from './Users.module.css'
import avatar from '../../assets/avatar.png'
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";


const Users = (props) => {

    return (<div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChange={props.onPageChange} currentPage={props.currentPage}/>
            {props.users.map(u => <div key={u.id} className={style.usersItem}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        {(u.photos.small == null) ? <img className={style.usersAvatar} src={avatar}/> :
                            <img className={style.usersAvatar} src={u.photos.small}/>}
                    </NavLink>

                    {u.followed ?

                        <button onClick={() => props.getFollow(false, u.id)}
                                className={style.usersBtn}
                                disabled={props.disabledBtn.some(id => id === u.id)}>UnFollow</button> :
                        <button onClick={() => props.getFollow(true, u.id)}
                                className={style.usersBtn}
                                disabled={props.disabledBtn.some(id => id === u.id)}>Follow</button>}
                </div>
                <div>
                    <h3>{u.name}</h3>
                    <cite>{u.status}</cite>
                    <span>{'u.location.city'}</span>
                    <span>{'u.location.country'}</span>
                </div>
            </div>)}
        </div>

    )


}


export default Users;