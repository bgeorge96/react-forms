import React from 'react';
import { TextField } from '@material-ui/core';



class OutlinedTextField extends React.Component {
    render(){
        return <TextField 
                    id={this.props.fieldName} 
                    label={this.props.fieldName} 
                    color='primary' 
                    variant="outlined" 
                    />;
    }
}

export default OutlinedTextField;