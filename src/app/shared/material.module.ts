import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule,
    MatMenuModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
        MatIconModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSnackBarModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
        MatIconModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSnackBarModule,
        MatMenuModule
    ]
})
export class CustomMaterialModule {}
