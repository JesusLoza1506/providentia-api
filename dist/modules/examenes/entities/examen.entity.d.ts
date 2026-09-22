import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';
export declare class Examen {
    id: number;
    cursoVirtualId: number;
    cursoVirtual: CursoVirtual;
    titulo: string;
    tipo: string;
    duracionMinutos: number;
    fechaDisponibleDesde: Date;
    fechaDisponibleHasta: Date;
    puntajeMaximo: number;
    createdAt: Date;
    updatedAt: Date;
}
