import React from 'react'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className='w-full min-h-[100vh] bg-background bg-cover'>
        <div className="flex min-h-screen w-full items-center justify-center px-2 py-5 sm:p-0 sm:px-5">
          <div className="w-full max-w-3xl xl:max-w-4xl 2xl:max-w-5xl overflow-hidden rounded-2xl md:rounded-4xl bg-white shadow-lg sm:flex">
            <div className="w-full flex flex-col gap-5 justify-between bg-cover bg-center sm:w-2/5 bg-[#084b3e] py-8 px-12">
              <div className='w-full h-[95px] bg-logo bg-repeat-space select-none'></div>
              <p className='text-main sm:text-xl md:text-3xl font-semibold select-none'>Say hello to global food and beverage producers and suppliers, all in one place</p>
            </div>
            <div className="w-full sm:w-3/5">
              <div className="p-8 flex flex-col gap-14">
                <h1 className="text-3xl leading-9 tracking-tight font-semibold font-gilroy text-neutral-800 select-none">Let's get started<br />with a few simple steps</h1>
                <form className="flex flex-col gap-4">
                  <div className="relative mt-2 w-full">
                    <input type="text" id="email" className="peer block w-full appearance-none border-b border-black bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 font-semibold text-sm text-gray-900 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-emerald-600">Email</label>
                  </div>
                  <div className="relative mt-2 w-full">
                    <input type="text" id="fullname" className="peer block w-full appearance-none border-b border-black bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label htmlFor="fullname" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 font-semibold text-sm text-gray-900 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-emerald-600">Full Name</label>
                  </div>
                  <div className="relative mt-2 w-full">
                    <input type="text" id="password" className="peer block w-full appearance-none border-b border-black bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label htmlFor="password" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 font-semibold text-sm text-gray-900 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-emerald-600">Password</label>
                  </div>
                  <input className="mt-4 w-full cursor-pointer rounded-4xl font-semibold tracking-wider bg-emerald-600 pt-3 pb-3 text-white hover:text-neutral-900 shadow-lg hover:bg-emerald-400" type="submit"
                    value="Sign up" />
                </form>
                <div className="mt-4 text-left text-gray-400 font-medium select-none">
                  <p className="text-xs">
                    By signing up, you agree to our&nbsp;
                    <a className="to-gray-400 underline">
                      Terms of Service.
                      <br />
                    </a>
                    Already have an account?&nbsp;
                    <a className="font-bold text-emerald-600 underline">
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default App
