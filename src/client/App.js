
import React from 'react';
import {render} from 'react-dom';
import Navbar from './Components/Navbar';
import Player from './Components/Player';
import UserContent from './Components/UserContent';
import ArtistContent from './Components/ArtistContent';
import {withStyles,
        Grid, 
        Paper} from '@material-ui/core';

class App extends React.Component {
        render() {
                return(
                        <div>
                                <Grid container spacing={8}> 
                                        <Grid item xs={12}>
                                                <Navbar items={10} />
                                        </Grid>
                                        <Grid item xs={4.5}>
                                                <UserContent/>
                                        </Grid>
                                        <Grid item xs>
                                                <ArtistContent/>
                                        </Grid>
                                        <Grid item xs={12}>
                                                <Player song_info={'Reproductor'}/>
                                        </Grid>
                                </Grid>
                        </div>
                );
        }
}


render(<App />, document.getElementById("app"));