
import { useState } from 'react'

const  Button = ({handleClick, text}) =>{
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Stadistics = ({good, neutral, bad, accum}) =>{
  const average = (good + neutral*0 + bad*-1)/(accum)
  const positive = (good/accum)*100
  return(
    <table>
      <StadisticLine text='Good' stadistic={good}/>
      <StadisticLine text='Neutral' stadistic={neutral}/>
      <StadisticLine text='Bad' stadistic={bad}/>
      <StadisticLine text='Average' stadistic={average.toFixed(1)}/>
      <StadisticLine text='Positive' stadistic={positive.toFixed(1)}/>
    </table>
  )
}

const StadisticLine = ({text, stadistic}) =>{
  return(
    <>
    <tr>
      <td>{text}:</td> 
      <td>{text === 'Positive' 
          ? `${stadistic}%` 
          : stadistic}
      </td>
    </tr>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleClickGlobal = (setFeedBack, state) => {
    return (
      setFeedBack(state+1)
    )
  }
  
  let accum = good + neutral + bad;

  return (
    <>
      <header>
        <h1>Give FeedBack</h1>
        <Button 
          handleClick={()=> handleClickGlobal(setGood,good)}
          text='Good'
        />
        <Button 
          handleClick={()=> handleClickGlobal(setNeutral,neutral)}
          text='Neutral'
        />
        <Button 
          handleClick={()=> handleClickGlobal(setBad,bad)}
          text='Bad'
        />

      </header>

      <section>
        <h1>Stadictics</h1>
        {(good || neutral || bad)
        ?<Stadistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          accum={accum}
        />:<h2>No feedback given</h2>
        }
      </section>
    </>
  )
}

export default App