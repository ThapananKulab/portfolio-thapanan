import * as React from "react"

import Navbar from "../components/header"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="containter"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card card-compact w-96 bg-base-100 shadow-xl mr-5 ml-5">
          <figure>
            <img src="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">App Quiz Sek Loso</h2>
            <p>เพลงพี่เสก</p>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/ThapananKulab/app-quiz-sek-loso"
                target="_blank"
              >
                <button className="btn btn-outline btn-dark">Github</button>
              </a>
              <a
                href="https://main--sekloso-quiz-song.netlify.app/"
                target="_blank"
              >
                <button className="btn btn-primary">View</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mr-5">
          <figure>
            <img src="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Cafe</h2>
            <p>ใช้ React</p>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/ThapananKulab/portfolio-thapanan-gatsby"
                target="_blank"
              >
                <button className="btn btn-outline btn-dark">Github</button>
              </a>
              <a href="https://pos-management-cafe.netlify.app" target="_blank">
                <button className="btn btn-primary">View</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Expeirence | Thapanan Kulab" />

export default NotFoundPage
