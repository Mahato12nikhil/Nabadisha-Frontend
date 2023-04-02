import React from 'react'

export default function () {
  return (
    <div className='container'>
        <form>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
