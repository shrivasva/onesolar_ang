import { Component, OnInit } from '@angular/core';
import { ListService } from 'services/list.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {
  list: any
  ele: any
  lead: string
  bool: boolean;
  lat: number;
  long: number;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.bool = false;
    this.listService.getLeadList().subscribe(data => {
      this.list = data
    });

  }
  onSelect(ele: any) {
    this.lead = ele
    this.listService.getLatLongDetalis(ele).subscribe(data => {
      this.ele = JSON.parse(data)
      this.lat = Number(this.ele.lat)
      this.long = Number(this.ele.long)
      this.bool = true;
    });
  }

}
