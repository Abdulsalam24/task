import { useNavigate } from 'react-router-dom'
import products from '../items'

const Dashboard = ({ userInfo, cart, setCart }) => {

  const navigate = useNavigate()

  const handler = (id) => {
    const filtered = products.filter((item) => item.id === id)
    setCart((prev) => ([
      ...prev, ...filtered
    ]))
  }

  const handleDelete = (id) => {
    const filtered = cart.filter((item) => item.id !== id)
    setCart(filtered)
  }

  const onConfirm = () => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart))
      navigate('/confirmation')
    }
  }

  return (
    <div id="container">
      <header>Choose what you need {userInfo.name}</header>
      <div id="main">
        <article>
          {
            products.map((item) => (
              <div key={item.id} className="products" onClick={() => handler(item.id)}>
                <div className="product-card">
                  <p className="title">{item.name}</p>
                  <img className="product-image" src={item.image} alt={item.name} />
                  <button className="product-select">I want it</button>
                </div>
              </div>
            ))
          }
        </article>


        {/* <nav></nav> */}


        <aside>
          <div className="cart">
            <p>Cart</p>
            <div className="cart-products">
              {
                cart.map((item) => (
                  <div key={item.id} className="products">
                    <div className="product-card">
                      <p className="title">{item.name}</p>
                      <img className="product-image" src={item.image} alt={item.name} />
                      <button className="product-select" onClick={() => handleDelete(item.id)}>remove</button>
                    </div>
                  </div>
                ))
              }
            </div>
              <div className="confirm">
                {
                  cart.length > 0 && <button onClick={onConfirm}>confirm</button>
                }
              </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Dashboard