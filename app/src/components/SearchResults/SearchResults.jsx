import styled from "styled-components"
import { BASE_URL, Container } from "../../App"

const SearchResults = ({ data }) => {
    
  return (
    // <Container>
    <FoodCardContainer>
          <FoodCards>
           {
            data?.map((food) => <FoodCard key={food.name}>
                <div className="food_image">
                <img src={BASE_URL + food.image} alt="image" /> 
                </div>
                <div className="food_info">
                    <div className="info">
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                    <button>${food.price.toFixed(2)}</button>
                </div>
            </FoodCard>)
           }
          </FoodCards>
        </FoodCardContainer>
        // </Container>
  )
}

export default SearchResults

const FoodCardContainer = styled.section`
padding: 0 8rem;
min-width: 100vh;
min-height: calc(100vh - 200px);
background-image: url('./bg.png');
background-size: cover;


`
const FoodCards = styled.div`

   display: flex;
   flex-wrap: wrap;
   row-gap: 32px;
   column-gap: 20px;
   justify-content: center;
   align-items: center;
   padding-top: 80px;

.food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end; 


}
.info h3 {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 700;
    }
    
.info  p {
        margin-top: 4px;
        font-size: 12pxpx;
    }`
const FoodCard = styled.div`
width: 340px;
height: 167px;
box-sizing: border-box;
background: url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) ;
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.1842px);
border-radius: 20px;
display: flex;

button {
    padding: 6px 12px;
background: #FF4343;
border-radius: 5px;
border: none;
color: white;
padding: 10px;
display: flex;
cursor: pointer;

&:hover{
  background-color: #290000;
}

}
`