import { Request, Response } from 'express';
import CourseInfo from '../models/Course';

class CourseInfoController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      console.log(body);
      const data = await CourseInfo.create(body);
      res.status(201).json({ message: 'Course created successfully', data });
    } catch (error) {
      res.status(400).json({
        message: 'Course creation failed',
        error: (error as Error).message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const data = await CourseInfo.find();
      data.sort((a, b) => a.name.localeCompare(b.name));
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({
        message: 'Error Get failed',
        error: (error as Error).message,
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await CourseInfo.findById(id);
      if (!data) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({
        message: 'Error Get failed',
        error: (error as Error).message,
      });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await CourseInfo.findByIdAndUpdate(id, body, { new: true });
      if (!data) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json({ message: 'Course updated successfully', data });
    } catch (error) {
      res.status(400).json({
        message: 'Error Update failed',
        error: (error as Error).message,
      });
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await CourseInfo.findByIdAndDelete(id);
      if (!data) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json({ message: 'Course deleted successfully', data });
    } catch (error) {
      res.status(400).json({
        message: 'Error Delete failed',
        error: (error as Error).message,
      });
    }
  }
}

export default new CourseInfoController();
