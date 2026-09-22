import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Mensaje {
    id: number;
    remitenteId: number;
    remitente: Usuario;
    destinatarioId: number;
    destinatario: Usuario;
    contenido: string;
    fecha: Date;
    leido: boolean;
    createdAt: Date;
    updatedAt: Date;
}
