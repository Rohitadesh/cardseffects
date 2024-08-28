import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import image1 from "../../public/data.jpeg"
import image2 from "../../public/pindata.jpeg"
import image3  from "../../public/processed.jpeg"
export default function Home() {
    const data=[{img:image1,text:"India"},{img:image2,text:"London"},{img:image3,text:"Paris"}]
    const cardsData=[{img:image1,text:"India"},{img:image2,text:"London"},{img:image3,text:"Paris"}]
  return (
    <main className="min-h-screen overflow-auto w-screen  flex flex-col justify-center items-center bg-[#3d476a]"
    >
      <h1 className="text-center text-2xl text-white p-2">Different Type of hover Effects</h1>
      <div className="h-[23rem] w-[60rem] flex flex-row gap-6 justify-center items-center rounded-md  ">
        {
          data.map((e,i)=>{

            return(
              <div key={i} className="h-[12rem] w-[34rem] group duration-700   bg-[#8d98b8]  shadow-xl  flex justify-center  rounded-md  hover:h-[18rem]  hover:ease-in-out hover:duration-700 ">
                <div>
                  <Image src={e.img}  className="object-cover  relative bottom-12 h-[11rem] w-[13rem] overflow-hidden"      alt="data process" />
                  <text className="text-xl font-semibold relative bottom-12 group-hover:text-black  text-transparent left-20">{e.text}</text>
                 </div>
              </div>
            )
          })
        }
      </div>
      <div className="h-[23rem] w-[60rem] gap-12 flex flex-row flex-wrap gap-4 justify-center items-center  rounded-md">
                {
                    cardsData.map((e,i)=>{


                        return(
                            <div key={i} className="group">
                                <div className="relative rounded-md h-[15rem] w-[10rem]   rounded-md">
                                    <Image  src={e.img} className="object-fill h-full w-full group-hover:opacity-50   ease-in-out
                                 " />
                                {/* <h1 className="absolute ease-in-out duration-700 transition-all text-transparent left-0 right-0 group-hover:bottom-16 group-hover:text-black flex justify-center items-center">{e.text}</h1> */}
                                <h1
                className="absolute bottom-[-20px] left-0 right-0 text-transparent group-hover:text-black group-hover:bottom-24  flex justify-center items-center
                transition-all duration-700 ease-in-out"
              >{e.text}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

    </main>
  );
}
