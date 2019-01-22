export class Recept {

    constructor(
       public naam: string,
       public kcal: number,
       public ingredienten: string[],
       public bereidingstijd: number
    ){}

    toForm(): string{
        return `naam=${this.naam}&kcal=${this.kcal}&ingredienten=${this.ingredienten}&bereidingstijd=${this.bereidingstijd}`;
    }
}