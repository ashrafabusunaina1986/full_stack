import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './UI/Card/Card';
import Users from './components/user/Users';


function App() {
  return (
    <div className='App'>
      <Input title='Name' input={{
        id: 'name', type: 'text', placeholder: 'enter the name.'
      }} />
      <Button>Click for send request</Button>
      <Users/>
    </div>
  );
}

export default App;
