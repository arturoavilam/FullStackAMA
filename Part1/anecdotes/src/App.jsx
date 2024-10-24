import { useState } from 'react'

const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdote = () =>{
    const randomIndex = Math.floor(Math.random() * 8)
    setSelected(randomIndex)
    console.log(selected)
  }

  const copy = () =>{
    const newVotes = [...points]
    newVotes[selected] += 1
    setPoints(newVotes)
    console.log("Votes:", newVotes)
  }

  const mostVotedAnecdote = () => {
    const maxVotes = Math.max(...points)
    const indexMax = points.indexOf(maxVotes)
    return { anecdote: anecdotes[indexMax], votes: maxVotes } 
  }

  const { anecdote: topAnecdote, votes: topVotes } = mostVotedAnecdote();
  
  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>
      {anecdotes[selected]}<br/>
      has {points[selected]} votes
      <br/>
      <button onClick={copy}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
    </div>
    <h1>Anecdote with most votes</h1>
    {topAnecdote}<br/>
    has {topVotes} votes
     </>
  )
}

export default App