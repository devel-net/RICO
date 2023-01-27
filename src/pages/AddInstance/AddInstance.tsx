import React, {ChangeEvent, useState} from 'react';
import Step from "../../components/dashboard/AddInstance/Step";
import Select from "react-select";
import Footer from "../../components/footer";
import Selection from "../../components/dashboard/AddInstance/Selection";

const AddInstance = () => {
    const [nextStepForConfirm, setNextStepForConfirm] = React.useState(0);
    const [stage, setStage] = React.useState(0);

    const [files, setFiles] = useState<File[]>([]);

    console.log(files);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            for (let i = 0; i < e.target.files.length; i++) {
                setFiles([...files, e.target.files[i]]);
            }
        }
    };

    const onChangeValues = (e: any) => {
        console.log(e);
    }
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
                <Step currentProps={stage} />
            </div>
            <div>
                {stage === 0 ?
                    <div className="flex flex-row gap-4 mt-16 mx-48 justify-between">
                    <form className="w-1/2 gap-12 flex flex-col" action="">
                        {nextStepForConfirm === 1 ?
                            <div className="flex gap-2 flex-col">
                                <h3 className="font-bold text-2xl mb-4">Is it in the right place?</h3>
                                <p>
                                    If it is not well located, you can drag the pin so that it is in the right place.
                                </p>
                                <div className='flex flex-row gap-2 mt-2'>
                                    <img src={require('../../assets/icons/Location.png')} alt={'location'}/>
                                    <p className="font-bold">SPAIN</p>
                                    <p className="font-light">Str. Gracia. 9</p>
                                </div>
                                <div className='flex justify-center items-center px-4 py-2 bg-orange w-1/4 rounded-md mt-6 hover:cursor-pointer'>
                                    <p className="font-bold">confirm address</p>
                                </div>
                                <img src={require('../../assets/images/confirmation.png')} alt="confirm" className="mt-12 w-3/4"/>
                                <div className="mt-12">
                                    <label className="font-bold text-2xl mt-12">Contact of this property</label>
                                    <div className="flex flex-row gap-8">
                                        <input type="text" placeholder="number of phone" className="w-1/3 mt-4 px-4 py-2 bg-dark-blue rounded-md"/>
                                        <input type="text" placeholder="whatsapp" className="w-1/3 mt-4 px-4 py-2 bg-dark-blue rounded-md"/>

                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-bold text-xl mt-12">Link of offer</label>
                                    <div className="flex flex-row mt-4 gap-x-8">
                                        <input type="text" placeholder="for example from idealista.com" className="w-1/2 px-4 py-2 bg-dark-blue rounded-md"/>
                                        <div className="flex flex-row gap-x-4 items-center">
                                            <input type="radio" id="rent" name="operation" value="rent" className="hidden"/>
                                            <label htmlFor="rent" className="flex items-center cursor-pointer">
                                                <span className="w-6 h-6 inline-block mr-2 rounded-full border-4 border-dark-blue bg-light-blue"></span>
                                            </label>
                                            <p>dont have the link</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-bold text-xl mt-12">Link of site realty company</label>
                                    <div className="flex flex-row mt-4 gap-x-8">
                                        <input type="text" placeholder="for example from idealista.com" className="w-1/2 px-4 py-2 bg-dark-blue rounded-md"/>
                                        <div className="flex flex-row gap-x-4 items-center">
                                            <input type="radio" id="rent" name="operation" value="rent" className="hidden"/>
                                            <label htmlFor="rent" className="flex items-center cursor-pointer">
                                                <span className="w-6 h-6 inline-block mr-2 rounded-full border-4 border-dark-blue bg-light-blue"></span>
                                            </label>
                                            <p>I’m self</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center bg-orange py-2 px-4 rounded-md w-1/4 mt-16"
                                onClick={()=> setStage(2)}>
                                    <p className="font-bold">go next step</p>
                                </div>
                            </div>
                            :
                            <>
                                <div className="flex gap-2 flex-col gap-4">
                                    <label className="">Choose the type of property</label>
                                    <Select
                                        className={"w-1/2"}
                                        placeholder={'Comertial'}
                                        options={[
                                            {value: '1', label: 'Comertial'},
                                            {value: '2', label: 'Privat'},
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
                                <h3 className='text-3xl'>Location of the property</h3>
                                <div className="flex flex-col gap-y-4">
                                    <label className="">City</label>
                                    <Select
                                        className={"w-1/2"}
                                        placeholder={''}
                                        options={[
                                            {value: '1', label: 'Barcelona, Spain'},
                                            {value: '2', label: 'Madrid, Spain'},
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
                                <div className="flex flex-col gap-y-4">
                                    <label className="">Name of the road</label>
                                    <input type="text" className="w-1/2 bg-dark-blue h-10 px-2 rounded-md"/>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <label className="">Number of build</label>
                                    <div className='flex flex-row items-center gap-x-6'>
                                        <input type="text" className="w-1/4 bg-dark-blue h-10 px-2 rounded-md"/>
                                        <div className="flex flex-row">
                                            <input type="radio" id="rent" name="operation" value="rent" className="hidden"/>
                                            <label htmlFor="rent" className="flex items-center cursor-pointer">
                                                <span className="w-6 h-6 inline-block mr-2 rounded-full border-4 border-dark-blue bg-light-blue"></span>
                                            </label>
                                            <p>
                                                I don't want to specify the floor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <label className="">How much plant in build</label>
                                    <div className='flex flex-row items-center gap-x-6'>
                                        <input type="text" className="w-1/4 bg-dark-blue h-10 px-2 rounded-md"/>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 px-4 bg-green w-1/5 justify-center rounded-sm hover:cursor-pointer" onClick={()=>setNextStepForConfirm(1)}>
                                    <p>go next</p>
                                </div>
                            </>
                        }

                    </form>
                    <div className="flex flex-col w-1/2 gap-8">
                        <p className="font-bold text-2xl">Useful information</p>
                        <p className="font-light text-sm">
                            Have the photos at hand. If you don't have them, you can add<br/>them later. Without photos you will not have results.<br/>
                            We are giving you your first two ads so you can try our service.<br/>You can publish flats, villas, garages, plots, premises, etc. for<br/> free until you sell or rent it.<br/>
                            In addition, you can publish up to 5 rooms for free in a shared<br/>apartment, they do not add up to the number of ads we give<br/> you.<br/>
                            In order to maintain our quality of service, we need to charge<br/> in these cases:
                        </p>
                        <div className="flex flex-row gap-4">
                            <ul>
                            {/*    li with rounded circle*/}
                                <li className="flex flex-row gap-2 items-center">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    <p className="font-light text-sm">advertisers with more than two properties</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    <p className="font-light text-sm">duplicate real estate ads</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    <p className="font-light text-sm">properties for sale of more than €1,000,000</p>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    <p className="font-light text-sm">properties for rent of more than €2,000/month</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <img src={require('../../assets/icons/Business.png')} className="w-[48px] h-[48px]" alt="arrow"/>
                            <div className="flex flex-col">
                                <p className="text-sm">Are you a real estate professional?</p>
                                <p className="text-sm underline">Learn about our advantages for professionals</p>
                            </div>
                        </div>
                    </div>
                    {/*advertisers with more than two properties*/}
                    {/*duplicate real estate ads*/}
                    {/*properties for sale of more than €1,000,000*/}
                    {/*properties for rent of more than €2,000/month*/}
                </div> : stage === 2 ?
                <div className="mx-48 mt-16 flex flex-col">
                    <p className='text-xl font-bold'>Characteristics of the apartment</p>

                    <p className='text-md mt-6 font-normal'>Status</p>
                    {/*//TODO onChange value*/}
                    <div className='flex flex-col mt-2'>
                        <div className='flex items-center gap-4'>
                           <div className='w-4 h-4 bg-dark-blue rounded-full'/> To reform
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-4 h-4 bg-dark-blue rounded-full'/> Good condition
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-4 h-4 bg-dark-blue rounded-full'/> New
                        </div>
                    </div>
                    <p className='text-md mt-6 font-normal mb-2'>m2 build</p>
                    <div className='flex flex-col'>
                        <div className="relative w-64">
                            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                <p>m2</p>
                            </div>
                            <input type="text" id="input-group-1"
                                   className="bg-dark-blue text-white text-sm rounded-lg block pr-32 p-2.5 w-full"
                            />
                        </div>
                    </div>

                    <p className='text-md mt-6 font-normal mb-2'>m2 useful ( optional )</p>
                    <div className='flex flex-col'>
                        <div className="relative w-64">
                            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                <p>m2</p>
                            </div>
                            <input type="text" id="input-group-1"
                                   className="bg-dark-blue text-white text-sm rounded-lg block pr-32 p-2.5 w-full"
                            />
                        </div>
                    </div>

                    <p className='text-md mt-6 font-normal mb-2'>Number of rooms in the house</p>
                    <div className='flex flex-row bg-dark-blue rounded-xl w-36 h-12 items-center justify-between'>
                        <div className='flex w-12 h-12 bg-light-blue rounded-xl items-center justify-center cursor-pointer hover:brightness-50'>
                            <p className='font-medium text-3xl select-none'>+</p>
                        </div>
                        <p className='font-bold select-none'>2</p>
                        <div className='flex w-12 h-12 bg-light-blue rounded-xl items-center justify-center cursor-pointer hover:brightness-50'>
                            <p className='font-medium text-3xl select-none'>-</p>
                        </div>
                    </div>

                    <p className='text-md mt-6 font-normal mb-2'>Number of bathrooms and toilets</p>
                    <div className='flex flex-row bg-dark-blue rounded-xl w-36 h-12 items-center justify-between'>
                        <div className='flex w-12 h-12 bg-light-blue rounded-xl items-center justify-center cursor-pointer hover:brightness-50'>
                            <p className='font-medium text-3xl select-none'>+</p>
                        </div>
                        <p className='font-bold select-none'>2</p>
                        <div className='flex w-12 h-12 bg-light-blue rounded-xl items-center justify-center cursor-pointer hover:brightness-50'>
                            <p className='font-medium text-3xl select-none'>-</p>
                        </div>
                    </div>

                    <p className='text-md mt-6 font-normal mb-2'>Is the house adapted for people with reduced mobility?</p>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <div className='w-4 h-4 bg-dark-blue rounded-full mr-4'/>
                                <p>
                                    The outdoor access to the house is adapted for wheelchairs
                                </p>
                            </div>
                            <p className='text-primary-shutted mx-8'>
                                It has ramps and a 6-seater elevator or the house is at street level without curbs.
                            </p>
                        </div>
                        <div className='flex items-center gap-4 mt-2'>
                            <div className='w-4 h-4 bg-dark-blue rounded-full'/>
                            <p>
                                The interior of the house is adapted for wheelchairs.
                            </p>
                        </div>
                    </div>

                    <p className='text-xl font-bold mt-12'>Price of the property</p>
                    <p className='text-md mt-6 font-normal mb-2'>Price</p>
                    <div className='flex flex-col'>
                        <div className="relative w-64">
                            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                <p>Euros/month</p>
                            </div>
                            <input type="text" id="input-group-1"
                                   className="bg-dark-blue text-white text-sm rounded-lg block pr-32 p-2.5 w-full"
                            />
                        </div>
                    </div>
                    <p className='text-md mt-2 font-normal mb-2 text-primary-shutted select-none'>
                        If you plan to charge the community to the tenant, add it to the price.
                    </p>

                    <p className='text-md mt-6 font-normal mb-2'>Deposit ( optional )</p>
                    <div className='flex flex-col'>
                        <div className="relative w-64">
                            <input type="text" className="bg-dark-blue text-white text-sm rounded-lg block p-2.5 w-full"/>
                        </div>
                    </div>

                    <p className='text-xl font-bold mt-12'>Description of the ad</p>
                    <p className='text-md mt-2 font-normal'>
                        Take the opportunity to comment on things that we have not asked you and are not in the<br />
                        photos: the parquet floor, the type of heating, does it have a clothesline?
                    </p>
                    <textarea className='bg-transparent border-light-blue border-2 text-white text-sm rounded-lg block w-full mt-8 p-2.5 h-80 resize-none'/>
                    <p className='text-md mt-3 font-normal'>
                        Later you will be able to add other languages.Capital letters are more difficult to read, so we<br />
                        do not allow the entire description in capital letters.
                    </p>

                    <div className='flex rounded-lg py-2 bg-orange w-96 mt-12 hover:brightness-50 cursor-pointer justify-center'
                        onClick={()=>setStage(3)}>
                        <p className='text-md font-normal'>continue and upload photos</p>
                    </div>
                </div> : stage === 3 &&
                <div className='flex flex-col px-40'>
                    <p className='text-xl font-bold mt-12'>Add photos and videos to your add</p>

                    <div className='flex mt-6 gap-12'>
                        <div className="flex items-center justify-center w-11/12">
                            <label htmlFor="dropzone-file"
                                   className="flex flex-col items-center justify-center w-full h-96 border-2 border-light-blue rounded-lg cursor-pointer bg-transparent">
                                <div className="flex flex-col bg-dark-blue rounded-xl items-center justify-center px-8 py-4 gap-2">
                                    <img src={require('../../assets/icons/gallery.png')} alt="gallery"/>
                                    <p className='underline text-white font-normal text-center'>
                                        Add photo of your<br />
                                        property
                                    </p>
                                    <p className='font-normal text-primary-shutted brightness-50'>
                                        Click here
                                    </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange}/>
                            </label>
                        </div>
                        <div className='flex flex-col w-1/2 gap-4'>
                            <p className='font-normal text-xl'>You can...</p>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-2 h-2 rounded-full bg-white'/>
                                    <p>Upload your first photos</p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <div className='w-2 h-2 rounded-full bg-white'/>
                                    <p>Choose your main photo</p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <div className='w-2 h-2 rounded-full bg-white'/>
                                    <p>Drag to order them</p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <div className='w-2 h-2 rounded-full bg-white'/>
                                    <p>Labeling your photos</p>
                                </div>
                            </div>
                            <p className='font-normal text-xl text-light-blue cursor-pointer'>Add more photos and videos</p>
                        </div>
                    </div>
                    {/*grid view*/}
                    {
                        files.length > 0 &&
                        <div className='flex flex-col w-full gap-4 mt-12'>
                            <p className='font-normal text-xl'>Your photos</p>
                                {/*grid view*/}
                            <div className='grid grid-cols-5 gap-4'>
                                {
                                    files.map((file, index) => {
                                            return (
                                                <div key={index} className='flex flex-col gap-4'>
                                                    <div className='flex bg-dark-blue w-56 h-50 rounded-xl select-none'>
                                                        <div className='flex flex-col items-center w-full h-full py-4'>
                                                            <div className='flex flex-row justify-between w-full px-4'>
                                                                <img src={require('../../assets/icons/star.png')} alt="" className='w-4 h-4 cursor-pointer'/>
                                                                <img src={require('../../assets/icons/upload_again.png')} alt="" className='w-4 h-4 cursor-pointer'/>
                                                                <img src={require('../../assets/icons/delete.png')} alt="" className='w-4 h-4 cursor-pointer' onClick={()=>{
                                                                    setFiles(files.filter((file, i) => i !== index))
                                                                }}/>
                                                            </div>
                                                            <img src={URL.createObjectURL(file)} alt="preview" className='w-50 h-32 rounded-xl mt-4'/>

                                                        </div>
                                                    </div>
                                                    <Selection options={[
                                                        {value: 'Living room', label: 'Living room'},
                                                    ]} onChange={onChangeValues} className={'w-56'} />
                                                </div>
                                            )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>}
            </div>
            <Footer />
        </div>
    );
};

export default AddInstance;
