import "./about.css"
import ME from '../../assets/me3D.png'
import {MdMapsHomeWork} from 'react-icons/md'
import {MdCastForEducation} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'

export const About = () => {
  return (
    <section id="about" >
      <h5 className="about_h5">Get TO Know</h5>
      <h2 className="about_h2">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
         <div className="about__me-image">
           <img src={ME} alt="Me 3D" />
           </div>
          </div>

           <div className="about__content">
             <div className="about__cards">
               <article className="about__card">
                 <MdMapsHomeWork className="about__card-icon"/>
                 <h5>Experience</h5>
                 <small>1+ Year</small>
               </article>
               <article className="about__card">
                 <MdCastForEducation className="about__card-icon"/>
                 <h5>Education</h5>
                 <small>Univercity Degree</small>
               </article>
               <article className="about__card">
                 <AiOutlineFolderOpen className="about__card-icon"/>
                 <h5>Projects</h5>
                 <small>7+Completed</small>
               </article>
             </div>
             <p>
              "Aspiring Software Developer with experience in customer service.With good communication and collaboration skills and a passion for finding solutions to obstacles and an interest in technology led 
               my path to web development. Eager to make effective software programs using prior and newly learned skills".
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
           </div>
         </div>
    </section>
  )
}