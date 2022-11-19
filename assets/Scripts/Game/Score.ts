
import { _decorator, Component, Node, RichText, sys } from 'cc';
const { ccclass, property } = _decorator;

var score;
var highestScore = -1;

@ccclass('Score')
export class Score extends Component {
    @property({ type: RichText })
    public scoreRichText: RichText | null = null;
    @property({ type: RichText })
    public highestScoreRichText: RichText | null = null;

    start() {

        score = 0;
        highestScore = JSON.parse(sys.localStorage.getItem("highestScore"));
        if (highestScore === null) {
            sys.localStorage.setItem("highestScore", JSON.stringify(0));
            highestScore = JSON.parse(sys.localStorage.getItem("highestScore"));
        }
        // console.log("highestScore: ", sys.localStorage.getItem("highestScore"));
        this.highestScoreRichText.string = `<color=#ffffff>Highest: ${('00000000' + highestScore).slice(-8)}</color>`
    }

    update(deltaTime: number) {
        var speed = JSON.parse(sys.localStorage.getItem("speed"));
        if (speed === null) {
            sys.localStorage.setItem("speed", JSON.stringify(500));
            speed = JSON.parse(sys.localStorage.getItem("speed"));
        }
        if (speed > 0) {
            score++;
        }
        
        this.scoreRichText.string = `<color=#ffffff>Score: ${('00000000' + score).slice(-8)}</color>`
        if (highestScore !== null) {
            if (score > highestScore) {
                sys.localStorage.setItem("highestScore", JSON.stringify(score));
            }
        }

    }

    loadHighestScore() {
        var data = sys.localStorage.getItem("highestScore");
        if (data !== null) {
            return JSON.parse(data);
        }
    }



}







