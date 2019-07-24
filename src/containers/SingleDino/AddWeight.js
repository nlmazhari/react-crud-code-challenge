import React, { Component } from 'react'
import { serverUrl, auth } from '../../Query'
import axios from 'axios'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

class AddWeight extends Component {

    state = {
        weight: '',
        weighed_at: ''
    }

    addWeight = (id, weight, date) => {
        const request = {
            "weight_entry": { "weighed_at": date, "weight": weight }
        }
        axios.post(`${serverUrl}/dinosaurs/${id}/weight_entries`, request, {auth})
            .then(resp => {
                console.log('Add weight resp =>', resp)
                this.props.getDinoWeights()
                this.setState({ weight: '' })
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }

    handleChange = e => {
        this.setState({ weight: e.target.value })
    }

    dateChange = e => {
        // new Date will change the date into timestamp
        this.setState({ weighed_at: new Date(e.target.value)})
    }

    render() {
        const { id } = this.props
        const { weight, weighed_at } = this.state
        return (
            <div className="add-weight">
                <p className="title">add new weights:</p>
                <FormGroup>
                    <FormControl 
                        type='number' 
                        placeholder='weight in KG'
                        onChange={this.handleChange}    
                        value={weight}
                    >
                    </FormControl>
                    <FormControl 
                        type='date' 
                        onChange={this.dateChange}                        
                    ></FormControl>
                </FormGroup>
                <div className="btn-wrap">
                    <Button className="light-btn" onClick={() => this.addWeight(id, weight, weighed_at)}>save</Button>
                    <Button className="orange-btn">cancel</Button>
                </div>
            </div>
        )
    }
}

export default AddWeight