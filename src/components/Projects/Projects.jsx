import "../../styles/Section.scss"
import "./Projects.scss";


const Projects = (props) => {
    return(
        <section id="portfolio" class="section section--secondaryBackground">
        <h1 class="section__sectionHeader">Portfolio</h1>
        <div class="section__portfolioContainer">
          <article class="section__projectCard">
            <h2>Project 1</h2>
            <img class="section__projectImage" alt="Project 1 image" src="images/placeholder.png" />
            <p>Skills Used: lorem</p>
            <p>Description Placeholder Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas repellendus quia quasi, corrupti rem dolorum odio!</p>
          </article>
          <article class="section__projectCard">
            <h2>Project 2</h2>
            <img class="section__projectImage" alt="Project 1 image"  src="images/placeholder.png" />
            <p>Skills Used: lorem</p>
            <p>Description Placeholder Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas repellendus quia quasi, corrupti rem dolorum odio!</p>
          </article>
          <article class="section__projectCard">
            <h2>Project 3</h2>
            <img class="section__projectImage" alt="Project 1 image"  src="images/placeholder.png" />
            <p>Skills Used: lorem</p>
            <p>Description Placeholder Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas repellendus quia quasi, corrupti rem dolorum odio!</p>
          </article>
        </div>
      </section>
    )
}
export default Projects;