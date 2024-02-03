import Image from "next/image";
import { Inter } from "next/font/google";

import { useState } from "react";
import Userlist from "./Userlist";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
   <Userlist  />
  );
}
