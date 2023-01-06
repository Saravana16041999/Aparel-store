import React from 'react'

import Valhala from './Valhala'

const JacketStore = ({product}) => {
    return (
      <div className='main'>
      <h2 className='sub_title'>Tokyo Revengers</h2>
      <section className='store'>
      {product.map((product,index)=>{
        return (
          <Valhala 
        {...product} key = {index}/>
        )
      })}
      </section>
      </div>
    )
  }

export default JacketStore