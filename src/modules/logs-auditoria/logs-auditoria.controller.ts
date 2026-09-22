import { Controller, Get, Post, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { LogsAuditoriaService } from './logs-auditoria.service';
import { LogAuditoria } from './entities/log-auditoria.entity';

@Controller('logs-auditoria')
export class LogsAuditoriaController {
  constructor(private readonly service: LogsAuditoriaService) {}

  @Get()
  findAll(): Promise<LogAuditoria[]> {
    return this.service.findAll();
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<LogAuditoria[]> {
    return this.service.findByUsuario(usuarioId);
  }

  @Get('entidad/:entidadAfectada')
  findByEntidad(
    @Param('entidadAfectada') entidadAfectada: string,
    @Query('entidadId') entidadId?: string,
  ): Promise<LogAuditoria[]> {
    const id = entidadId ? parseInt(entidadId, 10) : undefined;
    return this.service.findByEntidad(entidadAfectada, id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<LogAuditoria> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<LogAuditoria>): Promise<LogAuditoria> {
    return this.service.create(data);
  }
}