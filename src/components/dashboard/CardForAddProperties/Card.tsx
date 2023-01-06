import React from 'react';

//component with props
const Card = (props: any) => {
    const {title, description, image} = props;
    return (
        <div className="flex flex-col bg-dark-blue rounded-lg shadow-lg p-4 items-center w-[210px]">
            <div className="flex flex-row justify-between w-full mb-2 px-4">
                <img src={require('../../../assets/icons/pencil.png')} alt="image"/>
                <img src={require('../../../assets/icons/eye.png')} alt="image"/>
                <img src={require('../../../assets/icons/remove.png')} alt="image"/>
            </div>
            <img src={require('../../../assets/icons/vector_image.png')} className="w-[68px] h-[56px] justify-center mt-4"/>
            <div className="flex flex-col gap-2 mt-4">
                <span className="font-light text-2xl text-center">{title}</span>
                <span className="font-light text-1xl text-center">{description}</span>
            </div>
        </div>

    );
}

export default Card;
