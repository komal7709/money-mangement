import React, { useContext, useState } from 'react'
import { AccountContext } from '../App'

function AccountForm() {
  const { account, setAccount } = useContext(AccountContext)
  const [userData, setUserData] = useState({
    cause: "",
    amount: "",
    type: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const handleSubmit = () => {
    setAccount([userData, ...account])
  }
  return <div class="card">
    <div class="card-header bg-dark text-light">Add / Remove Money</div>
    <div class="card-body">
      <div className='my-3'>
        <label for="name" class="form-label">Enter Cause</label>
        <input
          type="text"
          onChange={handleChange}
          name='cause'
          class="form-control"
          placeholder='Enter Cause' />
        <div class="valid-feedback">Looks good</div>
        <div class="invalid-feedback"> Amount</div>
      </div>
      <div className='my-3'>
        <label for="name" class="form-label">Enter Amount</label>
        <input
          type="number"
          name='amount'
          onChange={handleChange}
          class="form-control"
          placeholder='Enter Cause' />
        <div class="valid-feedback">Looks good</div>
        <div class="invalid-feedback">Please Enter Amount</div>
      </div>
      <select class="form-select my-4" name='type'
        onChange={handleChange} >
        <option selected>choose type</option>
        <option value="debit">debit</option>
        <option value="credit">credit</option>
      </select>
      <button onClick={handleSubmit} type='button' class="btn btn-dark">+ Add</button>
    </div>

    <pre>{JSON.stringify(account, null, 2)}</pre>
  </div>
}

export default AccountForm