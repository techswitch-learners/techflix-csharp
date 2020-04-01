import {Request, Response, Router} from 'express';
import { getFilm, getFilms } from '../services/filmsService';

const router = Router();

router.get("/", (request: Request, response: Response) => {
   getFilms()
      .then(films => response.json(films));
});

router.get("/:id", (request: Request, response: Response) => {
   getFilm(request.params.id)
      .then(film => response.json(film));
});

export default router;