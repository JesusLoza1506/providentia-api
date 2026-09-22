import { Nivel } from '../../niveles/entities/nivel.entity';
export declare class Curso {
    id: number;
    nombre: string;
    nivelId: number;
    nivel: Nivel;
    areaCurricular: string;
    createdAt: Date;
    updatedAt: Date;
}
