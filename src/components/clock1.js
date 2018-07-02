import React from 'react';

const Clock1 = ({ test, test2, test3, test4 }) => {

    return (
        <div className='dib'>
            <p>{new Date().toDateString()}</p>
            <p>{new Date().toLocaleTimeString()}</p><br />
            <p>{test} </p><br />
            <p>{test2} </p><br />
            <p style={ test3 }>{test4}</p>
        </div>
    )
}

export default Clock1;