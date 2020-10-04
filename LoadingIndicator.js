import React,{useState,useEffect} from 'react'
import './Loader.css'
import { css } from "@emotion/core";
import {PulseLoader} from 'react-spinners'

const styleCss = css`
  display: block;
  padding-left: 5px;
  border-color: red;
  padding-top: 5px;
  padding-bottom: 5px;
`;
function LoadingIndicator() {
  const [click,setClick]= useState(false)
const imageShow =()=>{
    setClick(true)
}
const hideImage =()=>{
  setClick(false)}
useEffect(()=>{
  setTimeout(()=>{
        hideImage()
    },3000)
  },[hideImage])

    return (
        <div>
        {
            !click ? (<button className='btn' onClick={imageShow}>Click Button</button>)
            : (
            <div className='loader' onClick={hideImage}>
                  <span className='text'>Loading</span>
                  <PulseLoader 
                  css={styleCss}
                  color={'gray'}
                  size={3}
                  loading/>
            </div>
            )

        }
        </div>
    )
}

export default LoadingIndicator
