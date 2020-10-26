import axios from 'axios';

class ClampsDataService {

    addClamps(clamps){
        return axios.post(`http://localhost:8080/client/newclamps`, clamps); 
        
        
    }

    retrieveAllClamps() {
        return axios.get(`http://localhost:8080/client/allclamps`);
    }
}

export default new ClampsDataService()
