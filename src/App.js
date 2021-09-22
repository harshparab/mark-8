import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🎮": "Gamepad",
  "⚽": "Football",
  "🎨": "Palette",
  "🎈": "Balloon",
  "❤️": "Love",
  "🤦‍♂️": "Face palm",
  "🔥": "Fire",
  "😂": "Face with tears of joy",
  "🥺": "Pleading Face",
  "✨": "Sparkles"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This is not present in the database.";
    }

    setMeaning(meaning);
  }

  function clickEmoji(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Emoji Dictionary</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="meaning">{meaning}</div>
      <div className="emojisWeKnow">Emojis we Know </div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span className="emoji" onClick={() => clickEmoji(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
