import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './EventView.css'
import InfoCards from '../components/InfoCards'

function EventView() {
  return (
    <div>
      <Header />
      <main>
        <div className="intro-img-container">
          <h1>ABOUT THE TOURNAMENT</h1>
          <div className="intro-img">
            <img src="https://cdn.pixabay.com/photo/2022/02/21/17/17/basketball-7027242_1280.jpg" alt="img_intro" />
          </div>
        </div>

        <div className="text-intro">
          <h1>WELCOME TO THE 3X3 INTERN!</h1>
          <p>Tournament information section</p>
        </div>

        <div className='main-section'>
          <InfoCards title="From players to fans, all!"
            desc="3x3 Intern is an organization that manages basketball events, but these are bit special, 
            there's three players versus three players from different teams, matches have limited time."
            img="https://cdn.pixabay.com/photo/2013/07/25/12/04/basketball-167035_1280.jpg" />

          <InfoCards title="More people, more fun"
            desc="But we do not only provide basketball, our second specialization is the entertaiment.
            Both spectators and players will be able to enjoy live DJs, raffles, mini-games and much more."
            img="https://cdn.pixabay.com/photo/2019/05/18/21/15/hands-4212584_1280.jpg" />

          <InfoCards title="Connect from anywhere"
            desc="With our live stream professional system, anyone can access to a specific match in real time 
            using his device with network access. Or watch a played match in differed from the platform."
            img="https://cdn.pixabay.com/photo/2017/07/31/11/23/people-2557410_1280.jpg" />
        </div>

        <div className="faqs">
          <h1>FAQS ¿?</h1>
          <details className="faq-item">
            <summary>What services I can access with the general ticket?</summary>
            <p>You can access to all the available services, the ticket membership only affect on the seats for watch the matches.</p>
          </details>

          <details className="faq-item">
            <summary>I already have my ticket, what's next?</summary>
            <p>Once you have your ticket, present it in the main entrance for validation.</p>
          </details>

          <details className="faq-item">
            <summary>I still need my ticket inside the area?</summary>
            <p>In the ticket validation process, you will get a bracelet to confirm your access in the area.</p>
          </details>

          <details className="faq-item">
            <summary>I lost or got robbed my tickets, what can I do?</summary>
            <p>You need to provide the physical invoice or digital (by mail) to our contact center, and you will get another ticket as soon as possible.</p>
          </details>

          <details className="faq-item">
            <summary>What payment methods are accepted?</summary>
            <p>We are working on implementing more payment methods, but the current ones are: PayPal, credit card, Paysafecard, or in cash.</p>
          </details>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default EventView