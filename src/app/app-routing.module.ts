import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalaxyModule } from "./pages/modules/galaxy.module";
import { GalaxyPrivacyComponent } from "./pages/pc/home/privacy/galaxy-privacy.component";

const routes: Routes = [];

@NgModule({
  imports: [GalaxyModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
