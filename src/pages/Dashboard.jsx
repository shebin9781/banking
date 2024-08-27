import React from 'react'
import View from '../assets/component/View'
import Profile from '../assets/component/Profile'
function Dashboard() {
  return (
    < >
        <div style={{marginTop:'100px'}} className="container-fluid">
          <h1>Wlecome <span style={{color:'yellowgreen'}}>User</span></h1>
          <div className="row mt-5">
            <div className="col-lg-8 rounded">
              <View/>
            </div>
            <div className="col-lg-4 rounded">
                <Profile/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard