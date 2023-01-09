(() => {
    const inputWidth = document.getElementById('input_width');
    const inputHeight = document.getElementById('input_height');
    const inputRadius = document.getElementById('input_radius');
    const inputColor = document.getElementById('input_color');
    const inputCount = document.getElementById('input_count');
    const inputMargin = document.getElementById('input_margin');
    const showButton = document.getElementById('btn_show');
    const body = document.querySelector('body');

    showButton.addEventListener('click', () => {
        for (let i = 0; i < inputCount.value; i++) {
            const div = document.createElement('div');
            div.style.width = inputWidth.value + 'px';
            div.style.height = inputHeight.value + 'px';
            div.style.borderRadius = inputRadius.value + 'px';
            div.style.backgroundColor = inputColor.value;
            div.style.margin = inputMargin.value + 'px';
            body.append(div);
        }
    });
})()