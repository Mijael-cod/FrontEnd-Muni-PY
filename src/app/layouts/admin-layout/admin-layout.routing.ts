import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { GenexpComponent } from 'app/genexp/genexp.component';
import { VerificarexpeComponent } from 'app/verificarexpe/verificarexpe.component';
import { ResolucionComponent } from 'app/resolucion/resolucion.component';
import { CredencialesComponent } from 'app/credenciales/credenciales.component';
import { CertificadoComponent } from 'app/certificado/certificado.component';
import { PrincipalmpComponent } from 'app/principalmp/principalmp.component';
import { PrincipalsgComponent } from 'app/principalsg/principalsg.component';
import { PrincipalgrComponent } from 'app/principalgr/principalgr.component';
import { PrincipalgereComponent } from 'app/principalgere/principalgere.component';
import { ParametrosComponent } from 'app/parametros/parametros.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'genexp', component: GenexpComponent},
    { path: 'verificarexpe', component: VerificarexpeComponent},
    { path: 'resolucion', component:ResolucionComponent},
    { path: 'credenciales', component: CredencialesComponent},
    { path: 'certificado', component: CertificadoComponent},
    { path: 'principalmp', component: PrincipalmpComponent},
    { path: 'principalsg', component: PrincipalsgComponent},
    { path: 'principalgr', component: PrincipalgrComponent},
    { path: 'principalgere', component: PrincipalgereComponent},
    { path: 'parametros', component: ParametrosComponent},
];
