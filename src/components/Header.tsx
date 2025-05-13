import React from 'react'
import { LOGO } from '@/utils/constants'

const Header = () => {
  return (
    <div>
        <div className='absolute px-8 py-2 z-10 flex justify-between w-screen'>
            <img className='w-48' src={LOGO} alt="Logo"></img>
        </div>
    </div>
  )
}

export default Header