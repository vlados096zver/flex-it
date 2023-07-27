import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceComponent } from './components/service/service.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AboutComponent } from './components/about/about.component';
import { WhyComponent } from './components/why/why.component';
import {ScrollDirective} from "./directives/scroll.directive";
import { NumberComponent } from './components/number/number.component';
import {EffectDirective} from "./directives/effect.directive";
import { ClientComponent } from './components/client/client.component';
import {SwiperModule} from "swiper/angular";
import { PlanComponent } from './components/plan/plan.component';
import { TestmonialsComponent } from './components/testmonials/testmonials.component';
import {HttpClientModule} from "@angular/common/http";
import { FaqComponent } from './components/faq/faq.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {NumberDirective} from "./directives/number.directive";
import {InputTextareaComponent} from "./components/inputs/input-textarea/input-textarea.component";
import {InputLineComponent} from "./components/inputs/input-line/input-line.component";
import { NotifyComponent } from './components/notify/notify.component';
import {HtmlSanitizerPipe} from "./pipes/html-sanitizer.pipe";
import { SpinnerSmallComponent } from './components/spinner-small/spinner-small.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { FooterComponent } from './components/footer/footer.component';
import {SearchComponent} from "./components/search/search.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { ChartComponent } from './components/chart/chart.component';
import { LoadingComponent } from './components/loading/loading.component';
import {AnimeDirective} from "./directives/anime.directive";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ServiceComponent,
    MainContentComponent,
    AboutComponent,
    WhyComponent,
    ScrollDirective,
    NumberComponent,
    EffectDirective,
    ClientComponent,
    PlanComponent,
    TestmonialsComponent,
    FaqComponent,
    PortfolioComponent,
    BlogComponent,
    ContactFormComponent,
    NumberDirective,
    InputTextareaComponent,
    InputLineComponent,
    NotifyComponent,
    HtmlSanitizerPipe,
    SpinnerSmallComponent,
    ContactInfoComponent,
    FooterComponent,
    SearchComponent,
    NavbarComponent,
    ChartComponent,
    LoadingComponent,
    AnimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
