import { Repository } from 'typeorm';
import { Notificacion } from './entities/notificacion.entity';
export declare class NotificacionesService {
    private readonly repo;
    constructor(repo: Repository<Notificacion>);
    findAll(): Promise<Notificacion[]>;
    findByUsuario(usuarioId: number): Promise<Notificacion[]>;
    findOne(id: number): Promise<Notificacion>;
    create(data: Partial<Notificacion>): Promise<Notificacion>;
    marcarComoLeida(id: number): Promise<Notificacion>;
    update(id: number, data: Partial<Notificacion>): Promise<Notificacion>;
    remove(id: number): Promise<void>;
}
