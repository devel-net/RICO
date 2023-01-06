import React from 'react';
import logo from "../../assets/images/rico_logo.png";
import {useNavigate} from "react-router";

const CompleteEmail = () => {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-dark-blue text-primary">
            <div className="flex flex-row gap-2 items-center">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="text-6xl font-light">Rico</h1>
            </div>
            <h1 className="text-4xl font-light text-center mt-4">Thank you for register !</h1>
            <p className="text-1xl text-center font-light mt-4">We send request to your mail,<br/> confirm please.</p>
            <div className="flex flex-row gap-2 mt-16">
                <button onClick={() => handleNavigate('/login')} className="bg-green hover:bg-blue-700 w-48 font-bold py-2 px-4 rounded">
                    Go to mail
                </button>
            </div>
            <p className="mt-2 font-light text-1xl">& check your mail</p>
        </div>
    );
};

export default CompleteEmail;
