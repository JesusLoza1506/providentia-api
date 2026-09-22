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
exports.SeccionesController = void 0;
const common_1 = require("@nestjs/common");
const secciones_service_1 = require("./secciones.service");
let SeccionesController = class SeccionesController {
    seccionesService;
    constructor(seccionesService) {
        this.seccionesService = seccionesService;
    }
    findAll() {
        return this.seccionesService.findAll();
    }
    findByGradoAndAnio(gradoId, anioEscolarId) {
        return this.seccionesService.findByGradoAndAnio(gradoId, anioEscolarId);
    }
    findByTutor(tutorDocenteId) {
        return this.seccionesService.findByTutor(tutorDocenteId);
    }
    findOne(id) {
        return this.seccionesService.findOne(id);
    }
    create(data) {
        return this.seccionesService.create(data);
    }
    update(id, data) {
        return this.seccionesService.update(id, data);
    }
    remove(id) {
        return this.seccionesService.remove(id);
    }
};
exports.SeccionesController = SeccionesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeccionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('grado/:gradoId/anio/:anioEscolarId'),
    __param(0, (0, common_1.Param)('gradoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('anioEscolarId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SeccionesController.prototype, "findByGradoAndAnio", null);
__decorate([
    (0, common_1.Get)('tutor/:tutorDocenteId'),
    __param(0, (0, common_1.Param)('tutorDocenteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeccionesController.prototype, "findByTutor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeccionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeccionesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SeccionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeccionesController.prototype, "remove", null);
exports.SeccionesController = SeccionesController = __decorate([
    (0, common_1.Controller)('secciones'),
    __metadata("design:paramtypes", [secciones_service_1.SeccionesService])
], SeccionesController);
//# sourceMappingURL=secciones.controller.js.map