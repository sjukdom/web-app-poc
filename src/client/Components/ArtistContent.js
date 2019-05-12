
import React from 'react';
import {render} from 'react-dom';
import {withStyles} from '@material-ui/core';
import AlbumGridList from './AlbumGridList';

const wHeight = window.innerHeight;
const artistContentHeight = 0.7*wHeight
console.log(artistContentHeight.toString()+'%')

const styles = {
    root: {
      width: 'auto',
      height: '640px',
      overflow: 'scroll',
      marginTop: '10px'
    },
    abmGridList: {
      bottom: -10
    }
}

var artistNalbum = "Artista: Nombre album";

class ArtistContent extends React.Component {

  state = {
    data: [],
  }

  componentDidMount() {
    fetch('/api/artistas/all', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      this.setState({data});
      console.log(this.state.data);
    })
  }

    render() {

      const {classes} = this.props;
      var {data} = this.state;
      var {content} = this.props;

      if (content === null) {
        return(
          <div className={classes.root} position="relative">
            <AlbumGridList 
              searchData={data} 
              className={classes.abmGridList}
            />
          </div>
        )
      }
      else if(content!=null) {
            return(
              <div className={classes.root} position="relative">
              <AlbumGridList 
                searchData={content} 
                className={classes.abmGridList}
              />
            </div>
          )
        }
      }
}

export default withStyles(styles)(ArtistContent);
