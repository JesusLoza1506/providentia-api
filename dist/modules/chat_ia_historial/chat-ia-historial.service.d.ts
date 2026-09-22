import { Repository } from 'typeorm';
import { ChatIaHistorial } from './entities/chat-ia-historial.entity';
export declare class ChatIaHistorialService {
    private readonly repo;
    constructor(repo: Repository<ChatIaHistorial>);
    findAll(): Promise<ChatIaHistorial[]>;
    findByUsuario(usuarioId: number): Promise<ChatIaHistorial[]>;
    findOne(id: number): Promise<ChatIaHistorial>;
    create(data: Partial<ChatIaHistorial>): Promise<ChatIaHistorial>;
    remove(id: number): Promise<void>;
}
