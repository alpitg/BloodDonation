import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { LocationStrategy, HashLocationStrategy, CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
    ,
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
})
export class HomeModule { }
