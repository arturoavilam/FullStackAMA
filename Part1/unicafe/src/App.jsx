import { useState } from 'react'

const StaticsLine = (props) => {
  console.log(props)
  return(
    <tr>    
      <td>{props.text}</td> 
      <td>{props.value} </td>
    </tr> 
  )
}


const Statics = (props) => {
  console.log(props)
  const sum = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad)/sum).toFixed(1)
  const positive = ((props.good / sum)*100).toFixed(1)

  if(sum==0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>

      <StaticsLine text = "good" value = {props.good} />
      <StaticsLine text = "neutral" value = {props.neutral} />
      <StaticsLine text = "bad" value = {props.bad} />
      <StaticsLine text = "all" value = {sum} />
      <StaticsLine text = "average " value = {average} />
      <StaticsLine text = "positive " value = {positive+ " %"} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>statistics</h1>
      <Statics good = {good} neutral ={neutral} bad = {bad}/>

    </div>
  )
}

/*
1.12 anecotes
*/

export default App