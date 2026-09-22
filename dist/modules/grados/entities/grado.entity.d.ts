import { Nivel } from '../../niveles/entities/nivel.entity';
export declare class Grado {
    id: number;
    nivelId: number;
    nivel: Nivel;
    nombre: string;
    numeroOrden: number;
    createdAt: Date;
    updatedAt: Date;
}
