import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Notificacion {
    id: number;
    usuarioId: number;
    usuario: Usuario;
    tipo: string;
    contenido: string;
    enlace: string;
    leido: boolean;
    fecha: Date;
    createdAt: Date;
    updatedAt: Date;
}
