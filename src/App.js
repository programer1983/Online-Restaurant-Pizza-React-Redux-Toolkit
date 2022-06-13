import "./scss/app.scss"
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import pizzas from './assets/pizzas.json'

const API_URL = "https://62a6f83cbedc4ca6d7be4b30.mockapi.io/items"

function App() {
  fetch(`${API_URL}`)
    .then((res) => {
      return res.json()
    })
    .then((arr) => {
      console.log(arr)
  })
  
  return (
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <div className="content__top">
                <Categories />
                <Sort />
              </div>
              <h2 className="content__title">Все пиццы</h2>
              <div className="content__items">
                {pizzas.map((pizza) => (
                  <PizzaBlock key={pizza.id} {...pizza} />
                ))}
              </div>
            </div>
          </div>
        </div>
  );
}

export default App; 

