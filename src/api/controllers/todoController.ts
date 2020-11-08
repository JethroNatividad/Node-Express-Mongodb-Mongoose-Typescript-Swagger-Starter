import { Request, Response } from 'express';
export const getTodos = (req: Request, res: Response) => {
  res.send({
    todos: [
      { id: 1, todo: 'Cook rice', completed: false },
      { id: 2, todo: 'Walk dog', completed: false },
    ],
  });
};
