import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './UI/Card/Card';
import Users from './components/user/Users';
import { useState } from 'react';
import Textarea from './components/Textarea/Textarea';
import useForm from './costum-hook/useform/use-form';


function App() {
  
  const init=useForm(
    [
    { title:'Name', id: 'name', type: 'text', name:"input"},
    { title:'Price', id: 'price', type: 'number', name:"input"},
    { title:'Message', id: 'message',  name:"textarea"},
    { id:"button",children:"Click",name:"button"}
  ]
  )

  
  return (
    <div className='App f'>
      {init.form()}
        
      
      {/* <Users input={user.out}/> */}
    </div>
  );
}

export default App;
