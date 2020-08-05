import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem(){

  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/58889400?s=400&u=68963b922b8152428624ffd8ffd461193f72582d&v=4" alt="Emerson Gomes"/>

            <div>
              <strong>Emerson Gomes</strong>
              <span>Biologia</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/> <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através experiências. 
          </p>

          <footer>

            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button"><img src={whatsappIcon} alt="Entrar em contato"/>
            Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;