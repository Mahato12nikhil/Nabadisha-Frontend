import React, { useEffect, useRef, useState } from 'react'
import { fetchGallery } from '../../services/backend'
import { useEffectOnce } from '../useEffectOnce';

export default function 
() {
    const effectCalled = useRef(false);
    const renderAfterCalled = useRef(false);
  const [galleryList, setGalleryList] = useState({})  

  useEffectOnce(()=>{
    
    if (!effectCalled.current) { 
        console.log('called')
        renderAfterCalled.current = true;
    }
    try {
        fetchGallery().then((data)=>{

            //setGalleryList(galleryList.add(data.data));
          //  return data.data.json()
            console.log(data)
        }).then(result=>{
           
        })
    } catch (error) {
        
    }
  })  
  return (
    <div style={styles.corResizer}>
    <div  className="corResizer">
      <div id="carouselExampleCaptions" className="container carousel slide" style={styles.corH}>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner"style={{height:'100%'}}>
          <div className="carousel-item active">
            <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" >
            <img src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" className="d-block w-100" alt="..." style={{margin:'auto'}}/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" >
            <img src="https://fastly.picsum.photos/id/970/536/354.jpg?hmac=-I_kAQ2oSC5ehwhlMHJi7XzxtvIUaLVK_-LHgu_4FHc" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  )
}

const styles = {
    corResizer:{
        marginTop:"50px",
        height: "300px"
    },
    corH:{
      
        height: "600px"
    },
  };
  