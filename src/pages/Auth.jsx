import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginimg from '../assets/loginimg.jpg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../server/allAPI';



function Auth({insideRegister}) {
    const naviage = useNavigate()
    const [userInputs,setUserInputs] =useState({
        username:"",email:"",password:""
      })
      console.log(userInputs);
      const handleRegister= async(e)=>{
        e.preventDefault()
        if(userInputs.username && userInputs.email && userInputs.password){
            try {
                const result = await registerAPI(userInputs)
                console.log(result);
                if(result.status==200){
                    toast.success(`welcome${result.data.username}...please login to expolore website`)
                    setUserInputs({username:"",email:"",password:""})
                    setTimeout(()=>{
                        naviage('/login')
                    },2000)
                }else{
                    toast.error(result.response.data)
                    setTimeout(()=>{
                        setUserInputs({username:"",email:"",password:""})
                    },2000)
                }
                
            } catch (err) {
                console.log(err);
                
            }

        }else{
            toast.warning("please flle the form")
        }
      }
      
  return (
    <>
    <div style={{width:'100%',height:"100vh"}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'>Back to Home <i class="fa-solid fa-arrow-left"></i></Link>
        <div className="card shadow p-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img width={"100%"} src={loginimg} alt="Auth" />
            </div>
            <div className="col-lg-6">
              <h1 className='fw-bolder mt-2'>
              <i class="fa-brands fa-docker"></i>
                Details enter
              </h1>
              <h5 className='fw-bolder mt-2'>
                Sign { insideRegister?'up':'in'} to Your Account
              </h5>
              <form>
                {
                  insideRegister &&
                  <FloatingLabel
                  controlId="floatingInputName"
                  label="Username"
                  className="mb-3"
              >
               <Form.Control type="text" value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} placeholder="Enter your Username" />
                </FloatingLabel>
                }
              <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
              >
               <Form.Control value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})}  placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})}  type="password" placeholder="Password" />
               </FloatingLabel>

               {
                insideRegister ? <div className='mt-3'>
                  <button onClick={handleRegister} className='btn btn-primary'> Register</button>
                  <p>Already have an account?Click here to<Link to={'/login'}>Login</Link></p>
                </div>:
                <div className='mt-3'>
                  <button   className='btn btn-danger'>Login</button>
                  <p>New user?Click here to<Link to={'/register'}> Register</Link></p>
                </div>
               }
   
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <ToastContainer position='top-center'theme='colored'autoClose={3000}/>
</>
  )
}

export default Auth