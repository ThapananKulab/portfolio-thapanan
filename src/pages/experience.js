import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/header"
import Seo from "../components/seo"

const experienceData = [
  {
    position: "Electricity Generating Authority of Thailand (EGAT)",
    company: "Web Developer (Intern)",
    period: "April 2024 - July 2024",
    details: [
      "Developed web applications using React and Node.js",
      "Collaborated with the team to implement new features and improve existing ones",
    ],
  },
  {
    position: "Biolab Company Limited",
    company: "IT Support (Intern) Biolab Company Limited",
    period: "March 2019 - June 2019",
    details: [
      "Installing computer hardware, software, systems, networks, printers and scanners",
      "Setting up accounts for new users",
    ],
  },
]

const Experience = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">
            My Experience
          </h1>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{exp.position}</h2>
                <p className="text-gray-700 font-semibold">{exp.company}</p>
                <p className="text-gray-500 mb-4">Period: {exp.period}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Experience | Thapanan Kulab" />

export default Experience
