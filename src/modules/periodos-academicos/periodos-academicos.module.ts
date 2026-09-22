import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodosAcademicosController } from './periodos-academicos.controller';
import { PeriodosAcademicosService } from './periodos-academicos.service';
import { PeriodoAcademico } from './entities/periodo-academico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodoAcademico])],
  controllers: [PeriodosAcademicosController],
  providers: [PeriodosAcademicosService],
  exports: [PeriodosAcademicosService, TypeOrmModule],
})
export class PeriodosAcademicosModule {}