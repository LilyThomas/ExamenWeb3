
import {Injectable} from "@angular/core";
import {Recept} from "./recept";

@Injectable()
export class ReceptService{

    constructor(){}

    getAllRecepten(): Recept[]{
        let result: Recept[] = [];

        for(let i = 0; i < localStorage.length; i++){
            result.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }

        result.sort((a,b) => a.naam.localeCompare(b.naam));
        return result;
    }

    addRecept(recept: Recept): void{
        if(localStorage.getItem(recept.naam) == null){
            localStorage.setItem(recept.naam, JSON.stringify(recept));
        }
    }
}