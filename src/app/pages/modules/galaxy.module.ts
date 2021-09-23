import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalaxyGateComponent } from "../pc/gate/galaxy-gate.component";
import { RouterModule, Routes } from "@angular/router";
import { GalaxyLayoutComponent } from "../pc/layout/galaxy-layout.component";
import { GalaxyHomeComponent } from "../pc/home/galaxy-home.component";
import { GalaxyCompanyComponent } from '../pc/home/intro/galaxy-company.component';
import { GalaxyAboutComponent } from '../pc/home/about/galaxy-about.component';
import { GalaxyBusinessComponent } from '../pc/home/business/galaxy-business.component';
import { GalaxyCareersComponent } from '../pc/home/careers/galaxy-careers.component';
import { GalaxyIpComponent } from '../pc/home/ip/galaxy-ip.component';
import { XyzComponent } from '../pc/home/metaverse/xyz/xyz.component';
import { MommysonComponent } from '../pc/home/metaverse/mommyson/mommyson.component';

const routes: Routes = [
  {
    path: "",
    component: GalaxyLayoutComponent,
    children: [
      {
        path: "gate",
        component: GalaxyGateComponent,
      },
      {
        path: "**",
        component: GalaxyHomeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    GalaxyGateComponent,
    GalaxyLayoutComponent,
    GalaxyHomeComponent,
    GalaxyCompanyComponent,
    GalaxyAboutComponent,
    GalaxyBusinessComponent,
    GalaxyCareersComponent,
    GalaxyIpComponent,
    XyzComponent,
    MommysonComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GalaxyModule {}
