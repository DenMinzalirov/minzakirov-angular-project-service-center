import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'


interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ord;
  constructor(db: AngularFireDatabase) {
    db.list('/order').snapshotChanges();
    console.log(this.ord)

  }
}
