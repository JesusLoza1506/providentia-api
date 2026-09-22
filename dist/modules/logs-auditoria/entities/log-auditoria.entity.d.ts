import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class LogAuditoria {
    id: number;
    usuarioId: number;
    usuario: Usuario;
    accion: string;
    entidadAfectada: string;
    entidadId: number;
    ipOrigen: string;
    fecha: Date;
    createdAt: Date;
    updatedAt: Date;
}
