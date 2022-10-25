import React, { useRef, useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/Cards.module.css'


const Cards = ({profiles}) => {

  
   return (
    <div className={`${styles["main-cards"]}`} >
       {profiles.map((profile) =>
        <Card key={profile.id} value={profile}/>)}
    </div>
  )
}

export default Cards