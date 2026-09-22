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
exports.AulasFisicasController = void 0;
const common_1 = require("@nestjs/common");
const aulas_fisicas_service_1 = require("./aulas-fisicas.service");
let AulasFisicasController = class AulasFisicasController {
    aulasFisicasService;
    constructor(aulasFisicasService) {
        this.aulasFisicasService = aulasFisicasService;
    }
    findAll() {
        return this.aulasFisicasService.findAll();
    }
    findOne(id) {
        return this.aulasFisicasService.findOne(id);
    }
    create(data) {
        return this.aulasFisicasService.create(data);
    }
    update(id, data) {
        return this.aulasFisicasService.update(id, data);
    }
    remove(id) {
        return this.aulasFisicasService.remove(id);
    }
};
exports.AulasFisicasController = AulasFisicasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AulasFisicasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AulasFisicasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AulasFisicasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AulasFisicasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AulasFisicasController.prototype, "remove", null);
exports.AulasFisicasController = AulasFisicasController = __decorate([
    (0, common_1.Controller)('aulas-fisicas'),
    __metadata("design:paramtypes", [aulas_fisicas_service_1.AulasFisicasService])
], AulasFisicasController);
//# sourceMappingURL=aulas-fisicas.controller.js.map