import React from 'react'

const Valhala = ({image,title,discription,prize}) => {
    // const {image,title,discription,prize} = props
    return (
      <section className='product'>
        <img className='jacket_img' src={image} />
        <h3>{title}</h3>
        <h4>{discription}</h4>
        <h3>{prize}</h3>
      </section>
    )
  }

export default Valhala