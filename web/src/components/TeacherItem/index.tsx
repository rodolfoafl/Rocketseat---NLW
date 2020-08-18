import React from "react";

import whastappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const { name, avatar, bio, whatsapp, subject, cost, id } = teacher;

  const createNewConnection = () => {
    api.post("connections", {
      user_id: id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora <strong>R$ {cost}</strong>
        </p>
        <a
          target="_blank"
          type="button"
          href={`https://wa.me/${whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whastappIcon} alt="Ícone WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
