import React, { useState } from 'react';

const addName = (input, names, setNames) => {  //name is a str
    setNames(names => [...names, input]);
    document.getElementById("nameSubmit").value = '';
}

const NameInput = ({ names, setNames, buttonPressed }) => {
    const [input, updateInput] = useState('');

    const changeHandler = txt => {
        updateInput(txt);
    }

    const inputRef = React.useRef(null)

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          inputRef.current.click();
        }
      }

    return (
        <>
            <div className="names-list">
                <ol>
                {names.map((name, key)=>
                    <li key={key}>{name}</li>
                )}
                </ol>
            </div>
            <div>
                {(!buttonPressed) && <h2>Please Enter 4 Names:</h2>}
                <div id="name-entry">
                {!(buttonPressed) && <input id="nameSubmit" type='text' onKeyDown={_handleKeyDown} onChange={e => changeHandler(e.target.value)}></input>}
                {!(buttonPressed) && <a  href="#" className="button" ref={inputRef} onClick={() => addName(input, names, setNames)}>Add Name</a>}                
                </div>
            </div>
        </>
    );
};

export default NameInput;