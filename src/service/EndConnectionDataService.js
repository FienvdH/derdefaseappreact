import axios from 'axios';

class EndConnectionDataService {


    addEndConnection(endConnection){
        return axios.post(`http://localhost:8080/client/newendconnection`, endConnection); 
        
        
    }
    retrieveAllEndConnections() {
        return axios.get(`http://localhost:8080/client/allendconnections`);
    }
}

export default new EndConnectionDataService()
