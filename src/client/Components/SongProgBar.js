import React from 'react';
import { withStyles , LinearProgress} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  progBar: {
      height: '10px',
      width: '100px',
  }
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

    progress = () => {
      const { completed } = this.state;
      if (completed === 100) {
        this.setState({ completed: 0 });
      } else {
        const diff = Math.random() * 10;
        this.setState({ completed: Math.min(completed + diff, 100) });
      }
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
               <LinearProgress variant="determinate" value={this.state.completed} className={classes.progBar}/>
            </div>
        )
    }

}

export default withStyles(styles)(SongProgBar);
