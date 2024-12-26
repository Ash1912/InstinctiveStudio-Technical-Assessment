import React from 'react';

interface Student {
  id: string;
  name: string;
  cohort: string;
  status: string;
}

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Cohort</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.cohort}</td>
            <td>{student.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
