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
  selector: "app-world",
  templateUrl: "./world.component.html",
  styleUrls: ["./world.component.css"],
})
export class WorldComponent implements OnInit {
  @ViewChild("galaxy3dConainterElement") galaxy3dConainterElement: ElementRef;
  @ViewChild("cover") coverElement: ElementRef;
  @Input("motion2Element") motion2Element: ElementRef;
  camera: any;
  scene: any;
  renderer: any;
  mesh: any;
  controls: any;
  height: number;
  width: number;
  constructor(private renderer2: Renderer2) {}

  ngOnInit() {
    this.height = this.motion2Element.nativeElement.offsetHeight - 30;
    this.width = this.motion2Element.nativeElement.offsetWidth - 30;
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

    loader.load("3.glb", (gltf: any) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.center(); // center here
        }
      });

      if (this.galaxy3dConainterElement.nativeElement.offsetWidth >= 450) {
        gltf.scene.scale.set(11, 11, 11); 
      } else {
        gltf.scene.scale.set(13, 13, 13); 
      }
      // gltf.scene.scale.set(13, 13, 13); // scale here
      this.scene.add(gltf.scene);
      this.mesh = gltf.scenes[0];
      this.render(this.renderer);
      this.animate(this.mesh);
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;
    this.controls.autoRotate = true;
    this.controls.enableRotate = false;
    // this.controls.addEventListener("change", () => {
    //   this.render(this.renderer);
    // });
  }

  public animate(mesh: any) {
    requestAnimationFrame(() => this.animate(mesh));
    this.controls.update();
    mesh.rotation.z += 0.005;
    this.renderer.render(this.scene, this.camera);
  }

  public render(renderer: any) {
    renderer.render(this.scene, this.camera);
  }
}
