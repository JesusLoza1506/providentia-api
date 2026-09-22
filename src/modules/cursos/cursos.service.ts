import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private readonly repo: Repository<Curso>,
  ) {}

  async findAll(): Promise<Curso[]> {
    return await this.repo.find({
      relations: { nivel: true },
      order: { nombre: 'ASC' },
    });
  }

  async findByNivel(nivelId: number): Promise<Curso[]> {
    return await this.repo.find({
      where: { nivelId },
      relations: { nivel: true },
      order: { nombre: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Curso> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { nivel: true },
    });
    if (!item) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }
    return item;
  }

  async create(data: Partial<Curso>): Promise<Curso> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Curso>): Promise<Curso> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}