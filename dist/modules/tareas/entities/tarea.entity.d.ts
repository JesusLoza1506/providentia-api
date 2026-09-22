import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';
export declare class Tarea {
    id: number;
    cursoVirtualId: number;
    cursoVirtual: CursoVirtual;
    titulo: string;
    descripcion: string;
    fechaEntrega: Date;
    puntajeMaximo: number;
    createdAt: Date;
    updatedAt: Date;
}
