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

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/students' exact component={StudentsTable} />
          <Route path='/students/add' exact component={AddStudent} />
          <Route path='/students/:id' exact component={StudentDetails} />
          <Route path='/students-by-age' exact component={StudentsByAge} />
          <Route path='/students/edit/:id' exact component={EditStudent} />

          <Route path='/Subjects' exact component={SubjectsPanel} />
          <Route path='/Subjects/Add' exact component={AddSubject} />
          <Route path='/Subjects/Details/:subjectId' exact component={SubjectDetails} />
          <Route path='/subjects/edit/:subjectId' exact component={EditSubject}/>
          <Route path='/teachers-by-subject' exact component={TeachersBySubject} />


          <Route path='/Teachers' exact component={Teachers} />
          <Route path='/Teachers/Add' exact component={AddTeacher} />
          <Route path='/Teachers/Details/:id' exact component={TeacherDetails} />
          <Route path='/Teachers/edit/:id' exact component={EditTeacher} />

          <Route path='/Classes' exact component={Classes} />
          <Route path='/Classes/Add' exact component={AddClass} />
          <Route path='/Classes/Details/:classId' exact component={ClassDetails} />
          <Route path='/students-by-class' exact component={StudentsByClass} />
          <Route path='/Classes/Edit/:classId' exact component={EditClass} />

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
