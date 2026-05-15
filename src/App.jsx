import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
export const UserContext = createContext();

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState("");

  return (
    <>
      <UserContext.Provider value={{name,setName}}>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={} /> */}
        </Routes>


      </UserContext.Provider>
    </>
  )
}

export default App
