import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  providers: [ConfirmationService]
})
export class EmployeeDetailComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;

  msgs: Message[] = [];

  position: string;

  modalRef: BsModalRef;
  message: string;
  selectedId: number;

  @Input() employee;
  @Input() selectEmploye;

  @Output() selectedEmployee = new EventEmitter<number>();
  @Output() unselectedEmployee = new EventEmitter<number>();
  @Output() deleteEmployee = new EventEmitter<number>();

  constructor(private modalService: BsModalService,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  selectEmployee(id) {
    this.selectedEmployee.emit(id);
  }

  unselect(id) {
    this.unselectedEmployee.emit(id);
  }

  isDisabled(id) {
    return this.selectEmploye.some(s => s.id === id);
  }

  // deleteEmployeee(id, template: TemplateRef<any>) {
  //   this.selectedId = id;
  //   this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  // }

  confirm(id): void {
    this.unselect(id);
    this.deleteEmployee.emit(id);
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  deleteEmployeee(id) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.unselect(id);
        this.deleteEmployee.emit(id);
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
