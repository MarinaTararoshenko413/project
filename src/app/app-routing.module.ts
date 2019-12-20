import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TablesPageComponent } from './tables/tables-page/tables-page.component';
import { TablePageComponent } from './tables/table-page/table-page.component';
import { BulletinIssueComponent } from './bulletin-issue/bulletin-issue.component';
import { SlidersComponent } from './sliders/sliders.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressServicesComponent } from './progress-services1/progress-services1.component';
import { FormsComponent } from './forms-example/forms/forms.component';
import { SvgElementsComponent } from './svg/svg-elements/svg-elements.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'sliders',
        component: SlidersComponent
    }, {
        path: 'bulletin-issue',
        component: BulletinIssueComponent
    }, {
        path: 'pagination',
        component: PaginationComponent
    }, {
        path: 'service',
        component: ProgressServicesComponent
    }, {
        path: 'forms',
        component: FormsComponent
    }, {
        path: 'svg',
        component: SvgElementsComponent
    }, {
        path: 'tables',
        component: TablesPageComponent,
        children: [
            {
                path: ':id/:name',
                component: TablePageComponent
            }
        ]
    }, {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
