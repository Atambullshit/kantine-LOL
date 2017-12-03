$(document).ready(() => {

    //SDK.User.loadNav();

    $("#login-button").click(() => {

        const username = $("#inputUsername").val();
        const password = $("#inputPassword").val();

        SDK.User.login(username, password, (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");

            }
            else if (err){
                console.log(err)
                console.log("stuff happened")

            } else {
                console.log(data);
                window.location.href = "index.html";

            }
        });

    });

});
