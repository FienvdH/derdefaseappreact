import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import SteelWireRopeDataService from '../service/SteelWireRopeDataService';

class NewSteelWireRopeComponent extends Component {

    constructor(props){
        super(props)
    
        this.state = {
            quantity: '',
            diameter: '',
            numberOfStrings:''
        }
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onSubmit(values){
            let newSteelWireRope = {
                quantity: values.quantity,
                diameter: values.diameter,
                numberOfStrings: values.numberOfStrings,
            }
            SteelWireRopeDataService.addSteelWireRope(newSteelWireRope)
       
      }
    
      render(){
        let quantity = this.state.quantity
        let diameter = this.state.diameter
        let numberOfStrings = this.state.numberOfStrings
        
    
        return (
               <div className="container">
                   <div className="container-new-steelwirerope">
                   <br></br>
                    <h3>New steel wire rope</h3>
                       <Formik
                       enableReinitialize={true}
                       initialValues={{quantity, diameter, numberOfStrings}}
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
                                           <label className="label">Diameter</label>
                                           <Field className="form-control" type="text" name="diameter" />
                                       </fieldset>
                                       <fieldset className="form-group">
                                           <label className="label">Number of strings</label>
                                           <Field className="form-control" type="text" name="numberOfStrings" />
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

export default NewSteelWireRopeComponent