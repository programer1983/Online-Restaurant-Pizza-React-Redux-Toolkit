import React from 'react'
import Categories from './../components/Categories'
import Sort from './../components/Sort'
import PizzaBlock from './../components/PizzaBlock'
import Sceleton from './../components/PizzaBlock/Sceleton'

// const API_URL = "https://62a6f83cbedc4ca6d7be4b30.mockapi.io/items"


const Home = () => {
    const [items, setItems] = React.useState([])
    const [loading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
      name: "Популярности",
      sortProperty: "rating"
    })
  
    React.useEffect(() => {
      setIsLoading(true)
      fetch(`https://62a6f83cbedc4ca6d7be4b30.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType.sortProperty}&order=desc`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
      window.scrollTo(0, 0)
    }, [categoryId, sortType])

    
    return (
    <div className='container'>
        <div className="content__top">
            <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {loading 
                ? [...new Array(6)].map((_, index) => <Sceleton key={index}/>) 
                : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />
            )}
        </div>
    </div>
  )
}

export default Home