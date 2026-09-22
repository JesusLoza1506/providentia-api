import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnioEscolar } from './entities/anio-escolar.entity';

@Injectable()
export class AniosEscolaresService {
  constructor(
    @InjectRepository(AnioEscolar)
    private readonly anioEscolarRepository: Repository<AnioEscolar>,
  ) {}

  async findAll(): Promise<AnioEscolar[]> {
    return await this.anioEscolarRepository.find({ order: { anio: 'DESC' } });
  }

  async findOne(id: number): Promise<AnioEscolar> {
    const anio = await this.anioEscolarRepository.findOneBy({ id });
    if (!anio) {
      throw new NotFoundException(`Año escolar con ID ${id} no encontrado`);
    }
    return anio;
  }

  async create(data: Partial<AnioEscolar>): Promise<AnioEscolar> {
    const newAnio = this.anioEscolarRepository.create(data);
    return await this.anioEscolarRepository.save(newAnio);
  }

  async update(id: number, data: Partial<AnioEscolar>): Promise<AnioEscolar> {
    const anio = await this.findOne(id);
    Object.assign(anio, data);
    return await this.anioEscolarRepository.save(anio);
  }

  async remove(id: number): Promise<void> {
    const anio = await this.findOne(id);
    await this.anioEscolarRepository.remove(anio);
  }
}