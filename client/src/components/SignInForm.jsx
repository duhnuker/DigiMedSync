import React from 'react'

const SignInForm = () => {
  return (
    <div>
      <form className="p-3" method="POST">
        <h1 className='text-3xl pb-3'>Sign in: </h1>
        <label for="mail">Email:</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"' type="email"></input>
        <br></br>
        <br></br>
        <label for="password">Password: </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" for="password"></input>
        <button className="relative px-6 py-2 mt-6 rounded-md bg-white isolation-auto z-10 border-2 border-slate-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-slate-200 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700" type="submit">Login</button>
      </form>
      </div>
  )
}

export default SignInForm