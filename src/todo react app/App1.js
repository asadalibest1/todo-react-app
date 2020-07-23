import React, { Component } from 'react'
import './css/App1.css'
// import {InputGroup, Form, Button} from 'react-bootstrap'

import Heading from './Heading'
import Input from './input'

export default class App1 extends Component {
    render() {
        return (
            <>

            <div id="div">
            <Heading/>
            <Input/>
            </div>
                
            </>
        )
    }
}
