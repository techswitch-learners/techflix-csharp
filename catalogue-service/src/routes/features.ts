import {NextFunction, Request, Response, Router} from 'express';
import {createFeature, deleteFeature, getFeature, getFeatures, updateFeature} from "../services/featuresService";

const router = Router();

router.get("/", (request: Request, response: Response, next: NextFunction) => {
    getFeatures({page: parseInt(request.params.page) || 1, perPage: parseInt(request.params.perPage) || 10})
        .then(features => response.json(features))
        .catch(error => next(error));
});

router.get("/:id", (request: Request, response: Response, next: NextFunction) => {
    getFeature(parseInt(request.params.id!))
        .then(feature => response.json(feature))
        .catch(error => next(error));
});

router.post("/:id", (request: Request, response: Response, next: NextFunction) => {
    createFeature(parseInt(request.params.id!), request.body)
        .then(feature => response.json(feature))
        .catch(error => next(error));
});

router.put("/:id", (request: Request, response: Response, next: NextFunction) => {
    updateFeature(parseInt(request.params.id!), request.body)
        .then(feature => response.json(feature))
        .catch(error => next(error));
});

router.delete("/:id", (request: Request, response: Response, next: NextFunction) => {
    deleteFeature(parseInt(request.params.id!))
        .then(feature => response.json(feature))
        .catch(error => next(error));
});

export default router;