import React, { Component } from 'react';
import NewSteelWireRopeComponent from './NewSteelWireRopeComponent';
import SteelWireRopeListComponent from './SteelWireRopeListComponent';
import EndConnectionListComponent from './EndConnectionListComponent';
import ClampsListComponent from './ClampsListComponent';
import NewEndConnectionComponent from './NewEndconnectionComponent';
import NewClampsComponent from './NewClampsComponent';

class InstructorApp extends Component {
    render() {
        return (<>
              <h1>Welcome</h1>
              <NewSteelWireRopeComponent/>
              <NewEndConnectionComponent/>
              <NewClampsComponent/>
              <SteelWireRopeListComponent/>
              <EndConnectionListComponent/>
              <ClampsListComponent/>
            </>
        )
    }
}

export default InstructorApp