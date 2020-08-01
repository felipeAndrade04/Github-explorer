import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42103489?s=460&u=500a947bee8afd58e4e6641715aef96ffd508cbd&v=4"
            alt="Felipe Andrade"
          />

          <div>
            <strong>felipeAndrade04/Dark-Mode-Whatsapp</strong>
            <p>
              Extensão do Google Chrome que possibilita ativar e desativar tema
              escuro no whatsapp web.
            </p>
          </div>

          <FiChevronRight size={25} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42103489?s=460&u=500a947bee8afd58e4e6641715aef96ffd508cbd&v=4"
            alt="Felipe Andrade"
          />

          <div>
            <strong>felipeAndrade04/Dark-Mode-Whatsapp</strong>
            <p>
              Extensão do Google Chrome que possibilita ativar e desativar tema
              escuro no whatsapp web.
            </p>
          </div>

          <FiChevronRight size={25} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42103489?s=460&u=500a947bee8afd58e4e6641715aef96ffd508cbd&v=4"
            alt="Felipe Andrade"
          />

          <div>
            <strong>felipeAndrade04/Dark-Mode-Whatsapp</strong>
            <p>
              Extensão do Google Chrome que possibilita ativar e desativar tema
              escuro no whatsapp web.
            </p>
          </div>

          <FiChevronRight size={25} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
