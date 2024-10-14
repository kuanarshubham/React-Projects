import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Box from './components/Box';

function App() {

  return (
    <UserContextProvider>
      <Box />
    </UserContextProvider>
  )
}

export default App
