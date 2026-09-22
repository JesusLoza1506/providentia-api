import { ConceptosPagoService } from './conceptos-pago.service';
import { ConceptoPago } from './entities/concepto-pago.entity';
export declare class ConceptosPagoController {
    private readonly conceptosPagoService;
    constructor(conceptosPagoService: ConceptosPagoService);
    findAll(): Promise<ConceptoPago[]>;
    findOne(id: number): Promise<ConceptoPago>;
    create(data: Partial<ConceptoPago>): Promise<ConceptoPago>;
    update(id: number, data: Partial<ConceptoPago>): Promise<ConceptoPago>;
    remove(id: number): Promise<void>;
}
