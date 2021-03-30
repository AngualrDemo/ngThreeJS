import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BoxGeometry, BufferGeometry, LineBasicMaterial, Mesh, PerspectiveCamera, Scene, WebGLRenderer, Vector3, BufferAttribute, Line } from 'three/src/Three';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit, AfterViewInit {
  @ViewChild('linebox') linebox : any;
  
  constructor() { }
  ngAfterViewInit(): void {
    this.initThree();
  }
  ngOnInit(): void {
  }
  initThree() {
    const me = this;
    let defH = 400, defW = 400;
    let webglBoxEl = me.linebox.nativeElement; 
    const SCENE = new Scene(); // 创建场景
    const CAMERA = new PerspectiveCamera(45, defW/defH, 1, 500); // 创建正投影相机 最近能看到1，最远能看到1000 
    CAMERA.position.set(0, 0 ,100 );
    CAMERA.lookAt(0,0,0);

    const WEBGL_RENDER = new WebGLRenderer(
      {
        antialias: true
      }
    ); // 创建渲染器
    WEBGL_RENDER.setClearColor('#FFFFFF')


    WEBGL_RENDER.setSize(defW, defH);
    webglBoxEl.appendChild(WEBGL_RENDER.domElement); // 把渲染好的element元素添加到容器里面

   

    const MATERIAL = new LineBasicMaterial({color: 0x0000ff}); // 创建一个蓝色的LineBasicMaterial  材质

    let geometry = new BufferGeometry(); 
    let vertices = new Float32Array([
      -10, 0, 0,
      0, 10, 0,
      10, 0, 0
    ])
    geometry.setAttribute( 'position', new BufferAttribute( vertices, 3 ) );

    // 第三步，我们需要一个Mesh（网格） 模型。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。
    const line = new Line(geometry, MATERIAL);
    
    SCENE.add(line); // 物体将会被添加到(0,0,0)坐标。

    // CAMERA.position.z = 1000; // 改变相机的位置

    function render() {
      // requestAnimationFrame(render);
      // CUBE.rotation.x += 0.01
      // mesh.rotation.y += 0.01
      WEBGL_RENDER.render(SCENE, CAMERA)  
    }
    render();
  }
}
