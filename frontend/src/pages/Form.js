import React, { useState } from 'react'

const Form = () => {
  const [slug, setSlug] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [color, setColor] = useState()
  const [image, setImage] = useState()
  const [power, setPower] = useState()
  const [isAlive, setIsAlive] = useState()
  const [isAdded, setIsAdded] = useState(false)
  const [error, setError] = useState(null)
  
  const handleSubmit = e => {
    e.preventDefault()

    const hero = {
      slug,
      name,
      age,
      color,
      image,
      power,
      isAlive
    }

    fetch('http://localhost:5000/heroes',{
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(hero)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Avenger already added.")
        }
        response.json()
      })
      .then(
        data => {
          console.log(data)
          setError("")
        },
        err => {
          setError(err)
          setIsAdded(false)
        }
      )

    setIsAdded(true)
  }

  const handleOnChangeName = e => {
    setName(e.target.value)
    setSlug(e.target.value.toLowerCase())
  }
  const handleOnChangeAge = e => {
    setAge(e.target.value)
  }
  const handleOnChangeColor = e => {
    setColor(e.target.value)
  }
  const handleOnChangeImage = e => {
    setImage(e.target.value)
  }
  const handleOnChangePower = e => {
    setPower([e.target.value])
  }
  const handleOnChangeIsAlive = e => {
    if (e.target.value === "false") {
      setIsAlive(false)
    } else {
      setIsAlive(true)
    }
  }

  // console.log(hero)
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className='col-6'>
          <h1>Create your own Avenger!</h1>
        </div>
        <div className='col-6 text-end text-danger align-self-center'>
          <h2>
            {isAdded && `Avenger ${name} created!`}
            {error && "Avenger already exist.."}
          </h2>
        </div>
      </div>
        <div className="mb-3">
          <label className="form-label">Name : </label>
          <input type="text" className="form-control" onChange={handleOnChangeName} />
        </div>
        <div className="mb-3">
          <label className="form-label">Age : </label>
          <input type="number" className="form-control" min="1" max="99" onChange={handleOnChangeAge} />
        </div>
        <div className="mb-3">
          <label className="form-label">Color : </label>
          <input type="text" className="form-control" onChange={handleOnChangeColor} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image url: </label>
          <input type="text" className="form-control" onChange={handleOnChangeImage} />
        </div>
        <div className="mb-3">
          <label className="form-label">Power: </label>
          <input type="text" className="form-control"  onChange={handleOnChangePower} />
        </div>
        <div className="mb-3">
          <label className="form-label">Is he/she alive? : </label>
          <select className="form-select" aria-label="Default select example" onChange={handleOnChangeIsAlive} >
            <option defaultValue="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Form