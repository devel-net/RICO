import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {roots} from './routes'

const RoutesController = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    roots.map(({path, component:Component, needAuth}, index) => {
                        return (
                                <Route key={index} path={path} element={<Component/>}/>
                            )
                    })
                }
            </Routes>
        </BrowserRouter>
    );
};
export default (RoutesController);
