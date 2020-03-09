import React from "react"

import Profile from "../components/Profile"
import Skill from "../components/Skill"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { profile, skills, experiences, education } from "../constants"
import Experience from "../components/Experience"

const IndexPage = () => (
  <Layout>
    <Profile {...profile} />
    <Skill skills={skills} />
    <Experience experiences={experiences} />
    <Experience title="Education" experiences={education} />
  </Layout>
)

export default IndexPage
