import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Competencia } from './entities/competencia.entity';

@Injectable()
export class CompetenciasService {
  constructor(
    @InjectRepository(Competencia)
    private readonly repo: Repository<Competencia>,
  ) {}

  async findAll(): Promise<Competencia[]> {
    return await this.repo.find({ relations: { curso: true } });
  }

  async findByCurso(cursoId: number): Promise<Competencia[]> {
    return await this.repo.find({
      where: { cursoId },
      relations: { curso: true },
    });
  }

  async findOne(id: number): Promise<Competencia> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { curso: true },
    });
    if (!item) {
      throw new NotFoundException(`Competencia con ID ${id} no encontrada`);
    }
    return item;
  }

  async create(data: Partial<Competencia>): Promise<Competencia> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Competencia>): Promise<Competencia> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}