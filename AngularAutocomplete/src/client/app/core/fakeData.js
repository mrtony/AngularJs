(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('fakeData', fakeData);

    fakeData.$inject = [];

    function fakeData($http) {
        var service = {
            getContacts: getContacts,
            getContact:getContact,
            get countries() {
                return countries;
            }
        };

        var countries = [
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Aland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'AndorrA', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'S Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'RWANDA', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
            ];

            var data = [
                {
                    "Id": 1,
                    "Name": "Peter",
                    "Tel": "04 93 41 49 33",
                    "Country": "Grenada",
                    "Email": "diam.at@tempus.com"
                },
                {
                    "Id": 2,
                    "Name": "Lane",
                    "Tel": "07 07 81 21 76",
                    "Country": "Grenada",
                    "Email": "et@bibendumfermentum.org"
                },
                {
                    "Id": 3,
                    "Name": "Unity",
                    "Tel": "09 96 20 95 87",
                    "Country": "Hungary",
                    "Email": "nibh.sit@anteiaculisnec.net"
                },
                {
                    "Id": 4,
                    "Name": "Blythe",
                    "Tel": "09 66 49 96 41",
                    "Country": "Zimbabwe",
                    "Email": "scelerisque@nisiMauris.ca"
                },
                {
                    "Id": 5,
                    "Name": "Audrey",
                    "Tel": "02 26 62 41 86",
                    "Country": "Solomon Islands",
                    "Email": "magna@nonummyutmolestie.co.uk"
                },
                {
                    "Id": 6,
                    "Name": "Evelyn",
                    "Tel": "05 52 77 12 47",
                    "Country": "Azerbaijan",
                    "Email": "scelerisque.neque.Nullam@arcuAliquamultrices.org"
                },
                {
                    "Id": 7,
                    "Name": "Abigail",
                    "Tel": "05 53 41 12 12",
                    "Country": "Azerbaijan",
                    "Email": "dapibus@ipsumnon.org"
                },
                {
                    "Id": 8,
                    "Name": "Sylvia",
                    "Tel": "06 76 33 37 54",
                    "Country": "Bulgaria",
                    "Email": "enim.Nunc@lectus.net"
                },
                {
                    "Id": 9,
                    "Name": "Erich",
                    "Tel": "06 64 76 21 46",
                    "Country": "South Sudan",
                    "Email": "elit@nonleo.ca"
                },
                {
                    "Id": 10,
                    "Name": "Abel",
                    "Tel": "08 03 46 44 78",
                    "Country": "Zambia",
                    "Email": "ut.quam.vel@Intinciduntcongue.edu"
                },
                {
                    "Id": 11,
                    "Name": "Michelle",
                    "Tel": "03 85 85 15 55",
                    "Country": "Slovakia",
                    "Email": "Proin@lectuspedeet.com"
                },
                {
                    "Id": 12,
                    "Name": "Shaine",
                    "Tel": "05 18 30 03 24",
                    "Country": "Micronesia",
                    "Email": "elit.sed@orci.org"
                },
                {
                    "Id": 13,
                    "Name": "Odette",
                    "Tel": "09 37 44 96 67",
                    "Country": "Estonia",
                    "Email": "Fusce@augueac.edu"
                },
                {
                    "Id": 14,
                    "Name": "Breanna",
                    "Tel": "05 58 32 67 59",
                    "Country": "Montenegro",
                    "Email": "purus.accumsan.interdum@utlacus.org"
                },
                {
                    "Id": 15,
                    "Name": "Stone",
                    "Tel": "03 50 87 34 75",
                    "Country": "Mayotte",
                    "Email": "Pellentesque@ultrices.edu"
                },
                {
                    "Id": 16,
                    "Name": "Sydnee",
                    "Tel": "07 84 01 44 74",
                    "Country": "Yemen",
                    "Email": "rutrum.magna@mollisnec.com"
                },
                {
                    "Id": 17,
                    "Name": "Dominique",
                    "Tel": "02 04 05 52 67",
                    "Country": "Netherlands",
                    "Email": "mus@pharetraut.net"
                },
                {
                    "Id": 18,
                    "Name": "Tara",
                    "Tel": "07 00 66 19 25",
                    "Country": "Macao",
                    "Email": "sem.ut.dolor@facilisisSuspendisse.org"
                },
                {
                    "Id": 19,
                    "Name": "Travis",
                    "Tel": "03 42 09 10 28",
                    "Country": "Panama",
                    "Email": "pede@Vivamusnibh.edu"
                },
                {
                    "Id": 20,
                    "Name": "Rylee",
                    "Tel": "03 40 81 88 61",
                    "Country": "India",
                    "Email": "sem@vitae.org"
                },
                {
                    "Id": 21,
                    "Name": "Hyacinth",
                    "Tel": "04 48 34 46 39",
                    "Country": "Australia",
                    "Email": "diam.Duis.mi@arcuacorci.org"
                },
                {
                    "Id": 22,
                    "Name": "Lacey",
                    "Tel": "09 35 46 87 50",
                    "Country": "Brunei",
                    "Email": "velit.eu.sem@acrisus.ca"
                },
                {
                    "Id": 23,
                    "Name": "Eden",
                    "Tel": "07 16 10 71 03",
                    "Country": "Ghana",
                    "Email": "feugiat.Lorem.ipsum@commodo.ca"
                },
                {
                    "Id": 24,
                    "Name": "Tobias",
                    "Tel": "01 09 73 54 62",
                    "Country": "Tajikistan",
                    "Email": "erat.vel@a.edu"
                },
                {
                    "Id": 25,
                    "Name": "Cole",
                    "Tel": "07 15 45 59 48",
                    "Country": "Qatar",
                    "Email": "Integer@et.net"
                },
                {
                    "Id": 26,
                    "Name": "Todd",
                    "Tel": "08 63 94 18 75",
                    "Country": "Haiti",
                    "Email": "vitae.erat@diamDuis.net"
                },
                {
                    "Id": 27,
                    "Name": "Brenda",
                    "Tel": "09 10 65 27 75",
                    "Country": "Saint Pierre and Miquelon",
                    "Email": "in.faucibus.orci@Integerurna.co.uk"
                },
                {
                    "Id": 28,
                    "Name": "Thomas",
                    "Tel": "06 24 04 99 02",
                    "Country": "Solomon Islands",
                    "Email": "Duis@Cum.com"
                },
                {
                    "Id": 29,
                    "Name": "Denton",
                    "Tel": "07 15 60 51 58",
                    "Country": "Qatar",
                    "Email": "lorem.eu.metus@ligula.edu"
                },
                {
                    "Id": 30,
                    "Name": "Arsenio",
                    "Tel": "08 00 23 78 34",
                    "Country": "New Caledonia",
                    "Email": "magna.et@dolor.co.uk"
                },
                {
                    "Id": 31,
                    "Name": "Guy",
                    "Tel": "08 17 94 23 18",
                    "Country": "Cameroon",
                    "Email": "iaculis.enim@quisdiam.edu"
                },
                {
                    "Id": 32,
                    "Name": "Medge",
                    "Tel": "04 89 99 62 37",
                    "Country": "Yemen",
                    "Email": "Donec.nibh.Quisque@penatibusetmagnis.edu"
                },
                {
                    "Id": 33,
                    "Name": "Shannon",
                    "Tel": "04 57 45 20 15",
                    "Country": "Argentina",
                    "Email": "at.libero@enim.com"
                },
                {
                    "Id": 34,
                    "Name": "Xavier",
                    "Tel": "01 91 45 36 09",
                    "Country": "Peru",
                    "Email": "nunc@odiosagittis.edu"
                },
                {
                    "Id": 35,
                    "Name": "Jasper",
                    "Tel": "05 61 03 63 43",
                    "Country": "Seychelles",
                    "Email": "lobortis@egestasa.net"
                },
                {
                    "Id": 36,
                    "Name": "Evan",
                    "Tel": "09 58 14 20 10",
                    "Country": "Saudi Arabia",
                    "Email": "Quisque@lectusquis.edu"
                },
                {
                    "Id": 37,
                    "Name": "Clarke",
                    "Tel": "01 68 02 13 48",
                    "Country": "South Sudan",
                    "Email": "Etiam.gravida.molestie@anteipsum.net"
                },
                {
                    "Id": 38,
                    "Name": "Alice",
                    "Tel": "07 62 00 81 56",
                    "Country": "Western Sahara",
                    "Email": "id.libero.Donec@nibhlacinia.co.uk"
                },
                {
                    "Id": 39,
                    "Name": "Isadora",
                    "Tel": "01 98 89 49 07",
                    "Country": "Korea, South",
                    "Email": "pharetra@ipsumsodalespurus.co.uk"
                },
                {
                    "Id": 40,
                    "Name": "Sierra",
                    "Tel": "03 29 44 78 34",
                    "Country": "Guadeloupe",
                    "Email": "nibh.enim.gravida@hendrerita.com"
                },
                {
                    "Id": 41,
                    "Name": "Blaze",
                    "Tel": "04 09 67 99 15",
                    "Country": "Uganda",
                    "Email": "Nunc.commodo@a.ca"
                },
                {
                    "Id": 42,
                    "Name": "Graham",
                    "Tel": "03 81 87 79 17",
                    "Country": "Chile",
                    "Email": "magna@hendrerit.net"
                },
                {
                    "Id": 43,
                    "Name": "Lael",
                    "Tel": "04 02 40 62 91",
                    "Country": "Zimbabwe",
                    "Email": "taciti.sociosqu.ad@eratvelpede.co.uk"
                },
                {
                    "Id": 44,
                    "Name": "Miriam",
                    "Tel": "05 75 02 96 52",
                    "Country": "Gibraltar",
                    "Email": "scelerisque.scelerisque.dui@telluseu.com"
                },
                {
                    "Id": 45,
                    "Name": "Hu",
                    "Tel": "02 72 07 88 63",
                    "Country": "Åland Islands",
                    "Email": "pharetra.Nam.ac@magnaNamligula.co.uk"
                },
                {
                    "Id": 46,
                    "Name": "Aidan",
                    "Tel": "05 23 72 58 77",
                    "Country": "Paraguay",
                    "Email": "arcu.Aliquam@posuere.com"
                },
                {
                    "Id": 47,
                    "Name": "Benedict",
                    "Tel": "09 40 42 30 94",
                    "Country": "Côte D'Ivoire (Ivory Coast)",
                    "Email": "quis.pede.Praesent@euismodacfermentum.ca"
                },
                {
                    "Id": 48,
                    "Name": "Karyn",
                    "Tel": "06 39 95 27 33",
                    "Country": "Antarctica",
                    "Email": "Duis@lobortistellusjusto.org"
                },
                {
                    "Id": 49,
                    "Name": "Craig",
                    "Tel": "01 48 20 49 77",
                    "Country": "Åland Islands",
                    "Email": "dolor.Fusce@dictum.org"
                },
                {
                    "Id": 50,
                    "Name": "Sage",
                    "Tel": "01 74 63 53 95",
                    "Country": "Ethiopia",
                    "Email": "vestibulum.nec@varius.ca"
                },
                {
                    "Id": 51,
                    "Name": "Tanek",
                    "Tel": "05 33 08 54 61",
                    "Country": "Tokelau",
                    "Email": "lorem.ipsum.sodales@eu.org"
                },
                {
                    "Id": 52,
                    "Name": "Lunea",
                    "Tel": "08 57 81 44 48",
                    "Country": "Samoa",
                    "Email": "Curabitur.vel.lectus@miacmattis.co.uk"
                },
                {
                    "Id": 53,
                    "Name": "Paula",
                    "Tel": "05 77 61 13 61",
                    "Country": "Guatemala",
                    "Email": "ut.molestie.in@at.org"
                },
                {
                    "Id": 54,
                    "Name": "Teegan",
                    "Tel": "06 35 98 74 59",
                    "Country": "Luxembourg",
                    "Email": "Aliquam@dui.org"
                },
                {
                    "Id": 55,
                    "Name": "Bianca",
                    "Tel": "02 39 29 98 71",
                    "Country": "Gambia",
                    "Email": "Curabitur.ut.odio@temporbibendum.ca"
                },
                {
                    "Id": 56,
                    "Name": "Blossom",
                    "Tel": "07 80 02 91 03",
                    "Country": "Indonesia",
                    "Email": "Nunc.ut.erat@elit.ca"
                },
                {
                    "Id": 57,
                    "Name": "Fay",
                    "Tel": "09 16 42 21 75",
                    "Country": "Portugal",
                    "Email": "libero.lacus@posuere.edu"
                },
                {
                    "Id": 58,
                    "Name": "Elaine",
                    "Tel": "02 65 99 81 64",
                    "Country": "Vanuatu",
                    "Email": "lectus@sociisnatoque.com"
                },
                {
                    "Id": 59,
                    "Name": "Paloma",
                    "Tel": "04 20 21 45 08",
                    "Country": "Morocco",
                    "Email": "dictum@nuncsitamet.edu"
                },
                {
                    "Id": 60,
                    "Name": "Lance",
                    "Tel": "09 07 64 88 21",
                    "Country": "Guam",
                    "Email": "eu@Nullamut.net"
                },
                {
                    "Id": 61,
                    "Name": "Jermaine",
                    "Tel": "05 38 07 99 60",
                    "Country": "Singapore",
                    "Email": "sit.amet.diam@commodohendreritDonec.net"
                },
                {
                    "Id": 62,
                    "Name": "Kelsie",
                    "Tel": "02 88 34 05 03",
                    "Country": "Martinique",
                    "Email": "mollis.dui@semNulla.com"
                },
                {
                    "Id": 63,
                    "Name": "Dora",
                    "Tel": "06 87 93 46 46",
                    "Country": "Tuvalu",
                    "Email": "mus@atauctorullamcorper.org"
                },
                {
                    "Id": 64,
                    "Name": "Daquan",
                    "Tel": "01 81 72 14 62",
                    "Country": "Venezuela",
                    "Email": "non.sollicitudin@eget.net"
                },
                {
                    "Id": 65,
                    "Name": "Wing",
                    "Tel": "03 55 44 88 34",
                    "Country": "Lesotho",
                    "Email": "lorem.luctus@fringillaporttitorvulputate.co.uk"
                },
                {
                    "Id": 66,
                    "Name": "Ima",
                    "Tel": "01 75 24 20 13",
                    "Country": "Tajikistan",
                    "Email": "ipsum.Phasellus@ultriciesadipiscing.org"
                },
                {
                    "Id": 67,
                    "Name": "Barry",
                    "Tel": "07 54 57 99 32",
                    "Country": "Nicaragua",
                    "Email": "Aliquam@anteipsumprimis.co.uk"
                },
                {
                    "Id": 68,
                    "Name": "Austin",
                    "Tel": "01 89 53 20 58",
                    "Country": "Antigua and Barbuda",
                    "Email": "volutpat@ipsum.edu"
                },
                {
                    "Id": 69,
                    "Name": "Graham",
                    "Tel": "09 96 62 09 42",
                    "Country": "Finland",
                    "Email": "litora.torquent@Etiamvestibulum.com"
                },
                {
                    "Id": 70,
                    "Name": "Kasper",
                    "Tel": "05 77 17 17 08",
                    "Country": "Oman",
                    "Email": "at@imperdietullamcorper.net"
                },
                {
                    "Id": 71,
                    "Name": "Melodie",
                    "Tel": "03 31 89 29 51",
                    "Country": "Spain",
                    "Email": "non.justo@ametconsectetuer.edu"
                },
                {
                    "Id": 72,
                    "Name": "Cassidy",
                    "Tel": "01 65 20 02 74",
                    "Country": "Namibia",
                    "Email": "ipsum@iaculis.ca"
                },
                {
                    "Id": 73,
                    "Name": "Micah",
                    "Tel": "05 58 26 63 55",
                    "Country": "Bouvet Island",
                    "Email": "eget@ligula.org"
                },
                {
                    "Id": 74,
                    "Name": "Levi",
                    "Tel": "08 76 04 60 04",
                    "Country": "Cuba",
                    "Email": "Quisque@Sed.edu"
                },
                {
                    "Id": 75,
                    "Name": "Lee",
                    "Tel": "02 18 32 14 30",
                    "Country": "Turkmenistan",
                    "Email": "luctus@nonhendrerit.ca"
                },
                {
                    "Id": 76,
                    "Name": "Olga",
                    "Tel": "05 74 87 53 04",
                    "Country": "Bolivia",
                    "Email": "egestas.urna.justo@Nullaaliquet.org"
                },
                {
                    "Id": 77,
                    "Name": "Adele",
                    "Tel": "05 45 54 69 33",
                    "Country": "Kazakhstan",
                    "Email": "scelerisque@Etiamvestibulum.net"
                },
                {
                    "Id": 78,
                    "Name": "Judah",
                    "Tel": "01 33 18 01 02",
                    "Country": "Montserrat",
                    "Email": "tempus.mauris@montesnascetur.org"
                },
                {
                    "Id": 79,
                    "Name": "Beatrice",
                    "Tel": "09 07 26 14 04",
                    "Country": "Sint Maarten",
                    "Email": "facilisis.facilisis.magna@Crasegetnisi.org"
                },
                {
                    "Id": 80,
                    "Name": "Neve",
                    "Tel": "07 57 70 64 34",
                    "Country": "Indonesia",
                    "Email": "a.aliquet.vel@aaliquet.co.uk"
                },
                {
                    "Id": 81,
                    "Name": "Denise",
                    "Tel": "03 72 24 26 45",
                    "Country": "Myanmar",
                    "Email": "nisl.Quisque.fringilla@Proinnon.net"
                },
                {
                    "Id": 82,
                    "Name": "August",
                    "Tel": "09 67 70 66 46",
                    "Country": "Solomon Islands",
                    "Email": "gravida.sagittis.Duis@sed.edu"
                },
                {
                    "Id": 83,
                    "Name": "Gail",
                    "Tel": "04 25 88 59 27",
                    "Country": "China",
                    "Email": "lacus.Cras@ametanteVivamus.com"
                },
                {
                    "Id": 84,
                    "Name": "Chaim",
                    "Tel": "06 67 41 25 88",
                    "Country": "Anguilla",
                    "Email": "neque@enimgravida.edu"
                },
                {
                    "Id": 85,
                    "Name": "Tamara",
                    "Tel": "01 68 84 17 31",
                    "Country": "United Arab Emirates",
                    "Email": "in@Etiambibendum.com"
                },
                {
                    "Id": 86,
                    "Name": "Simon",
                    "Tel": "08 98 79 14 68",
                    "Country": "Fiji",
                    "Email": "malesuada@nonnisiAenean.edu"
                },
                {
                    "Id": 87,
                    "Name": "Leandra",
                    "Tel": "05 75 50 45 79",
                    "Country": "Bahrain",
                    "Email": "vitae.aliquet@eu.ca"
                },
                {
                    "Id": 88,
                    "Name": "Alyssa",
                    "Tel": "09 65 22 39 59",
                    "Country": "South Georgia and The South Sandwich Islands",
                    "Email": "fringilla.purus@cursusnonegestas.net"
                },
                {
                    "Id": 89,
                    "Name": "Erasmus",
                    "Tel": "07 38 17 19 44",
                    "Country": "Serbia",
                    "Email": "interdum@magnaCras.org"
                },
                {
                    "Id": 90,
                    "Name": "Mikayla",
                    "Tel": "03 67 83 70 45",
                    "Country": "Azerbaijan",
                    "Email": "erat@acmattis.com"
                },
                {
                    "Id": 91,
                    "Name": "Fleur",
                    "Tel": "08 50 44 80 71",
                    "Country": "Germany",
                    "Email": "enim.non.nisi@egestasFuscealiquet.com"
                },
                {
                    "Id": 92,
                    "Name": "Heidi",
                    "Tel": "01 25 59 18 94",
                    "Country": "Morocco",
                    "Email": "arcu.et.pede@consequatnec.net"
                },
                {
                    "Id": 93,
                    "Name": "Katell",
                    "Tel": "03 90 15 76 78",
                    "Country": "Sri Lanka",
                    "Email": "Suspendisse@neccursusa.edu"
                },
                {
                    "Id": 94,
                    "Name": "Forrest",
                    "Tel": "09 15 16 69 71",
                    "Country": "Bhutan",
                    "Email": "sapien.gravida@Utnecurna.ca"
                },
                {
                    "Id": 95,
                    "Name": "Angela",
                    "Tel": "08 40 00 19 24",
                    "Country": "Sint Maarten",
                    "Email": "Etiam@arcu.net"
                },
                {
                    "Id": 96,
                    "Name": "Ginger",
                    "Tel": "04 77 60 42 91",
                    "Country": "Pakistan",
                    "Email": "odio.semper@gravida.org"
                },
                {
                    "Id": 97,
                    "Name": "Kaseem",
                    "Tel": "03 41 34 89 79",
                    "Country": "Bahamas",
                    "Email": "Nulla.tempor@pedesagittisaugue.net"
                },
                {
                    "Id": 98,
                    "Name": "Aquila",
                    "Tel": "08 65 47 05 97",
                    "Country": "Macedonia",
                    "Email": "velit.eget.laoreet@eleifendnecmalesuada.org"
                },
                {
                    "Id": 99,
                    "Name": "Eve",
                    "Tel": "01 03 80 19 03",
                    "Country": "Benin",
                    "Email": "volutpat.nunc.sit@utaliquam.net"
                },
                {
                    "Id": 100,
                    "Name": "Laura",
                    "Tel": "08 30 07 23 24",
                    "Country": "Poland",
                    "Email": "neque.et@estNuncullamcorper.edu"
                }
            ];
            
        return service;

        function getContacts() { 
            return [
                {
                    "Id": 1,
                    "Name": "Peter",
                    "Tel": "04 93 41 49 33",
                    "Country": "Grenada",
                    "Email": "diam.at@tempus.com"
                },
                {
                    "Id": 2,
                    "Name": "Lane",
                    "Tel": "07 07 81 21 76",
                    "Country": "Grenada",
                    "Email": "et@bibendumfermentum.org"
                },
                {
                    "Id": 3,
                    "Name": "Unity",
                    "Tel": "09 96 20 95 87",
                    "Country": "Hungary",
                    "Email": "nibh.sit@anteiaculisnec.net"
                },
                {
                    "Id": 4,
                    "Name": "Blythe",
                    "Tel": "09 66 49 96 41",
                    "Country": "Zimbabwe",
                    "Email": "scelerisque@nisiMauris.ca"
                },
                {
                    "Id": 5,
                    "Name": "Audrey",
                    "Tel": "02 26 62 41 86",
                    "Country": "Solomon Islands",
                    "Email": "magna@nonummyutmolestie.co.uk"
                },
                {
                    "Id": 6,
                    "Name": "Evelyn",
                    "Tel": "05 52 77 12 47",
                    "Country": "Azerbaijan",
                    "Email": "scelerisque.neque.Nullam@arcuAliquamultrices.org"
                },
                {
                    "Id": 7,
                    "Name": "Abigail",
                    "Tel": "05 53 41 12 12",
                    "Country": "Azerbaijan",
                    "Email": "dapibus@ipsumnon.org"
                },
                {
                    "Id": 8,
                    "Name": "Sylvia",
                    "Tel": "06 76 33 37 54",
                    "Country": "Bulgaria",
                    "Email": "enim.Nunc@lectus.net"
                },
                {
                    "Id": 9,
                    "Name": "Erich",
                    "Tel": "06 64 76 21 46",
                    "Country": "South Sudan",
                    "Email": "elit@nonleo.ca"
                },
                {
                    "Id": 10,
                    "Name": "Abel",
                    "Tel": "08 03 46 44 78",
                    "Country": "Zambia",
                    "Email": "ut.quam.vel@Intinciduntcongue.edu"
                },
                {
                    "Id": 11,
                    "Name": "Michelle",
                    "Tel": "03 85 85 15 55",
                    "Country": "Slovakia",
                    "Email": "Proin@lectuspedeet.com"
                },
                {
                    "Id": 12,
                    "Name": "Shaine",
                    "Tel": "05 18 30 03 24",
                    "Country": "Micronesia",
                    "Email": "elit.sed@orci.org"
                },
                {
                    "Id": 13,
                    "Name": "Odette",
                    "Tel": "09 37 44 96 67",
                    "Country": "Estonia",
                    "Email": "Fusce@augueac.edu"
                },
                {
                    "Id": 14,
                    "Name": "Breanna",
                    "Tel": "05 58 32 67 59",
                    "Country": "Montenegro",
                    "Email": "purus.accumsan.interdum@utlacus.org"
                },
                {
                    "Id": 15,
                    "Name": "Stone",
                    "Tel": "03 50 87 34 75",
                    "Country": "Mayotte",
                    "Email": "Pellentesque@ultrices.edu"
                },
                {
                    "Id": 16,
                    "Name": "Sydnee",
                    "Tel": "07 84 01 44 74",
                    "Country": "Yemen",
                    "Email": "rutrum.magna@mollisnec.com"
                },
                {
                    "Id": 17,
                    "Name": "Dominique",
                    "Tel": "02 04 05 52 67",
                    "Country": "Netherlands",
                    "Email": "mus@pharetraut.net"
                },
                {
                    "Id": 18,
                    "Name": "Tara",
                    "Tel": "07 00 66 19 25",
                    "Country": "Macao",
                    "Email": "sem.ut.dolor@facilisisSuspendisse.org"
                },
                {
                    "Id": 19,
                    "Name": "Travis",
                    "Tel": "03 42 09 10 28",
                    "Country": "Panama",
                    "Email": "pede@Vivamusnibh.edu"
                },
                {
                    "Id": 20,
                    "Name": "Rylee",
                    "Tel": "03 40 81 88 61",
                    "Country": "India",
                    "Email": "sem@vitae.org"
                },
                {
                    "Id": 21,
                    "Name": "Hyacinth",
                    "Tel": "04 48 34 46 39",
                    "Country": "Australia",
                    "Email": "diam.Duis.mi@arcuacorci.org"
                },
                {
                    "Id": 22,
                    "Name": "Lacey",
                    "Tel": "09 35 46 87 50",
                    "Country": "Brunei",
                    "Email": "velit.eu.sem@acrisus.ca"
                },
                {
                    "Id": 23,
                    "Name": "Eden",
                    "Tel": "07 16 10 71 03",
                    "Country": "Ghana",
                    "Email": "feugiat.Lorem.ipsum@commodo.ca"
                },
                {
                    "Id": 24,
                    "Name": "Tobias",
                    "Tel": "01 09 73 54 62",
                    "Country": "Tajikistan",
                    "Email": "erat.vel@a.edu"
                },
                {
                    "Id": 25,
                    "Name": "Cole",
                    "Tel": "07 15 45 59 48",
                    "Country": "Qatar",
                    "Email": "Integer@et.net"
                },
                {
                    "Id": 26,
                    "Name": "Todd",
                    "Tel": "08 63 94 18 75",
                    "Country": "Haiti",
                    "Email": "vitae.erat@diamDuis.net"
                },
                {
                    "Id": 27,
                    "Name": "Brenda",
                    "Tel": "09 10 65 27 75",
                    "Country": "Saint Pierre and Miquelon",
                    "Email": "in.faucibus.orci@Integerurna.co.uk"
                },
                {
                    "Id": 28,
                    "Name": "Thomas",
                    "Tel": "06 24 04 99 02",
                    "Country": "Solomon Islands",
                    "Email": "Duis@Cum.com"
                },
                {
                    "Id": 29,
                    "Name": "Denton",
                    "Tel": "07 15 60 51 58",
                    "Country": "Qatar",
                    "Email": "lorem.eu.metus@ligula.edu"
                },
                {
                    "Id": 30,
                    "Name": "Arsenio",
                    "Tel": "08 00 23 78 34",
                    "Country": "New Caledonia",
                    "Email": "magna.et@dolor.co.uk"
                },
                {
                    "Id": 31,
                    "Name": "Guy",
                    "Tel": "08 17 94 23 18",
                    "Country": "Cameroon",
                    "Email": "iaculis.enim@quisdiam.edu"
                },
                {
                    "Id": 32,
                    "Name": "Medge",
                    "Tel": "04 89 99 62 37",
                    "Country": "Yemen",
                    "Email": "Donec.nibh.Quisque@penatibusetmagnis.edu"
                },
                {
                    "Id": 33,
                    "Name": "Shannon",
                    "Tel": "04 57 45 20 15",
                    "Country": "Argentina",
                    "Email": "at.libero@enim.com"
                },
                {
                    "Id": 34,
                    "Name": "Xavier",
                    "Tel": "01 91 45 36 09",
                    "Country": "Peru",
                    "Email": "nunc@odiosagittis.edu"
                },
                {
                    "Id": 35,
                    "Name": "Jasper",
                    "Tel": "05 61 03 63 43",
                    "Country": "Seychelles",
                    "Email": "lobortis@egestasa.net"
                },
                {
                    "Id": 36,
                    "Name": "Evan",
                    "Tel": "09 58 14 20 10",
                    "Country": "Saudi Arabia",
                    "Email": "Quisque@lectusquis.edu"
                },
                {
                    "Id": 37,
                    "Name": "Clarke",
                    "Tel": "01 68 02 13 48",
                    "Country": "South Sudan",
                    "Email": "Etiam.gravida.molestie@anteipsum.net"
                },
                {
                    "Id": 38,
                    "Name": "Alice",
                    "Tel": "07 62 00 81 56",
                    "Country": "Western Sahara",
                    "Email": "id.libero.Donec@nibhlacinia.co.uk"
                },
                {
                    "Id": 39,
                    "Name": "Isadora",
                    "Tel": "01 98 89 49 07",
                    "Country": "Korea, South",
                    "Email": "pharetra@ipsumsodalespurus.co.uk"
                },
                {
                    "Id": 40,
                    "Name": "Sierra",
                    "Tel": "03 29 44 78 34",
                    "Country": "Guadeloupe",
                    "Email": "nibh.enim.gravida@hendrerita.com"
                },
                {
                    "Id": 41,
                    "Name": "Blaze",
                    "Tel": "04 09 67 99 15",
                    "Country": "Uganda",
                    "Email": "Nunc.commodo@a.ca"
                },
                {
                    "Id": 42,
                    "Name": "Graham",
                    "Tel": "03 81 87 79 17",
                    "Country": "Chile",
                    "Email": "magna@hendrerit.net"
                },
                {
                    "Id": 43,
                    "Name": "Lael",
                    "Tel": "04 02 40 62 91",
                    "Country": "Zimbabwe",
                    "Email": "taciti.sociosqu.ad@eratvelpede.co.uk"
                },
                {
                    "Id": 44,
                    "Name": "Miriam",
                    "Tel": "05 75 02 96 52",
                    "Country": "Gibraltar",
                    "Email": "scelerisque.scelerisque.dui@telluseu.com"
                },
                {
                    "Id": 45,
                    "Name": "Hu",
                    "Tel": "02 72 07 88 63",
                    "Country": "Åland Islands",
                    "Email": "pharetra.Nam.ac@magnaNamligula.co.uk"
                },
                {
                    "Id": 46,
                    "Name": "Aidan",
                    "Tel": "05 23 72 58 77",
                    "Country": "Paraguay",
                    "Email": "arcu.Aliquam@posuere.com"
                },
                {
                    "Id": 47,
                    "Name": "Benedict",
                    "Tel": "09 40 42 30 94",
                    "Country": "Côte D'Ivoire (Ivory Coast)",
                    "Email": "quis.pede.Praesent@euismodacfermentum.ca"
                },
                {
                    "Id": 48,
                    "Name": "Karyn",
                    "Tel": "06 39 95 27 33",
                    "Country": "Antarctica",
                    "Email": "Duis@lobortistellusjusto.org"
                },
                {
                    "Id": 49,
                    "Name": "Craig",
                    "Tel": "01 48 20 49 77",
                    "Country": "Åland Islands",
                    "Email": "dolor.Fusce@dictum.org"
                },
                {
                    "Id": 50,
                    "Name": "Sage",
                    "Tel": "01 74 63 53 95",
                    "Country": "Ethiopia",
                    "Email": "vestibulum.nec@varius.ca"
                }
            ];
        }
        
        function getContact(index) { 
            return data[index];
        }
        
    }
})();