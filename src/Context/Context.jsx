import {createContext, useState} from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [ input, setInput] = useState("");
    const [ recentPrompt, setRecentPrompt] = useState("");
    const [ prevPrompts, setPrevPrompts ] = useState([]);
    const [ showResult, setShowResult ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ resultData, setResultData ] = useState("");

    const delayPara = (index, nextWord) =>{
        setTimeout(function(params) {
            setResultData(prev => prev + nextWord);
        },75*index);
    }

    const newChat = () =>{
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async(prompt) => {
        setLoading(true);
        setResultData("");
        setShowResult(true);
        let response ;
        if (prompt !== undefined){
            response =  await runChat(prompt);
            setRecentPrompt(prompt);
        } else{
            setPrevPrompts(prev=> [...prev,input]);
            response = await runChat(input);
            setRecentPrompt(input);
        }
        let responseArray = response.split("**");
        let newReponse = "";
        for(let i = 0; i < responseArray.length ; i++)
        {
            if (i === 0 || i % 2 !== 1) {
                newReponse += responseArray[i];
            } else {
                newReponse += `<b>${responseArray[i]}</b>`;
            }
        }
       let newResponse2 = newReponse.split("*").join("</br>");
    //    setResultData(newResponse2);
       let newResponseArray = newResponse2.split(" ");
       for (let i = 0; i < newResponseArray.length; i++) {
         const nextWord = newResponseArray[i];
         delayPara(i, nextWord + " ");
       } 
        setLoading(false)
        setInput("");
    }


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    )
} 

export default ContextProvider;