room1 = game.createRoom("room1", "background_castle-.png")
room2 = game.createRoom("room2", "background_office.png")
room3 = game.createRoom("room3", "배경-6.png")
room4 = game.createRoom("room4", "background_soil-1.png")
room5 = game.createRoom("room5", "background_soil-1.png")
room6 = game.createRoom("room6", "background_soil-1.png")
room7 = game.createRoom("room7", "background-dungeon.jpg")


/************************* 첫 번째 방 *************************/

room1.door = room1.createObject("door", "mainGate_close.png")
room1.door.setWidth(110)
room1.locateObject(room1.door, 640, 405)
room1.door.lock()

room1.door.onClick = function() {
	if(room1.door.isOpened()) {
		printMessage("다음 방으로 넘어왔다!")
		game.move(room2)
	}
	else if (room1.door.isLocked()) {
		printMessage("문이 잠겨있다")
	}
	if (game.getHandItem() == room1.key1) {
		room1.door.unlock()
		room1.door.open()
		printMessage("문이 열렸다")
	}
}
	
room1.door.onOpen = function() {
	room1.door.setSprite("mainGate_open.png")
}

room1.key1 = room1.createObject("key1", "key.png")
room1.key1.setWidth(50)
room1.locateObject(room1.key1, 1000, 680)
room1.key1.onClick = function() {
	room1.key1.pick()
	printMessage("열쇠를 얻었다!")
}


/************************* 두 번째 방 *************************/

room2.carpet = room2.createObject("carpet", "carpet.png")
room2.carpet.setWidth(366)
room2.locateObject(room2.carpet, 825, 590)

room2.desk = room2.createObject("desk", "cornerTable.png")
room2.desk.setWidth(560)
room2.locateObject(room2.desk, 620, 300)
room2.desk.onClick = function() {
	printMessage("책상을 좀 더 자세히 살펴볼까?")
}

room2.chair = room2.createObject("chair", "chair2-nw.png")
room2.chair.setWidth(107)
room2.locateObject(room2.chair, 614, 340)
room2.chair.onClick = function() {
	printMessage("딱딱해 보이는 의자다.")
}

room2.chair.move = 0
room2.chair.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room2.chair.move == 0){
		printMessage("의자를 밀었다!")
		room2.chair.moveX(80)
		room2.chair.moveY(80)
		room2.chair.move = 1
		room2.battery.show()
	} else {
		printMessage("딱딱해 보이는 의자다.")
	}
}

room2.note = room2.createObject("note", "notepad.png")
room2.note.setWidth(100)
room2.locateObject(room2.note, 541, 254)
room2.note.onClick = function() {
	showImageViewer("종이.png", "노란박스.txt")
}

room2.monitor = room2.createObject("monitor", "monitor+keyboard-sw.png");
room2.monitor.setWidth(98);
room2.locateObject(room2.monitor, 690, 210);
room2.monitor.lock()
room2.monitor.onClick = function() {
	if (room2.monitor.isLocked()) {
		printMessage("컴퓨터 비밀번호를 입력하세요.\n");
		showKeypad("number", "1208", function() {
			printMessage("프린터 작동하는 소리가 들린다.");
			room2.printer.unlock()
			room2.monitor.unlock()
		})
	} else {
		printMessage("프린터를 확인하세요.")
	}
}

room2.paper3 = room2.createObject("paper3", "종이.png")
room2.paper3.setWidth(30)
room2.locateObject(room2.paper3, 670, 130)
room2.paper3.onClick = function() {
	showImageViewer("종이.png", "모니터문제.txt")
}

room2.printer = room2.createObject("printer", "printer-sw.png");
room2.printer.setWidth(100);
room2.locateObject(room2.printer, 830, 270);
room2.printer.lock()
room2.printer.onClick = function() {
	if (room2.printer.isLocked()){
		printMessage("프린터다.")
	} else {
		showImageViewer("종이.png", "135231힌트.txt")
	}
}

room2.clock = room2.createObject("clock", "wallclock2-sw.png");
room2.clock.setWidth(90);
room2.locateObject(room2.clock, 757, 86);
room2.clock.onClick = function() {
	printMessage("시계에서는 12 다음이 1이지.");
}

room2.door = room2.createObject("door", "MetalDoor-SW-Close.png");
room2.door.setWidth(136);
room2.locateObject(room2.door, 1030, 300);
room2.door.lock();
room2.door.onUnlock = function() {
	room2.door.open();
	room2.door.setSprite("MetalDoor-SW-Open.png");
	printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}

room2.door.onClick = function(){
	if(room2.door.isOpened()){
		game.move(room3)
	} else {
		printMessage("문은 잠겨있다.");
	}
}

