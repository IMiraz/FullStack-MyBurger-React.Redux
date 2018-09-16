import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'

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

      },
      loading:false

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
        .then(respone => { this.setState({ loading: false })
        this.props.history.push('/')
        })
        .catch(err => this.setState({

            loading: false
        }));

 }

  render() {
       let form = (<form>
        <Input inputType="input"  type="text" name="name" placeholder="your Name"/>
        <Input inputType="input"  type="email" name="email" placeholder="your Email"/>
        <Input inputType="input"  type="text" name="street" placeholder="Street"/>
        <Input inputType="input"  type="text" name="postal" placeholder="Postal Code"/>
       <Button btnType="Success" clicked={this.OrderHandler}>ORDER</Button>

        </form>);
       if(this.state.loading) {
            form =<Spinner/>
       }

       return(
           <div className={classes.ContactData}>
           <h4>Enter your Contact Information</h4>
      {form}
           </div>

       );
  }


}

export default ContactData

