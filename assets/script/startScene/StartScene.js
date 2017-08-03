
const { ccclass, property } = cc._decorator;
@ccclass
class StartScene extends cc.Component {
  @property(cc.Node) testLogo = null;
  isHallConnected = false;
  isGameConnected = false;
  isGoingToHall = false;
  onLoad() {
    console.log('--start Scene ==');
  }

  start() {

  }

  update() {

  }

  onEnable() {

  }

  onDisable() {

  }

  onDestory() {

  }
}

export default StartScene;
