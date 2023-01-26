import React from 'react';

const Footer = () => {
    return (
        <div className='flex px-32 py-16 bg-dark-footer rounded-t-2xl flex-col gap-8 mt-24 select-none'>
            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row gap-x-4 items-center'>
                    <img src={require('../assets/images/rico_logo.png')} alt="rico_footer" className='w-18 h-18'/>
                    <h3 className='font-bold text-5xl'>Rico</h3>
                </div>
                <div className='flex flex-row gap-x-8 items-center'>
                    <div className='flex py-2 px-12 rounded-md bg-light-blue h-10'>
                        <p>download</p>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <p>
                            Available in App Store
                        </p>
                        <img src={require('../assets/icons/app_store.png')} alt="appstore" className='w-8 h-8'/>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-6 justify-between'>
                <div>
                    <p>
                        Have the photos at hand. If you don't<br />have them, you can add them later.<br />Have the photos at hand. If you don't<br />have them, you can add them later.<br />Have the photos at hand. If you don't<br />have them, you can add them later.
                    </p>
                </div>
                <div className='flex flex-col justify-between'>
                    <p>
                        you can add them later. Have the<br />photos at hand. If you don't have them,<br />you can add them later.
                    </p>
                    <p>
                        you can add them later.<br />Have the photos at hand.
                    </p>
                </div>
                <div className='flex flex-col justify-between'>
                    <p>
                        Have the photos at hand. If you don't have them, you can add them later. Have<br />the photos at hand. If you don't have them, you can add them later. Have the<br />photos at hand. If you don't have them, you can add them later.
                    </p>
                    <div className='flex justify-between items-center'>
                        <p className='underline'>Support/FAQ</p>
                        <ul className='flex flex-row gap-4'>
                            <li>
                                <img src={require('../assets/icons/Facebook.png')} alt=""/>
                            </li>
                            <li>
                                <img src={require('../assets/icons/Twitter.png')} alt=""/>
                            </li>
                            <li>
                                <img src={require('../assets/icons/Pinterest.png')} alt=""/>
                            </li>
                            <li>
                                <img src={require('../assets/icons/Meta.png')} alt=""/>
                            </li>
                            <li>
                                <img src={require('../assets/icons/Telegram App.png')} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
