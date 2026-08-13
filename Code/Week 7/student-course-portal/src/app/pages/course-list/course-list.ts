import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  isLoading = false;
  courses = [
    { id: 1, title: 'Angular Basics', description: 'Learn Angular fundamentals' },
    { id: 2, title: 'React Essentials', description: 'Explore React concepts' }
  ];

  trackByCourseId(index: number, course: { id: number }) {
    return course.id;
  }

  onEnroll(course: { id: number }) {
    console.log('Enroll requested for course', course.id);
  }
}
