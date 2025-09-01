import React from 'react'

function Experience() {
    const expData = [
        
            { year: "2023", title: "Intern - Web Developer", desc: "Worked on front-end React apps." },
            { year: "2024", title: "Freelancer", desc: "Built responsive websites for clients." },
            { year: "2025", title: "Software Engineer", desc: "Working on full-stack applications." }
    ]
  return (
    <section className='exp-section'>
        <h2>Experience</h2>
        <div className='exp-container'>
            {expData.map((exp,i) =>(
                <div className="exp-item"
                     key={i}
                     data-aos="fade-up"
                     data-aos-delay={i * 150}>
                    <div>

                    </div>
                </div>
            ))}

        </div>
      
    </section>
  )
}

export default Experience
