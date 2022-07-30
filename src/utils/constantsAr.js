

export const categories = {
    Contractor: [
        {
            value_ar: "الكهرباء",
            value_en: "Electrical"
        },
        {
            value_ar: "HVAC",
            value_en: "HVAC"
        },
        {
            value_ar: "السباكة",
            value_en: "Plumbing"
        },
        {
            value_ar: "أعمال مدنية",
            value_en: "Civil Works"
        },
        {
            value_ar: "إنهاء الأشغال",
            value_en: "Finish Works"
        },
        {
            value_ar: "مكافحة الحريق",
            value_en: "Fire Fighting"
        },
        {
            value_ar: "إتمام تسليم المشروع",
            value_en: "Complete Project Handover"
        },
    ],
    Handyman: [
        {
            value_ar: "الكهرباء",
            value_en: "Electrical"
        },
        {
            value_ar: "HVAC",
            value_en: "HVAC"
        },
        {
            value_ar: "السباكة",
            value_en: "Plumbing"
        }
    ],
    Designer: [
        {
            value_ar: "مصممي المباني",
            value_en: "Building Designers"
        }
    ],
    Consultant: [
        {
            value_ar: "استشاريو البناء",
            value_en: "Building Consultants"
        }
    ]
};

export const subCategories = {
    Contractor: {
        "Electrical": [
            {
                value_ar: "مقاول أعمال كهربائية (جهد متوسط)",
                value_en: "Electrical (Medium Voltage) Works Contractor"
            },
            {
                value_ar: "مقاول أعمال تيار منخفض (هاتف ، تاريخ ، تلفزيون)",
                value_en: "Low Current (Telephone, date, TV) Works Contractor"
            },
            {
                value_ar: "مقاول تركيب كاميرات وكاميرات مراقبة",
                value_en: "Camera and CCTV Installation Contractor"
            },
            {
                value_ar: "مقاول أعمال كهربائية (جهد عالي)",
                value_en: "Electrical (High Voltage) Works Contractor"
            },
            {
                value_ar: "مقاول اعمال كهربائية",
                value_en: "All Electrical Works Contractor"
            }
        ],
        "HVAC": [
            {
                value_ar: "مقاول تركيب مكيفات سبليت",
                value_en: "Split AC Installation Contractor"
            },
            {
                value_ar: "مقاول تركيب مكيفات الهواء المخفية والمغلفة",
                value_en: "Concealed and Package AC installation Contractor"
            },
            {
                value_ar: "مقاول تركيب VRV و VRF",
                value_en: "VRV and VRF Installation Contractor"
            },
            {
                value_ar: "مقاول تركيب المبردات",
                value_en: "Chiller Instalation Contractor"
            },
            {
                value_ar: "جميع مقاول أعمال HVAC",
                value_en: "All HVAC Works Contractor"
            }
        ],
        "Plumbing": [
            {
                value_ar: "داخل مقاول أعمال السباكة",
                value_en: "Inside Building, Plumbing Works Contractor"
            },
            {
                value_ar: "مقاول أعمال خط الصرف الصحي الرئيسي",
                value_en: "Main sewer line works Contractor"
            },
            {
                value_ar: "مقاول أعمال حمامات السباحة والجاكوزي والساونا",
                value_en: "Swimming Pool, Jacuzzi and Sauna Works Contractor"
            },
            {
                value_ar: "مقاول أعمال رش الحدائق",
                value_en: "Garden Sprinkler Works Contractor"
            },
            {
                value_ar: "مقاول أعمال أنابيب الري",
                value_en: "Irrigation Piping Works Contractor"
            },
            {
                value_ar: "مقاول أعمال السباكة",
                value_en: "All Plumbing Works Contractor"
            }
        ],
        "Civil Works": [
            {
                value_ar: "مقاول أعمال حديدية",
                value_en: "Steel Works Contractor"
            },
            {
                value_ar: "مقاول ابواب خشب للاعمال الخشبية",
                value_en: "Shuttering Wood Works Contractor"
            },
            {
                value_ar: "مقاول أعمال السقالات",
                value_en: "Scaffolding Works Contractor"
            },
            {
                value_ar: "مقاول أعمال خرسانية",
                value_en: "Concrete Works Contractor"
            },
            {
                value_ar: "مقاول أعمال الجبس",
                value_en: "Plaster Works Contractor"
            },
            {
                value_ar: "مقاول أعمال البناء",
                value_en: "Block Works Contractor"
            },
            {
                value_ar: "جميع مقاول الأشغال المدنية",
                value_en: "All Civil Works Contractor"
            }
        ],
        "Finish Works": [
            {
                value_ar: "مقاول أعمال الديكور للأبواب والأبواب الحديدية",
                value_en: "Steel Doors and Doors Decoration Works Contractor"
            },
            {
                value_ar: "مقاول أعمال نوافذ الألمنيوم",
                value_en: "Aluminium Windows Works Contractor"
            },
            {
                value_ar: "مقاول أعمال الأبواب الخشبية",
                value_en: "Wooden Doors Works Contractor"
            },
            {
                value_ar: "مقاول أعمال زجاج",
                value_en: "Glass Works Contractor"
            },
            {
                value_ar: "مقاول أعمال الدهان",
                value_en: "Paint Works Contractor"
            },
            {
                value_ar: "مقاول أعمال الجبس والجبس",
                value_en: "Gypsum and Gypsumboards Works Contractor"
            },
            {
                value_ar: "مقاول أعمال السقف",
                value_en: "Ceiling Works Contractor"
            },
            {
                value_ar: "مقاول أعمال ورق الجدران",
                value_en: "Wallpaper Works Contractor"
            },
            {
                value_ar: "جميع مقاول أعمال التشطيب",
                value_en: "All Finish Works Contractor"
            }
        ],
        "Fire Fighting": [
            {
                value_ar: "مقاول أنابيب مكافحة الحرائق",
                value_en: "Firefighting Piping Contractor"
            },
            {
                value_ar: "مقاول تركيب أجهزة إنذار الحريق",
                value_en: "Fire Alarm Installation Contractor"
            },
            {
                value_ar: "مقاول أعمال مكافحة الحريق",
                value_en: "All Firefighting Works Contractor"
            }
        ],
        "Complete Project Handover": [
            {
                value_ar: "مقاول تسليم المشروع الكامل",
                value_en: "Complete Project Handover Contractor"
            }
        ],
    },
    Handyman: {
        "Electrical": [
            {
                value_ar: "الأعمال الكهربائية (متوسطة الجهد) الماهر",
                value_en: "Electrical (Medium Voltage) Works Handyman"
            },
            {
                value_ar: "تيار منخفض (هاتف ، تاريخ ، تلفزيون) يعمل بارع",
                value_en: "Low Current (Telephone, date, TV) Works Handyman"
            },
            {
                value_ar: "عامل تركيب الكاميرا وكاميرات المراقبة",
                value_en: "Camera and CCTV Installation Handyman"
            },
            {
                value_ar: "العامل الماهر في الأعمال الكهربائية (الجهد العالي)",
                value_en: "Electrical (High Voltage) Works Handyman"
            },
            {
                value_ar: "جميع اعمال الكهرباء الماهر",
                value_en: "All Electrical Works Handyman"
            }
        ],
        "Plumbing": [
            {
                value_ar: "داخل المبنى ، أعمال السباكة العامل الماهر",
                value_en: "Inside Building, Plumbing Works Handyman"
            },
            {
                value_ar: "خط الصرف الصحي الرئيسي يعمل بارع",
                value_en: "Main sewer line works Handyman"
            },
            {
                value_ar: "أحواض السباحة والجاكوزي والساونا العامل الماهر",
                value_en: "Swimming Pool, Jacuzzi and Sauna Works Handyman"
            },
            {
                value_ar: "عامل بارع في أعمال رش الحدائق",
                value_en: "Garden Sprinkler Works Handyman"
            },
            {
                value_ar: "بارع في أعمال أنابيب الري",
                value_en: "Irrigation Piping Works Handyman"
            },
            {
                value_ar: "جميع اعمال السباكة العامل الماهر",
                value_en: "All Plumbing Works Handyman"
            }
        ],
        "HVAC": [
            {
                value_ar: "عامل تركيب مكيفات سبليت",
                value_en: "Split AC Installation Handyman"
            },
            {
                value_ar: "تركيب مكيفات مخفي وعبوات بارع",
                value_en: "Concealed and Package AC installation Handyman"
            },
            {
                value_ar: "عامل تركيب VRV و VRF",
                value_en: "VRV and VRF Installation Handyman"
            },
            {
                value_ar: "عامل تركيب مبرد",
                value_en: "Chiller Instalation Handyman"
            },
            {
                value_ar: "جميع عمال HVAC الماهر",
                value_en: "All HVAC Works Handyman"
            }
        ]
    },
    Designer: {
        "Building Designers":
            [
                {
                    value_ar: "مصمم الهياكل المدنية",
                    value_en: "Civil Structures Designer"
                },
                {
                    value_ar: "مصمم أعمال التشطيبات",
                    value_en: "Finishing Works Designer"
                },
                {
                    value_ar: "مصمم أنظمة ميكانيكية",
                    value_en: "Mechanical Systems Designer"
                },
                {
                    value_ar: "مصمم أنظمة كهربائية",
                    value_en: "Electrical Systems Designer"
                },
                {
                    value_ar: "مصمم اعمال سباكة",
                    value_en: "Plumbing Works Designer"
                },
                {
                    value_ar: "مصمم أنظمة التكييف",
                    value_en: "HVAC Systems Designer"
                },
                {
                    value_ar: "مصمم أنظمة مكافحة الحرائق",
                    value_en: "Firefighting Systems Designer"
                },
                {
                    value_ar: "جميع أعمال البناء ومصمم النظم",
                    value_en: "All Building Works and Systems Designer"
                }
            ]
    },
    Consultant: {
        "Building Consultants":
            [
                {
                    value_ar: "مستشار الهياكل المدنية",
                    value_en: "Civil Structures Consultant"
                },
                {
                    value_ar: "استشاري أعمال التشطيبات",
                    value_en: "Finishing Works Consultant"
                },
                {
                    value_ar: "مستشار أنظمة ميكانيكية",
                    value_en: "Mechanical Systems Consultant"
                },
                {
                    value_ar: "استشاري نظم كهربائية",
                    value_en: "Electrical Systems Consultant"
                },
                {
                    value_ar: "استشاري اعمال السباكة",
                    value_en: "Plumbing Works Consultant"
                },
                {
                    value_ar: "استشاري أنظمة التكييف",
                    value_en: "HVAC Systems Consultant"
                },
                {
                    value_ar: "استشاري انظمة مكافحة الحريق",
                    value_en: "Firefighting Systems Consultant"
                },
                {
                    value_ar: "جميع أعمال البناء واستشاري الأنظمة",
                    value_en: "All Building Works and Systems Consultant"
                }
            ]
    }
};


