// App.jsx
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import EventView from './views/EventView';
import GalleryView from './views/GalleryView';
import TicketsView from './views/TicketsView';
import ContactView from './views/ContactView';
import LoginView from './views/LoginView';
import UserArea from './views/UserArea';
import AuthContainer from './components/AuthContainer';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="events" element={<EventView />} />
                <Route path="tickets" element={<TicketsView />} />
                <Route path="gallery" element={<GalleryView />} />
                <Route path="contact" element={<ContactView />} />
                <Route path="login" element={<AuthContainer />} />
                <Route path="userarea" element={<UserArea />} />
            </Routes>
        </div>
    );
}

export default App;
