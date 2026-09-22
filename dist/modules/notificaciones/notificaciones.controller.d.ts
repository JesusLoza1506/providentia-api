import { NotificacionesService } from './notificaciones.service';
import { Notificacion } from './entities/notificacion.entity';
export declare class NotificacionesController {
    private readonly service;
    constructor(service: NotificacionesService);
    findAll(): Promise<Notificacion[]>;
    findByUsuario(usuarioId: number): Promise<Notificacion[]>;
    findOne(id: number): Promise<Notificacion>;
    create(data: Partial<Notificacion>): Promise<Notificacion>;
    marcarComoLeida(id: number): Promise<Notificacion>;
    update(id: number, data: Partial<Notificacion>): Promise<Notificacion>;
    remove(id: number): Promise<void>;
}
