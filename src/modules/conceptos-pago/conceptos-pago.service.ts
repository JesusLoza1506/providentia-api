import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConceptoPago } from './entities/concepto-pago.entity';

@Injectable()
export class ConceptosPagoService {
  constructor(
    @InjectRepository(ConceptoPago)
    private readonly conceptoPagoRepository: Repository<ConceptoPago>,
  ) {}

  async findAll(): Promise<ConceptoPago[]> {
    return await this.conceptoPagoRepository.find({
      order: { nombre: 'ASC' },
    });
  }

  async findOne(id: number): Promise<ConceptoPago> {
    const concepto = await this.conceptoPagoRepository.findOneBy({ id });
    if (!concepto) {
      throw new NotFoundException(`Concepto de pago con ID ${id} no encontrado`);
    }
    return concepto;
  }

  async create(data: Partial<ConceptoPago>): Promise<ConceptoPago> {
    const newConcepto = this.conceptoPagoRepository.create(data);
    return await this.conceptoPagoRepository.save(newConcepto);
  }

  async update(id: number, data: Partial<ConceptoPago>): Promise<ConceptoPago> {
    const concepto = await this.findOne(id);
    Object.assign(concepto, data);
    return await this.conceptoPagoRepository.save(concepto);
  }

  async remove(id: number): Promise<void> {
    const concepto = await this.findOne(id);
    await this.conceptoPagoRepository.remove(concepto);
  }
}