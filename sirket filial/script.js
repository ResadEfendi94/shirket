class Shirket {

    Ishci = [
        [],
        [],
        []
    ];


    constructor(ad, filial) {
        this.ShirketAdi = ad;
        this.FilialAdi = filial;
    };



    Gonder() {
        let melumat = this.Ishci;
        let ad = document.getElementById("ad").value;
        let soyad = document.getElementById("soyad").value;
        let maash = document.getElementById("maash").value;

        melumat[0].push(ad);
        melumat[1].push(soyad);
        melumat[2].push(maash);
    }

    IshciTable() {
        let melumat = this.Ishci;
        let table = `
        <table class="table table-striped table-hover">
        <tr>
        <th scope="col"> # </th>
        <th scope="col"> Ad </th>
        <th scope="col"> Soyad </th>
        <th scope="col"> Maash </th>
        </tr>
        `;

        for (let i = 0; i < melumat[0].length; i++) {
            table += `
            <tr>
                <th scope="col"> ${i + 1} </th>
                <th scope="col"> ${melumat[0][i]} </th>
                <th scope="col"> ${melumat[1][i]} </th>
                <th scope="col"> ${melumat[2][i]} </th>
            </tr>
            `;
        }
        table += `</table>`;
        return table;
    }
}

let Sirket = new Shirket("Bravo", "20Yanvar");

document.getElementsByTagName("h1")[0].innerHTML = Sirket.ShirketAdi;
document.getElementsByTagName("h2")[0].innerHTML = Sirket.FilialAdi + " " + "Filiali";
document.getElementsByTagName("section")[0].innerHTML = Sirket.IshciTable();

function ElaveEt() {
    document.getElementsByTagName("section")[0].innerHTML = Sirket.Gonder();
    document.getElementsByTagName("section")[0].innerHTML = Sirket.IshciTable();
    let melumat = this.Ishci;


}