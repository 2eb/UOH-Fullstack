import { useState } from "react";

const Title = ({text}) => <h2>{text}</h2>

const Display = ({anecdotes, votes, index}) => {
  return (
    <>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} vote(s)</p>
    </>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))
  //console.log(votes)

  const randomize = () => {
    const number = Math.floor(Math.random() * 7)
    //console.log(number)
    setSelected(number)
  }
  const updateVotes = () => {
    //console.log('clicked update votes')
    //console.log('state before update on index ',selected,': ', votes)
    const votesCopy = [...votes]
    votesCopy[selected] +=1
    //console.log('updated array', votesCopy)
    setVotes(votesCopy)
  }

  const getMostVotedIndex = () => {
    const max = Math.max(...votes);
    //console.log(max)
    return votes.indexOf(max)
  }
  
  return (
    <div>
      <Title text= 'Anecdote of the day' />
      <Display anecdotes={anecdotes} votes={votes} index={selected} />
      <Button onClick={updateVotes} text='vote' />
      <Button onClick={randomize} text='next anecdote' />
      <Title text='Anecdote with most votes' />
      <Display anecdotes={anecdotes} votes={votes} index={getMostVotedIndex()} />
    </div>
  )
}

export default App;
