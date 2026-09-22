import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apoderado } from './entities/apoderado.entity';

@Injectable()
export class ApoderadosService {
  constructor(
    @InjectRepository(Apoderado)
    private readonly apoderadoRepository: Repository<Apoderado>,
  ) {}

  async findAll(): Promise<Apoderado[]> {
    return await this.apoderadoRepository.find({
      relations: { persona: true, usuario: true },
    });
  }

  async findOne(id: number): Promise<Apoderado> {
    const apoderado = await this.apoderadoRepository.findOne({
      where: { id },
      relations: { persona: true, usuario: true },
    });
    if (!apoderado) {
      throw new NotFoundException(`Apoderado con ID ${id} no encontrado`);
    }
    return apoderado;
  }

  async create(data: Partial<Apoderado>): Promise<Apoderado> {
    const newApoderado = this.apoderadoRepository.create(data);
    return await this.apoderadoRepository.save(newApoderado);
  }

  async update(id: number, data: Partial<Apoderado>): Promise<Apoderado> {
    const apoderado = await this.findOne(id);
    Object.assign(apoderado, data);
    return await this.apoderadoRepository.save(apoderado);
  }

  async remove(id: number): Promise<void> {
    const apoderado = await this.findOne(id);
    await this.apoderadoRepository.remove(apoderado);
  }
}