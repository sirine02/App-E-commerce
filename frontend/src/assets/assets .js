import Bomber_fille1 from './Bomber_fille1.webp'
import Casquette_f1 from './Casquette_f1.webp'
import Casquette_h1 from './Casquette_h1.webp'
import Ceinture_boss from './Ceinture_boss 1.webp'
import chemise_cps  from './chemise_cps 1.webp'
import Doudoune_1 from './Doudoune_1.webp' 
import jogging_1 from './jogging_1.webp'
import monto_boy  from './monto_boy1.webp'
import Montre_boss2 from './Montre_boss2.webp'
import pantalon_boy  from './pantalon_boy1.webp'
import Polo_boss from './Polo_boss1.webp'
import projet_xf1 from './projet_xf1.webp'
import pull_décontracté from './pull_décontracté1.webp'
import robe_bébé from './robe_bébé1.webp'
import robe_jaune  from './robe_jaune 1.webp'
import robe_tomy from './robe_tomy1.webp'
import robe_polo from './robe_polo1.webp'
import sac_f from './sac_f1.webp'
import sac_n from './sac_n1.webp'
import short_boy from './short_boy1.webp'
import survétement_1 from './survétement_1.webp'
import survrt_perx1 from './survrt_perx1.webp'
import Sweat_ch from './Sweat_ch1.webp'
import Sweat_f from './Sweat_f1.webp'
import sweat_femmerose from  './sweat_femmerose1.webp'
import sweat_girl from './sweat_girl1.webp'
import sweat_girlr1 from './sweat_girlr1 (2).webp'
import Sweat_zippéH from './Sweat_zippéH1.webp'
import sweatshirt_boy from './sweatshirt_boy1.webp'
import sweatshirt_kids from './sweatshirt_kids1.webp'
import tshirt_f from './tshirt_f1.webp'
import veste_gblanc from './veste_gblanc 1.webp'
import robe_polo2 from './robe_polo2.webp'
import robe_polo3 from './robe_polo3.webp'
import chemise_cps2 from './chemise_cps 2.webp'
import Sweat_zippéH2 from './Sweat_zippéH2.webp'
import Sweat_zippéH3 from './Sweat_zippéH3.webp'
import veste_gblanc2 from './veste_gblanc2.webp'
import veste_gblanc3 from './veste_gblanc3.webp'
import pull_décontracté2 from './pull_décontracté2.webp'
import pull_décontracté3 from './pull_décontracté3.webp'





import cancel_4 from './cancel_4.png'
import menu_1 from './menu_1.png'
import shoppingcart from './shoppingcart.png'
import supprimer from './supprimer.png'
import Vivienne_logo from './Vivienne_logo.png'
import interface_1 from './interface_1.png'
import profile_1 from './profile_1.png'
import fleche_1 from './fleche_1.png'
import bg_image from './bg_image.jpg'
import exchange_1 from './exchange_1.png'
import validity_1 from './validity_1.png'
import support_1 from './support_1.png'
import drop_down from './drop_down.png'
import stripe_1 from './stripe_1.png'
import about_1 from './about_1.jpg'
import contact_us from './contact_us.jpg'




export const assets = {
    Vivienne_logo,
    supprimer,
    shoppingcart,
    menu_1,
    cancel_4,
    interface_1,
    profile_1,
    fleche_1,
    bg_image,
    exchange_1,
    validity_1,
    support_1,
    drop_down,
    stripe_1,
    about_1,
    contact_us,

}



