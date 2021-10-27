import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MatFormFieldAppearance} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSidenavModule

  ]
})
export class MaterialModule { }
