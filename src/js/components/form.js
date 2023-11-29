import IMask from 'imask';

const form = () => {
    const form = document.querySelector('.form__form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('.form__input--name').value;

        function validateName(name) {
            return name.trim() !== '';
        }

        if (!validateName(name)) {
            alert('Введите корректное имя.');
            return;
        }

        if (validateName(name)) {
            form.submit();
        }
    });




const tel = document.querySelector('.form__input--tel')

    IMask(tel, {
        mask: '+{7}(000)000-00-00',
    });
}

export default form