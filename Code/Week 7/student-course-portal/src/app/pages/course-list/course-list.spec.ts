import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Component, OnInit } from '@angular/core';

import { CourseList } from './course-list';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div>
      <app-course-card 
        *ngFor="let c of courses" 
        [course]="c" 
        (enrollRequested)="onEnroll($event)">
      </app-course-card>
      <p>Selected course ID: {{ selectedCourseId }}</p>
    </div>
  `
})
export class CourseListComponent {
  selectedCourseId: number | null = null;
  courses = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4 },
    { id: 2, name: 'Database Systems', code: 'CS102', credits: 3 },
    { id: 3, name: 'Operating Systems', code: 'CS103', credits: 4 },
    { id: 4, name: 'Computer Networks', code: 'CS104', credits: 3 },
    { id: 5, name: 'Software Engineering', code: 'CS105', credits: 3 }
  ];

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }
}

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class CourseListComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}
