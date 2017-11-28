import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [

    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        //canActivate: [AuthGuard]
    },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },    
    { path: '**', redirectTo: 'not-found' }

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
    // export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
