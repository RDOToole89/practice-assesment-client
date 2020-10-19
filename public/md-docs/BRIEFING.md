# Practice Assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for practice assessment

- You are allowed to ask for help of teachers and fellow students.

#### Rules for the actual assessment (not this one)

See `RULES.md`

#### Start time:

START_TIME_HERE

#### Deadline:

DEADLINE_HERE

#### How to make and submit your homework

- client repo
  - use `create-react-app` to scaffold a new react app
  - `create-react-app` will initialize a git repository for you, so don't make one yourself
  - Go to `github.com`
  - create a new `private` repository
  - make sure **NOT** to initialize with a readme / .gitignore as it will give you errors when you will try to push
  - Add your newly created git repository as a remote to your react app
  - Push the initial version of your app created by `create-react-app` (to test)
- server repo
  - Go to `github.com`
  - create a new `private` repository
  - initialize this repo with a readme and a node.js .gitignore
  - copy the git url it looks like: git@github.com:YOUR_USERNAME/YOUR_PROJECT_NAME.git
  - Navigate to a new folder on your computer which does not contain a git repository already
  - Clone the repository using `git clone git@github.com:YOUR_USERNAME/YOUR_PROJECT_NAME.git`
  - cd into the folder using `cd YOUR_PROJECT_NAME`
  - It should contain the .gitignore and the README.md
  - create a `package.json` using `npm init`
  - start programming and building your server

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Creating components
- Composing components and passing them data via props
- Using `event listeners` and `event handlers`
- Designing and managing component local state with `useState` hook
- Using the `useEffect` hook to fetch data
- Using `react-router-dom` to make static and dynamic routes
- Lifting state to a parent component, and passing callback props to children
- Making controlled forms
- Mapping, filtering, finding & sorting arrays of objects
- Making an express server that serves JSON
- Using npm to install packages, run scripts and write your own npm scripts (e.g. npm run dev)
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the reader, Google (Stackoverflow), or the documentation links we provide below.

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating homework experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

## What are we building?

We are building a React app for a general practitioners office. It has 5 pages

- A homepage with contact details
- A page where patients can see who is on duty and contact details
- A page where new patients can sign up
- A page where doctors view which patients are in their database
- A detail page view the details of a specific patient

In addition we build the JSON api using express so our patients / doctor data can be requested from a server.

## Api

The data for this app is already available through an api. This way you can build your entire app without having to have a working api yourself.

Overview of the entire api

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/

Endpoints:

GET /doctors

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

GET /patients

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients

GET /patients/:patientId

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/5856675843

A JSON with all the data:

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/db

## Wireframe

A wireframe of the app will be provided to you along with this assessment. To get an idea of the app should look like.

## Features

### 1. As a patient I want to be able to navigate to different pages so I can find the information I am looking for

- The app should have navigation on all pages so patients and doctors can easily find what they are looking for
- The home page has 2 buttons
  - Who is on duty: should link to the who is on duty page
  - I am a new patient: should link to the patient sign up page

| Criteria                                                  | Points |
| --------------------------------------------------------- | ------ |
| 4 Static Routes are implemented using react router        | 1      |
| Each route renders a different component                  | 1      |
| A navbar can be used to navigate between the static pages | 1      |
| 2 Buttons link to the correct pages                       | 1      |
| The navbar indicates what page you are on                 | 1      |
| Total                                                     | 5      |

Hint: to indicate what page a user is on use the `<NavLink />` component

https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md

**Note:** If you are unable to implement routing in the app, you may put (render) the components for all the other features in App.js without using Routing at all.

### 2. As a patient I want know how and when to contact the practice

- On the homepage _and_ on the who is on duty page, we should display a phone number of the practice
- We also want to indicate wether the practice is **open** or **closed** at the moment when the user visit the page (updating open or closed while the user is already on the page is not required)

Business logic: the practice is open between 08:00 and 16:59

