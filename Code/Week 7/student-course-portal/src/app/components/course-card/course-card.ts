import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course: { id: number; title: string; description: string } | null = null;
  @Output() enrollRequested = new EventEmitter<{ id: number; title: string; description: string }>();

  onEnroll() {
    if (this.course) {
      this.enrollRequested.emit(this.course);
    }
  }
}
