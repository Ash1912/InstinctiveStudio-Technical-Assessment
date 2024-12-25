import React, { useEffect } from "react";
import useStore from "../store/useStore";

const StudentList = () => {
  const { students, fetchStudents } = useStore();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <table className="w-full border-collapse mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Student Name</th>
          <th className="p-2">Cohort</th>
          <th className="p-2">Courses</th>
          <th className="p-2">Date Joined</th>
          <th className="p-2">Last Login</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className="text-center">
            <td className="p-2">{student.name}</td>
            <td className="p-2">{student.cohort}</td>
            <td className="p-2">{student.courses.join(", ")}</td>
            <td className="p-2">{student.dateJoined}</td>
            <td className="p-2">{student.lastLogin}</td>
            <td className="p-2">
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  student.status ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
