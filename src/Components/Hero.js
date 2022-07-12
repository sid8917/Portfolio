import React from 'react'

const Hero = () => {
    const flexbox={
        display:"flex",
    }
  return (
    <section style={flexbox}>
        <img src='' alt='profile pic'/>
        <div>
        <h1>Hi I am Siddharth</h1>
        <p>
            A budding computer engineer and developer, currently pursuing computer science as a pre-final year student at DTU, Delhi, India.
            </p>
        <p>I am good at problem solving and analytical thinking. I participate in coding contests regularly to brush up my core DSA skills, simultaneously working on my development skills to build eye-catching and usable websites.</p>
        </div>
    </section>
  )
}

export default Hero