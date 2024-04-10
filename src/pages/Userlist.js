import { useState ,useRef} from "react"
import image1 from '../../public/image1.webp'
import image2 from '../../public/image2.webp'
import image3 from '../../public/image3.webp'
import image4 from '../../public/image4.webp'
import Image from "next/image"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Userlist= () =>{
    // const [id ,setId]= useState(1)
    const containerRef= useRef()
    const data =[image1,image2,image3,image4]

    function next(){
        containerRef.current.scrollLeft += 790;
    }
    function prev(){
        containerRef.current.scrollLeft -= 790;
    }

    // console.log(data.length,id)


    return(
        <div className="h-screen w-screen flex flex-row justify-center items-center ">
            <div className="h-[80%] w-[60%] border border-black flex  justify-center items-center glass ">
                
                <button  className="text-6xl   glass" onClick={(e)=>prev(e)}><FaAngleLeft /></button>
                <div className="flex gap-8   overflow-hidden " ref={containerRef}>

                    {

                        data.map((e,i)=>{

                            return(
                           

                            <Image src={e} alt="asdsa" className="h-[500px] w-[1000px]"  />

                            )
                        })
                    }
                </div>
                 <button  className="text-6xl  glass" onClick={(e)=>next(e)}><FaAngleRight /></button> 
            </div>
                 
          
                  
                
                 

    

                 
                

        </div>
    )
}

export default Userlist;