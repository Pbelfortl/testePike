"use client"
import Image from 'next/image'
import { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { BreakLine } from './components/breakLine';
import { Card } from './components/infoCard';
import { Contact } from './components/contact';
import { Menu } from './components/menu';

export default function Home() {

  const [openCard, setOpenCard] = useState(0)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  return (
    <div className='flex items-center justify-center'>

      <Menu />

      <div className='flex flex-col w-[760px] justify-center items-center'>
        <div className='my-24'>
          <div className='flex justify-center items-center'>
            <img src='https://1pg.link/uploads/block_images/eefecab91413df539605c33a980f57f5.png' />
          </div>
          <h6 className='flex justify-center items-center'>SUA EMPRESA MUITO MAIS SEGURA</h6>
          <div className='flex justify-center my-4'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icons">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <div>
              <svg viewBox="0 0 448 512" fill="currentColor" className='icons'>
                <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384 196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
              </svg>
            </div>
            <div>
              <svg fill="currentColor" viewBox="0 0 16 16" className='icons'>
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
            <div>
              <svg fill="currentColor" viewBox="0 0 16 16" className='icons'>
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
              </svg>
            </div>
            <div>
              <svg fill="currentColor" viewBox="0 0 16 16" className="icons">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </div>
            <div>
              <svg fill="currentColor" viewBox="0 0 16 16" className='icons'>
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col w-full">
          <h4>O QUE É O GRUPO VUIT?</h4>
          <h5>O GRUPO VUIT</h5>
        </div>

        <div className='flex w-[100%] aspect-video'>
          <iframe className='flex w-full h-full rounded-md' src="https://www.youtube.com/embed/44gxvIpnsM8?si=9ilP4dCuneX67dKh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='text-box'>
          Vuit surge da necessidade de expansão de uma grande operação já existente, orientada para a customização da gestão de seguros de vida, saúde, crédito consignado e benefícios às empresas e empregados.
          <br /><br />
          Focada na consultoria de seguros e benefícios, a Vuit quebra paradigmas no mercado atuando de forma disruptiva com conceitos colaborativos que promovem todo o ecossistema envolvido.
        </div>

        <a className='bg-white rounded-full flex justify-center items-center w-[100%] h-[55px] relative px-1 hover:cursor-pointer hover:scale-105'>
          <img src='https://1pg.link/uploads/block_thumbnail_images/644ce0975a8aa918dc06603abbe0deb7.png' className='w-11 h-11  left-1.5 top-[5.5px] absolute rounded-full' />
          <svg className='text-black h-4 w-5' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="accusoft" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M322.1 252v-1l-51.2-65.8s-12 1.6-25 15.1c-9 9.3-242.1 239.1-243.4 240.9-7 10 1.6 6.8 15.7 1.7.8 0 114.5-36.6 114.5-36.6.5-.6-.1-.1.6-.6-.4-5.1-.8-26.2-1-27.7-.6-5.2 2.2-6.9 7-8.9l92.6-33.8c.6-.8 88.5-81.7 90.2-83.3zm160.1 120.1c13.3 16.1 20.7 13.3 30.8 9.3 3.2-1.2 115.4-47.6 117.8-48.9 8-4.3-1.7-16.7-7.2-23.4-2.1-2.5-205.1-245.6-207.2-248.3-9.7-12.2-14.3-12.9-38.4-12.8-10.2 0-106.8.5-116.5.6-19.2.1-32.9-.3-19.2 16.9C250 75 476.5 365.2 482.2 372.1zm152.7 1.6c-2.3-.3-24.6-4.7-38-7.2 0 0-115 50.4-117.5 51.6-16 7.3-26.9-3.2-36.7-14.6l-57.1-74c-5.4-.9-60.4-9.6-65.3-9.3-3.1.2-9.6.8-14.4 2.9-4.9 2.1-145.2 52.8-150.2 54.7-5.1 2-11.4 3.6-11.1 7.6.2 2.5 2 2.6 4.6 3.5 2.7.8 300.9 67.6 308 69.1 15.6 3.3 38.5 10.5 53.6 1.7 2.1-1.2 123.8-76.4 125.8-77.8 5.4-4 4.3-6.8-1.7-8.2z"></path></svg>
          <span className='text-black px-2'>Baixe PDF apresentação Tudo na Vuit!</span>
        </a>

        <BreakLine />

        <img className='images' src='https://1pg.link/uploads/block_images/2df55ec0cbaace41b8a808a7441f26b8.png' />

        <Card
          cardNumber={1}
          openCard={openCard}
          setOpenCard={setOpenCard}
          title='Seguro de vida em grupo e acidentes pessoais'
          desccription='A Vuit Seguros é uma corretora que assessora as empresas, fornecendo seguro de vida em grupo e acidentes pessoais, permitindo que economizem tempo, esforço e dinheiro.'
        />

        <Card
          cardNumber={2}
          openCard={openCard}
          setOpenCard={setOpenCard}
          title='Seguro de saúde, dental e telemedicina'
          desccription='Seguindo os objetivos dos empregadores, somos capazes de propor acordos que atendam às expectativas dos colaboradores por sua empresa. Juntos encontramos as melhores soluções para seguro saúde, odontológico e telemedicina, um dos benefícios mais desejados pelos colaboradores. Ajudamos as empresas a encontrar uma solução nesta área, fornecendo planos de qualidade, gerenciando a demanda e acompanhamento de pós-venda, fortalecendo o comprometimento dos funcionários com a empresa.'
        />

        <Card
          cardNumber={3}
          openCard={openCard}
          setOpenCard={setOpenCard}
          title='Responsabilidade civil e prestação de serviços'
          desccription='Os seguros de responsabilidade civil geral, prestação de serviços, profissional, E&O e D&O, não são mais uma opção, mas sim uma necessidade, trazendo tranquilidade exigida pelos seus clientes e principalmente, protegendo os seus negócios. Estar preparado para o inesperado é importante para o sucesso da sua empresa. O seguro pode preencher lacunas na cobertura, ajudar a gerenciar riscos e garantir a continuidade dos negócios.'
        />

        <Card
          cardNumber={4}
          openCard={openCard}
          setOpenCard={setOpenCard}
          title='Seguro garantia e Garantia Judicial'
          desccription='Através da VUIT Seguros, você tem as garantias que precisa para fazer seu trabalho. Nossos clientes estão em primeiro lugar, e nossos profissionais são projetados para ajudar nas suas necessidades. Serviços especializados como garantia de proposta, garantia de execução, antecipação de pagamento ou garantia judicial, liberando os recursos imobilizados e este ajudando no fluxo de caixa da sua empresa.'
        />

        <Card
          cardNumber={5}
          openCard={openCard}
          setOpenCard={setOpenCard}
          title='Crédito consignado VUIT Cred'
          desccription='Use sua empresa para oferecer o benefício de crédito consignado ao seu funcionário, com a facilidade de desconto em folha, juros a partir de 1,89% ao mês, parcelamento em até 48x e o melhor de tudo: após 3 dias do primeiro contanto o recurso já pode estar disponível na conta do colaborador'
        />

        <Card
          cardNumber={6}
          openCard={openCard}
          setOpenCard={setOpenCard}
          title='VUIT benefícios: vale alimentação, refeição e combustível'
          desccription='Através da parceria com a Sodexo, maior rede credenciada de Vale Alimentação e Vale Refeição do Brasil, a Vuit benefícios tem como objetivo expandir o leque de produtos oferecidos aos seus clientes. É bom para o seu RH. Ao oferecer o vale-alimentação e o vale-refeição Sodexo, sua empresa pode receber isenção de encargos sociais e descontos no IR previstos pelo PAT. Faça a gestão online dos benefícios com praticidade, segurança e controle de gastos. É bom para os seus colaboradores. Seus funcionários têm acesso a opções de alimentação saudável. Os cartões de benefícios são aceitos em estabelecimentos físicos e aplicativos de entrega. É mais qualidade de vida para todos.'
        />

        <Contact text='Solicite uma proposta Vuit seguros' />

        <BreakLine />

        <a href='https://vuit.com.br/cred' className='images hover:scale-105'>
          <img src='https://1pg.link/uploads/block_images/ff34c16e7e252d23bcd4b60e9156a1e8.png' className='images hover:scale-105' />
        </a>

        <div className="text-box">
          Conheça as vantagens das empresas que utilizam Vuit Benefícios:
          <br/><br/>
          - A Sodexo possui vasta rede credenciada em todo o território nacional;
          <br/>
          - Redução do tempo de recrutamento;
          <br/>
          - Redução com absenteísmos;
          <br/>
          - Redução da folha de pagamento;
          <br/>
          - Implantação diferenciada aos clientes;
          <br/>
          - Praticidade na gestão dos benefícios e relatórios;
          <br/>
          - Possibilidade de negociação diferenciada.
          <br/>
        </div>

        <BreakLine />

        <a href='https://vuit.com.br/cred' className='images hover:scale-105'>
          <img src='https://1pg.link/uploads/block_images/145234f7f7df2d6e3302e1889985c5e7.png' className='images hover:scale-105' />
        </a>

        <div className='text-box'>
          A Vuit Cred é uma empresa do Grupo Vuit, que é responsável pela gestão de mais de 150 mil pessoas e mais de 1.500 empresas assistidas por seus produtos e benefícios.
          <br /><br />
          Devido à capilaridade de clientes espalhados em todos os estados brasileiros, foi possível conquistar reduções nas taxas, nos custos e personalizar os processos.
          <br /><br />
          Contratando o crédito consignado com a Vuit Cred é possível ajudar seus colaboradores a terem crédito ágil e simples, tudo com desburocratização. sendo um facilitador ao RH da empresa.
          <br /><br />
          - MENOR TAXA DE JUROS
          <br /><br />
          - EDUCAÇÃO FINANCEIRA E DE QUALIDADE
          <br /><br />
          41 2101 1724
          <br />
          41 99267 2010
          <br /><br />
          @VUITCRED
        </div>

        <Contact text='Solicite uma proposta Vuit Cred' />

        <BreakLine />

        <h4>CONTATOS:</h4>

        <iframe className='w-full rounded-s overflow-hidden aspect-[38/35]' src={`https://www.instagram.com/vuitseguros/embed/?cr=1&amp;v=13&amp;rd=https%3A%2F%2Fvuit.com.br&amp;rp=%2Fhome#%7B%22ci%22%3A0%2C%22os%22%3A2500.2999999821186%2C%22ls%22%3A706.5%2C%22le%22%3A2238.9000000059605%7D`}></iframe>

        <a className='bg-[#1B8B1D] contact'>
          <svg className='h-4 w-4 mx-2' fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
            <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        <a className='bg-[#4EABE1] contact'>
          <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
            <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
          </svg>
          <span>Telefone</span>
        </a>

        <BreakLine />

        <h4>LOCALIZAÇÃO:</h4>

        <div className='w-[100%] h-[450px] '>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{ lat: -25.443722042707897, lng: -49.27896712481774 }}
              zoom={15}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : <></>}
        </div>

        <div className="text-box items-center justify-center flex text-center">
          Rua Pasteur, 463 - Água Verde -13 andar
          <br />
          Curitiba-PR
        </div>

        <img className="h-[150px] w-[350px]" src="https://1pg.link/uploads/block_images/881e9b2b95785d8b81100c2785a72376.png" />

      </div>

    </div>

  )

}
