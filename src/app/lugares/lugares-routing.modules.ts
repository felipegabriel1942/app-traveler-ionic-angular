import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresPage } from './lugares.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: LugaresPage,
        children : [
            { path: 'buscar', children: [
                {
                    path: '',
                    loadChildren: './busca/busca.module#BuscaPageModule'
                },
                {
                    path: ':lugarId',
                    loadChildren: './busca/lugar-detalhes/lugar-detalhes.module#LugarDetalhesPageModule'
                }
                ]
            },
            {
                path: 'ofertas',
                children: [
                    {
                        path: '',
                        loadChildren: './ofertas/ofertas.module#OfertasPageModule'
                    },
                    {
                        path: 'novo',
                        loadChildren: './ofertas/nova-oferta/nova-oferta.module#NovaOfertaPageModule'
                    },
                    {
                        path: 'editar/:lugarId',
                        loadChildren: './ofertas/editar-oferta/editar-oferta.module#EditarOfertaPageModule'
                    },
                    {
                        path: ':lugarId',
                        loadChildren: './ofertas/ofertas-reservas/ofertas-reservas.module#OfertasReservasPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/lugares/tabs/buscar',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/lugares/tabs/buscar',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LugaresRoutingModule {

}