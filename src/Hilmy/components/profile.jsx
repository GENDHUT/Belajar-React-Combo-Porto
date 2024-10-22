import React from "react"
export default function Profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 overflow-hidden">
        <div className="font-secondary text-center font-bold mb-12">
          <h4 className="text-secondary mb-3">Awesome Skill</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text=[24px]">
            Saya memiliki beberapa skill seperti
            Jquery,Bootstrap,CSS3,HTML5,ReactJS,TailwindCSS
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
            <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden">
              <img src="/images/h.png" alt="" />
            </div>
            <h2 className="text-gradient text-[50px] mt-[20px]">
              Hilmy Abiyyu
            </h2>
          </div>
          <div className="w-full lg:pt-[50px] lg:ml-[50px] ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/1.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Jquery</h4>
                      </div>
                      <p>
                        Js untuk menyederhanakan client-side scripting pada HTML
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/2.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Bootstrap</h4>
                      </div>
                      <p>
                        Kerangka kerja CSS yang sumber terbuka untuk merancang
                        situs web
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/3.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">CSS3</h4>
                      </div>
                      <p>Versi CSS terbaru yang masih dikembangkan oleh W3C.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/4.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">HTML5</h4>
                      </div>
                      <p>Bahasa untuk menampilkan isi dari World Wide Web</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/6.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">ReactJS</h4>
                      </div>
                      <p>Sebuah framework Js dibuat oleh Facebook</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/7.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">TailwindCSS</h4>
                      </div>
                      <p>Framework CSS mempermudah styling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
