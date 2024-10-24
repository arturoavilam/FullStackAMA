import { useState } from "react" /* Permite traer una variable de estado que permite actualizarse despues */

const Hello = (props) => {
  console.log(props)
  const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
      <p>So yo were probably born in {bornYear()}</p>
    </div>
  )
}
const footer = () =>{
  return (
    <div>
      greeting app created by <a href="avilama">avilama</a>
    </div>
  )

}

const AppAB = (props) => {
  const name = 'Peter'
  const age = 10
  const  {counter} = props /* Contador de ejemplo que se uso para render*/

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Lucas" age={26+10} />
      <div>{counter}</div>
      <footer />
    </>
  )
}

const AppState = () => {
  const [counter,setCounter] = useState(0)
  setTimeout (
    () => setCounter(counter+1),1000
  )

  return(
    <>
    <h1>Stateful Component</h1>
    <>Usa un contador como en ciclo de renderizado sin la necesidad de llamar de nuebo el root.</>
    <div>rendering... {counter}</div>

    </>
  )
}

/* 

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

Refactoring the components

*/

const Display = ({ counter }) => <div>{counter}</div>


const Button = (props) => {
  return (
    <button onClick = {props.onClick}>
      {props.text}
    </button>
  )
}

/*Event Handling*/ 
const AppHandling = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {
    setCounter(counter+1)
  }
  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter (counter -1)
  /*
  Setting the function inside (-counter) the button or outside(+counter).
  */
  return (
    <>
    <h1>Event Handling</h1>
    <div>Counter: {counter}</div>
    <button onClick = {increaseByOne}> Counter + 1 </button>
    <button onClick = {() => setCounter(counter -1)}> Counter - 1 </button> 
    <button onClick = {setToZero}> Set to Zero </button>
    
    <p>Reusable Button...</p>
    <Display counter={counter}/>
    <Button 
      onClick ={increaseByOne}
      text= '+1'
    />
    <Button 
      onClick ={decreaseByOne}
      text= '-1'
    />
    <Button 
      onClick ={setToZero}
      text= 'Zero'
    />
    </>
  )
}

/* Passing State */

const AppComplexState = () => {
  const[left, setleft] = useState(0)
  const[right, setRight] = useState (0)

  const[clicks, setClicks] = useState({
    left:0, right:0
  })

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left+1,
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right+1
    }
    setClicks(newClicks)
  }

  return(
  <div>
    <h1>More Complex States</h1>
    <>Left: {left} </>
    <>Right {right} </>
    <p></p>
    <button onClick={() => setleft(left +1)}>
      Left
    </button>
    <button onClick={() => setRight(right+1)}>
      Right
    </button>
    <p>Using the same component:</p>
    <>Left: {clicks.left} </>
    <>Right: {clicks.right }</>
    <p></p>
    <button onClick={handleLeftClick}>Left</button>
    <button onClick={handleRightClick}>Right</button>
    </div>
    )

}



const appHandling = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <h1>Handling Arrays</h1>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>Total of Clicks: {allClicks.length} </p>
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button2 = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Button3 = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [valueExample, setValue] = useState(10)

  const handleLeftClick = () => {
    console.log('clicked L button')
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    console.log('clicked R button')
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleResetClick = () => {
    setLeft(0)
    setRight(0)
    setAll([])
  }

  const hello = (who) => () => {
    console.log('hello', who)
  }

  return (
    <div>
      <h1>Conditional rendering</h1>
      {left}
      <Button2 handleClick={handleLeftClick} text='left' />
      <Button2 handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <button onClick={handleResetClick}>Reset</button>
      <p>{valueExample}</p>
      <button onClick={() => setValue(0)}>Set Value 0</button>
      <button onClick={() => setValue(10)}>Set Value 10</button>
      <button onClick={() => setValue(valueExample+1)}>+1</button>
      <p></p>
      <button onClick={hello('world')}>button World</button>
      <button onClick={hello('react')}>button React</button>
      <button onClick={hello('function')}>button Function</button>
      <p>{valueExample}</p>
      <Button3 handleClick={() => setValue(1000)} text="thousand" />
      <Button3 handleClick={() => setValue(0)} text="reset" />
      <Button3 handleClick={() => setValue(valueExample + 1)} text="increment" />
    </div>
  )
}

/*
Conditional Rendering

https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#complex-state

*/



export default App