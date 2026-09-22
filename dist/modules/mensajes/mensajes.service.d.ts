import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';
export declare class MensajesService {
    private readonly repo;
    constructor(repo: Repository<Mensaje>);
    findAll(): Promise<Mensaje[]>;
    findConversacion(usuario1Id: number, usuario2Id: number): Promise<Mensaje[]>;
    findOne(id: number): Promise<Mensaje>;
    create(data: Partial<Mensaje>): Promise<Mensaje>;
    marcarComoLeido(id: number): Promise<Mensaje>;
    update(id: number, data: Partial<Mensaje>): Promise<Mensaje>;
    remove(id: number): Promise<void>;
}
