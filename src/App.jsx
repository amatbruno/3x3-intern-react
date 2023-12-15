import './App.css';
import Card from './components/Card';
import Video from './components/Video';
import Header from './components/Header';


function App() {


    return (
        <div className="App">
            <Header />
            <Video />
            <div className="container">
                <hr />
                <Card title="ABOUT" text="Get all the information about the tournament;
                the teams, basketball rules, events location, players ranking and much more!"/>
                <Card title="TICKETS" text="Get your tickets now and enjoy with the 
                street basketball family watching the best matches and 
                having fun with a lot of activities!"/>
                <Card title="GALLERY" text="Discover the winners from the latest editions and the
                chronicles of every final and semifinal, It's like you were there!"/>
                <Card title="CONTACT" text="Feel free to ask any questions or problems, 
                or simply provide an opinion to our support, that will help us improve!" />
            </div>
        </div>
    )
}

export default App