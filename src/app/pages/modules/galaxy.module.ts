import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalaxyGateComponent } from "../pc/gate/galaxy-gate.component";
import { RouterModule, Routes } from "@angular/router";
import { GalaxyLayoutComponent } from "../pc/layout/galaxy-layout.component";
import { GalaxyHomeComponent } from "../pc/home/galaxy-home.component";
import { GalaxyCompanyComponent } from "../pc/home/intro/galaxy-company.component";
import { GalaxyAboutComponent } from "../pc/home/about/galaxy-about.component";
import { GalaxyBusinessComponent } from "../pc/home/business/galaxy-business.component";
import { GalaxyCareersComponent } from "../pc/home/careers/galaxy-careers.component";
import { GalaxyIpComponent } from "../pc/home/ip/galaxy-ip.component";
import { XyzComponent } from "../pc/home/metaverse/xyz/xyz.component";
import { MommysonComponent } from "../pc/home/metaverse/mommyson/mommyson.component";
import { GalaxySocialComponent } from "../pc/home/social/galaxy-social.component";
import { MetaverseComponent } from '../pc/home/metaverse/webgl-geometry/webgl-metaverse/metaverse.component';
import { ConnectionComponent } from '../pc/home/metaverse/webgl-geometry/webgl-connection/connection.component';
import { WorldComponent } from '../pc/home/metaverse/webgl-geometry/webgl-world/world.component';
import { PersonaComponent } from '../pc/home/metaverse/webgl-geometry/webgl-persona/persona.component';
import { CultureComponent } from '../pc/home/metaverse/webgl-geometry/webgl-culture/culture.component';
import { GalaxyContactComponent } from '../pc/home/contact/galaxy-contact.component';
import { GalaxyBusinessRenewComponent } from '../pc/home/business-renew/galaxy-business-renew.component';
import { GalaxyPrivacyComponent } from '../pc/home/privacy/galaxy-privacy.component';

const routes: Routes = [
  {
    path: "privacy",
    component: GalaxyPrivacyComponent
  },
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
      }
    ],
  }
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
    GalaxySocialComponent,
    MetaverseComponent,
    ConnectionComponent,
    WorldComponent,
    PersonaComponent,
    CultureComponent,
    GalaxyContactComponent,
    GalaxyBusinessRenewComponent,
    GalaxyPrivacyComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GalaxyModule {}
