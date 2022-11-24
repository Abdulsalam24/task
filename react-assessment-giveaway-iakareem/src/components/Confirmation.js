import React from 'react'

const Confirmation = ({ userInfo }) => {

  const cart = JSON.parse(localStorage.getItem("cart"))


  return (
    <div className='confirmation'>
      <h2>Thank you for the order <br /> {userInfo.name}</h2>
      <p>You will get order list on your email <br /> {userInfo.email}</p>
      <div className="flex">
        {
          cart?.map((item) => (
            <div key={item.id} className="products">
              <div className="product-card">
                <p className="title">{item.name}</p>
                <img className="product-image" src={item.image} alt={item.name} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Confirmation