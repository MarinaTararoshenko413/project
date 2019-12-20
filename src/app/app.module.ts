import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeCL from '@angular/common/locales/es-CL';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CustomMaterialModule } from './shared/material.module';
import { CurrencyFormatPipe } from './shared/pipe/currency.pipe';
import { ArcChartComponent } from './svg/arc-chart/arc-chart.component';
import { ProgressServicesComponent } from './progress-services1/progress-services1.component';
import { DraggingBlockComponent } from './shared/dragging-block/dragging-block.component';
import { CustomVerticalSliderComponent } from './sliders/custom-vertical-slider/custom-vertical-slider.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ExampleTableComponent } from './tables/example-table/example-table.component';
import { HeaderComponent } from './shared/header/header.component';

import { SizeColumnDirective } from './shared/directives/size-column.directive';
import { TableAllPriceComponent } from './tables/table-all-price/table-all-price.component';
import { BulletinIssueComponent } from './bulletin-issue/bulletin-issue.component';
import { LoopSliderComponent } from './sliders/loop-slider/loop-slider.component';
import { LocaleService } from './services/locale.service';
import { TablesPageComponent } from './tables/tables-page/tables-page.component';
import { TablePageComponent } from './tables/table-page/table-page.component';
import { SlidersComponent } from './sliders/sliders.component';
import { FormsComponent } from './forms-example/forms/forms.component';
import { SvgElementsComponent } from './svg/svg-elements/svg-elements.component';
import { CalculatorComponent } from './forms-example/calculator/calculator.component';

registerLocaleData(localeCL);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArcChartComponent,
        ProgressServicesComponent,
        DraggingBlockComponent,
        CustomVerticalSliderComponent,
        PaginationComponent,
        ExampleTableComponent,
        SizeColumnDirective,
        TableAllPriceComponent,
        BulletinIssueComponent,
        LoopSliderComponent,
        CurrencyFormatPipe,
        HeaderComponent,
        TablesPageComponent,
        TablePageComponent,
        SlidersComponent,
        FormsComponent,
        SvgElementsComponent,
        CalculatorComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CustomMaterialModule,
    ],
    providers: [
        CurrencyFormatPipe,
        LocaleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
