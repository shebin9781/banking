import React from 'react'
import { Navbar , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header({insideDashBoard}) {
  return (
   <>
    <Navbar className="bg-danger">
        <Container>
         <Link to={'/'} style={{textDecoration:"none"}} >
              <Navbar.Brand className='fw-bolder d-flex aling-items-center' style={{color:"white"}}>
              <i class="fa-brands fa-bandcamp mt-1 me-3 fa-beat"></i>{' '}
                 Banking
              </Navbar.Brand>
         </Link>
        <Link to={'/'} style={{textDecoration:"none"}}>
             <Navbar.Brand className='fw-bolder d-flex ' style={{color:"white"}}>
             <i class="fa-solid fa-house mt-1 me-1"></i>{' '}
                 home
                  </Navbar.Brand>
        </Link>
        <Link to={'/'} style={{textDecoration:"none"}}>
             <Navbar.Brand className='fw-bolder d-flex ' style={{color:"white"}}>
             <i class="fa-solid fa-house mt-1 me-1"></i>{' '}
                 About
                  </Navbar.Brand>
        </Link>
        <Link to={'/'} style={{textDecoration:"none"}}>
             <Navbar.Brand className='fw-bolder d-flex ' style={{color:"white"}}>
             <i class="fa-solid fa-house mt-1 me-1"></i>{' '}
                 Reviews
                  </Navbar.Brand>
        </Link>
        
        </Container>
       
       
       
       <button className='btn btn-primary'>Logout <i class="fa-solid fa-right-from-bracket  me-3"></i></button>
      </Navbar>
   </>
  )
}

export default Header