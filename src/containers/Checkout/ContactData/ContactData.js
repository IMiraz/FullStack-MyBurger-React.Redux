import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'

class ContactData  extends Component {
  state = {
      contact: {
   name:'',
   phone:'',
   email:'',
     address:{
   street:'',
   postalCode:''

     }

      }

  }

 OrderHandler = (event) => {
     event.preventDefault();
     this.setState({
        loading: true
    })

    const order = {
        ingredients: this.props.ingredients,
        totalprice: this.props.price,
        customer: {
            name: 'tanvir hasan',
            address: {
                street: 'nikunja @2',
                zipcode: '34543',
                country: 'bangladesh'
            },
            email: 'tanvirhasan@gmail.com'
        },
        deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
        .then(respone => this.setState({

            loading: false,
        }))
        .catch(err => this.setState({

            loading: false
        }));

 }

  render() {
       return(
           <div className={classes.ContactData}>
           <h4>Enter your Contact Information</h4>
            <form>
            <input className={classes.Input}  type="text" name="name" placeholder="your Name"/>
            <input className={classes.Input}  type="email" name="email" placeholder="your Email"/>
            <input className={classes.Input}  type="text" name="street" placeholder="Street"/>
            <input className={classes.Input}  type="text" name="postal" placeholder="Postal Code"/>
           <Button btnType="Success" clicked={this.OrderHandler}>ORDER</Button>

            </form>
           </div>

       );
  }


}

export default ContactData

