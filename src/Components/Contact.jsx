import React from 'react'
import "../../src/Components/Styled/contect.css";


const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <form className='contact'>
          <div className="mb-3">
              <label for="exampleInputEmail1" Name="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn form-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact