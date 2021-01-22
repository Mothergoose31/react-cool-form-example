import React from 'react';
import './App.css';
import {useForm} from 'react-cool-form'

const FormField = ({id, label, error ,...rest}) => (
  <div className = "input-container">
    <label htmlFor={id}>{label}</label>
    <input id ={id} name ={id} {...rest}/>
    {error && <small>{error}</small>}
  </div>

)

function App() {
  const {form,getState} = useForm({
     // (Strongly advise) Provide the default values just like we use React state
    defaultValues: {username:'',email:'',password:''},
    // The event only triggered when the form is valid
    onSubmit: values => alert(JSON.stringify(values, undefined,2))
  })
   // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = getState('errors',{errorWithTouched:true})

  console.log(errors)
  return (
    <div className="App">
      <form ref={form} noValidate>
        <div>
          <FormField id="username" label="username" placeholder='John' required error={errors.username}/>
        </div>

        <div>
          <FormField id= "email" label="email"placeholder="Emai@l.com" type="email" required error={errors.email}/>
        </div>

        <div>
          <FormField id= "password" label="password" type="password" required error={errors.password}/>
        </div>
        <input type = "submit"/>
      </form>
    </div>
  );
}

export default App;
