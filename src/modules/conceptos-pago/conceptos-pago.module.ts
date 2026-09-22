import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptosPagoController } from './conceptos-pago.controller';
import { ConceptosPagoService } from './conceptos-pago.service';
import { ConceptoPago } from './entities/concepto-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptoPago])],
  controllers: [ConceptosPagoController],
  providers: [ConceptosPagoService],
  exports: [ConceptosPagoService, TypeOrmModule],
})
export class ConceptosPagoModule {}