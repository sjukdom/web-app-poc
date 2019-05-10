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
    };

    render() {

        var {classes} = this.props;
        var {song_info} = this.props;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                <AppBar position="relative" color="secondary" className={classes.appBar}>
                    <Toolbar>
                        <IconButton>
                            <SkipPrevious/>
                        </IconButton>
                        <IconButton>
                            <PlayCircleOutline/>
                        </IconButton>
                        <IconButton>
                            <SkipNext/>
                        </IconButton>
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
