import Helmet from "../components/Helmet/Helmet"
import CommonSection from '../components/UI/CommonSection';


const Contact = () => {
  return (
    <>
        <Helmet title='contact'>
      <CommonSection title='Contact Us' />

      <div className="search-panel d-none" id="searchPanel">
        <div className="search-panel-inner p-4">
          <div className="seach-panel-close">
            <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
              <i className="fas fa-times text-white mt-1"></i>
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
              <h1>Contact</h1>
              <p className="mt-2">
                We're here to help! If you have any questions, comments, or concerns, please feel free to get in touch with us.
                .Our team is dedicated to providing you with excellent service and support. We aim to respond to all inquiries as soon as possible, so please don't hesitate to reach out to us.
              </p>
            </div>
            <div className="col-lg-3 text-end order-1 order-lg-2">
              <nav aria-label="breadcrumb">
                {/* <ol className="breadcrumb py-4 justify-content-lg-end mb-0">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Contact</li>
                </ol> */}
              </nav>
            </div>
          </div>
        </div>
        <div className="container text-dark">
          <h2>Are you curious about something?</h2>
          <p>
          Have a question or just feeling curious? We're here to help! Our team is always happy to provide you with more information about our services, products, or anything else you're curious about.
          We're passionate about what we do and love to share our knowledge with others. So whether you're wondering about the latest printing techniques or just want to know more about our team, we're here to help!
          </p>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-map-marker-alt fa-2x mb-4 text-primary"></i>
              <h3>Address</h3>
              <p>18th Floor,<br />W Fifth, 5th Avenue,<br />Taguig, 1630 <strong>Metro Manila</strong></p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-phone-alt fa-2x mb-4 text-primary"></i>
              <h3>Call center</h3>
              <p>This number is toll-free if calling from the Philippines. Otherwise, we advise you to use the electronic form of communication for faster and more convenient service.</p>
              <p><strong>020-800-456-747</strong></p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-envelope fa-2x mb-4 text-primary"></i>
              <h3>Electronic support</h3>
              <p>Please feel free to write an email to us or to use our electronic ticketing system.</p>
              <ul className="list-style-none">
                <li><strong className="fw-bold"><a href="mailto:">info@gmail.com</a></strong></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container py-2 ">
          <header className="mb-5">
            <h2>Contact form</h2>
          </header>
          <div className="row">
            <div className="col-md-7 py-0">
              <form className="custom-form form" id="contact-form" method="post" action="contact.php">
                <div className="row gy-3">
                  <div className="col-sm-6">
                    <label className="form-label" for="name">Your firstname *</label>
                    <input className="form-control" type="text" name="name" id="name" placeholder="Enter your firstname" required="required" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" for="surname">Your lastname *</label>
                    <input className="form-control" type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required" />
                  </div>
                  <div className="col-sm-12">
                    <label className="form-label" for="email">Your email *</label>
                    <input className="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required" />
                  </div>
                  <div className="col-sm-12">
                    <label className="form-label" for="message">Your message for us *</label>
                    <textarea className="rounded form-control" rows="4" name="message" id="message" placeholder="Enter your message" required="required"></textarea>
                  </div>
                  <div className="col-sm-12">
                    <button className="btn btn-primary" type="submit">Send message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <p>I hope this message finds you well. I am writing to inquire about your data privacy policies. As a concerned individual, I value my personal information and want to ensure that it is protected. Can you please provide me with more information on how you handle and safeguard user data? Your prompt response would be greatly appreciated.</p>
              <p>Therefore, I would like to learn more about how you handle and safeguard user data, including any measures you have put in place to protect against data breaches or cyber attacks. Your prompt response to my request would be greatly appreciated, and would help me make an informed decision about using your services. </p>
              <ul className="list-inline">
                <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#Achor" target="_blank"><i class="fa-brands fa-facebook fa-xl"></i></a></li>
                <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#Achor" target="_blank"><i class="fa-brands fa-twitter fa-xl"></i></a></li>
                <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#Achor" target="_blank"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
                <li className="list-inline-item mr-2"><a className="reset-anchor text-primary" href="#Achor" target="_blank"><i class="fa-brands fa-pinterest fa-xl"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </Helmet>
    </>
  );
}

export default Contact;