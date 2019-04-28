
import React from 'react';
import {render} from 'react-dom';
import {Paper, AppBar, Tabs, Tab, Typography, withStyles} from '@material-ui/core';

const style = {
    Paper: {
            padding: 230, 
            marginTop: 10, 
            marginBottom: 10
    },
}

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: 480,
    },
});

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

class UserContent extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { classes } = this.props;
        const {value} = this.state;

            return(
                    <div >
                        <Paper className={classes.root}>
                            <AppBar position='relative' >
                                <Tabs value={value}  onChange={this.handleChange}>
                                    <Tab label="Artista" />
                                    <Tab label="Album" />
                                    <Tab label="Cancion" />
                                </Tabs>
                            </AppBar>
                            {value === 0 && <TabContainer>Item One</TabContainer>}
                            {value === 1 && <TabContainer>Item Two</TabContainer>}
                            {value === 2 && <TabContainer>Item Three</TabContainer>}
                        </Paper>
                    </div>
            );
    }
}

export default withStyles(styles)(UserContent);