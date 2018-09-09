import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AccountDataService } from '../account-data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import { catchError, map, tap, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  resultsLength = 0;
  isLoadingResults = false;
  
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
      this.accountDataService.getAccountData()
        .subscribe(data => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    });
  }
}

@Component({
  selector: 'account.dialog.component',
  templateUrl: 'account.dialog.component.html',
})
export class AccountDialogComponent implements OnInit {

  name: string;
  amount: number;
  postdata: any;
  constructor(
    private accountDataService: AccountDataService,
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(name: string, amount: number): void {
    console.log(this.name);
    this.accountDataService.addAccountData({ name, amount })
    .subscribe(v => {
      console.log(v);
    });
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
