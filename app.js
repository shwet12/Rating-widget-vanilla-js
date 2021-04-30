
(function (window) {
    const _init = () => {
        const main = document.querySelector('.main');
        const stars = ['one', 'two', 'three', 'four', 'five'];

        stars.forEach((id) => {
            const i = document.createElement('i');
            i.classList = 'fa fa-star unchecked';
            i.id = id;
            main.appendChild(i);
            i.addEventListener('mouseenter', function (e) {
                const id = e.target.id;
                for (let x = 0; x <= stars.indexOf(id); x++) {
                    const ele = document.getElementById(stars[x]);
                    if (ele.classList.contains('unchecked')) {
                        ele.classList.remove('unchecked');
                        ele.classList.add('checked');
                    }
                }

            });
            i.addEventListener('mouseleave', function (e) {
                // const id = e.target.id;
                for (let x = 0; x < stars.length; x++) {
                    const ele = document.getElementById(stars[x]);
                    if (ele.classList.contains('checked')) {
                        ele.classList.remove('checked');
                        ele.classList.add('unchecked');
                    }
                }
            })
        })
    }
    window.Rating_widget = {
        init: _init
    }
})(window)

document.addEventListener('DOMContentLoaded', function () {
    Rating_widget.init();
})