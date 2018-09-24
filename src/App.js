import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route, withRouter} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/AuthForm'
import Logout from './containers/Auth/Logout/Logout'
import *as actions from './Store/actions/index'


class App extends Component {

 componentDidMount() {
 this.props.onTryAutoSignup();
 }

  render() {
    return (
      <div>
      <Layout>
      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/orders" exact component={Orders}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/logout" component={Logout}/>
      </Layout>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {

  return {

    onTryAutoSignup:() => dispatch(actions.authCheckState())


  }

}



export default withRouter(connect(null, mapDispatchToProps) (App));
