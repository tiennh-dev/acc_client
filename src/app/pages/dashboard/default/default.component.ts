import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DefaultComponent implements OnInit {

  ngOnInit() { }
  
  // Widget Line Chart
  WidgetlineChart1: Chart = {
    type: 'Line', 
    data: {
	  series: [
        [25, 50, 30, 40, 60, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]
      ]	
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
          },
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height:60,
        showPoint: false,
    },
  };
  
  // Widget Line Chart
  WidgetlineChart2: Chart = {
    type: 'Line', 
    data: {
	    series: [
	      [null],
	      [5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]
	    ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
          },
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height:60,
        showPoint: false,
    },
  };

  // Widget Line Chart
  WidgetlineChart3: Chart = {
    type: 'Line', 
    data: {
    series: [
	      [null],
	      [null],
	      [5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]
      ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
          },
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height:60,
        showPoint: false,
    },
 };
 
 // Widget Line Chart
 WidgetlineChart4: Chart = {
    type: 'Line', 
    data: {
        series: [
          [null],
          [null],
          [null],
          [5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
        },
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height:60,
        showPoint: false,
    }
 };
 
 // Sales Chart
 salesChart: Chart = {
	type: 'Line', 
	data: {
	    series: [
	      [4, 6, 8, 6, 8, 30, 25, 24, 27, 8, 18, 12, 8, 40, 33, 37, 25, 22, 18, 25, 2, 4, 15, 10, 11, 15, 1],
	      [24, 27, 8, 18, 12, 8, 40, 33, 37, 25, 22, 18, 25, 2, 4, 15, 10, 11, 15, 14, 6, 8, 6, 8, 30, 25],
	    ]
	},
	options: {
	    axisX: {
	        showGrid: false,
	        showLabel: false,
	        offset: 0,
	    },
	    axisY: {
	        showGrid: false,
	        low: 0,
	        showLabel: false,
	        offset: 0,
	    },
	    chartPadding: {
	        top: 30,
            bottom: 0,
            right: 0,
            left: 0,
	    },
	    lineSmooth: Chartist.Interpolation.cardinal({
	        tension: 0
	    }),
	    showArea: true,
	    fullWidth: true,
	    height:320,
	    showPoint: false,
	}
};
  
  // Doughnut Chart (Monthlt visitor chart)
  public monthlyChartLabels: string[] = ['India', 'USA', 'Canada', 'UK'];
  public monthlyChartData: number[] = [500, 600, 400, 700];
  public monthlyChartColors: any[] = [{ backgroundColor: ["#ccbbef", "#80dde9", "#68dabe", "#4099ffa3"] }];
  public monthlyChartType = 'doughnut';
  public monthlyChartLegend = true;
  public monthlyChartOptions : any = {
	  animation: false,
	  responsive: true,
	  height: 500,
	  maintainAspectRatio: false,
	  legend: {position: 'right'}
  };

  // Doughnut Chart (Daily visitor chart)
  public dailyChartLabels: string[] = ['India', 'USA', 'Canada', 'UK'];
  public dailyChartData: number[] = [800, 500, 200, 300];
  public dailyChartColors: any[] = [{ backgroundColor: ["#ccbbef", "#80dde9", "#68dabe", "#4099ffa3"] }];
  public dailyChartType = 'doughnut';
  public dailyChartLegend = true;
  public dailyChartOptions : any = {
	  animation: false,
	  responsive: true,
	  height: 500,
	  maintainAspectRatio: false,
	  legend: {position: 'right'}
  };


  // LineChart (Top Sale)
  public saleChartData: Array<any> = [
	  { data: [10, 20, 40, 30, 0, 20, 10, 30, 10] },
	  { data: [20, 40, 10, 20, 40, 30, 40, 10, 20] },
	  { data: [60, 10, 40, 30, 80, 30, 20, 90] }
  ];
  public saleChartLabels: Array<any> = ["","10", "20", "30", "40", "50", "60", "70", "80"];
  public saleChartColors: Array<any> = [
	  {
	    backgroundColor: 'rgba(171, 140, 228, 0.2)',
	    borderColor: "#ab8ce4",
	    borderWidth: 2,
	    lineTension: 0,
	  },
	  {
	    backgroundColor: 'rgba(38, 198, 218, 0.2)',
	    borderColor: "#26c6da",
	    borderWidth: 2,
	    lineTension: 0,
	  },
	  {
	    backgroundColor: 'rgb(64, 153, 255, 0.2)',
	    borderColor: "#4099ff",
	    borderWidth: 2,
	    lineTension: 0,
	  }
  ];
  public saleChartLegend = false;
  public saleChartType  = 'line';
  public saleChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
  };

}
