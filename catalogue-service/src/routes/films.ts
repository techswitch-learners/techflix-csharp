import {NextFunction, Request, Response, Router} from 'express';
import {
    createFilm,
    deleteFilm, 
    getCast,
    getFilm,
    getFilms,
    getSimilarFilms,
    linkSimilarFilms,
    updateFilm
} from "../services/filmsService";

const router = Router();

router.get("/", (request: Request, response: Response, next: NextFunction) => {
    getFilms({page: parseInt(request.params.page) || 1, perPage: parseInt(request.params.perPage) || 10})
        .then(listResponse => response.json(listResponse))
        .catch(error => next(error));
});

router.get("/:id", (request: Request, response: Response, next: NextFunction) => {
    getFilm(parseInt(request.params.id!))
        .then(film => response.json(film))
        .catch(error => next(error));
});

router.post("/:id", (request: Request, response: Response, next: NextFunction) => {
    createFilm(parseInt(request.params.id!), request.body)
        .then(film => response.json(film))
        .catch(error => next(error));
});

router.put("/:id", (request: Request, response: Response, next: NextFunction) => {
    updateFilm(parseInt(request.params.id!), request.body)
        .then(film => response.json(film))
        .catch(error => next(error));
});

router.delete("/:id", (request: Request, response: Response, next: NextFunction) => {
    deleteFilm(parseInt(request.params.id!))
        .then(film => response.json(film))
        .catch(error => next(error));
});

router.post("/:id/similar-to", (request: Request, response: Response, next: NextFunction) => {
    linkSimilarFilms(parseInt(request.params.id!), request.body.similarFilmId)
        .then(_ => response.sendStatus(200))
        .catch(error => next(error));
});

router.get("/:id/similar-to", (request: Request, response: Response, next: NextFunction) => {
    getSimilarFilms(parseInt(request.params.id!))
        .then(films => response.json(films))
        .catch(error => next(error));
});

router.get("/:id/cast", (request: Request, response: Response, next: NextFunction) => {
    getCast(parseInt(request.params.id!))
        .then(castList => response.json(castList))
        .catch(error => next(error));
});

export default router;