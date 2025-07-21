import styles from './Skills.module.scss';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";


export default function Skills() {
    return (
        <section id="Skills" className={styles.Skills}>
            <h2> Minhas Skills<span>.</span></h2>

             <div className={styles.skillsContainer}>
                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="HTML5" >
                        <FaHtml5 size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="CSS3">
                        <FaCss3Alt size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="JavaScript">
                        <FaJs size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
    
                </div>   

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="Typescript">
                        <SiTypescript size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="ReactJS">    
                        <RiReactjsFill size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="GitHub">
                        <FaGithubSquare size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="Git">
                        <FaGitAlt size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="Figma">
                        <IoLogoFigma size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>

                <div className={styles.skillItem}>
                    <a data-tooltip-id="meu-tooltip" data-tooltip-content="NodeJS">
                        < FaNodeJs  size={67} color="#FF6D00"/>
                    </a>
                    <Tooltip id="meu-tooltip" place="bottom" />
                </div>
            </div>
        </section>
    );
}