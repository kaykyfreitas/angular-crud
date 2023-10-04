import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category']

  constructor(
    private service: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = service.list()
    .pipe(
      catchError(error => {
        this.onError('Error loading courses.')
        return of([])
      })
    );
  }

  onError(msg: string) {
    this.dialog.open(ErrorDialogComponent, { data: msg });
  }

}
