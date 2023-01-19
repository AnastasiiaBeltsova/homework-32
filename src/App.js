import { Provider } from 'react-redux'
import { AddTodo } from './components/addTodo'
import { TodosList } from './components/todoList'
import './style/style.css'
import { store } from './engine/config/store'
import { Footer } from './components/footer'

function App() {
  
  return (
    <Provider store={store}>
      <div className="container">
        <h1>TODO</h1>
        <AddTodo /> <br/>
        <h2>TODOS</h2> <br />
        <hr />
        <TodosList />
        <div><Footer/></div>
      </div>
    </Provider>
  )
}

export default App;
