import styles from './Header.module.scss';
import PC from '/src/assets/PC.png';
import styled from '../Button/Button.module.scss';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


export default function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.name}>
                <h3>Óla, eu sou</h3>
                <h1>Eduarda Fonseca</h1>
                <h3>Front-end Developer</h3>
                
                <a href="https://www.linkedin.com/in/eduarda-fonseca-109862173/" target="_blank" rel="noopener">
                    <button className={styled.buttonRedes} >
                        <FaLinkedin  color="FF6D00" size={42} />
                    </button>
                </a>

                <a href="https://github.com/Mariachf" target="_blank" rel="noopener">
                    <button className={styled.buttonRedes} >
                        <FaSquareGithub  color="FF6D00" size={42} />
                    </button>
                </a>

            </div>

            <div className={styles.boximg}>
                <img src={PC} alt="" />

            </div>

        </header>
    );
}