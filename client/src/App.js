import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './UI/Card/Card';
import Users from './components/user/Users';
import { useState } from 'react';


function App() {
  const [user,setUser]=useState({input:'',out:''})

  const searchHandler=()=>{
  setUser({...user,out:user.input})
  }
  return (
    <div className='App'>
      <Input title='Name' input={{
        id: 'name', type: 'text', placeholder: 'enter the name.',
        value:`${user.input}`,
        onChange:(e)=>setUser({...user,input:e.target.value})
      }} />
      <Button onClick={searchHandler}>Click for send request</Button>
      <Users input={user.out}/>
    </div>
  );
}

export default App;
