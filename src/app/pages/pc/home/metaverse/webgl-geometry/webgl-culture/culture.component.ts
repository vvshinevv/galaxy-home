import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { RoomEnvironment } from "../../../../../../../assets/jsm/environments/RoomEnvironment.js";
import { OrbitControls } from "../../../../../../../assets/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../../../../../../../assets/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { createEmptyStateSnapshot } from "@angular/router/src/router_state";

@Component({
  selector: "app-culture",
  templateUrl: "./culture.component.html",
  styleUrls: ["./culture.component.css"],
})
export class CultureComponent implements OnInit, AfterViewChecked {
  @ViewChild("galaxy3dConainterElement") galaxy3dConainterElement: ElementRef;
  @ViewChild("cover") coverElement: ElementRef;
  @Input("motion4Element") motion4Element: ElementRef;

  camera: any;
  scene: any;
  renderer: any;
  mesh: any;
  controls: any;
  height: number;
  width: number;
  constructor(private renderer2: Renderer2) {}

  ngOnInit() {
    this.height = this.motion4Element.nativeElement.offsetHeight - 30;
    this.width = this.motion4Element.nativeElement.offsetWidth - 30;
    this.init();
    this.cover();
    this.renderer.setSize(
      this.galaxy3dConainterElement.nativeElement.offsetWidth,
      this.galaxy3dConainterElement.nativeElement.offsetWidth
    );
  }

  public cover() {
    this.renderer2.setStyle(
      this.coverElement.nativeElement,
      "width",
      this.galaxy3dConainterElement.nativeElement.offsetWidth + "px"
    );
    this.renderer2.setStyle(
      this.coverElement.nativeElement,
      "height",
      this.galaxy3dConainterElement.nativeElement.offsetHeight + "px"
    );
    this.renderer2.setStyle(this.coverElement.nativeElement, "z-index", 9999);
    // this.renderer2.setStyle(this.galaxy3dConainterElement.nativeElement, "position", "absolute");
  }

  ngAfterViewChecked(): void {}

  public init() {
    const container = this.galaxy3dConainterElement.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.width / this.width,
      1,
      2000
    );

    this.camera.position.set(
      116.54313719423844,
      55.78559149150032,
      53.53875548977965
    );

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.environment = pmremGenerator.fromScene(environment).texture;

    const loader = new GLTFLoader().setPath(
      "../../../../../../../assets/models/company/"
    );

    loader.load("5.glb", (gltf: any) => {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.geometry.center(); // center here
          child.position.x += 0.5;
        }
      });

      if (this.galaxy3dConainterElement.nativeElement.offsetWidth >= 450) {
        gltf.scene.scale.set(15, 15, 15); 
      } else {
        gltf.scene.scale.set(17, 17, 17); 
      }
      this.scene.add(gltf.scene);
      this.mesh = gltf.scenes[0];
      this.render(this.renderer);
      this.animate(this.mesh);
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;
    this.controls.autoRotateSpeed = 15;
    this.controls.autoRotate = true;
    this.controls.enableRotate = false;
  }

  public animate(mesh: any) {
    requestAnimationFrame(() => this.animate(mesh));
    this.controls.update();
    mesh.rotation.x += 0.005;
    this.renderer.render(this.scene, this.camera);
  }

  public render(renderer: any) {
    renderer.render(this.scene, this.camera);
  }
}
