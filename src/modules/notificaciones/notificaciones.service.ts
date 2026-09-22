import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from './entities/notificacion.entity';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly repo: Repository<Notificacion>,
  ) {}

  async findAll(): Promise<Notificacion[]> {
    return await this.repo.find({
      relations: { usuario: true },
      order: { fecha: 'DESC' },
    });
  }

  async findByUsuario(usuarioId: number): Promise<Notificacion[]> {
    return await this.repo.find({
      where: { usuarioId },
      order: { fecha: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Notificacion> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { usuario: true },
    });
    if (!item) throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<Notificacion>): Promise<Notificacion> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async marcarComoLeida(id: number): Promise<Notificacion> {
    const item = await this.findOne(id);
    item.leido = true;
    return await this.repo.save(item);
  }

  async update(id: number, data: Partial<Notificacion>): Promise<Notificacion> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}