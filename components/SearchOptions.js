import React from 'react'
import styles from '../styles/SearchOptions.module.css'

const SearchOptions = () => {
  return (
  <form action="#" className={`${styles["form-searchOptions"]}`}>
   <div className={`${styles["select-searchOptions"]}`}>
   <label htmlFor="order-date">sort by date</label>
   <select name="order-by-date" id="order-date">
      <option value="relevance">relevance</option>
      <option value="newest-first">newest first</option>
      <option value="oldest-first">oldest first</option>
  </select>
  </div>
  <div className={`${styles["select-searchOptions"]}`}>
  <label htmlFor="order-country">region</label>
  <select name="order-by-country" id="order-country">
      <option value="my-country">my country</option>
      <option value="USA">USA</option>
      <option value="Canada">Canada</option>
  </select>
  </div>
 </form>
  )
}

export default SearchOptions