"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NivelesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const niveles_controller_1 = require("./niveles.controller");
const niveles_service_1 = require("./niveles.service");
const nivel_entity_1 = require("./entities/nivel.entity");
let NivelesModule = class NivelesModule {
};
exports.NivelesModule = NivelesModule;
exports.NivelesModule = NivelesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nivel_entity_1.Nivel])],
        controllers: [niveles_controller_1.NivelesController],
        providers: [niveles_service_1.NivelesService],
        exports: [niveles_service_1.NivelesService, typeorm_1.TypeOrmModule],
    })
], NivelesModule);
//# sourceMappingURL=niveles.module.js.map