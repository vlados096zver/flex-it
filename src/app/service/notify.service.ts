import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {ComponentPortal, DomPortalOutlet} from "@angular/cdk/portal";
import {CLEAR_TIMER, NOTIFY_LIST, NOTIFY_TIMER, NOTIFY_TYPE, NotifyChange, NotifyItem} from "../models/notify.model";
import { v4 as uuidv4 } from 'uuid';
import {Subject} from "rxjs";
import {NotifyComponent} from "../components/notify/notify.component";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private modalPortal?: ComponentPortal <NotifyComponent>;
  private bodyPortalHost?: DomPortalOutlet;
  public close = new Subject();

  public notify: NotifyItem[] = [];

  private MESSAGE_TIMER_MS = NOTIFY_TIMER;

  constructor(
    private readonly cfr: ComponentFactoryResolver,
    private readonly appRef: ApplicationRef,
    private readonly injector: Injector,
  ) {}

  public loader(message: string, timer: boolean = false, title: string = NOTIFY_LIST[NOTIFY_TYPE.LOADER]): string {
    const id = this.notifyAdd(message, title, NOTIFY_TYPE.LOADER);
    if (timer) {
      this.setTimer(id);
    }
    return id;
  }

  public info(message: string, timer: boolean = false, title: string = NOTIFY_LIST[NOTIFY_TYPE.INFO]): string {
    const id = this.notifyAdd(message, title, NOTIFY_TYPE.INFO);
    if (timer) {
      this.setTimer(id);
    }
    return id;
  }

  public err(message: string, timer: boolean = false, title: string = NOTIFY_LIST[NOTIFY_TYPE.ERROR]): string {
    const id = this.notifyAdd(message, title, NOTIFY_TYPE.ERROR);
    if (timer) {
      this.setTimer(id);
    }
    return id;
  }

  public success(message: string, timer: boolean = false, title: string = NOTIFY_LIST[NOTIFY_TYPE.SUCCESS]): string {
    const id = this.notifyAdd(message, title, NOTIFY_TYPE.SUCCESS);
    if (timer) {
      this.setTimer(id);
    }
    return id;
  }

  public changeInformation(id: string, values: NotifyChange) {
    const index: number = this.notify.findIndex(elem => elem.id === id);
    if (index > -1) {
      const data = {
        ...this.notify[index],
        ...values,
        id
      }
      this.notify.splice(index, 1, data)
    }
  }

  private notifyAdd(message: string, title: string, type: NOTIFY_TYPE): string {
    if (this.notify.length === 0) {
      this.openPopupContainer();
    }
    const id = uuidv4();
    this.notify.unshift({
      id,
      title,
      message,
      type
    });
    return id;
  }

  public setTimer(id: string): void {
    setTimeout(() => {
      const notify: NotifyItem | undefined = this.notify.find((elem: any) => elem.id === id);
      if (notify) {
        notify['clear'] = true;
        setTimeout(() => {
          notify['hidden'] = true;
        }, CLEAR_TIMER - 1500)
        setTimeout(() => {
          this.clear(id);
        }, CLEAR_TIMER - 1200)
      }
    }, this.MESSAGE_TIMER_MS);
  }

  public clear(id: string): void {
    setTimeout(() => {
      const index = this.notify.findIndex((elem: any) => elem.id === id);
      if (index > -1) {
        this.notify.splice(index, 1);
        if (this.notify.length === 0) {
          this.close.next(false);
        }
      }
    }, CLEAR_TIMER);
  }

  public clearAll() {
    this.notify = [];
    this.close.next(false);
  }

  private openPopupContainer(): any {
    this.modalPortal = new ComponentPortal(
      NotifyComponent,
      undefined,
    );
    this.bodyPortalHost = new DomPortalOutlet(
      document.body,
      this.cfr,
      this.appRef,
      this.injector,
    );
    const dialogRef = this.bodyPortalHost.attach(this.modalPortal);
    (dialogRef.instance as NotifyComponent).closeFn = () =>
      dialogRef.destroy();
    return {
      onOpen: (dialogRef.instance as NotifyComponent).onModalOpen,
      onClose: (dialogRef.instance as NotifyComponent)
        .onModalClose,
      close: () => dialogRef.destroy(),
    };
  }
}
