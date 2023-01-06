import React, {useContext} from 'react';
import {Context} from "../index";

const Navbar = () => {
    const {store} = useContext(Context);
    return (
        // navbar with logo and text space-between and 2 buttons
        <div className="flex lg:flex-row lg:justify-between items-center h-16 phone:flex-col phone:gap-4">
            <div className="flex flex-row items-center gap-2">
                <img src={require('../assets/images/rico_logo.png')} className="w-[64px] h-[64px]" alt="RICO"/>
                <h1 className="text-4xl font-bold">Rico</h1>
            </div>
            <div className="flex flex-row gap-12 items-center">
               <a className="text-1xl font-light">Support/FAQ</a>
                <button onClick={()=>store.logout()} className="bg-light-blue hover:bg-blue-700 w-48 font-bold py-2 px-4 rounded">
                    Log out
                </button>
            </div>
        </div>
    );
};

export default Navbar;
