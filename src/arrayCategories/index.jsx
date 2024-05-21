import MH1 from "../products/megaHair/MH1";
import MH2 from "../products/megaHair/MH2";
import MH3 from "../products/megaHair/MH3";
import MH4 from "../products/megaHair/MH4";
import MH5 from "../products/megaHair/MH5";
import MH6 from "../products/megaHair/MH6";
import Brasileiro1 from "../products/brasileiro/Brasileiro1";
import Brasileiro2 from "../products/brasileiro/Brasileiro2";
import Brasileiro3 from "../products/brasileiro/Brasileiro3";
import Brasileiro4 from "../products/brasileiro/Brasileiro4";
import Brasileiro5 from "../products/brasileiro/Brasileiro5";
import Brasileiro6 from "../products/brasileiro/Brasileiro6";
import Brasileiro7 from "../products/brasileiro/Brasileiro7";
import Brasileiro8 from "../products/brasileiro/Brasileiro8";
import BrasileiroReg1 from "../products/brasileiroRegional/BrasileiroReg1";
import BrasileiroReg2 from "../products/brasileiroRegional/BrasileiroReg2";
import Liso1 from "../products/liso/Liso1";
import Liso2 from "../products/liso/Liso2";
import Liso3 from "../products/liso/Liso3";
import Liso4 from "../products/liso/Liso4";
import Liso5 from "../products/liso/Liso5";
import Liso6 from "../products/liso/Liso6";
import Liso7 from "../products/liso/Liso7";
import Liso8 from "../products/liso/Liso8";
import Cacheado1 from "../products/cacheado/Cacheado1";
import Cacheado2 from "../products/cacheado/Cacheado2";
import Cacheado3 from "../products/cacheado/Cacheado3";
import Cacheado4 from "../products/cacheado/Cacheado4";
import Ondulado1 from "../products/ondulado/Ondulado1";
import Ondulado2 from "../products/ondulado/Ondulado2";
import Ondulado3 from "../products/ondulado/Ondulado3";

