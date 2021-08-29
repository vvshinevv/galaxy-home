import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import Stats from "../../../../assets/jsm/libs/stats.module.js";
import * as THREE from "three";

@Component({
  selector: "app-galaxy-gate",
  templateUrl: "./galaxy-gate.component.html",
  styleUrls: ["./galaxy-gate.component.css"],
})
export class GalaxyGateComponent implements OnInit {
  @ViewChild("target") targetElement: ElementRef;
  vertexshader: any;
  fragmentshader: any;

  camera: any;
  scene: any;
  renderer: any;

  SEPARATION: number = 100;
  AMOUNTX: number = 50;
  AMOUNTY: number = 50;

  particles: any;
  count: number = 0;

  mouseX: number = 0;
  mouseY: number = 0;

  windowHalfX: number = window.innerWidth / 2;
  windowHalfY: number = window.innerHeight / 2;

  stats: any;

  constructor(private renderer2: Renderer2) {}

  ngOnInit() {
    this.vertexshaderScript();
    this.fragmentshaderScript();
    this.init();
    this.animate();
  }

  public vertexshaderScript() {
    this.vertexshader = this.renderer2.createElement("script");
    this.vertexshader.type = "x-shader/x-vertex";
    this.vertexshader.text = `
      attribute float scale;
      void main() {
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
          gl_PointSize = scale * ( 300.0 / - mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
      }
    `;
    this.renderer2.appendChild(document.body, this.vertexshader);
  }

  public fragmentshaderScript() {
    this.fragmentshader = this.renderer2.createElement("script");
    this.fragmentshader.type = "x-shader/x-vertex";
    this.fragmentshader.text = `
      uniform vec3 color;
      void main() {
          if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
          gl_FragColor = vec4( color, 1.0 );
      }
    `;
    this.renderer2.appendChild(document.body, this.fragmentshader);
  }

  public init() {
    const container = this.targetElement.nativeElement;
    document.body.appendChild(container);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();

    const numParticles = this.AMOUNTX * this.AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0,
      j = 0;

    for (let ix = 0; ix < this.AMOUNTX; ix++) {
      for (let iy = 0; iy < this.AMOUNTY; iy++) {
        positions[i] =
          ix * this.SEPARATION - (this.AMOUNTX * this.SEPARATION) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] =
          iy * this.SEPARATION - (this.AMOUNTY * this.SEPARATION) / 2; // z

        scales[j] = 1;

        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: this.vertexshader.textContent,
      fragmentShader: this.fragmentshader.textContent,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    // this.stats = new Stats();
    // container.appendChild(this.stats.dom);

    container.style.touchAction = "none";
    container.addEventListener("pointermove", (event: any) => {
      if (event.isPrimary === false) return;

      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;
    });

    window.addEventListener("resize", () => this.onWindowResize());
  }

  public onWindowResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public animate() {
    requestAnimationFrame(() => this.animate());

    this.render();
    // this.stats.update();
  }

  public render() {
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    const positions = this.particles.geometry.attributes.position.array;
    const scales = this.particles.geometry.attributes.scale.array;

    let i = 0,
      j = 0;

    for (let ix = 0; ix < this.AMOUNTX; ix++) {
      for (let iy = 0; iy < this.AMOUNTY; iy++) {
        positions[i + 1] =
          Math.sin((ix + this.count) * 0.3) * 50 +
          Math.sin((iy + this.count) * 0.5) * 50;

        scales[j] =
          (Math.sin((ix + this.count) * 0.3) + 1) * 20 +
          (Math.sin((iy + this.count) * 0.5) + 1) * 20;

        i += 3;
        j++;
      }
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
    this.particles.geometry.attributes.scale.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);

    this.count += 0.1;
  }
}
