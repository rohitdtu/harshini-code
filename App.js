import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FormUserDetails } from './components/FormUserDetails';
import { FormPersonalDetails } from './components/FormPersonalDetails';
import { Confirm } from './components/Confirm';
import { Success } from './components/Success';



const App = ({ userDetails }) => {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })

  const updateFormState = (values) => {
    setState(values);
  }

  const resetForm = () => {

    setState({
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: ''
    })
  
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/userdetails" />
      </Route>
      <Route path="/userdetails">
        <FormUserDetails
          formData={state}
          setFormData={updateFormState}
        />
      </Route>
      <Route path="/personaldetails">
        <FormPersonalDetails
          formData={state}
          setFormData={updateFormState}
        />
      </Route>
      <Route path="/confirm">
        <Confirm
          formData={state}
          formReset={resetForm}
        />
      </Route>
      <Route path="/success">
        <Success userDetails={userDetails} />
      </Route>
    </Switch>
  );
};


const mapStateToProps = (state) => ({
  userDetails: state.userDetails.userDetails,
});

export default connect(mapStateToProps)(App);



