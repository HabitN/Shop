//AppRouter
import React, { useContext } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import {Context} from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user);
    const navigate = useNavigate()
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route   key={path} path={path} element={<Component/>} exact/> 
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route  key={path} path={path} element={<Component/>} exact/> 
            )}
            navigate({SHOP_ROUTE})
            
            
        </Routes>
    );
};

export default AppRouter;