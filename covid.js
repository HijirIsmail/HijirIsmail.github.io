$(document).ready( function () {

    fetch()

    function fetch(){
        let url = "https://covid19.mathdro.id/api"

        let data = ''

        $.get(url, function (data){

            console.log(data.confirmed);
            console.log(data.recovered);
            console.log(data.deaths);

            data = `
            <td>${data.confirmed.value}</td>
            <td>${data.recovered.value}</td>
            <td>${data.deaths.value}</td>

            `

            $("#data").html(data)
        })
    }

    fetch1()

    function fetch1(){
        let url = "https://covid19.mathdro.id/api/countries/Indonesia"

        let dataindonesia = ''

        $.get(url, function (dataindonesia){

            console.log(dataindonesia.confirmed);
            console.log(dataindonesia.recovered);
            console.log(dataindonesia.deaths);

            dataindonesia = `
            <td>${dataindonesia.confirmed.value}</td>
            <td>${dataindonesia.recovered.value}</td>
            <td>${dataindonesia.deaths.value}</td>

            `

            $("#dataindonesia").html(dataindonesia)
        })
    }

    fetch2()

    function fetch2(){
        let url = "https://covid19.mathdro.id/api/countries/Singapore"

        let datasingapore = ''

        $.get(url, function (datasingapore){

            console.log(datasingapore.confirmed);
            console.log(datasingapore.recovered);
            console.log(datasingapore.deaths);

            datasingapore = `
            <td>${datasingapore.confirmed.value}</td>
            <td>${datasingapore.recovered.value}</td>
            <td>${datasingapore.deaths.value}</td>

            `

            $("#datasingapore").html(datasingapore)
        })
    }

    fetch3()

    function fetch3(){
        let url = "https://covid19.mathdro.id/api/countries/Malaysia"

        let datamalaysia = ''

        $.get(url, function (datamalaysia){

            console.log(datamalaysia.confirmed);
            console.log(datamalaysia.recovered);
            console.log(datamalaysia.deaths);

            datamalaysia = `
            <td>${datamalaysia.confirmed.value}</td>
            <td>${datamalaysia.recovered.value}</td>
            <td>${datamalaysia.deaths.value}</td>

            `

            $("#datamalaysia").html(datamalaysia)
        })
    }

    fetch4()

    function fetch4(){
        let url = "https://covid19.mathdro.id/api/countries/Vietnam"

        let datavietnam = ''

        $.get(url, function (datavietnam){

            console.log(datavietnam.confirmed);
            console.log(datavietnam.recovered);
            console.log(datavietnam.deaths);

            datavietnam = `
            <td>${datavietnam.confirmed.value}</td>
            <td>${datavietnam.recovered.value}</td>
            <td>${datavietnam.deaths.value}</td>

            `

            $("#datavietnam").html(datavietnam)
        })
    }

})