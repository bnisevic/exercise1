function window.location.reload()
{
    var text = "https://api.adorable.io/avatars/285/";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var texta = "@adorable.io.png";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length) += texta);

    return text;
}
