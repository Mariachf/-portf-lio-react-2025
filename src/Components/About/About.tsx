import styles from './About.module.scss';
import Perfil from '/Microsoft VS Code/portifolio/src/assets/Woman.png';
import { FaFileDownload } from "react-icons/fa";
import styled from '../Button/Button.module.scss';


export default function About() {
    return(
        <section id="Sobre" className={styles.Sobre}>
            <h2 >Sobre mim<span>.</span></h2>

            <div className={styles.imgText}>
                <img src={Perfil} alt="Mulher lendo" />
                
                <div className={styles.text}>
                    <p>Meu nome é Maria Eduarda Fonseca. Encantei-me pelo mundo da tecnologia quando, no meu primeiro emprego, fui apresentada à montagem de computadores para games. Com os olhos brilhando, decidi trilhar o caminho da programação.</p>
                    <p>Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong>, focando meus estudos no Desenvolvimento Front-end.</p>
                
                    <a href="https://lighthearted-buttercream-2303cf.netlify.app/" target="_blank" rel="noopener">
                        <button className={styled.buttonRedes} ><FaFileDownload color="FF6D00" size={27} /></button>
                    </a>
                </div>
            </div>
        </section>
    );
}