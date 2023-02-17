import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/Personal.png"
import { HeaderSocials } from "./HeaderSocials"


export const Header = () => {
  return (
    <header>
      
          <div className="container">
              <div className="header_list-names">
                   <h1>Andrei 
                     <span className="header_list-names-extra">Axinoi</span>
                       </h1>
                     <h3>Fullstack Developer</h3> 
                    <div className="header_list-cta">
                      <CTA />
                      </div>
               </div>
              <div className="header_list-image">
                   <img src={ME} alt="me" />
              </div> 
          </div>
          <div className="header_socials-container">
                <HeaderSocials />
          </div>
          <a  className="header-socials-scroll" href="#" target="_blank">ScrollDown</a>
    
   </header>
  )
}