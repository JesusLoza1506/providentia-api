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
exports.NotasController = void 0;
const common_1 = require("@nestjs/common");
const notas_service_1 = require("./notas.service");
let NotasController = class NotasController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findByMatricula(matriculaId) {
        return this.service.findByMatricula(matriculaId);
    }
    findByCursoAndPeriodo(cursoId, periodoAcademicoId) {
        return this.service.findByCursoAndPeriodo(cursoId, periodoAcademicoId);
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
exports.NotasController = NotasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('matricula/:matriculaId'),
    __param(0, (0, common_1.Param)('matriculaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotasController.prototype, "findByMatricula", null);
__decorate([
    (0, common_1.Get)('curso/:cursoId/periodo/:periodoAcademicoId'),
    __param(0, (0, common_1.Param)('cursoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('periodoAcademicoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NotasController.prototype, "findByCursoAndPeriodo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], NotasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotasController.prototype, "remove", null);
exports.NotasController = NotasController = __decorate([
    (0, common_1.Controller)('notas'),
    __metadata("design:paramtypes", [notas_service_1.NotasService])
], NotasController);
//# sourceMappingURL=notas.controller.js.map