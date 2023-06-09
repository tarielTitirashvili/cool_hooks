import './App.css';
import useInput from './hooks/useInput';
import Timeout from './components/timeout';
import DebounceComponent from './components/debounce';
import UpdateEffect from './components/updateEffect';
import PreviousValue from './components/previousValue';

function App() {

//   const initialValues = {
//     email:'',
//     password:''
//   } 

// const validatedSchema = {
//   email:{
//     required:'required',
//   },
//   password:{
//     required:true
//   }
// }
// cleaning up console
function clearConsole() {
  const production = process.env.NODE_ENV === 'production'
  if(production) 
      console.log = console.warn = console.error = () => {}
}
clearConsole()

//   const {value,handleBlur,handleChange,handleFocus,error} = useInput(initialValues,validatedSchema)

  return (
    <div>
      {/* <Timeout />
      <DebounceComponent /> */}
      {/* <UpdateEffect /> */}
      <PreviousValue />
      {/* <input 
        name = {'email'}
        onFocus={handleFocus}
        onChange ={handleChange}
        onBlur={handleBlur}
        value={value?.email}
        type={"text"}
      />
      <p style = {{color:'red'}}>{error?.email?.hasError && error.email?.message}</p> 
     
     <input 
        name = {'password'}
        onFocus={handleFocus}
        onChange ={handleChange}
        onBlur={handleBlur}
        value={value.password}
      /> */}
    </div>
  );
}

export default App;
