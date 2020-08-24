import React from 'react';
import ContextForm from './ContextForm';
import ContextInputs from './ContextInputs';
import { Typography } from '@material-ui/core';



class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            context:{
                token: "",
                organization: "",
                project: ""
            },
            validContext: false
        }

        this.setNewState = this.setNewState.bind(this);
        this.updateContextValidity = this.updateContextValidity.bind(this);
    }

    updateContextValidity(value){
        // handle throwing error
        this.setState({validContext: value})
    }

    setNewState(subState){
        const newState = subState;
        this.setState({...newState})
    }


    render(){
        return(
            <React.Fragment>
                <Typography>Welcome! This is the entry for helper 2.0!</Typography>
                { this.state.validContext 
                    ? <ContextInputs />
                    : <ContextForm 
                        context={this.state.context} 
                        updateValues={this.setNewState} 
                        validContext={this.state.validContext} 
                        updateContextValidity={this.updateContextValidity}
                        />
                }
            </React.Fragment>
        )
    }
}

export default Home;