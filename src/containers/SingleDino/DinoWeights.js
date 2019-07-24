import React, { Component } from 'react'
import { serverUrl, auth } from '../../Query'
import axios from 'axios'
import { Button, FormControl, Image } from 'react-bootstrap'
import remove from '../../assets/img/cancel.png'
import moment from 'moment'

class DinoWeights extends Component {

    state = {
        weight: ''
    }

    removeWeight = id => {
        axios.delete(`${serverUrl}/weight_entries/${id}`, {auth})
            .then(resp => {
                if (resp.status === 200) {
                    console.log('Remove Dino weight resp =>', resp)
                    this.props.getDinoWeights(this.props.id)
                }
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }

    changeWeight = (id, weight, weighed_at) => {
        const request = { "weight_entry": { "weighed_at": weighed_at, "weight": weight } }
        axios.put(`${serverUrl}/weight_entries/${id}`, request, {auth})
            .then(resp => {
                if (resp.status === 200) {
                    this.props.getDinoWeights(this.props.id)
                }
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }

    handleChange = e => {
        this.setState({ weight: e.target.value })
    }

    render() {
        const { weights } = this.props
        const { weight } = this.state
        return (
            <div className="weight-section">
                <p className="title">list of weights:</p>
                {
                    weights.map((item, i) => {
                        return (
                            <div className='weight-row' key={i}>
                                <FormControl 
                                    defaultValue={item.attributes.weight} 
                                    onChange={this.handleChange}
                                    onBlur={() => this.changeWeight(item.id, weight)}
                                >
                                </FormControl>
                                <p>
                                    { item.attributes.weighed_at ? 
                                    moment(item.attributes.weighed_at).format('YYYY-MM-DD h:mm:ss a')
                                    : ''}
                                </p>
                                <Button onClick={() => this.removeWeight(item.id)} className="trans-btn">
                                    <Image src={remove} />
                                </Button>
                            </div>
                        )
                    })
                }
                {
                    weights.length === 0 && 
                    <div className='weight-row'>
                        <p>no weights added yet</p>
                    </div>
                }
            </div>
        )
    }
}

export default DinoWeights