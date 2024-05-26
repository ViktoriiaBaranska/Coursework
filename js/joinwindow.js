document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("registerModal");
    var btns = document.querySelectorAll(".join-button");
    var span = document.getElementsByClassName("close-button")[0];

    btns.forEach(btn => {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

