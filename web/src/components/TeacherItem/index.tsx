import React from "react";

import whastappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png"
          alt="Imagem usuário"
        />
        <div>
          <strong>Rodolfo Leal</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        maiores ipsam facere nostrum ab similique dolor commodi saepe, illo,
        exercitationem perspiciatis velit consequatur deleniti officia ea
        adipisci esse provident perferendis libero ipsum est dolores magni
        tempora! Cum atque commodi at!
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="Ícone WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
