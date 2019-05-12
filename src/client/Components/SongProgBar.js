import React from 'react';
import { withStyles , LinearProgress} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  progBar: {
      height: '10px',
      width: '400px',
  }
};

class SongProgBar extends React.Component {

    state = {
      completed: 0,
      playing: true
    };

    componentDidMount() {
      this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    progress = () => {
      const { completed } = this.state;
      const playingM = this.props.playingM;
      if (completed === 100) {
        this.setState({ completed: 0 });
      } 
      else if (completed != 100 && playingM === true) {
        const diff = 1;
        this.setState({ completed: Math.min(completed + diff, 100) });
      }
      else {
        this.setState({completed: completed});
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
