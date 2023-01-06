import React, {useContext} from 'react';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import Select from "react-select";
import {Context} from "../../index";
import {useNavigate} from "react-router";

const Register = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        repeatPassword: '',
        whereDidYouHearAboutUs: '',
    });
    const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        store.registration(userInfo.name, userInfo.email, userInfo.phone, userInfo.password, userInfo.whereDidYouHearAboutUs).then((data) => {
            console.log(data);
            navigate('/complete-email');
        });
    }
    console.log(userInfo);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-dark-blue text-primary">
            <h1 className="text-4xl font-light mb-8">Registration form</h1>
            <form onSubmit={handleRegistration} className="flex flex-col items-center justify-center lg:w-1/4 sm:full">
                <label className="flex flex-col items-start justify-start w-full font-bold" >Your name</label>
                <input type="text" className="w-full p-2 my-2 rounded-md bg-light-blue font-light mt-2"
                       onChange={(e)=>setUserInfo({...userInfo, name: e.target.value})}/>

                <label className="flex flex-col items-start justify-start w-full font-bold">Your email</label>
                <input type="email" className="w-full p-2 my-2 rounded-md bg-light-blue font-light mt-2"
                       onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}/>

                <label className="flex flex-col items-start justify-start w-full mt-2 font-bold">Your phone</label>
                <PhoneInput
                    country={'ua'}
                    value={''}
                    placeholder={''}
                    inputStyle={{
                        backgroundColor: '#36418E',
                        fontSize: '1rem',
                        fontWeight: '400',
                        color: '#FFF',
                        width: '100%',
                        border: 'none',
                        fontFamily: 'Comfortaa',
                        padding: '0.5rem 5rem 0.5rem 3rem',
                        height: '2.5rem',

                    }}

                    buttonStyle={{
                        backgroundColor: '#36418E',
                        border: 'none',
                    }}
                    containerStyle={{
                        border: 'none',
                        width: '100%',
                        height: '2.5rem',
                    }}
                    dropdownStyle={{
                        backgroundColor: '#36418E',
                    }}
                    onChange={(e)=>setUserInfo({...userInfo, phone: e})}/>

                <label className="flex flex-col items-start justify-start w-full font-bold mt-4">Your password</label>
                <input type="password" className="w-full p-2 my-2 rounded-md bg-light-blue font-light mt-2"
                       onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}/>

                <label className="flex flex-col items-start justify-start w-full font-bold mt-2">Repeat password</label>
                <input type="password" className="w-full p-2 my-2 rounded-md bg-light-blue font-light"
                       onChange={(e)=>setUserInfo({...userInfo, repeatPassword: e.target.value})}/>

                <label className="flex flex-col items-start justify-start w-full font-bold mt-2">from where you know about us</label>
                <div className="w-full">

                <Select
                    placeholder={'Recommendation'}
                    options={[
                        {value: '1', label: 'Social media'},
                        {value: '2', label: 'Google search'},
                        {value: '3', label: 'Google ads/ You Tube ads'},
                        {value: '4', label: 'Print media/ Online media'},
                    ]}
                    onChange={(values) => {
                        setUserInfo({...userInfo, whereDidYouHearAboutUs: values!.label})
                    }}
                    isSearchable={false}
                    styles={{
                        control: (provided, state) => ({
                            ...provided,
                            backgroundColor: '#36418E',
                            border: 'none',
                            fontFamily: 'Comfortaa',
                            fontSize: '1rem',
                            fontWeight: '400',
                            width: '100%',
                            height: '2.5rem',
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected ? '#36418E' : '#36418E',
                            color: '#FFF',
                            fontFamily: 'Comfortaa',
                            fontSize: '1rem',
                            fontWeight: '400',
                        }),
                        menu: (provided, state) => ({
                            ...provided,
                            backgroundColor: '#36418E',
                            color: '#FFF',
                            fontFamily: 'Comfortaa',
                            fontSize: '1rem',
                            fontWeight: '400',
                            padding: '0.5rem',
                        }),
                        singleValue: (provided, state) => ({
                            ...provided,
                            color: '#FFF',
                            fontFamily: 'Comfortaa',
                            fontSize: '1rem',
                            fontWeight: '400',
                            padding: '0.5rem',
                        }),
                        placeholder: (provided, state) => ({
                            ...provided,
                            color: '#FFF',
                        }),
                        indicatorSeparator: (provided, state) => ({
                            ...provided,
                            display: 'none',
                        }),
                        dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: '#FFF',
                            verticalAlign: 'middle',
                            marginBottom: '0.2rem',
                        }),
                        valueContainer: (provided, state) => ({
                            ...provided,
                            color: '#FFF',
                        }),
                    }}

                />
                </div>
                <button className="w-1/2 p-2 my-2 rounded-md bg-primary bg-orange mt-24 hover:bg-light-blue">register</button>
                <p className="text-center">& go to your account</p>
            </form>
        </div>
    );
};

export default Register;
