import React from 'react';

interface SlideMenuProps {
    title: string;
    imageUrl: string;
    description: string;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ title, imageUrl, description }) => {
    return (
        <div className="my-4">
            <img src={imageUrl} alt={title} className="mx-auto w-full" />
            <h2 className="text-center">{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default SlideMenu;
