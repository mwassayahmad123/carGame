document.addEventListener('DOMContentLoaded', () => {
    var car = document.querySelector('.car');
    function start() {
        removeAllCoins();
        document.querySelector('#points').innerHTML = "00";
        var currentLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left')) || 600;
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                currentLeft += 30; // Adjust the value as you like
            } else if (event.key === 'ArrowLeft') {
                currentLeft -= 30; // Adjust the value as you like
            }
            if (currentLeft <= 190 || currentLeft >= 940) {
                alert("Car crashed");
                currentLeft = 600; // Set the position to 600px after a crash
                start()
            }
            car.style.left = currentLeft + 'px';
        });
        function createcoin() {
            var root = document.getElementById('cargame');
            var row = Math.random() * 4 + 1;
            row = Math.floor(row);
            var coin = document.createElement('div');
            coin.innerHTML = '$';
            coin.id = "coin" + row;
            coin.className = "coin";
            root.appendChild(coin);
            // Get the updated list of coins after adding a new coin
            var coins = document.querySelectorAll('.coin');
            coins.forEach(element => {
                var coinval = parseInt(window.getComputedStyle(element).getPropertyValue('bottom')) || 3/50;
                function decreaseBottomBy20() {
                    coinval -= 20;
                    if (coinval >= 200) {
                        element.style.bottom = coinval + 'px';
                        var height =parseInt(window.getComputedStyle(element).getPropertyValue('height'))
                        var width =parseInt(window.getComputedStyle(element).getPropertyValue('width'))
                        var font = parseInt(window.getComputedStyle(element).getPropertyValue('font-size')) || 10
                        element.style.height = (height + 5) + 'px';
                        element.style.width = ( width + 5) + 'px';
                        element.style.fontSize = (font + 2) + 'px';
                        // Update left property of element with id="coin2"
                if (element.id === 'coin2') {
                    var leftValue = parseInt(window.getComputedStyle(element).getPropertyValue('left')) || 0;
                    element.style.left = (leftValue - 15) + 'px';
                }
                // Update left property of element with id="coin2"
                if (element.id === 'coin3') {
                    var leftValue = parseInt(window.getComputedStyle(element).getPropertyValue('left')) || 0;
                    element.style.left = (leftValue + 15) + 'px';
                }
                    } else {
                           // Calculate the distance between the car and the coin's left position
                var carLeft = parseInt(car.style.left);
                var coinLeft = parseInt(window.getComputedStyle(element).getPropertyValue('left'));
                var distance = carLeft-coinLeft
                if(distance < 0){
                    distance*=-1;
                }
                console.log(distance)
                if (distance <= 200 ) {
                    var pointselement = document.getElementById('points');
                    points = Number(pointselement.innerText);
                    pointselement.innerHTML = points + 20;
                }
                        // If the coin's botts less than 200 pixels, remove the coin element
                        element.remove();
                    }
                }
                // Call the function every 0.5 seconds
                setInterval(decreaseBottomBy20, 500);
            });
        }
        setInterval(createcoin, 2000);
    }
    start();
    function removeAllCoins() {
        var coins = document.querySelectorAll('.coin');
        coins.forEach(element => {
            element.remove();
        });
    }
});