import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AulaFisica } from './entities/aula-fisica.entity';

@Injectable()
export class AulasFisicasService {
  constructor(
    @InjectRepository(AulaFisica)
    private readonly aulaFisicaRepository: Repository<AulaFisica>,
  ) {}

  async findAll(): Promise<AulaFisica[]> {
    return await this.aulaFisicaRepository.find({
      order: { nombre: 'ASC' },
    });
  }

  async findOne(id: number): Promise<AulaFisica> {
    const aula = await this.aulaFisicaRepository.findOneBy({ id });
    if (!aula) {
      throw new NotFoundException(`Aula física con ID ${id} no encontrada`);
    }
    return aula;
  }

  async create(data: Partial<AulaFisica>): Promise<AulaFisica> {
    const newAula = this.aulaFisicaRepository.create(data);
    return await this.aulaFisicaRepository.save(newAula);
  }

  async update(id: number, data: Partial<AulaFisica>): Promise<AulaFisica> {
    const aula = await this.findOne(id);
    Object.assign(aula, data);
    return await this.aulaFisicaRepository.save(aula);
  }

  async remove(id: number): Promise<void> {
    const aula = await this.findOne(id);
    await this.aulaFisicaRepository.remove(aula);
  }
}