"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AniosEscolaresModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const anios_escolares_controller_1 = require("./anios-escolares.controller");
const anios_escolares_service_1 = require("./anios-escolares.service");
const anio_escolar_entity_1 = require("./entities/anio-escolar.entity");
let AniosEscolaresModule = class AniosEscolaresModule {
};
exports.AniosEscolaresModule = AniosEscolaresModule;
exports.AniosEscolaresModule = AniosEscolaresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([anio_escolar_entity_1.AnioEscolar])],
        controllers: [anios_escolares_controller_1.AniosEscolaresController],
        providers: [anios_escolares_service_1.AniosEscolaresService],
        exports: [anios_escolares_service_1.AniosEscolaresService, typeorm_1.TypeOrmModule],
    })
], AniosEscolaresModule);
//# sourceMappingURL=anios-escolares.module.js.map