export const categories = [
  {
    id: "megaHair",
    idCategory: 1,
    name: "Acessorios Mega Hair",
    pages: [
      {
        id: 1,
        name: "ESCOVA DESEMBARAÇANTE",
        img: "acessoriosMegaHair/escova_desembaracante_mega_hair.webp",
        component: <MH1 />,
      },
      {
        id: 2,
        name: "REMOVEDOR FITA ADESIVA TOP HAIR",
        img: "acessoriosMegaHair/removedor_fita_adesiva_k_100ml.webp",
        component: <MH2 />,
      },
      {
        id: 3,
        name: "QUERATINA K EM FITA TRANSPARENTE",
        img: "acessoriosMegaHair/queratina_k_em_fita_transparente.webp",
        component: <MH3 />,
      },
      {
        id: 4,
        name: "QUERATINA K EM FITA MARROM",
        img: "acessoriosMegaHair/queratina_k_em_fita_marrom.webp",
        component: <MH4 />,
      },
      {
        id: 5,
        name: "GEL COLA PARA FABRICAÇÃO",
        img: "acessoriosMegaHair/gel_cola_para_fabricacao_nanopele_50grs.webp",
        component: <MH5 />,
      },
      {
        id: 6,
        name: "FITA ADESIVA LACE FRONT AZUL 36 MTS 1",
        img: "acessoriosMegaHair/fita_adesiva_lace_front_azul_36_mts_1_unidade.webp",
        component: <MH6 />,
      },
    ],
  },
  {
    id: "brasileiro",
    idCategory: 2,
    name: "Cabelo Brasileiro",
    pages: [
      {
        id: 1,
        name: "Morena Iluminada 60CM/65CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_do_sul_morena_iluminada_linha_luxo_60_65cm_100grs.webp",
        component: <Brasileiro1 />,
      },
      {
        id: 2,
        name: "Cabelo Loiro Natural Virgem 60CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_loiro_natural_do_sul_fio_fino_100grs_loiro_virgem_60cm.webp",
        component: <Brasileiro2 />,
      },
      {
        id: 3,
        name: "Cabelo Loiro Natural Virgem 50CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_loiro_natural_do_sul_fio_fino_100grs_loiro_virgem_50cm.webp",
        component: <Brasileiro3 />,
      },
      {
        id: 4,
        name: "Cabelo Castanho Liso 50CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_castanho_do_sul_fio_fino_100grs_50cm.webp",
        component: <Brasileiro4 />,
      },
      {
        id: 5,
        name: "Cabelo Castanho Liso 60CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_castanho_do_sul_fio_fino_100grs_60cm.webp",
        component: <Brasileiro5 />,
      },
      {
        id: 6,
        name: "Cabelo Castanho Liso 70CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_castanho_do_sul_fio_fino_100grs_70cm.webp",
        component: <Brasileiro6 />,
      },
      {
        id: 7,
        name: "Cabelo Descolorido 60CM/65CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_do_sul_descolorido_60_65cm_100grs.webp",
        component: <Brasileiro7 />,
      },
      {
        id: 8,
        name: "Cabelo Castanho Liso 50CM",
        img: "cabelosBrasileiro/cabelo_brasileiro_castanho_do_sul_fio_fino_100grs_50cm_copia.webp",
        component: <Brasileiro8 />,
      },
    ],
  },
  {
    id: "brasileiroRegi",
    idCategory: 3,
    name: "Cabelo Brasileiro Regional",
    pages: [
      {
        id: 1,
        name: "Castanho Liso ou Ondulado 50CM",
        img: "cabelosBrasileirosRegional/cabelo_brasileiro_regional_50cm_ondulado.webp",
        component: <BrasileiroReg2 />,
      },
      {
        id: 2,
        name: "Castanho Ondulado 50CM",
        img: "cabelosBrasileirosRegional/cabelo_brasileiro_regional_50cm_liso_ou_ondulado.webp",
        component: <BrasileiroReg1 />,
      },
    ],
  },
  {
    id: "liso",
    idCategory: 4,
    name: "Cabelo Liso",
    pages: [
      {
        id: 1,
        name: "Cabelo Brasileiro 60CM/65CM",
        img: "cabelosLisos/cabelo_brasileiro_do_sul_descolorido_60_65cm_100grs.webp",
        component: <Liso1 />,
      },
      {
        id: 2,
        name: "Cabelo Castanho Indiano 55CM",
        img: "cabelosLisos/cabelo_liso_e_ondulado_55cm_castanho_natural.webp",
        component: <Liso2 />,
      },
      {
        id: 3,
        name: "Cabelo Castanho Vietnã 55CM",
        img: "cabelosLisos/cabelo_liso_vietna_castanho_natural_60cm.webp",
        component: <Liso3 />,
      },
      {
        id: 4,
        name: "Cabelo Castanho Vietnã 70CM",
        img: "cabelosLisos/cabelo_liso_vietna_castanho_natural_70cm.webp",
        component: <Liso4 />,
      },
      {
        id: 5,
        name: "Cabelo Castanho Indiano 75CM",
        img: "cabelosLisos/cabelo_liso_ondulado_75cm_castanho_natural.webp",
        component: <Liso5 />,
      },
      {
        id: 6,
        name: "Cabelo Castanho Indiano 65CM",
        img: "cabelosLisos/cabelo_liso_e_ondulado_65cm_castanho_natural.webp",
        component: <Liso6 />,
      },
      {
        id: 7,
        name: "Cabelo Castanho Peruano 60CM",
        img: "cabelosLisos/cabelo_liso_peruano_60cm_100grs.webp",
        component: <Liso7 />,
      },
      {
        id: 8,
        name: "Cabelo Castanho Vietnã 50CM",
        img: "cabelosLisos/cabelo_liso_vietna_castanho_natural_50cm.webp",
        component: <Liso8 />,
      },
    ],
  },
  {
    id: "cacheado",
    idCategory: 5,
    name: "Cabelo Cacheado",
    pages: [
      {
        id: 1,
        name: "Cabelo cacheado castanho 50CM/55CM",
        img: "cabelosCacheados/cabelo_cacheado_permanente_top_hair_50_55cm_castanho_natural.webp",
        component: <Cacheado1 />,
      },
      {
        id: 2,
        name: "Cabelo cacheado castanho Caipira",
        img: "cabelosCacheados/cabelo_cacheado_permanente_caipira_50_a_55_cm_castanho_natural.webp",
        component: <Cacheado2 />,
      },
      {
        id: 3,
        name: "Cabelo cacheado castanho Caipira",
        img: "cabelosCacheados/cabelo_cacheado_permanente_caipira_60_a_65_cm_castanho_natural.webp",
        component: <Cacheado3 />,
      },
      {
        id: 4,
        name: "Cabelo cacheado castanho Caipira",
        img: "cabelosCacheados/cabelo_cacheado_permanente_caipira_70_a_75_cm_castanho_natural.webp",
        component: <Cacheado4 />,
      },
    ],
  },
  {
    id: "ondulado",
    idCategory: 6,
    name: "Cabelo Ondulado",
    pages: [
      {
        id: 1,
        name: "Cabelo Castanho Indiano 55CM",
        img: "cabelosOndulados/cabelo_liso_e_ondulado_55cm_castanho_natural.webp",
        component: <Ondulado1 />,
      },
      {
        id: 2,
        name: "Cabelo Castanho Indiano 75CM",
        img: "cabelosOndulados/cabelo_liso_ondulado_75cm_castanho_natural.webp",
        component: <Ondulado2 />,
      },
      {
        id: 3,
        name: "Cabelo Castanho Indiano 65CM",
        img: "cabelosOndulados/cabelo_liso_e_ondulado_65cm_castanho_natural.webp",
        component: <Ondulado3 />,
      },
    ],
  },
];
