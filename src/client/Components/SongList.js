
import React from 'react';
import {withStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 550,
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        overflow: 'scroll',
        maxHeight: 426,
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
        const songs = this.props.songs;
        if (songs.length > 0) {
          return (
            <div className={classes.root}>
                <List className={classes.root}>
                    <ul className={classes.ul}>
                        {songs.map(item => (
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
        } else {
          return (
            <div className={classes.root}>
            
            </div>
          )
        }
    }

}

export default withStyles(styles)(SongList);