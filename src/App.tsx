
import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Tech from "./components/technologies/Tech";
import type { Etech } from "./types/techType";
// import './App.css'

const techFetch = async ():Promise<Etech[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}



function App() {
 
  const techPromise = techFetch();
  return (
    <>
       
   <Nav />
      <Banner /> 
      <Suspense fallback={<h2>Loading......</h2>}>
      <Tech techPromise={techPromise} />
        
     </Suspense>
      
    </>
  )
}

export default App
