import {Form, Field} from 'react-final-form'
import {connect} from "react-redux";
import {getLoginUser} from "../../redux/auth-reducer";
import {required} from "../../Validators/validator-textarea";
import style from './Login.module.css'
import {Redirect} from "react-router-dom";


const LoginPage = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <>
        <h3>Login</h3>
        <LoginForm getLoginUser={props.getLoginUser} captcha={props.captcha}/>
    </>
}


const LoginForm = (props) => {

    return (
        <Form
            onSubmit={values => props.getLoginUser(values.email, values.password, values.rememberMe, values.captcha)}
            validate={values => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                // if (!values.captcha) {
                //     errors.captcha = 'Required'
                // }
                return errors
            }}
            render={({
                         submitError,
                         handleSubmit,
                         submitting,
                     }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email">
                        {({input, meta}) => (
                            <div>
                                <label>Username</label>
                                <input {...input} type="text" placeholder="email"/>
                                {(meta.error || meta.submitError) && meta.touched && (
                                    <span>{meta.error || meta.submitError}</span>
                                )}
                            </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({input, meta}) => (
                            <div>
                                <label>Password</label>
                                <input {...input} type="text" placeholder="Password"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="rememberMe" type="checkbox">
                        {({input, meta}) => (
                            <div>
                                <label>rememberMe</label>
                                <input {...input} type="checkbox"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    {props.captcha &&
                    <Field name="captcha">
                        {({input, meta}) => (
                            <div>
                                <div><img src={props.captcha}/></div>
                                <input {...input} type="text"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>}


                    {submitError && <div className="error">{submitError}</div>}
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Log In
                        </button>

                    </div>

                </form>
            )}
        />

    )
}

const Input = (props) => {
    return (
        <Field name={props.name} component='input' type='text' validate={required} placeholder={props.name}>
            {({input, meta, placeholder}) => (
                <div>
                    <input className={meta.error && meta.touched && style.error} type='text' placeholder={placeholder}
                           {...input}/>
                    {meta.error && meta.touched && <span className={style.error}>{meta.error}</span>}
                </div>
            )}
        </Field>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

// const LoginForm = (props) => {
//     const onSubmit = values => {
//       props.log_in(values.login, values.password, values.rememberMe)
//     }
//
//     return (
//         <Form onSubmit={}
//               render={({handleSubmit, submitError}) => (
//                   <form onSubmit={handleSubmit}>
//                       <div>
//                           <Field name="login" validate={required}>
//                               {(props) => {
//                                   return (
//                                       <div>
//                                           <input placeholder="Login" type="text" {...props.input} />
//                                           {props.meta.error && props.meta.touched &&
//                                           <span className={style.error}> {props.meta.error} </span>}
//                                       </div>
//                                   )
//                               }
//                               }
//                           </Field>
//                       </div>
//                       <div className={style.password}>
//                           <Field name="password" validate={required}>
//                               {(props) => {
//                                   return (
//                                       <div>
//                                           <input placeholder="Password" type="text" {...props.input} />
//                                           {props.meta.error && props.meta.touched &&
//                                           <span className={style.error}> {props.meta.error} </span>}
//                                       </div>
//                                   )
//                               }
//                               }
//                           </Field>
//                       </div>
//                       <div>
//                           <Field name="rememberMe">
//                               {(props) => (<input type="checkbox" {...props.input} />)}
//                           </Field>
//                       </div>
//                       {submitError && <div className={style.formError}> {submitError} </div>}
//                       <button> Login</button>
//                   </form>
//               )}
//         />F
//     );
// };


const Login = connect(mapStateToProps, {getLoginUser})(LoginPage);

export default Login;

