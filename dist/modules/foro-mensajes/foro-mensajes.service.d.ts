import { Repository } from 'typeorm';
import { ForoMensaje } from './entities/foro-mensaje.entity';
export declare class ForoMensajesService {
    private readonly repo;
    constructor(repo: Repository<ForoMensaje>);
    findAll(): Promise<ForoMensaje[]>;
    findByForo(foroId: number): Promise<ForoMensaje[]>;
    findOne(id: number): Promise<ForoMensaje>;
    create(data: Partial<ForoMensaje>): Promise<ForoMensaje>;
    update(id: number, data: Partial<ForoMensaje>): Promise<ForoMensaje>;
    remove(id: number): Promise<void>;
}
