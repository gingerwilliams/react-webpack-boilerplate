import React from "react";
import PropTypes from "prop-types";

function Manager(props){
    return <span>{props.name}</span>;
}

//defined that the name prop is of type string and that it’s mandatory.
//If you pass something that is not a string, or do not provide anything for this prop, 
//you will get an error in your browser’s console.
Manager.propTypes = {
    name: PropTypes.string.isRequired
};

export default Manager;

