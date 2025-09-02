    import React from 'react'
    import "../../style.css"
    import HeroTyped from '../Typed/HeroTyped'
    import funnyGif1 from '../../assets/giphy.gif'
    const Hero = () => {
    return (
        <div className='parallax'>
            <div className='contents'>
                <h1>Hey, This is Gauraang Thakkar</h1>
                    <HeroTyped />
                    <br />
                    <h2>Explore My Work </h2>

                    <h2>Check out my YouTube Channel</h2>
                    {/* <img src="/ytlogo.png" alt="yt" /> */}


            </div>
            <div className='aside'>
                <img src={funnyGif1} alt="" className='funnyGif1' />
            </div>
        </div>
    )
    }

    export default Hero