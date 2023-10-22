import React, { useState } from 'react';

function ProductCard({ imageSrc, name, price, sale, rating, addToCart, removeFromCart }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    addToCart();
  };

  const handleRemoveFromCart = () => {
    setInCart(false);
    removeFromCart();
  };
  
  
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {sale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
            Sale
          </div>
        )}
        <img className="card-img-top" src={imageSrc} alt={name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            {price instanceof Array ? (
              <span>
                ${price[0]} - ${price[1]}
              </span>
            ) : (
              `$${price}`
            )}
            {rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {Array(rating).fill(
                  <div key={rating} className="bi-star-fill"></div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {inCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={handleRemoveFromCart}>
                Remove from cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [cartValue, setCartValue] = useState(0);

  const addToCart = () => {
    setCartValue(cartValue + 1);
  };
  
  const removeFromCart = () => {
    if (cartValue > 0) {
      setCartValue(cartValue - 1);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartValue }</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Fancy Product"
              price={[40, 80]}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Special Item"
              price={18}
              sale={true}
              rating={5}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Sale Item"
              price={[25, 50]}
              sale={true}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Popular Item"
              price={40}
              rating={5}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Sale Item"
              price={[25, 50]}
              sale={true}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Fancy Product"
              price={[120, 280]}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Special Item"
              price={18}
              sale={true}
              rating={5}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
            <ProductCard
              imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Popular Item"
              price={40}
              rating={5}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;