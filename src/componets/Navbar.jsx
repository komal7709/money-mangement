import React, { useContext } from 'react'
import { AccountContext } from '../App'

function Navbar() {
   const {account}=useContext(AccountContext)
   const fn =(sum,item)=>{
    if(item.type ==="credit"){
      return sum + item.amount
    }
    return sum
   }

   const Expencefn =(sum,item)=>{
    if(item.type ==="dedit"){
      return sum + item.amount
    }
    return sum
   }
   const INCOME = account.reduce(fn,0)
   const EXPENCE = account.reduce(Expencefn,0)
   
  return <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand bg-light" href="#">Navbar manager</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button type="button" class="btn btn-light">Balance : 0 :{INCOME}</button>
    </div>
  </nav>
  
  
  
}

export default Navbar