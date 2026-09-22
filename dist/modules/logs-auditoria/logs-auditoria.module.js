"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAuditoriaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const log_auditoria_entity_1 = require("./entities/log-auditoria.entity");
const logs_auditoria_service_1 = require("./logs-auditoria.service");
const logs_auditoria_controller_1 = require("./logs-auditoria.controller");
let LogsAuditoriaModule = class LogsAuditoriaModule {
};
exports.LogsAuditoriaModule = LogsAuditoriaModule;
exports.LogsAuditoriaModule = LogsAuditoriaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([log_auditoria_entity_1.LogAuditoria])],
        controllers: [logs_auditoria_controller_1.LogsAuditoriaController],
        providers: [logs_auditoria_service_1.LogsAuditoriaService],
        exports: [logs_auditoria_service_1.LogsAuditoriaService],
    })
], LogsAuditoriaModule);
//# sourceMappingURL=logs-auditoria.module.js.map