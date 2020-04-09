import {NextFunction, Request, Response, Router} from 'express';
import {
    createPerson,
    deletePerson,
    getPerson,
    getPeople,
    updatePerson,
    actedIn,
    getFilms
} from "../services/peopleService";
import {linkSimilarFilms} from "../services/filmsService";

const router = Router();

router.get("/", (request: Request, response: Response, next: NextFunction) => {
    getPeople({page: parseInt(request.params.page) || 1, perPage: parseInt(request.params.perPage) || 10})
        .then(listResponse => response.json(listResponse))
        .catch(error => next(error));
});

router.get("/:id", (request: Request, response: Response, next: NextFunction) => {
    getPerson(parseInt(request.params.id!))
        .then(person => response.json(person))
        .catch(error => next(error));
});

router.post("/:id", (request: Request, response: Response, next: NextFunction) => {
    createPerson(parseInt(request.params.id!), request.body)
        .then(person => response.json(person))
        .catch(error => next(error));
});

router.put("/:id", (request: Request, response: Response, next: NextFunction) => {
    updatePerson(parseInt(request.params.id!), request.body)
        .then(person => response.json(person))
        .catch(error => next(error));
});

router.delete("/:id", (request: Request, response: Response, next: NextFunction) => {
    deletePerson(parseInt(request.params.id!))
        .then(person => response.json(person))
        .catch(error => next(error));
});

router.post("/:id/acted-in", (request: Request, response: Response, next: NextFunction) => {
    actedIn(parseInt(request.params.id!), request.body.filmId, request.body.character)
        .then(_ => response.sendStatus(200))
        .catch(error => next(error));
});

router.get("/:id/films", (request: Request, response: Response, next: NextFunction) => {
    getFilms(parseInt(request.params.id!))
        .then(performances => response.json(performances))
        .catch(error => next(error));
});

export default router;