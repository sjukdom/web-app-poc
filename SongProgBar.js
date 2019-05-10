import React from 'react';
import { withStyles , LinearProgress} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SongProgBar extends React.Component {

    state = {
      completed: 0,
    };

    componentDidMount() {
      this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {


    }

}

export default withStyles(styles)(SongProgBar);
