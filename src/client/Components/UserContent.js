
import React from 'react';
import {
        AppBar,
        Tabs,
        Tab,
        Typography,
        withStyles,
        MuiThemeProvider,
        createMuiTheme} from '@material-ui/core';
import SongList from './SongList';

const styles = theme => ({
    root: {
        width: 'auto',
        height: '595px'
    },
    AppBar: {
        width: 'auto',
        bottom: -10
    }
});

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#1db954'
        },
        primary: {
          main: '#383838',
        }
    },
  });

class UserContent extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <AppBar position='relative' color='primary' className={classes.AppBar}>
                        <Tabs variant='fullWidth' value={value}  onChange={this.handleChange}>
                        <Tab label="Artista" />
                        <Tab label="Album" />
                        <Tab label="Cancion" />
                        </Tabs>
                    </AppBar>
                </MuiThemeProvider>
                {
                   value === 0 && <SongList songs={Array.from(Array(15).keys())}/>
                }
                {
                    value === 1 && <SongList songs={Array.from(Array(15).keys())}/>
                }
                {
                    value === 2 && <SongList songs={Array.from(Array(5).keys())}/>
                }
            </div>
            )
    }
}

export default withStyles(styles)(UserContent);
