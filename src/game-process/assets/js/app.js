    let car_url = "./assets/images/car.png";
    let road_url = "./assets/images/road.jpg";

    const canvas =  document.querySelector("canvas");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const ctx = canvas.getContext("2d");

    let road_image 	= new Image();
    road_image.src = road_url;
    let car_image 	= new Image();
    car_image.src = car_url;

    setTimeout(function(){
        ctx.drawImage(road_image, 0, 0, 1024, 400, 0, 0, 1024, 400);
        ctx.drawImage(car_image, 50, 50, 90, 140);
    }, 2000);