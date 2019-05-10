import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, Paper, Typography, createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import SongList from './SongList';

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
    //bottom: -10
  },
  gridListTile: {
    //bottom: -10
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
          <GridList cellHeight={270} className={classes.gridList} spacing={1}>
              {searchData.map(album => (
                  <GridListTile key={album.id} cols={2} className={classes.gridListTile}>
                    <Paper className={classes.paper}>
                    <MuiThemeProvider theme={theme}>
                      <Typography color="secondary">
                        Artista: Nombre album
                      </Typography>
                    </MuiThemeProvider>
                    </Paper>
                    <SongList songs={Array.from(Array(11).keys())}/>
                  </GridListTile>
                ))}
          </GridList>
        </div>
      );
  }
}

export default withStyles(styles)(AlbumGridList);
