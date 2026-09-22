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
exports.ApoderadosController = void 0;
const common_1 = require("@nestjs/common");
const apoderados_service_1 = require("./apoderados.service");
let ApoderadosController = class ApoderadosController {
    apoderadosService;
    constructor(apoderadosService) {
        this.apoderadosService = apoderadosService;
    }
    findAll() {
        return this.apoderadosService.findAll();
    }
    findOne(id) {
        return this.apoderadosService.findOne(id);
    }
    create(data) {
        return this.apoderadosService.create(data);
    }
    update(id, data) {
        return this.apoderadosService.update(id, data);
    }
    remove(id) {
        return this.apoderadosService.remove(id);
    }
};
exports.ApoderadosController = ApoderadosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApoderadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApoderadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApoderadosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ApoderadosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApoderadosController.prototype, "remove", null);
exports.ApoderadosController = ApoderadosController = __decorate([
    (0, common_1.Controller)('apoderados'),
    __metadata("design:paramtypes", [apoderados_service_1.ApoderadosService])
], ApoderadosController);
//# sourceMappingURL=apoderados.controller.js.map