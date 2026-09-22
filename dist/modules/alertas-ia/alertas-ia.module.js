"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertasIaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alerta_ia_entity_1 = require("./entities/alerta-ia.entity");
const alertas_ia_service_1 = require("./alertas-ia.service");
const alertas_ia_controller_1 = require("./alertas-ia.controller");
let AlertasIaModule = class AlertasIaModule {
};
exports.AlertasIaModule = AlertasIaModule;
exports.AlertasIaModule = AlertasIaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alerta_ia_entity_1.AlertaIa])],
        controllers: [alertas_ia_controller_1.AlertasIaController],
        providers: [alertas_ia_service_1.AlertasIaService],
        exports: [alertas_ia_service_1.AlertasIaService],
    })
], AlertasIaModule);
//# sourceMappingURL=alertas-ia.module.js.map