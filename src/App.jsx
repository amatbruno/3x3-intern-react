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

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="events" element={<EventView />} />
                <Route path="tickets" element={<TicketsView />} />
                <Route path="gallery" element={<GalleryView />} />
                <Route path="contact" element={<ContactView />} />
                <Route path="login" element={<LoginView />} />
            </Routes>
        </div>
    );
}

export default App;
