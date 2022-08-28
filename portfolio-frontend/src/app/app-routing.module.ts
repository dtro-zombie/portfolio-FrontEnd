import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditHyssComponent } from './components/hyss/edit-hyss.component';
import { NewHyssComponent } from './components/hyss/new-hyss.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { PortfolioGuardGuard } from './guards/portfolio-guard.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExperienciaComponent,canActivate:[PortfolioGuardGuard]},
  {path:'editexp/:id',component:EditExperienciaComponent,canActivate:[PortfolioGuardGuard]},
  {path:'nuevaedu',component:NewEducacionComponent,canActivate:[PortfolioGuardGuard]},
  {path:'editedu/:id',component:EditEducacionComponent,canActivate:[PortfolioGuardGuard]},
  {path:'nuevahard',component:NewHyssComponent,canActivate:[PortfolioGuardGuard]},
  {path:'edithard/:id',component:EditHyssComponent,canActivate:[PortfolioGuardGuard]},
  {path:'nuevopro',component:NewProyectosComponent,canActivate:[PortfolioGuardGuard]},
  {path:'editpros/:id',component:EditProyectosComponent,canActivate:[PortfolioGuardGuard]},
  {path:'editbanner/:id',component:EditBannerComponent,canActivate:[PortfolioGuardGuard]},
  {path:'editperfil/:id',component:EditAcercaDeComponent,canActivate:[PortfolioGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
