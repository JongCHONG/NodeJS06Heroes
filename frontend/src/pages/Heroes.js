import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import HeroImage from '../components/HeroImage'
import HeroCard from '../components/HeroCard'

const Heroes = () => {
  const { slug } = useParams()
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/heroes')
      .then(response => response.json())
      .then(data => setHeroes(data))
  }, [])

  if (!heroes) {
    return "Chargement..."    
  }

  console.log(heroes)
  return (
    <>
      {!slug ? 
      <>
        <div className="row">
          <div className='col-6'>
            <h1>The Avengers</h1>
          </div>
          <div className='col-6 text-end'>
            <Link to="/form">Create a new Avenger...</Link>
          </div>
        </div>
        <div className="row">
          {heroes.map((element, index) => {
            return (
              <HeroImage 
                key={index} 
                slug={element.slug}
                image={element.image}
              />
            )
          })}
        </div>
      </>
      : 
        <HeroCard />
      }
    </>
  )
}

export default Heroes