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

@Component({
  selector: "app-connection",
  templateUrl: "./connection.component.html",
  styleUrls: ["./connection.component.css"],
})
export class ConnectionComponent implements OnInit, AfterViewChecked {
  @ViewChild("galaxy3dConainterElement") galaxy3dConainterElement: ElementRef;
  @ViewChild("cover") coverElement: ElementRef;
  @Input("contactFormElement") contactFormElement: ElementRef;
  camera: any;
  scene: any;
  renderer: any;
  mesh: any;
  controls: any;
  height: number;
  width: number;
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.height = this.contactFormElement.nativeElement.offsetHeight - 15;
    this.width = this.contactFormElement.nativeElement.offsetWidth - 15;
    this.init();
    this.cover();
  }

  public cover() {
    this.renderer2.setStyle(this.coverElement.nativeElement, "width", this.galaxy3dConainterElement.nativeElement.offsetWidth + "px");
    this.renderer2.setStyle(this.coverElement.nativeElement, "height", this.galaxy3dConainterElement.nativeElement.offsetHeight + "px");
    this.renderer2.setStyle(this.coverElement.nativeElement, "z-index", 9999);
    // this.renderer2.setStyle(this.galaxy3dConainterElement.nativeElement, "position", "absolute");
  }

  ngAfterViewChecked(): void {}

  public init() {
    const container = this.galaxy3dConainterElement.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.setSize(this.width, this.width);
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.width / this.width,
      1,
      2000
    );

    this.camera.position.set(
      0.040004576254522396,
      541.6428860333974,
      -2.0205533529533533
    );

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.environment = pmremGenerator.fromScene(environment).texture;

    const loader = new GLTFLoader().setPath(
      "../../../../../../../assets/models/company/"
    );

    loader.load("1.glb", (gltf: any) => {
      this.mesh = gltf.scenes[0];
      this.mesh.scale.set(50, 50, 50);
      gltf.scene.position.x = 295;
      this.scene.add(gltf.scene);
      this.render(this.renderer);
      this.animate(this.mesh);
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = false;
    this.controls.enableRotate = false;
  }

  public animate(mesh: any) {
    requestAnimationFrame(() => this.animate(mesh));
    this.controls.update();
    mesh.rotation.x += 0.05;
    this.renderer.render(this.scene, this.camera);
  }

  public render(renderer: any) {
    renderer.render(this.scene, this.camera);
  }
}
