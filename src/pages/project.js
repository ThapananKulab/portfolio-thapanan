import * as React from "react"
import Navbar from "../components/header"
import Seo from "../components/seo"
import { FaGithub } from "react-icons/fa"
import { GrView } from "react-icons/gr"

const projectData = [
  {
    title: "Coffee Shop Raw Material Management System",
    tools: "MongoDB, React, Express.js, NodeJS,",
    details: "Graduated with honors, specialized in software development.",
    github:
      "https://github.com/ThapananKulab/Cafe-Management-POS-BOM-Inventory.git",
    img: "https://res.cloudinary.com/dr3ehki5q/image/upload/v1720666808/portfolio/wm7cqsnmeqqkowa1z42y.png",
    link: "https://pos-management-cafe.netlify.app/sale/pos",
  },
  {
    title: "Time Attendance Company",
    tools: "MongoDB, React, NodeJS,",
    details:
      "Time entry and exit records: Time records record the time employees come to work and leave the workplace.",
    github: "https://github.com/ThapananKulab/work-io-demo.git",
    img: "https://res.cloudinary.com/dr3ehki5q/image/upload/v1720667248/portfolio/rnaoj2csde0ifxvqzf1p.png",
    link: "https://ambitious-desert-0548dee10.5.azurestaticapps.net",
  },
  {
    title: "Search Engine Movie With OMDB API",
    tools: "NextJS, Mantine",
    details: "Using Search Movie By OMDB API",
    github: "https://github.com/ThapananKulab/search-engine-movie.git",
    img: "https://res.cloudinary.com/dr3ehki5q/image/upload/v1720668326/portfolio/dgahbuwfw21zyu0rpidq.png",
    link: "https://search-engine-movie.vercel.app",
  },
  {
    title: "App Quiz Sek Loso",
    tools: "NextJS, Mantine",
    details: "Using Search Movie By OMDB API",
    github: "https://github.com/ThapananKulab/SekLoso-Quiz.git",
    img: "https://res.cloudinary.com/dr3ehki5q/image/upload/v1720668463/portfolio/pqp3ugwg2bo7nm6tr8ij.png",
    link: "https://sekloso-quiz-song.netlify.app",
  },
]

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">My Project</h1>

          <div className="grid gap-6 mb-10 md:grid-cols-2">
            {projectData.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-500">Tools: {project.tools}</p>
                <p className="text-gray-600 mt-4">{project.details}</p>
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="object-fill h-48 w-170"
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <a href={project.github} target="_blank">
                    <button className="btn btn-outline btn-dark">
                      <FaGithub />
                      Github
                    </button>
                  </a>
                  <a href={project.link} target="_blank">
                    <button className=" btn btn-primary">
                      <GrView />
                      View
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="containter"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  )
}

export const Head = () => <Seo title="Project | Thapanan Kulab" />

export default ProjectPage
