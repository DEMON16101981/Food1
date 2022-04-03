function modal() {

const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

function openModal(){         //Функция которая показывает модельное окно
       modal.classList.add('show');
       modal.classList.remove('hide');

       document.body.style.overflow = 'hidden';       //Отключает прокрутка экрана когда открыто окно

       clearInterval(modalTimerId);        //Отключает окно когда его закрыли
}

modalTrigger.forEach(btn => {      //Функция которая показывает модельное окно
   btn.addEventListener('click', openModal);
}); 

function closeModal(){                   //Функция которая закрывает окно
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}

modal.addEventListener('click', (e) =>{    //Функция которая закрывает окно при клике на экран
   if (e.target === modal || e.target.getAttribute('data-close') == '') {
     closeModal();
   }
});

document.addEventListener('keydown', (e) =>{    //Отключение окна при помощи кнопки Esc
   if (e.code ==="Escape" && modal.classList.contains('show')){
       closeModal();
   }
});

const modalTimerId = setTimeout(openModal,50000);    //Показывает окно автоматически

   function showModalByScroll(){        //Показывается скролл, когда пользователь до шел до конца сайта,и отключает повторный показ окна.
                                    
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ){
          openModal();
      window.removeEventListener('scroll',showModalByScroll);
   }
}
window.addEventListener('scroll',showModalByScroll);  

}

module.exports = modal;