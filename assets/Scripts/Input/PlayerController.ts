import { _decorator, Component, Node, Collider2D, Contact2DType, director, EventKeyboard, IPhysics2DContact, macro, systemEvent, SystemEventType, Vec3, KeyCode, RigidBody } from 'cc';
const { ccclass, property } = _decorator;

var start = true;

@ccclass('PlayerController')
export class PlayerController extends Component {
    moveRight: boolean;
    moving: boolean;
    rigidBody: RigidBody;

    start() {
        // console.log("start")
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);

        this.moveRight = true;
        this.moving = true;



    }

    update(deltaTime: number) {
        

        if (this.moving == true) {
            if (this.moveRight == true) {
                let newPosition = new Vec3(this.node.position.x + 2000 * deltaTime, this.node.position.y, this.node.position.z);
                if (newPosition.x > 135) {
                    this.moving = false;
                }
                this.node.position = newPosition;
            }
            else {
                let newPosition = new Vec3(this.node.position.x - 2000 * deltaTime, this.node.position.y, this.node.position.z);
                if (newPosition.x < -135) {
                    this.moving = false;
                }
                this.node.position = newPosition;
            }
        }



    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log('onBeginContact--------');
        director.loadScene("main");
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.SPACE:
                if (this.moving == false) {
                    if (this.moveRight == true) {
                        this.moveRight = false;
                        this.moving = true;
                    }
                    else {
                        this.moveRight = true;
                        this.moving = true;
                    }
                }


                break;
        }
    }
}


