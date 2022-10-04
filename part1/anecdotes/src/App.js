import React, { useState } from 'react'

import { Button } from './components/Button'
import { randomDot } from './utils'
import { Anecdote } from './components/Anecdotes'



const anecdotesArray = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const App = (props) => {
  const { anecdotesArray } = props
  const [selected, setSelected] = useState(0)
  const [points, vote_point] = useState(Array(anecdotesArray.length).fill(0))

  const points_copy = [...points]
  points_copy[selected] += 1

  const indexOfMax = points.indexOf(Math.max(...points))

  return (
    <div>
      <Anecdote name={'Anecdote of the day'} anecdote={anecdotesArray[selected]} point={points[selected]} />

      <div>
        <Button name={'vote'} func={vote_point} value={points_copy} />
        <Button name={'next anecdote'} func={setSelected} value={randomDot(anecdotesArray.length)} />
      </div>

      <Anecdote name={'Anecdote with most votes'} anecdote={anecdotesArray[indexOfMax]} point={points[indexOfMax]} />
    </div>
  )
}

export default App