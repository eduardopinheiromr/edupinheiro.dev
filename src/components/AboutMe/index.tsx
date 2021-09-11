import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <a className="anchor" id="historia"></a>
      <div className="container min-height-80">
        <h2 className="section-title">Minha história</h2>
        <div className="row text-md-start text-center">
          <div className="col-lg-6 col-md-12 my-5">
            <p>
              Tive muitos interesses profissionais antes de encontrar meu lugar
              na programação. No meu último trabalho antes de conhecer o
              universo digital, empreendia vendendo doces e sanduíches na rua,
              em que eu mesmo criava as receitas, produzia e vendia. Fiz as
              redes sociais e também, criava os posts para divulgar minha marca
              &nbsp;
              <Link href="https://www.instagram.com/savannabr/">
                <a className="link-primary" target="_blank">
                  @savannabr
                </a>
              </Link>
              .
            </p>
            <p>
              Minha veia empreendedora foi forjada na dificuldade, e sou
              eternamente grato a toda minha jornada. Tudo que aprendi,
              contribuiu para meu desenvolvimento. Me apaixonei por resolver
              problemas criando soluções escaláveis.
            </p>
            <p>
              Iniciei meus estudos no curso de Web Development na Resilia
              Educação, minha meta era conseguir meu primeiro emprego na área em
              6 meses, duração do curso.
            </p>
            <p>
              Participei de mais dois cursos em paralelo, Desenvolvimento
              Fullstack no IGTI e Hacker no Gama Academy(Formação Front End), no
              qual ao fim do curso, consegui meu primeiro emprego.
            </p>
            <p>
              Fiz inúmeros cursos na Alura e outros online, como SOLYD
              Treinamentos, etc.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 my-5">
            <p>
              Atualmente empreendo na carreira de TI, trabalhando no lançamento
              da minha Startup de Transformação Digital, em que eu auxilio
              empreendedores a conquistar seu espaço na web, orientado a entrega
              de valor. Conto com um colaborador Designer UX/UI e em breve, com
              a divisão de Marketing Digital.
            </p>
            <p>
              Estou focado em dominar o framework Next Js(que utiliza React)
              para fazer entregas expressas, de alta qualidade e performance,
              100% SEO-friendly, de baixíssimo(ou zero) custo para meus
              clientes, utilizando as tecnologias mais modernas da atualidade.
            </p>
            <p>
              Trabalho como Desenvolvedor na Supporta Shop, onde recebo muitas
              oportunidades de me desafiar a resolver problemas de escopo
              aberto, com autonomia e confiança dos meus colegas.
            </p>
            <p>
              Dou muito valor às soft skills. Acredito muito no potencial
              individual/coletivo quando tomamos consciência de nossa humanidade
              e agimos a favor dela, tornando ambientes profissionais muito mais
              seguros e confortáveis a qualquer pessoa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
