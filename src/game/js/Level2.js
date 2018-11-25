
  class Level2 extends Phaser.Scene{
    constructor(){
      super({key: 'Level2',active: true});
    }
   
    preload() {
      this.load.image("enemy", "game/img/fries_low.png");
      this.load.image("background", "game/img/background.png");
      this.load.image("floor", "game/img/platform.png");
      this.load.image("batata", "game/img/icon.png");
      this.load.spritesheet("player", "game/img/player.png", {
        frameWidth: 32,
        frameHeight: 48
      });
    }
    create() {
      cursors = this.input.keyboard.createCursorKeys();
      this.add.image(400, 300, "background");
  
      scorePoints = this.add.text(16, 16, "score: 0", {
        fontSize: "32px",
        fill: "rgb(0,0,0)"
      });
  
      tutorialText = this.add.text(
        280,
        16,
        "Coma batatas e fique saudável! \n Não se renda aos lanches, \nisso comprometerá sua dieta!",
        { fontSize: "25px", fill: "rgb(0,0,0)" }
      );
  
      platforms = this.physics.add.staticGroup();
  
      platforms
        .create(400, 568, "floor")
        .setScale(2)
        .refreshBody();
  
      platforms.create(300, 400, "floor");
      platforms.create(50, 250, "floor");
      platforms.create(750, 220, "floor");
  
      player = this.physics.add.sprite(100, 450, "player");
  
      player.setBounce(0.2);
      player.setCollideWorldBounds(true);
  
      star = this.physics.add.group({
        key: "batata",
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
      });
  
      star.children.iterate(function(child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      });
  
      this.physics.add.overlap(player, star, collectBatatas, null, this);
  
      enemies = this.physics.add.group();
  
      this.physics.add.collider(enemies, platforms);
  
      this.physics.add.collider(player, enemies, hitEnemy, null, this);
      this.physics.add.collider(player, platforms);
      this.physics.add.collider(star, platforms);
  
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });
  
      this.anims.create({
        key: "turn",
        frames: [{ key: "player", frame: 4 }],
        frameRate: 20
      });
  
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("player", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });
    }
    
    update() {
      
  
      if (cursors.left.isDown) {
        player.setVelocityX(-180);
  
        player.anims.play("left", true);
      } else if (cursors.right.isDown) {
        player.setVelocityX(180);
  
        player.anims.play("right", true);
      } else {
        player.setVelocityX(0);
  
        player.anims.play("turn", true);
      }
  
      if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-340);
      } else if (cursors.down.isDown && !player.body.touching.down) {
        player.setVelocityY(340);
      }
    }

  }

  var config = {
    type: Phaser.AUTO,
    width: gameConfig.width,
    height: gameConfig.height,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [Level2],
  }
  var enemies;
 

   
  var outScore = document.querySelector("#score");
    
  var cursors;
  var score = 0;
  var scorePoints, tutorialText, scoreText, overText;
  var player, platforms, star;
  var ptsB = 0,
    ptsE = 0;
    
  var game = new Phaser.Game(config);

  function collectBatatas(player, star) {
    ptsB++;
    cursors = this.input.keyboard.createCursorKeys();

    star.disableBody(true, true);

    score += 10;
    scorePoints.setText("Score: " + score);

    var x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

       if (ptsB % 2 == 0) {
        var fritas = enemies.create(x, 16, "enemy");
        fritas.setBounce(1);
        fritas.setCollideWorldBounds(true);
        fritas.setVelocity(Phaser.Math.Between(-200, 200), 20);
        fritas.allowGravity = false;
      } else {
        var burgers = enemies.create(x, 16, "burger");
        burgers.setBounce(1);
        burgers.setCollideWorldBounds(true);
        burgers.setVelocity(Phaser.Math.Between(-200, 200), -50);
      }

    if (ptsB == 12) {
      scoreText = this.add.text(
        16,
        280,
        "Parabéns mulekote! \n Agora você está saudável!",
        { fontSize: "50px", fill: "rgb(0,0,150)" }
      );
      player.setTint(0x0088ff);
    } else scoreText.setText(" ");

    if (Win()) {
      this.physics.pause();
      nextLevel();
    }
  }
  function hitEnemy(player, enemy) {
    if (player.body.touching.down) {
      enemy.disableBody(true, true);
      score += 10;
      ptsE++;
      scorePoints.setText("Score: " + score);
      if (ptsE == 12) {
        scoreText = this.add.text(
          16,
          280,
          "Caraca muleke, parabéns! \n Você é realmente fitness!",
          { fontSize: "50px", fill: "rgb(0,150,0)" }
        );
        //this.physics.pause();

        player.setTint(0x008800);

        //player.anims.play('turn');
      } else scoreText.setText(" ");
    } else {
      outScore.textContent = "score: " + score;

      this.physics.pause();

      player.setTint(0xff0000);

      player.anims.play("turn");

      overText = this.add.text(250, 280, "Game Over", {
        fontSize: "50px",
        fill: "rgb(250,0,0)"
      });
      scoreText.setText(" ");
    }

    if (Win()) {
      this.physics.pause();
      nextLevel();
    }
  }
  function Win() {
    if (ptsE >= 12 && ptsB >= 12) {
      return true;
    }
    return false;
  }
  function nextLevel() {
    
  }

