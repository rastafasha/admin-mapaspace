import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaisComponent } from './forms/pais/pais.component';
import { PaisesComponent } from './manage/paises/paises.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
// import { VideoEditComponent } from './videos/video-edit/video-edit.component';
// import { VideoIndexComponent } from './videos/video-index/video-index.component';


const childRoutes: Routes = [

    { path: '',  component: DashboardComponent, data:{title:'Dashboard'} },
    //auth

    //paginas
    { path: 'paises', component: PaisesComponent},
            { path: 'pais/create', component: PaisComponent},
            { path: 'pais/edit/:id', component: PaisComponent},

            { path: 'usuarios', component: UsersComponent },
            { path: 'user/edit/:id', component: UserDetailsComponent},


    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', component:  DashboardComponent },





]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoute),
    RouterModule.forChild(childRoutes),
  ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
