import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ConceptosPagoService } from './conceptos-pago.service';
import { ConceptoPago } from './entities/concepto-pago.entity';

@Controller('conceptos-pago')
export class ConceptosPagoController {
  constructor(private readonly conceptosPagoService: ConceptosPagoService) {}

  @Get()
  findAll(): Promise<ConceptoPago[]> {
    return this.conceptosPagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ConceptoPago> {
    return this.conceptosPagoService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<ConceptoPago>): Promise<ConceptoPago> {
    return this.conceptosPagoService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<ConceptoPago>,
  ): Promise<ConceptoPago> {
    return this.conceptosPagoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.conceptosPagoService.remove(id);
  }
}