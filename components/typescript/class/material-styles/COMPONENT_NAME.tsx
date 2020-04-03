import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';

import styles from "./COMPONENT_NAME.styles";

class COMPONENT_NAME extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>          
            </div>
        );
    }
}

export default withStyles(styles)(COMPONENT_NAME);