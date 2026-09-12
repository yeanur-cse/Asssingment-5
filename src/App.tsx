 import { Suspense } from "react";
 import Banner from "./components/Banner"
 import Nav from "./components/Nav"
 import Technologies from "./components/Technologies/technologies"
 import type { Itechonologies } from "./type/techonologiesType";




 

 const technologiesFetch = async (): Promise <Itechonologies[]>=>{
  const res = await fetch ('/data.json');
   const data = await res.json();
  return data;
}


 function App() {
  
 const technologiesPromise = technologiesFetch();

   return (
     <>
       <Nav></Nav>

      <Banner></Banner>

      <Suspense fallback = {<h2> Loading....</h2>}><Technologies technologiesPromise ={technologiesPromise} /></Suspense>
     </>
   )
 }

 export default App

