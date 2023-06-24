import React from 'react'
import SideBar from './SideBar'
import TopNavBar from './TopNavBar'

export default function Dashboard() {
  return (
    <div className="dashboard flex justify-between">
      <div className="sidebar w-[15%] bg-yellow-600 float-left fixed">
        <SideBar />
      </div>
      <div className="main float-right w-full ml-[15%]">
        <TopNavBar />
        <div className="main__content p-9">
          <div className="main__content__title">
            <h3>Dashboard</h3>
          </div>
          <div className="main__content__body">
            <div className="main__content__body__card">
              <div className="main__content__body__card__title">
                <h3>Card</h3>
              </div>
              <div className="main__content__body__card__body">
                <p>Card Body</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
