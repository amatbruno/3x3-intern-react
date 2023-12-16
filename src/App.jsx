import './App.css';
import React from 'react';
import Typed from 'typed.js';
import Card from './components/Card';
import Video from './components/Video';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Discover <strong>all of our services.</strong>',"Discover <strong>new experiencies.</strong>", 
            "Discover <strong>pure basketball.</strong>", "Discover <strong>yourself.</strong>"],
            typeSpeed: 25,
            loop: true,
            backSpeed: 0,
            smartBackspace: true
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className="App">
            <Header />
            <Video />
            <hr />
            <div className="others">
                <span id='intro' ref={el} />
            </div>
            <div className="container">

                <Card title="ABOUT" text="Get all the information about the tournament;
                the teams, basketball rules, events location, players ranking and much more."/>
                <Card title="TICKETS" text="Get your tickets now and enjoy with the 
                street basketball family watching the best matches and 
                having fun with a lot of activities."/>
                <Card title="GALLERY" text="Discover the winners from the latest editions and the
                chronicles of every final and semifinal, It's like you were there."/>
                <Card title="CONTACT" text="Feel free to ask any questions or problems, 
                or simply provide an opinion to our support, that will help us improve." />
            </div>
            <Footer />
        </div>

    )
}

export default App