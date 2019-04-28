
import React from 'react';
import {render} from 'react-dom';
import {Paper} from '@material-ui/core';

const style = {
    Paper: {
            padding: 230, 
            marginTop: 10, 
            marginBottom: 10,
            
    },
}

class UserContent extends React.Component {
    render() {
            return(
                    <div>
                        <Paper style={style.Paper}>
                            Right pane
                        </Paper>
                    </div>
            );
    }
}

export default UserContent;