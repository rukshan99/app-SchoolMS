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
import SubjectDetails from './Subjects/SubjectDetails';
import TeacherDetails from './Teachers/TeacherDetails';
import StudentsByAge from './Students/StudentsByAge';
import StudentsByClass from './Classes/StudentsByClass';
import EditStudent from './Students/EditStudent';
import EditClass from './Classes/EditClass';
import EditSubject from './Subjects/EditSubject';
import TeachersBySubject from './Subjects/TeachersBySubject';
import EditTeacher from './Teachers/EditTeacher';
import TeachersBySalary from './Teachers/TeachersBySalary';
import Login from './Login/Login';
import PrivateRoute from './Login/PrivateRoute';

let isLoggedIn = false;
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");
isLoggedIn = username === 'admin@sms.com' && password === 'admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Login} ></Route>
      </Switch>
      {isLoggedIn &&
        <Layout>
          <Switch>
            <PrivateRoute path='/students' exact component={StudentsTable} />
            <PrivateRoute path='/students/add' exact component={AddStudent} />
            <PrivateRoute path='/students/:id' exact component={StudentDetails} />
            <PrivateRoute path='/students-by-age' exact component={StudentsByAge} />
            <PrivateRoute path='/students/edit/:id' exact component={EditStudent} />

            <PrivateRoute path='/Subjects' exact component={SubjectsPanel} />
            <PrivateRoute path='/Subjects/Add' exact component={AddSubject} />
            <PrivateRoute path='/Subjects/Details/:subjectId' exact component={SubjectDetails} />
            <PrivateRoute path='/subjects/edit/:subjectId' exact component={EditSubject} />
            <PrivateRoute path='/teachers-by-subject' exact component={TeachersBySubject} />

            <PrivateRoute path='/Teachers' exact component={Teachers} />
            <PrivateRoute path='/Teachers/Add' exact component={AddTeacher} />
            <PrivateRoute path='/Teachers/Details/:id' exact component={TeacherDetails} />
            <PrivateRoute path='/Teachers/edit/:id' exact component={EditTeacher} />
            <PrivateRoute path='/teachers-by-salary' exact component={TeachersBySalary} />

            <PrivateRoute path='/Classes' exact component={Classes} />
            <PrivateRoute path='/Classes/Add' exact component={AddClass} />
            <PrivateRoute path='/Classes/Details/:classId' exact component={ClassDetails} />
            <PrivateRoute path='/students-by-class' exact component={StudentsByClass} />
            <PrivateRoute path='/Classes/Edit/:classId' exact component={EditClass} />
          </Switch>
        </Layout>}
    </div>
  );
}

export default App;
