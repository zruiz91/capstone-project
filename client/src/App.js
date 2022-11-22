import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ParkList from './components/ParkList';

function App() {
  return (
    <div className="App">
      <Header/>
      <LoginForm />
      <SignupForm />
      <ParkList />
    </div>
  );
}

export default App;
