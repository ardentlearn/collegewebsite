document.getElementById('body').onload = () => {
    var notices = new bootstrap.Modal(document.getElementById('staticBackdrop'), {});
    notices.show();
};