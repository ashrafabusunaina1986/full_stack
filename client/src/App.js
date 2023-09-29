import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './UI/Card/Card';
import Users from './components/user/Users';
import { useEffect, useState } from 'react';
import Textarea from './components/Textarea/Textarea';
import useForm from './costum-hook/useform/use-form';
import useHttp from './costum-hook/usehttp/use-http';


function App() {
  const [info, setInfo] = useState([])
  const init = useForm(
    [
      { title: 'Name', id: 'name', type: 'text', name: "input" },
      { title: 'Price', id: 'price', type: 'number', name: "input" },
      { title: 'Message', id: 'message', name: "textarea" }
    ]
  )
  const { isLoading, reqError, sendRequest: getInfo } = useHttp()

  useEffect(() => {
    getInfo({
      url: `http://localhost:4011/getinfo`
    }, setInfo)
  }, [init.post])


  return (
    <div className='App f'>
      {init.form()}

      {isLoading && <h1>LOADING... </h1>}
      {info && info.map(item => {
        return <Card key={item.id}>
          <div className='info'>
            <div>
              <h4>Name:{item.name}</h4>
              <h4>Price:{item.price}</h4>
            </div>
            <div>
              <h4>Details</h4>
              <p>{item.message}</p>
            </div>

          </div>

        </Card>
      })}
    </div>
  );
}

export default App;
