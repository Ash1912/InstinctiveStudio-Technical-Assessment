import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStudents = async (req, res) => {
  const students = await prisma.user.findMany();
  res.json(students);
};

export const addStudent = async (req, res) => {
  const { name, cohort, courses, status } = req.body;
  const newStudent = await prisma.user.create({
    data: { name, cohort, courses, dateJoined: new Date(), lastLogin: new Date(), status },
  });
  res.json(newStudent);
};
