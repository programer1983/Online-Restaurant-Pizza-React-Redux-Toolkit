import React from 'react'
import { useEffect } from 'react'
import { SearchContext } from '../../App'
import styles from"./Search.module.scss"

const Search = () => {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  const inputRef = React.useRef()

  console.log(inputRef)

  const onClickClear = () => {
    setSearchValue('')
    // document.querySelector('input').focus()
    inputRef.current.focus()
  }

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="24" 
        viewBox="0 0 24 24" 
        width="24"
       >
        <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
      </svg>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className={styles.input}  
          placeholder='Поиск пиццы'
        />
        {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="512px" 
          id="Layer_1" 
          version="1.1" 
          viewBox="0 0 512 512" 
          width="512px"
         >
            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
          </svg>
        )}
    </div>
  )
}

export default Search