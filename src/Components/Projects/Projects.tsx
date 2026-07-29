import styles from "./Projects.module.scss";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { LuFigma } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";

import Halloween from "../../assets/wallowen.png";
import CV from "../../assets/CV.png";
import Jazz from "../../assets/jazz.png";
import Iphone from "../../assets/iphone.png";  


export default function Projetos() {



const cards: FlipCardProps[] = [
  {
    img: Halloween ,
    title: "Halloween",
    sub: "React, Vite, Sass/SCSS",
    desc: "Desafio de Halloween da comunidade Vai na Web...",
    Github: "https://github.com/Mariachf/Halloween-",
    figma: "https://www.figma.com/design/65ZsiKa1v6k7uUukIy89H7/halloween?node-id=0-1&p=f&t=L2dc6XT4Ynuzp4pJ-0",
    site: "https://mariachf.github.io/Halloween-/"
  },
  {
    img: CV,
    title: "Currículo",
    sub: "React, Vite, Sass/SCSS,TypeScript",
    desc: "currículo online, com objetivo apresentar, de forma clara, as experiências, formação acadêmica e o portfólio.",
    Github: "https://github.com/Mariachf/cv",
    figma: "##",
    site: "https://mariachf.github.io/cv/"
  },

   {
    img: Jazz,
    title: "Projeto Jazz",
    sub: "React, Styled-components",
    desc: "Projeto Vai na web, de um site de escola de Jazz.",
    Github: "https://github.com/Mariachf/projeto_sax",
    figma: "https://www.figma.com/design/76GJ4uK7PyKeAo6dcpVyjA/Tom-s-Jazz-School?node-id=0-1&p=f&t=ZxDYIEDE0b7ySwgU-0",
    site: "https://pjk4sh.csb.app/"
  },

   {
    img: Iphone,
    title: "Page iPhone",
    sub: "HTML, CSS e JavaScript",
    desc: "Projeto de uma página de iPhone, com o objetivo de praticar HTML, CSS e JavaScript.",
    Github: "https://github.com/Mariachf/pageiPhone",
    figma: "https://www.figma.com/design/s5DPEqnY6pCjHGt1uQp1BZ/188238224-1c73152f-efc6-486e-9cd9-f377567fcb65?node-id=0-1&p=f&t=YlcvJT7jCLlzknmK-0",
    site: "https://mariachf.github.io/pageiPhone/"
  },
  
];

  return(
    <section className={styles.projeto} id="Projects">
    <h2>Projetos<span>.</span></h2>

     <section className={styles.cardfantasia}>
                {cards.map((item, i) => (
                    <FlipCard key={i} {...item} />
                ))}

                
                 
            </section>

    </section>
  );
}

interface FlipCardProps {
  img: string;
  title: string;
  sub: string;
  desc: string;
  Github: string;
  figma:string;
  site:string;
}

function FlipCard({ img, title, sub, desc, Github, figma, site}: FlipCardProps) {
  const [flip, setFlip] = useState(false);

  return (

   
    <div
      className={styles.flipcard}
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      <div className={`${styles.flipcardinner} ${flip ? styles.flipped : ''}`}>
        {/* Frente */}
        <div className={ styles.flipcardback}>
          
          <img src={img} alt={title} />
          
          <div className={styles.fig}>
          <a href={Github} target="_blank" rel="noopener noreferrer">
            <FiGithub size={20} />
          </a>
           <a href={site} target="_blank" rel="noopener noreferrer">
           <FaLink size={20} />
          </a>
          <a href={figma} target="_blank" rel="noopener noreferrer">
           <LuFigma size={20} />
          </a>
         
          </div>
        </div>
        {/* Verso */}
        <div className={styles.flipcardfront}>
          <h4>{title}</h4>
          <h5 className={styles.sub}>{sub}</h5>
          <p>{desc}</p>
          
        </div>

        
      </div>

     
    </div>
    
  );
}
