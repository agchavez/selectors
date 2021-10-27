import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap} from 'rxjs/operators';

import { PaisesServicesService } from '../../services/paises-services.service';
import { Contries } from '../../interfaces/interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    region: ["", [Validators.required]],
    contrie: ["", [Validators.required]],

  })

  //Llenar regiones
  regions: string[] = [];
  contries!: Contries[]

  constructor(
    private fb   : FormBuilder,
    private ps   : PaisesServicesService
  ) { }

  ngOnInit(): void {
    this.regions = this.ps.regions;

    // Seelccionado region
    this.myForm.get('region')?.valueChanges
      .pipe(
        tap((_)=>{
          this.myForm.get('contrie')?.reset('');
        }),
         switchMap(resp => this.ps.getRegions(resp))
      )
      .subscribe(contries =>this.contries = contries)
  }

}
