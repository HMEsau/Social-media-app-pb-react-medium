import { useState } from 'react'
import logo from './image.png';
import Login from './Components/Login';

function App () {
  return (
    <div className='bg-zinc-50 h-max min-h-screen w-full'>
      <Login />
    </div>
  );
}
export default function () {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}