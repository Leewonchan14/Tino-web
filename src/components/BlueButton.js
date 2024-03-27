import React from 'react';

function BlueButton({onClick,className, ...rest}) {
    return (
        <div onClick={onClick} className={"h-12 mr-4 rounded-xl w-24 bg-blue-700 flex justify-center items-center text-white " + className}>
            {rest.children}
        </div>
    );
}

export default BlueButton;