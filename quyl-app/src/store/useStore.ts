import { create } from 'zustand';

interface Student {
  id: string;
  name: string;
  cohort: string;
  status: string;
}

interface Store {
  students: Student[];
  fetchStudents: () => Promise<void>;
}

const useStore = create<Store>((set) => ({
  students: [],
  fetchStudents: async () => {
    const response = await fetch("/api/students");
    const students = await response.json();
    set({ students });
  },
}));

export default useStore;
