import { Pipe } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: 'safeHtml'})
export class HtmlSanitizerPipe {
  constructor(private sanitizer: DomSanitizer){}

  transform(test: string) {
    return this.sanitizer.bypassSecurityTrustHtml(test);
  }
}
