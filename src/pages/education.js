import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/header"
import Seo from "../components/seo"

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Example University",
    year: "2020",
    details: "Graduated with honors, specialized in software development.",
  },
  {
    degree: "Master of Science in Data Science",
    institution: "Sample Institute",
    year: "2022",
    details: "Research focused on machine learning and big data.",
  },
]

const Education = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">My Education</h1>

          <div className="grid gap-6 mb-10 md:grid-cols-2">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{edu.degree}</h2>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-gray-500">Year: {edu.year}</p>
                <p className="text-gray-600 mt-4">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Education | Thapanan Kulab" />

export default Education
