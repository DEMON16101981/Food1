function timer() {

     const deadline = '2022-05-11';

       function getTimerRemainig(endtime){    //Функция которая будет определять разницу между deadline и текущим времинем.
           const t = Date.parse(endtime) - Date.parse(new Date()),
                 days = Math.floor(t / (1000 * 60 * 60 * 24)),
                 hours =Math.floor((t / (1000 * 60 * 60) % 24)),
                 minutes = Math.floor((t / 1000 / 60) % 60),
                 seconds = Math.floor((t / 1000 ) % 60);
                                                    
           return {
               'total': t,
               'days': days,
               'hours': hours,
               'minutes': minutes,
               'seconds': seconds
   
           };
       }
   
           function getZero(num){         //Функция которая добовляет ноль перед цифрой
               if (num >= 0 && num < 10){
                   return `0${num}`;
               }else{
                   return num;
               }
           }
   
       function setClock(selector, endtime){           //Функция которая устанавливает таймер
           const timer = document.querySelector(selector),
                 days = timer.querySelector('#days'),
                 hours = timer.querySelector('#hours'),
                 minutes = timer.querySelector('#minutes'),
                 seconds = timer.querySelector('#seconds'),
   
                 timerInterval = setInterval(updateClock, 1000);    //Запускает функцию
       
           updateClock();    //Вызов функции которая отключает мигание
   
       function updateClock(){        //Функция которая будет обновлять таймер каждую секунду
           const t = getTimerRemainig(endtime);
   
           days.innerHTML = getZero(t.days);
           hours.innerHTML = getZero(t.hours);
           minutes.innerHTML = getZero(t.minutes);
           seconds.innerHTML = getZero(t.seconds);
   
           if (t.total <= 0) {          //Останавливает таймер
               clearInterval(timerInterval);
           }
          }
       }
       setClock('.timer', deadline);   
}

module.exports = timer;