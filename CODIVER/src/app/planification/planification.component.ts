import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Necesario para que funcione MatDatepicker
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; // Para autocompletado
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PDFDocument, rgb, StandardFonts} from 'pdf-lib';

@Component({
  selector: 'app-planification',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss'],
})

export class PlanificationComponent {

  expanded = false;

  tableData = Array.from({ length: 8 }, () => ({
    nombre: '',
    rut: '',
    empresa: '',
    firma: '',
  }));

  supervisorContratista: string = '';
  supervisorCamanchaca: string = '';
  fechaRevision: string = '';
  version: string = 'V.1';


  // Definir controles de formulario con valores predeterminados
  fechaControl = new FormControl(new Date()); // Fecha actual
  horaInicioControl = new FormControl('');
  horaTerminoControl = new FormControl('');
  nombreEmpresaControl = new FormControl('');
  nombreSupervisorControl = new FormControl('');
  nombreCentroTrabajoControl = new FormControl('');
  nombreJefeAsistenteControl = new FormControl('');
  identificacionTrabajoControl = new FormControl('');
  descripcionTrabajoControl = new FormControl('');
  pasoAPasoControl = new FormControl('');
  trabajoRutinarioControl = new FormControl()
  trabajoRutinarioSI = new FormControl();
  trabajoRutinarioNO = new FormControl();
  descripcionTrabajoRealizar = new FormControl();
  
  respuesta1Si: boolean = false;
  respuesta1No: boolean = false;
  justificacion1: string = '';
  controlesAdicionales1: string = '';

  respuesta2Si: boolean = false;
  respuesta2No: boolean = false;
  justificacion2: string = '';
  controlesAdicionales2: string = '';

  respuesta3Si: boolean = false;
  respuesta3No: boolean = false;
  justificacion3: string = '';
  controlesAdicionales3: string = '';

  respuesta4Si: boolean = false;
  respuesta4No: boolean = false;
  justificacion4: string = '';
  controlesAdicionales4: string = '';

  respuesta5Si: boolean = false;
  respuesta5No: boolean = false;
  justificacion5: string = '';
  controlesAdicionales5: string = '';

  respuesta6Si: boolean = false;
  respuesta6No: boolean = false;
  justificacion6: string = '';
  controlesAdicionales6: string = '';

  respuesta7Si: boolean = false;
  respuesta7No: boolean = false;
  justificacion7: string = '';
  controlesAdicionales7: string = '';

  respuesta8Si: boolean = false;
  respuesta8No: boolean = false;
  justificacion8: string = '';
  controlesAdicionales8: string = '';

  respuesta9Si: boolean = false;
  respuesta9No: boolean = false;
  justificacion9: string = '';
  controlesAdicionales9: string = '';

  respuesta10Si: boolean = false;
  respuesta10No: boolean = false;
  justificacion10: string = '';
  controlesAdicionales10: string = '';

  // trabajoRutinario = new FormControl(false);

  empresas = ['CODIVER', 'CAMANCHACA'];
  supervisores = ['Supervisor A', 'Supervisor B'];
  centrosTrabajo = ['Centro A', 'Centro B'];
  jefesAsistentes = ['Jefe A', 'Jefe B'];
  preguntas = [
    { texto: '¿Se cuenta y se anexa(n) listas de chequeo del estándares de riesgos críticos según lo solicitado en punto “C” anterior?', respuestaSi: false, respuestaNo: false, justificacion: '' },
    { texto: '¿Se ha realizado una evaluación de riesgos para este trabajo?', respuestaSi: false, respuestaNo: false, justificacion: '' },
    // Agrega más preguntas aquí
  ];

  togglePanels(): void {
    this.expanded = !this.expanded;
  }

  downloadDocument() {
    // Lógica para descargar el documento
    console.log('Descargando documento...');
  }




  async printDocument() {
    try {
      // Cargar el archivo PDF (asegúrate de tener el archivo en tu proyecto o una URL accesible)
      const existingPdfBytes = await fetch('/assets/plan-HPT.pdf').then(res => res.arrayBuffer());
  
      // Cargar el PDF en pdf-lib
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
      // Obtener la primera página
      const page = pdfDoc.getPage(0);
  
      // Especificar el texto y su posición
      const date = "24/03/2024";
      // const startHour = this.horaInicioControl.getRawValue();
      const startHour = "12:45";
      const x = 60; // Posición desde la izquierda
      const xStartHour = 210; // Posición desde la izquierda
      const y = page.getHeight() - 193; // pdf-lib usa coordenadas desde la esquina inferior izquierda
      const yStartHour = page.getHeight() - 193;
      // Incrustar la fuente Helvetica
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const customColor = rgb(3 / 255, 26 / 255, 128 / 255);

      // Agregar el texto a la página
      page.drawText(date, {
        x,
        y,
        size: 10, // Tamaño de fuente
        font, // Fuente incrustada
        color: customColor, // Color negro
      });

      page.drawText(startHour, {
        x: xStartHour,
        y: yStartHour,
        size: 10, // Tamaño de fuente
        font, // Fuente incrustada
        color: customColor, // Color negro
      });
  
  
      // Generar el nuevo PDF
      const pdfBytes = await pdfDoc.save();
  
      // Descargar el PDF
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'documento_actualizado.pdf';
      link.click();
  
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  }
}
