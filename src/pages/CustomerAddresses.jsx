import jaime from "../assets/images/jaime.jpg"
import CustomerView from "./CustomerView";
import React from "react";
import { useFormik } from "formik";

function CustomerAddresses() {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      street: '',
      city: '',
      zip: '',
      region: '',
      province: '',
      phone_number: '',
      email: '',
      shipping_firstname: '',
      shipping_lastname: '',
      shipping_email: '',
      shipping_street: '',
      shipping_city: '',
      shipping_zip: '',
      shipping_phone_number: '',
      shipping_company: '',

    },
    onSubmit: values => {
      console.log('Form data', values)
    }
  })


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
          <form className="w-100">
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
            <div className="col-lg-8 col-xl-9 gx-5">
              <form onSubmit={formik.handleSubmit}>

                <div className="bg-light rounded-pill px-4 py-3">
                  <h5 className="mb-0">Invoice address </h5>
                </div>
                <div className="row gy-3 py-5">
                  <div className="col-sm-6">
                    <label className="form-label" for="firstname" required="required">Firstname</label>
                    <input className="form-control" id="firstname" required="required" type="text" onChange={formik.handleChange} value={formik.values.firstname} />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="lastname" required="required" >Lastname</label>
                    <input className="form-control" id="lastname" required="required" type="text" onChange={formik.handleChange} value={formik.values.lastname} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="email">Email Address</label>
                    <input className="form-control" id="email" type="email" name="email" placeholder="enter your email address" onChange={formik.handleChange} value={formik.values.email} />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="street" required="required">Street</label>
                    <input className="form-control" id="street" required="required" type="text" onChange={formik.handleChange} value={formik.values.street} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" for="city">City</label>
                    <input className="form-control" id="zip" type="text" name="city" placeholder="Your city" onChange={formik.handleChange} value={formik.values.city} />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" for="zip">ZIP</label>
                    <input className="form-control" id="zip" type="text" name="zip" placeholder="ZIP code" onChange={formik.handleChange} value={formik.values.zip} />
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <label className="form-label" htmlFor="region">Philippines</label>
                    <select className="form-control" id="region" onChange={formik.handleChange} value={formik.values.region}>
                      <option value="">Select Region</option>
                      <option value="Luzon">Luzon</option>
                      <option value="Visayas">Visayas</option>
                      <option value="Mindanao">Mindanao</option>
                    </select>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <label className="form-label" for="province" required="required" >Province</label>
                    <select className="form-check js-country form-control" id="province" required="required" name="province" onChange={formik.handleChange} value={formik.values.province}>
                      <option value="">Select Province</option>
                      <option value="Abra">Abra</option>
                      <option value="Agusan del Norte">Agusan del Norte</option>
                      <option value="Agusan del Sur">Agusan del Sur</option>
                      <option value="Aklan">Aklan</option>
                      <option value="Albay">Albay</option>
                      <option value="Antique">Antique</option>
                      <option value="Apayao">Apayao</option>
                      <option value="Aurora">Aurora</option>
                      <option value="Basilan">Basilan</option>
                      <option value="Bataan">Bataan</option>
                      <option value="Batanes">Batanes</option>
                      <option value="Batangas">Batangas</option>
                      <option value="Benguet">Benguet</option>
                      <option value="Biliran">Biliran</option>
                      <option value="Bohol">Bohol</option>
                      <option value="Bukidnon">Bukidnon</option>
                      <option value="Bulacan">Bulacan</option>
                      <option value="Cagayan">Cagayan</option>
                      <option value="Camarines Norte">Camarines Norte</option>
                      <option value="Camarines Sur">Camarines Sur</option>
                      <option value="Camiguin">Camiguin</option>
                      <option value="Capiz">Capiz</option>
                      <option value="Catanduanes">Catanduanes</option>
                      <option value="Cavite">Cavite</option>
                      <option value="Cebu">Cebu</option>
                      <option value="Compostela Valley">Compostela Valley</option>
                      <option value="Cotabato">Cotabato</option>
                      <option value="Davao del Norte">Davao del Norte</option>
                      <option value="Davao del Sur">Davao del Sur</option>
                      <option value="Davao Occidental">Davao Occidental</option>
                      <option value="Davao Oriental">Davao Oriental</option>
                      <option value="Dinagat Islands">Dinagat Islands</option>
                      <option value="Eastern Samar">Eastern Samar</option>
                      <option value="Guimaras">Guimaras</option>
                      <option value="Ifugao">Ifugao</option>
                      <option value="Ilocos Norte">Ilocos Norte</option>
                      <option value="Ilocos Sur">Ilocos Sur</option>
                      <option value="Iloilo">Iloilo</option>
                      <option value="Isabela">Isabela</option>
                      <option value="Kalinga">Kalinga</option>
                      <option value="La Union">La Union</option>
                      <option value="Laguna">Laguna</option>
                      <option value="Lanao del Norte">Lanao del Norte</option>
                      <option value="Lanao del Sur">Lanao del Sur</option>
                      <option value="Leyte">Leyte</option>
                      <option value="Maguindanao">Maguindanao</option>
                      <option value="Marinduque">Marinduque</option>
                      <option value="Masbate">Masbate</option>
                      <option value="Misamis Occidental">Misamis Occidental</option>
                      <option value="Misamis Oriental">Misamis Oriental</option>
                      <option value="Mountain Province">Mountain Province</option>
                      <option value="Nueva Ecija">Nueva Ecija</option>
                      <option value="Nueva Vizcaya">Leyte</option>
                      <option value="Occidental Mindoro">Occidental Mindoro</option>
                      <option value="Oriental Mindoro">Oriental Mindoro</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="phone_number">Phone Number</label>
                    <input className="form-control" id="phone_number" type="tel" name="phone_number" placeholder="Your phone number" onChange={formik.handleChange} value={formik.values.phone_number} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="company">Company</label>
                    <input className="form-control" id="company" type="text" name="company" placeholder="Your company name" onChange={formik.handleChange} value={formik.values.company} />
                  </div>
                  <div className="col-12 pt-3">
                    <div className="form-check">
                      <input className="form-check-input" id="another-address" type="checkbox" data-bs-toggle="collapse" role="button" aria-expanded="false" data-bs-target="#shippingAddress" onChange={formik.handleChange} value={formik.values.another_address} />
                      <label className="form-check-label" for="another-address">Use different shipping address</label>
                    </div>
                  </div>
                </div>

                <div className="collapse" id="shippingAddress">
                  <div className="bg-light rounded-pill px-4 py-3">
                    <h5 className="mb-0">Shipping address</h5>
                  </div>
                  <div className="row gy-3 py-5">
                    <div className="col-md-6">
                      <label className="form-label" for="shipping_firstname">First Name</label>
                      <input className="form-control" id="shipping_firstname" type="text" name="shipping_firstname" placeholder="Enter you first name" onChange={formik.handleChange} value={formik.values.shipping_firstname} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" for="shipping_lastname">Last Name</label>
                      <input className="form-control" id="shipping_lastname" type="text" name="shipping_lastname" placeholder="Enter your last name" onChange={formik.handleChange} value={formik.values.shipping_lastname} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" for="shipping_email">Email Address</label>
                      <input className="form-control" id="shipping_email" type="email" name="shipping_email" placeholder="enter your email address" onChange={formik.handleChange} value={formik.values.shipping_email} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" for="shipping_street">Street</label>
                      <input className="form-control" id="shipping_street" type="text" name="shipping_street" placeholder="Your street name" onChange={formik.handleChange} value={formik.values.shipping_street} />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label" for="shipping_city">City</label>
                      <input className="form-control" id="shipping_city" type="text" name="shipping_city" placeholder="Your city" onChange={formik.handleChange} value={formik.values.shipping_city} />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label" for="shipping_zip">ZIP</label>
                      <input className="form-control" id="shipping_zip" type="text" name="shipping_zip" placeholder="ZIP code" onChange={formik.handleChange} value={formik.values.shipping_zip} />
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <label className="form-label" htmlFor="region">Philippines</label>
                      <select className="form-control" id="region" onChange={formik.handleChange} value={formik.values.region}>
                        <option value="">Select Region</option>
                        <option value="Luzon">Luzon</option>
                        <option value="Visayas">Visayas</option>
                        <option value="Mindanao">Mindanao</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <label className="form-label" for="province" required="required">Province</label>
                      <select className="form-check js-country form-control" id="province" required="required" name="province" onChange={formik.handleChange} value={formik.values.province}>
                        <option value="">Select Province</option>
                        <option value="Abra">Abra</option>
                        <option value="Agusan del Norte">Agusan del Norte</option>
                        <option value="Agusan del Sur">Agusan del Sur</option>
                        <option value="Aklan">Aklan</option>
                        <option value="Albay">Albay</option>
                        <option value="Antique">Antique</option>
                        <option value="Apayao">Apayao</option>
                        <option value="Aurora">Aurora</option>
                        <option value="Basilan">Basilan</option>
                        <option value="Bataan">Bataan</option>
                        <option value="Batanes">Batanes</option>
                        <option value="Batangas">Batangas</option>
                        <option value="Benguet">Benguet</option>
                        <option value="Biliran">Biliran</option>
                        <option value="Bohol">Bohol</option>
                        <option value="Bukidnon">Bukidnon</option>
                        <option value="Bulacan">Bulacan</option>
                        <option value="Cagayan">Cagayan</option>
                        <option value="Camarines Norte">Camarines Norte</option>
                        <option value="Camarines Sur">Camarines Sur</option>
                        <option value="Camiguin">Camiguin</option>
                        <option value="Capiz">Capiz</option>
                        <option value="Catanduanes">Catanduanes</option>
                        <option value="Cavite">Cavite</option>
                        <option value="Cebu">Cebu</option>
                        <option value="Compostela Valley">Compostela Valley</option>
                        <option value="Cotabato">Cotabato</option>
                        <option value="Davao del Norte">Davao del Norte</option>
                        <option value="Davao del Sur">Davao del Sur</option>
                        <option value="Davao Occidental">Davao Occidental</option>
                        <option value="Davao Oriental">Davao Oriental</option>
                        <option value="Dinagat Islands">Dinagat Islands</option>
                        <option value="Eastern Samar">Eastern Samar</option>
                        <option value="Guimaras">Guimaras</option>
                        <option value="Ifugao">Ifugao</option>
                        <option value="Ilocos Norte">Ilocos Norte</option>
                        <option value="Ilocos Sur">Ilocos Sur</option>
                        <option value="Iloilo">Iloilo</option>
                        <option value="Isabela">Isabela</option>
                        <option value="Kalinga">Kalinga</option>
                        <option value="La Union">La Union</option>
                        <option value="Laguna">Laguna</option>
                        <option value="Lanao del Norte">Lanao del Norte</option>
                        <option value="Lanao del Sur">Lanao del Sur</option>
                        <option value="Leyte">Leyte</option>
                        <option value="Maguindanao">Maguindanao</option>
                        <option value="Marinduque">Marinduque</option>
                        <option value="Masbate">Masbate</option>
                        <option value="Misamis Occidental">Misamis Occidental</option>
                        <option value="Misamis Oriental">Misamis Oriental</option>
                        <option value="Mountain Province">Mountain Province</option>
                        <option value="Nueva Ecija">Nueva Ecija</option>
                        <option value="Nueva Vizcaya">Leyte</option>
                        <option value="Occidental Mindoro">Occidental Mindoro</option>
                        <option value="Oriental Mindoro">Oriental Mindoro</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" for="shipping_phone_number">Phone Number</label>
                      <input className="form-control" id="shipping_phone_number" type="tel" name="shipping_phone_number" placeholder="Your phone number" onChange={formik.handleChange} value={formik.values.shipping_phone_number} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" for="shipping_company">Company</label>
                      <input className="form-control" id="shipping_company" type="text" name="shipping_company" placeholder="Your company name" onChange={formik.handleChange} value={formik.values.shipping_company} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <button className="btn btn-primary px-5" type="submit"><i className="fas fa-save me-2"></i>Save changes</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerAddresses;