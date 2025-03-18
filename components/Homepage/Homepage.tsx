import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Video from './sections/Video'

const Homepage = () => {
    return (
        <div className=' h-screen overflow-y-scroll scroll-smooth'>
            <Hero />
            <About />
            <Video />
        </div>
    )
}

export default Homepage