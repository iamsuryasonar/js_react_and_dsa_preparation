import React from 'react'

function NavSideBarContentLayout() {
    return (
        <div className='h-full max-w-3xl m-auto'>
            <nav className='sticky top-0 h-[50px] bg-green-300 z-10'>
                <h1>Icon</h1>
            </nav>
            <div className='relative flex min-h-[calc(100vh-50px)]'>
                <ul className='sticky top-[50px] bottom-0 min-w-[300px] bg-red-400 max-h-[calc(100vh-50px)] overflow-auto'>
                    {
                        Array(70).fill(0).map((item, index) => {
                            return <li class="border-b border-gray-200">Item {index}</li>
                        })
                    }
                </ul>
                <ul className='flex-1 bg-green-300 overflow-hidden'>
                    {
                        Array(70).fill(0).map((item, index) => {
                            return <li class="bg-gray-50 border-b border-gray-200">Item {index}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavSideBarContentLayout;
