
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

var searchData = [
  {
    id: 0,
    data: 'aue',
    nombreArtista: 'Kase.O',
    nombreAlbum: 'El circulo',
    canciones: [
      'Intro (El Círculo)',
      'Esto no para',
      'Yemen',
      'Triste',
      'Guapo tarde',
      'Viejos ciegos (con Xhelazz y Sho-Hai)',
      'Interludio - Quieren copiar',
      'Pavos reales (con Hermano L, Shabu One Shant y McKlopedia)',
      'Mitad y mitad (con Najwa)',
      'Mazas y catapultas',
      'Amor sin cláusulas',
      'No sé que voy a hacer (Booty song)',
      'Interludio - Risoterapia',
      'Rap superdotado (con Violadores del verso)',
      'Repartiendo arte',
      'Basureta (Tiempos raros)',
      'Outro'
    ]
  },
  {
    id: 1,
    data:'2323',
    nombreArtista: 'Iron Maiden',
    nombreAlbum: 'Powerslave',
    canciones: [
      'Intro (El Círculo)',
      'Esto no para',
      'Yemen',
      'Triste',
      'Guapo tarde',
      'Viejos ciegos (con Xhelazz y Sho-Hai)',
      'Interludio - Quieren copiar',
      'Pavos reales (con Hermano L, Shabu One Shant y McKlopedia)',
      'Mitad y mitad (con Najwa)',
      'Mazas y catapultas',
      'Amor sin cláusulas',
      'No sé que voy a hacer (Booty song)',
      'Interludio - Risoterapia',
      'Rap superdotado (con Violadores del verso)',
      'Repartiendo arte',
      'Basureta (Tiempos raros)',
      'Outro'
    ]
  },
  {
    id: 2,
    data:'22',
    nombreArtista: 'Venom',
    nombreAlbum: 'Welcome to hell',
    canciones: [
      'Intro (El Círculo)',
      'Esto no para',
      'Yemen',
      'Triste',
      'Guapo tarde',
      'Viejos ciegos (con Xhelazz y Sho-Hai)',
      'Interludio - Quieren copiar',
      'Pavos reales (con Hermano L, Shabu One Shant y McKlopedia)',
      'Mitad y mitad (con Najwa)',
      'Mazas y catapultas',
      'Amor sin cláusulas',
      'No sé que voy a hacer (Booty song)',
      'Interludio - Risoterapia',
      'Rap superdotado (con Violadores del verso)',
      'Repartiendo arte',
      'Basureta (Tiempos raros)',
      'Outro'
    ]
  },
  {
    id: 3,
    data: '232',
    nombreArtista: 'Venom',
    nombreAlbum: 'Black metal',
    canciones: [
      'Intro (El Círculo)',
      'Esto no para',
      'Yemen',
      'Triste',
      'Guapo tarde',
      'Viejos ciegos (con Xhelazz y Sho-Hai)',
      'Interludio - Quieren copiar',
      'Pavos reales (con Hermano L, Shabu One Shant y McKlopedia)',
      'Mitad y mitad (con Najwa)',
      'Mazas y catapultas',
      'Amor sin cláusulas',
      'No sé que voy a hacer (Booty song)',
      'Interludio - Risoterapia',
      'Rap superdotado (con Violadores del verso)',
      'Repartiendo arte',
      'Basureta (Tiempos raros)',
      'Outro'
    ]
  }
]

var artistNalbum = "Artista: Nombre album";

class ArtistContent extends React.Component {
    render() {

      const {classes} = this.props;

            return(
                    <div className={classes.root} position="relative">
                      <AlbumGridList 
                        searchData={searchData} 
                        className={classes.abmGridList}
                      />
                    </div>
            );
    }
}

export default withStyles(styles)(ArtistContent);
