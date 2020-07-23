
import React, { Component } from 'react'
import {InputGroup, Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
// import {getValueFromInput} from './func'
import List from './list'

class Input extends Component {

    getValueFromInput = event =>{
        const value = event.target.value
        this.props.dispatchInputField(value)
        // console.log(this.props.inputField)
    }
    submitTodo =()=>{
        const todos = this.props.inputField
        
        this.props.dispatchArr([...this.props.arr, {
            todo: todos,
            key: Date.now()
        }])
        document.getElementsByClassName('input')[0].value = ''
        
        
        // this.props.dispatchArr(this.props.arr)
        // this.props.arr
        // console.log(this.props.arr)

    }
    render() {
        // console.log("input"+this.props.arr)

        return (
            <>
                    <InputGroup size="lg" style={{backgroundColor: 'transparent', width: '50%', margin : "0 auto", marginBottom: "15px"}}>

                    <Form.Control
                                style={{backgroundColor: "rgba(228, 241, 254, 0.3)", fontWeight: 'bolder'}}
                                aria-label="Large"
                                placeholder="Enter Todo'S"
                                className="input"
                                onChange={this.getValueFromInput}
                                />

                    <InputGroup.Append>
                        <Button variant="outline-danger" style={{borderColor: 'skyblue'}} onClick={this.submitTodo}>Plan</Button>
                    </InputGroup.Append>

                    </InputGroup>

                    <List />
                    </>
        )
    }
}


const mapStateToProps = state =>{
    return({
        inputField: state.inputField,
        arr: state.arr,

    })
}
const mapDispatchToProps = dispatch => {
    return({
        dispatchInputField:(input) => { dispatch({type:'inputField', payload: input}) },
        dispatchArr:(index) => { dispatch({type:'arr', payload: index}) },

    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);
