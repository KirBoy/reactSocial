import s from './Aside.module.css'
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className={s.wrapper__aside}>
            <ul className='wrapper__list'>
                <li className={s.wrapper__item}>
                    <NavLink className={s.wrapperLink} activeClassName={s.active} to='/profile'>Profile</NavLink>
                </li>
                <li className={s.wrapper__item}>
                    <NavLink className={s.wrapperLink} activeClassName={s.active} to='/dialogs'>Messages</NavLink>
                </li>
                <li className={s.wrapper__item}>
                    <NavLink className={s.wrapperLink} activeClassName={s.active} to='/users'>Users</NavLink>
                </li>
                <li className={s.wrapper__item}>
                    <a className='wrapper__link'>News</a>
                </li>
                <li className={s.wrapper__item}>
                    <a className='wrapper__link'>Music</a>
                </li>
                <li className={s.wrapper__item}>
                    <a className='wrapper__link'>Settings</a>
                </li>
            </ul>

            <div className={s['wrapper__friends']}>
                <h2 className='wrapper__title'>Friends</h2>
                <ul className={s['a-123_123123-sdsfdf134']}>
                    <li className='wrapper__friend'>
                        <a className={`${s.a} ${s.b}`}>
                            <img className='wrapper__ava'/>
                            <span className='wrapper__friend-name'>Andrew</span>
                        </a>
                    </li>
                    <li className='wrapper__friend'>
                        <a className={s['wrapper__friend-link']}>
                            <img className='wrapper__ava'/>
                            <span className='wrapper__friend-name'>Sasha</span>
                        </a>
                    </li>
                    <li className='wrapper__friend'>
                        <a className={s['wrapper__friend-link']}>
                            <img className='wrapper__ava'/>
                            <span className='wrapper__friend-name'>Sveta</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside;