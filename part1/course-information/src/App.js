

import './App.css';

import {Header} from './components/Header'
import {Content} from './components/Content'
import {Total} from './components/Total'


// our regular app using variables

/* const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10 
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return(
    <div>
      
      <h1>{course}</h1>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  
  
    </div>
  )
}

 */



// refactoring our App using objects and arrays maps and propsn

const App = () =>{
  const course = { 
  courseName:  'Half Stack application development',
  parts: [ 
    {
      partName: 'Fundamentals of React',
      exercises: 10
    }, 
    {
      partName: 'Using props to pass data',
      exercises: 7
    },
    {
      partName: 'State of a component',
      exercises: 14
    }
  ] 
  }

  return(
    <div class="App-header">
      <Header course={course.courseName} /> 
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(x => x['exercises'])} />
    </div>
  )








}


export default App;
