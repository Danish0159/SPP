import hvacc from '../../../images/Contractors/hvac.jpg';
import electricalc from '../../../images/Contractors/e.jpg';
import plumbingc from '../../../images/Contractors/p.jpg';
import civilworks from '../../../images/Contractors/cw.jpg';
import finishworks from '../../../images/Contractors/fw.jpg';
import firefightingc from '../../../images/Contractors/ff.jpg';
import tkp from '../../../images/Contractors/tkp.jpg';
import hvacm from '../../../images/Maintenance/hvac.jpg';
import electricalm from '../../../images/Maintenance/e.jpg';
import plumbingm from '../../../images/Maintenance/p.jpg';
import firefightingm from '../../../images/Maintenance/ff.jpg';
import buildingdesigners from '../../../images/Designers/bd.jpg';
import buildingconsultants from '../../../images/Consultants/bc.jpg';



export const Contractors = [
    {
        img: electricalc,
        name: {
            value_ar: "الكهرباء",
            value_en: "Electrical"
        },
        subCategories: [
            {
                value_ar: "مقاول الكهرباء ",
                value_en: "Electrical  Contractor"
            },
            {
                value_ar: "مقاول تركيب كاميرات مراقبة",
                value_en: "Camera & CCTV Contractor"
            },
            {
                value_ar: "مقاول أعمال سمارت هوم",
                value_en: "Contractor Smart Home System"
            },
            {
                value_ar: "مقاول الكهرباء و السباكة",
                value_en: "Contractor Plumbing & Electrical"
            }
        ]
    },
    {
        img: hvacc,
        name: {
            value_ar: "تكيف و تبريد",
            value_en: "HVAC"
        },
        subCategories: [
            {
                value_ar: "مقاول التكييف سبليت و شباك",
                value_en: "Contractor AC (Split & Window)"
            },
            {
                value_ar: "مقاول مكيفات المخفي والمركزي",
                value_en: "Contractor AC (Concealed and Package)"
            },
            {
                value_ar: "جميع أنواع أعمال تكييف-تبريد",
                value_en: "All Types of HVAC Works"
            }
        ]
    },
    {
        img: plumbingc,
        name: {
            value_ar: "السباكة",
            value_en: "Plumbing"
        },
        subCategories: [
            {
                value_ar: " مقاول أعمال السباكة (البناء)",
                value_en: "Plumbing Contractor (Buildings)"
            },
            {
                value_ar: "مقاول السباكة (لخطوط الصرف الصحي الرئيسية)",
                value_en: "Plumbing Contractor (For Main Sewerage lines)"
            },
            {
                value_ar: "مقاول أعمال للمسابح والجاكوزي والساونا",
                value_en: "Contractor (Swimming Pool, Jacuzzi and Sauna)"
            },
            {
                value_ar: "مقاول النافورة والشلال",
                value_en: "Contractor (Fountains and Waterfall)"
            },
            {
                value_ar: " أعمال ري مياه الحدائق و المزارع ",
                value_en: "Contractor for Garden & Irrigation Piping"
            },
            {
                value_ar: "مقاول الكهرباء و السباكة",
                value_en: "Contractor Plumbing & Electrical"
            }
        ]
    },
    {
        img: civilworks,
        name: {
            value_ar: "أعمال مدنية",
            value_en: "Civil Works"
        },
        subCategories: [
            {
                value_ar: "مقاول إنشائي ",
                value_en: "Structural Contractor (Concrete)"
            },
            {
                value_ar: "مقاول أعمال التلييس",
                value_en: "Plaster Contractor"
            },
            {
                value_ar: "مقاول أعمال البلوك",
                value_en: "Block Works Contractor"
            },
            {
                value_ar: "مقاول أعمال العازل",
                value_en: "Water-proofing & Insulation Contractor"
            },
            {
                value_ar: "مقاول أعمال حداد",
                value_en: "Steel Works Contractor"
            },
            {
                value_ar: "جمع أعمال مقاول إنشائي",
                value_en: "Complete Structural Contractor (Grey)"
            }
        ]
    },
    {
        img: finishworks,
        name: {
            value_ar: "أعمال التشطيبات",
            value_en: "Finishing Works"
        },
        subCategories: [
            {
                value_ar: "أعمال الأبواب والشباك",
                value_en: "Doors and Windows Works"
            },
            {
                value_ar: "مقاول تركيب مصعاعد",
                value_en: "Elevator Installation Contractor"
            },
            {
                value_ar: "مقاول الزجاج والكلادنج ",
                value_en: "Cladding & Glass Contractor"
            },
            {
                value_ar: "مقاول أعمال الخشبية",
                value_en: "Wooden Works Contractor"
            },
            {
                value_ar: "مقاول أعمال زجاج",
                value_en: "Glass Works Contractor"
            },
            {
                value_ar: "مقاول أعمال الدهانات",
                value_en: "Paint Works Contractor"
            },
            {
                value_ar: "مقاول أعمال السقف ",
                value_en: "Ceiling Works Contractor"
            },
            {
                value_ar: "مقاول الجبس بورد",
                value_en: "Gypsumboard Contractor"
            },
            {
                value_ar: "مقاول بلاط ورخام",
                value_en: "Tiles & Marble Contractor"
            },
            {
                value_ar: " مقاول جمع أعمال تشطيب",
                value_en: "Complete Finishing Works Contractor"
            }
        ]
    },
    {
        img: firefightingc,
        name: {
            value_ar: "الدفاع المدني",
            value_en: "Fire Fighting"
        },
        subCategories: [
            {
                value_ar: "جميع انطمة انذار الحريق",
                value_en: "Firefighting Contractor"
            }
        ]
    },
    {
        img: tkp,
        name: {
            value_ar: "مشروع تسليم المفتاح",
            value_en: "Turn Key Project"
        },
        subCategories: [
            {
                value_ar: "مقاول سلم مفتاح",
                value_en: "Turn Key Project Contractor"
            }
        ]
    }
]

