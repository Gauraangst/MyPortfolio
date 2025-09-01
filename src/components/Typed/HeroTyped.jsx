 import { ReactTyped } from 'react-typed'

const HeroTyped = () => {
  return (
    <ReactTyped
      strings={[
        "Hello, I'm a Web Developer!",
        "I love Problem Solving.",
        "Welcome to my portfolio!",
        "Creating videos is my favorite pastime.",
      ]}
      typeSpeed={20} // Typing speed in ms per character
      backSpeed={30} // Backspacing speed in ms per character
      loop // Loop the animation indefinitely
      />
  )
}

export default HeroTyped