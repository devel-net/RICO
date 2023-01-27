import React, {useContext, useEffect} from 'react';
import Navbar from "../../components/navbar";
import Account from "../../components/dashboard/Account";
import Statistics from "../../components/dashboard/Statistics";
import AddProperties from "../../components/dashboard/AddProperties";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router";
import Footer from "../../components/footer";

const Dashboard = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('refresh') === null){
            navigate('/login');
        }
    },[localStorage.getItem('refresh')]);
    useEffect(() => {
        (async () => {
            await store.getClient();
            await store.getHouses();
        })()
    }, []);

    const [accountSelector, setAccountSelector] = React.useState(false);
    return (
        <>
        {!store.isLoading ?
            <>
                <div className="py-12 bg-dark-blue-2 lg:gap-24 sm:gap-2 lg:px-32  sm:px-8">
                    <>
                        <Navbar/>
                        <div className='flex w-full mt-6'>
                            <div className={`flex w-1/2 h-8 justify-center items-center rounded-l-xl ${accountSelector ? 'bg-dark-blue': 'bg-light-blue'} cursor-pointer`} onClick={()=> setAccountSelector(false)}/>
                            <div className={`flex w-1/2 h-8 justify-center items-center rounded-r-xl ${accountSelector ? 'bg-light-blue': 'bg-dark-blue'} `} onClick={()=> setAccountSelector(true)}/>
                        </div>
                        <div className='flex flex-row items-center justify-between px-64 mt-2'>
                            <p className={`text-sm font-bold ${accountSelector ? 'text-primary-shutted':'text-white'}`}>YOUR PERSONAL ACCOUNT</p>
                            <p className={`text-sm font-bold ${!accountSelector ? 'text-primary-shutted':'text-white'}`}>YOUR RIELTY AGENCY</p>
                        </div>
                        {
                            !accountSelector ?
                                <>
                                    <div
                                        className="flex gap-12 mt-12 lg:flex-row phone:items-center lg:items-start lg:px-24 lg:gap-48 sm:px-12 phone:flex-col">

                                        <Account/>
                                        <Statistics/>
                                    </div>
                                    <div
                                        className="flex gap-12 mt-12 lg:flex-row lg:justify-start lg:px-24 sm:px-12 sm:flex-col phone:flex-col-reverse phone:items-center lg:items-start">
                                        <AddProperties/>
                                    </div>
                                </>
                         :
                        <div
                            className="flex gap-12 mt-12 lg:flex-row phone:items-center lg:items-start lg:px-24 lg:gap-48 sm:px-12 phone:flex-col">

                            <p>Accout of Agency</p>
                        </div>}

                    </>
                </div>
                <Footer/>
            </>
            : <div className="flex flex-col items-center justify-center h-screen bg-dark-blue-2 text-primary">
                <h1 className="text-4xl font-light mb-8">Loading...</h1>
                </div>}
            </>
    );
};

export default observer(Dashboard);
