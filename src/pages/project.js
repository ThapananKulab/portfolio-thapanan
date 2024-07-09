import * as React from "react"
import Navbar from "../components/header"
import Seo from "../components/seo"

const projectData = [
  {
    degree: "Cafe Management System",
    institution: "Example University",
    year: "2022-2024",
    details: "Graduated with honors, specialized in software development.",
  },
  {
    degree: "Master of Science in Data Science",
    institution: "Sample Institute",
    year: "MongoDB, React, NodeJS,",
    details: "Research focused on machine learning and big data.",
  },
  {
    degree: "Master of Science in Data Science",
    institution: "Sample Institute",
    year: "2020-2022",
    details: "Research focused on machine learning and big data.",
  },
  {
    degree: "Master of Science in Data Science",
    institution: "Sample Institute",
    year: "2020-2022",
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
                  <h2 className="text-2xl font-bold mb-2">{project.degree}</h2>
                  {/* <p className="text-gray-700">{project.institution}</p> */}
                  <p className="text-gray-500">Tools: {project.year}</p>
                  <p className="text-gray-600 mt-4">{project.details}</p>
                  <div className="card-actions justify-center">
                    <a
                      href="https://github.com/ThapananKulab/app-quiz-sek-loso"
                      target="_blank"
                    >
                      <button className="btn btn-outline btn-dark">
                        Github
                      </button>
                    </a>
                    <a
                      href="https://main--sekloso-quiz-song.netlify.app/"
                      target="_blank"
                    >
                      <button className="btn btn-primary">View</button>
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
