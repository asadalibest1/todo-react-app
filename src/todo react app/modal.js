import React, { Component } from 'react'
import {Modal, Button, Form, ButtonToolbar,} from 'react-bootstrap'
import { connect } from 'react-redux'
import './css/modal.css'

class Edite extends Component {
 state={
    inputEdite: '',
 }

 inputEdite= event =>{

    const value = event.target.value
    this.setState({
        inputEdite: value
    })

 }
 Save=()=>{
    const value = this.state.inputEdite
    const id = this.props.id
    
    const edite = this.props.arr.map(item =>{
    
    if(value === ""){
        if (item.key === id){
            item.todo = "This todo is empty" 
           }
        }   
           else if (item.key === id){
               item.todo = value
            }
        })
    
        this.props.dispatchCondition(! this.props.condition)    
        // console.log(this.props.arr)
        
        
}

Close=()=>{
        this.props.dispatchCondition(! this.props.condition)    
        console.log(this.props.condition)
} 
render() {
        
        // console.log(this.props.arr)
return (

    <>
<Modal show={this.props.condition} onHide={this.Close}>

<Modal.Header closeButton>
    <Modal.Title>Edite Todo</Modal.Title>
  </Modal.Header>
<Modal.Body className="modal-Body">

<Form.Group className="form-Group">
                                
    <Form.Text className="text-muted">
    Enter your new Todo
    </Form.Text>
<Form.Control aria-label="large" onChange={this.inputEdite} defaultValue={this.props.text} className="input" placeholder="Change Todo"/>

  </Form.Group>


<Form.Group className="form-Group2">
    <Button variant="outline-primary" onClick={this.Save}>Save Changes</Button>
    <Button variant="outline-danger" onClick={this.Close}>Close</Button>

</Form.Group>

</Modal.Body>
</Modal>

            </>
        )
    }
}
const mapStateToProps = state=>{
    return({
        arr: state.arr,
        condition: state.condition,
    })
}
const mapDispatchToProps = dispatch=>{
    return({
        dispatchArr: (index) =>{dispatch({type:"arr", payload: index})},
        dispatchCondition:(condition) => { dispatch({type:'condition', payload: condition}) },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Edite)