import { NgModule } from '@angular/core'

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule
    ]
})
export class MaterialModule { }