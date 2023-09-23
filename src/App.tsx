import { decrement, increment, incrementByAmount } from './redux/features/counter/couterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {

  const{count} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
   <div>
    <div className="flex gap-6 mx-8 my-8" >
  <button className="border-2 border-green-500 rounded-md px-2 py-3" onClick={()=> dispatch(increment())}>
    Increment
  </button>
  <div>{count}</div>
  <button className="border-2 border-red-500 rounded-md px-2 py-3" onClick={()=> dispatch(decrement())}>
    Decrement
  </button>
  <button className="border-2 border-yellow-500 rounded-md px-2 py-3" onClick={()=> dispatch(incrementByAmount(5))}>
    IncrementByValue
  </button>
    </div>
   </div>
  )
}

export default App
