import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';
export declare class Foro {
    id: number;
    cursoVirtualId: number;
    cursoVirtual: CursoVirtual;
    titulo: string;
    createdAt: Date;
    updatedAt: Date;
}
