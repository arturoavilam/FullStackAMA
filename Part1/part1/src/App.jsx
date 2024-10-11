const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
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

const App = () => {
  const name = 'Peter'
  const age = 10
  
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="George" age={26+10} />
      <Hello name={name} age={age}/>
      <footer />
    </>
  )
}

export default App