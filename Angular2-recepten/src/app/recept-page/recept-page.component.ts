import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ReceptService} from "../service/recept.service";
import {Recept} from "../service/recept";

@Component({
    selector: 'recept-page',
    templateUrl: './recept-page.component.html'
})

export class ReceptPageComponent {
    recept: FormGroup;

    recepten: Recept[];

    constructor(private receptService: ReceptService){
        this.recept = new FormGroup({
            receptnaam: new FormControl(''),
            receptkcal: new FormControl(''),
            receptingredienten: new FormControl(''),
            receptbereidingstijd: new FormControl('')
        });

        this.recepten = this.receptService.getAllRecepten();
    }

    onSubmit(){
        let ingredienten: string[] = this.recept.value.receptingredienten.trim().split(',');

        let rec: Recept = new Recept(this.recept.value.receptnaam,
                                    Number(this.recept.value.receptkcal),
                                    ingredienten,
                                    Number(this.recept.value.receptbereidingstijd));

        this.receptService.addRecept(rec);
        this.recepten = this.receptService.getAllRecepten();
    }
}