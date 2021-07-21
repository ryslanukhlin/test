import React from 'react'
import MainLayout from './Components/MainLayout'
import Notifications from './pages/Notifications';

import "./Style/index.scss";

const App = () => {
    return (
        <MainLayout>
            <div className="content">
                <Notifications />
            </div>
        </MainLayout>
    )
}

export default App
    