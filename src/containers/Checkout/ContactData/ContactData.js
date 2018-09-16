import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'

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
     console.log(this.props.ingredients);
     console.log(this.props.price);

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

