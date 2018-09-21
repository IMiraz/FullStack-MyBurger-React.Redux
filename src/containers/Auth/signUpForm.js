import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'
import Classes from './SignUp.css'


class signUpForm extends Component {
state = {
     controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password:{
            elementType:'input',
              elementConfig:{
                 type:'password',
                 placeholder:'Enter password'
              },
             value:'',
             validation:{
            required:true,
            minLength:7
             },
             valid:false,
             touched:false
             }

     },


     formIsValid:false,
     loading:false,
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

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid

}




inputChangeHandler = (event, controlName) => {
    const updatedControls ={
...this.state.controls,
[controlName]:{
    ...this.state.controls[controlName],
 value:event.target.value,
 valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
 touched:true,

}



    };

    this.setState({controls: updatedControls});


    let formIsValid = true;

for(let controlName in updatedControls)
{
     formIsValid = updatedControls[controlName].valid && formIsValid;

}
console.log(formIsValid);
this.setState({controls:updatedControls, formIsValid:formIsValid});

  }

    render() {
        const formElementArray = []
        for(let key in this.state.controls)
        {
        formElementArray.push({
        id:key,
        config: this.state.controls[key]
        });

        }

        let form = formElementArray.map(formElement =>(
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
)
)




                return (
           <div className={Classes.SignUP}>
        <form>
    {form}
    <Button btnType="Success" disabled={!this.state.formIsValid}>SignUp</Button>
        </form>
           </div>
         )
    }



}

export default signUpForm