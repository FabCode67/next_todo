import React from 'react'
import SideBar from './SideBar'
import TopNavBar from './TopNavBar'
import { FaHospitalUser, FaBed } from 'react-icons/fa'
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillWallet } from 'react-icons/ai'
import { BiSolidReport } from 'react-icons/bi'
import LineChart from './LineChart';
import FilledLineChart from './FilledLineChart';
import CircledChart from './CircledChart';
import HorizantalBarChart from './HorizantalBarChart';

export default function Dashboard() {

  return (
    <div className="dashboard flex justify-between">
      <div className="sidebar w-[15%] bg-white float-left fixed border-r-2">
        <SideBar />
      </div>
      <div className="main float-right w-full ml-[15%]">
        <TopNavBar />
        <div className="main__content flex flex-col justify-between space-y-4 p-4 bg-slate-100">
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <FaHospitalUser />
                  </div>
                  <div className='flex'>
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-md font-bold'>12,3453</h1>
                  <p className='text-xs text-slate-500 font-bold'>patient visited</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <AiFillWallet />
                  </div>
                  <div className='flex'>
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-md font-bold'>123, 423 RWF</h1>
                  <p className='text-xs text-slate-500 font-bold'>Total Revenue</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <FaBed />
                  </div>
                  <div className='flex'>
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-md font-bold'>5000</h1>
                  <p className='text-xs text-slate-500 font-bold'>Patient admitted</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <BiSolidReport />
                  </div>
                  <div className='flex'>
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-md font-bold'>12,3453</h1>
                  <p className='text-xs text-slate-500 font-bold'>Report Generated</p>
                </div>
              </div>
            </div>
          </div>
          <div className='chart flex justify-between basis-full'>
            <div className='flex flex-col  w-[70%] justify-between p-2 space-y-2'>
              <div className="flex flex-col h-[40%] w-full justify-between">
                <LineChart />
              </div>
              <div className='flex flex-col h-[60%] w-full justify-between'>
                <FilledLineChart />
              </div>
            </div>
            <div className='flex flex-col justify-between  w-[30%] p-2 space-y-2'>
              <div className='flex flex-col h-[60%] w-full justify-between'>
            <CircledChart x={false} y={false} />
              </div>
              <div className='flex flex-col h-[40%] w-full justify-between'>
              <HorizantalBarChart />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
