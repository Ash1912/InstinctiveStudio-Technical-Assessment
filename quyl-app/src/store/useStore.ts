import create from "zustand";

interface Student {
  id: string;
  name: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: boolean;
}

interface Store {
  students: Student[];
  fetchStudents: () => void;
}

const useStore = create<Store>((set) => ({
  students: [],
  fetchStudents: async () => {
    const response = await fetch("/api/students");
    const data = await response.json();
    set({ students: data });
  },
}));

export default useStore;
