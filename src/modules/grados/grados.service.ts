import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grado } from './entities/grado.entity';

@Injectable()
export class GradosService {
  constructor(
    @InjectRepository(Grado)
    private readonly gradoRepository: Repository<Grado>,
  ) {}

  async findAll(): Promise<Grado[]> {
    return await this.gradoRepository.find({
      relations: { nivel: true },
      order: { numeroOrden: 'ASC' },
    });
  }

  async findByNivel(nivelId: number): Promise<Grado[]> {
    return await this.gradoRepository.find({
      where: { nivelId },
      relations: { nivel: true },
      order: { numeroOrden: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Grado> {
    const grado = await this.gradoRepository.findOne({
      where: { id },
      relations: { nivel: true },
    });
    if (!grado) {
      throw new NotFoundException(`Grado con ID ${id} no encontrado`);
    }
    return grado;
  }

  async create(data: Partial<Grado>): Promise<Grado> {
    const newGrado = this.gradoRepository.create(data);
    return await this.gradoRepository.save(newGrado);
  }

  async update(id: number, data: Partial<Grado>): Promise<Grado> {
    const grado = await this.findOne(id);
    Object.assign(grado, data);
    return await this.gradoRepository.save(grado);
  }

  async remove(id: number): Promise<void> {
    const grado = await this.findOne(id);
    await this.gradoRepository.remove(grado);
  }
}