// get references to select list and display text box
let sel = document.getElementById('scripts');

function getSelectedOption(sel) {
    let opt;
    for (let i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}
// assign onclick handlers to the buttons
document.getElementById('showVal').onclick = function() {
    let value = sel.value
    document.bgColor = value
}