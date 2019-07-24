import React, { Component } from 'react'
import axios from 'axios'
import { serverUrl, auth } from '../../Query'
import { Button, Image } from 'react-bootstrap'
import remove from '../../assets/img/cancel.png'

class DinoList extends Component {

    removeDino = item => {
        axios.delete(`${serverUrl}/dinosaurs/` + item.id, {auth})
            .then(resp => {
                if (resp.status === 200) {
                    console.log('Remove Dino resp =>', resp)
                    this.props.getDinoList()
                }
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }
    
    render() {
        return (
            <ul className="dino-list">
                {
                    this.props.data.map((item, i) => 
                        <li key={i}>
                            <Button href={`/home/dinosaur/${item.id}`} className="light-btn">{item.attributes.name}</Button>
                            <Button onClick={() => this.removeDino(item)} className="trans-btn">
                                <Image src={remove} />
                            </Button>
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default DinoList