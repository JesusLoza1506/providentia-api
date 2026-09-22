"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosVirtualesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cursos_virtuales_controller_1 = require("./cursos-virtuales.controller");
const cursos_virtuales_service_1 = require("./cursos-virtuales.service");
const curso_virtual_entity_1 = require("./entities/curso-virtual.entity");
let CursosVirtualesModule = class CursosVirtualesModule {
};
exports.CursosVirtualesModule = CursosVirtualesModule;
exports.CursosVirtualesModule = CursosVirtualesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([curso_virtual_entity_1.CursoVirtual])],
        controllers: [cursos_virtuales_controller_1.CursosVirtualesController],
        providers: [cursos_virtuales_service_1.CursosVirtualesService],
        exports: [cursos_virtuales_service_1.CursosVirtualesService, typeorm_1.TypeOrmModule],
    })
], CursosVirtualesModule);
//# sourceMappingURL=cursos-virtuales.module.js.map