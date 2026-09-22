import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago)
    private readonly repo: Repository<Pago>,
  ) {}

  async findAll(): Promise<Pago[]> {
    return await this.repo.find({
      relations: { estudiante: true, conceptoPago: true, anioEscolar: true },
      order: { fechaVencimiento: 'ASC' },
    });
  }

  async findByEstudiante(estudianteId: number): Promise<Pago[]> {
    return await this.repo.find({
      where: { estudianteId },
      relations: { conceptoPago: true, anioEscolar: true },
      order: { fechaVencimiento: 'ASC' },
    });
  }

  async findByEstado(estado: string): Promise<Pago[]> {
    return await this.repo.find({
      where: { estado },
      relations: { estudiante: true, conceptoPago: true, anioEscolar: true },
      order: { fechaVencimiento: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Pago> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { estudiante: true, conceptoPago: true, anioEscolar: true },
    });
    if (!item) throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<Pago>): Promise<Pago> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Pago>): Promise<Pago> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}