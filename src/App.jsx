import './App.css';
import React from 'react';
import Typed from 'typed.js';
import Card from './components/Card';
import Video from './components/Video';
import Header from './components/Header';
import Footer from './components/Footer';
import cards from './data/cards';


function App() {
    //TypedJs Section
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


    //Render from arrJs
    const cardsList = cards.map((v,index) => {
        return <Card key={index} title={v.sectName} text={v.desc} img={v.img} />;
    });


    return (
        <div className="App">
            <Header />
            <Video />
            <hr />
            <div className="others">
                <span id='intro' ref={el} />
            </div>
            <div className="container">
                {cardsList}
            </div>
            <Footer />
        </div>

    )
}

export default App;