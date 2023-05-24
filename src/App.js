import './App.css';
import useInput from './hooks/useInput';
import Timeout from './components/timeout';
import DebounceComponent from './components/debounce';
import UpdateEffect from './components/updateEffect';

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

//   const {value,handleBlur,handleChange,handleFocus,error} = useInput(initialValues,validatedSchema)

  return (
    <div>
      {/* <Timeout />
      <DebounceComponent /> */}
      <UpdateEffect />
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
