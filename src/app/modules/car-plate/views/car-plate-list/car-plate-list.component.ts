import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarPlateService} from '../../car-plate.service';
import {MatDialog, MatSnackBar, MatTableDataSource} from '@angular/material';
import {CarPlate} from '../../models/car-plate.model';
import {Subscription} from 'rxjs';
import {ConfirmationDialogComponent} from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import {Filters} from '../../models/filters.model';
import {CarPlateDialogComponent} from '../../components/car-plate-dialog/car-plate-dialog.component';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-car-plate-list',
  templateUrl: './car-plate-list.component.html',
  styleUrls: ['./car-plate-list.component.scss']
})
export class CarPlateListComponent implements OnInit, OnDestroy {
  dataSource;
  totalElements = 0;
  defaultPageSize = 10;
  pageSizeOptions = [5, 10, 20];
  searchControl = new FormControl();
  readonly filters: Filters = {
    searchText: '',
    page: 1,
    limit: 10
  };
  readonly displayedColumns: string[] = ['id', 'firstName', 'lastName', 'carPlateNumber', 'actions'];
  private readonly subscriptions = new Subscription();

  constructor(private carPlateService: CarPlateService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.onSearchControlChange();
    this.getCarPlatesByFilters();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openConfirmationDialog(carPlate: CarPlate) {
    this.subscriptions.add(
      this.dialog.open(ConfirmationDialogComponent, {
        data: {
          text: 'Do you want to remove this element?'
        }
      }).afterClosed().subscribe(isAllowed => this.removeCarPlate(carPlate, isAllowed))
    );
  }

  openCarPlateDialog(carPlate: CarPlate = null) {
    this.subscriptions.add(
      this.dialog.open(CarPlateDialogComponent, {
        data: {
          carPlate
        }
      }).afterClosed().subscribe(isSuccess => {
        if (isSuccess) {
          this.getCarPlatesByFilters();
        }
      })
    );
  }

  onPageChange($event) {
    this.filters.page = $event.pageIndex + 1;
    this.filters.limit = $event.pageSize;
    this.getCarPlatesByFilters();
  }

  private getCarPlatesByFilters() {
    this.carPlateService.getCarPlates(this.filters)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<CarPlate>(data.carPlates);
        this.totalElements = data.totalElements;
      });
  }

  private removeCarPlate(carPlate: CarPlate, isAllowed: boolean) {
    if (isAllowed) {
      this.carPlateService.removeCarPlateById(carPlate.id).subscribe(
        () => {
          this.getCarPlatesByFilters();
          this.snackBar.open('Element has been successfully removed', null, {
            duration: 5000,
          });
        },
        () => this.snackBar.open('Error occurred while removing element', null, {
          duration: 5000,
        })
      );
    }
  }

  private onSearchControlChange() {
    this.subscriptions.add(
      this.searchControl.valueChanges.pipe(
        debounceTime(500)
      ).subscribe(value => {
        this.filters.searchText = value;
        this.getCarPlatesByFilters();
      })
    );
  }
}
