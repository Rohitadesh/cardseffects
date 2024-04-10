import { useState } from "react"
import baseball from '../../public/baseball.png'
import batname from '../../public/batname.png'
import basketball from '../../public/basketball.png'
import football from '../../public/football.png'
import redball from '../../public/redball.png'
import tball from '../../public/tball.png'
import volleyball from '../../public/volleyball.png'
import whiteball from '../../public/whiteball.png'
import Image from "next/image"
const Userlist= () =>{
   const sportsBall = [whiteball,baseball,redball,tball,volleyball,football,batname,basketball]
    const price=["350","250","400","500","150","300","920","1500"]
    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center ">
            <div className="h-[98%] w-[60%] shadow-inner rounded-md flex flex-col justify-center items-center flex-wrap gap-3 
            sm:max-lg:flex-wrap sm:max-lg:w-[80%]">
                {sportsBall.map((e,index)=>{
                    return(
                        <div key={index} className="h-[47%] glass border border-green-500 w-[20%] rounded-md shadow-md flex flex-col items-center justify-center gap-8
                        sm:max-lg:w-[25%] sm:max-lg:">
                            <Image src={e}  className="w-[40%] h-[25%]"/>
                            <h1 className="text-xl text-white text-center flex gap-2 sm:max-lg:text-md">Price: {price[index]} Rs</h1>
                        </div>
                        
                    )
                })
                }

            </div>
        </div>
    )
}

export default Userlist;