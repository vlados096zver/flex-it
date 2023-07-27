import {Component, Output, EventEmitter, OnInit, OnDestroy, Type} from '@angular/core';
import {Subject} from "rxjs";
import {NotifyService} from "../../service/notify.service";
import { NOTIFY_TYPE } from '../../models/notify.model';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit, OnDestroy {

  NOTIFY_TYPE = NOTIFY_TYPE;

  @Output() closeModal = new EventEmitter<void>();
  isHidden = false;

  /** Функція для закриття попапу, що призначається із сервісу який ініціалізує попап */
  closeFn?: () => void;

  /** OnInit has fired */
  onModalClose = new Subject<void>();
  /** OnDestroy has fired */
  onModalOpen = new Subject<void>();

  component?: Type<any>;

  constructor(
    public readonly notifyService: NotifyService
  ) {
  }

  public ngOnInit(): void {
    this.onModalOpen.next();
    this.notifyService.close.subscribe(res => {
      if (this.closeFn) {
        this.closeFn();
        this.closeModal.emit();
      }
    });
  }

  public hiddenNotify(id: string): void {
    const notify = this.notifyService.notify.find((elem: any) => elem.id === id);
    if (notify) {
      notify['clear'] = true;
      setTimeout(() => {
        notify['hidden'] = true;
      }, 500)
      /*
        setTimeout(() => {
          this.notifyService.clear(id);
        }, 800)
       */
    }
  }

  public ngOnDestroy(): void {
    this.onModalClose.next();
    this.onModalClose.complete();
    this.onModalOpen.complete();
  }

}

