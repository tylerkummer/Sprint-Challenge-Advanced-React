import React, { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import Players from "./Players";

const value = [{"name":"Alex Morgan","country":"United States","searches":100,"id":0},{"name":"Megan Rapinoe","country":"United States","searches":99,"id":1},{"name":"Marta","country":"Brazil","searches":18,"id":2},{"name":"Rose Lavelle","country":"United States","searches":11,"id":3},{"name":"Carli Lloyd","country":"United States","searches":9,"id":4},{"name":"Julie Ertz","country":"United States","searches":8,"id":5},{"name":"Christen Press","country":"United States","searches":8,"id":6},{"name":"Kelley O'Hara","country":"United States","searches":8,"id":7},{"name":"Tobin Heath","country":"United States","searches":7,"id":8},{"name":"Wendie Renard","country":"France","searches":7,"id":9},{"name":"Kosovare Asllani","country":"Sweden","searches":6,"id":10},{"name":"Lieke Martens","country":"Netherlands","searches":6,"id":11},{"name":"Amandine Henry","country":"France","searches":5,"id":12},{"name":"Ali Krieger","country":"United States","searches":5,"id":13},{"name":"Mallory Pugh","country":"United States","searches":4,"id":14},{"name":"Samantha Kerr","country":"Australia","searches":4,"id":15},{"name":"Christiane Endler","country":"Chile","searches":4,"id":16},{"name":"Daniëlle van de Donk","country":"Netherlands","searches":4,"id":17},{"name":"Lucy Bronze","country":"England","searches":4,"id":18},{"name":"Ashlyn Harris","country":"United States","searches":4,"id":19},{"name":"Eugénie Le Sommer","country":"France","searches":4,"id":20},{"name":"Jackie Groenen","country":"Netherlands","searches":4,"id":21},{"name":"Abby Dahlkemper","country":"United States","searches":3,"id":22},{"name":"Steph Houghton","country":"England","searches":3,"id":23},{"name":"Vivianne Miedema","country":"Netherlands","searches":3,"id":24},{"name":"Barbara Bonansea","country":"Italy","searches":3,"id":25},{"name":"Giulia Gwinn","country":"Germany","searches":3,"id":26},{"name":"Shanice van de Sanden","country":"Netherlands","searches":3,"id":27},{"name":"Cristiane Rozeira","country":"Brazil","searches":3,"id":28},{"name":"Alex Greenwood","country":"England","searches":3,"id":29},{"name":"Bárbara Micheline do Monte Barbosa","country":"Brazil","searches":2,"id":30},{"name":"Alexandra Long","country":"United States","searches":2,"id":31},{"name":"Alyssa Naeher","country":"United States","searches":2,"id":32},{"name":"Gaëtane Thiney","country":"France","searches":2,"id":33},{"name":"Formiga","country":"Brazil","searches":2,"id":34},{"name":"Sari van Veenendaal","country":"Netherlands","searches":2,"id":35},{"name":"Sakina Karchaoui","country":"France","searches":2,"id":36},{"name":"Valérie Gauvin","country":"France","searches":2,"id":37},{"name":"Crystal Dunn","country":"United States","searches":2,"id":38},{"name":"Lindsey Horan","country":"United States","searches":2,"id":39},{"name":"Millie Bright","country":"England","searches":2,"id":40},{"name":"Sofia Jakobsson","country":"Sweden","searches":2,"id":41},{"name":"Sara Gama","country":"Italy","searches":2,"id":42},{"name":"Amel Majri","country":"France","searches":2,"id":43},{"name":"Marion Torrent","country":"France","searches":2,"id":44},{"name":"Toni Duggan","country":"England","searches":2,"id":45},{"name":"Sara Däbritz","country":"Germany","searches":2,"id":46},{"name":"Dzsenifer Marozsán","country":"Germany","searches":2,"id":47},{"name":"Delphine Cascarino","country":"France","searches":2,"id":48},{"name":"Laura Giuliani","country":"Italy","searches":1,"id":49},{"name":"Jill Roord","country":"Netherlands","searches":1,"id":50},{"name":"Sherida Spitse","country":"Netherlands","searches":1,"id":51},{"name":"Nikita Parris","country":"England","searches":1,"id":52},{"name":"Sam Mewis","country":"United States","searches":1,"id":53},{"name":"Tamires Cássia Dias Gomes","country":"Brazil","searches":1,"id":54},{"name":"Christine Sinclair","country":"Canada","searches":1,"id":55},{"name":"Stina Blackstenius","country":"Sweden","searches":1,"id":56},{"name":"Rachel Daly","country":"England","searches":1,"id":57},{"name":"Sarah Bouhaddi","country":"France","searches":1,"id":58},{"name":"Magdalena Eriksson","country":"Sweden","searches":1,"id":59},{"name":"Débora Cristiane de Oliveira","country":"Brazil","searches":1,"id":60},{"name":"Caroline Seger","country":"Sweden","searches":1,"id":61},{"name":"Valentina Giacinti","country":"Italy","searches":1,"id":62},{"name":"Becky Sauerbrunn","country":"United States","searches":1,"id":63},{"name":"Nilla Fischer","country":"Sweden","searches":1,"id":64},{"name":"Cristiana Girelli","country":"Italy","searches":1,"id":65},{"name":"Jennifer Hermoso","country":"Spain","searches":1,"id":66},{"name":"Fran Kirby","country":"England","searches":1,"id":67},{"name":"Manuela Giugliano","country":"Italy","searches":1,"id":68},{"name":"Lina Hurtig","country":"Sweden","searches":1,"id":69},{"name":"Ellen White","country":"England","searches":1,"id":70},{"name":"Hedvig Lindahl","country":"Sweden","searches":1,"id":71},{"name":"Fridolina Rolfö","country":"Sweden","searches":1,"id":72},{"name":"Alexandra Popp","country":"Germany","searches":1,"id":73},{"name":"Jill Scott","country":"England","searches":1,"id":74},{"name":"Karen Carney","country":"England","searches":1,"id":75},{"name":"María Pilar León","country":"Spain","searches":1,"id":76},{"name":"Aurora Galli","country":"Italy","searches":1,"id":77},{"name":"Martina Rosucci","country":"Italy","searches":1,"id":78},{"name":"Beth Mead","country":"England","searches":1,"id":79},{"name":"Andressa Alves da Silva","country":"Brazil","searches":1,"id":80},{"name":"Caroline Graham Hansen","country":"Norway","searches":1,"id":81},{"name":"Estefanía Banini","country":"Argentina","searches":1,"id":82},{"name":"Griedge Mbock Bathy","country":"France","searches":1,"id":83},{"name":"Merel van Dongen","country":"Netherlands","searches":1,"id":84},{"name":"Kadidiatou Diani","country":"France","searches":1,"id":85},{"name":"Andressa Cavalari Machry","country":"Brazil","searches":1,"id":86},{"name":"Alia Guagni","country":"Italy","searches":1,"id":87},{"name":"Lena Goeßling","country":"Germany","searches":1,"id":88},{"name":"Lineth Beerensteyn","country":"Netherlands","searches":1,"id":89},{"name":"Stefanie van der Gragt","country":"Netherlands","searches":1,"id":90},{"name":"Jodie Taylor","country":"England","searches":1,"id":91},{"name":"Melanie Leupolz","country":"Germany","searches":1,"id":92},{"name":"Elin Rubensson","country":"Sweden","searches":1,"id":93},{"name":"Morgan Brian","country":"United States","searches":1,"id":94},{"name":"Kika van Es","country":"Netherlands","searches":1,"id":95},{"name":"Ellie Carpenter","country":"Australia","searches":1,"id":96},{"name":"Lina Magull","country":"Germany","searches":1,"id":97},{"name":"Karen Bardsley","country":"England","searches":1,"id":98},{"name":"Jordyn Huitema","country":"Canada","searches":1,"id":99},{"name":"Tierna Davidson","country":"United States","searches":1,"id":100}]

test("renders Players without crashing", () => {
    render(<Players value={value}/>);
});

// test("checks for card", async() => {
//     const { getByLabelText, getByTestId, findByText } = render(<Players value={value} />);

//     await findByText(/cardStyle/);
//     await findByText(/bodyStyle/);
//     await findByText(/titleStyle/);
//     await findByText(/subtitleStyle/);
// });
