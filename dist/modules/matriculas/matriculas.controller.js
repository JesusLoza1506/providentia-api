"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculasController = void 0;
const common_1 = require("@nestjs/common");
const matriculas_service_1 = require("./matriculas.service");
let MatriculasController = class MatriculasController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findByEstudiante(estudianteId) {
        return this.service.findByEstudiante(estudianteId);
    }
    findBySeccion(seccionId, anioEscolarId) {
        const idAnio = anioEscolarId ? parseInt(anioEscolarId, 10) : undefined;
        return this.service.findBySeccion(seccionId, idAnio);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(id, data) {
        return this.service.update(id, data);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.MatriculasController = MatriculasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('estudiante/:estudianteId'),
    __param(0, (0, common_1.Param)('estudianteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findByEstudiante", null);
__decorate([
    (0, common_1.Get)('seccion/:seccionId'),
    __param(0, (0, common_1.Param)('seccionId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('anioEscolarId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findBySeccion", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "remove", null);
exports.MatriculasController = MatriculasController = __decorate([
    (0, common_1.Controller)('matriculas'),
    __metadata("design:paramtypes", [matriculas_service_1.MatriculasService])
], MatriculasController);
//# sourceMappingURL=matriculas.controller.js.map