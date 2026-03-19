
//C:\Web-Development\MyNextjs Journey\tripgraphy\components\Home\page.tsx
import Carosol from "../Carosol/Carosol"
import Footsteps from "../Footstap/Footstap"
import Hero from "../Hero/Hero"
import Section from "../Section/Section"

import Topcatagory from "../Topcatagory/Topcatagory";
const Home=()=>{
    return (
        <>
         <section>
        <Hero/>
        <Carosol/>
        <Section/>
        <Footsteps/>
        <Topcatagory/>
        
      </section>
        </>
    )
}
export default Home