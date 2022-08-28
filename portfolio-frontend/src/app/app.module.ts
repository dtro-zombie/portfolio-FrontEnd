import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HyssComponent } from './components/hyss/hyss.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewHyssComponent } from './components/hyss/new-hyss.component';
import { EditHyssComponent } from './components/hyss/edit-hyss.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { PortfolioGuardGuard } from './guards/portfolio-guard.guard';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from '@angular/fire/compat';

 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HyssComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewHyssComponent,
    EditHyssComponent,
    EditProyectosComponent,
    NewProyectosComponent,
    EditBannerComponent,
    EditAcercaDeComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,  FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    InterceptorProvider,PortfolioGuardGuard,CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
