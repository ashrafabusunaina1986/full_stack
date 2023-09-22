import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';


function App() {
  return (
    <div className='App'>
      <Input title='Name' input={{
        id:'name',type:'text',placeholder:'enter the name.'
      }}/>
      <Button>Click for send request</Button>
    </div>
  );
}

export default App;
