## 2021S2_REG_WE_50
## School Management System
[![Board Status](https://dev.azure.com/rukshan99/d06702f0-b3f4-4247-971a-6b27fdc31e69/779cc9c4-70e2-439e-b7a9-41f984c6f6c0/_apis/work/boardbadge/81df8af8-945d-41cc-b762-5054d11acafc?columnOptions=1)](https://dev.azure.com/rukshan99/d06702f0-b3f4-4247-971a-6b27fdc31e69/_boards/board/t/779cc9c4-70e2-439e-b7a9-41f984c6f6c0/Microsoft.RequirementCategory/)
### Group Details
| Student ID | Name                  | Username    |
|------------|-----------------------|-------------|
| IT19129204 | Jayasekara R.T.R      | rukshan99   |
| IT19147024 | Kariyawasam K.G.S.S.K | sahan-98    |
| IT19126234 | Jayasinghe S.L        | sjayasinghe |
| IT19121352 | K.N.D.A Kudarachchi   | navoxya     |

### Project Description
The project is a web-based school management system that helps to manage teachers, students, classes, and subjects. 
The system can also be used for generating essential reports regarding teacher, student, class, and subject details.

### Technologies
As for the main technology stack, the system is developed with MERN stack. As for other tools and technologies, 
Azure Boards is used for planning and managing the project, Git and GitHub for version control management, 
SonarQube for continuous inspection of code quality, and Selenium for testing the system functionalities and interfaces.

### Getting Started
#### Prerequisite
* [Git](https://git-scm.com/downloads) installed
* [Node](https://nodejs.org/en/download/) and [NPM](https://nodejs.org/en/download/) installed
* MongoDB (locally or [Atlas](https://www.mongodb.com/cloud/atlas))
#### Setting up the Backend
* Clone the project. &#8594; `git clone https://github.com/rukshan99/api-SchoolMS.git`
* Setup environment variables
   * Add a `.env` file in the root directory with `MONGO_USER, MONGO_PASSWORD, DB_NAME`.
   * If you want to use MongoDB Atlas and don't know how to get the connection string, [refer this](https://docs.mongodb.com/guides/cloud/connectionstring/).
* Install the dependencies with NPM. &#8594; `npm i`
* Run the server
   * Development mode &#8594; `npm run dev` (server will run on port 8000)
   * Normal &#8594; `node index.js`
#### Setting up the Frontend
* Clone the project. &#8594; `git clone https://github.com/rukshan99/app-SchoolMS.git`
* Install the dependencies with NPM. &#8594; `npm i`
* Available scripts
   * `npm start`\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   * `npm test`\
Launches the test runner in the interactive watch mode.
   * `npm run build`\
Builds the app for production to the `build` folder.
