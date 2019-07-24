import React, { Component } from "react"
import { serverUrl, auth } from '../../Query'
import axios from 'axios'
import { FormControl, Button } from 'react-bootstrap'

class CreateDino extends Component {

    state = { value: '' }
    
    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    addDino = item => {
        const request = { "dinosaur": { "name": item } }
        axios.post(`${serverUrl}/dinosaurs/` , request, {auth})
            .then(resp => {
                if (resp.status === 200) {
                    this.props.getDinoList()
                    // empty the input after adding dino
                    this.setState({ value: ''})
                }
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }

    render() {
        const { value } = this.state
        return (
            <div className="white-box">
                <p className="title">create new dino:</p>
                <div className="create-new">
                    <FormControl placeholder='Dino Name' value={value} onChange={this.handleChange}></FormControl>
                    <Button className='light-btn' onClick={() => this.addDino(value)}>save</Button>
                </div>                
            </div>
        )
    }
}

export default CreateDino