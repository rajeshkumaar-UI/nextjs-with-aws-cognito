import React from 'react'
import { BANNER_BG } from '@/utils/constants'
import Header from '@/components/Header'

const login = () => {
  return (
    <div>
        <Header />
        <div className='absolute w-full min-h-screen'>
            <img className='min-w-full min-h-screen' src={BANNER_BG} alt="banner" />
        </div>
    </div>
  )
}

export default login