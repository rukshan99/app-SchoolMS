import { Switch, Route } from 'react-router-dom';

import StudentsTable from './Students/StudentsTable';
import AddStudent from './Students/AddStudent';
import StudentDetails from './Students/StudentDetails';
import Layout from './Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/students' exact component={StudentsTable} />
          <Route path='/students/add' exact component={AddStudent} />
          <Route path='/students/:id' exact component={StudentDetails} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
