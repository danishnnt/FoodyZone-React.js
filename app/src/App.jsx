import { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components'
import SearchResults from './components/SearchResults/SearchResults';
 
export const BASE_URL = "http://localhost:9000"

function App() {

  const [data, setData] = useState(null);
  const [filteredData , setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState()
  const [selectedButton , setSelectedButton ] = useState("All")

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

     try {
      const response = await fetch(BASE_URL)

      const json = await response.json();
      setData(json);
      setFilteredData(json);
      setLoading(false);
     }
     catch (error) {
      setError("unable to fetch data")
     }
  }
     fetchFoodData()
  },[]);
  
  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>

  const searchFood = (e) => {
    const searchValue =  e.target.value
    
    if (searchValue=="") {
     setFilteredData(null);
  }
   const filter = data?.filter((food) => 
    food.name.toLowerCase().includes(searchValue.toLowerCase())
   );
   setFilteredData(filter);

  }

  const FilterFood  = (type) => {
    if (type=="all") {
      setFilteredData(data)
      setSelectedButton("all")
    }
    const filter = data?.filter((food) => 
    food.type.toLowerCase().includes(type.toLowerCase())
   );
   setFilteredData(filter);
   setSelectedButton(type);
  }
 
  return (
    <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src='/logo.svg' alt="Logo" />
          </div>
          <div className='search'>
            <input onChange={searchFood}  type='text' placeholder='Search Food'/>
          </div>
        </TopContainer>
        <FilterContainer>
          <button onClick={() =>FilterFood("")}>All</button>
          <button onClick={() =>FilterFood("breakfast")}>BreakFast</button>
          <button onClick={() =>FilterFood("lunch")}>Lunch</button>
          <button onClick={() =>FilterFood("dinner")}>Dinner</button>
        </FilterContainer>
      </Container>
      <SearchResults data={filteredData}/>
    </>
  )
}


export default App

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search input {
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }

  /* @media (0 < width < 600px) {
    flex-direction: column;
    height: 60px;
    padding: 2vh;
  } */
`
const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 12px;
padding-bottom: 30px;

button {
padding: 6px 12px;
background: #FF4343;
border-radius: 5px;
border: none;
color: white;
cursor: pointer;

&:hover{
  background-color: #290000;
}
 }

`



