
import React from 'react';
import {
        AppBar,
        Tabs,
        Tab,
        Typography,
        withStyles,
        MuiThemeProvider,
        createMuiTheme} from '@material-ui/core';
import SongList from './SongList';

const styles = theme => ({
    root: {
        width: 'auto',
        height: '595px'
    },
    AppBar: {
        width: 'auto',
        bottom: -10
    }
});

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#1db954'
        },
        primary: {
          main: '#383838',
        }
    },
  });

const songs = [
    {
        nombre: "Venom",
        titulo: "Welcome to Hell",
        album: "Welcome to Hell"
    },
    {
        nombre: "Venom",
        titulo: "Buried Alive",
        album: "Black Metal"
    },
    {
        nombre: "Kase.O",
        titulo: "Javat y Kamel",
        album: "Jazz Magnetism"
    },
    {
        nombre: "Kase.O",
        titulo: "Basureta",
        album: "El Circulo"
    },
    {
        nombre: "Nach",
        titulo: "Ser o no ser",
        album: "Poesia Difusa"
    },
    {
        nombre: "Nach",
        titulo: "El camino del guerrero",
        album: "Ars Magna"
    },
    {
        nombre: "Sho-Hai",
        titulo: "Polterhate",
        ambum: "La ultima funcion"
    },
    {
        nombre: "Sho-Hai",
        titulo: "De paso",
        album: "Doble Vida"
    },
    {
        nombre: "Sho-Hai",
        titulo: "Deep Deli",
        album: "La ultima funcion"
    },
    {
        nombre: "Crystal Castles",
        titulo: "Vietnam",
        album: "Crystal Castles II"
    },
    {
        nombre: "Crystal Castles",
        titulo: "Baptism",
        album: "Crystal Castles II"
    },
    {
        nombre: "Crystal Castles",
        titulo: "Not in Love",
        album: "Crystal Castles II"
    },
    {
        nombre: "Crystal Castles",
        titulo: "Crimewave",
        album: "Crystal Castles I"
    },
    {
        nombre: "Crystal Castles",
        titulo: "Magic Spells",
        album: "Crystal Castles I"
    },
];

class UserContent extends React.Component {

    state = {
        value: 0,
        song: ""
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    songSelected = (song) => {
        this.setState({song: song});
        this.props.songSelected(song);
    }

    render() {

        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <AppBar position='relative' color='primary' className={classes.AppBar}>
                        <Tabs variant='fullWidth' value={value}  onChange={this.handleChange}>
                        <Tab label="Artista" />
                        <Tab label="Album" />
                        <Tab label="Cancion" />
                        </Tabs>
                    </AppBar>
                </MuiThemeProvider>
                {
                   value === 0 && <SongList selectedSong={this.songSelected} songs={songs.sort(function(a, b) {
                    if (a.nombre < b.nombre) {return -1}
                    if (a.nombre > b.nombre) {return 1}
                    return 0;
                }).map(eli => {
                    return (eli.nombre + " : " + eli.titulo)
                })}/>
                }
                {
                    value === 1 && <SongList selectedSong={this.songSelected} songs={songs.sort(function(a, b) {
                        if (a.album < b.album) {return -1}
                        if (a.album > b.album) {return 1}
                        return 0;
                    }).map(eli => {
                        return (eli.nombre + " : " + eli.titulo)
                    })}/>
                }
                {
                    value === 2 && <SongList selectedSong={this.songSelected} songs={songs.sort(function(a, b) {
                        if (a.titulo < b.titulo) {return -1}
                        if (a.titulo > b.titulo) {return 1}
                        return 0;
                    }).map(eli => {
                        return (eli.nombre + " : " + eli.titulo)
                    })}/>
                }
            </div>
            )
    }
}

export default withStyles(styles)(UserContent);
