$(function () {
    $("#search").keyup(function (e) {
        // if ($("#search").val() != null ) {
            let search = $("#search").val();
            $.ajax({
                url: "backend.php",
                type: "POST",
                data: {
                    search
                },
                success: function (response) {
                    let datos = JSON.parse(response)
                    let template = "";
                    console.log(datos);

                    datos.forEach(element => {
                        template += `<tr>
                            <td>${element["idTask"]}</td>
                            <td>${element["nombre"]}</td>
                            <td>${element["description"]}</td>
                        </tr>`;
                    });

                    document.getElementById("tasks").innerHTML = template; 
                    
                }
            });
        // }
    });
});