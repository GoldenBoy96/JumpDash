import { _decorator, Component, Node, Prefab, instantiate, Vec3, Scene, random, randomRange, } from 'cc';
import { ObstaclesMoving } from './ObstaclesMoving';
const { ccclass, property } = _decorator;
var count = 0;
var leftPosition;
var rightPosition;

@ccclass('ObstaclesSpawn')
export class ObstaclesSpawn extends Component {
    @property({ type: Prefab })
    public wallPrefab: Prefab | null = null;


    start() {
    }

    spawnNewWall(position: Vec3) {
        let newWall = instantiate(this.wallPrefab);
        newWall.position = position;
        console.log(newWall.position);
        this.node.addChild(newWall);
    }

    update(deltaTime: number) {
        // this.spawnNewWall();
        if (count == 40) {
            leftPosition = new Vec3(-190 + randomRange(-30, 50), 550, 0);
            this.spawnNewWall(leftPosition);
        } else if (count == 80) {
            rightPosition = new Vec3(190 + randomRange(-50, 30), 550, 0);
            this.spawnNewWall(rightPosition);
            count = 0;
        }
        count++;


    }
}


