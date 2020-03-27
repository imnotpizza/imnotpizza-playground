import React from "react";
import Counter from './components/Counter'
import Todos from './components/Todos'
import CounterContainer from './containers/CounterContainer'
import TodosContainer from './containers/TodosContainer'
import Sample from './containers/Sample'


const App=()=>{
  return(
    <div>
      <CounterContainer></CounterContainer>
      <Sample></Sample>
    </div>
  )
}


export default App;



