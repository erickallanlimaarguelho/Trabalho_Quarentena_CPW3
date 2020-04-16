import CampeaoDAO from '../model/dao/CampeoesDAO';

export default class CampeaoController{
    
    constructor(){
        this.campeaoDAO = new CampeaoDAO();
    }

    recuperarCampeoes(){
        return this.campeaoDAO.recuperarTodos();
    }
}