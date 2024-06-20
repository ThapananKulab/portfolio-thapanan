import React, { useEffect, useState } from "react"
import Navbar from "../components/header"

export default function App() {
  const [data, setData] = useState("")
  const getData = async () => {
    try {
      const resp = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=18cd1938"
      )
      const json = await resp.json()
      setData(json)
    } catch (err) {
      setData([])
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <b>Test Api Cartoon</b>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                รหัสการ์ตูน
              </th>
              <th scope="col" class="px-6 py-3">
                ชื่อ
              </th>
              <th scope="col" class="px-6 py-3">
                รูปภาพ
              </th>
              <th scope="col" class="px-6 py-3">
                ปี
              </th>
              <th scope="col" class="px-6 py-3">
                ผู้แต่ง
              </th>
              <th scope="col" class="px-6 py-3">
                ประเภท
              </th>
              <th scope="col" class="px-6 py-3">
                เวลา
              </th>
              <th scope="col" class="px-6 py-3">
                ตอนที่
              </th>
            </tr>
          </thead>
          {data.length > 0 &&
            data.map((item, index) => (
              <tbody>
                <tr
                  key={index}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th className="px-6 py-4" Align="center">
                    {item.id}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100px", height: "auto" }}
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td className="px-6 py-4">{item.year}</td>
                  <td className="px-6 py-4">{item.creator}</td>
                  <td className="px-6 py-4">
                    {item.genre ? item.genre.join(" , ") : "No genre"}
                  </td>
                  <td className="px-6 py-4">{item.runtime_in_minutes}.00</td>
                  <td className="px-6 py-4">{item.episodes}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  )
}
