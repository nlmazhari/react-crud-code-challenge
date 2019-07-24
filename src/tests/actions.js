import { serverUrl, auth } from '../Query'
import axios from 'axios'

const addDino = item => { 
    const request = { "dinosaur": { "name": item } }
    return(
        axios.post(serverUrl + '/dinosaurs/', request, { auth })
        .then(resp => {
            if (resp.status === 200) {
                //update the list of dinos
                // this.props.getDinoList()
                return resp
            }
        })
        .catch(err => {
            return err
        })
    ) 
}

export default addDino