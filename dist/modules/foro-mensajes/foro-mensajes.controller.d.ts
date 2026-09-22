import { ForoMensajesService } from './foro-mensajes.service';
import { ForoMensaje } from './entities/foro-mensaje.entity';
export declare class ForoMensajesController {
    private readonly service;
    constructor(service: ForoMensajesService);
    findAll(): Promise<ForoMensaje[]>;
    findByForo(foroId: number): Promise<ForoMensaje[]>;
    findOne(id: number): Promise<ForoMensaje>;
    create(data: Partial<ForoMensaje>): Promise<ForoMensaje>;
    update(id: number, data: Partial<ForoMensaje>): Promise<ForoMensaje>;
    remove(id: number): Promise<void>;
}
