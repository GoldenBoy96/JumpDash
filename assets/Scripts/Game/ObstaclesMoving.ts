import { _decorator, Component, Node, Vec3, sys } from 'cc';
const { ccclass, property } = _decorator;
var speed: number;

@ccclass('ObstaclesMoving')
export class ObstaclesMoving extends Component {


    start () {
        
    }

    update (deltaTime: number) {
        speed = JSON.parse(sys.localStorage.getItem("speed"));
        if (speed === null) {
            sys.localStorage.setItem("speed", JSON.stringify(500));
            speed = JSON.parse(sys.localStorage.getItem("speed"));
        }
        console.log(speed);
        let newPosition = new Vec3(this.node.position.x, this.node.position.y - speed * deltaTime,this.node.position.z);
        this.node.position = newPosition;
    }
}


