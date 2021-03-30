import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from 'three'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'threeDemo';
  @ViewChild('webglBox') webglBox : any;
  constructor(){}
  ngAfterViewInit(): void {
    // this.initThree();
  }
  ngOnInit(): void {
    
  }
  initThree() {
    const me = this;
    let defH = 400, defW = 400;
    let webglBoxEl = me.webglBox.nativeElement; 
    const SCENE = new Scene(); // 创建场景
    const CAMERA = new PerspectiveCamera(75, defW/defH, 1, 1000); // 创建相机
    const WEBGL_RENDER = new WebGLRenderer(
      {
        antialias: true
      }
    ); // 创建渲染器
    WEBGL_RENDER.setClearColor('#FFFFFF')


    WEBGL_RENDER.setSize(defW, defH);
    webglBoxEl.appendChild(WEBGL_RENDER.domElement); // 把渲染好的element元素添加到容器里面

    const GEMETRY = new BoxGeometry(2, 2, 5); // 创建一个立方体

    const MATERIAL = new MeshBasicMaterial({color: 0xff0000}); // 材质

    // 第三步，我们需要一个Mesh（网格） 模型。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。
    const CUBE = new Mesh(GEMETRY, MATERIAL);
    
    SCENE.add(CUBE); // 物体将会被添加到(0,0,0)坐标。

    CAMERA.position.z = 8; // 改变相机的位置

    function render() {
      requestAnimationFrame(render);
      // CUBE.rotation.x += 0.01
      CUBE.rotation.y += 0.01
      WEBGL_RENDER.render(SCENE, CAMERA)  
    }
    render();
  }
  
}
