import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import * as THREE from "three";
import { XYZLoader } from "../../../../../../assets/jsm/loaders/XYZLoader.js";

@Component({
  selector: "app-xyz",
  templateUrl: "./xyz.component.html",
  styleUrls: ["./xyz.component.css"],
})
export class XyzComponent implements OnInit {
  @ViewChild("galaxy3dConainterElement") galaxy3dConainterElement: ElementRef;
  camera: any;
  scene: any;
  renderer: any;
  clock: any;
  points: any;

  constructor(private renderer2: Renderer2) {}

  ngOnInit() {
    this.init();
    this.animate();
  }

  public init() {
    const container = this.galaxy3dConainterElement.nativeElement;
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(10, 7, 10);

    this.scene = new THREE.Scene();
    this.scene.add(this.camera);
    this.camera.lookAt(this.scene.position);

    this.clock = new THREE.Clock();

    const loader = new XYZLoader();
    loader.load(
      "../../../../../assets/models/xyz/helix_201.xyz",
      (geometry) => {
        geometry.center();

        const vertexColors = geometry.hasAttribute("color") === true;

        const material = new THREE.PointsMaterial({
          size: 0.25,
          vertexColors: vertexColors,
          color: 0xffffff,
        });

        this.points = new THREE.Points(geometry, material);
        this.scene.add(this.points);
      }
    );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(this.renderer.domElement);
    window.addEventListener("resize", () => this.onWindowResize());
  }

  public onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  public animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();

    if (this.points) {
      this.points.rotation.x += delta * 0.2;
      this.points.rotation.y += delta * 0.5;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
