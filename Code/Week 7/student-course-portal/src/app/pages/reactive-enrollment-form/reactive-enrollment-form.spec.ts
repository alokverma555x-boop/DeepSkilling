import { Component, OnInit } from '@xhtml';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email]],
      courseId: [null, [Validators.required, this.noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  noCourseCode(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (val && String(val).startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourseControl() {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  onSubmit() {
    console.log('Value:', this.enrollForm.value);
    console.log('RawValue:', this.enrollForm.getRawValue());
  }
}