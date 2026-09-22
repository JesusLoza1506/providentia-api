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
exports.AniosEscolaresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const anio_escolar_entity_1 = require("./entities/anio-escolar.entity");
let AniosEscolaresService = class AniosEscolaresService {
    anioEscolarRepository;
    constructor(anioEscolarRepository) {
        this.anioEscolarRepository = anioEscolarRepository;
    }
    async findAll() {
        return await this.anioEscolarRepository.find({ order: { anio: 'DESC' } });
    }
    async findOne(id) {
        const anio = await this.anioEscolarRepository.findOneBy({ id });
        if (!anio) {
            throw new common_1.NotFoundException(`Año escolar con ID ${id} no encontrado`);
        }
        return anio;
    }
    async create(data) {
        const newAnio = this.anioEscolarRepository.create(data);
        return await this.anioEscolarRepository.save(newAnio);
    }
    async update(id, data) {
        const anio = await this.findOne(id);
        Object.assign(anio, data);
        return await this.anioEscolarRepository.save(anio);
    }
    async remove(id) {
        const anio = await this.findOne(id);
        await this.anioEscolarRepository.remove(anio);
    }
};
exports.AniosEscolaresService = AniosEscolaresService;
exports.AniosEscolaresService = AniosEscolaresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(anio_escolar_entity_1.AnioEscolar)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AniosEscolaresService);
//# sourceMappingURL=anios-escolares.service.js.map