import React from 'react'

const TopNavBar = () => {
  return (
    <div className="dashboard__topnav text-center bg-emerald-200 p-4 w-full">
   <div className='flex justify-between'>
        <div className='flex'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            </div>

            <div className='flex space-x-10'>
                <div className='flex'>
                    <h1>Ri</h1>
                    </div>
                                <div className='flex space-x-10'>
                        <div className='flex'>Pic</div>
                        <div className='flex flex-col'>
                            <h1>Username</h1>
                            <h1>Role</h1>
                            </div>
                            </div>
                            </div>
                            </div>

                    
</div>
  )
}

export default TopNavBar