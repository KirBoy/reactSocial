import avatar from '../../assets/avatar.png'
import style from './Post.module.css'
const PostElemZ = (props) => {
    return (<li className={style.postItem}>
            <img className={style.postAvatar}  src={avatar}/>
            <p>{props.post}</p>
        </li>
    )
}

const PostElem = (props) => {

    let postElement = props.post.map(item => <PostElemZ post={item.post}/>);

    return (

        <ul className={style.post}>
            {postElement}
        </ul>

    )
}

export default PostElem;