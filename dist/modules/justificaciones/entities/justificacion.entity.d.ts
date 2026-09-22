import { Asistencia } from '../../asistencias/entities/asistencia.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Justificacion {
    id: number;
    asistenciaId: number;
    asistencia: Asistencia;
    motivo: string;
    archivoUrl: string;
    estadoAprobacion: string;
    aprobadoPor: number;
    usuarioAprobador: Usuario;
    createdAt: Date;
    updatedAt: Date;
}
