import './App.css';
import Card from './components/Card';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <a href=""><li>HOME</li></a>
                    <a href=""><li>EVENTS</li></a>
                    <a href=""><li>TICKETS</li></a>
                    <a href=""><li>GALLERY</li></a>
                    <a href=""><li>CONTACT</li></a>
                </nav>
            </header>
            <div className="Video">
                <img src="https://shorturl.at/boIN1" alt="video_motion" />
            </div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default App