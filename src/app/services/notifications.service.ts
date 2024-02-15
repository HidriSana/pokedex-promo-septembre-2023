import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  
  constructor() {}

  showNotif() {
    
  }

  showDeletingNotif() {
    this.isDataDeleted = true;
    setTimeout(() => {
      this.isDataDeleted = false;
    }, 3000);
  }
}
