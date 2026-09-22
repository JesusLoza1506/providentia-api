import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoDocenteSeccionController } from './curso-docente-seccion.controller';
import { CursoDocenteSeccionService } from './curso-docente-seccion.service';
import { CursoDocenteSeccion } from './entities/curso-docente-seccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CursoDocenteSeccion])],
  controllers: [CursoDocenteSeccionController],
  providers: [CursoDocenteSeccionService],
  exports: [CursoDocenteSeccionService, TypeOrmModule],
})
export class CursoDocenteSeccionModule {}