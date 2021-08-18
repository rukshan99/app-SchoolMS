import { Switch, Route } from 'react-router-dom';

import StudentsTable from './Students/StudentsTable';
import AddStudent from './Students/AddStudent';
import StudentDetails from './Students/StudentDetails';
import Layout from './Layout/Layout';
import SubjectsPanel from './Subjects/SubjectsPanel';
import AddSubject from './Subjects/AddSubject';
import Classes from './Classes/Classes';
import ClassDetails from './Classes/ClassDetails';
import AddClass from './Classes/AddClass';
import './App.css';
import Teachers from './Teachers/Teachers';
import AddTeacher from './Teachers/AddTeacher';
import TeacherDetails from './Teachers/TeacherDetails';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/students' exact component={StudentsTable} />
          <Route path='/students/add' exact component={AddStudent} />
          <Route path='/students/:id' exact component={StudentDetails} />

          <Route path='/Subjects' exact component={SubjectsPanel} />
          <Route path='/Subjects/Add' exact component={AddSubject} />

          <Route path='/Teachers' exact component={Teachers} />
          <Route path='/Teachers/Add' exact component={AddTeacher} />
          <Route path='/Teachers/:id' exact component={TeacherDetails} />

          <Route path='/Classes' exact component={Classes} />
          <Route path='/Classes/Add' exact component={AddClass} />
          <Route path='/Classes/Details/:classId' exact component={ClassDetails} />

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
