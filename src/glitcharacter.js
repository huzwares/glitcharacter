function glitch(id, index, type) {
    this.id = id;
    this.index = index;
    this.word = document.getElementById(id).innerHTML;
    this.type = type;
    this.start = function() {
        gliCharacter(this, this.id, this.word, this.index, this.type);
    };
}

function gliCharacter(glitch, where, input, index, type) {
    var mask = '';
    if (type.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (type.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (type.indexOf('#') > -1) mask += '0123456789';
    if (type.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = mask[Math.round(Math.random() * (mask.length - 1))];
    if (index == 'random') {
        var index = Math.floor((Math.random() * input.length));
    }

    output = input.substring(0, index - 1) + result + input.substring(index);
    document.getElementById(where).innerHTML = output;
    if (Math.floor(Math.random() * 10) < 5) {
        setTimeout(function() { glitch.start(); }, Math.floor(Math.random() * 1000) + 100);
    } else {
        setTimeout(function() { document.getElementById(where).innerHTML = input; }, Math.floor(Math.random() * 1000) + 100);
        glitch.start();
    }
}
