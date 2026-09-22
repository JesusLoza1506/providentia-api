import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatIaHistorial } from './entities/chat-ia-historial.entity';

@Injectable()
export class ChatIaHistorialService {
  constructor(
    @InjectRepository(ChatIaHistorial)
    private readonly repo: Repository<ChatIaHistorial>,
  ) {}

  async findAll(): Promise<ChatIaHistorial[]> {
    return await this.repo.find({
      relations: { usuario: true, cursoVirtual: true },
      order: { fecha: 'ASC' },
    });
  }

  async findByUsuario(usuarioId: number): Promise<ChatIaHistorial[]> {
    return await this.repo.find({
      where: { usuarioId },
      relations: { cursoVirtual: true },
      order: { fecha: 'ASC' },
    });
  }

  async findOne(id: number): Promise<ChatIaHistorial> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { usuario: true, cursoVirtual: true },
    });
    if (!item) throw new NotFoundException(`Historial de chat IA con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<ChatIaHistorial>): Promise<ChatIaHistorial> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}