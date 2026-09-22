import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AulasFisicasService } from './aulas-fisicas.service';
import { AulaFisica } from './entities/aula-fisica.entity';

@Controller('aulas-fisicas')
export class AulasFisicasController {
  constructor(private readonly aulasFisicasService: AulasFisicasService) {}

  @Get()
  findAll(): Promise<AulaFisica[]> {
    return this.aulasFisicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AulaFisica> {
    return this.aulasFisicasService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<AulaFisica>): Promise<AulaFisica> {
    return this.aulasFisicasService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<AulaFisica>,
  ): Promise<AulaFisica> {
    return this.aulasFisicasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.aulasFisicasService.remove(id);
  }
}