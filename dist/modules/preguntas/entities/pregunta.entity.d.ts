import { Examen } from '../../examenes/entities/examen.entity';
export declare class Pregunta {
    id: number;
    examenId: number;
    examen: Examen;
    enunciado: string;
    tipo: string;
    opciones: any;
    respuestaCorrecta: string;
    puntaje: number;
    createdAt: Date;
    updatedAt: Date;
}
