import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummery'

import ContactData from  './ContactData/ContactData'
class Checkout extends Component {

    state = {
        ingredients:null,
        totalprice:0

    }

componentWillMount() {
const query= new URLSearchParams(this.props.location.search);
const ingredients ={}
let price = 0;
for (let param of query.entries()){
//['salad','1']
if(param[0] ==='price') {
    price = param[1];
}
else {
    ingredients[param[0]] = + param[1];
}


}
this.setState({ ingredients:ingredients, totalprice:price})

}
    checkoutCancleHandler = () => {
 this.props.history.goBack('/');
    }

    CheckoutContinueHandler = () => {
         this.props.history.replace('/Checkout/contact-data')
    }
    render() {
         return(
              <div>
  <CheckoutSummary
  ingredients={this.state.ingredients}
  checkoutContinue={this.CheckoutContinueHandler}
  checkoutCancle ={this.checkoutCancleHandler}/>

  <Route path={this.props.match.path + '/contact-data'}
  render = { () => (<ContactData ingredients={this.state.ingredients}  price={this.state.totalprice} />)}
  />

              </div>
         )
    }

}

export default Checkout