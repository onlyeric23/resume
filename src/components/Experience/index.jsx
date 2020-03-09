import React from "react"

import "./styles.scss"

const Experience = ({ title, experiences }) => {
  return (
    <div className="block experience-block">
      <h2>{title || "Experience"}</h2>
      <hr />
      {experiences.map(exp => (
        <ExperienceItem {...exp} key={exp.name} />
      ))}
    </div>
  )
}

const ExperienceItem = ({ name, location, desc, subDesc }) => {
  return (
    <div className="experience-item">
      <div className="bullet" />
      <h3 className="name">{name}</h3>
      <div className="location">{location}</div>
      <div className="desc">{desc}</div>
      <div className="sub-desc">{subDesc}</div>
    </div>
  )
}

export default Experience
