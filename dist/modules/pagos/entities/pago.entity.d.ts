import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { ConceptoPago } from '../../conceptos-pago/entities/concepto-pago.entity';
import { AnioEscolar } from '../../anios-escolares/entities/anio-escolar.entity';
export declare class Pago {
    id: number;
    estudianteId: number;
    estudiante: Estudiante;
    conceptoPagoId: number;
    conceptoPago: ConceptoPago;
    anioEscolarId: number;
    anioEscolar: AnioEscolar;
    mesReferencia: number;
    monto: number;
    fechaVencimiento: Date;
    estado: string;
    fechaPago: Date;
    referenciaPasarela: string;
    createdAt: Date;
    updatedAt: Date;
}
