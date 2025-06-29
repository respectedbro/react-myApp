import './App.css'
import UserCard from './userCard.jsx';

function App() {

  return (
    <>
      <UserCard name='Мария' age={25}/>
      <UserCard name='Анна' age={20}/>
      <UserCard name='Елена' age={30}/>
    </>
  )
}

export default App
