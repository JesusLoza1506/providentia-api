import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForoMensaje } from './entities/foro-mensaje.entity';

@Injectable()
export class ForoMensajesService {
  constructor(
    @InjectRepository(ForoMensaje)
    private readonly repo: Repository<ForoMensaje>,
  ) {}

  async findAll(): Promise<ForoMensaje[]> {
    return await this.repo.find({
      relations: { foro: true, usuario: true, mensajePadre: true },
    });
  }

  async findByForo(foroId: number): Promise<ForoMensaje[]> {
    return await this.repo.find({
      where: { foroId },
      relations: { usuario: true, mensajePadre: true },
      order: { fecha: 'ASC' },
    });
  }

  async findOne(id: number): Promise<ForoMensaje> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { foro: true, usuario: true, mensajePadre: true },
    });
    if (!item) throw new NotFoundException(`Mensaje de foro con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<ForoMensaje>): Promise<ForoMensaje> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<ForoMensaje>): Promise<ForoMensaje> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}