import React, {useState} from 'react'
import Dialog, {alert, confirm, modal} from './dialog'
export default function () {
  const [x, setX] = useState(false)

  const openModal = () => {
    const close = modal(<h1>你好
      <button onClick={() => close()}>close</button>
    </h1>)
  }

  return (
    <div>
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

      <h1>example 3</h1>
      <button onClick={() => alert('1')}>alert</button>
      <button onClick={() => confirm('2', ()=>{
        console.log('你点击了 yes')
      }, ()=> {
        console.log('你点击了 no')
      })}>confirm</button>

      <button onClick={openModal}>modal</button>

    </div>
  )
}