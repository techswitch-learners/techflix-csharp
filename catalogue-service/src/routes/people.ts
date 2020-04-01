import {Request, Response, Router} from 'express';
import { getPerson, getPeople } from '../services/peopleService';

const router = Router();

router.get("/", (request: Request, response: Response) => {
    getPeople()
        .then(people => response.json(people));
});

router.get("/:id", (request: Request, response: Response) => {
    getPerson(request.params.id)
        .then(person => response.json(person));
});

export default router;
