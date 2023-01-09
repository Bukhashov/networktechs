var pdf = require("pdf-creator-node");
var fs = require("fs");

function Pdf(){
    var html = fs.readFileSync('./middleware/template.html', "utf8");
    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        footer: {
            height: "28mm",
            contents: {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };

    var user = [
        {
            lastname: "Berik",
            firstname: "Bukhashov",
            datafrom: "30.11.2022",
            datato: "30.11.2022"
        }
    ]

    var document = {
        html: html,
        data: {
          users: user,
        },
        path: "./output.pdf",
        type: "",
    };
    
    pdf.create(document, options)
    .then((res) => {
        console.log(res);
      })
    .catch((error) => {
        console.error(error);
    });
}
Pdf()