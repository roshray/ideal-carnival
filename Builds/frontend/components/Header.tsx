import React from 'react'
import Image from 'next/image'
import { BeakerIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid'
import { ChevronDownIcon, StarIcon} from '@heroicons/react/outline'

function Header() {
  return (
      <div className='flex sticky top-0 z-50 bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Image objectFit='contain' src='https://links.papareact.com/fqy'  layout='fill' />
        </div>


        <div className='flex items-center mx-7 xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5' />
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5'/>
        </div>

        {/* Search box */}
        <form >
            <SearchIcon />
        </form>
    </div>
    

  )
}

export default Header