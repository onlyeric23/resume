import React from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

import "./styles.scss"

const Skill = ({ skills }) => {
  return (
    <div className="block skill-block">
      <h2>Skill</h2>
      <hr />
      <div className="row">
        {skills.map(skill => (
          <SkillItem name={skill.name} score={skill.score} key={skill.name} />
        ))}
      </div>
    </div>
  )
}

const repeat = (num, Comp) => {
  return (
    <>
      {Array(num)
        .fill(0)
        .map((_, index) => (
          <Comp key={index} />
        ))}
    </>
  )
}

const SkillItem = ({ name, score }) => {
  const numFull = Math.trunc(score)
  const numHalf = score * 10 - numFull * 10 ? 1 : 0
  const numEmpty = 5 - numFull - numHalf
  return (
    <div className="skill-item">
      <div className="name">{name}</div>
      <div className="score">
        {repeat(numFull, TiStarFullOutline)}
        {repeat(numHalf, TiStarHalfOutline)}
        {repeat(numEmpty, TiStarOutline)}
      </div>
    </div>
  )
}

export default Skill
