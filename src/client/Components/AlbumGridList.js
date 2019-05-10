import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, Paper} from '@material-ui/core';
import SongList from './SongList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'inherit',
  },
});

class AlbumGridList extends React.Component {

  render () {
    const {classes} = this.props;
    const {searchData} = this.props;

      return (
        <div className={classes.root}>
          <GridList cellHeight={212} className={classes.gridList} spacing={1}>
              {searchData.map(album => (
                  <GridListTile key={album.id}>
                    <SongList songs={Array.from(Array(10).keys())}/>
                  </GridListTile>
                ))}
          </GridList>
        </div>
      );
  }

}

// render () {
//   const {classes} = this.props;
//   const {searchData} = this.props;
//
//     return (
//       <div className={classes.root}>
//         <GridList cellHeight={160} className={classes.gridList} cols={1}>
//           {searchData.map(album => (
//             <GridListTile key={album.id} cols={1}>
//             reer
//             </GridListTile>
//           ))}
//         </GridList>
//       </div>
//     );
// }

export default withStyles(styles)(AlbumGridList);
