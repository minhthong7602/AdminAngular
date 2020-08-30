import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastrService: NbToastrService) {}

  private showMessage(status: string, message: string) {
    const config = {
      status: status as NbComponentStatus,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    try {
      this.toastrService.show(message, '', config);
    } catch {
    }
  }

  public showSuccessMessage(message: string) {
    this.showMessage('success', message);
  }

  public showErrorMessage(message: string) {
    this.showMessage('danger', message);
  }
}
