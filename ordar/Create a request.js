function submitForm() {
    // جمع البيانات من النموذج
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var province = document.getElementById("province").value;
    var address = document.getElementById("address").value;

    // فحص صحة البيانات
    if (!name || !lastName || !phone || !email || !province || !address) {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    var popup = document.getElementById("popup");
    var popupBtn = document.getElementById("popupBtn");
    var closeBtn = document.getElementById("closeBtn");
    
    popupBtn.addEventListener("click", function() {
        popup.style.display = "block";
    });
    
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
    
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
}
