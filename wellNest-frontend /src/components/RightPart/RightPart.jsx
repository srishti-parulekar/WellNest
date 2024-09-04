import React from 'react'
import SearchUser from '../SearchUser/SearchUser'
import PopularUserCard from '../PopularUserCard/PopularUserCard';
import { Card } from '@mui/material';

const popularUser = [1, 1, 1, 1, 1]
const RightPart = () => {
  return (
    <div className='pr-5'>
      <SearchUser />

      <Card className='p-5 my-8'style={{ backgroundColor: '#fffae0' }}>
        <div className='flex justify-between py-5 items-center'>
          <p className='font-semibold opacity-70 text-[#5a3825]'>Suggestions for you!</p>
          <p className='text-xs font-semibold opacity-95 text-[#5a3825]'>View All</p>

        </div>
        <div className='space-y-1'>
          
          {popularUser.map((item)=><PopularUserCard/>)}
        </div>
      </Card>


    </div>
  )
}

export default RightPart