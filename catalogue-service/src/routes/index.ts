import {Request, Response, Router} from 'express';

const router = Router();

const version = process.env.npm_package_version;

router.get('/', (req: Request, res: Response) => {
    res.json({
        version,
        endpoints: [
            "/films"
        ]
    });
});

// Export the base-router
export default router;
