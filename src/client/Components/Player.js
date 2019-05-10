import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    withStyles,
    MuiThemeProvider,
    createMuiTheme,
    LinearProgress,
    IconButton
  } from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {PlayCircleOutline,
        PauseCircleOutLine,
        Pause,
        SkipNext,
        SkipPrevious} from '@material-ui/icons';



const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#383838'
        }
    },
});

const styles = theme => ({
    root: {

    },
    appBar: {
      top: 5
    },
})

class Player extends React.Component {

    state = {
        onPlay: 0,
        volume: 0,
    };

    handleVolumeChange = event => {
        this.setState({
            volume: event.target.value
        });
        console.log(event.target.value);
    }

    render() {

        var {classes} = this.props;
        var {song_info} = this.props;
        var {onPlay} = this.state;
        var {volume} = this.state;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                <AppBar position="relative" color="secondary" className={classes.appBar}>
                    <Toolbar>
                        <div className={classes.volumeSong}>
                            <input id="vol-control" type="range" min="0" max="100" step="1"
                                onChange={this.handleVolumeChange}>
                            </input>
                        </div>
                        <div className={classes.buttons}>
                        <IconButton>
                            <SkipPrevious/>
                        </IconButton>
                        <IconButton>
                            <PlayCircleOutline/>
                        </IconButton>
                        <IconButton>
                            <SkipNext/>
                        </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
            </div>

        )
    }

}

// <Typography variant="title" color="inherit">
// {song_info}
// </Typography>

export default withStyles(styles)(Player);
