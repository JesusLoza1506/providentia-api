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
exports.RespuestasEstudianteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const respuesta_estudiante_entity_1 = require("./entities/respuesta-estudiante.entity");
let RespuestasEstudianteService = class RespuestasEstudianteService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return await this.repo.find({
            relations: { examen: true, pregunta: true, estudiante: true },
        });
    }
    async findByExamenAndEstudiante(examenId, estudianteId) {
        return await this.repo.find({
            where: { examenId, estudianteId },
            relations: { pregunta: true },
        });
    }
    async findOne(id) {
        const item = await this.repo.findOne({
            where: { id },
            relations: { examen: true, pregunta: true, estudiante: true },
        });
        if (!item)
            throw new common_1.NotFoundException(`Respuesta de estudiante con ID ${id} no encontrada`);
        return item;
    }
    async create(data) {
        const newItem = this.repo.create(data);
        return await this.repo.save(newItem);
    }
    async saveBatch(respuestas) {
        const entities = this.repo.create(respuestas);
        return await this.repo.save(entities);
    }
    async update(id, data) {
        const item = await this.findOne(id);
        Object.assign(item, data);
        return await this.repo.save(item);
    }
    async remove(id) {
        const item = await this.findOne(id);
        await this.repo.remove(item);
    }
};
exports.RespuestasEstudianteService = RespuestasEstudianteService;
exports.RespuestasEstudianteService = RespuestasEstudianteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(respuesta_estudiante_entity_1.RespuestaEstudiante)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RespuestasEstudianteService);
//# sourceMappingURL=respuestas-estudiante.service.js.map