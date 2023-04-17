import React, { useEffect } from 'react'
import  './memberStyle.css'
import { useAppDispatch, useAppSelector } from '../../redux/useTypedSelectorHook';
import { loadMembers } from '../../redux/memberSlice';

export default function () {

    const dispatch=useAppDispatch();
    const {datas} = useAppSelector(state => state.member);
    useEffect(()=>{
    
        try {
          if(datas.length==0){
            dispatch(loadMembers())
          }
                 
          console.log(datas)
           //console.log(data)
        } catch (error) {
            
        }
      },[dispatch,datas.length])  
  return (
    <div>
         <div className="container">
        <div className="section-title">
            <h1>Meet our Members</h1>
        </div>

        <div className="row my-3">

            { datas.map((data)=>{
                return <>
                <div className="column" key={data._id}>
                <div className="team">
                    <div className="team-img">
                        <img src={data.image} alt="Team Image"/>
                    </div>
                    <div className="team-content">
                        <h2>{data.name}</h2>
                        <h3>Member</h3>
                        <p>Youtuber and nabadisha member</p>
                        <h4>example@gmail.com</h4>
                    </div>
                    <div className="team-social">
                        <a href="#" className="social-tw"> <i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-fb"> <i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-li"> <i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="social-in"> <i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-yt"> <i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

                </>
            })

            }
            
           

        </div>

    </div>
    </div>
  )
}
