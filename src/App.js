import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import ClientesCadastrados from './components/ClientesCadastrados';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/ClientesCadastrados" component={ClientesCadastrados}/>
          <Route component={ NotFound }/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;  