| Criteria                                                               | Points |
| ---------------------------------------------------------------------- | ------ |
| Phone number is displayed on both pages                                | 0.5    |
| Wether the practice is open right now is displayed on both pages       | 0.5    |
| Wether the practice is open or closed is dynamic, not hardcoded        | 2      |
| To display this information the same component is reused on both pages | 1      |
| Total                                                                  | 4      |

Hint: You will have to google how to get the current hour of the day using javascript to be able to display **open** or **closed** dynamically.

### 3. As a patient I want to see which doctors are on duty so I can determine wether I should go to the doctor today

The information regarding who is on duty is available from our api endpoint:

GET /doctors

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

- On our who is on duty page, we display up to date information about which doctor is on duty.

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Doctor availabilty is displayed on the who is on duty page        | 1      |
| The data is fetched from the api, not hardcoded                   | 2      |
| If the data is still being fetched, display "loading" to the user | 2      |
| The data is displayed using .map                                  | 1      |
| There is a warning in the console regarding "key" props           | -1     |
| Doctor availability is displayed using an html `table` element    | 1      |
| Total                                                             | 7      |

### 4. As a new patient I want to be able to sign up

- We want to make a form where new patients can sign up
- Once they have signed up successfully we want to give them some confirmation everything went well.
- We will not actually store the data, console.logging the data from the form to console is good enough for now

| Criteria                                                                         | Points |
| -------------------------------------------------------------------------------- | ------ |
| A form is displayed on the Patient Signup page                                   | 1      |
| The form has inputs for firstName, lastName, email, phoneNumber & submit         | 0.5    |
| The form has a select input for gender, and a date input for dateOfBirth         | 0.5    |
| The state of the form is controlled using React useState hook(s)                 | 2      |
| When the form is submitted, the user input for all form fields is console.logged | 2      |
| When the form has been submitted, we show a success message to the user          | 2      |
| The success message is an alert, prompt or confirm popup                         | -1     |
| Submitting the form refreshes the page                                           | -2     |
| Total                                                                            | 8      |

### 5. As a doctor I want to be able to view which patients I have, so I can see who I am responsible for

The data for patients & patients is available from our api endpoint

GET /patients

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients

GET /doctors

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

- We want display the data of all our patients so doctors can see all patients registered at their practice
- The patients are sorted by their `lastName` in alphabetical order
- By only the `name`, `id` and `dateOfBirth` of each patient is displayed
- Each patient component has a `show details`, button. Clicking it links to the detail page of a patient.
- A doctor can select their name using a `select` input and view their specific patients. Each patient object has a `doctorId` which corresponds with the `id` of a specific doctor. When the name of a doctor is selected only the patients that match the `doctorId` are displayed.

| Doctor name  | id (doctorId) |
| ------------ | ------------- |
| Dr. Coventry | 1             |
| Dr. Adenet   | 2             |
| Dr. Tollady  | 3             |

| Criteria                                                                  | Points |
| ------------------------------------------------------------------------- | ------ |
| The `name`, `id` & `dateOfBirth` is displayed for all patients            | 1      |
| The data for each patient is displayed using a separate component         | 2      |
| The data is displayed using .map                                          | 1      |
| There is a warning in the console regarding "key" props                   | -1     |
| The patients are sorted by their `lastName` using .sort                   | 2      |
| The data for the patients is fetched from the api, not hardcoded          | 1      |
| Each patient displayed has a `show details` button                        | 0.5    |
| The show details button links to the detail page for that patient         | 1.5    |
| The page has a `select` input for the 3 doctors names and `all`           | 1      |
| When `all` is selected, all patients are displayed                        | 1      |
| Selecting the name of a doctor filters the patients that are displayed    | 3      |
| The names of the doctors in the `select` input are fetched, not hardcoded | 2      |
| Total                                                                     | 16     |

### 6. As a doctor I want to be able to view the details of my patients, so I can make good decisions

The details for a specific patient is available from our api endpoint

GET /patients/:patientId

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/5856675843

