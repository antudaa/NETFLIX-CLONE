import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Loyouts/Main';
import HomePage from '../HomePage/HomePage';

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    }
])

export default route;