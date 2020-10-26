import React, { Component } from 'react'
import EndConnectionDataService from '../service/EndConnectionDataService';

class EndConnectionListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            endconnections: [],
            isClicked : false
        }

        this.showEndConnections = this.showEndConnections.bind(this);
        
    }

    showEndConnections(){
        this.setState({isClicked : this.state.isClicked = true})
            
    }

    componentDidMount() {
        this.refreshEndConnections();
    }

    refreshEndConnections() {
        EndConnectionDataService.retrieveAllEndConnections()
            .then(
                response => {
                    console.log(response);
                    this.setState({ endconnections: response.data })
                }
            )
    }

    render() {
        console.log('render')
        if (this.state.isClicked){
            return (            
            <div className="container">
                <h3>All endconnections</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Quantity</th>
                                <th>Material</th>
                                <th>Minimum breaking load</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.endconnections.map(
                                    endconnections =>
                                        <tr key={endconnections.productId}>
                                            <td>{endconnections.productId}</td>
                                            <td>{endconnections.quantity}</td>
                                            <td>{endconnections.materialEndconnection}</td>
                                            <td>{endconnections.minimumBreakingLoadInKilos}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>                    
                </div>
            </div>)}
            else {

                return ( 
                <div>
                <button onClick={this.showEndConnections}>Show endconnections</button>
                </div>)
                       
        }

        
    }
}

export default EndConnectionListComponent
