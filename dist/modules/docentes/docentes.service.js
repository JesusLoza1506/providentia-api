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
exports.DocentesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const docente_entity_1 = require("./entities/docente.entity");
let DocentesService = class DocentesService {
    docenteRepository;
    constructor(docenteRepository) {
        this.docenteRepository = docenteRepository;
    }
    async findAll() {
        return await this.docenteRepository.find({
            relations: { persona: true, usuario: true },
        });
    }
    async findOne(id) {
        const docente = await this.docenteRepository.findOne({
            where: { id },
            relations: { persona: true, usuario: true },
        });
        if (!docente) {
            throw new common_1.NotFoundException(`Docente con ID ${id} no encontrado`);
        }
        return docente;
    }
    async findByUsuario(usuarioId) {
        const docente = await this.docenteRepository.findOne({
            where: { usuarioId },
            relations: { persona: true, usuario: true },
        });
        if (!docente) {
            throw new common_1.NotFoundException(`Docente con ID de usuario ${usuarioId} no encontrado`);
        }
        return docente;
    }
    async create(data) {
        const newDocente = this.docenteRepository.create(data);
        return await this.docenteRepository.save(newDocente);
    }
    async update(id, data) {
        const docente = await this.findOne(id);
        Object.assign(docente, data);
        return await this.docenteRepository.save(docente);
    }
    async remove(id) {
        const docente = await this.findOne(id);
        await this.docenteRepository.remove(docente);
    }
};
exports.DocentesService = DocentesService;
exports.DocentesService = DocentesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docente_entity_1.Docente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocentesService);
//# sourceMappingURL=docentes.service.js.map