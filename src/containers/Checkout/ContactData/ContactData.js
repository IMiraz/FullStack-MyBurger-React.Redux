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
     valid:false,
     touched:false
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
         valid:false,
         touched:false
     },

     zipcode:{

        elementType:'input',
          elementConfig:{
             type:'number',
             placeholder:'ZIP Code'
          },
         value:'',
         validation:{
        required:true,
        minLength:5,
        maxLength:5
         },
         valid:false,
         touched:false
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
             valid:false,
             touched:false
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
             valid:false,
             touched:false
    },


    deliveryMethod:{
        elementType:'select',
          elementConfig:{
              options:[
        {value:'fastest', displayValue:'Fastest'},
    {value:'cheapest', displayValue:'Cheapest'}
            ]
          },
         value:'',
         valid:true
    }


     },

     formIsValid:false,
     loading:false
      }

 checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid

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
updatedFormElement.touched=true;

updatedOrderForm[inputIdentifire] = updatedFormElement;

// let formIsValid = true;

// for(let inputIdentifire in updatedOrderForm)
// {
//     formIsValid = updatedOrderForm[inputIdentifire].valid && formIsValid;

// }
// console.log(formIsValid);
console.log(updatedFormElement.touched)
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
invalid ={!formElement.config.valid}
shouldValidate={formElement.config.validation}
touched={formElement.config.touched}
change={(event)=> this.inputChangeHandler(event, formElement.id)}
    />

))}
       <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>

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

