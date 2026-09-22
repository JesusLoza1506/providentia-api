"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeccionesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const secciones_controller_1 = require("./secciones.controller");
const secciones_service_1 = require("./secciones.service");
const seccion_entity_1 = require("./entities/seccion.entity");
let SeccionesModule = class SeccionesModule {
};
exports.SeccionesModule = SeccionesModule;
exports.SeccionesModule = SeccionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([seccion_entity_1.Seccion])],
        controllers: [secciones_controller_1.SeccionesController],
        providers: [secciones_service_1.SeccionesService],
        exports: [secciones_service_1.SeccionesService, typeorm_1.TypeOrmModule],
    })
], SeccionesModule);
//# sourceMappingURL=secciones.module.js.map