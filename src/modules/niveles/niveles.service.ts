import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nivel } from './entities/nivel.entity';

@Injectable()
export class NivelesService {
  constructor(
    @InjectRepository(Nivel)
    private readonly nivelRepository: Repository<Nivel>,
  ) {}

  async findAll(): Promise<Nivel[]> {
    return await this.nivelRepository.find();
  }

  async findOne(id: number): Promise<Nivel> {
    const nivel = await this.nivelRepository.findOneBy({ id });
    if (!nivel) {
      throw new NotFoundException(`Nivel con ID ${id} no encontrado`);
    }
    return nivel;
  }

  async create(data: Partial<Nivel>): Promise<Nivel> {
    const newNivel = this.nivelRepository.create(data);
    return await this.nivelRepository.save(newNivel);
  }

  async update(id: number, data: Partial<Nivel>): Promise<Nivel> {
    const nivel = await this.findOne(id);
    Object.assign(nivel, data);
    return await this.nivelRepository.save(nivel);
  }

  async remove(id: number): Promise<void> {
    const nivel = await this.findOne(id);
    await this.nivelRepository.remove(nivel);
  }
}