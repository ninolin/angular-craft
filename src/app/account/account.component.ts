import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AccountDataService } from '../account-data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private accountDataService: AccountDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAccountData();
  }

  getAccountData(): void {
    this.accountDataService.getAccountData()
      .subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  showAddAccountDialog(): void {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      width: '250px',
      data: {name: "hi hi"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'account.dialog.component',
  templateUrl: 'account.dialog.component.html',
})
export class AccountDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
