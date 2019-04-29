
import React from 'react';
import {Paper, 
        AppBar, 
        Tabs, 
        Tab, 
        Typography, 
        withStyles, 
        MuiThemeProvider, 
        createMuiTheme} from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    // root: {
    //   width: '100%',
    //   maxWidth: 500,
    //   backgroundColor: theme.palette.background.paper,
    // },
    root: {
        width: '100%',
        maxWidth: 480,
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        overflow: 'scroll',
        maxHeight: 440,
      },
      listSection: {
        backgroundColor: 'inherit',
      },
      ul: {
        backgroundColor: 'inherit',
        padding: 0,
      },
});
        
class SongList extends React.Component {
    state = {
        selectedIndex: 1,
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };

    render () {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <List className={classes.root}>
                    <ul className={classes.ul}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
                        <ListItem button 
                            key={`item-${item}`}
                            selected={this.state.selectedIndex === item}
                            onClick={event => this.handleListItemClick(event, item)}>
                            <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                        ))}
                    </ul>
                </List>
            </div>
        )
    }

}

{/* <List className={classes.root} subheader={<li />}>
{[0, 1, 2, 3, 4].map(sectionId => (
    <li key={`section-${sectionId}`} className={classes.listSection}>
    <ul className={classes.ul}>
        <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
        {[0, 1, 2].map(item => (
        <ListItem key={`item-${sectionId}-${item}`}>
            <ListItemText primary={`Item ${item}`} />
        </ListItem>
        ))}
    </ul>
    </li>
))}
</List> */}


{/* <List component="nav">
<ListItem
  button
  selected={this.state.selectedIndex === 2}
  onClick={event => this.handleListItemClick(event, 2)}
>
  <ListItemText primary="Trash" />
</ListItem>
<ListItem
  button
  selected={this.state.selectedIndex === 3}
  onClick={event => this.handleListItemClick(event, 3)}
>
  <ListItemText primary="Spam" />
</ListItem>
</List> */}

export default withStyles(styles)(SongList);