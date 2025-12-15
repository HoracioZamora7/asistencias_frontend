import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  logError(error: any):void {
    console.error('[LOG] Global error: ', error);
  }
  logHTTPError(error: any):void {
    console.log('[LOG] HTTP error: ', {
      message: error.message,
      status: error.status,
      url: error.url
    })
  }
}
