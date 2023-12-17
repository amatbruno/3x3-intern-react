import React from 'react'
import "./Card.css"

function Card(title="Default name", text="Default text", img="default") {

    return (
            <div className='Card'>
                <img src={img} alt="icon-page" /> {/*ADD PROPS HERE FOR IMG*/}
                <div className="elements">
                    <h2 id='tit'>{title}</h2>
                    <p>{text}</p>
                </div>
                <link to={title}><button>Know More</button></link>
            </div>
    )
}

export default Card