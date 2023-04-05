import React, { Component } from 'react'
import donate from '../images/mosqu1.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ Biz haqimizda</h1>
      <h3 className='video_cl'>Eng so'nggi yangiliklar</h3>
      <p className='video_text'> <span className='text_news'>Ziyoratgohimizga</span> Shvetsiya va Fransiya davlatlaridan ziyorat qilgani sayohatchilar tashrif buyurishdi, shu bilan birgalikda tarixiy obidalarimizni va inshootlarimizni ko'rib zavqlanishdi,  hamda dinimiz  haqida ma'lumot olishdi.<br></br><span className='text_news'>Ta'kidlash</span> kerraki, turizm salohiyatini yanada kengaytirish, xorijiy sayyohlar va viloyat aholisi ziyorat qilishlari uchun bir qator qulayliklar yaratilinmoqda.<br></br><span className='text_news'>Xorijiy</span> sayyohlarimiz bizning xalqimizning mehmon do'stligidan minnatdor bo'lishdi.
      <br></br><span className='text_news'>🔸 Siz</span> bizning ziyoratgohimizga tashrif buyurganmisiz? 
      <br></br><span className='text_news'>Agar</span> yo'q bo'lsa, unda sizni kutib qolamiz!📌</p>
      <video  className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;