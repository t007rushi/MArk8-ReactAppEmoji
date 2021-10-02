import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "😊": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };

  //objects to an array
  var list = Object.keys(emojiDictionary)
  var [changie, setchangie] = useState("");

  function changer(event) {
    // console.log(event);
    var emo = event.target.value;
    if (emojiDictionary[emo] === undefined) {
      setchangie("not in DB");
    }
    for (let key in emojiDictionary) {
      if (emo === key) {
        setchangie(emojiDictionary[key]);
      }
    }
  }
  function handler(item) {
    // console.log(emojiDictionary[item])
    setchangie(emojiDictionary[item])
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={changer}></input>
      <div>Your Emotion is {changie}</div>
      <h3>Emoji we know</h3>
                {
              list.map(function(emoji){
                return( <span  key={emoji}
                  onClick={()=>handler(emoji)} 
                  style={{ padding:"0.5rem" ,fontSize:"2rem"}}  
                 >
                  {emoji}</span>)
              })
            }
    </div>
  );
}
