import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AulasFisicasController } from './aulas-fisicas.controller';
import { AulasFisicasService } from './aulas-fisicas.service';
import { AulaFisica } from './entities/aula-fisica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AulaFisica])],
  controllers: [AulasFisicasController],
  providers: [AulasFisicasService],
  exports: [AulasFisicasService, TypeOrmModule],
})
export class AulasFisicasModule {}