import React, { Component } from 'react'
import { serverUrl, auth } from '../../Query'
import axios from 'axios'
import { Button, FormControl } from 'react-bootstrap'
import poster from '../../assets/img/poster.jpg'

class DinoName extends Component {

    state = {
        name: ''
    }

    handleChange = e => {
        this.setState({ name: e.target.value })
    }

    showSection = () => {
        document.getElementById('update-section').style.display='flex'
    }

    hideSection = () => {
        document.getElementById('update-section').style.display = 'none'
    }

    updateDino = id => {
        const { name } = this.state
        const request = { "dinosaur": { "name": name } }
        if (name) {
            axios.put(`${serverUrl}/dinosaurs/${id}`, request, { auth })
            .then(resp => {
                if (resp.status === 200) {
                    console.log('Update Dino name resp =>', resp)
                    //update the name of dino
                    this.props.getDino()
                    this.hideSection()
                }
            })
            .catch(err => {
                alert(err.response.statusText)
            })
        } else {
            alert('you need to enter a new name first!')
        }   
    } 
    
    render() {
        const { dino } = this.props
        const { name } = this.state
        return (
            <div className="name-section" style={{backgroundImage: `url(${poster})`}}>
                <div className='flex-wrap'>
                    <p className='title'>{dino.attributes.name}</p>
                    <div className='btn-wrap'>
                        <Button className='light-btn' onClick={() => this.showSection()}>update name</Button>
                        <Button className='light-btn' href={`/home/dinosaurs`}>back to list</Button>
                    </div>
                </div>
                <div className='flex-wrap' id='update-section' style={{display: 'none'}}>
                    <FormControl type='text' placeholder='Enter new name' value={name} onChange={this.handleChange}></FormControl>
                    <div className='btn-wrap'>
                        <Button className='light-btn' onClick={() => this.updateDino(dino.id)}>save</Button>
                        <Button className='orange-btn' onClick={() => this.hideSection()}>cancel</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DinoName