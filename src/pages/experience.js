import * as React from "react"
import Navbar from "../components/header"
import Seo from "../components/seo"

const experienceData = [
  {
    position: "Electricity Generating Authority of Thailand (EGAT)",
    company: "Web Developer (Intern)",
    period: "April 2024 - July 2024",
    image: "https://stacs.io/wp-content/uploads/2022/12/EGAT-1.png",
    details: [
      "Developed web applications using React and Node.js",
      "Collaborated with the team to implement new features and improve existing ones",
    ],
  },
  {
    position: "Biolab Company Limited",
    company: "IT Support (Intern)",
    period: "March 2019 - June 2019",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uXhN6ZXHpNFe0KvxScEVvwhjDRDsBaO-Pw&s",
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
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start"
              >
                <div>
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
                <div className="ml-auto mt-10">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="full"
                    style={{
                      maxWidth: "255px",
                      maxHeight: "255px",
                    }}
                  />
                </div>
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
