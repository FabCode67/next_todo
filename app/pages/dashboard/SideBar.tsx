import React from 'react'

const SideBar = () => {
  return (
    <div className="mt-0 h-screen">
        <div className='flex justify-center m-auto items-center pt-5'>
        <div className="flex items-center justify-center">
            XanaHelath
        </div>
        </div>
       

        <nav className="">
            <a className="flex items-center mt-4 py-2 px-6" href="#">
                <svg className="h-5 w-5 mx-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10 8h-8v10h8V11m-10 4H3v6h8v-6z"></path>
                </svg>
                <span className="mx-3">Dashboard</span>
            </a>
            <a className="flex items-center mt-4 py-2 px-6" href="#">
                <svg className="h-5 w-5 mx-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                </svg>
                <span className="mx-3">Patient</span>
            </a>
            <a className="flex items-center mt-4 py-2 px-6" href="#">
                <svg className="h-5 w-5 mx-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M0 16h8V0H0v16zM5 2h2v2H5V2zm0 4h2v2H5V6zm0 4h2v2H5v-2zM1 2h2v2H1V2zm0 4h2v2H1V6zm0 4h2v2H1v-2zm8-5h7v1H9zm0 11h2v-4h3v4h2V7H9z"></path>
                </svg>
                <span className="mx-3">Department</span>
            </a>
            <a className="flex items-center mt-4 py-2 px-6" href="#">
                <svg className="h-5 w-5 mx-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M0 11.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-5zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-8zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-11z"></path>
                </svg>
                <span className="mx-3">Reception</span>
            </a>
            <a className="flex items-center mt-4 py-2 px-6" href="#">
                <svg className="h-5 w-5 mx-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14.84 16.26C17.86 16.83 20 18.29 20 20v2H4v-2c0-1.71 2.14-3.17 5.16-3.74L12 21l2.84-4.74M8 8h8v2a4 4 0 01-4 4 4 4 0 01-4-4V8m0-1l.41-4.1a1 1 0 011-.9h5.19c.51 0 .94.39.99.9L16 7H8m4-4h-1v1h-1v1h1v1h1V5h1V4h-1V3z"></path>
                </svg>
                <span className="mx-3">Nursing Core</span>
            </a>
            </nav>
    </div>
    
  )
}

export default SideBar