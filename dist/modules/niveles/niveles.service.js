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
exports.NivelesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nivel_entity_1 = require("./entities/nivel.entity");
let NivelesService = class NivelesService {
    nivelRepository;
    constructor(nivelRepository) {
        this.nivelRepository = nivelRepository;
    }
    async findAll() {
        return await this.nivelRepository.find();
    }
    async findOne(id) {
        const nivel = await this.nivelRepository.findOneBy({ id });
        if (!nivel) {
            throw new common_1.NotFoundException(`Nivel con ID ${id} no encontrado`);
        }
        return nivel;
    }
    async create(data) {
        const newNivel = this.nivelRepository.create(data);
        return await this.nivelRepository.save(newNivel);
    }
    async update(id, data) {
        const nivel = await this.findOne(id);
        Object.assign(nivel, data);
        return await this.nivelRepository.save(nivel);
    }
    async remove(id) {
        const nivel = await this.findOne(id);
        await this.nivelRepository.remove(nivel);
    }
};
exports.NivelesService = NivelesService;
exports.NivelesService = NivelesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nivel_entity_1.Nivel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NivelesService);
//# sourceMappingURL=niveles.service.js.map