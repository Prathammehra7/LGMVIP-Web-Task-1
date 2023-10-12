import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText)
      setInputText("")
    }
  }
  return (
    <div className="input-container">
      <div class="searchBox">
        <input class="searchInput" type="text" name="" placeholder="Write something"
          value={inputText}
          onChange={e => {
            setInputText(e.target.value)
          }}
          onKeyDown={handleEnterPress} />
        <button class="searchButton" href="#" onClick={() => {
          props.addList(inputText)
          setInputText("")
        }}>

          <i class="fa-solid fa-plus"></i>

        </button>
      </div>
    </div>
  );
}

export default TodoInput;