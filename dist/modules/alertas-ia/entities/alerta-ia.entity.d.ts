import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class AlertaIa {
    id: number;
    estudianteId: number;
    estudiante: Estudiante;
    tipo: string;
    descripcion: string;
    nivelSeveridad: string;
    fechaGeneracion: Date;
    atendidoPorId: number;
    atendidoPor: Usuario;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
}
