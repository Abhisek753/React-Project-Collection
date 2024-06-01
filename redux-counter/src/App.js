import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, Reset } from './redux/action/counterAction';

function App() {
  // const [count,setSount]=useState()
  const count=useSelector((store)=>store.count)
  const dispatch=useDispatch()

  const handleIncrease=()=>{
    dispatch(Increment())
  }
  const handleDecrease=()=>{
      dispatch(Decrement())
  }
const reset=()=>{
  dispatch(Reset())

}
  return (
    <div className="App p-4 bg-slate-300">
      <h2 className='text-xl mb-8 text-orange-400'>Counter App By Abhisek</h2>
      <div>
         <p className='font-bold text-xl text-red-400'>Count:-<span className='text-black ml-4' >{count}</span></p>
      </div>
      <div>
      <button className='bg-blue-500 px-4 py-2 m-4' onClick={handleIncrease}>Add</button>
      <button className='bg-blue-500 px-4 py-2 m-4' onClick={handleDecrease}>Subtract</button>
      <button  className='bg-red-500 px-4 py-2 m-4' onClick={reset}>Reset</button>


      </div>

    </div>
  );
}

export default App;
