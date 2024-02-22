import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/RoutingUtils';
import { ScreenSupport, Screens } from 'src/app/utils/ScreenUtils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenDeviconsComponent } from '../../general/gen-devicons/gen-devicons.component';
import { ScrKnowledgeComponent } from '../scr-knowledge/scr-knowledge.component';
import { ScrSkillsComponent } from '../scr-skills/scr-skills.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';
import { ScrAboutComponent } from '../scr-about/scr-about.component';
import { ScrInfoComponent } from '../scr-info/scr-info.component';

@Component({
  selector: 'app-scr-main',
  standalone: true,
  imports: [
    commonModuleUtils,
    ScrAboutComponent,
    ScrInfoComponent,
    ScrKnowledgeComponent,
    ScrSkillsComponent,
    GenArrowsComponent,
    GenDeviconsComponent,
    GenInfoComponent,
  ],
  templateUrl: './scr-main.component.html',
  styleUrl: './scr-main.component.scss',
})
export class ScrMainComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Main);
    }
  }
}
