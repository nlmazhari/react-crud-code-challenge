import React, { Component } from 'react'
import DinoList from './dinoList'
import DinoPagination from './pagination'
import CreateDino from './CreateDino'
import axios from 'axios'
import { serverUrl, auth } from '../../Query'

class Dinosaurs extends Component {

    state = {
        data: [{ attributes: { name: '' }}],
    }

    componentDidMount() {
        this.getDinoList()
    }

    getDinoList = (pageNo = 0) => {
        axios.get(`${serverUrl}/dinosaurs?page[number]=${pageNo}`, {auth})
            .then(resp => {
                if (resp.status === 200) {
                    console.log('Dino list resp =>', resp)
                    this.setState({
                        data: resp.data.data
                    })
                }
            })
            .catch(err => {
                alert(err.response.statusText)
            })
    }

    render () {
        const {data} = this.state
        return (
            <div className="dinosaurs">
                <DinoList data={data} getDinoList={() => this.getDinoList()} />
                <DinoPagination data={data} getDinoList={() => this.getDinoList()} />
                <CreateDino getDinoList={() => this.getDinoList()} />
            </div>
        )
    }
}

export default Dinosaurs