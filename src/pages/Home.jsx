import React from 'react'
import AccountForm from '../componets/AccountForm'
import Navbar from '../componets/Navbar'
import LogList from '../componets/LogList'

function Home() {
  return <>
  <Navbar />
  <div className="container">
    <div className="row">
      <div className='col-sm-6'>
        <AccountForm />
      </div>
      <div className="col-sm-6">
        <LogList />
      </div>
    </div>
  </div>
  </>
}

export default Home