export const users = [
    {
        value_ar: "عامل يدوي",
        value_en: "Handyman",
    },
    {
        value_ar: "مقاول",
        value_en: "Contractor",
    },
    {
        value_ar: "مصمم",
        value_en: "Designer",
    },
    {
        value_ar: "مستشار",
        value_en: "Consultant",
    }
];

export const countries = [
    { value_ar: "المملكة العربية السعودية", value_en: "Saudi Arabia" },
    { value_ar: "پاکستان", value_en: "Pakistan" },
];

export const pakCities = [
    {
        value_ar: "احمد ناگر چٹھہ",
        value_en: "Ahmed Nager Chatha"
    },
    {
        value_ar: "علی خان آباد",
        value_en: "Ali Khan Abad"
    },
    {
        value_ar: "علی پور",
        value_en: "Alipur"
    },
    {
        value_ar: "عارف والا",
        value_en: "Arifwala"
    },
    {
        value_ar: "اٹک",
        value_en: "Attock"
    },
    {
        value_ar: "ایبٹ آباد",
        value_en: "Abbottabad"
    },
    {
        value_ar: "ادیزئی",
        value_en: "Adezai"
    },
    {
        value_ar: "الپوری",
        value_en: "Alpuri"
    },
    {
        value_ar: "اکوڑہ خٹک",
        value_en: "Akora Khattak"
    },
    {
        value_ar: "ایوبیہ",
        value_en: "Ayubia"
    },
    {
        value_ar: "آواران",
        value_en: "Awaran"
    },
    {
        value_ar: "بھارکن",
        value_en: "Bharkan"
    },
    {
        value_ar: "بھیرا",
        value_en: "Bhera"
    },
    {
        value_ar: "بھلوال",
        value_en: "Bhalwal"
    },
    {
        value_ar: "بدین",
        value_en: "Badin"
    },
    {
        value_ar: "بھرکان",
        value_en: "Bhirkan"
    },
    {
        value_ar: "بہاولنگر",
        value_en: "Bahawalnagar"
    },
    {
        value_ar: "بہاولپور",
        value_en: "Bahawalpur"
    },
    {
        value_ar: "بھکر",
        value_en: "Bhakkar"
    },
    {
        value_ar: "بورے والا",
        value_en: "Burewala"
    },
    {
        value_ar: "بندہ داؤد شاہ",
        value_en: "Banda Daud Shah"
    },
    {
        value_ar: "بنوں",
        value_en: "Bannu"
    },
    {
        value_ar: "بتخیلہ",
        value_en: "Batkhela"
    },
    {
        value_ar: "بٹگرام",
        value_en: "Battagram"
    },
    {
        value_ar: "بیروٹ",
        value_en: "Birote"
    },
    {
        value_ar: "چکدرہ",
        value_en: "Chakdara"
    },
    {
        value_ar: "چارسدہ",
        value_en: "Charsadda"
    },
    {
        value_ar: "چترال",
        value_en: "Chitral"
    },
    {
        value_ar: "چلیانوالہ",
        value_en: "Chillianwala"
    },
    {
        value_ar: "چکوال",
        value_en: "Chakwal"
    },
    {
        value_ar: "چک",
        value_en: "Chak"
    },
    {
        value_ar: "چیچہ وطنی",
        value_en: "Chichawatni"
    },
    {
        value_ar: "چنیوٹ",
        value_en: "Chiniot"
    },
    {
        value_ar: "چشتیاں",
        value_en: "Chishtian"
    },
    {
        value_ar: "چاغی",
        value_en: "Chagai"
    },
    {
        value_ar: "ڈیرہ بگٹی",
        value_en: "Dera Bugti"
    },
    {
        value_ar: "ڈسکہ",
        value_en: "Daska"
    },
    {
        value_ar: "دریا خان",
        value_en: "Darya Khan"
    },
    {
        value_ar: "ڈیرہ غازی خان",
        value_en: "Dera Ghazi Khan"
    },
    {
        value_ar: "دھولر",
        value_en: "Dhaular"
    },
    {
        value_ar: "دادو",
        value_en: "Dadu"
    },
    {
        value_ar: "ڈیگری",
        value_en: "Digri"
    },
    {
        value_ar: "ڈپلو",
        value_en: "Diplo"
    },
    {
        value_ar: "ڈگر",
        value_en: "Daggar"
    },
    {
        value_ar: "درگئی",
        value_en: "Dargai"
    },
    {
        value_ar: "ڈیرہ اسماعیل خان",
        value_en: "Dera Ismail Khan"
    },
    {
        value_ar: "دوآبہ",
        value_en: "Doaba"
    },
    {
        value_ar: "ڈائر",
        value_en: "Dir"
    },
    {
        value_ar: "دروش",
        value_en: "Drosh"
    },
    {
        value_ar: "ڈوکری",
        value_en: "Dokri"
    },
    {
        value_ar: "دینا",
        value_en: "Dina"
    },
    {
        value_ar: "ڈنگا",
        value_en: "Dinga"
    },
    {
        value_ar: "دیپالپور",
        value_en: "Dipalpur"
    },
    {
        value_ar: "فیصل آباد",
        value_en: "Faisalabad"
    },
    {
        value_ar: "فیروز والا",
        value_en: "Ferozewala"
    },
    {
        value_ar: "فتح جھنگ",
        value_en: "Fateh Jhang"
    },
    {
        value_ar: "گکھڑ منڈی",
        value_en: "Ghakhar Mandi"
    },
    {
        value_ar: "گوجرہ",
        value_en: "Gojra"
    },
    {
        value_ar: "گوجرانوالہ",
        value_en: "Gujranwala"
    },
    {
        value_ar: "گجرات",
        value_en: "Gujrat"
    },
    {
        value_ar: "گوجر خان",
        value_en: "Gujar Khan"
    },
    {
        value_ar: "گوادر",
        value_en: "Gwadar"
    },
    {
        value_ar: "گھوٹکی",
        value_en: "Ghotki"
    },
    {
        value_ar: "ہالہ",
        value_en: "Haala"
    },
    {
        value_ar: "حیدرآباد",
        value_en: "Hyderabad"
    },
    {
        value_ar: "ہرنائی",
        value_en: "Harnai"
    },
    {
        value_ar: "حافظ آباد",
        value_en: "Hafizabad"
    },
    {
        value_ar: "ہارون آباد",
        value_en: "Haroonabad"
    },
    {
        value_ar: "حاصل پور",
        value_en: "Hasilpur"
    },
    {
        value_ar: "حویلی لکھا",
        value_en: "Haveli Lakha"
    },
    {
        value_ar: "ہنگو",
        value_en: "Hangu"
    },
    {
        value_ar: "ہری پور",
        value_en: "Haripur"
    },
    {
        value_ar: "اسلام کوٹ",
        value_en: "Islamkot"
    },
    {
        value_ar: "اسلام آباد",
        value_en: "Islamabad"
    },
    {
        value_ar: "جٹوئی",
        value_en: "Jatoi"
    },
    {
        value_ar: "جلالپور",
        value_en: "Jalalpur"
    },
    {
        value_ar: "جٹاں",
        value_en: "Jattan"
    },
    {
        value_ar: "جام پور",
        value_en: "Jampur"
    },
    {
        value_ar: "جڑانوالہ",
        value_en: "Jaranwala"
    },
    {
        value_ar: "جھنگ",
        value_en: "Jhang"
    },
    {
        value_ar: "جہلم",
        value_en: "Jhelum"
    },
    {
        value_ar: "جعفرآباد",
        value_en: "Jafarabad"
    },
    {
        value_ar: "جھل مگسی",
        value_en: "Jhal Magsi"
    },
    {
        value_ar: "جوہرآباد",
        value_en: "Jauharabad"
    },
    {
        value_ar: "جیکب آباد",
        value_en: "Jacobabad"
    },
    {
        value_ar: "جامشور",
        value_en: "Jamshor"
    },
    {
        value_ar: "جنگ شاہی",
        value_en: "Jungshahi"
    },
    {
        value_ar: "کندھ کوٹ",
        value_en: "Kandhkot"
    },
    {
        value_ar: "کنڈیارو",
        value_en: "Kandiaro"
    },
    {
        value_ar: "کراچی",
        value_en: "Karachi"
    },
    {
        value_ar: "کشمور",
        value_en: "Kashmore"
    },
    {
        value_ar: "کیٹی بندر",
        value_en: "Keti Bandar"
    },
    {
        value_ar: "خیرپور",
        value_en: "Khairpur"
    },
    {
        value_ar: "کوٹری",
        value_en: "Kotri"
    },
    {
        value_ar: "کچی",
        value_en: "Kacchi"
    },
    {
        value_ar: "قلات",
        value_en: "Kalat"
    },
    {
        value_ar: "کیچ",
        value_en: "Kech"
    },
    {
        value_ar: "خاران",
        value_en: "Kharan"
    },
    {
        value_ar: "خضدار",
        value_en: "Khuzdar"
    },
    {
        value_ar: "کوہلو",
        value_en: "Kohlu"
    },
    {
        value_ar: "قلعہ عبداللہ",
        value_en: "Killa Abdullah"
    },
    {
        value_ar: "قلعہ سیف اللہ",
        value_en: "Killa Saifullah"
    },
    {
        value_ar: "کالاباغ",
        value_en: "Kalabagh"
    },
    {
        value_ar: "کرور لال عیسن",
        value_en: "Karor Lal Esan"
    },
    {
        value_ar: "قصور",
        value_en: "Kasur"
    },
    {
        value_ar: "کمالیہ",
        value_en: "Kamalia"
    },
    {
        value_ar: "کموک",
        value_en: "Kamoke"
    },
    {
        value_ar: "خانیوال",
        value_en: "Khanewal"
    },
    {
        value_ar: "خانپور",
        value_en: "Khanpur"
    },
    {
        value_ar: "کھاریاں",
        value_en: "Kharian"
    },
    {
        value_ar: "خوشاب",
        value_en: "Khushab"
    },
    {
        value_ar: "کوٹ ادو",
        value_en: "Kot Addu"
    },
    {
        value_ar: "کرک",
        value_en: "Karak"
    },
    {
        value_ar: "کوہاٹ",
        value_en: "Kohat"
    },
    {
        value_ar: "کولچی",
        value_en: "kulachi"
    },
    {
        value_ar: "لکی مروت",
        value_en: "Lakki Marwat"
    },
    {
        value_ar: "لاٹامبر",
        value_en: "Latamber"
    },

    {
        value_ar: "لاہور",
        value_en: "Lahore"
    },
    {
        value_ar: "لالاموسا",
        value_en: "Lalamusa"
    },
    {
        value_ar: "لیہ",
        value_en: "Layyah"
    },
    {
        value_ar: "لیاقت پور",
        value_en: "Liaquat Pur"
    },
    {
        value_ar: "لودھراں",
        value_en: "Lodhran"
    },
    {
        value_ar: "لسبیلہ",
        value_en: "Lasbela"
    },
    {
        value_ar: "لہری",
        value_en: "Lehri"
    },

    {
        value_ar: "لورالائی",
        value_en: "Loralai"
    },
    {
        value_ar: "لاڑکانہ",
        value_en: "Larkana"
    },
    {
        value_ar: "مٹیاری",
        value_en: "Matiari"
    },
    {
        value_ar: "مہر",
        value_en: "Mehar"
    },
    {
        value_ar: "میرپور خاص",
        value_en: "Mirpur Khas"
    },
    {
        value_ar: "مٹھانی",
        value_en: "Mithani"
    },
    {
        value_ar: "مٹھی",
        value_en: "Mithi"
    },
    {
        value_ar: "محراب پور",
        value_en: "Mehrabpur"
    },
    {
        value_ar: "مورو",
        value_en: "Moro"
    },
    {
        value_ar: "مستونگ",
        value_en: "Mastung"
    },
    {
        value_ar: "موسی خیل",
        value_en: "Musakhel"
    },
    {
        value_ar: "ملکوال",
        value_en: "Malakwal"
    },
    {
        value_ar: "ماموری",
        value_en: "Mamoori"
    },
    {
        value_ar: "میلسی",
        value_en: "Mailsi"
    },
    {
        value_ar: "منڈی بہاؤالدین",
        value_en: "Mandi Bahauddin"
    },
    {
        value_ar: "میاں چنوں",
        value_en: "Mian Channu"
    },
    {
        value_ar: "میانوالی",
        value_en: "Mianwali"
    },
    {
        value_ar: "مری",
        value_en: "Muree"
    },
    {
        value_ar: "ملتان",
        value_en: "Multan"
    },
    {
        value_ar: "مریدکے",
        value_en: "Muridke"
    },
    {
        value_ar: "میانوالی بنگلہ",
        value_en: "Mianwali Bangla"
    },
    {
        value_ar: "مظفر گڑھ",
        value_en: "Muzaffargarh"
    },
    {
        value_ar: "مدین",
        value_en: "Madyan"
    },
    {
        value_ar: "مانسہرہ",
        value_en: "Mansehra"
    },
    {
        value_ar: "مردان",
        value_en: "Mardan"
    },
    {
        value_ar: "مستوج",
        value_en: "Mastuj"
    },
    {
        value_ar: "مینگورہ",
        value_en: "Mingora"
    },
    {
        value_ar: "نوشہرہ",
        value_en: "Nowsehra"
    },
    {
        value_ar: "نارووال",
        value_en: "Narowal"
    },
    {
        value_ar: "ننکانہ صاحب",
        value_en: "Nankana Sahib"
    },
    {
        value_ar: "نصیر آباد",
        value_en: "Nasirabad"
    },
    {
        value_ar: "نشکی",
        value_en: "Nushki"
    },
    {
        value_ar: "نگرپارکر",
        value_en: "Nagarparkar"
    },
    {
        value_ar: "ناؤڈیرو",
        value_en: "Naudero"
    },
    {
        value_ar: "نوشہرو فیروز",
        value_en: "Naushahro Feroze"
    },
    {
        value_ar: "نوشرہ",
        value_en: "Naushara"
    },
    {
        value_ar: "نواب شاہ",
        value_en: "Nawabshah"
    },
    {
        value_ar: "ناظم آباد",
        value_en: "Nazimabad"
    },
    {
        value_ar: "اوکاڑہ",
        value_en: "Okara"
    },
    {
        value_ar: "پاکپتن",
        value_en: "Pakpattan"
    },
    {
        value_ar: "پتوکی",
        value_en: "Pattoki"
    },
    {
        value_ar: "پیر محل",
        value_en: "Pir Mahal"
    },
    {
        value_ar: "پہاڑ پور",
        value_en: "Paharpur"
    },
    {
        value_ar: "پبی",
        value_en: "Pabbi"
    },
    {
        value_ar: "پشاور",
        value_en: "Peshawar"
    },
    {
        value_ar: "کوئٹہ",
        value_en: "Quetta"
    },
    {
        value_ar: "قیم پور",
        value_en: "Qaimpur"
    },
    {
        value_ar: "قلعہ دیدار سنگھ",
        value_en: "Qila Didar Singh"
    },
    {
        value_ar: "قمبر",
        value_en: "Qambar"
    },
    {
        value_ar: "قاسم آباد",
        value_en: "Qasimabad"
    },
    {
        value_ar: "رانی پور",
        value_en: "Ranipur"
    },
    {
        value_ar: "رتوڈیرو",
        value_en: "Ratodero"
    },
    {
        value_ar: "روہڑی",
        value_en: "Rohri"
    },
    {
        value_ar: "رینالہ خورد",
        value_en: "Renala Khurd"
    },
    {
        value_ar: "ربوہ",
        value_en: "Rabwah"
    },
    {
        value_ar: "راجو خانانی",
        value_en: "Rajo Khanani"
    },
    {
        value_ar: "رائے ونڈ",
        value_en: "Raiwind"
    },
    {
        value_ar: "راجنپو",
        value_en: "Rajanpu"
    },
    {
        value_ar: "رحیم یار خان",
        value_en: "Rahim Yar Khan"
    },
    {
        value_ar: "راولپنڈی",
        value_en: "Rawalpindi"
    },
    {
        value_ar: "صادق آباد",
        value_en: "Sadiqabad"
    },
    {
        value_ar: "صفدرآباد",
        value_en: "Safdarabad"
    },
    {
        value_ar: "ساہیوال",
        value_en: "Sahiwal"
    },
    {
        value_ar: "سانگلہ ہل",
        value_en: "Sangla Hill"
    },
    {
        value_ar: "سرائے عالمگیر",
        value_en: "Sarai Alamgir"
    },
    {
        value_ar: "سرگودھا",
        value_en: "Sargodha"
    },
    {
        value_ar: "شکر گڑھ",
        value_en: "Shakargarh"
    },
    {
        value_ar: "شیخوپورہ",
        value_en: "Sheikhupura"
    },
    {
        value_ar: "سیالکوٹ",
        value_en: "Sialkot"
    },
    {
        value_ar: "سوہاوا",
        value_en: "Sohawa"
    },
    {
        value_ar: "سویاں والا",
        value_en: "Soianwala"
    },
    {
        value_ar: "سیرانوالی",
        value_en: "Siranwali"
    },
    {
        value_ar: "سیدو شریف",
        value_en: "Saidu Sharif"
    },
    {
        value_ar: "شورکوٹ",
        value_en: "Shorkot"
    },
    {
        value_ar: "شیرانی",
        value_en: "Sherani"
    },
    {
        value_ar: "سبی",
        value_en: "Sibi"
    },
    {
        value_ar: "صحبت پور",
        value_en: "Sohbatpur"
    },
    {
        value_ar: "شیوا اڈا",
        value_en: "Shewa Adda"
    },
    {
        value_ar: "صوابی",
        value_en: "Swabi"
    },
    {
        value_ar: "سوات",
        value_en: "Swat"
    },
    {
        value_ar: "سکرند",
        value_en: "Sakrand"
    },
    {
        value_ar: "سانگھڑ",
        value_en: "Sanghar"
    },
    {
        value_ar: "شاہبندر",
        value_en: "Shahbandar"
    },
    {
        value_ar: "شہداد کوٹ",
        value_en: "Shahdadkot"
    },
    {
        value_ar: "شہداد پور",
        value_en: "Shahdadpur"
    },
    {
        value_ar: "شاہ پور چاکر",
        value_en: "Shahpur Chakar"
    },
    {
        value_ar: "شکارپور",
        value_en: "Shikarpaur"
    },
    {
        value_ar: "سکھر",
        value_en: "Sukkur"
    },
    {
        value_ar: "تنگی",
        value_en: "Tangi"
    },
    {
        value_ar: "ٹینک",
        value_en: "Tank"
    },
    {
        value_ar: "تھال",
        value_en: "Thall"
    },
    {
        value_ar: "تیمرگرہ",
        value_en: "Timergara"
    },
    {
        value_ar: "ٹورڈر",
        value_en: "Tordher"
    },
    {
        value_ar: "تلاگنگ",
        value_en: "Talagang"
    },
    {
        value_ar: "ٹیکسلا",
        value_en: "Taxila"
    },
    {
        value_ar: "ٹوبہ ٹیک سنگھ",
        value_en: "Toba Tek Singh"
    },
    {
        value_ar: "تنگوانی",
        value_en: "Tangwani"
    },
    {
        value_ar: "ٹنڈو آدم خان",
        value_en: "Tando Adam Khan"
    },
    {
        value_ar: "ٹنڈو اللہ یار",
        value_en: "Tando Allahyar"
    },
    {
        value_ar: "ٹنڈو محمد خان",
        value_en: "Tando Muhammad Khan"
    },
    {
        value_ar: "ٹھٹھہ",
        value_en: "Thatta"
    },
    {
        value_ar: "عمرکوٹ",
        value_en: "Umerkot"
    },
    {
        value_ar: "وہاڑی",
        value_en: "Vehari"
    },
    {
        value_ar: "واہ چھاؤنی",
        value_en: "Wah Cantonment"
    },
    {
        value_ar: "وزیرآباد",
        value_en: "Wazirabad"
    },
    {
        value_ar: "واشوک",
        value_en: "Washuk"
    },
    {
        value_ar: "وارہ",
        value_en: "Warah"
    },
    {
        value_ar: "ژوب",
        value_en: "Zhob"
    },
    {
        value_ar: "زیارت",
        value_en: "Ziarat"
    },
];

