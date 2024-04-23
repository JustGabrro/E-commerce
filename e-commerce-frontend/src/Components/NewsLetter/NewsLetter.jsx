import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>მიიღე ექსკლუზიური შეთავაზებები ელ-ფოსტაზე</h1>
      <p>გამოიწერეთ ჩვენი ბიულეტენი და გაეცანით სიახლეებს.</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
