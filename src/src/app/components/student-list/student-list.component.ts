import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Needed for *ngFor, *ngIf, ngModel
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchTerm: string = '';
  selectedStudent: Student | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
      this.filteredStudents = data;
    });
  }

  searchStudents(): void {
    this.filteredStudents = this.students.filter(student =>
      student.fullName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  editStudent(student: Student): void {
    this.selectedStudent = { ...student }; // copy object
  }

  saveStudent(): void {
    if (this.selectedStudent && this.selectedStudent.id !== undefined) {
      this.studentService.updateStudent(this.selectedStudent.id, this.selectedStudent)
        .subscribe(() => {
          this.loadStudents();
          this.selectedStudent = null;
        });
    }
  }

  cancelEdit(): void {
    this.selectedStudent = null;
  }

 deleteStudent(id: number | undefined): void {
  if (!id) {
    alert("Invalid student ID.");
    return;
  }

  const confirmDelete = window.confirm("Are you sure you want to delete this student?");
  if (confirmDelete) {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
       this.loadStudents(); // refresh list
      }
      
    });
  }
}

refreshList(): void {
  this.loadStudents(); // reload data from backend
}

  
}
