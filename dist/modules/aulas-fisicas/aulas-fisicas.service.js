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
exports.AulasFisicasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aula_fisica_entity_1 = require("./entities/aula-fisica.entity");
let AulasFisicasService = class AulasFisicasService {
    aulaFisicaRepository;
    constructor(aulaFisicaRepository) {
        this.aulaFisicaRepository = aulaFisicaRepository;
    }
    async findAll() {
        return await this.aulaFisicaRepository.find({
            order: { nombre: 'ASC' },
        });
    }
    async findOne(id) {
        const aula = await this.aulaFisicaRepository.findOneBy({ id });
        if (!aula) {
            throw new common_1.NotFoundException(`Aula física con ID ${id} no encontrada`);
        }
        return aula;
    }
    async create(data) {
        const newAula = this.aulaFisicaRepository.create(data);
        return await this.aulaFisicaRepository.save(newAula);
    }
    async update(id, data) {
        const aula = await this.findOne(id);
        Object.assign(aula, data);
        return await this.aulaFisicaRepository.save(aula);
    }
    async remove(id) {
        const aula = await this.findOne(id);
        await this.aulaFisicaRepository.remove(aula);
    }
};
exports.AulasFisicasService = AulasFisicasService;
exports.AulasFisicasService = AulasFisicasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aula_fisica_entity_1.AulaFisica)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AulasFisicasService);
//# sourceMappingURL=aulas-fisicas.service.js.map