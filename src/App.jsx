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
                    <a href=""><img id='login-img' src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user-log"/></a>
                </nav>
            </header>
            <div className="Video">
                <img src="https://shorturl.at/boIN1" alt="video_motion" />
                <h1>3X3 INTERN <strong>BARCELONA</strong></h1>
            </div>
            <div className="container">
                <Card title="About" text="Take a look to our mission with this project and
                also spectators need to consider follow some rules and policies to create a 
                respectfull environment."/>
                <Card title="Tickets" text="Get your tickets now and connect with the 
                street basketball family watching the best matches, meeting people and 
                having fun with a lot of activities!"/>
                <Card title="" text=""/>
                <Card title="" text=""/>
            </div>
        </div>
    )
}

export default App