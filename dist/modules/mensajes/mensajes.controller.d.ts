import { MensajesService } from './mensajes.service';
import { Mensaje } from './entities/mensaje.entity';
export declare class MensajesController {
    private readonly service;
    constructor(service: MensajesService);
    findAll(): Promise<Mensaje[]>;
    findConversacion(usuarioAId: number, usuarioBId: number): Promise<Mensaje[]>;
    findOne(id: number): Promise<Mensaje>;
    create(data: Partial<Mensaje>): Promise<Mensaje>;
    marcarComoLeido(id: number): Promise<Mensaje>;
    update(id: number, data: Partial<Mensaje>): Promise<Mensaje>;
    remove(id: number): Promise<void>;
}
