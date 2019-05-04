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
    appBar: {
        
    },
})

class Player extends React.Component {

    state = {
        onPlay: 0,
    };

    render() {

        let props = this.props;

        return (
            <div>
                <MuiThemeProvider theme={theme}>
                <AppBar position="relative" color="secondary" className={styles.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                        {props.song_info}
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
            </div>
            
        )
    }

}

export default withStyles(styles)(Player);