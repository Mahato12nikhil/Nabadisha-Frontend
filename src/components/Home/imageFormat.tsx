import React from 'react'

export default function (props:any) {
  return (
    <div className={`${props.className}`} style={{height:"100%"}}>
     <div style={{height:"100%"}} className='w-100'>
     <img style={{height:"100%", width:"100%"}} src={props.value.image} alt='image'/>
     </div>
    <div className="carousel-caption d-none d-md-block">
      <h5>First slide label</h5>
      <p>
        Some representative placeholder content for the first slide.
      </p>
    </div>
</div>
  )
}
