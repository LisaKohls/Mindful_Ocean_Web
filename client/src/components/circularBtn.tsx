import React from 'react';

interface CircularBtnProps {
    title: string;
}
const CircularBtn: React.FC<CircularBtnProps> = ({title}) => {
    return (
        <div className="px-3 mb-20">
            <button className="px-10 py-3 rounded-xl text-sm font-medium text-indigo-600 
                    outline-none focus:outline-none m-1 border 
                    border-indigo-600 transition-all relative group">
                {title}
            </button>
        </div>
    )

}

export default CircularBtn;