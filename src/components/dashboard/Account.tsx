import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Account = () => {
    const [hideInfo, setHideInfo] = React.useState(true);
    const [hideSecurity, setHideSecurity] = React.useState(false);
    const [passwordHide, setPasswordHide] = React.useState(true);
    const [userProfileStatus, setUserProfileStatus] = React.useState(0);

    const [profile, setProfile] = React.useState(false);
    const {store} = useContext(Context);
    return (

        <div className="flex flex-col phone:justify-center phone:items-center phone:mt-6 lg:justify-start lg:items-start">
            <span className="font-light text-4xl phone:text-3xl">Your account</span>
            <div className="flex lg:flex-row gap-6 mt-6 phone:flex-col phone:items-center phone:justify-center lg:justify-start">
                <div className="bg-dark-blue rounded-full w-[76px] h-[76px]"/>
                <div className="flex flex-col justify-center gap-1">
                    <span className="font-light text-3xl">{ store.user?.first_name}</span>
                    <div className="flex flex-row justify-between">
                        <span className="font-light text-primary-shutted text-1xl border-b mb-0 pb-0">edit photo</span>
                    </div>
                </div>
            </div>
            <button className="lg:w-[422px] h-[42px] bg-dark-blue rounded-lg mt-6 phone:w-1/2" onClick={()=> setHideInfo(prevState => !prevState)}>
                <span className="font-light text-1xl text-primary-shutted">{hideInfo ? 'Show my info':'Hide my info'}</span>
            </button>
            {!hideInfo && <div className="flex flex-col gap-6 mt-6 phone:justify-center phone:items-center">
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-1xl text-primary">Your email</label>
                    <input className="lg:w-[422px] h-[42px] bg-dark-blue rounded-lg pl-2 phone:w-[300px]" value={store.user?.email}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold text-1xl text-primary">Your phone</label>
                    <input className="lg:w-[422px] h-[42px] bg-dark-blue rounded-lg pl-2 phone:w-[300px]" value={store.user?.phone}/>
                </div>

                {/*<div className="lg:w-[422px] px-20 flex flex-row justify-between phone:w-[300px]">*/}
                {/*    <div className="flex flex-row gap-2 items-center">*/}
                {/*        <button className="w-4 h-4 rounded-full bg-dark-blue" />*/}
                {/*        <span className="font-light text-1xl text-primary-shutted">Self</span>*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-row gap-2 items-center">*/}
                {/*        <button className="w-4 h-4 rounded-full bg-dark-blue" />*/}
                {/*        <span className="font-light text-1xl text-primary-shutted">Company</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="flex flex-col gap-2">
                    <label className="font-bold text-1xl text-primary">Your description</label>
                    <textarea className="lg:w-[422px] h-[120px] bg-transparent rounded-lg pl-2 phone:w-[300px] border-4 border-dark-blue pt-2" placeholder="Tell us about you" />
                </div>
                <button className="lg:w-[422px] h-[42px] bg-dark-blue rounded-lg mt-6 phone:w-1/2" onClick={()=> setHideSecurity(prevState => !prevState)}>
                    <span className="font-light text-1xl text-primary-shutted">Security</span>
                </button>
                {hideSecurity &&
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-1xl text-primary">old password</label>
                        <input type="password" className="lg:w-[422px] h-[42px] bg-dark-blue rounded-lg pl-2 phone:w-[300px]" />

                        <label className="font-bold text-1xl text-primary">new password</label>
                        <input type="password" className="lg:w-[422px] h-[42px] bg-dark-blue rounded-lg pl-2 phone:w-[300px]"/>

                        <label className="font-bold text-1xl text-primary">repeat new password</label>
                        <input type="password" className="lg:w-[422px] h-[42px] bg-dark-blue rounded-lg pl-2 phone:w-[300px]"/>
                    </div>}

            </div>}
        </div>
    );
};

export default observer(Account);
