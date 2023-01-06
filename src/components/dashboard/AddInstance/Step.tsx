import React from 'react';

//rsc with props
const Step = (props: any) => {
    const {type} = props;
    return (
        <div className="flex w-full rounded-2xl flex-row justify-between items-center px-48">
            <div className="flex w-1/2 bg-light-blue h-8 rounded-l-md justify-end" style={{
                background: 'linear-gradient(90deg, #2DCA84 0%, #FF9331 182.8%)'
            }}>
                <div className="flex flex-row justify-between items-center gap-x-16">
                    <p>1st step basic data</p>
                    <img src={require('../../../assets/icons/first-step.png')} width={64} height={64} alt=""/>
                </div>
            </div>
            <div className="flex w-1/2  bg-light-blue h-8 items-center justify-center">
                <p>2nd step details</p>
            </div>
            <div className="flex w-1/2 bg-light-blue h-8 rounded-r-md items-center justify-center">
                <p>3rd step photos</p>
            </div>
        </div>
    );
}

export default Step;