export const Maintenance = [
    {
        img: electricalm,
        name: {
            value_ar: "الكهرباء",
            value_en: "Electrical"
        },
        subCategories: [
            {
                value_ar: "صيانة الكهرباء عام ",
                value_en: "General Electrical  Maintenance"
            },
            {
                value_ar: " صيانة كاميرات مراقبة",
                value_en: "Camera & CCTV Maintenance"
            }

        ]
    },
    {
        img: plumbingm,
        name: {
            value_ar: "السباكة",
            value_en: "Plumbing"
        },
        subCategories: [
            {
                value_ar: " صيانة أعمال السباكة (البناء)",
                value_en: "Plumbing Maintenance (Buildings)"
            },
            {
                value_ar: "صيانة مضخات المياه",
                value_en: "Water Pumps Maintenance"
            }
        ]
    },
    {
        img: hvacm,
        name: {
            value_ar: "تكيف و تبريد",
            value_en: "HVAC"
        },
        subCategories: [
            {
                value_ar: "صيانة التكييف سبليت و شباك",
                value_en: "Maintenance AC (Split & Window)"
            },
            {
                value_ar: "صيانة مكيفات المخفي والمركزي",
                value_en: "Maintenance AC (Concealed and Package)"
            },
            {
                value_ar: " صيانة جميع أنواع تكييف-تبريد",
                value_en: "Maintenance of all types of AC"
            }
        ]
    },
    {
        img: firefightingm,
        name: {
            value_ar: "الدفاع المدني",
            value_en: "Fire Fighting"
        },
        subCategories: [
            {
                value_ar: "صيانة مضخات الحريق وإنذار الحريق",
                value_en: "Maintenance for Firepumps and Firealarms"
            }
        ]
    },
]

export const Designers = [
    {
        img: buildingdesigners,
        name: {
            value_ar: "المصممين",
            value_en: "Designers"
        },
        subCategories: [
            {
                value_ar: "مصمم الإنشائي",
                value_en: "Structural Designer"
            },
            {
                value_ar: "مصمم معماري",
                value_en: "Architectural Designer"
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
                value_ar: "مصمم أنظمة مكافحة الحرائق",
                value_en: "Firefighting Systems Designer"
            },
            {
                value_ar: "تصميم كامل لجميع الأنظمة",
                value_en: "All Systems Designer"
            }
        ]
    }
]

export const Consultants = [
    {
        img: buildingconsultants,
        name: {
            value_ar: "الاستشاريين",
            value_en: "Consultants"
        },
        subCategories: [
            {
                value_ar: "استشاري إنشائي",
                value_en: "Structural Consultant"
            },
            {
                value_ar: "استشاري معماري",
                value_en: "Architechural Consultant"
            },
            {
                value_ar: "استشاري ميكانيكية",
                value_en: "Mechanical Consultant"
            },
            {
                value_ar: "استشاري كهربائية",
                value_en: "Electrical Consultant"
            },
            {
                value_ar: "استشارات كاملة للبناء ",
                value_en: "Complete Consultancy for Building"
            }
        ]
    }
]
