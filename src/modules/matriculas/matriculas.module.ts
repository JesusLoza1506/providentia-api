import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculasController } from './matriculas.controller';
import { MatriculasService } from './matriculas.service';
import { Matricula } from './entities/matricula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matricula])],
  controllers: [MatriculasController],
  providers: [MatriculasService],
  exports: [MatriculasService, TypeOrmModule],
})
export class MatriculasModule {}