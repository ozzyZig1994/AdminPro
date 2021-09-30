import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input () titulo : string = 'Sin titulo';

  // Doughnut
  @Input ('labels') doughnutChartLabels : Label [] = [ 'Label1', 'Label2', 'Label3' ];
  @Input ('data') doughnutChartData : MultiDataSet = [ [350, 450, 100] ];
  @Input () colors : Color [] = [ { backgroundColor : [ '#9E120E', '#FF5800', '#FFB414' ] } ];

}
