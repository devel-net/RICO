import React from 'react';
import Step from "../../components/dashboard/AddInstance/Step";
import Select from "react-select";

const AddInstance = () => {
    return (
        <div>
            <div className="container flex flex-col w-screen mx-32 my-12">
                <div className="flex flex-row justify-between items-center h-16">
                    <div className="flex flex-row items-center gap-2">
                        <img src={require('../../assets/images/rico_logo.png')} className="w-[64px] h-[64px]" alt="RICO"/>
                        <h1 className="text-4xl font-bold">Rico</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 justify-center items-center mx-48">
                <Step type={0} />
            </div>
            <div>
                <div className="flex flex-row gap-4 mt-16 mx-48 justify-between">
                    <form className="w-1/2 gap-12 flex flex-col" action="">
                        <div className="flex gap-2 flex-col gap-4">
                            <label className="">Choose the type of property</label>
                            <Select
                                className={"w-1/2"}
                                placeholder={'Comertial'}
                                options={[
                                    {value: '1', label: 'Comertial'}
                                ]}
                                onChange={(values) => {
                                    console.log(values);
                                }}
                                isSearchable={false}
                                styles={{
                                    control: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: '#151B43',
                                        border: 'none',
                                        fontFamily: 'Comfortaa',
                                        fontSize: '1rem',
                                        fontWeight: '400',
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
                        <div className="flex gap-2 flex-col gap-6">
                            <label className="">Operation</label>
                            <div className="flex">
                                {/*styled radio buttons*/}
                                <div className="flex flex-col gap-4">

                                    <div className="flex flex-row gap-x-4">
                                        <input type="radio" id="sale" name="operation" value="sale" className="hidden"/>
                                        <label htmlFor="sale" className="flex items-center cursor-pointer">
                                            <span className="w-6 h-6 inline-block mr-2 rounded-full bg-dark-blue"></span>
                                        </label>
                                        <p>Sale</p>
                                    </div>

                                    <div className="flex flex-row gap-x-4">
                                        <input type="radio" id="rent" name="operation" value="rent" className="hidden"/>
                                        <label htmlFor="rent" className="flex items-center cursor-pointer">
                                            <span className="w-6 h-6 inline-block mr-2 rounded-full border-4 border-dark-blue bg-light-blue"></span>
                                        </label>
                                        <p>Rent</p>
                                    </div>


                                    <div className="flex flex-row gap-x-4">
                                        <input type="radio" id="3d-app" name="operation" value="3d-app" className="hidden"/>
                                        <label htmlFor="3d-app" className="flex items-center cursor-pointer">
                                            <span className="w-6 h-6 inline-block mr-2 rounded border-4 border-dark-blue bg-light-blue "></span>
                                        </label>
                                        <p>Add 3d app</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col w-1/2">
                        <p className="font-bold text-2xl">Useful information</p>
                        <p className="font-light text-sm">
                            Have the photos at hand. If you don't have them, you can add<br/>them later. Without photos you will not have results.<br/>
                            We are giving you your first two ads so you can try our service.<br/>You can publish flats, villas, garages, plots, premises, etc. for<br/> free until you sell or rent it.<br/>
                            In addition, you can publish up to 5 rooms for free in a shared<br/>apartment, they do not add up to the number of ads we give<br/> you.<br/>
                            In order to maintain our quality of service, we need to charge<br/> in these cases:
                        </p>

                    </div>
                    {/*advertisers with more than two properties*/}
                    {/*duplicate real estate ads*/}
                    {/*properties for sale of more than €1,000,000*/}
                    {/*properties for rent of more than €2,000/month*/}
                </div>
            </div>
        </div>

    );
};

export default AddInstance;
