import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import EndConnectionDataService from '../service/EndConnectionDataService';

class NewEndconnectionComponent extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            quantity: '',
            materialEndconnection: '',
            minimumBreakingLoadInKilos:''
        }
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onSubmit(values){
            let newEndConnection = {
                quantity: values.quantity,
                materialEndconnection: values.materialEndconnection,
                minimumBreakingLoadInKilos: values.minimumBreakingLoadInKilos,
            }
            EndConnectionDataService.addEndConnection(newEndConnection)
       
      }
    
      render(){
        let quantity = this.state.quantity
        let materialEndconnection = this.state.materialEndconnection
        let minimumBreakingLoadInKilos = this.state.minimumBreakingLoadInKilos
        
    
        return (
               <div className="container">
                   <div className="container-new-endconnection">
                   <br></br>
                    <h3>New endconnection</h3>
                       <Formik
                       enableReinitialize={true}
                       initialValues={{quantity, materialEndconnection, minimumBreakingLoadInKilos}}
                       onSubmit={this.onSubmit}
                       >
                           {
                               (props) => (
                                   <Form>
                                       <fieldset className="form-group">
                                           <label className="label">Quantity</label>
                                           <Field className="form-control" type="text" name="quantity"  />
                                       </fieldset>
                                       <fieldset className="form-group">
                                           <label className="label">Material endconnection</label>
                                           <Field as="select" name="materialEndconnection">
                                                <option value="MILDSTEEL">Mild steel</option>
                                                <option value="FORGEDSTEEL">Forged steel</option>
                                                <option value="ALLOYSTEEL">Alloy steel</option>
                                                <option value="CASTSTEEL">Cast steel</option>
                                            </Field>
                                       </fieldset>
                                       <fieldset className="form-group">
                                           <label className="label">Minimum breaking load in kilos</label>
                                           <Field className="form-control" type="text" name="minimumBreakingLoadInKilos" />
                                       </fieldset>
                                       <button className="btn " type="submit">Add</button>
                                   </Form>
                               )
                           }
                       </Formik>
                       <br></br>
                   </div>
               </div>
           )
      }

}

export default NewEndconnectionComponent