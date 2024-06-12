import React from "react"
import Navbar from "../components/header"

const Index = () => {
  return (
    <div>
      <Navbar />
      <div
        className="container "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
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
            <div className="chat chat-start ">
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
            src="data:image/webp;base64,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ZW4gQWwtTmFzc3IgYW5kIEFsLUhpbGFsIGF0IEFsIEF3d2FsIFBhcmsgb24gTWF5IDE3LCAyMDI0IGluIFJpeWFkaCwgU2F1ZGkgQXJhYmlhLihQaG90byBieSBZYXNzZXIgQmFraHNoL0dldHR5IEltYWdlcykyMDI0IEdldHR5IEltYWdlcywBAAABAAAALAEAAAEAAABYTVAgVwYAAGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMjQgR2V0dHkgSW1hZ2VzIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIyMTUyODQzMzg3IiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZXVsYT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgcGx1czpEYXRhTWluaW5nPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3ZvY2FiL0RNSS1QUk9ISUJJVEVELUVYQ0VQVFNFQVJDSEVOR0lORUlOREVYSU5HIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+WWFzc2VyIEJha2hzaDwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+UklZQURILCBTQVVESSBBUkFCSUEgLSBNQVkgMTc6IENyaXN0aWFubyBSb25hbGRvIG9mIEFsIE5hc3NyIGxvb2tzIG9uIHByaW9yIHRoZSBTYXVkaSBQcm8gTGVhZ3VlIG1hdGNoIGJldHdlZW4gQWwtTmFzc3IgYW5kIEFsLUhpbGFsIGF0IEFsIEF3d2FsIFBhcmsgb24gTWF5IDE3LCAyMDI0IGluIFJpeWFkaCwgU2F1ZGkgQXJhYmlhLihQaG90byBieSBZYXNzZXIgQmFraHNoL0dldHR5IEltYWdlcyk8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8yMTUyODQzMzg3P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+CgA="
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Cristiano Ronaldo</h1>
            <p className="py-6">
              "CR7" redirects here. For other uses, see Cristiano Ronaldo
              (disambiguation) and CR7 (disambiguation). In this Portuguese
              name, the first or maternal family name is dos Santos and the
              second or paternal family name is Aveiro.
            </p>
            <button
              className="btn btn-primary "
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
