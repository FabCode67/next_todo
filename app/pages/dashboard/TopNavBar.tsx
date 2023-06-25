import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'

const TopNavBar = () => {
    return (
        <div className="dashboard__topnav text-center bg-white p-3 w-full">
            <div className='flex justify-between'>
                <div className='flex justify-center items-center'>
                <div className='flex'>
                    <h1 className='text-2xl font-bold'>Dashboard</h1>
                </div>
                </div>
                <div className='flex space-x-10 item-center justify-end w-[20%]'>
                    <div className='flex justify-center m-auto text-center items-center space-x-6'>
                    <div className='text-2xl'>
                        <IoMdNotificationsOutline />
                    </div>
                    <div className='flex space-x-2'>
                        <div className='ff rounded-full h-12 w-12 bg-white'>
                            <img src='https://media.licdn.com/dms/image/D4E35AQFddvOb8IKOCQ/profile-framedphoto-shrink_400_400/0/1677736736973?e=1688313600&v=beta&t=ZeKqVqC-ZdxQHdwF1X8jn3HRXXgQ9CSkgghPacDrlsc' alt='profile' className='rounded-full h-12 w-12' />
                        </div>
                        <div className='text-sm mt-1'>
                            <p className='text-sm'>Fabrice</p>
                            <p className='te text-xs'>bad man</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar