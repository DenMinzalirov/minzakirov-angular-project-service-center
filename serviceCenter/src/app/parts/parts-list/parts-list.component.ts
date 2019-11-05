import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../../shared/firebase.service';
import {map} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  displayedColumns = [];
  dataSourceFilter: MatTableDataSource<any>;

  @Output() submitted = new EventEmitter();

  partsAllBase;
  partsBrandList;
  partsTypeList;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.loadAllParts().subscribe(
      x => this.dataSourceFilter = new MatTableDataSource(x)
    );
    // this.firebaseService.loadAllParts().pipe(
    //   map(x => this.dataSourceFilter = new MatTableDataSource(x))
    // );
    this.displayedColumns = ['provider', 'brand', 'model', 'type', 'price'];
    // this.partsBrandList = this.partsAllBase.pipe(
    //   map(x => Object.keys(x))
    // );
  }

  selectCurrentPartsBrandList(event) {
    console.log(event);
    // this.partsTypeList = this.firebaseService.loadAllParts(event, '');
    // this.ngOnInit();
  }

  selectCurrentPartsTypeList(event) {
    console.log(event);
  }

  // фильтр строка
  applyFilter(filterValue: string) {
    this.dataSourceFilter.filter = filterValue.trim().toLowerCase();
  }

  getParts(row) {
    // console.log(row);
    this.submitted.emit(row);
    this.firebaseService.delPart(row.id);
  }


  check() {
    console.log(this.dataSourceFilter);


  }

}
