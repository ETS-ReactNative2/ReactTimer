import React from 'react';

const Reload1 = ({ reloadBtn, timer, disabled, style }) => {
    return (
        <div>
            <button onClick={timer}
                className="bg-green white pa2"
                id="button" disabled={disabled}
                style={style}>3 Hour Timer
            </button>
            <button onClick={reloadBtn}
                className="bg-green white pa2"
                id="buttonR">Reload
         </button>
        </div>
    )
}

export default Reload1;