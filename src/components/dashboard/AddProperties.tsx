import React, {useContext} from 'react';
import Card from "./CardForAddProperties/Card";
import {useNavigate} from "react-router";
import {Context} from "../../index";

const AddProperties = () => {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    console.log(store.houses);
    return (
        <div className="flex flex-col w-full">
            <div className="flex lg:flex-row justify-between items-center phone:flex-col">
                <span className="font-light text-4xl sm:text-left phone:text-center phone:text-2xl phone:mb-6">Your add properties</span>

                {
                    store.houses.length > 0 ?
                        <button className="flex justify-center bg-light-blue hover:bg-blue-700 w-16 h-14 font-bold items-center rounded-full"
                                onClick={()=>navigate('/AddInstance')}>
                            <img src={require('../../assets/icons/plus_button.png')} alt="plus-button"/>
                        </button> : null
                }

            </div>
            <div className="grid lg:grid-cols-2 gap-2 mt-6 sm:grid-cols-2 sm:justify-center ms:items-center xl:grid-cols-3 2xl:grid-cols-6 phone:items-center phone:justify-center">
                { store.houses.length > 0 ?
                    store.houses.map((item: any) => <Card key={item.id} city={item.city} title={item.title} description={item.description} image={item.image} id={item.id}/>)
                    :
                    null
                }
            </div>
            {store.houses.length === 0 ?
                <div className="flex flex-col items-center h-screen text-primary">
                    <h1 className="text-2xl font-light mb-8">You don't have any properties</h1>
                    <button className="flex justify-center bg-light-blue hover:bg-blue-700 w-16 h-14 font-bold items-center rounded-full"
                            onClick={()=>navigate('/AddInstance')}>
                        <img src={require('../../assets/icons/plus_button.png')} alt="plus-button"/>
                    </button>
                </div>: null
            }

        </div>
    );
};

export default AddProperties;
