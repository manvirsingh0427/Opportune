import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto my-20'>
        <div className='drop-shadow-2xl relative bg-gradient-to-r from-pink-50 to-pink-100 p-12 sm:p-24 lg:p-32 rounded-lg'>
            <div className='flex gap-4'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Download Mobile App for Better Experience</h1>
                <div>
                    <a href="#" className='inline-block'>
                        <img className='h-12' src={assets.play_store} alt="" />
                    </a>
                    <a href="#" className='inline-block'>
                        <img className='h-12' src={assets.app_store} alt="" />
                    </a>
                </div>
            </div>

            <img className='absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden' src={assets.app_main_img} alt="" />
        </div>
    </div>
  )
}

export default AppDownload