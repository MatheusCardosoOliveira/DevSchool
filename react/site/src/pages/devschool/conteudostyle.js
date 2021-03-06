import styled from 'styled-components'

const Barra = styled.div`
    background: rgba(152, 108, 223, 1);
    width: 4px;
    height: 2em;
    margin: 0em 1em;
    border-radius: 1em;

`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 170vh;

    font-family: 'Roboto', sans-serif;
    
    .usuario {
        position: relative;
    }

    .lista-tb {
        width: 145vh;
    }
    .bullet {
        background-color: #EA10C7;    
        color: #fff;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: 12px;
        border: 3px solid #fff;

        position: absolute;
        top: -5px;
        right: -5px;

    }

    .container1 {
        display: flex;
        flex-direction: column;
        background-color: #2B3031;

        height: 100vh;
        position: sticky;
        top: 0px;
    }

    .container2 {
        width: 68em;
        background: linear-gradient(0deg, #F5F5F5, #F5F5F5);
        
    }

   
    .sloga {
        display: flex;
        flex-direction: row;
        padding: 2em 2em;
        align-items: center;
        
    }

    .logo {
        
    }

    .titulo {
        padding-left: 0.5em;
        font-size: 1.5em;
        color: white;
        font-weight: bold;
    }
    .titulo span {
        color: #EA10C7;
        margin-right: -5px;
    }

    .vazio {
        background: rgba(38, 38, 38, 1);
        width: auto;
        height: 3em;
    }

    .geren {
        display: flex;
        align-items: center;
        width: auto;
        height: 3em;
        padding: 2em;
        color: white;
        
    }
    .setaprabaixo{
        padding-left: 4em;
    }

    .alun {
        display: flex;
        align-items: center;
        

    }

    .opcao2 {
        display: flex;
        align-items: center;
        width: 17em;
        height: 3em;
        padding: 2em;
        color: rgba(26, 26, 26, 1);
        background: rgba(255, 255, 255, 1);
    }
    .barra1roxo {
        background: rgba(219, 33, 189, 1);
        width: 0.2em;
        height: 4em;
    }

    .cabecalho {
        width: 168vh;
        display: flex;
        flex-direction: row;
        padding: 1em 2em;
        align-items: center;
        background: rgba(255, 255, 255, 1);

    }

    
    .usuario-imagem img {
        border-radius: 50%;
        width: 3em;
        height: 3em;
    }

    .usuario-imagem {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        
    }

    .mensagem-usu {
        padding-left: 1em;
        padding-right: 47em;
    }

    .contalunos {
        align-items: center;
        background: rgba(152, 108, 223, 1);
        border-radius: 50%;
        align-items: center;
        width: 2.3em;
        height: 2.3em;
        margin: 0em 0.2em;
       
    }
    .recarregar {
        padding: 0.5em 0.4em;
    }

    .logout {
        padding: 0.3em 0.5em;
    }

    .cadrastro {
        background: rgba(255, 255, 255, 1);
        margin: 2em 2em;
        padding: 2em;
    }
    .cab {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4em;
    }
    .cxinputs {
        display: flex;
        flex-direction: row;
        
    }

    .titulo-alun{
        font-weight: bold;
        font-size: 2em;
    }

    .titulo-matri {
        font-weight: bold;
        font-size: 2em;
    }

    .dados {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 40em;
        height: 5em;
    }

    .nome {
        padding-left: 3em;
        margin-right: 5em;
    }
    .curso {
        padding-left: 0em;
    }
    .chamada {
        padding-left: 1.3em;
        margin-right: 4.7em;
    }
    .turma {
        padding-left: 0.2em;
    }
    .dados input {
        border: 1px solid rgba(168, 168, 168, 1);
        background: #FFFFFF;
        border-radius: 5px;

        outline: none;
        padding: .4em .5em;

        cursor: text;
    }

    .botao {
        padding-bottom: 0.5em;
        align-self: flex-end;
    }

    .botao button {
        font-weight: 700;

        color: #fff;
        background: rgba(233, 17, 198, 1);
        border: none;
        border-radius: 20px;
        padding: .5em 2em;
        margin: .3em;

        cursor: pointer;
    }

    .listaalunos {
        background: rgba(255, 255, 255, 1);
        margin: 2em 2em;
        padding: 2em;
    }

    .idTb {
        padding-left: 2.5em;
    }
    .idTb1 {
        padding-left: 2em;
    }
    table {
        border: 1px solid #E2E2E2;
        border-collapse: collapse;
    }
    th {
        height: 61.93px;
        text-align: left;
        color: #ffff;
        
        padding: 1em;    
    }
    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        
    }
    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
        padding: 0em;
    }
    thead {
        color: #fff;
        background: #986CDF;
    }
    .linha-alternada {
        background: #F5F5F5;
    }
    .botao-visivel > button {
        visibility: hidden;
    }
    tr:hover {
        
        .botao-visivel > button {
            visibility: visible;
        }
        
    }
`



export { Container, Barra }