import React, { useEffect, useRef, useState } from 'react'
import { fetchGallery } from '../../services/backend'
import { useEffectOnce } from '../useEffectOnce';
import { useDispatch } from 'react-redux';
import { loadGallery } from '../../redux/gallerySlice';

import { useAppDispatch, useAppSelector } from '../../redux/useTypedSelectorHook';
import ImageFormat from './imageFormat';


export default function 
() {
  const dispatch=useAppDispatch();
    const effectCalled = useRef(false);
    const renderAfterCalled = useRef(false);

    const galleryListInit: any=[]
    const {values} = useAppSelector(state => state.gallery);
  const [galleryList, setGalleryList] = useState(galleryListInit)  
 //const vl:  any=[{dog:'breed'},{hate:'brar'}];
  //vl.push({git:'homr'})
  useEffect(()=>{
    
   
    try {
      if(values.length==0)
             dispatch(loadGallery())
     // console.log('called')
      // console.log(values)
    } catch (error) {
        
    }
  },[dispatch,values.length])  
  return (
    <div style={styles.corResizer} >
    <div  className="corResizer">
      <div id="carouselExampleCaptions"  className="container carousel slide" data-interval="500" style={styles.corH}>
     
        <div className="carousel-inner"style={{height:'100%'}}>
            {  values.length>1? values.map((value,i)=>{
              //console.log('donee/////'+value._id)
              return(
                  <ImageFormat key={value._id} className={i === 0 ? "carousel-item active" : "carousel-item" } value={value}/> 
              )
             }):'Map is Empty'
             }
        </div>
        <button
         style={{}}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          style={{}}
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
        height:'100%'
    },
    corH:{
      
        height: "600px"
    },
  };
  