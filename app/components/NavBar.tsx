import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div>
            <nav className="bg-gray-800 w-full">
                <div className="px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-16">
                        <ul className="flex gap-4 m-auto float-right">
                            <li>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            </li>
                            <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar