import React from 'react';

//rsc with props
const Step = (props: any) => {
    const {currentProps} = props;
    return (
                <div className="flex w-full rounded-2xl flex-row justify-between items-center px-48 select-none">
                    {currentProps === 0 ?
                        <>
                            <div className="flex w-1/2 bg-light-blue h-8 rounded-l-md justify-end" style={{
                                background: 'linear-gradient(90deg, #2DCA84 0%, #FF9331 182.8%)'
                            }}>
                                <div className="flex flex-row justify-between items-center gap-x-16">
                                    <p>1st step basic data</p>
                                    <img src={require('../../../assets/icons/first-step.png')} width={64} height={64}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="flex w-1/2  bg-light-blue h-8 items-center justify-center">
                                <p>2nd step details</p>
                            </div>
                            <div className="flex w-1/2 bg-light-blue h-8 rounded-r-md items-center justify-center">
                                <p>3rd step photos</p>
                            </div>
                        </> : currentProps === 2 ?
                            <>
                                <div className="flex w-full bg-light-blue h-8 rounded-md justify-end">
                                    <div className="flex justify-center w-full rounded-l-md" style={{
                                        background: 'linear-gradient(90deg, #2DCA84 0%, #FF9331 182.8%)'
                                    }}>
                                        <div className="flex w-full justify-center flex-row items-center">
                                            <p>1st step basic data</p>
                                        </div>

                                        <div className="flex flex-row w-2/3 items-center justify-between w-full">
                                            <p>2nd step details</p>
                                            <img src={require('../../../assets/icons/first-step.png')} width={64} height={64}
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div className='flex w-2/3'>
                                        <div className='flex w-full items-center'>
                                            <p className='px-32'>3rd step photos</p>
                                        </div>
                                    </div>
                                </div>
                            </> : currentProps === 3 &&
                            <>
                                <div className="flex w-full bg-light-blue h-8 rounded-md justify-end">
                                    <div className="flex justify-center w-full rounded-l-md" style={{
                                        background: 'linear-gradient(270deg, #FF9331 0%, #FF9331 33.74%, #2DCA84 115%)'
                                    }}>
                                        <div className="flex w-full justify-center flex-row items-center">
                                            <p>1st step basic data</p>
                                        </div>

                                        <div className="flex flex-row w-2/3 items-center justify-between w-full">
                                            <p>2nd step details</p>
                                        </div>
                                        <div className="flex flex-row w-2/3 items-center justify-between w-full">
                                            <p>3rd step photos</p>

                                            <img src={require('../../../assets/icons/first-step.png')} width={64} height={64} />
                                        </div>
                                    </div>
                                </div>
                            </>

                    }
                </div>
    );
}

export default Step;
