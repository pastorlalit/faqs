import React, { useState, useEffect } from 'react'

function FaqItem({faq, index}) {
const[isShow, setIsShow] = useState(false);

const handleShow = () =>{
  console.log("Button clicked")
  setIsShow((isShow)=>!isShow);
}

useEffect(()=>{
  if(index===0){
    setIsShow(true)
  }   
}, [])

return (
      <>
        
        <div className='faq-item' key={index}>
        <div className='faq-ques' onClick={handleShow}>
          <button className={isShow ? 'arrow active' : 'arrow'}>></button>
          {faq.question}
        </div>
          {isShow && <div className='faq-ans' >{faq.answer}</div>}
        </div>
        
      </>
    
  )
}

export default FaqItem;