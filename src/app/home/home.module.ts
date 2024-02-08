import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionExperienceComponent } from './components/section-experience/section-experience.component';
import { SectionSkillComponent } from './components/section-skill/section-skill.component';
import { HomePageComponent } from './views/home-page/home-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionMainComponent,
    SectionExperienceComponent,
    SectionSkillComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule],
})
export class HomeModule {}
