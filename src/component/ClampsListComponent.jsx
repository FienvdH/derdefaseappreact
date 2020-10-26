import React, { Component } from 'react'
import ClampsDataService from '../service/ClampsDataService';

class ClampsListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clamps: [],
            isClicked : false
        }

        this.showClamps = this.showClamps.bind(this);
        
    }

    showClamps(){
        this.setState({isClicked : this.state.isClicked = true})
            
    }

    componentDidMount() {
        this.refreshClamps();
    }

    refreshClamps() {
        ClampsDataService.retrieveAllClamps()
            .then(
                response => {
                    console.log(response);
                    this.setState({ clamps: response.data })
                }
            )
    }

    render() {
        console.log('render')
        if (this.state.isClicked){
        return (
            <div className="container">
                <h3>All clamps</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Quantity</th>
                                <th>Size</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clamps.map(
                                    clamps =>
                                        <tr key={clamps.productId}>
                                            <td>{clamps.productId}</td>
                                            <td>{clamps.quantity}</td>
                                            <td>{clamps.sizeClamps}</td>
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
                <button onClick={this.showClamps}>Show Clamps</button>
                </div>
                )
            }
        
    }
}

export default ClampsListComponent
