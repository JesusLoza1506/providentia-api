import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';
export declare class Material {
    id: number;
    cursoVirtualId: number;
    cursoVirtual: CursoVirtual;
    titulo: string;
    tipo: string;
    url: string;
    fechaPublicacion: Date;
    createdAt: Date;
    updatedAt: Date;
}
