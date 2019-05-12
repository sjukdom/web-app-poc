import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, Paper, Typography, createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import ASongList from './ArtistSongList';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#ffffff'
        }
    },
});

const styles = theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'inherit',
  },
  paper: {
    padding: 5,
    background: '#383838',
    textAlign: 'center',
  }
});

class AlbumGridList extends React.Component {

  render () {
    const {classes} = this.props;
    const {searchData} = this.props;

      return (
        <div className={classes.root}>
              {searchData.map(data => (
                    <GridList cellHeight={270} className={classes.gridList} cols={1} spacing={1}>
                    {data.albums.map(album => (
                      <GridListTile key={album.id} cols={1} className={classes.gridListTile}>
                      <Paper className={classes.paper}>
                      <MuiThemeProvider theme={theme}>
                        <Typography color="secondary">
                          {data.nombre + " : " + album.titulo}
                        </Typography>
                      </MuiThemeProvider>
                      </Paper>
                      <ASongList songs={album.canciones}/>
                      </GridListTile>
                    ))}
                    </GridList>
                ))}
        </div>
      );
  }
}

export default withStyles(styles)(AlbumGridList);