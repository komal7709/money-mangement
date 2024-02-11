import React, { useContext } from 'react'
import { AccountContext } from '../App'

const LogList = () => {
  const { account } = useContext(AccountContext)
  return <>
    <div class="card">
      <div class="card-header bg-dark text-light">Account Statment</div>
      <div class="card-body">
        {
          account.map(item => <div class={
            ` ${item.type === "credit" ? "alert-success" : "alert-danger"}
          alert alert-success d-flex justify-content-between` }>
            <span>{item.cause}</span>
            <strong className='badge bg-success'>{item.amount}</strong>
          </div>)
        }
      </div>
    </div>


  </>



}
export default LogList
