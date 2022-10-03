import React, {useEffect, useState} from 'react'
import backGround from '../images/road.png'
import Display from './Display'
import GreenCar from './GreenCar'
import RedCar from './RedCar'

export default function Game() {
  const [goBottom,setGoBottom]=useState(10)
  const [goLeft, setGoLeft]=useState(125)
  const [start, setStart]=useState(false)
  const [show, setShow]=useState('block')
  useEffect(()=>{
    if(start){
      setShow('none')
       const end=setInterval(()=>{
        setGoBottom((prev=>prev+10))
      }, 200)
      localStorage.clear()
      localStorage.setItem('end-id', end)
    }
    else if(!start){
      setGoBottom(10)
      setShow('block')
    }
  },[start])
  useEffect(()=>{
    const a=localStorage.getItem('end-id')
    if(goBottom>=330 && goBottom<500 && goLeft<175 && goLeft>75){
        clearInterval(a)
        alert("Game Over!!")
        setStart(false)
      }else if(goBottom===510){
        clearInterval(a)
        alert("You Win!!")
        setStart(false)
      }
  },[goBottom, goLeft])
  useEffect(()=>{
    const handleMove=(e)=>{
      if(e.keyCode===65){
        leftFunction()   
      }else if(e.keyCode===68){
         rightFunction()
      }
      else if(e.keyCode===13){
        setStart(true)
      }
    }
    document.addEventListener('keypress', handleMove)
  },[])
  const leftFunction=()=>{
    setGoLeft((prev)=>prev-5)  
  }
  const rightFunction=()=>{
    setGoLeft((prev)=>prev+5)  
  }
  return (
    <div style={{
        position: 'relative',
        backgroundImage: `url(${backGround})`,
        width: 300,
        height: 500,
        backgroundSize: 'cover'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '250px 0',
        fontSize: '30px',
        color: '#fff',
        display: show
      }}>Press Enter!</div>
        <RedCar direc={goLeft}/>
        <GreenCar direc={goBottom}/>
        <Display/>
    </div>
  )
}
