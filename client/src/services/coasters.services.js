import axios from 'axios'

class CoasterService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/coasters`
        })
    }


    getCoasters() {
        return this.api.get('/getAllCoasters')
    }

    getOneCoaster(coaster_id) {
        return this.api.get(`/getOneCoaster/${coaster_id}`)
    }

    saveCoaster(coasterData) {
        return this.api.post('/saveCoaster', coasterData)
    }
}

const coastersService = new CoasterService()

export default coastersService