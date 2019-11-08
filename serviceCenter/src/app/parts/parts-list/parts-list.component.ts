import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../../shared/firebase.service';
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

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.loadAllParts().subscribe(
      x => this.dataSourceFilter = new MatTableDataSource(x)
    );
    this.displayedColumns = ['provider', 'brand', 'model', 'type', 'price'];
  }

  // фильтр строка
  applyFilter(filterValue: string) {
    this.dataSourceFilter.filter = filterValue.trim().toLowerCase();
  }

  getParts(row) {
    this.submitted.emit(row);
    this.firebaseService.delPart(row.id);
  }

}
