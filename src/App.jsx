import { useState, useRef } from "react";
/*------ q1 start -----------------*/
export const userData = {

  firstName: 'Andrey',
  lastName: 'Krutauz',
  title: 'Course Instructor'

};

function User() {
  return (
    <div id="user">
      <h2>TODO: FIRST NAME LAST NAME</h2>
      <p>TODO: TITLE</p>
    </div>
  );
}

/*------ q1 end -----------------*/

/*-------q2 start ---------------*/
function CourseGoal() {
  return (
    <li>
      <h2>TITLE</h2>
      <p>DESCRIPTION</p>
    </li>
  );
}

function Q2App() {
  return (
    <div id="app">
      <h1>Time to practice props</h1>
      <p>My goals</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
      </ul>
    </div>
  );
}


/*-------q2 end -----------------*/

/*-------q3 start ---------------*/

function Card() {
  return (
    <></>
  );

}

function Q3App() {
  return (
    <div id="app">
      <h1>Instructors</h1>
      <Card name="Andrey Krutauz">
        <p>Andrey is a React instructor at Tav College.</p>
        <p>
          <a href="mailto:krutauz@po4ti.net">Email Andrey</a>
        </p>
      </Card>
      <Card name="Someone Someone">
        <p>Someone is a Pyhton instructor at Tav College.</p>
        <p>
          <a href="mailto:someone@po4ti.net">Email Someone</a>
        </p>
      </Card>
    </div>
  );
}

/*-------q3 end -----------------*/


/* -----q4 start ----------------*/

const user = {
  email: '',
  password: '',
  loggedIn: false,
};

//Add your handler code here

function Q4App() {
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with this input. */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with this input. */}
        <input type="password" />
      </p>

      <p id="actions">
        <button>Login</button>
      </p>
    </div>
  );
}

/*-------q4 end -----------------*/

/* -----q5 start ----------------*/


function handleCreateUser (name) {
  //add event hadler code here
}

function Q5App() {
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with this input. */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with this input. */}
        <input type="password" />
      </p>

      <p id="actions">
        <button>Login</button>
      </p>
    </div>
  );
}

/*-------q5 end -----------------*/

/*--------q6 start --------------*/
function Q6App() {
  
  return (
      <div>
          <p id="user">Todo ... add price here</p>
          <button id="user">Apply Discount</button>
      </div>
  );
}

/*---------q6 end ---------------*/

/*---------q7 start -------------*/
function Q7App() {
  return (
    <div id="q7">
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button id="user">Proceed</button>
      </div>
      <button id="user">Delete</button>
    </div>    
  );
}

/*---------q7 end ---------------*/


/*----------q8 start -----------*/

function Q8App() {

  return (
      <div>
          <p>Style me!</p>
          <button>Toggle style</button>
      </div>
  );
}
/*----------q8 end -------------*/

/*----------q9 start ------------*/
function Todo() {
  return <li>Add code here ....</li>;
}

const TODOS = ["Learn React", "Practice React", "Profit!"];

function Q9App() {
  return (
    <div>
      <ul></ul>
    </div>
  );
}

/*----------q9 end --------------*/


/*----------q10 start ------------*/
function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}

function Q10App() {
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

/*----------q10 end --------------*/

/*----------q11 start --------------*/

function Q11App() {
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input type="file" accept="image/*" />
        <button>Pick Image</button>
      </p>
    </div>
  );
}
/*----------q11 end --------------*/



const components = [(<User/>), (<Q2App/>), (<Q3App/>),  (<Q4App/>), 
(<Q5App/>), (<Q6App/>), (<Q7App/>), (<Q8App/>), (<Q9App/>), (<Q10App/>), (<Q11App/>)];

export default function App() { 

  return (
    <div>
      
        {components[10]}
        
    </div>
  );
}





