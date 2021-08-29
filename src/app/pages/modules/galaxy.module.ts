import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalaxyGateComponent } from "../pc/gate/galaxy-gate.component";
import { RouterModule, Routes } from "@angular/router";
import { GalaxyLayoutComponent } from "../pc/layout/galaxy-layout.component";

const routes: Routes = [
  {
    path: "",
    component: GalaxyLayoutComponent,
    children: [
      {
        path: "**",
        component: GalaxyGateComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    GalaxyGateComponent,
    GalaxyLayoutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GalaxyModule {}
