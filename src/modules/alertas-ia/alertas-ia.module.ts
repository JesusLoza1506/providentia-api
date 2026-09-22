import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlertaIa } from './entities/alerta-ia.entity';
import { AlertasIaService } from './alertas-ia.service';
import { AlertasIaController } from './alertas-ia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AlertaIa])],
  controllers: [AlertasIaController],
  providers: [AlertasIaService],
  exports: [AlertasIaService],
})
export class AlertasIaModule {}