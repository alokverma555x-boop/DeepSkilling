import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name in h4', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    fixture.detectChanges();
    const h4Debug = fixture.debugElement.query(By.css('h4'));
    expect(h4Debug.nativeElement.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested on button click', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');

    const btnDebug = fixture.debugElement.query(By.css('button'));
    btnDebug.nativeElement.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });
});