export const saudiCities = [
    {
        value_ar: "أبها",
        value_en: "Abhā"
    },
    {
        value_ar: "بقيق",
        value_en: "Abqaiq"
    },
    {
        value_ar: "الباحة",
        value_en: "Al-Baḥah"
    },
    {
        value_ar: "الدمام",
        value_en: "Al-Dammām"
    },
    {
        value_ar: "الهفوف",
        value_en: "Al-Hufūf"
    },
    {
        value_ar: "الجوف",
        value_en: "Al-Jawf"
    },
    {
        value_ar: "الخرج (الواحة)",
        value_en: "Al-Kharj (oasis)"
    },
    {
        value_ar: "الخبر",
        value_en: "Al-Khubar"
    },
    {
        value_ar: "القعف",
        value_en: "Al-Qaṭīf"
    },
    {
        value_ar: "الصيف",
        value_en: "Al-Ṭaʾif"
    },
    {
        value_ar: "عرعر",
        value_en: "ʿArʿar"
    },
    {
        value_ar: "بريدة",
        value_en: "Buraydah"
    },
    {
        value_ar: "الظهران",
        value_en: "Dhahran"
    },
    {
        value_ar: "وابل",
        value_en: "Ḥāʾil"
    },
    {
        value_ar: "جدة",
        value_en: "Jiddah"
    },
    {
        value_ar: "جزان",
        value_en: "Jīzān"
    },
    {
        value_ar: "خميس مشيط",
        value_en: "Khamīs Mushayt"
    },
    {
        value_ar: "مدينة الملك خالد العسكرية",
        value_en: "King Khalīd Military City"
    },
    {
        value_ar: "مكة المكرمة",
        value_en: "Mecca"
    },
    {
        value_ar: "المدينة المنورة",
        value_en: "Medina"
    },
    {
        value_ar: "نجران",
        value_en: "Najrān"
    },
    {
        value_ar: "رأس تنورة",
        value_en: "Ras Tanura"
    },
    {
        value_ar: "الرياض",
        value_en: "Riyadh"
    },
    {
        value_ar: "سكاكا",
        value_en: "Sakākā"
    },
    {
        value_ar: "تابوك",
        value_en: "Tabūk"
    },
    {
        value_ar: "ينبع",
        value_en: "Yanbuʿ"
    }
];

