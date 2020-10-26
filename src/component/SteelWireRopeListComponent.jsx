import React, { Component } from 'react'
import SteelWireRopeDataService from '../service/SteelWireRopeDataService';

class SteelWireRopeListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            steelwireropes: [],
            isClicked : false
        }

        this.showSteelWireRopes = this.showSteelWireRopes.bind(this);
              
    }

    showSteelWireRopes(){
        this.setState({isClicked : this.state.isClicked = true})
            
    }

    componentDidMount() {
        this.refreshSteelWireRopes();
    }

    refreshSteelWireRopes() {
        SteelWireRopeDataService.retrieveAllSteelWireRopes()
            .then(
                response => {
                    console.log(response);
                    this.setState({ steelwireropes: response.data })
                }
            )
    }
  

    render() {

        if (this.state.isClicked){
            return (
            <div className="container">
            <h3>All steel wire ropes</h3>                
            
            <div className="container">
                <table className="table">
                    <thead>
                        <tr> 
                            <th>Id</th>
                            <th>Quantity</th>
                            <th>Diameter</th>
                            <th>Number of strings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.steelwireropes.map(
                                steelwireropes =>
                                    <tr key={steelwireropes.productId}>
                                        <td>{steelwireropes.productId}</td>
                                        <td>{steelwireropes.quantity}</td>
                                        <td>{steelwireropes.diameter}</td>
                                        <td>{steelwireropes.numberOfStrings}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>                    
            </div>
      </div>) 
                                
        }
        else {
            return ( <div>
                <button onClick={this.showSteelWireRopes}>Show steel wire ropes</button>
                </div>)                       
        }
        
        
    }
}

export default SteelWireRopeListComponent
