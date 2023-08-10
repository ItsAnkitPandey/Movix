import { useState, useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './Utils/api'

function App() {

useEffect(()=>{
  apiTesting();
}, [])

  const apiTesting = ()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
    })
  }
  

  return (
    <>
    <div className="app">app</div>
        
    </>
  )
}

export default App
