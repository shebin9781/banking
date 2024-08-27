import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center rounded border border-light' style={{minHeight:'100vh'}}>
        <div className='container'>
          <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 style={{fontSize:'80px'}} ><i class="fa-solid fa-building-columns"></i> BANKING </h1>
            <h2>Your Banking</h2>
            <p></p>
           
            <Link to={'/dashboard'} className='btn btn-warning'> Manage Your Projects <i class="fa-solid fa-arrow-right"></i></Link>
          :
          <Link to={'/login'} className='btn btn-warning'> Starts to Explore <i class="fa-solid fa-arrow-right"></i></Link>
          

          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/mobile-banking/how-new-age-banking-is-transforming-the-banking-industry-717x404.jpg" alt="" />
             </div>
            <button className='btn btn-link mt-5'> Click here to Details</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home