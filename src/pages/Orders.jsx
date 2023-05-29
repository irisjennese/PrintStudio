import jaime from "../assets/images/jaime.jpg"
import CustomerView from "./CustomerView";
import { useSelector } from 'react-redux';
import React, { useState } from 'react';


function Orders() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

  const handleRemoveItem = (index) => {
    const newCartItems = [...updatedCartItems];
    newCartItems.splice(index, 1);
    setUpdatedCartItems(newCartItems);
  }

  // calculate the total amount
  const totalAmount = updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <>
      <div className="search-panel d-none" id="searchPanel">
        <div className="search-panel-inner p-4">
          <div className="seach-panel-close">
            <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
              <svg className="svg-icon text-white mt-1">
                <use href="#shopping-bag-1"></use>
              </svg>
            </button>
          </div>
          <form className="w-100" action="#">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="d-flex align-items-center mb-3 border-bottom">
                  <input className="form-control form-control-lg bg-none border-0 shadow-0 rounded-0 px-0" type="text" placeholder="What are you searching for" aria-describedby="button-addon2" />
                  <button className="btn btn-link text-dark shadow-0 px-0 text-decoration-none" id="button-addon2" type="submit"><i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-9 order-2 order-lg-1">
              <h1>Your profile</h1>
            </div>
            <div className="col-lg-3 text-end order-1 order-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb py-4 justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Your profile</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container py-4">
          <div className="row gx-5 gy-5">

            <div className="col-xl-3 col-lg-4">
              <div className="bg-light text-center p-4 rounded-top-lg border border-bottom-0"><a className="d-inline-block" href="#Profile"><img className="img-fluid rounded-circle img-thumbnail p-2 mb-3" src={jaime} width="150" alt="..." /></a>
                <h5>Jaime Yanoc</h5>
                <p className="text-muted text-small">Cebu, Philippines</p>
              </div>

              <CustomerView />

            </div>
            <div className="col-lg-8 col-xl-9">
            <div className="cart-outer">
              <div className="cart-inner">
                <div className="bg-light rounded-pill px-4 py-3">
                  <div className="row fw-normal text-uppercase">
                    <div className="col-6">Image/Title</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Qty</div>
                    <div className="col-2 text-end">Total</div>
                  </div>
                </div>
                
                <div className="p-4 border-bottom">{updatedCartItems.map((item, index) => {
                      console.log(item.imgUrl); // log the item.imgUrl value to the console
                      return (
                        <div className="row d-flex align-items-center bord">
                    <div className="col-6">
                      <div className="d-flex align-items-center"><img src={item.image} alt='cart-image' style={{width: "60px"}}/>
                        <div className="ms-3"><a href="detail.html">
                            <h6 className="mb-0 text-dark">{item.productName}</h6><span className="text-muted text-sm">Size: Large</span></a></div>
                      </div>
                    </div>
                    <div className="col-2"><span>₱{item.price}</span></div>
                    <div className="col-2"><span>{item.quantity}</span></div>
                    <div className="col-2 text-end"><span>₱{totalAmount.toFixed(2)}</span></div>
                  </div>
                      )
                    })}
                  
                </div>
                
                <div className="border-bottom py-3">
                  <div className="row">
                    <div className="col-md-4 col-6 ms-md-auto"><strong>Order subtotal</strong></div>
                    <div className="col-md-2 col-6 text-end"><strong>$446.00</strong></div>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  <div className="row">
                    <div className="col-md-4 col-6 ms-md-auto"><strong>Shipping and handling</strong></div>
                    <div className="col-md-2 col-6 text-end"><strong>$10.00</strong></div>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  <div className="row">
                    <div className="col-md-4 col-6 ms-md-auto"><strong>Tax</strong></div>
                    <div className="col-md-2 col-6 text-end"><strong>$0.00</strong></div>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  <div className="row">
                    <div className="col-md-4 col-6 ms-md-auto"><strong>Total</strong></div>
                    <div className="col-md-2 col-6 text-end"><strong>$456.00</strong></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-4 pt-5">
              <div className="col-sm-6">
                <div className="bg-light rounded-pill px-4 py-3">
                  <h6 className="mb-0 text-uppercase">Invoice address</h6>
                </div>
                <div className="p-4">
                  <ul className="list-unstyled text-muted pb-1 mb-0">
                    <li>John Brown</li>
                    <li>13/25 New Avenue</li>
                    <li>New Heaven</li>
                    <li>45Y 73J</li>
                    <li>England</li>
                    <li>Great Britain</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="bg-light rounded-pill px-4 py-3">
                  <h6 className="mb-0 text-uppercase">Shipping address</h6>
                </div>
                <div className="p-4">
                  <ul className="list-unstyled text-muted pb-1 mb-0">
                    <li>John Brown</li>
                    <li>13/25 New Avenue</li>
                    <li>New Heaven</li>
                    <li>45Y 73J</li>
                    <li>England</li>
                    <li>Great Britain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Orders;