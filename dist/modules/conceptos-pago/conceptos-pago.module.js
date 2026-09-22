"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptosPagoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const conceptos_pago_controller_1 = require("./conceptos-pago.controller");
const conceptos_pago_service_1 = require("./conceptos-pago.service");
const concepto_pago_entity_1 = require("./entities/concepto-pago.entity");
let ConceptosPagoModule = class ConceptosPagoModule {
};
exports.ConceptosPagoModule = ConceptosPagoModule;
exports.ConceptosPagoModule = ConceptosPagoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([concepto_pago_entity_1.ConceptoPago])],
        controllers: [conceptos_pago_controller_1.ConceptosPagoController],
        providers: [conceptos_pago_service_1.ConceptosPagoService],
        exports: [conceptos_pago_service_1.ConceptosPagoService, typeorm_1.TypeOrmModule],
    })
], ConceptosPagoModule);
//# sourceMappingURL=conceptos-pago.module.js.map