| Criteria                                                                      | Points |
| ----------------------------------------------------------------------------- | ------ |
| 1 Dynamic route is implemented using React Router for the patient detail page | 1      |
| The page displays the firstname, lastname, gender, dateOfBirth of a patient   | 0.5    |
| The page displays the email, phoneNumber & prescriptions of a patient         | 0.5    |
| The data on the page is fetched from the api, not hardcoded                   | 2      |
| The data of all the patients is fetched from the api on this page             | -1     |
| Total                                                                         | 5      |

### 7. Express server

- So far we've been using the api which is already online. We can also create this api ourselves using express.
- Your React can make use of the api which is already online, your React app does not have to fetch data from your own api.
- Your own express api should return the same data as the one that is already online.
- All api endpoints should respond with JSON (not HTML)
- The entire set of data from the api is available from the following api endpoint:

https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/db

| Criteria                                                                                       | Points |
| ---------------------------------------------------------------------------------------------- | ------ |
| There is a file called server.js & a package.json, in your server repository                   | 0.5    |
| package.json contains a script called `server`, which runs the server.js file with node        | 0.5    |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon | 0.5    |
| running server.js starts an express server which listens on port 4000                          | 1      |
| Requests to http://localhost:4000/patients get a response of an array with 10 patients         | 1      |
| Requests to http://localhost:4000/doctors get a response of an array of 3 doctors              | 1      |
| Requests to http://localhost:4000/patients/:id get a response of 1 patient object with that id | 2.5    |
| Total                                                                                          | 7      |

### 8. Styling

- Apply some styling to this app using CSS to make it look better

| Criteria                                                               | Points |
| ---------------------------------------------------------------------- | ------ |
| Student has applied at least 5 style rules                             | 1      |
| Styles are split up across at least 2 css files created by the student | 1      |
| Total                                                                  | 2      |

### 9. Finishing up

- Self assess:
  - Make a file called `ASSESSMENT.md`
  - Copy the rubric below into it
  - Score your assessment in the column `Self`
  - Leave room for the evaluator to fill in the `Evaluator` column
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your respositories using `git push origin master`

| Criteria                                                                         | Points |
| -------------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |
| Student has committed at least once per section                                  | 1      |
| Student has pushed their repository using git                                    | 1      |
| Total                                                                            | 6      |

# Self assessment

Copy this this rubric into a file called: `ASSESSMENT.md`

| Section           | Max Points | Self | Evaluator |
| ----------------- | ---------- | ---- | --------- |
| 1 Navigation      | 5          | 0/5  | 0/5       |
| 2 Contact Details | 4          | 0/4  | 0/4       |
| 3 Availability    | 7          | 0/7  | 0/7       |
| 4 Sign up         | 8          | 0/8  | 0/8       |
| 5 Patient DB      | 16         | 0/16 | 0/16      |
| 6 Patient Details | 5          | 0/5  | 0/5       |
| 7 Express server  | 7          | 0/7  | 0/7       |
| 8 Styling         | 2          | 0/2  | 0/2       |
| 9 Finishing up    | 6          | 0/6  | 0/6       |
| Total             | 60         | 0/60 | 0/60      |

| 1. Navigation - Criteria                                  | Points | Self | Evaluator |
| --------------------------------------------------------- | ------ | ---- | --------- |
| 4 Static Routes are implemented using react router        | 1      |      |           |
| Each route renders a different component                  | 1      |      |           |
| A navbar can be used to navigate between the static pages | 1      |      |           |
| 2 Buttons link to the correct pages                       | 1      |      |           |
| The navbar indicates what page you are on                 | 1      |      |           |
| Total                                                     | 5      |      |           |

| 2. Contact Details - Criteria                                          | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Phone number is displayed on both pages                                | 0.5    |      |           |
| Wether the practice is open right now is displayed on both pages       | 0.5    |      |           |
| Wether the practice is open or closed is dynamic, not hardcoded        | 2      |      |           |
| To display this information the same component is reused on both pages | 1      |      |           |
| Total                                                                  | 4      |      |           |

