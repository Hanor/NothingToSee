import { Component, OnInit, Renderer, OnDestroy, Input, ViewChild  } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanningService } from './planning.service';
import { Subject } from 'rxjs/internal/Subject';
import { ExecutionDiary } from  '../shared/dto/execution-diary';
import { Planning } from  '../shared/dto/planning';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Equipment } from 'src/app/shared/dto/equipment';
import { MatStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-container',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {
  selectedIndex: number;
  @ViewChild('stepper') stepper: MatStepper;
  constructor(
    private planningService: PlanningService,
    private renderer: Renderer,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {}
  ngOnDestroy() {}
}
