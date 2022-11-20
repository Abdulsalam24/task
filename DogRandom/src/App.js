import { useEffect, useState } from "react";

const App = () => {

  const [photos, setPhotos] = useState({ dog: "", adopted: [] })
  const [pass, setPass] = useState(true)
  const [count, setCount] = useState(5)

  const changeImage = (e) => {
    if (e.code === "ArrowLeft") {
      handleChange()
    } else if (e.code === "ArrowRight") {
      handleAdopt()
    }
  }

  const handleChange = () => {
    setPass((pass) => !pass)
    setCount(5)
  }

  const handleAdopt = () => {
    let adoptedDog = localStorage.getItem("photo")
    setPhotos({ dog: adoptedDog, adopted: [...photos.adopted, { adoptedDog }] })
    handleChange()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c === 0) {
          return 5
        }
        return c - 1
      }
      )
    }, 1000)

    if (count === 0) {
      handleChange()
    }
    return () => {
      clearInterval(interval)
    }
  }, [count])

  useEffect(() => {
    const fetchDog = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random")
      const { message } = await res.json()
      setPhotos({ ...photos, dog: message })
      localStorage.setItem("photo", message)
    }
    fetchDog()
    window.addEventListener('keydown', changeImage)
    return () => {
      window.removeEventListener("keydown", changeImage)
    }
  }, [pass])

  return (
    <div className="App">
      <header>
        <h1>Doggie Speed Dating</h1>
        <h3>Press the arrow keys on your keyboard. Left to skip, Right to Adopt.</h3>
      </header>
      <section>
        <h3>Current Dog</h3>
        <div className="img">
          <img src={photos.dog} alt="dog" />
          <div className="text">
            <h3>Time Remaining : {count}</h3>
            <h3>Adopted {photos.adopted.length} dogs :</h3>
          </div>
        </div>
        <div className="btn-flex">
          <button onClick={() => handleChange()}>left</button>
          <button onClick={() => handleAdopt()}>right</button>

        </div>
        <div className="flex">
          {
            photos.adopted?.map((adopt, index) => (
              <img key={index} src={adopt.adoptedDog} alt="adopted dog" />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default App