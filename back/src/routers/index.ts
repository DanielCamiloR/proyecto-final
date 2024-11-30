import {Router} from "express";
import routerEstudiante from "./estudianteRoutes";
import routerProfesor from "./profesoresRoutes"
import routerAsignatura from "./asignaturaRoutes"

const router = Router();

router.use('/api/',routerEstudiante);
router.use('/api/',routerProfesor);
router.use('/api/',routerAsignatura);

export default router;