import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//import '../styles/styles.css';
import { AppComponent } from './app/app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { HopsListComponent } from './ingredients/hops-list.component';
import { HopsItemComponent } from './ingredients/hops-item.component';
import { HomeComponent } from './home/home.component';
import { IngredientService } from './ingredients/service/ingredient.service';
import { Error404Component } from './errors/404.component';
import { HopDetailComponent } from './ingredients/hops-detail/hop-detail.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavBarComponent,
        CounterComponent,
        FetchDataComponent,
        HopsListComponent,
        HopsItemComponent,
        HopDetailComponent,
        HomeComponent,
        Error404Component
        ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

