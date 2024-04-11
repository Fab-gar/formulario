
import './App.css'
import { useState } from 'react'
function App() {
const blankC ={
  name:'',
  lastName:'',
  email:'',
  address:'',
  city:'',
  phone:'',
}
const [customer, setCustomer] = useState(blankC);
const handleChange = (e) => {
  setCustomer((prev) => ({...prev, [e.target.name]: e.target.value}))
};
const handleSubmit = (e) => {
e.preventDefault();
alert(JSON.stringify(customer, null, 2));
e. target.reset();
setCustomer(blankC);
}; 
return (
    <form onSubmit={handleSubmit}> 
      <input placeholder="first name..." name="name"onChange={handleChange} autoFocus/>
      <input placeholder="lest name..."
      name='lastName'
      onChange={handleChange} />
            <input placeholder="email..." name="email"onChange={handleChange} />
            <input placeholder="address..." name="address"onChange={handleChange} />
            <input placeholder="city..." name="city"onChange={handleChange} />
            <input placeholder="phone..." name="phone"onChange={handleChange} />
            <input type="submit" />

    </form>
  )
}

export default App
