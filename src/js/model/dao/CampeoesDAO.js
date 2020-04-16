import Campeao from '../entity/Campeoes';
import * as db from '../../db/campeoes.json';

export default class CampeaoDAO{

    recuperarTodos(){
        let campeoes = db.campeoes.map(campeao => new Campeao(
            campeao.nome_campeao,
            campeao.ano,
            campeao.nome_tecnico,
            campeao.nome_timeDerrotado
        ));

        return campeoes;
    }
}