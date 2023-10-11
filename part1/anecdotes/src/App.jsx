import { useState } from "react"

const Heading = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  )
}

const MostVotedAnecdote = ({ anecdotes }) => {
  let mostVotes = 0
  let textOfAnecdote = ''

  for (const anecdote of anecdotes) {
    if (anecdote.vote > mostVotes) {
      mostVotes = anecdote.vote
      textOfAnecdote = anecdote.text
    }
  }
  return <Anecdote anecdote={textOfAnecdote} vote={mostVotes} />
}

const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {
      text: 'If it hurts, do it more often.',
      vote: 0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      vote: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      vote: 0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      vote: 0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      vote: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      vote: 0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', vote: 0
    },
    {
      text: 'The only way to go fast, is to go well.', vote: 0
    }
  ])

  const [selected, setSelected] = useState(0)

  const getRandomNumber = () => Math.floor(Math.random() * anecdotes.length)

  const getRandomState = () => {
    setSelected(getRandomNumber(selected))
  }

  const increaseVoteCount = () => {
    let copy = [...anecdotes]
    copy[selected].vote += 1
    setAnecdotes(copy)
  }

  return (
    <div>
      <Heading text='Anecdote of the day' />
      <Anecdote anecdote={anecdotes[selected].text} vote={anecdotes[selected].vote} />
      <Button handleClick={increaseVoteCount} text='vote' />
      <Button handleClick={getRandomState} text='next anecdote' />
      <Heading text='Anecdote with most votes' />
      <MostVotedAnecdote anecdotes={anecdotes} />
    </div>
  )
}
export default App
