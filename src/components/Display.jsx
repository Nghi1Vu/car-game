import React from 'react'

export default function Display() {
  return (
    <div style={{
        width: 200,
        height: 150,
        border: '1px solid #fff',
        color: '#fff',
    }}><ul>Tutorial: Car Game</ul>
            <li>Enter: Start game</li>
            <li>Turn on Caps Lock</li>
            <li style={{marginLeft: '20px'}}>A: left</li>
            <li style={{marginLeft: '20px'}}>D: right</li>
    </div>
  )
}
