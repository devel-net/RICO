import React from 'react';
import logo from "../../assets/images/rico_logo.png";
import {useNavigate} from "react-router";

const Welcome = () => {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    }
    // navigate to login page with react router dom
    return (
            <div className="flex flex-col items-center justify-center h-screen bg-dark-blue text-primary">
                <div className="flex flex-row gap-2 items-center">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="text-6xl font-black">Rico</h1>
                </div>
                <h1 className="text-4xl font-bold text-center mt-8">Smart instrument for sucsess rieltoring</h1>
                <p className="text-lg text-center font-light mt-2">Have the photos at hand. If you don't have them,<br />you can add them later. Without photos you will not<br />have results.</p>
                <div className="flex flex-row gap-2 mt-8">
                    <button
                        onClick={() => handleNavigate('/login')} className="bg-green hover:bg-blue-700 w-48 font-bold py-2 px-4 rounded">log in
                    </button>
                    <button
                        onClick={() => handleNavigate('/register')} className="bg-orange hover:bg-blue-700 w-48 font-bold py-2 px-4 rounded">register</button>
                </div>
                <p className="mt-2">& go to your account</p>
            </div>
    );
};

export default Welcome;
