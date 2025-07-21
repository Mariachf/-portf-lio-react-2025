import styled from '../Button/Button.module.scss';
import Styles from './Contact.module.scss';
import { FaSquareGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { AiFillDiscord } from "react-icons/ai";

export default function Contact() {
    const Contatos = [ 
        {
            id:1,
            nome:"E-mail",
            link:"https://mail.google.com/mail/?view=cm&fs=1&to=mariaeduardachagasfonseca@gmail.com&su=Assunto%20do%20Email&body=Corpo%20da%20mensagem",
            icone: <CgMail size={77}  color="#FF6D00"/>,
        },

        {
            id:2,
            nome:"Linkedin",
            link:"https://www.linkedin.com/in/eduarda-fonseca-109862173/",
            icone: <CiLinkedin size={77}  color="#FF6D00"/>,
        },

         {
            id:3,
            nome:"GitHub",
            link:"https://github.com/Mariachf",
            icone: <FaSquareGithub size={77}  color="#FF6D00"/>,
        },

        {
            id:4,
            nome:"Discord",
            link:"https://discord.com/channels/@me",
            icone: <AiFillDiscord size={77}  color="#FF6D00"/>,
        },
    ]
    return (
        <section id="Contact" className={Styles.contact}>
            <h2>Contato<span>.</span></h2>
            <h3>Me adicione nas redes e Fale comigo<span>.</span></h3>
        <div className={Styles.contato}>
            {Contatos.map((contato) => (
                <div  className={styled.buttonRedes}>
                    <a 
                    key={contato.id}
                    href={contato.link} 
                    target="_blank" 
                    rel="noopener noreferrer">

                         {contato.icone}
                         <p>{contato.nome}</p>
                    </a>
                     
                </div>
            ))}
        </div>
        </section>
    )
}