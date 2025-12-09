jQuery(document).ready(function($) {
    $('.qr-link').on('click', function(e) {
        e.preventDefault();
        $('#qrcode').html('');
        var link = $(this).attr('href');
        var qrcode = new QRCode("qrcode", {
            text: link,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrcode.clear();
        qrcode.makeCode(link);
        $('.modal-title').text($(this).text());
        $('.modal-address').text($(this).attr('data-address'));
        $('#myModal1').modal({
            keyboard: true,
            backdrop: true
        });
    });
});