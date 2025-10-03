import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import TableManagement from '../pages/tableManagement';
import Layout from '../layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/tableManagement",
                element: <TableManagement />
            }
        ]
    }
]);