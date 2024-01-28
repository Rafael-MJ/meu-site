import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';
import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';

@Component({
  selector: 'app-scr-skills',
  standalone: true,
  imports: [
    commonModuleUtils,
    GenArrowsComponent
  ],
  templateUrl: './scr-skills.component.html',
  styleUrls: ['./scr-skills.component.css']
})
export class ScrSkillsComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Skills);
    }
  }
}
