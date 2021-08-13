import { Switch, Route } from 'react-router-dom';

import StudentsTable from './Students/StudentsTable';
import Layout from './Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/students' exact component={StudentsTable} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
