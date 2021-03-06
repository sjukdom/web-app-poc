
import React from 'react';
import {withStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        width: 'auto',
        height: 'inherit',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'scroll',
      },
      ul: {
        backgroundColor: 'inherit',
        padding: 0,
        margin: 0,
      },
      li: {
        backgroundColor: 'inherit',
        margin:0,
      }
});

class SongList extends React.Component {
    state = {
        selectedIndex: ""
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
        this.props.selectedSong(index)
        console.log(index)
    };

    render () {
        const { classes } = this.props;
        const songs = this.props.songs;
        if (songs.length > 0) {
          return (
            <div className={classes.root}>
                <List>
                    <ul className={classes.ul}>
                        {songs.map(item => (
                        <ListItem button
                            key={`item-${item}`}
                            selected={this.state.selectedIndex === item}
                            onClick={event => this.handleListItemClick(event, item)}
                            className={classes.li}
                            divider>
                            <ListItemText primary={`${item}`} />
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
