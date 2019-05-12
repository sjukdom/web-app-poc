
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

        state = {
                searchArtist: null,
                songSelected: ""
        }

        searchResult = search => {
                this.setState({searchArtist: search});
                console.log(this.state.searchArtist)
        }

        selectedSong = song => {
                this.setState({songSelected: song});
        }

        render() {
                return(
                        <div>
                                <Grid container
                                      spacing={0}
                                >
                                        <Grid item md={12} lg={12} xl={12}>
                                                <Navbar items={7} search={this.searchResult}/>
                                        </Grid>
                                        <Grid item md={5} lg={5} xl={5}>
                                                <UserContent songSelected={this.selectedSong}/>
                                        </Grid>
                                        <Grid item md lg xl>
                                                <ArtistContent content={this.state.searchArtist} />
                                        </Grid>
                                        <Grid item md={12} lg={12} xl={12}>
                                                <Player song_info={this.state.songSelected}/>
                                        </Grid>
                                </Grid>
                        </div>
                );
        }
}


render(<App />, document.getElementById("app"));
