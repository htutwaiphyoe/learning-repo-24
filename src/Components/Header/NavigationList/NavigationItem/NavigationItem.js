import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./NavigationItem.module.css";
import * as actionCreators from "../../../../store/actions";
const Auth = (props) => {
    const clickHandler = () => {
        if (props.fetchRandomPhoto) {
            props.clearRandomPhoto();
            props.fetchRandomPhoto();
        }
    };
    return (
        <div
            className={`${classes.NavigationItem} ${props.show ? classes.show : classes.show1}`}
            onClick={clickHandler}
        >
            <Link to={props.route}>{props.type}</Link>
        </div>
    );
};
const mapDispatchToProps = {
    clearRandomPhoto: actionCreators.clearRandomPhoto,
};
export default connect(null, mapDispatchToProps)(Auth);
