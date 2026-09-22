import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeccionesController } from './secciones.controller';
import { SeccionesService } from './secciones.service';
import { Seccion } from './entities/seccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seccion])],
  controllers: [SeccionesController],
  providers: [SeccionesService],
  exports: [SeccionesService, TypeOrmModule],
})
export class SeccionesModule {}