import React from 'react';

//component with props
const Card = (props: any) => {
    const {title, description, image, id, city} = props;
    const actions = (action: string) => {
        switch (action) {
            case 'edit':
                console.log('edit');
                break;
            case 'hide':
                console.log('hide');
                break;
            case 'delete':
                console.log('delete');
                break;
            default:
                console.log('default');
        }
    }
    return (
        <div className="flex flex-col bg-dark-blue rounded-lg shadow-lg p-4 items-center w-[210px]">
            <div className="flex flex-row justify-between w-full mb-2 px-4">
                <img className={'cursor-pointer'} onClick={()=>actions('edit')} src={require('../../../assets/icons/pencil.png')} width='24' height='24' alt="pencil"/>
                <img className={'cursor-pointer'} onClick={()=>actions('hide')} src={require('../../../assets/icons/eye.png')} width='24' height='24' alt="eye"/>
                <img className={'cursor-pointer'} onClick={()=>actions('delete')} src={require('../../../assets/icons/remove.png')} width='24' height='24' alt="remove"/>
            </div>
            <img src={require('../../../assets/icons/vector_image.png')} className="w-[68px] h-[56px] justify-center mt-4"/>
            <div className="flex flex-col gap-2 mt-4">
                <span className="font-light text-2xl text-center">{city}</span>
                <span className="font-light text-1xl text-center">{description}</span>
            </div>
        </div>
    );
}

export default Card;
