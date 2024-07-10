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
    github: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNs7_TqH_iYq6zlZnQcT3XRUjK1cLRT58RQ&s",
    link: "https://pos-management-cafe.netlify.app/sale/pos",
  },
  {
    title: "Time Attendance Delta Company",
    tools: "MongoDB, React, NodeJS,",
    details:
      "Time entry and exit records: Time records record the time employees come to work and leave the workplace.",
    github: "https://github.com/ThapananKulab/work-io-demo.git",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4gVxYgRiRzBCfNkW-JWcz6YxkTrlNao6iQ&s",
    link: "https://ambitious-desert-0548dee10.5.azurestaticapps.net/",
  },
  {
    title: "Master of Science in Data Science",
    tools: "2020-2022",
    details: "Research focused on machine learning and big data.",
  },
  {
    title: "Master of Science in Data Science",
    tools: "2020-2022",
    details: "Research focused on machine learning and big data.",
  },
]

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10">My Project</h1>

            <div className="grid gap-6 mb-10 md:grid-cols-2">
              {projectData.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-500">Tools: {project.tools}</p>
                  <p className="text-gray-600 mt-4">{project.details}</p>
                  <div className="flex justify-center items-center">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="full"
                      style={{
                        maxWidth: "255px",
                        maxHeight: "255px",
                      }}
                    />
                  </div>
                  <div className="card-actions justify-center">
                    <a href={project.link} target="_blank">
                      <button className="btn btn-outline btn-dark">
                        <FaGithub />
                        Github
                      </button>
                    </a>
                    <a href={project.link} target="_blank">
                      <button className="btn btn-primary">
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
