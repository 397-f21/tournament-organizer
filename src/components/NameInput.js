import React, { useState } from 'react';

const addName = (input, names, setNames) => {  //name is a str
    setNames(names => [...names, input]);
}

const NameInput = ({ names, setNames, buttonPressed }) => {
    const [input, updateInput] = useState('');

    const changeHandler = txt => {
        updateInput(txt);
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
                <form>
                {!(buttonPressed) && <input type='text' onChange={e => changeHandler(e.target.value)}></input>}
                {!(buttonPressed) && <a href="#" className="button" onClick={() => addName(input, names, setNames)}>Add Name</a>}                
                </form>
            </div>
        </>
    );
};

export default NameInput;