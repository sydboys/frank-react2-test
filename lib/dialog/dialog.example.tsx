import React, {useState} from 'react'
import Dialog from './dialog'
export default function () {
  const [x, setX] = useState(false)
  return (
    <div>
      <div style={{position:'relative', zIndex: 10, background:'#fff'}}>666</div>
      <button onClick={() => {setX(!x)}}>点击</button>

      <div style={{position:'relative', zIndex: 9, background:'#fff'}}>
        <Dialog visible={x} buttons = {
          [
            <button onClick={()=> {setX(false)}}>1</button>,
            <button onClick={()=> {setX(false)}}>2</button>,
          ]
        } onClose={() => {setX(false)}}>
          <div>hi</div>
        </Dialog>
      </div>

    </div>
  )
}