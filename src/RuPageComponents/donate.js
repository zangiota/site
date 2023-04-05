import React, { Component } from 'react'
import donate from '../images/mosqu1.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ О нас</h1>
      <h3 className='video_cl'> Последние новости</h3>
      <p className='video_text'><span className='text_news'>Нашему</span> мемориальному комплексу пришли путешественники из Швеции и Франции, которые с удовольствием осматривали наши исторические памятники и сооружения, узнавали о нашей религии.
      <br></br><span className='text_news'>Следует</span> отметить, что для дальнейшего расширения туристического потенциала, для посещения иностранными туристами и жителями региона создается ряд объектов.
      <br></br><span className='text_news'>Наши</span> иностранные туристы были благодарны за гостеприимство нашего народа.
      <br></br><span className='text_news'>🔸 А </span>вы посетили нашу мемориальный комплекс?
      <br></br><span className='text_news'>Если</span> нет, то ждем вас!</p>
      <video  className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;