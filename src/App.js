import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
