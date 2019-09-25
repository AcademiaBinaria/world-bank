import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RegionsService } from './regions.service';

@Component({
  selector: 'wb-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent implements OnInit {
  public regions$ = this.regionsService.getAll$();

  constructor(private regionsService: RegionsService, private miCadena: string) {}

  ngOnInit() {}
}
