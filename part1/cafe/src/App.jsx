import { useState } from 'react'
const Statistics=(props)=>{
   const all=props.good+props.bad+props.neutral
   const avg=all===0?0:(props.good*1+props.neutral*0+props.bad*(-1))/all;
      const positive=props.good===0?0:(props.good/all)*100 
    
    
  if (all===0){
    return (
      <h2>No feedback given</h2>
    )
  }
  return (

    <table>
  <tbody>
    <tr>
      <td>good</td>
      <td>{props.good}</td>
    </tr>
    <tr>
      <td>neutral</td>
      <td>{props.neutral}</td>
    </tr>
    <tr>
      <td>bad</td>
      <td>{props.bad}</td>
    </tr>
    <tr>
      <td>all</td>
      <td>{all}</td>
    </tr>
    <tr>
      <td>average</td>
      <td>{avg}</td>
    </tr>
    <tr>
      <td>positive</td>
      <td>{positive}%</td>
    </tr>
  </tbody>
</table>

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
    <button onClick={()=>setGood(good+1)}>good</button>
    <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
    <button onClick={()=>setBad(bad+1)}>bad</button>
    <p>Statistics</p>
    <Statistics good={good} neutral={neutral} bad={bad} />
     
    
     
    </div>
  )
}






export default App