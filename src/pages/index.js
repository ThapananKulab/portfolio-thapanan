import React from "react"
import Navbar from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

const Index = () => {
  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Hi !</h1>
              <h1 className="text-5xl font-bold">My name is Thapanan Kulab</h1>
              <p className="py-6">
                "CR7" redirects here. For other uses, see Cristiano Ronaldo
                (disambiguation) and CR7 (disambiguation). In this Portuguese
                name, the first or maternal family name is dos Santos and the
                second or paternal family name is Aveiro.
              </p>
              <div className="card-actions">
                <a href="https://www.google.com" target="_blank">
                  <button className="btn btn-primary">Resume</button>
                </a>
                <a href="https://www.google.com" target="_blank">
                  <button className="btn btn-outline btn-primary">
                    Transcript
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home | Thapanan Kulab" />

export default Index
