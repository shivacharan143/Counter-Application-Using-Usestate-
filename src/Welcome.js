import React from 'react'

const Welcome = ({name, regNo}) => {
    return (
        <div className='welcomePage'>
            <h2>Welcome to College</h2>
            <h1>Hey, {name}!</h1>
            <h2>Registration Number: {regNo}</h2>
        </div>
    );
}

export default Welcome;