| 3. Availability - Criteria                                        | Points | Self | Evaluator |
| ----------------------------------------------------------------- | ------ | ---- | --------- |
| Doctor availabilty is displayed on the who is on duty page        | 1      |      |           |
| The data is fetched from the api, not hardcoded                   | 2      |      |           |
| If the data is still being fetched, display "loading" to the user | 2      |      |           |
| The data is displayed using .map                                  | 1      |      |           |
| There is a warning in the console regarding "key" props           | -1     |      |           |
| Doctor availability is displayed using an html `table` element    | 1      |      |           |
| Total                                                             | 7      |      |           |

| 4. Sign up - Criteria                                                            | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| A form is displayed on the Patient Signup page                                   | 1      |      |           |
| The form has inputs for firstName, lastName, email, phoneNumber & submit         | 0.5    |      |           |
| The form has a select input for gender, and a date input for dateOfBirth         | 0.5    |      |           |
| The state of the form is controlled using React useState hook(s)                 | 2      |      |           |
| When the form is submitted, the user input for all form fields is console.logged | 2      |      |           |
| When the form has been submitted, we show a success message to the user          | 2      |      |           |
| The success message is an alert, prompt or confirm popup                         | -1     |      |           |
| Submitting the form refreshes the page                                           | -2     |      |           |
| Total                                                                            | 8      |      |           |

| 5. Patient DB - Criteria                                                  | Points | Self | Evaluator |
| ------------------------------------------------------------------------- | ------ | ---- | --------- |
| The `name`, `id` & `dateOfBirth` is displayed for all patients            | 1      |      |           |
| The data for each patient is displayed using a seperate component         | 2      |      |           |
| The data is displayed using .map                                          | 1      |      |           |
| There is a warning in the console regarding "key" props                   | -1     |      |           |
| The patients are sorted by their `lastName` using .sort                   | 2      |      |           |
| The data for the patients is fetched from the api, not hardcoded          | 1      |      |           |
| Each patient displayed has a `show details` button                        | 0.5    |      |           |
| The show details button links to the detail page for that patient         | 1.5    |      |           |
| The page has a `select` input for the 3 doctors names and `all`           | 1      |      |           |
| When `all` is selected, all patients are displayed                        | 1      |      |           |
| Selecting the name of a doctor filters the patients that are displayed    | 3      |      |           |
| The names of the doctors in the `select` input are fetched, not hardcoded | 2      |      |           |
| Total                                                                     | 16     |      |           |

| 6. Patient Details - Criteria                                                 | Points | Self | Evaluator |
| ----------------------------------------------------------------------------- | ------ | ---- | --------- |
| 1 Dynamic route is implemented using React Router for the patient detail page | 1      |      |           |
| The page displays the firstname, lastname, gender, dateOfBirth of a patient   | 0.5    |      |           |
| The page displays the email, phoneNumber & prescriptions of a patient         | 0.5    |      |           |
| The data on the page is fetched from the api, not hardcoded                   | 2      |      |           |
| The data of all the patients is fetched from the api on this page             | -1     |      |           |
| Total                                                                         | 5      |      |           |

| 7. Express server - Criteria                                                                   | Points | Self | Evaluator |
| ---------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| There is a file called server.js & a package.json, in your server repository                   | 0.5    |      |           |
| package.json contains a script called `server`, which runs the server.js file with node        | 0.5    |      |           |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon | 0.5    |      |           |
| running server.js starts an express server which listens on port 4000                          | 1      |      |           |
| Requests to http://localhost:4000/patients get a response of an array with 10 patients         | 1      |      |           |
| Requests to http://localhost:4000/doctors get a response of an array of 3 doctors              | 1      |      |           |
| Requests to http://localhost:4000/patients/:id get a response of 1 patient object with that id | 2.5    |      |           |
| Total                                                                                          | 7      |      |           |

| 8. Styling - Criteria                                                  | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Student has applied at least 5 style rules                             | 1      |      |           |
| Styles are split up across at least 2 css files created by the student | 1      |      |           |
| Total                                                                  | 2      |      |           |

| 9. Finishing up - Criteria                                                       | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |      |           |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |      |           |
| Student has committed at least once per section                                  | 1      |      |           |
| Student has pushed their repository using git                                    | 1      |      |           |
| Total                                                                            | 6      |      |           |
