import React from 'react';
import "./Main.css";
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

const Main = () => {
    const { prevPrompts, setPrevPrompts,
      recentPrompt, setRecentPrompt,
      showResult, loading,
      onSent,  resultData,
      input, setInput,
    } = useContext(Context) ;

  return (
    <div className='main'>
      <div className="nav">
        <p> Gemini </p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p> <span> Hello! Dev </span>  </p>
          <p> How can i help you today? </p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Besutiful places </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          
          <div className="card">
            <p> Brainstorm team bonding activites for our retreat </p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Improve the readability of following icon. </p>
            <img src={assets.code_icon} alt="" />
          </div>

        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text"
             value={input}
             onChange={(e) => setInput(e.target.value) }
             placeholder='Enter Prompt here.'
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img 
               src={assets.send_icon} alt="" 
               onClick={()=> onSent()  } 
              />
            </div>
          </div>
          <p className='bottom-info'> 
          Gemini may display inaccurate info, including about people, so double check the responses. Your privacy and Gemini App.
          </p>

        </div>
      </div>
      
    </div>
  )
}

export default Main;
