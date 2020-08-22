import React from 'react';
import { Button,TextField } from '@material-ui/core';


class ContextForm extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    handleChange(event){
        const keyName = event.target.id;
        const value = event.target.value;
        const newValue = this.props.context;
        newValue[keyName] = value

        this.props.updateValues({context: newValue})
    }

    handleSubmit(event){
        event.preventDefault();
        // handle logic for validating 
        const context = this.props.context;
        const validToken = context.token !== '';
        const validOrg = context.organization !== '';
        const validProj = context.project !== '';
        if(validToken && validOrg){
            if(validProj){
                // project is defined
                console.log('valid project')
                return;
            }else{
                // project not defined
                console.log('no project defined')
                return;
            }
        }
        
        // return error
        console.log('raise error')
    }

    render(){
        const context = this.props.context;

        return(
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                {Object.keys(context).map((key,index) =>
                    <TextField 
                        id={key}
                        key={`${key}-${index}`}
                        label={key}
                        onChange={this.handleChange}
                        value={context[key]}
                        color='primary' 
                        variant="outlined" 
                    />
                )}
                <Button
                    variant="outlined" 
                    type='submit'
                    size="large" 
                    color="primary">
                        Submit
                </Button>
            </form>
        )
    }
}

export default ContextForm;