"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const examen_entity_1 = require("./entities/examen.entity");
const examenes_service_1 = require("./examenes.service");
const examenes_controller_1 = require("./examenes.controller");
let ExamenesModule = class ExamenesModule {
};
exports.ExamenesModule = ExamenesModule;
exports.ExamenesModule = ExamenesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([examen_entity_1.Examen])],
        controllers: [examenes_controller_1.ExamenesController],
        providers: [examenes_service_1.ExamenesService],
        exports: [examenes_service_1.ExamenesService],
    })
], ExamenesModule);
//# sourceMappingURL=examenes.module.js.map