import Joi from "joi";
import { Request, Response, NextFunction } from 'express';

const EstudianteSchema = Joi.object({
  nom_e: Joi.string().required(),
  dir_e: Joi.string().required(),
  tel_e: Joi.number().required(),
  fech_nac: Joi.date().iso().required(),
});

const ProfesoresSchema = Joi.object({
  nom_p: Joi.string().required(),
  dir_p: Joi.string().required(),
  tel_p: Joi.number().required(),
  profecion: Joi.string().required(),
  fech_nac: Joi.date().iso().required(),
})

const AsignaturaSchema = Joi.object({
  nom_a: Joi.string().required(),
  int_h: Joi.number().required(),
  creditos: Joi.number().required(),
})


export const validateBodyEstudiantes = (req: Request, res: Response, next: NextFunction):void => {
  const { error } = EstudianteSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details });
    return; 
  }
  next();
};

export const validateBodyProfesores = (req: Request, res: Response, next: NextFunction):void => {
  const { error } = ProfesoresSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details });
    return; 
  }
  next();
};

export const validateBodyAsignaturas = (req: Request, res: Response, next: NextFunction):void => {
  const { error } = AsignaturaSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details });
    return; 
  }
  next();
};

