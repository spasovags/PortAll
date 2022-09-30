import React from 'react'
import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
  return (
    <form className={`${styles["form-search"]}`}>
      <input type="text" placeholder="Search..." name="search"/>
      <button type="submit">&#128269;</button>
    </form>  
    )
}

export default SearchBar