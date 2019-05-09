
import React from 'react';
import {render} from 'react-dom';
import {Paper, withStyles} from '@material-ui/core';

const styles = {
    root: {
      width: 'auto',
      height: '640px'
    },
    Paper: {
            padding: 220,
            marginTop: 10,
            marginBottom: 10,
    },
}

class UserContent extends React.Component {
    render() {

      const {classes} = this.props;

            return(
                    <div className={classes.root}>
                        <Paper className={classes.Paper}>
                            Right pane
                        </Paper>
                    </div>
            );
    }
}

export default withStyles(styles)(UserContent);
