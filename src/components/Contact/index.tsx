import { useState } from "react";
import { submitContact } from "services/submitContact";

import * as S from "./styled";

export default function Contact() {
  const initialState = {
    apikey: "c83e68d3-8fee-495c-bc7a-526678bf0be7",
    nome: "",
    assunto: "",
    email: "",
    mensagem: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [toggleModal, setToggleModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await submitContact(formData);

    if (response.status === 200) {
      setToggleModal(true);
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
                aqui, mas caso deseje que eu te procure, sem problemas :)
              </p>
              <p>
                A solução que utilizei para receber emails de contato sem
                backend é gratuita -{" "}
                <a
                  href="https://web3forms.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web3Forms
                </a>
                . De tempos em tempos, busco por soluções e ferramentas que
                visam reduzir custos/encurtar caminhos para problemas comuns
                meus e dos clientes.
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
                    value={formData.nome}
                    onChange={(event) =>
                      setFormData({ ...formData, nome: event.target.value })
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
                      value={formData.assunto}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          assunto: event.target.value,
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
                      value={formData.mensagem}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          mensagem: event.target.value,
                        })
                      }
                      type="text"
                      placeholder="Sua mensagem..."
                    />
                    <input className="submit" type="submit" value="Enviar" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </S.Root>
      <div>
        <div className="modal" tabIndex={-1}>
          <div className="modal-dialog" style={{ background: "#191E29" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p>
                  Muito obrigado pelo contato! Recebi seu email e em breve
                  retornarei :)
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

{
  /* <input type="hidden" name="redirect" defaultValue="https://web3forms.com/success" /> */
}
