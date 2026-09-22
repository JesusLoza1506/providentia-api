import { Foro } from '../../foros/entities/foro.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class ForoMensaje {
    id: number;
    foroId: number;
    foro: Foro;
    usuarioId: number;
    usuario: Usuario;
    mensajePadreId: number;
    mensajePadre: ForoMensaje;
    contenido: string;
    fecha: Date;
    createdAt: Date;
    updatedAt: Date;
}
