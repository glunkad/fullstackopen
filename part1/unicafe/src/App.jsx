import { useState } from 'react'

const Button = ({ text, handelClick }) => {
  return (
    <button onClick={handelClick} >
      {text}
    </button>
  )
}

const Heading = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const StatisticLine = ({ text, count }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{count} {text === 'positive' ? "%" : ""} </td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  if (all === 0) {
    return <div>No feedback given</div>
  }

  let average = (good - bad) / all
  let positive = good * 100 / all

  return (
    <table>
      <StatisticLine text='good' count={good} />
      <StatisticLine text='neutral' count={neutral} />
      <StatisticLine text='bad' count={bad} />
      <StatisticLine text='all' count={all} />
      <StatisticLine text='average' count={average} />
      <StatisticLine text='positive' count={positive} />
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodCount = () => {
    console.log('Good count', good)
    setGood(good + 1)
  }

  const increaseNeutralCount = () => {
    console.log('Neutral count', neutral)
    setNeutral(neutral + 1)
  }

  const increaseBadCount = () => {
    console.log('Bad count', good)
    setBad(bad + 1)
  }

  return (
    <div>
      <Heading text='give feedback' />
      <Button handelClick={increaseGoodCount} text='good' />
      <Button handelClick={increaseNeutralCount} text='neutral' />
      <Button handelClick={increaseBadCount} text='bad' />
      <Heading text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
