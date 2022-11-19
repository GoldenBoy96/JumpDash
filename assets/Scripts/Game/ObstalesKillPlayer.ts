import { _decorator, Component, Node, Collider2D, director, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ObstalesKillPlayer')
export class ObstalesKillPlayer extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }


}

 function onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    // will be called once when two colliders begin to contact
    console.log('onBeginContact--------');
    director.loadScene("main");
}


