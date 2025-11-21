import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaisComponent } from './forms/pais/pais.component';
import { PaisesComponent } from './manage/paises/paises.component';
// import { VideoIndexComponent } from './videos/video-index/video-index.component';
// import { VideoEditComponent } from './videos/video-edit/video-edit.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        
        children: [
            {
                path: 'admin',
                component: DashboardComponent,
                
                data: { titulo: 'Dashboard', }
            },
            { path: 'paises', component: PaisesComponent},
            { path: 'pais/create', component: PaisComponent},
            { path: 'pais/edit/:id', component: PaisComponent},


            { path: '', redirectTo: '/admin', pathMatch: 'full'},
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
