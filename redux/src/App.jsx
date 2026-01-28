import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { increment, decrement } from './redux/features/counterSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default App
