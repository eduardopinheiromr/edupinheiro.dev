import { useState } from "react";
import { submitContact } from "@services/submitContact";
import Link from "next/link";

import * as S from "./styled";
import ContactModal from "./ContactModal";

const initialState = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [modal, toggleModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await submitContact(formData);
    setLoading(false);
    if (response.status === 200) {
      toggleModal(!modal);
      setFormData(initialState);
    }
  };

  return (
    <>
      <S.Root>
        <a className="anchor" id="contato"></a>
        <div className="container min-height-80">
          <h2 className="section-title">Contato</h2>
          <div className="row my-5 text-md-start text-center">
            <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-around px-5">
              <p>
                Gostou do que viu? Disponibilizo todos os meus contatos por
                aqui, mas se preferir que eu te procure, sem problemas :)
              </p>
              <p>
                A solução que utilizei para receber emails de contato foi
                desenvolvida por mim. Caso tenha curiosidade, você pode acessar
                o repositório com o projeto{" "}
                <Link
                  href="https://github.com/eduardopinheiromr/nextmailer"
                  passHref
                >
                  <a target="_blank" className="link-primary">
                    Nextmailer
                  </a>
                </Link>
                .
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="apikey"
                  defaultValue="c83e68d3-8fee-495c-bc7a-526678bf0be7"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />
                <div className="contact-form my-5">
                  <input
                    name="nome"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                    type="text"
                    placeholder="Seu nome aqui..."
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    type="text"
                    placeholder="Seu melhor email aqui..."
                  />
                  <div className="d-flex flex-column">
                    <label htmlFor="assunto">
                      Quer adiantar o assunto?(opcional)
                    </label>
                    <select
                      name="assunto"
                      value={formData.subject}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          subject: event.target.value,
                        })
                      }
                      id="assunto"
                    >
                      <option value="nao-adiantou-assunto">
                        Clique aqui para selecionar um assunto...
                      </option>
                      <option value="website-do-zero">
                        Criação de website do zero
                      </option>
                      <option value="manutencao-website">
                        Manutenção de website
                      </option>
                      <option value="criacao-api">Criação de API REST</option>
                      <option value="criacao-webapp">
                        Criação de WebApp completo(fullstack)
                      </option>
                      <option value="outros-assuntos">Outros assuntos</option>
                    </select>
                    <label htmlFor="mensagem">
                      Sua mensagem também é opcional :)
                    </label>
                    <input
                      id="mensagem"
                      name="mensagem"
                      value={formData.message}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          message: event.target.value,
                        })
                      }
                      type="text"
                      placeholder="Sua mensagem..."
                    />
                    <button
                      className="submit btn btn-dark"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Enviar"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </S.Root>
      <ContactModal show={modal} onClose={() => toggleModal(!modal)} />
    </>
  );
}
