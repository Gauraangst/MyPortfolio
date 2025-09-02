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
                    <button>Explore My Work </button>

                    


            </div>
            <div className='aside'>
                <img src={funnyGif1} alt="" className='funnyGif1' />
            </div>
        </div>
    )
    }

    export default Hero