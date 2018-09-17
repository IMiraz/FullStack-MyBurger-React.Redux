import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'

class ContactData  extends Component {
  state = {

      orderForm: {
 name:{

elementType:'input',
  elementConfig:{
     type:'text',
     placeholder:'Your Name'
  },
 value:''
 },

 street:{

    elementType:'input',
      elementConfig:{
         type:'text',
         placeholder:'Street'
      },
     value:''
     },

     zipcode:{

        elementType:'input',
          elementConfig:{
             type:'text',
             placeholder:'ZIP Code'
          },
         value:''
         },

     country:{

        elementType:'input',
          elementConfig:{
             type:'text',
             placeholder:'Country'
          },
         value:''
    },

     email:{

        elementType:'input',
          elementConfig:{
             type:'email',
             placeholder:'Your E-Mail'
          },
         value:''
    },


    deliveryMethod:{

        elementType:'select',
          elementConfig:{
              option:[
        {value:'fastest', displayValue:'Fastest'},
    {value:'cheapest', displayValue:'Cheapest'}
            ]
          },
         value:''
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
        <Input elementType="..." elementConfig="..." value="..." />
        <Input elementType="..." elementConfig="..." value="..." />
        <Input elementType="..." elementConfig="..." value="..." />
        <Input elementType="..." elementConfig="..." value="..." />
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

