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
exports.GradosController = void 0;
const common_1 = require("@nestjs/common");
const grados_service_1 = require("./grados.service");
let GradosController = class GradosController {
    gradosService;
    constructor(gradosService) {
        this.gradosService = gradosService;
    }
    findAll() {
        return this.gradosService.findAll();
    }
    findByNivel(nivelId) {
        return this.gradosService.findByNivel(nivelId);
    }
    findOne(id) {
        return this.gradosService.findOne(id);
    }
    create(data) {
        return this.gradosService.create(data);
    }
    update(id, data) {
        return this.gradosService.update(id, data);
    }
    remove(id) {
        return this.gradosService.remove(id);
    }
};
exports.GradosController = GradosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GradosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('nivel/:nivelId'),
    __param(0, (0, common_1.Param)('nivelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GradosController.prototype, "findByNivel", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GradosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GradosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GradosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GradosController.prototype, "remove", null);
exports.GradosController = GradosController = __decorate([
    (0, common_1.Controller)('grados'),
    __metadata("design:paramtypes", [grados_service_1.GradosService])
], GradosController);
//# sourceMappingURL=grados.controller.js.map