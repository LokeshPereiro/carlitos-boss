import React from 'react'

function CartItemSkelton() {
  return (
    <div className='flex gap-5 flex-col'>
        {[1,2,3].map((item, index)=>(
            <div className='flex gap-5'>
             <div className='h-16 w-24 bg-slate-300 
        animate-pulse rounded-lg'>
        </div>
        <div className='w-full flex flex-col gap-3'>
            <div className='h-5 w-[70%] bg-slate-300 
            animate-pulse rounded-md'>
            </div>
            <div className='h-5 w-[20%] bg-slate-300 
            animate-pulse rounded-md'>
            </div>
        </div>
        <div className='h-5 w-[20%] bg-slate-300 
            animate-pulse rounded-md'>
        </div>
            </div>
        ))}
       
    </div>
  )
}

export default CartItemSkelton