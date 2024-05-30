import React from 'react';
import "./Main.css";
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import {Loader , MyUser} from '../Loader/Loader';

const Main = () => {
 const { recentPrompt, showResult, loading, onSent, resultData, input, setInput  } = useContext(Context) ;

  return (
    <div className="main">
      <div className="nav">
        <p> Gemini </p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                {" "}
                <span> Hello! Dev </span>{" "}
              </p>
              <p> How can i help you today? </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest Beautiful places to visit for mothernature. </p>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              {/* <img src={assets.user_icon} alt="" /> */}
              < MyUser/>
              <p> {recentPrompt} </p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {
               loading ? ( <Loader /> ) : ( <p dangerouslySetInnerHTML={{ __html: resultData }}></p>)
              }
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Prompt here."
            />
            <div>
              <img src={assets.send_icon} alt="" onClick={() => onSent()} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double check the responses. Your privacy and Gemini App.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
