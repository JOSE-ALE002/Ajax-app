$(function () {

    function llenarTabla() {
        $.ajax({
            url: "task-list.php",
            type: "GET",
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
    }

    llenarTabla();


    $("#search").keyup(function (e) {
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
    });

    $("#taskForm").submit(function (e) {
        const postdata = {
            nombre: $("#name").val(),
            description: $("#description").val()
        };

        $.post("add-task.php", postdata,
            function (response) {
                switch (response) {
                    case "ok":
                        Swal.fire({
                            title: 'Guardado!',
                            text: "Se ha guardado correctamente",
                            icon: 'success',
                        });
                        break;
                    case "error":
                        Swal.fire({
                            title: 'Error!',
                            text: "Ha ocurrido un error",
                            icon: 'error',
                        });
                        break;
                }

                $("#taskForm").trigger('reset');
                llenarTabla();
            }
        );

        e.preventDefault();

    });
});