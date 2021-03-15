import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AboutComponent } from './components/about'
import { ContactComponent } from './components/contact';
import { CreateComponent } from "./components/create";
import { ProjectsComponent } from './home/home.component';

// Array de configuración de rutas
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuego', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent },
  { path: 'servicioexterno', component: ServicioexternoComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
