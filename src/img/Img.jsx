import React from 'react'
import img1 from './erik-witsoe-GF8VvBgcJ4o-unsplash.jpg'
import img2 from './mason-kimbarovsky-X_d7m2r70bA-unsplash.jpg'
import img3 from './felix-mooneeram-evlkOfkQ5rE-unsplash.jpg'
import img4 from './jeremy-yap-J39X2xX_8CQ-unsplash.jpg'
import img5 from './kilyan-sockalingum-nW1n9eNHOsc-unsplash.jpg'

const bgImgArr =[
    img1, img2, img3, img4, img5
]
const randomBgImgArrItem= Math.floor(Math.random() * bgImgArr.length)
console.log(randomBgImgArrItem)
const Img = () => {
    return (
        <div>
            <img src={bgImgArr[randomBgImgArrItem]} alt="" />
        </div>
    )
}

export default Img
