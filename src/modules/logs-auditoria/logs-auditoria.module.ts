import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogAuditoria } from './entities/log-auditoria.entity';
import { LogsAuditoriaService } from './logs-auditoria.service';
import { LogsAuditoriaController } from './logs-auditoria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LogAuditoria])],
  controllers: [LogsAuditoriaController],
  providers: [LogsAuditoriaService],
  exports: [LogsAuditoriaService],
})
export class LogsAuditoriaModule {}