import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documento } from './entities/documento.entity';

@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(Documento)
    private readonly repo: Repository<Documento>,
  ) {}

  async findAll(): Promise<Documento[]> {
    return await this.repo.find({ relations: { estudiante: true } });
  }

  async findByEstudiante(estudianteId: number): Promise<Documento[]> {
    return await this.repo.find({
      where: { estudianteId },
      relations: { estudiante: true },
      order: { fechaCarga: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Documento> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { estudiante: true },
    });
    if (!item) throw new NotFoundException(`Documento con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<Documento>): Promise<Documento> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Documento>): Promise<Documento> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}