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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <div className="overflow-x-auto mb-5">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>ชื่อ</th>
                    <th>อาชีพ</th>
                    <th>สีที่ชอบ</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="data:image/webp;base64,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"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="data:image/webp;base64,UklGRpoFAABXRUJQVlA4II4FAAAQIgCdASrhAIIAPoFAnEolI6Kyo9MJOlAQCWkHH0l4N+A3+4OajDiEZ80qJ9eHSHhpRM20CSOotz9Lr190PDm/XmQU/T+jNKcho4FETlhtD45yl1Yu3v8FRWpJ63wlmBhsnwQixdSRqbAOGA29TjnK+lUn+ny+tAwT3vl7LVQLHu5qfMgLI9MkqBeuMVKMiB9QiYObomhDlXepSCvCmWG6073keG/vb0LTf6GDwoklr3WvePfWfY229LhDZbLqVw5+SCOisVUnTBM7At3XDbMmnmQ/3FGFF1IpEnzRXLC2LwPfg6r7ZdOIQZwKlVJy61GOt+Xy6gpjlVS5/85DMLAEQ8CBVkzY5oTMAM5AE4MmOGTcAnatPbfNmAD+96I6XSInTai1NqINbIo/dLZlksyilwcORkx0m5+n/PP4fLgLrmbdkwkgWfP3tZPsZF6TRb08ZNK7Szj1/o/jN7bgPRcwVfK7/8+j7vukiGGP+ezlD+gHCVIKMm1rJ+7LvmLPhJ05v0vBJAtdBK6/504RswIOXgw03OiRYhHMvKXyKKP5qEaLuVE5P0Kwg2lVEH+r+dl9ywVhsKATVXUwt6LFTWrUXRrDM4cVnQVWnOFWP4wnLIAdpK0sHI9c8kbqTXv7ws2FBoJ0wsA9MOwNmxqdzSWtaZjktwKvmgttS4Cp0yVRoKGm83yt+3W/DaVSPHkQCQSYP7OPe0RXaudd4lH0ONA00wjT85CA7sTi4XrWMfNliuNOzGYu2pTp1dYSVBbZqCPKeMLZh0KyXn3MDJMwuCD5axzlL98QJ9f2oB1xQeoLxKanL5cqV6GBMuOIp1NjpO+XFjEdmBIJ4rFLYLX0URST7cqZVepe+J/A6juMZL2apILPY4YBGqU+4c3baEezWS59pKeBBhFnYVg6iI7ZR64YZ8ZskcXDjZXtL85cB6n0v5e/Dxmdckpc8GPhwAEH0EDQOFzHaFmYn4oKDQsksNUzQ7/hvGI3OfmdpRX0s4NkSkFtwUAUNrnBXke6lIZkGeWwua25ja+sN3+Hc9g7TAFzm7YWHM0d5NYXFOzwZYm0y9ln0aSjXpjtqazmotu+rdNKRRP+nVaROmSlIdB3nxntnjietKeOwqEunAmWsFISyguiMPhkE0Os/WQAKCtfq6ls3hdGUD8UErGIdkGBZXVfXK02R5n8NxZP5DlfkiSO+qrTvPu9wqerCBwaW31Zeczh5WzY0O8bLFVEKIZs/RlCv7RECBj40mWkpSGOeLK7ijOkUVSuWuHIL564eRZYhT6sVd9R5YKrnJzHQOEu4ZVlM09WKEgX6sxTErtdvYMgU5lLe0OR+oFK6bQGNjTpsuLtXh64Fq/Gp+HtsY20cPTH30cIM47JrHdL/b26yCZL7TfyjS5Er4ZD3urPCDRvwKK2zT++TiZmo2OlIBEZdUfG8ECf3LiPwmLd5tqooaH/EabZeK1ZdC4xKIYsWqYSue2bzRI6n36bTLgJ0TyAgSVtOcL/agdGMh6kUj5J6gv5xOKnGg4TuUxR9fL4aW4SOpYHu/GBrlcgHj/AC8nej8r54CsQqj0ck1dus0vRIeqy9dlbnxN9vsx2Lp/8sgDtzg835zHlUYIWXlmcBthlZgoD8udy5jJhsaIGjHJhhrR2L4HCipgoB03r5lbFWG+ibll1oJXNbue2Rqzf62L80hJ5s+9f1E4ivVJmqNXPQo1wfniChYX7GF+SqKtBdsfGyRwvkoy03lFwRC8/UyslAc2CI55FxdEhsIKIidWxONrWTDmk/r3qUr0tynPjZa408wUowJzIAy7g4hLHNmHVeJAizpqDjqmAeuNkn5bC+obRc7iMJojAv+Q54uF2KofKhWgd3FzGjftHX/breOlvxahnK+qzRQdwJ2aAHFIgQAA="
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <div className="hero min-h-screen bg-base-200">
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

            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              เรียกดูเพิ่มเติม
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const Head = () => <Seo title="Home | Thapanan Kulab" />

export default Index
