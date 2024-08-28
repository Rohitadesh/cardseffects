import image1 from "../../public/data.jpeg"
import image2 from "../../public/pindata.jpeg"
import image3  from "../../public/processed.jpeg"

import Image from "next/image"
function card(){


    const cardsData=[{img:image1,text:"India"},{img:image2,text:"London"},{img:image3,text:"Paris"}]
    return(
        <div className="h-screen w-screen border border-black flex flex-col justify-center items-center">
            <div className="h-[23rem] w-[50rem] flex flex-row flex-wrap gap-4 justify-center items-center border border-green-600 rounded-md">
                {
                    cardsData.map((e,i)=>{


                        return(
                            <div key={i} className="group">
                                <div className="relative rounded-md h-[15rem] w-[10rem] border  rounded-md">
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

        </div>
    )
}


export default card