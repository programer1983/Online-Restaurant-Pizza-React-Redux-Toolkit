import React from 'react'
import Categories from './../components/Categories'
import Sort from './../components/Sort'
import PizzaBlock from './../components/PizzaBlock'
import Sceleton from './../components/PizzaBlock/Sceleton'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'
import {useSelector, useDispatch} from "react-redux"
import {setCategoryId} from "./../Redux/slices/filterSlice"
import axios from 'axios'

const Home = () => {
    const {categoryId, sort} = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([])
    const [loading, setIsLoading] = React.useState(true)
    const [currentPage, setCurrentPage] = React.useState(1)
   

    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id))
    }
  
    React.useEffect(() => {
      setIsLoading(true)
      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
      const sortBy = sort.sortProperty.replace('-', '')
      const category = categoryId > 0 ? `category=${categoryId}` : ""
      const search = searchValue ? `&search=${searchValue}` : ""

      axios.get(`https://62a6f83cbedc4ca6d7be4b30.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res => {
        setItems(res.data)
        setIsLoading(false)
      })
      window.scrollTo(0, 0)
    }, [categoryId, sort.sortProperty, searchValue, currentPage])

    const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
    const sceletons = [...new Array(6)].map((_, index) => <Sceleton key={index}/>)

    
    return (
    <div className='container'>
        <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
            <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{loading ? sceletons : pizzas}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  )
}

export default Home