import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JustificacionesController } from './justificaciones.controller';
import { JustificacionesService } from './justificaciones.service';
import { Justificacion } from './entities/justificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Justificacion])],
  controllers: [JustificacionesController],
  providers: [JustificacionesService],
  exports: [JustificacionesService, TypeOrmModule],
})
export class JustificacionesModule {}