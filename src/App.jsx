import './App.css';
import Card from './components/Card';
import Video from './components/Video';
import Header from './components/Header';



function App() {
    


    return (
        <div className="App">

            <Header />
            <Video />

            <hr />
            <div className="container">
                <Card title="ABOUT" text="Take a look to our mission with this competition and
                also spectators need to consider follow some rules and policies to create a 
                respectfull environment."/>
                <Card title="TICKETS" text="Get your tickets now and connect with the 
                street basketball family watching the best matches, meeting people and 
                having fun with a lot of activities!"/>
                <Card title="GALLERY" text="See the latest winners from older editions and the
                chronicles of every final and semifinal"/>
                <Card title="" text="" />
            </div>

        </div>
    )
}

export default App