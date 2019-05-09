import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    withStyles,
    MuiThemeProvider,
    createMuiTheme,
    LinearProgress
  } from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {PlayCircleFilledOutlined} from '@material-ui/icons';



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
      top: 15
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
                        <Typography variant="title" color="inherit">
                        {song_info}
                        </Typography>
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
            </div>

        )
    }

}

export default withStyles(styles)(Player);
