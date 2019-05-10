
import React from 'react';
import {render} from 'react-dom';
import {Paper, withStyles} from '@material-ui/core';
import AlbumGridList from './AlbumGridList';

const wHeight = window.innerHeight;
const artistContentHeight = 0.7*wHeight
console.log(artistContentHeight.toString()+'%')

const styles = {
    root: {
      width: 'auto',
      height: '640px',
      overflow: 'scroll',
      top: 10
    },
    Paper: {
            padding: 220,
            marginTop: 10,
            marginBottom: 10,
            heigh: '100%'
    },
}

var searchData = [
  {
    id: 0,
    data: 'aue'
  },
  {
    id: 1,
    data:'2323'
  },
  {
    id: 2,
    data:'22'
  },
  {
    id: 3,
    data: '232'
  }
]

class ArtistContent extends React.Component {
    render() {

      const {classes} = this.props;

            return(
                    <div className={classes.root}>
                      <AlbumGridList searchData={searchData}/>
                    </div>
            );
    }
}

export default withStyles(styles)(ArtistContent);
