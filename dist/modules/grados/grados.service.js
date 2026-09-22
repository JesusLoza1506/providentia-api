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
exports.GradosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const grado_entity_1 = require("./entities/grado.entity");
let GradosService = class GradosService {
    gradoRepository;
    constructor(gradoRepository) {
        this.gradoRepository = gradoRepository;
    }
    async findAll() {
        return await this.gradoRepository.find({
            relations: { nivel: true },
            order: { numeroOrden: 'ASC' },
        });
    }
    async findByNivel(nivelId) {
        return await this.gradoRepository.find({
            where: { nivelId },
            relations: { nivel: true },
            order: { numeroOrden: 'ASC' },
        });
    }
    async findOne(id) {
        const grado = await this.gradoRepository.findOne({
            where: { id },
            relations: { nivel: true },
        });
        if (!grado) {
            throw new common_1.NotFoundException(`Grado con ID ${id} no encontrado`);
        }
        return grado;
    }
    async create(data) {
        const newGrado = this.gradoRepository.create(data);
        return await this.gradoRepository.save(newGrado);
    }
    async update(id, data) {
        const grado = await this.findOne(id);
        Object.assign(grado, data);
        return await this.gradoRepository.save(grado);
    }
    async remove(id) {
        const grado = await this.findOne(id);
        await this.gradoRepository.remove(grado);
    }
};
exports.GradosService = GradosService;
exports.GradosService = GradosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grado_entity_1.Grado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GradosService);
//# sourceMappingURL=grados.service.js.map