export const products = [
    { 
        _id: "aaa",
        name:"Bomber en fausse fourrure",
        description: "  Cette veste en denim blanc possède un style trucker authentique. Elle est dotée de poches à rabat et de boutons en métal emblématiques qui créent un look classique.  ",
        price: 139.90  ,
        image: [Bomber_fille1 ] ,
        category:"kids" ,
        subCategory: "WinterWear",
        sizes: ["10","12","14","16"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "bbb",
        name:"Casquette en twill de coton",
        description: " Une casquette BOSS Femme épurée et moderne qui s’accordera avec toutes vos tenues. Confectionnée en twill de coton respirant. Logo discret en métal doré   ",
        price: 45.00 ,
        image: [Casquette_f1 ] ,
        category:"Women" ,
        subCategory: "Accessories",
        sizes: ["S","M","L"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "ccc",
        name:" Casquette en twill de coton ",
        description: "Ajoutez une touche de style moderne à toutes vos tenues grâce à cette casquette HUGO Homme. En twill de coton à logo brodé. Fermeture ajustable à l’arrière.",
        price: 35.00 ,
        image: [Casquette_h1 ] ,
        category:"Men" ,
        subCategory: "Accessories",
        sizes: ["S","M","L"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "ddd",
        name:" Ceinture en cuir   ",
        description: "  Une ceinture BOSS de 3,5 cm de large fabriquée en Italie. Pourvu d’une boucle double B  ",
        price: 80.00 ,
        image: [ Ceinture_boss] ,
        category:"Men" ,
        subCategory: "Accessories",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "eee",
        name:" Chemise coupe standard en popeline ",
        description: " Cette chemise classique est confectionnée en popeline de coton mélangé et légèrement extensible. C'est votre allié confort des tenues habillées.",
        price: 89.90 ,
        image: [chemise_cps , chemise_cps2 ] ,
        category:"Women" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "fff",
        name:"Doudoune sans manches déperlante",
        description: " Une doudoune sans manches Regular HUGO à la finition déperlante",
        price: 249.00 ,
        image: [Doudoune_1] ,
        category:"Men" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "ggg",
        name:"  Ensemble sweat et jogging à logo ",
        description: " Cet ensemble composé d'un sweat et d'un jogging à la coupe standard porte fièrement le branding emblématique.",
        price: 124.90 ,
        image: [jogging_1] ,
        category:"Kids" ,
        subCategory: "WinterWear",
        sizes: ["10","12","14","16"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "hhh",
        name:" Coupe-vent à capuche  ",
        description: " Coupe-vent à capuche,Imperméable,Fermeture zippée.",
        price: 175 ,
        image: [monto_boy] ,
        category:"Kids" ,
        subCategory: "WinterWear",
        sizes: ["10","12","14","16"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "iii",
        name:"  Montre automatique en acier inoxydable  ",
        description: " Cette montre BOSS Homme est dotée d’un mouvement automatique japonais qui met en valeur la mécanique intérieure complexe. Chiffres romains lisses. Élégant cadran vert brossé. ",
        price: 379.00 ,
        image: [Montre_boss2] ,
        category:"Men" ,
        subCategory: "Accessories",
        sizes: ["38mm","46mm"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "jjj",
        name:"Pantalon tissé Hilfiger Flag ",
        description: "Ce pantalon tissé doté d'une taille partiellement élastique est parfait pour le quotidien.",
        price: 64.90 ,
        image: [pantalon_boy ] ,
        category:"kids" ,
        subCategory: "WinterWear",
        sizes: ["10","12","14","16"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "kkk",
        name:"Polo en coton stretch",
        description: "Un polo Regular BOSS Homme à encolure zippée, orné de rayures contrastantes originales et d’un logo assorti",
        price: 99.95 ,
        image: [Polo_boss ] ,
        category:"Men" ,
        subCategory: "SummerWear",
        sizes: ["M","L","xl"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "lll",
        name:"jogging femme ",
        description: " Le jogging parfait pour allier confort et style. Idéal pour vos activités sportives, et vos sorties casual ",
        price: 90.00 ,
        image: [ projet_xf1] ,
        category:"Women" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "mmm",
        name:"Pull décontracté",
        description: "Boostez vos tenues avec ce pull au look audacieux. Il est caractérisé par un motif colour-block emblématique sur l'avant et les manches.",
        price: 99.90 ,
        image: [ pull_décontracté , pull_décontracté2 , pull_décontracté3] ,
        category:"Women" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "nnn",
        name:"Robe brodée 'Fruits Stickers' en satin de coton",
        description: " Robe 'Fruits Stickers' en satin de coton.Manches volantées. ",
        price: 205 ,
        image: [ robe_bébé] ,
        category:"kids" ,
        subCategory: "SummerWear",
        sizes: ["2A","3A","9M","12M"],
        date : 558565685,
        bestseller: false,
    } ,
    { 
        _id: "ooo",
        name:"Robe polo plissée",
        description: " Cette robe d'inspiration sportive égayera les tenues du week-end grâce à sa silhouette polo classique et ses plis sur les côtés de la jupe.",
        price: 64.90 ,
        image: [robe_jaune] ,
        category:"Kids" ,
        subCategory: "SummerWear",
        sizes: ["10","12","14","16"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "ppp",
        name:"Robe polo courte et moulante",
        description: "Cette robe polo courte évoque l'esthétique sportive classique. Elle associe un col ouvert décontracté à une coupe moulante flatteuse.",
        price: 99.90 ,
        image: [robe_polo , robe_polo2 ,robe_polo3 ] ,
        category:"Women" ,
        subCategory: "SummerWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "qqq",
        name:"Robe polo plissée",
        description: "Cette robe d'inspiration sportive égayera les tenues du week-end grâce à sa silhouette polo classique et ses plis sur les côtés de la jupe. ",
        price: 64.90,
        image: [ robe_tomy] ,
        category:"Kids" ,
        subCategory: "SummerWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "rrr",
        name:" Cabas bandoulière à motif logo",
        description: " Ce petit cabas sophistiqué orné d'un monogramme TH présente des sangles en toile à motif logo qui lui prêtent une note sportive. ",
        price: 139.90 ,
        image: [sac_f] ,
        category:"Women" ,
        subCategory: "Accessories",
        sizes: ["One Size"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "sss",
        name:" Sac porté épaule à plaque monogramme TH",
        description: " Avec sa finition lisse, sa silhouette épurée et son monogramme TH, ce sac porté épaule vous accompagnera lors des grandes occasions estivales. ",
        price: 129.90 ,
        image: [ sac_n] ,
        category:"Women" ,
        subCategory: "Accessories",
        sizes: ["One Size"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "zzz",
        name:"Bermuda 'East West' en coton",
        description: "  Taille élastiquée avec cordons de serrage,Imprimés à l'avant et au dos. ",
        price: 95 ,
        image: [short_boy ] ,
        category:"Kids" ,
        subCategory: "SummerWear",
        sizes: ["6A","8A","10A"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "xxx",
        name:" Ensemble de survêtement en coton ",
        description: "ce survêtement BOSS Homme est un essentiel décontracté. Article confectionné en double maille de coton naturellement stretch offrant du confort. ",
        price: 299.000 ,
        image: [survétement_1 ] ,
        category:"Men" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "vvv",
        name:" jogging femme ",
        description: "Le jogging parfait pour allier confort et style. Idéal pour vos activités sportives, et vos sorties casual",
        price: 100,
        image: [survrt_perx1 ] ,
        category:"Women" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "www",
        name:" Sweat à capuche en molleton de coton ",
        description: "  Un sweat à capuche emblématique Regular HUGO Homme.  ",
        price: 109.95 ,
        image: [ Sweat_ch] ,
        category:"Men" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "yyy",
        name:"Sweat en molleton de coton",
        description: " Un sweat confortable en molleton de coton HUGO. Cette pièce à la coupe décontractée est ornée d’un logo revisité brodé sur la poitrine.",
        price: 119.95 ,
        image: [Sweat_f ] ,
        category:"Women" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "uuu",
        name:" Sweatshirt à capuche brodé 'Boke Flower' ",
        description: " Sweatshirt à capuche classique 'Boke Flower',Motif et Signature KENZO Paris sur la poitrine et au dos.",
        price: 370 ,
        image: [sweat_femmerose] ,
        category:"Women" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "abc",
        name:"Sweatshirt en coton",
        description: " Sweatshirt en coton,Col rond. ",
        price: 110 ,
        image: [ sweat_girl] ,
        category:"Kids" ,
        subCategory: "WinterWear",
        sizes: ["4A","6A","8A"],
        date : 558565685,
        bestseller: false,
    } ,

    { 
        _id: "abcd",
        name:"Sweatshirt en coton",
        description: "Sweatshirt en coton,Imprimé en all-over.",
        price: 135 ,
        image: [sweat_girlr1] ,
        category:"Kids" ,
        subCategory: "WinterWear",
        sizes: ["4A","6A","8A"],
        date : 558565685,
        bestseller: false,
    } ,

    
    { 
        _id: "acd",
        name:"Sweat à col montant zippé",
        description: " Ce sweat est doté d'une demi-fermeture Éclair et d'un col montant dans une texture contrastée lui conférant un style sport technique. ",
        price: 199.90 ,
        image: [Sweat_zippéH , Sweat_zippéH2 ,Sweat_zippéH3 ] ,
        category:"Men" ,
        subCategory: "WinterWear",
        sizes: ["S","M","L","XL"],
        date : 558565685,
        bestseller: false,
    } ,

    
    { 
        _id: "adc",
        name:"Sweatshirt en coton ",
        description: "Sweatshirt en coton.",
        price: 135 ,
        image: [sweatshirt_boy ] ,
        category:"Kids" ,
        subCategory: "WinterWear",
        sizes: ["4A","6A","8A"],
        date : 558565685,
        bestseller: false,
    } ,

    
    { 
        _id: "arc",
        name:"  Sweatshirt 'East West' en coton ",
        description: "Sweatshirt 'East West' en coton,Imprimés à l'avant et au dos.",
        price: 120 ,
        image: [sweatshirt_kids] ,
        category:"Kids" ,
        subCategory: "SummerWear",
        sizes: ["4A","6A","8A"],
        date : 558565685,
        bestseller: true,
    } ,

    
    { 
        _id: "eac",
        name:"Short-Sleeve Cable Knit Sweater",
        description: "Tommy Hilfiger women's sweater. Made from premium cotton in a flattering, easy fit, our lightweight short-sleeve cable knit sweater is a soft, comfortable layer.",
        price: 64.50,
        image: [ tshirt_f] ,
        category:"Women" ,
        subCategory: "SummerWear",
        sizes: ["S","M","L"],
        date : 558565685,
        bestseller: false,
    } ,

    
    { 
        _id: "are",
        name:"Veste trucker en denim blanc",
        description: " Cette veste en denim blanc possède un style trucker authentique. Elle est dotée de poches à rabat et de boutons en métal emblématiques qui créent un look classique. ",
        price: 84.90,
        image: [veste_gblanc , veste_gblanc2 , veste_gblanc3 ] ,
        category:"Kids" ,
        subCategory: "WinterWear",
        sizes: ["10","12","14"],
        date : 558565685,
        bestseller: false,
    } ,

    
   
]




