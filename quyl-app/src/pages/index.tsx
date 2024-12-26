import React, { useEffect } from 'react';
import useStore from '../store/useStore';
import StudentList from '../components/StudentList';

const IndexPage: React.FC = () => {
  const { students, fetchStudents } = useStore();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Student Dashboard</h1>
      <StudentList students={students} />
    </div>
  );
};

export default IndexPage;
