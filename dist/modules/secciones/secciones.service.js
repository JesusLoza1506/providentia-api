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
exports.SeccionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seccion_entity_1 = require("./entities/seccion.entity");
let SeccionesService = class SeccionesService {
    seccionRepository;
    constructor(seccionRepository) {
        this.seccionRepository = seccionRepository;
    }
    async findAll() {
        return await this.seccionRepository.find({
            relations: { grado: true, anioEscolar: true, tutorDocente: true },
        });
    }
    async findByGradoAndAnio(gradoId, anioEscolarId) {
        return await this.seccionRepository.find({
            where: { gradoId, anioEscolarId },
            relations: { tutorDocente: true },
            order: { nombre: 'ASC' },
        });
    }
    async findByTutor(tutorDocenteId) {
        return await this.seccionRepository.find({
            where: { tutorDocenteId },
            relations: { grado: true, anioEscolar: true },
        });
    }
    async findOne(id) {
        const seccion = await this.seccionRepository.findOne({
            where: { id },
            relations: { grado: true, anioEscolar: true, tutorDocente: true },
        });
        if (!seccion) {
            throw new common_1.NotFoundException(`Sección con ID ${id} no encontrada`);
        }
        return seccion;
    }
    async create(data) {
        const newSeccion = this.seccionRepository.create(data);
        return await this.seccionRepository.save(newSeccion);
    }
    async update(id, data) {
        const seccion = await this.findOne(id);
        Object.assign(seccion, data);
        return await this.seccionRepository.save(seccion);
    }
    async remove(id) {
        const seccion = await this.findOne(id);
        await this.seccionRepository.remove(seccion);
    }
};
exports.SeccionesService = SeccionesService;
exports.SeccionesService = SeccionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seccion_entity_1.Seccion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeccionesService);
//# sourceMappingURL=secciones.service.js.map