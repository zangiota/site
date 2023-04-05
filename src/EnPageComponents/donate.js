import React, { Component } from 'react'
import donate from '../images/mosqu1.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ About us</h1>
      <h3 className='video_cl'> Last news</h3>
      <p className='video_text'><span className='text_news'>Travelers</span> from Sweden and France came to our memorial complex, who with pleasure examined our historical monuments and buildings, learned about our religion.
      <br></br><span className='text_news'>It</span> should be noted that in order to further expand the tourism potential, a number of facilities are being created for visiting by foreign tourists and residents of the region.
      <br></br><span className='text_news'>Our</span> foreign tourists were grateful for the hospitality of our people.
      <br></br><span className='text_news'>🔸</span> Have you visited our memorial complex?
      <br></br><span className='text_news'>If</span> not, then we are waiting for you.</p>
      <video className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;