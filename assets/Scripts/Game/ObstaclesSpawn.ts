import { _decorator, Component, Node, Prefab, instantiate, Vec3, Scene, random, randomRange, randomRangeInt, } from 'cc';


const { ccclass, property } = _decorator;
var count = 0;
var leftPosition;
var rightPosition;
var middlePosition;

@ccclass('ObstaclesSpawn')
export class ObstaclesSpawn extends Component {
    @property({ type: Prefab })
    public wallPrefab: Prefab | null = null;
    @property({ type: Prefab })
    public pillarPrefab: Prefab | null = null;

    start() {
    }

    spawnNewWall(position: Vec3) {
        let newWall = instantiate(this.wallPrefab);
        newWall.position = position;
        console.log(newWall.position);
        this.node.addChild(newWall);
    }

    spawnNewPillar(position: Vec3) {
        let newPillar = instantiate(this.pillarPrefab);
        newPillar.position = position;
        console.log(newPillar.position);
        this.node.addChild(newPillar);
    }

    update(deltaTime: number) {
        // this.spawnNewWall();
        if (count == 25) {
            var typeOfObstancle = randomRangeInt(1, 3);
            console.log("typeOfObstancle", typeOfObstancle)
            switch (typeOfObstancle) {
                case 1:
                    var wallPosition = randomRangeInt(1, 3);
                    console.log("wallPosition", wallPosition)
                    switch (wallPosition) {
                        case 1:
                            leftPosition = new Vec3(-190 + randomRange(-30, 50), 550, 0);
                            this.spawnNewWall(leftPosition);
                            break;
                        case 2:
                            rightPosition = new Vec3(190 + randomRange(-50, 30), 550, 0);
                            this.spawnNewWall(rightPosition);
                            break;
                    }
                    break;
                case 2:
                    middlePosition = new Vec3(0 + randomRange(-120, 120), 550, 0);
                    this.spawnNewPillar(middlePosition);
                    break;
            }
            count = 0;
        }
        count++;


    }
}


