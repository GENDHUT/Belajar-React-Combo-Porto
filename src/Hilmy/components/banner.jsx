import React from "react"
import { TypeAnimation } from "react-type-animation"
export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am Hilmy Abiyyu Ammar
          <div>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                3000,
                "Gaming",
                3000,
                "Gym",
                3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5">
          Saya adalah siswa dari SMK Angkasa 1 Jakarta,saat ini saya sudah kelas
          11.Saya masuk kejurusan Rekayasa Perangkat Lunak,alasan saya masuk
          jurusan ini karena saya sangat suka dalam dunia Programming
        </div>
      </div>
    </div>
  )
}
