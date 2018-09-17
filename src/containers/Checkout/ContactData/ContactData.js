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
 value:'',
 validation:{
    required:true
     },
     valid:false
 },

 street:{

    elementType:'input',
      elementConfig:{
         type:'text',
         placeholder:'Street'
      },
     value:'',
     validation:{
        required:true
         },
         valid:false
     },

     zipcode:{

        elementType:'input',
          elementConfig:{
             type:'text',
             placeholder:'ZIP Code'
          },
         value:'',
         validation:{
        required:true
         },
         valid:false
         },

     country:{

        elementType:'input',
          elementConfig:{
             type:'text',
             placeholder:'Country'
          },
         value:'',
         validation:{
            required:true
             },
             valid:false
    },

     email:{

        elementType:'input',
          elementConfig:{
             type:'email',
             placeholder:'Your E-Mail'
          },
         value:'',
         validation:{
            required:true
             },
             valid:false
    },


    deliveryMethod:{
        elementType:'select',
          elementConfig:{
              options:[
        {value:'fastest', displayValue:'Fastest'},
    {value:'cheapest', displayValue:'Cheapest'}
            ]
          },
         value:''
    }


     },
     loading:false
      }

 checkValidity(value, rules) {
  let isValid = false;

  if(rules.required) {
       isValid = value.trim() !=='';
  }

  return isValid;
 }


    inputChangeHandler = (event, inputIdentifire) => {
        const updatedOrderForm ={
    ...this.state.orderForm
        };
        const updatedFormElement = {
...updatedOrderForm[inputIdentifire]
        };
updatedFormElement.value = event.target.value;
updatedFormElement.valid=this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
updatedOrderForm[inputIdentifire] = updatedFormElement;
console.log(updatedFormElement);

this.setState({orderForm:updatedOrderForm});

      }


      OrderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        // console.log(this.props.price);
        this.setState({
           loading: true
       });

 const formData = {};
for(let formElementIdentifire in this.state.orderForm) {
formData[formElementIdentifire] = this.state.orderForm[formElementIdentifire].value
}

        const order = {
           ingredients: this.props.ingredients,
           totalprice: this.props.price,
           orderData:formData
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
const formElementArray = []
for(let key in this.state.orderForm)
{
 formElementArray.push({
 id:key,
 config: this.state.orderForm[key]
 });

}
console.log(formElementArray)

       let form = (
           <form onSubmit={this.OrderHandler}>

{formElementArray.map(formElement =>(
    <Input
key={formElement.id}
elementType={formElement.config.elementType}
elementConfig={formElement.config.elementConfig}
value={formElement.config.value}
change={(event)=> this.inputChangeHandler(event, formElement.id)}
    />

))}
       <Button btnType="Success">ORDER</Button>

        </form>

    );
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

