import React from 'react';
import ContextForm from './ContextForm';
import { Typography } from '@material-ui/core';



class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            context:{
                token: "",
                organization: "",
                project: ""
            }
        }

        this.setNewState = this.setNewState.bind(this);
    }

    setNewState(subState){
        const newState = subState;
        this.setState({...newState})
    }


    render(){
        return(
            <React.Fragment>
                <Typography>Welcome! This is the entry for helper 2.0!</Typography>
                <ContextForm context={this.state.context} updateValues={this.setNewState} />
            </React.Fragment>
        )
    }
}

export default Home;