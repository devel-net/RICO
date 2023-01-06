import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Login = () => {
    const navigate = useNavigate();
    const [pwdSelector, setPwdSelector] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {store} = useContext(Context);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        store.login(email, password).then(()=> navigate('/dashboard'));
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-dark-blue text-primary">
            <h1 className="text-4xl font-light mb-8">Log in</h1>
            <form onSubmit={submitHandler} className="flex flex-col items-center justify-center lg:w-1/4 gap-2 sm:full">
                <label className="flex flex-col items-start justify-start w-full font-bold">Your email</label>
                <input type="text" className="w-full p-2 my-2 rounded-md bg-light-blue font-light" onChange={(e)=>setEmail(e.target.value)}/>

                <label className="flex flex-col items-start justify-start w-full mt-6 font-bold">Your password</label>
                <input type={pwdSelector ? "password": "text"} className="w-full p-2 my-2 rounded-md bg-light-blue font-light" onChange={(e)=>setPassword(e.target.value)}/>
                <div className="flex text-primary-shutted flex-row gap-2 w-full cursor-pointer" onClick={()=>setPwdSelector(prevState => !prevState)}>
                    <img src={require('../../assets/icons/eye-pass.png')} alt="eye-pass"/>
                    <p className="underline">show password</p>
                </div>
                <button className="w-1/2 p-2 my-2 rounded-md bg-primary bg-green mt-2">Login</button>
                <p>Have a good deal!</p>
                {/*<p className="text-center text-sm mt-6">If you dont have account*/}
                {/*    <p className="cursor-pointer underline">register please</p></p>*/}
            </form>
        </div>
    );
};

export default observer(Login);
