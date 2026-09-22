import { Curso } from '../../cursos/entities/curso.entity';
export declare class Competencia {
    id: number;
    cursoId: number;
    curso: Curso;
    nombre: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
}
