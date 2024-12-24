import React from 'react'
import { searchBarIcon } from '../header/header-icon'


const TopBar = ({title, button}) => {
    return (
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-7">
                <div>
                    <h1 className="font-medium text-3xl pt-2">{title}</h1>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="hidden xl:flex w-96 h-12 items-center border rounded-xl mt-2 px-3 py-2 bg-slate-50">
                        <span className="">{searchBarIcon}</span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-2 border-none outline-none bg-transparent text-gray-500"
                        />
                    </div>
                    <div>
                        <button className="p-2 w-20 h-12 mt-2 rounded-xl border  bg-slate-50 text-gray-500 ">
                            {/* <span>{order}</span> */}
                            <span></span>
                            Filter
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <button className=' p-2 w-40 h-12  rounded-xl border bg-custom-yellow text-white font-medium text-xl'>
                    {button}
                </button>
            </div>
        </div>
    )
}
export default TopBar