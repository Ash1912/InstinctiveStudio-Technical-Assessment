import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.user.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

export const addStudent = async (req: Request, res: Response) => {
  try {
    const { name, cohort, courses, status } = req.body;
    const newStudent = await prisma.user.create({
      data: {
        name,
        cohort,
        courses,
        dateJoined: new Date(),
        lastLogin: new Date(),
        status,
      },
    });
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: "Failed to add student" });
  }
};