room2.keypad1 = room2.createObject("keypad1", "keypad2-sw.png");
room2.keypad1.setWidth(36);
room2.locateObject(room2.keypad1, 1000, 100);
room2.keypad1.onClick = function() {
	if(room2.door.isLocked()) {
		printMessage("오른쪽 문제의 정답은?");
		showKeypad("telephone", "1123123111", function(){
			printMessage("철커덕");
			room2.door.unlock()
		 });
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room2.paper1 = room2.createObject("paper1", "종이.png");
room2.paper1.setWidth(50);
room2.locateObject(room2.paper1, 1050, 110);
room2.paper1.onClick = function() {
	showImageViewer("종이.png", "개미수열.txt")
}

room2.drawer = room2.createObject("drawer", "drawer3-se-0.png");
room2.drawer.setWidth(285);
room2.locateObject(room2.drawer, 325, 435);
room2.drawer.lock();
room2.drawer.onClick = function() {
	if(room2.drawer.isClosed()){
		room2.drawer.open();
		room2.drawer.setSprite("drawer3-se-2.png");
		room2.key2.show();
	} else if (room2.drawer.isOpened()){
		room2.drawer.close();
		room2.drawer.setSprite("drawer3-se-0.png");
		room2.key2.hide();	
	} else if(room2.drawer.isLocked()){
		printMessage("잠금장치로 잠겨 있다.")
	} 
}

room2.keypad3 = room2.createObject("keypad3", "keypad2-se.png");
room2.keypad3.setWidth(36);
room2.locateObject(room2.keypad3, 300, 340);
room2.keypad3.onClick = function() {
	if (room2.drawer.isLocked()) {
		printMessage("서랍 비밀번호는?");
		showKeypad("telephone", "135231", function(){
			room2.drawer.unlock()
			printMessage("철커덕");
		 })
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room2.key2 = room2.createObject("key2", "key1.png");
room2.key2.setWidth(50);
room2.locateObject(room2.key2, 375, 435);
room2.key2.hide()
room2.key2.onClick = function() {
	room2.key2.pick()
	printMessage("열쇠를 얻었다!")
}

room2.safe = room2.createObject("safe", "safe2-se-close.png");
room2.safe.setWidth(210);
room2.locateObject(room2.safe, 170, 465);
room2.safe.lock()
room2.safe.onClick = function(){
	if(room2.safe.isClosed()){
		room2.safe.open();
		room2.safe.setSprite("safe2-se-open.png");
		room2.remoteNoBattery.show()	
	} else if (room2.safe.isOpened()){
		room2.safe.close();
		room2.safe.setSprite("safe2-se-close.png");
		room2.remoteNoBattery.hide()
	} else if(room2.safe.isLocked()){
		printMessage("잠금장치로 잠겨 있다.")
	} 
}

room2.paper2 = room2.createObject("paper2", "종이.png");
room2.paper2.setWidth(50);
room2.locateObject(room2.paper2, 35, 400);
room2.paper2.onClick = function() {
	showImageViewer("strange.jpg", "")
}

room2.keypad2 = room2.createObject("keypad2", "keypad2-se.png");
room2.keypad2.setWidth(36);
room2.locateObject(room2.keypad2, 35, 470);
room2.keypad2.onClick = function() {
	if(room2.safe.isLocked()) {
		printMessage("금고 비밀번호는?");
		showKeypad("telephone", "01769867", function(){
			room2.safe.unlock()
			printMessage("철커덕");
		 });
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room2.remoteNoBattery = room2.createObject("remoteNoBattery", "리모컨.png");
room2.remoteNoBattery.setWidth(70);
room2.locateObject(room2.remoteNoBattery, 215, 500);
room2.remoteNoBattery.hide()

room2.remoteNoBattery.onClick = function() {
	room2.remoteNoBattery.pick()
	printMessage("리모컨을 얻었다! 배터리는 없네...");
}

room2.battery = room2.createObject("battery", "건전지.png");
room2.battery.setWidth(20);
room2.locateObject(room2.battery, 614, 340);
room2.battery.hide();

room2.battery.onClick = function() {
	room2.battery.pick()
	printMessage("건전지를 얻었다!");
}

room2.remote = room2.createObject("remote", "리모컨.png")
room2.remote.hide()
game.makeCombination(room2.remoteNoBattery, room2.battery, room2.remote)

room2.tv = room2.createObject("tv", "TV2-1.png");
room2.tv.setWidth(200);
room2.locateObject(room2.tv, 300, 150)
room2.tv.lock()

room2.tv.onClick = function() {
	if (room2.tv.isLocked()) {
		printMessage("리모컨으로 켜야겠다.")
	}
	if(game.getHandItem() == room2.remote) {
		room2.tv.unlock()
		room2.tv.setSprite("TV2on.png");
		room2.tv.open()
		printMessage("뭐라고 적혀 있는 거지?")
		showImageViewer("long-135231.jpg", "")
	}
}

room2.box1 = room2.createObject("box1", "4-cover-Box(Closed)-sw.png");
room2.box1.setWidth(150);
room2.locateObject(room2.box1, 400, 600);
room2.box1.lock()
room2.box1.onClick = function() {
	if(room2.box1.isOpened()){
		room2.box1.close();
		room2.box1.setSprite("4-cover-Box(Closed)-sw.png");	
		room2.head.hide()	
	} else if (room2.box1.isClosed()){
		room2.box1.open();
		room2.box1.setSprite("4-cover-Box(Opened)-sw.png");
		room2.head.show()
	} else if (room2.box1.isLocked()) {
		printMessage("자물쇠로 잠겨 있다.")
	}
}

room2.keypad4 = room2.createObject("keypad4", "cryptex-se.png");
room2.keypad4.setWidth(36);
room2.locateObject(room2.keypad4, 410, 640);
room2.keypad4.onClick = function() {
	if (room2.box1.isLocked()) {
		printMessage("비밀번호는?");
		showKeypad("alphabet", "CLOCK", function(){
			room2.box1.unlock()
			printMessage("철커덕");
		 })
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room2.box2 = room2.createObject("box2", "Box(Closed)-se.png");
room2.box2.setWidth(110);
room2.locateObject(room2.box2, 550, 650);
room2.box2.lock()

room2.box2.onClick = function() {
	if(room2.box2.isOpened()){
		room2.box2.close();
		room2.box2.setSprite("Box(Closed)-se.png");
		room2.handle.hide()	
	} else if (room2.box2.isClosed()){
		room2.box2.open();
		room2.box2.setSprite("Box(Opened)-se.png");
		room2.handle.show()
	} else if (room2.box2.isLocked()) {
		printMessage("자물쇠로 잠겨 있다.")
	}
}

room2.keypad5 = room2.createObject("keypad5", "cryptex-sw.png");
room2.keypad5.setWidth(36);
room2.locateObject(room2.keypad5, 505, 670);
room2.keypad5.onClick = function() {
	if (room2.box2.isLocked()) {
		printMessage("비밀번호는?");
		showKeypad("alphabet", "BALDY", function(){
		room2.box2.unlock()
			printMessage("철커덕");
		 })
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room2.head = room2.createObject("head", "드라이버비트.png")
room2.handle = room2.createObject("handle", "드라이버손잡이.png")
room2.screwdriver = room2.createObject("screwdriver", "드라이버.png")

room2.head.setWidth(50)
room2.handle.setWidth(50)
room2.screwdriver.hide()

room2.locateObject(room2.head, 400, 600)
room2.locateObject(room2.handle, 550, 650)

room2.head.hide();
room2.handle.hide();

game.makeCombination(room2.head, room2.handle, room2.screwdriver)

room2.head.onClick = function(){
	printMessage("드라이버 머리를 얻었다!")
	room2.head.pick()
}
room2.handle.onClick = function(){
	printMessage("드라이버 몸통을 얻었다!")
	room2.handle.pick()
}

room2.calendar = room2.createObject("calendar", "calendar.png");
room2.calendar.setWidth(100);
room2.locateObject(room2.calendar, 580, 100);
room2.calendar.onClick = function() {
	printMessage("달력도 단서가 될 수 있을까?");
	showImageViewer("calendar2019.png", "")
}

room2.phone = room2.createObject("phone", "전화기-왼쪽-1.png");
room2.phone.setWidth(30);
room2.locateObject(room2.phone, 480, 220);
room2.phone.onClick = function() {
	showImageViewer("strangeTelephoneKeypad.png", "")
	printMessage("자판이 왜 이렇게 생겼지?!");
}

room2.cup = room2.createObject("cup", "cup-close.png");
room2.cup.setWidth(30);
room2.locateObject(room2.cup, 750, 260);

room2.book = room2.createObject("book", "book-se.png");
room2.book.setWidth(80);
room2.locateObject(room2.book, 460, 300);
room2.book.onClick = function() {
	showImageViewer("종이.png", "갈색박스.txt")
}

room2.shelf1 = room2.createObject("shelf1", "선반-좌.png")
room2.shelf1.setWidth(180)
room2.locateObject(room2.shelf1, 100, 300)

room2.shelf2 = room2.createObject("shelf2", "선반-좌.png")
room2.shelf2.setWidth(180) 
room2.locateObject(room2.shelf2, 100, 230)

room2.books1 = room2.createObject("books1", "책2-1.png");
room2.books1.setWidth(60);
room2.locateObject(room2.books1, 60, 285);

room2.books2 = room2.createObject("books2", "책3-1.png");
room2.books2.setWidth(55);
room2.locateObject(room2.books2, 140, 270);
room2.books2.onClick = function() {
	showImageViewer("Bernard-Werber.jpg", "")
	printMessage("이 사람은 누구지...");
}

room2.books3 = room2.createObject("books3", "책2-1.png");
room2.books3.setWidth(60);
room2.locateObject(room2.books3, 60, 215);
room2.books3.onClick = function() {
	showImageViewer("bookCover.jpg", "")
	printMessage("『개미』에도 숫자 문제가 나왔던 것 같은데...");
}

room2.books4 = room2.createObject("books4", "책3-1.png");
room2.books4.setWidth(55);
room2.locateObject(room2.books4, 140, 200);

room2.paddles = room2.createObject("paddles", "paddles.png");
room2.paddles.setWidth(110);
room2.locateObject(room2.paddles, 1190, 400);
room2.paddles.hide();

room2.paddles.onClick = function() {
	room2.paddles.pick()
	printMessage("노를 얻었다!");
}

room2.frame = room2.createObject("frame", "kayakingFrame.png");
room2.frame.setWidth(120);
room2.locateObject(room2.frame, 1190, 380)
room2.frame.lock()

room2.frame.onClick = function() {
	if (room2.frame.isLocked()) {
		printMessage("드라이버로 액자를 뗄 수 있을 것 같다.")
	}
	if(game.getHandItem() == room2.screwdriver) {
		room2.frame.unlock()
		//room2.frame.hide()
		room2.frame.moveX(150)
		room2.frame.moveY(-200)
		room2.paddles.show()
		printMessage("액자가 떨어졌다!")
	}
}


/************************* 세 번째 방 *************************/

room3.door1 = room3.createObject("door1", "MetalDoor-SE-Open.png")
room3.door1.setWidth(136)
room3.locateObject(room3.door1, 100, 360)
room3.door1.open()
room3.door1.onClick = function(){
	game.move(room2)
}

room3.sink = room3.createObject("sink", "싱크대-왼쪽.png")
room3.sink.setWidth(300)
room3.locateObject(room3.sink, 550, 380)

room3.food = room3.createObject("food", "음식1-1.png")
room3.food.setWidth(100)
room3.locateObject(room3.food, 630, 300)

room3.bin = room3.createObject("bin", "쓰레기통-우-닫힘.png")
room3.bin.setWidth(200)
room3.locateObject(room3.bin, 300, 410)
room3.bin.onClick = function() {
	printMessage("평범한 쓰레기통이다.")
	if (room3.bin.isOpened()) {
		room3.bin.close()
		room3.bin.setSprite("쓰레기통-우-닫힘.png")
	} else if (room3.bin.isClosed()) {
		room3.bin.open()
		room3.bin.setSprite("쓰레기통-우-열림.png")
	}
}

room3.pic = room3.createObject("pic", "Wall_picture-se.png")
room3.pic.setWidth(200)
room3.locateObject(room3.pic, 400, 130)

room3.carpet = room3.createObject("carpet", "카펫-1.png")
room3.carpet.setWidth(250)
room3.locateObject(room3.carpet, 600, 500)

room3.table = room3.createObject("table", "테이블-중.png")
room3.table.setWidth(400)
room3.locateObject(room3.table, 700, 680)

room3.pie = room3.createObject("pie", "pie.png")
room3.pie.setWidth(100)
room3.locateObject(room3.pie, 700, 580)
room3.pie.onClick = function() {
	printMessage("웬 파이??")
}

room3.banana = room3.createObject("banana", "banana.png")
room3.banana.setWidth(70)
room3.locateObject(room3.banana, 600, 580)
room3.banana.onClick = function() {
	room3.banana.pick()
	printMessage("바나나를 얻었다!")
}

room3.apple = room3.createObject("apple", "apple.png")
room3.apple.setWidth(50)
room3.locateObject(room3.apple, 800, 580)
room3.apple.onClick = function() {
	printMessage("웬 사과??")
}

room3.closet = room3.createObject("closet", "찬장-오른쪽-닫힘.png")
room3.closet.setWidth(250)
room3.locateObject(room3.closet, 850, 360)
room3.closet.lock()
room3.closet.onClick = function() {
	if (room3.closet.isOpened()) {
		room3.closet.close()
		room3.egg.hide()
		room3.carrot.hide()
		room3.closet.setSprite("찬장-오른쪽-닫힘.png")
	} else if (room3.closet.isClosed()) {
		room3.closet.open()
		room3.egg.show()
		room3.carrot.show()
		room3.closet.setSprite("찬장-오른쪽-열림.png")
	} else if (room3.closet.isLocked()) {
		printMessage("열쇠로 잠겨 있다.")
	}
	if(game.getHandItem() == room2.key2) {
		room3.closet.unlock()
		printMessage("찬장이 열렸다!")
	}
}

room3.egg = room3.createObject("egg", "egg.png")
room3.egg.setWidth(30)
room3.locateObject(room3.egg, 850, 450)
room3.egg.hide()
room3.egg.onClick = function() {
	room3.egg.pick()
	printMessage("달걀을 얻었다!")
}

room3.carrot = room3.createObject("carrot", "carrot.png")
room3.carrot.setWidth(50)
room3.locateObject(room3.carrot, 840, 340)
room3.carrot.hide()
room3.carrot.onClick = function() {
	room3.carrot.pick()
	printMessage("당근을 얻었다!")
}

room3.fridge = room3.createObject("fridge", "refrigerator2-sw-close.png")
room3.fridge.setWidth(200)
room3.locateObject(room3.fridge, 1050, 425)
room3.fridge.lock()
room3.fridge.onClick = function(){
	if(room3.fridge.isClosed()){
		room3.fridge.open();
		room3.fridge.setSprite("refrigerator2-sw-open.png");
		room3.meat.show()
		room3.fish.show()
		room3.keypad1.hide()
	} else if (room3.fridge.isOpened()){
		room3.fridge.close();
		room3.fridge.setSprite("refrigerator2-sw-close.png");
		room3.meat.hide()
		room3.fish.hide()
		room3.keypad1.show()
	} else if(room3.fridge.isLocked()){
		printMessage("잠금장치로 잠겨 있다.")
	} 
}

room3.meat = room3.createObject("meat", "meat.png")
room3.meat.setWidth(50)
room3.locateObject(room3.meat, 1000, 400)
room3.meat.hide()
room3.meat.onClick = function() {
	room3.meat.pick()
	printMessage("고기를 얻었다!")
}

room3.fish = room3.createObject("fish", "fish.png")
room3.fish.setWidth(50)
room3.locateObject(room3.fish, 1000, 450)
room3.fish.hide()
room3.fish.onClick = function() {
	room3.fish.pick()
	printMessage("생선을 얻었다!")
}

room3.paper1 = room3.createObject("paper1", "종이.png")
room3.paper1.setWidth(30)
room3.locateObject(room3.paper1, 1050, 320)
room3.paper1.onClick = function() {
	showImageViewer("종이.png", "파이문제.txt")
}

room3.keypad1 = room3.createObject("keypad1", "키패드-좌.png")
room3.keypad1.setWidth(30)
room3.locateObject(room3.keypad1, 1090, 425)
room3.keypad1.onClick = function() {
	if(room3.fridge.isLocked()) {
		printMessage("냉장고 비밀번호는?");
		showKeypad("telephone", "979", function(){
			room3.fridge.unlock()
			printMessage("철커덕");
		 });
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room3.door2 = room3.createObject("door2", "문2-우-닫힘.png")
room3.door2.setWidth(136)
room3.locateObject(room3.door2, 1200, 340)
room3.door2.lock()
room3.door2.onUnlock = function() {
	room3.door2.open();
	room3.door2.setSprite("문2-우-열림.png");
	printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}
room3.door2.onClick = function(){
	if(room3.door2.isOpened()){
		game.move(room4)
	} else {
		printMessage("문은 잠겨있다.");
	}
}

room3.keypad2 = room3.createObject("keypad2", "cryptex-sw.png")
room3.keypad2.setWidth(36)
room3.locateObject(room3.keypad2, 1110, 250)
room3.keypad2.onClick = function() {
	if(room3.door2.isLocked()) {
		printMessage("위 문제의 정답은?");
		showKeypad("alphabet", "APPLE", function(){
			printMessage("철커덕");
			room3.door2.unlock()
		 });
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room3.paper2 = room3.createObject("paper2", "종이.png");
room3.paper2.setWidth(50);
room3.locateObject(room3.paper2, 1100, 190);
room3.paper2.onClick = function() {
	showImageViewer("종이.png", "사과문제.txt")
}



/************************* 네 번째 방 *************************/

room4.door1 = room4.createObject("door1", "문2-좌-열림.png")
room4.door1.setWidth(136)
room4.locateObject(room4.door1, 100, 360)
room4.door1.open()
room4.door1.onClick = function(){
	game.move(room3)
}

room4.paper1 = room4.createObject("paper1", "종이.png")
room4.paper1.setWidth(50)
room4.locateObject(room4.paper1, 650, 300)
room4.paper1.hide()
room4.paper1.onClick = function() {
	showImageViewer("종이.png", "원숭이편지.txt")
}

room4.paper2 = room4.createObject("paper2", "종이.png")
room4.paper2.setWidth(50)
room4.locateObject(room4.paper2, 750, 300)
room4.paper2.hide()
room4.paper2.onClick = function() {
	showImageViewer("종이.png", "pwhint.txt")
}

room4.shovel = room4.createObject("shovel", "shovel.png")
room4.shovel.setWidth(100)
room4.locateObject(room4.shovel, 700, 440)
room4.shovel.hide()
room4.shovel.onClick = function() {
	room4.shovel.pick()
	printMessage("삽을 얻었다!")
}

room4.crater = room4.createObject("crater", "crater.png")
room4.crater.setWidth(200)
room4.locateObject(room4.crater, 1100, 600)
room4.crater.hide()

room4.dogbone = room4.createObject("dogbone", "dog_bone.png")
room4.dogbone.setWidth(80)
room4.locateObject(room4.dogbone, 1100, 600)
room4.dogbone.hide()
room4.dogbone.onClick = function() {
	room4.dogbone.pick()
	printMessage("개껌을 얻었다!")
}

room4.xmark = room4.createObject("xmark", "x_mark.png")
room4.xmark.setWidth(200)
room4.locateObject(room4.xmark, 1100, 600)
room4.xmark.onClick = function() {
	if (game.getHandItem() == room4.shovel) {
		room4.xmark.hide()
		room4.crater.show()
		room4.dogbone.show()
		printMessage("삽으로 땅을 팠다!")
	} else {
		printMessage("땅을 파려면 도구가 있어야 할 것 같다.")
	}
}

room4.door2 = room4.createObject("door2", "문3-우-닫힘.png")
room4.door2.setWidth(136)
room4.locateObject(room4.door2, 1000, 300)
room4.door2.lock()
room4.door2.onUnlock = function() {
	room4.door2.open();
	room4.door2.setSprite("문3-우-열림.png");
	printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}
room4.door2.onClick = function(){
	if(room4.door2.isOpened()){
		game.move(room5)
	} else {
		printMessage("문은 잠겨있다.");
	}
}

room4.keypad = room4.createObject("keypad", "숫자키-우.png")
room4.keypad.setWidth(36)
room4.locateObject(room4.keypad, 910, 250)
room4.keypad.onClick = function() {
	if(room4.door2.isLocked()) {
		printMessage("①②③④?");
		showKeypad("number", "3674", function(){
			printMessage("철커덕");
			room4.door2.unlock()
		 });
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room4.paper3 = room4.createObject("paper3", "종이.png");
room4.paper3.setWidth(50);
room4.locateObject(room4.paper3, 900, 190);
room4.paper3.onClick = function() {
	showImageViewer("passwordTable.png", "")
}


room4.monkey = room4.createObject("monkey", "monkey.png")
room4.monkey.setWidth(200)
room4.locateObject(room4.monkey, 700, 400)
room4.monkey.onClick = function() {
	if(game.getHandItem() == room3.banana) {
		printMessage("원숭이: 짭짭스!!\n바나나를 받은 원숭이는 만족스러운 얼굴을 하고서 사라졌다.")
		room4.monkey.hide()	
		room4.paper1.show()
		room4.paper2.show()
		room4.shovel.show()
	} else {
		printMessage("우끼끼!!")
		monkeyX = Math.floor(Math.random() * 600 + 300)
		monkeyY = Math.floor(Math.random() * 200 + 100)
		room4.locateObject(room4.monkey, monkeyX, monkeyY)
	}
}



/************************* 다섯 번째 방 *************************/


room5.door1 = room5.createObject("door1", "문3-좌-열림.png")
room5.door1.setWidth(136)
room5.locateObject(room5.door1, 100, 360)
room5.door1.open()
room5.door1.onClick = function(){
	game.move(room4)
}

room5.key3 = room5.createObject("key3", "key3.png")
room5.key3.setWidth(50)
room5.locateObject(room5.key3, 550, 380)
room5.key3.hide()
room5.key3.onClick = function() {
	room5.key3.pick()
	printMessage("열쇠를 얻었다!")
}

room5.paper1 = room5.createObject("paper1", "종이.png")
room5.paper1.setWidth(50)
room5.locateObject(room5.paper1, 550, 230)
room5.paper1.hide()
room5.paper1.onClick = function() {
	showImageViewer("종이.png", "나이힌트.txt")
}

room5.paper2 = room5.createObject("paper2", "종이.png")
room5.paper2.setWidth(50)
room5.locateObject(room5.paper2, 600, 230)
room5.paper2.hide()
room5.paper2.onClick = function() {
	showImageViewer("종이.png", "브레멘음악대편지.txt")
	printMessage("원숭이의 편지와 내용이 똑같군,,,")
}

room5.donkey = room5.createObject("donkey", "donkey.png")
room5.donkey.setWidth(400)
room5.locateObject(room5.donkey, 670, 490)
room5.donkey.visible = 1
room5.donkey.onClick = function() {
	if(game.getHandItem() == room3.carrot) {
		printMessage("당나귀: 짭짭스!!\n당근을 받은 당나귀는 다그닥거리며 사라졌다.")
		room5.donkey.hide()
		room5.donkey.visible = 0
	} else {
		printMessage("히히힝!!")
	}
	if(room5.donkey.visible == 0 && room5.dog.visible == 0 && room5.cat.visible==0 && room5.hen.visible==0) {
		room5.paper1.show()
		room5.paper2.show()
		room5.key3.show()
	}
}

room5.dog = room5.createObject("dog", "dog.png")
room5.dog.setWidth(250)
room5.locateObject(room5.dog, 550, 380)
room5.dog.visible = 1
room5.dog.onClick = function() {
	if(game.getHandItem() == room4.dogbone) {
		printMessage("강아지: 짭짭스!!\n개껌을 받은 강아지는 촐랑대며 사라졌다.")
		room5.dog.hide()		
		room5.dog.visible = 0
	} else {
		printMessage("왈왈!!")
	}
	if(room5.donkey.visible == 0 && room5.dog.visible == 0 && room5.cat.visible==0 && room5.hen.visible==0) {
		room5.paper1.show()
		room5.paper2.show()
		room5.key3.show()
	}
}

room5.cat = room5.createObject("cat", "cat.png")
room5.cat.setWidth(130)
room5.locateObject(room5.cat, 610, 310)
room5.cat.visible = 1
room5.cat.onClick = function() {
	if(game.getHandItem() == room3.fish) {
		printMessage("고양이: 짭짭스!!\n생선을 받은 고양이는 사뿐사뿐 사라졌다.")
		room5.cat.hide()
		room5.cat.visible = 0
	} else {
		printMessage("애용!!")
	}
	if(room5.donkey.visible == 0 && room5.dog.visible == 0 && room5.cat.visible==0 && room5.hen.visible==0) {
		room5.paper1.show()
		room5.paper2.show()
		room5.key3.show()
	}
}

room5.hen = room5.createObject("hen", "hen.png")
room5.hen.setWidth(60)
room5.locateObject(room5.hen, 600, 250)
room5.hen.visible = 1
room5.hen.onClick = function() {
	if(game.getHandItem() == room3.egg) {
		printMessage("닭: 아가야!!\n달걀을 받은 닭은 알을 품으러 사라졌다.")
		room5.hen.hide()
		room5.hen.visible = 0
	} else {
		printMessage("꼬꼬댁!!")
	}
	if(room5.donkey.visible == 0 && room5.dog.visible == 0 && room5.cat.visible==0 && room5.hen.visible==0) {
		room5.paper1.show()
		 room5.paper2.show()
		room5.key3.show()
	}
}

room5.door2 = room5.createObject("door2", "문-오른쪽-닫힘.png")
room5.door2.setWidth(136)
room5.locateObject(room5.door2, 1100, 340)
room5.door2.lock()
room5.door2.onUnlock = function() {
	room5.door2.open();
	room5.door2.setSprite("문-오른쪽-열림.png");
	printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}
room5.door2.onClick = function(){
	if(room5.door2.isOpened()){
		game.move(room6)
	} else {
		printMessage("문은 잠겨있다.");
	}
}

room5.keypad = room5.createObject("keypad", "숫자키-우.png")
room5.keypad.setWidth(36)
room5.locateObject(room5.keypad, 1010, 250)
room5.keypad.onClick = function() {
	if(room5.door2.isLocked()) {
		printMessage("Nobel & Edison");
		showKeypad("number", "4866", function(){
			printMessage("철커덕");
			room5.door2.unlock()
		 });
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room5.paper3 = room5.createObject("paper3", "종이.png");
room5.paper3.setWidth(50);
room5.locateObject(room5.paper3, 1010, 190);
room5.paper3.onClick = function() {
	showImageViewer("종이.png", "나이문제.txt")
}


/************************* 여섯 번째 방 *************************/


room6.river = room6.createObject("river", "river.png")
room6.river.setWidth(1150)
room6.locateObject(room6.river, 700, 500)
room6.river.onClick = function() {
	printMessage("강이 깊어서 맨몸으로는 갈 수 없다.")
}

room6.door1 = room6.createObject("door1", "문-왼쪽-열림.png")
room6.door1.setWidth(136)
room6.locateObject(room6.door1, 80, 360)
room6.door1.open()
room6.door1.onClick = function(){
	game.move(room5)
}

room6.crocodile = room6.createObject("crocodile", "crocodile-1.png")
room6.crocodile.setWidth(200)
room6.locateObject(room6.crocodile, 600, 500)
room6.crocodile.visible = 1
room6.crocodile.onClick = function() {
	if(game.getHandItem() == room3.meat) {
		printMessage("악어: 짭짭스!!\n고기를 받은 악어는 유유히 사라졌다.")
		room6.crocodile.hide()
		room6.crocodile.visible = 0
	} else {
		printMessage("악어가 주둥이를 딱딱거리며 위협한다.")
	}
}

room6.boat = room6.createObject("boat", "boat-1.png")
room6.boat.setWidth(200)
room6.locateObject(room6.boat, 350, 450)
room6.boat.count = 0
room6.boat.onClick = function() {
	if (game.getHandItem() == room2.paddles && room6.crocodile.visible == 0) {
		if (room6.boat.count <= 5) {
			room6.boat.moveX(130)
			room6.boat.count += 1
		} else if (room6.boat.count == 5) {
			printMessage("도착!")
			room6.door2.show()
			room6.keypad.show()
			room6.paper2.show()
		} else {
			printMessage("도착!")
			room6.door2.show()
			room6.keypad.show()
			room6.paper2.show()
		}
	} else if (room6.crocodile.visible == 1){
		printMessage("악어가 있어서 강으로 나아갈 수 없다.")
	} else {
		printMessage("배를 움직이려면 노가 필요하다.")
	}
}

room6.treasurebox = room6.createObject("treasurebox", "treasureBox-closed.png")
room6.treasurebox.setWidth(200)
room6.locateObject(room6.treasurebox, 600, 200)
room6.treasurebox.lock()
room6.treasurebox.onClick = function() {
	if (room6.treasurebox.isOpened()) {
		room6.treasurebox.close()
		room6.sword.hide()
		room6.treasurebox.setSprite("treasureBox-closed.png")
	} else if (room6.treasurebox.isClosed()) {
		room6.treasurebox.open()
		room6.sword.show()
		room6.paper1.show()
		room6.treasurebox.setSprite("treasureBox-opened-2.png")
	} else if (room6.treasurebox.isLocked()) {
		printMessage("열쇠로 잠겨 있다.")
	}
	if(game.getHandItem() == room5.key3) {
		room6.treasurebox.unlock()
		printMessage("보물상자가 열렸다!")
	}
}

room6.sword = room6.createObject("sword", "sword.png")
room6.sword.setWidth(100)
room6.locateObject(room6.sword, 620, 200)
room6.sword.hide()
room6.sword.onClick = function() {
	room6.sword.pick()
	printMessage("검을 얻었다!")
}

room6.paper1 = room6.createObject("paper1", "종이.png")
room6.paper1.setWidth(50)
room6.locateObject(room6.paper1, 600, 200)
room6.paper1.hide()
room6.paper1.onClick = function() {
	showImageViewer("종이.png", "물힌트.txt")
}

room6.door2 = room6.createObject("door2", "mainGate_close.png")
room6.door2.setWidth(80)
room6.locateObject(room6.door2, 1000, 150)
room6.door2.lock()
room6.door2.hide()
room6.door2.onUnlock = function() {
	room6.door2.open();
	room6.keypad.hide()
	room6.paper2.hide()
	room6.door2.setSprite("mainGate_open.png");
	printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}
room6.door2.onClick = function(){
	if(room6.door2.isOpened()){
		game.move(room7)
	} else {
		printMessage("문은 잠겨있다.");
	}
}

room6.keypad = room6.createObject("keypad", "cryptex-sw.png")
room6.keypad.setWidth(40)
room6.locateObject(room6.keypad, 900, 150)
room6.keypad.hide()
room6.keypad.onClick = function() {
	if(room6.door2.isLocked()) {
		printMessage("위 문제의 정답은?");
		showKeypad("alphabet", "WATER", function(){
			printMessage("철커덕");
			room6.door2.unlock()
		 });
	} else {
		printMessage("잠금이 해제되었습니다.")
	}
}

room6.paper2 = room6.createObject("paper2", "종이.png");
room6.paper2.setWidth(50);
room6.locateObject(room6.paper2, 900, 90);
room6.paper2.hide()
room6.paper2.onClick = function() {
	showImageViewer("종이.png", "물문제.txt")
}


/************************* 일곱 번째 방 *************************/

room7.door = room7.createObject("door", "mainGate_close.png")
room7.door.setWidth(100)
room7.locateObject(room7.door, 650, 300)
room7.door.lock()
room7.door.onClick = function(){
	if (room7.door.isLocked()) {
		printMessage("문을 열 수 없다.");
	}
	if(game.getHandItem() == room7.jewel) {
		room7.door.unlock()
		room7.door.open()
		printMessage("문이 열렸다!")
		game.clear()
	}
}

room7.jewel = room7.createObject("jewel", "jewel.png")
room7.jewel.setWidth(60)
room7.locateObject(room7.jewel, 500, 500)
room7.jewel.hide()
room7.jewel.onClick = function() {
	room7.jewel.pick()
	printMessage("보석을 얻었다!")
}

room7.ogre = room7.createObject("ogre", "ogre.png")
room7.ogre.setWidth(400)
room7.locateObject(room7.ogre, 800, 400)
room7.ogre.count = 0
room7.ogre.onClick = function() {
	if (game.getHandItem() == room6.sword) {
		if (room7.ogre.count < 10) {
			room7.ogre.moveX(10)
			printMessage("으억")
			room7.ogre.count += 1
		} else if (room7.ogre.count == 10) {
			printMessage("괴물이 죽었다!")
			room7.jewel.show()
			room7.ogre.hide()
		} else {
			printMessage("괴물이 죽었다!")
		}
	} else {
		printMessage("공격할 수 없다.")
	}
}

///////////////////////////////////////////////////////////////////////////////////////

game.start(room1)
printMessage("엥 여긴 어디지 나갈 방법을 찾아보자")
