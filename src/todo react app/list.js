import React, { Component } from 'react'
import {ListGroup, Button, InputGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import './css/list.css'
import Edite from './modal'

class list extends Component {
    state ={
        id: '',
        Text: ''

    }
    
    Delete = id => {
        const filter = this.props.arr.filter(item => item.key !== id)
        this.props.dispatchArr(filter)
    }
    cheakbox = (id) =>{
        
        const cheakbox = document.getElementById(id+"chk")
        const _label = document.getElementById(id+"label")
        const completed = document.getElementById(id+"complete")
        const _Button = document.getElementById(id+"button")
        const _Button2 = document.getElementById(id+"button2")
        
        this.props.arr.map(arr =>{
            if (cheakbox.checked === true){        
                if (arr.key === id){
                _label.style.textDecoration = "line-through"
                _Button.disabled = "disabled"
                _Button2.disabled = "disabled"
                completed.innerText = "Completed"
                // console.log(_label)
    }
        }else {
            if (arr.key === id){
                _label.style.textDecoration = "none"
                _Button.disabled = ""
                _Button2.disabled = ""
                completed.innerText = ""

            }  
        }            
    })
        //     this.setState({
        //         array: this.state.array,
        //         })
        }
Edite = (id, text) =>{
    
    this.setState({
        id: id,
        Text: text
    })
    
const ChangeCondition = this.props.condition
    this.props.dispatchCondition(! ChangeCondition)

    // console.log(ChangeCondition)
}
    render(){
return(
    <>
    {
    this.props.arr.map(item => {

    return(
    <div id={item.key} class='div'>            
            <ListGroup variant="flush" id="ListGroup">

            <ListGroup.Item style={{backgroundColor: "rgba(228, 241, 254, 0.5)", fontWeight: 'bold', borderRadius: "8px"}}>
                        <input type="checkbox" class="checkbox" id={item.key+"chk"} onClick={()=> this.cheakbox(item.key)}/>

                        <label id={item.key+"label"}>{item.todo}</label>
                        <label id={item.key+"complete"} className="complete"></label>
                        
                        <Button variant="outline-secondary" className='button' id={item.key+"button2"} onClick={()=>{this.Delete(item.key)}}>Delete</Button>
                        <Button variant="outline-secondary" className='button' id={item.key+"button"} onClick={()=>{this.Edite(item.key, item.todo)}}>Edite</Button>
                        <Edite id={this.state.id} text={this.state.Text}/>
                </ListGroup.Item>
            </ListGroup>
    </div>               
    )

    })
    }


            </>
        )
    }
}
const mapStateToProps = state =>{
    return({
        inputField: state.inputField,
        arr: state.arr,
        condition: state.condition,

    })
}
const mapDispatchToProps = dispatch => {
    return({
        dispatchInputField:(input) => { dispatch({type:'inputField', payload: input}) },
        dispatchArr:(index) => { dispatch({type:'arr', payload: index}) },
        dispatchCondition:(condition) => { dispatch({type:'condition', payload: condition}) },

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(list);