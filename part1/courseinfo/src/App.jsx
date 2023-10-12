const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exerciese}
      </p>
    </div>
  )
}
const Header = ({ course }) => {
  console.log(course)
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exerciese={parts[0].exercises} />
      <Part name={parts[1].name} exerciese={parts[1].exercises} />
      <Part name={parts[2].name} exerciese={parts[2].exercises} />
    </div>
  )
}

const Total = ({ parts }) => {
  const tot = parts[0].exercises + parts[1].exercises + parts[2].exercises
  console.log(tot)
  return (
    <p>Number of exerciese {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

export default App