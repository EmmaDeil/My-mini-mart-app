import React from 'react'

const Market = () => {
  return (
    <div>
      <div className='card text-center p-5 m-5'>
         <img src="https://via.placeholder.com/150" alt="" />
         <div className='card-body'>
            <p>Product Name</p>
         <div className='card-title'>
   <p>#20,000</p>
   <div className='card-text d-flex justify-content-end align-items-end gap-3'>
      <button>+</button>
   <p>0</p>
<button>-</button>
   </div>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Market;
