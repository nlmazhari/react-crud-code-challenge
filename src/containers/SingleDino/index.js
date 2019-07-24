import React, { Component } from 'react'
import axios from 'axios'
import { serverUrl, auth } from '../../Query'
import DinoName from './DinoName'
import DinoWeights from './DinoWeights'
import AddWeight from './AddWeight'

class SingleDinosaur extends Component {

    state = {
        dino: {
            attributes: { name: ''},
            id: ''
        },
        weights: [{
            attributes: {
                weight: '',
                weighed_at: ''
            },
            id: ''
        }]
    }
    
    componentDidMount() { 
        const id = this.props.match.params.id
        this.getSingleDino(id)
        this.getDinoWeights(id)
    }
    
    getSingleDino = id => {
        axios.get(`${serverUrl}/dinosaurs/` + id, {auth})
            .then(resp => {
                console.log('single Dino resp => ', resp)
                this.setState({ dino: resp.data.data })
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }

    getDinoWeights = id => {
        axios.get(`${serverUrl}/dinosaurs/${id}/weight_entries`, { auth })
            .then(resp => {
                console.log('Get Dino weight resp =>', resp)
                this.setState({ weights: resp.data.data })
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }

    render() {
        const { dino, weights } = this.state
        const id = this.props.match.params.id
        return (
            <div className="single-dinosaur">
                <DinoName dino={dino} getDino={() => this.getSingleDino(id)}/>
                <DinoWeights id={id} weights={weights} getDinoWeights={() => this.getDinoWeights(id)} />
                <AddWeight id={id} getDinoWeights={() => this.getDinoWeights(id)} />
            </div>
        )
    }
}

export default SingleDinosaur