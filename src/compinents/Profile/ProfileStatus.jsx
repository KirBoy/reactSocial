import React from "react";
import style from './Post.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })

        this.props.updateProfileStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (<>
                {!this.state.editMode && <div>
                    <span className={style.profileInput}
                          onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div><input className={style.profileInput} onChange={this.onChangeStatus}
                            onBlur={this.deactivateEditMode} autoFocus={true}
                            value={this.state.status}/></div>}
            </>
        )
    }
}

export default ProfileStatus