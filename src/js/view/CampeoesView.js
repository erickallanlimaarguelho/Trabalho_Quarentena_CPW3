import CampeaoController from '../controller/CampeaoController';

export default class CampeaoView{

    constructor(){
        this.campeaoCtrl = new CampeaoController();
    }

    renderizarTabelaCampeoes(){

        let campeoes = this.campeaoCtrl.recuperarCampeoes();

        let cabecalho = this.criarCabecalhoDaTabelaDeCampeoes();
        let corpo = this.criarCorpoDaTabelaDeCampeoes(campeoes);

        let tabela = `<table>${cabecalho}${corpo}</table>`;

        document.getElementById('visualizacaoCampeoes').innerHTML = tabela;

    }

    criarCabecalhoDaTabelaDeCampeoes(){

        let cabecalho =`
                <thead>
                    <tr>
                        <th>Time Campeão</th>
                        <th>Ano</th>
                        <th>Tecnico</th>
                        <th>Time Derrotado</th>
                    </tr>
                </thead>
        `;

        return cabecalho;

    }

    criarCorpoDaTabelaDeCampeoes(campeoes){

        let corpo = '';
        campeoes.forEach(campeao => {let campeaoStr = `
        
            <tr>
                <td>${campeao.nome_campeao}</td>
                <td>${campeao.ano}</td>
                <td>${campeao.nome_tecnico}</td>
                <td>${campeao.nome_timeDerrotado}</td>
            </tr>
        `
        corpo += campeaoStr;
    });

    let tbody = `<tbody>${corpo}</tbody>`;
    
    return tbody;
    }
}