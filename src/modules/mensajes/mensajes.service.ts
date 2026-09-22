import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly repo: Repository<Mensaje>,
  ) {}

  async findAll(): Promise<Mensaje[]> {
    return await this.repo.find({
      relations: { remitente: true, destinatario: true },
      order: { fecha: 'DESC' },
    });
  }

  async findConversacion(usuario1Id: number, usuario2Id: number): Promise<Mensaje[]> {
    return await this.repo.find({
      where: [
        { remitenteId: usuario1Id, destinatarioId: usuario2Id },
        { remitenteId: usuario2Id, destinatarioId: usuario1Id },
      ],
      relations: { remitente: true, destinatario: true },
      order: { fecha: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Mensaje> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { remitente: true, destinatario: true },
    });
    if (!item) throw new NotFoundException(`Mensaje con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<Mensaje>): Promise<Mensaje> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async marcarComoLeido(id: number): Promise<Mensaje> {
    const item = await this.findOne(id);
    item.leido = true;
    return await this.repo.save(item);
  }

  async update(id: number, data: Partial<Mensaje>): Promise<Mensaje> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}