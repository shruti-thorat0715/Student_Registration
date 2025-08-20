import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student, StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student: Student = {
    fullName: '',
    email: '',
    course: ''
  };

  constructor(private studentService: StudentService) {}

  onSubmit() {
    if (this.student.fullName && this.student.email && this.student.course) {
      this.studentService.addStudent(this.student).subscribe(() => {
        alert('Student registered successfully!');
        this.student = { fullName: '', email: '', course: '' }; // reset form
      });
    } else {
      alert('Please fill all fields.');
    }
  }
}
