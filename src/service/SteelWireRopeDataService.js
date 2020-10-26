import axios from 'axios';

class SteelWireRopeDataService {

    addSteelWireRope(steelWireRope){
        return axios.post(`http://localhost:8080/client/newsteelwirerope`, steelWireRope); 
        
        
    }

    retrieveAllSteelWireRopes() {
        return axios.get(`http://localhost:8080/client/allsteelwireropes`);
    }

   
}

export default new SteelWireRopeDataService()
