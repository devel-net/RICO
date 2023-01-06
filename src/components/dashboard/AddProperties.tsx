import React from 'react';
import Card from "./CardForAddProperties/Card";
import {useNavigate} from "react-router";

const AddProperties = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full">
            <div className="flex lg:flex-row justify-between items-center phone:flex-col">
                <span className="font-light text-4xl sm:text-left phone:text-center phone:text-2xl">Your add properties</span>

                <button className="flex justify-center bg-light-blue hover:bg-blue-700 w-16 h-14 font-bold items-center rounded-full"
                onClick={()=>navigate('/AddInstance')}>
                    <img src={require('../../assets/icons/plus_button.png')} alt="plus-button"/>
                </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 mt-6 sm:grid-cols-2 sm:justify-center ms:items-center xl:grid-cols-3 2xl:grid-cols-6 phone:items-center phone:justify-center">
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/><Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/><Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/><Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>
                <Card title="Str. Gracia. 9" description="Old building from 1785"/>

            </div>
        </div>
    );
};

export default AddProperties;
