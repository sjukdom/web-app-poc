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
        Pause,
        SkipNext,
        SkipPrevious} from '@material-ui/icons';
import SongProgBar from './SongProgBar';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#383838',
        },
        primary: {
            //main: '#e00808',
            main: '#1db954'
        }
    },
});

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    appBar: {
      top: 5,
    },
    volumeSong: {
        marginRight:20,
        marginLeft: 20,
    },
    songName: {
        width: '350px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: 15,
        marginLeft: 15,
        overflow: 'hidden'
    },
    buttons: {
        textAlign: 'center',
        marginRight:20,
        marginLeft: 20,
    },
    progBar: {
        float: 'right',
        marginRight:20,
        marginLeft: 20
    },
})

class Player extends React.Component {

    state = {
        onPlay: true,
        volume: 0,
    };

    handleVolumeChange = event => {
        this.setState({
            volume: event.target.value
        });
        console.log(event.target.value);
    }

    handlePlayButton = event => {
        this.setState({
            onPlay: !this.state.onPlay
        })
        console.log(this.state.onPlay);
    }

    render() {

        var {classes} = this.props;
        var {song_info} = this.props;
        var {onPlay} = this.state;
        var {volume} = this.state;

        if (onPlay === true) {
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
                            <IconButton color="primary">
                                <SkipPrevious/>
                            </IconButton>
                            <IconButton color="primary" onClick={this.handlePlayButton}>
                                <PlayCircleOutline/>
                            </IconButton>
                            <IconButton color="primary">
                                <SkipNext/>
                            </IconButton>
                            </div>
                            <div className={classes.songName}>
                                <Typography variant="title" color="inherit">
                                {song_info}
                                </Typography>
                            </div>
                            <div className = {classes.grow}/>
                            <div className={classes.progBar}>
                            <SongProgBar playingM={!onPlay}/>
                            </div>
                        </Toolbar>
                    </AppBar>
                    </MuiThemeProvider>
                </div>
            )
        } else {
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
                            <IconButton color="primary">
                                <SkipPrevious/>
                            </IconButton>
                            <IconButton color="primary" onClick={this.handlePlayButton}>
                                <Pause/>
                            </IconButton>
                            <IconButton color="primary">
                                <SkipNext/>
                            </IconButton>
                            </div>
                            <div className={classes.songName}>
                                <Typography variant="title" color="inherit">
                                {song_info}
                                </Typography>
                            </div>
                            <div className = {classes.grow}/>
                            <div className={classes.progBar}>
                                <SongProgBar playingM={!onPlay}/>
                            </div>
                        </Toolbar>
                    </AppBar>
                    </MuiThemeProvider>
                </div>
            )
        }
    }

}

export default withStyles(styles)(Player);
