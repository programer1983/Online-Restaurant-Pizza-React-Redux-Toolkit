import React from 'react'
import Categories from './../components/Categories'
import Sort from './../components/Sort'
import PizzaBlock from './../components/PizzaBlock'
import Sceleton from './../components/PizzaBlock/Sceleton'

// const API_URL = "https://62a6f83cbedc4ca6d7be4b30.mockapi.io/items"


const Home = ({searchValue}) => {
    const [items, setItems] = React.useState([])
    const [loading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
      name: "Популярности",
      sortProperty: "rating"
    })
  
    React.useEffect(() => {
      setIsLoading(true)
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
      const sortBy = sortType.sortProperty.replace('-', '')
      const category = categoryId > 0 ? `category=${categoryId}` : ""
      
      fetch(`https://62a6f83cbedc4ca6d7be4b30.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
      window.scrollTo(0, 0)
    }, [categoryId, sortType])

    const pizzas = items.filter((obj) => {
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
        return true
      }
      return false
    }).map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
    const sceletons = [...new Array(6)].map((_, index) => <Sceleton key={index}/>)

    
    return (
    <div className='container'>
        <div className="content__top">
            <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {loading ? sceletons : pizzas}
        </div>
    </div>
  )
}

export default Home