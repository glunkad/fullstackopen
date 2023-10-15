import { useEffect, useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Country from './components/Country'

const App = () => {

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])


  useEffect(() => {
    console.log('country name effect running!, ')

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        // console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (search) {
      setCountriesToShow(countries.filter((country) => country.name.common.toLowerCase().includes(search.toLocaleLowerCase())))
    }
  }, [search])

  const handleChange = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div>
      <Search search={search} handleChange={handleChange} />
      <Country countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow} />
    </div>
  )
}

export default App 