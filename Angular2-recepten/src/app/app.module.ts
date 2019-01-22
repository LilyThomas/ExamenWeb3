import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./app.component";
import {ReceptPageComponent} from "./recept-page/recept-page.component";
import {ReceptService} from "./service/recept.service";


const appRoutes: Routes = [
    {path: '**', component: ReceptPageComponent}
];

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
                RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, ReceptPageComponent],
    providers: [ReceptService],
    bootstrap: [AppComponent]
})

export class AppModule{}