function sighIn() {
    document.getElementById('warning').style.display = 'none';

    let input = document.getElementById('password').value

    if (input.toLowerCase() === input || input.length < 8) {
        document.getElementById('warning').style.display = 'inline-block';
    }

}