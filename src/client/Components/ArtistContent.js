
import React from 'react';
import {render} from 'react-dom';
import {Paper, withStyles} from '@material-ui/core';
import AlbumGridList from './AlbumGridList';

const styles = {
    root: {
      width: 'auto',
      height: '640px',
      overflow: 'scroll'
    },
    Paper: {
            padding: 220,
            marginTop: 10,
            marginBottom: 10,
            heigh: '100%'
    },
}

// class ArtistContent extends React.Component {
//     render() {
//
//       const {classes} = this.props;
//
//             return(
//                     <div className={classes.root}>
//                         <Paper className={classes.Paper}>
//                             Right pane
//                         </Paper>
//                     </div>
//             );
//     }
// }

class ArtistContent extends React.Component {
    render() {

      const {classes} = this.props;

            return(
                    <div className={classes.root}>
                      <AlbumGridList searchData={[{id:0, data: 'aue'}, {id: 1, data:'2323'}, {id:2,data:'22'},{id:3,data:'232'}]}/>
                    </div>
            );
    }
}

export default withStyles(styles)(ArtistContent);
