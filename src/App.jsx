import { useState, useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './Utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './Store/homeSlice'


function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home
  )

  useEffect(() => {
    apiTesting();
  }, [])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        dispatch(getApiConfiguration(res));
        console.log(res)
      })
  }


  return (
    <>
      <div className="app">app
        {url?.total_pages}
      </div>

    </>
  )
}

export default App
