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
exports.DocentesController = void 0;
const common_1 = require("@nestjs/common");
const docentes_service_1 = require("./docentes.service");
let DocentesController = class DocentesController {
    docentesService;
    constructor(docentesService) {
        this.docentesService = docentesService;
    }
    findAll() {
        return this.docentesService.findAll();
    }
    findOne(id) {
        return this.docentesService.findOne(id);
    }
    findByUsuario(usuarioId) {
        return this.docentesService.findByUsuario(usuarioId);
    }
    create(data) {
        return this.docentesService.create(data);
    }
    update(id, data) {
        return this.docentesService.update(id, data);
    }
    remove(id) {
        return this.docentesService.remove(id);
    }
};
exports.DocentesController = DocentesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocentesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocentesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    __param(0, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocentesController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocentesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DocentesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocentesController.prototype, "remove", null);
exports.DocentesController = DocentesController = __decorate([
    (0, common_1.Controller)('docentes'),
    __metadata("design:paramtypes", [docentes_service_1.DocentesService])
], DocentesController);
//# sourceMappingURL=docentes.controller.js.map