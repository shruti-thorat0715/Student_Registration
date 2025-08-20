export interface Student {
  id?: number;        // optional because when creating a new student, ID may not exist yet
  fullName: string;
  email: string;
  course: string;
}
