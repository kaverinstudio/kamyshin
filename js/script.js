$(window).on("load", function () {
    let Picture = "img/zd.jpg";
    let Button = "#photo1";
    let Markers = [];
    Markers = [];

    DG.then(function () {

        map = DG.map('map', {
            center: [50.091588, 45.416302],
            zoom: 13
        });

        document.getElementById("photocity").setAttribute("src", Picture);
        $("#photo1").addClass("button_style");

        $("#photo1").hover(function () {
                document.getElementById("photocity").setAttribute("src", "img/zd.jpg");
            },
            function () {
                document.getElementById("photocity").setAttribute("src", Picture);
            });

        $("#photo2").hover(function () {
                document.getElementById("photocity").setAttribute("src", "img/mz.jpg");
            },
            function () {
                document.getElementById("photocity").setAttribute("src", Picture);
            });
        $("#photo3").hover(function () {
                document.getElementById("photocity").setAttribute("src", "img/mr.jpg");
            },
            function () {
                document.getElementById("photocity").setAttribute("src", Picture);

            });

        $("#photo1").click(function () {
            let marker1 = DG.marker([50.091588, 45.416302]).addTo(map).bindPopup('Железнодорожный вокзал');
            $(Button).removeClass("button_style");
            Button = "#photo1";
            Picture = "img/zd.jpg";
            document.getElementById("photocity").setAttribute("src", Picture);
            $("#photo1").addClass("button_style");
            marker1.addTo(map);
            marker1.openPopup();
            Markers.push(marker1);
        });

        $("#photo2").click(function () {
            let marker2 = DG.marker([50.078394, 45.412467]).addTo(map).bindPopup('Краеведческий музей');
            $(Button).removeClass("button_style");
            Button = "#photo2";
            Picture = "img/mz.jpg";
            document.getElementById("photocity").setAttribute("src", Picture);
            $("#photo2").addClass("button_style");
            marker2.addTo(map);
            marker2.openPopup();
            Markers.push(marker2);
        });

        $("#photo3").click(function () {
            let marker3 = DG.marker([50.100508, 45.427325]).addTo(map).bindPopup('Памятник Алексею Маресьеву');
            $(Button).removeClass("button_style");
            Button = "#photo3";
            Picture = "img/mr.jpg";
            document.getElementById("photocity").setAttribute("src", Picture);
            $("#photo3").addClass("button_style");
            marker3.addTo(map);
            marker3.openPopup();
            Markers.push(marker3);

        });
        $("#clear").click(function () {
            for (i = 0; i < Markers.length; i++) {
                Markers[i].removeFrom(map);
            }
        })
    });

})

function addInfo() {
    document.getElementById("login_info").innerText = document.AddInfo.add_info.value;

}

function removeInfo() {
    document.getElementById("login_info").innerText = "";

}