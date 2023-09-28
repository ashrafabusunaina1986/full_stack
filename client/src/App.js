import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './UI/Card/Card';
import Users from './components/user/Users';
import { useState } from 'react';
import Textarea from './components/Textarea/Textarea';
import useForm from './costum-hook/useform/use-form';
import useHttp from './costum-hook/usehttp/use-http';


function App() {
  
  const init=useForm(
    [
    { title:'Name', id: 'name', type: 'text', name:"input"},
    { title:'Price', id: 'price', type: 'number', name:"input"},
    { title:'Message', id: 'message',  name:"textarea"}
  ]
  )
  // const http=useHttp({
  //   url:
  // })

  
  return (
    <div className='App f'>
      {init.form()}
        
      
      {
        init.post && <div>
          {init.post.map(item=>{
            return <div key={item.id}>
              {item.name}
            </div>
          })}
        </div>
      }
    </div>
  );
}

export default App;
