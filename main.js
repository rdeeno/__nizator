var varObj = [{
        'title': 'какой-то заголовок',
        'name': 'чьё-то имя',
        'text': 'возможно какой-нибудь текст'
    },
    {
        'title': 'другой заголовок',
        'name': 'другое имя',
        'text': 'другой текст'
    },
]
var template = document.querySelector('template');
var pattern = /\{\{.*?\}\}/gi;

function renderVar(tpl, obj) {
    var html = tpl.innerHTML;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            html = html.replace('{{' + key + '}}', element)
        }
    }

    return html;
};
for (let i = 0; i < varObj.length; i++) {
    document.querySelector('.result').insertAdjacentHTML('beforeend', renderVar(template, varObj[i]))
}