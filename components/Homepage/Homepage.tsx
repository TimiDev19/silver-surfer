import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Video from './sections/Video'
import Chart from './sections/Chart'

const Homepage = () => {
    return (
        <div className=' h-[100vh] w-[100vw] overflow-y-scroll scroll-smooth'>
            <Hero />
            <About />
            <Chart />
            <Video />
        </div>
    )
}

export default Homepage