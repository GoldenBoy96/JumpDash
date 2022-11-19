import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
var speed = 500;

@ccclass('ObstaclesMoving')
export class ObstaclesMoving extends Component {


    start () {

    }

    update (deltaTime: number) {
        let newPosition = new Vec3(this.node.position.x, this.node.position.y - speed * deltaTime,this.node.position.z);
        this.node.position = newPosition;
    }
}


