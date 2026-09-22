import { ChatIaHistorialService } from './chat-ia-historial.service';
import { ChatIaHistorial } from './entities/chat-ia-historial.entity';
export declare class ChatIaHistorialController {
    private readonly service;
    constructor(service: ChatIaHistorialService);
    findAll(): Promise<ChatIaHistorial[]>;
    findByUsuario(usuarioId: number): Promise<ChatIaHistorial[]>;
    findOne(id: number): Promise<ChatIaHistorial>;
    create(data: Partial<ChatIaHistorial>): Promise<ChatIaHistorial>;
    remove(id: number): Promise<void>;
}
