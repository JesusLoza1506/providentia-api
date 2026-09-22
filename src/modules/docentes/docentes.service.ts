import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from './entities/docente.entity';

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}

  async findAll(): Promise<Docente[]> {
    return await this.docenteRepository.find({
      relations: { persona: true, usuario: true },
    });
  }

  async findOne(id: number): Promise<Docente> {
    const docente = await this.docenteRepository.findOne({
      where: { id },
      relations: { persona: true, usuario: true },
    });
    if (!docente) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }
    return docente;
  }

  async findByUsuario(usuarioId: number): Promise<Docente> {
    const docente = await this.docenteRepository.findOne({
      where: { usuarioId },
      relations: { persona: true, usuario: true },
    });
    if (!docente) {
      throw new NotFoundException(`Docente con ID de usuario ${usuarioId} no encontrado`);
    }
    return docente;
  }

  async create(data: Partial<Docente>): Promise<Docente> {
    const newDocente = this.docenteRepository.create(data);
    return await this.docenteRepository.save(newDocente);
  }

  async update(id: number, data: Partial<Docente>): Promise<Docente> {
    const docente = await this.findOne(id);
    Object.assign(docente, data);
    return await this.docenteRepository.save(docente);
  }

  async remove(id: number): Promise<void> {
    const docente = await this.findOne(id);
    await this.docenteRepository.remove(docente);
  }
}