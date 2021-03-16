import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from "./components/create/create.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from "./components/error/error.component";
import { StoriesComponent } from "./components/stories/stories.component";

// Array de configuración de rutas
const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'relatos', component: StoriesComponent },
  { path: 'crear-relato', component: CreateComponent },
  { path: '**', component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
