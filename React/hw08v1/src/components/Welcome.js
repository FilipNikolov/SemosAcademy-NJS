import React from "react";
import { connect } from "react-redux";
import { Welcome } from "../actions/WelcomeAction";

class Welcome extends React.Component {

    componentDidMoount() {
        this.props.getWelcomen();
    }

    render() {
        return (
            <div id="welcomen">
                <h2>{this.props.welcomen}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        welcomen: state.WelcomenReducer.welcomen
    }
}

const mapDispatch = (dispatch) => {
    return {
        getWelcomen: () => {
            dispatch(Welcome())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)