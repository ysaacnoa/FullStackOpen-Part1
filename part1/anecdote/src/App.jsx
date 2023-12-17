

import { useState } from 'react'

const AnecdoteOfDay = ({text,anecdotes, index}) =>{
  return(
    <>
      <h1>{text}</h1>
      <h3>{anecdotes[index]}</h3>
    </>
  )
} 

const Button = ({onClick,text}) =>{
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(8).fill(0));


  const getRandom = (max) => {
     max = Math.round(Math.random()*7)
     return max
  }

  const votedAnecdote = (index) =>{
    const copy = [...voted]
    copy[index] += 1
    return ()=>setVoted(copy)
  }
 
  const handleClickNext = () => setSelected(getRandom(selected))


  return (
    <section>
      <AnecdoteOfDay
        text='Anecdote Of the Day'
        anecdotes={anecdotes}
        index={selected}
      />

      <p>Has voted {voted[selected]}</p>
      {console.log(voted)}

      <Button
        onClick={votedAnecdote(selected)}
        text='Vote'
      />

      <Button
        onClick={handleClickNext}
        text='Next Anecdote'
      />
      
      <AnecdoteOfDay
        text='Anecdote with most votes'
        anecdotes={anecdotes}
        index={voted.indexOf(Math.max(...voted))}
      />

      <p>has {Math.max(...voted)} votes</p> 
        
    </section>
  )
}

export default App