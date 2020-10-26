import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import ClampsDataService from '../service/ClampsDataService';

class NewClampsComponent extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            quantity: '',
            sizeClamps: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onSubmit(values){
            let newClamps = {
                quantity: values.quantity,
                sizeClamps: values.sizeClamps
            }
            ClampsDataService.addClamps(newClamps)
       
      }
    
      render(){
        let quantity = this.state.quantity
        let sizeClamps = this.state.sizeClamps
    
        return (
               <div className="container">
                   <div className="container-new-clamps">
                   <br></br>
                    <h3>New clamps</h3>
                       <Formik
                       enableReinitialize={true}
                       initialValues={{quantity, sizeClamps}}
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
                                           <label className="label">Size clamps</label>
                                           <Field as="select" name="sizeClamps">
                                                <option value="SMALL">Small</option>
                                                <option value="MEDIUM">Medium</option>
                                                <option value="LARGE">Large</option>
                                                <option value="EXTRALARGE">Extra large</option>
                                            </Field>
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

export default NewClampsComponent