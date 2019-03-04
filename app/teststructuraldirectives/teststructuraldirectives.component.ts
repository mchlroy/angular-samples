import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teststructuraldirectives',
  template: `
    <h1>
      Structural Directives
    </h1>

    <div style="display:inline-block;margin:10px;vertical-align:top;">
      <h2 style="color:blue">ngIf</h2>
      <h2 *ngIf="displayName; else elseBlock">
        Michael
      </h2>

      <ng-template #elseBlock>
        <h2>
          Name is hidden
        </h2>
      </ng-template>

      <div *ngIf="displayName; then thenBlock; else elseBlock2;"></div>
      <ng-template #thenBlock>
        <h2>Then Block</h2>
      </ng-template>

      <ng-template #elseBlock2>
        <h2>Hidden</h2>
      </ng-template>

      <button (click)="onClick()">Hide/Show name</button>
    </div>
    
    <div style="display:inline-block;margin:10px;vertical-align:top;">
      <h2 style="color:blue">ngSwitch</h2>
      <div [ngSwitch]="colors[currentColorIndex]">
        <div *ngSwitchCase="'red'">You picked red color</div>
        <div *ngSwitchCase="'blue'">You picked blue color</div>
        <div *ngSwitchCase="'green'">You picked green color</div>
        <div *ngSwitchDefault>Pick again</div>
      </div>
      <button (click)="onClickColor()">{{colors[currentColorIndex]}}</button>
    </div>

    <div style="display:inline-block;margin:10px;vertical-align:top;">
      <h2 style="color:blue">ngFor</h2>
      <div style="display:inline-block;margin:10px;">
      Index
        <div *ngFor="let color of colors; index as i;">
          <h2 [style.color]="color">{{i}} {{color}}</h2>
        </div>
      </div>
      <div style="display:inline-block;margin:10px;">
        First
        <div *ngFor="let color of colors; first as f;">
          <h2 [style.color]="color">{{f}} {{color}}</h2>
        </div>
      </div>
      <div style="display:inline-block;margin:10px;">
        Last
        <div *ngFor="let color of colors; last as l;">
          <h2 [style.color]="color">{{l}} {{color}}</h2>
        </div>
      </div>
      <div style="display:inline-block;margin:10px;">
        Odd
        <div *ngFor="let color of colors; odd as o;">
          <h2 [style.color]="color">{{o}} {{color}}</h2>
        </div>
      </div>
      <div style="display:inline-block;margin:10px;">
        Even
        <div *ngFor="let color of colors; even as e;">
          <h2 [style.color]="color">{{e}} {{color}}</h2>
        </div>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class TeststructuraldirectivesComponent implements OnInit {

  displayName = false;

  public colors = ["red", "blue", "green", "yellow"];
  private currentColorIndex = 0;

  constructor() { }

  onClick() {
    this.displayName = !this.displayName;
  }

  onClickColor() {
    if (this.currentColorIndex == this.colors.length - 1) {
      this.currentColorIndex = 0;
    }
    else {
      this.currentColorIndex++;
    }
  }

  ngOnInit() {
  }

}
