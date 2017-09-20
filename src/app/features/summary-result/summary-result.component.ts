import {
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate, Input
} from '@angular/core';



import {SummaryResultService} from './summary-result.service';
import {SummaryResultClass} from './summary-result.class';
@Component({

  selector: 'htm-summary-result',
  templateUrl: 'summary-result.component.html',
  styleUrls: ['summary-result.component.css'],

  providers: [SummaryResultService],
  animations: [
    trigger('tableOpacityTrigger', [
      state('in', style({ opacity: '1' })),
      transition('void => *', [style({ opacity: '0' }),
        animate('100ms 300ms')
      ]),
      transition('* => void', [
        animate('50ms', style({ opacity: '0' }))
      ])
    ]),
  ]
})
export class SummaryResultComponent  implements OnInit, OnDestroy {
  @Input() expanded: boolean;
  expandedState = 'collapsed';
  busy: Promise<any>;
  summaryResults: SummaryResultClass[];


  constructor(private summaryResultService: SummaryResultService) {

  }

  ngOnInit() {
    console.log('SummaryResultComponent/ ngOnInit ');
    this.busy = this.summaryResultService.getSummaryResultSlowly().then(data => this.getData(data));
  }

  ngOnDestroy() {

  }

  getData(data: any) {
    console.log('summary result ' + data);
    this.summaryResults = data

  }

}