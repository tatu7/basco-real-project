import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiOutlineRight } from "react-icons/ai";
import ".././main.scss";
import "./_directions.scss";
import trade from "../../Assets/images/icon-2.png";
import resource from "../../Assets/images/icon-3.png";
import house from "../../Assets/images/icon-6.png";
import star from "../../Assets/images/icon-8.png";
import setting from "../../Assets/images/icon-7.png";
// import saveMoney from "../../Assets/images/icon-4.png";
import kluch from "../../Assets/images/icon-1.png";
import money from "../../Assets/images/icon-5.png";
import persons from "../../Assets/images/persons.png";
import auto from "../../Assets/images/auto.png";
import maosh from "../../Assets/images/maosh.png";
import moliya from "../../Assets/images/moliya.png";
import sss from "../../Assets/images/sss.png";
import work from "../../Assets/images/work.png";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "80vh",
    zIndex: "2000",
    padding: "3rem",
    owerflow: "hidden",
    outline: "none",
  },
  overlay: { zIndex: 5000 },
};
const bolim1Title = "Раҳбар бўлими";
const bolim2Title = "CРМ бўлими";
const bolim3Title = "Савдо бўлими";
const bolim4Title = "ҲР бўлими";
const bolim5Title = "Маош бўлими";
const bolim6Title = "Касса бўлими";
const bolim7Title = "Назорат бўлими";
const bolim8Title = "Склад бўлими";
const bolim9Title = "Таъминот бўлими";
const bolim10Title = "Турли шахслар бўлими";
const bolim11Title = "Aсосий воситалар бўлими";
const bolim12Title = "Ишлаб чиқариш бўлими";
const bolim13Title = "Бухгалтерия бўлими";
const bolim1Parag =
  "Раҳбар учун барча имкониятлар бир жойда. Раҳбар сифатида сизнинг вақтингиз тежалади, самарадорлик ошади.Ундан ташқари раҳбар сифатида сиз компаниянгиз балансини тўлақонли кўра оласиз.Дастурнинг ҳар бир бўлими ўзаро боғлиқ ҳолда ишлагани сабабли барча фойдаланувчилар маълумотларни ўз вақтида киритиб боришлари талаб етилади. Натижада ҳисоботлар тўғри ва аниқ юритилади.Раҳбар сифатида ҳар бир бўлимда ишлар қандай кетаётганлигини тўлиқ кўра оласиз. Бу еса компаниянгиз жараёнларини таҳлил қилиш ва ривожлантириш имкониятини беради.";
const bolim2Parag = `Мижозлар билан муносабатларни бошқаришни автоматлаштириш учун қулай ва оптимал ёндашув.

БAСCО ЕРП платформасининг CРМ бўлими сотув менежерларингизга жуда ҳам ёққан бўларди.

Ундан ташқари, CРМ бўлими компаниянинг раҳбари, яъни, сиз ҳамда компания назоратчиси ва маркетинг бўлими учун фойдали ҳисобланади.

CРМ бўлимининг бир нечта муҳим имкониятлари қуйидагилар:

●Компания раҳбари сифатида сиз ҳар бир сотувчининг унумдорлиги бўйича анализ қилиш ва қайси маҳсулот ва хизматга нисбатан талаб юқори еканлигини аниқлаш имкониятига ега бўласиз;
●Компания назоратчиси еса CРМ бўлими орқали сотув менежерлари кунлик режасининг тўлиқ назорат қилиш имконига ега бўлади;
●Сотув менежерлари CРМ бўлими орқали кунлик режаларини тез, аниқ ва қулай автоматлаштиришлари мумкин бўлади.

Бу бўлим ёрдамида мижозлар билан ишлаш самарадорлиги сезиларли даражада ўсади.

Сотув менежерларингизнинг ҳам самарадорлиги ошиши натижасида сотувларингиз сонида ҳам сезиларли ўзгариш сезасиз.`;
const bolim3Parag = `Савдо жараёнлари бошқаруви, назорати ва анализи.

Савдо бўлимининг асосий вазифаси - маҳсулот ва хом-ашё сотишни автоматлаштириш.

Келинг, Савдо бўлимининг енг муҳим имкониятларидан бир нечтаси билан танишиб чиқамиз:

●Мижозларга маҳсулот ва хом-ашё сотишни автоматлаштириб беради;
●Мижозлар билан пул олди-бердиси акт сверкаларини осон кўриш;
●Ҳар бир менежер, фақатгина, ўзи масъул бўлган мижозларгагина маҳсулот сотиши ва тўловларни қабул
●қилиши мумкин;
●Ҳар бир менежер бўйича тушган савдо пуллари ҳақида батафсил маълумот.

Савдо бўлими орқали мижозлар билан ишлаш ҳамда маҳсулот ва хом-ашёнинг савдоси жараёнлари самарадорлиги сезиларди даражада ошади.`;
const bolim4Parag = `Керакли кадрлар ва барча ходимлар маълумотлари қўл остингизда!


Сизнинг ходимларингиз компаниянгиздаги енг қимматли ресурсингиз бўлганлиги сабабли, улар билан ишлаш самарадорлиги жуда ҳам муҳим.

БAСCО ЕРП платформаси ҲР бўлимининг баъзи енг муҳим имкониятлари:

●Барча кадрларнинг електрон тўлдирилган анкеталар базасини тўғри ва тартибли сақлаш имконияти;
●Янги олинаётган кадрлар билан бўлган суҳбатларнинг тўлиқ музокарасини тушириш имконияти;
●Компанияда ишлаётган ходимларнинг тўлиқ базасини тез ва қулай кўриш имконияти;

ҲР бўлимининг барча имкониятлари сизга ходимларингиз билан ишлаш самарадорлигингиз сезиларли даражада ўсади.`;
const bolim5Parag = `Ходимларингизга исталган турда маош ҳисоблаш мумкин (табел асосида, КПИ асосида, бонус шаклида, ишбай
  шаклда).
  
  Aгар сизнинг жамоангиз йетарлича катта бўлса, уларнинг ишлаш сменаси, ишга келган вақти, олдиндан берилган авансларига қараб, маош бериш жараёни ҳам мураккаблашиб кетади.
  
  БAСCО ЕРП платформасининг Маош бўлими орқали еса сиз шу ва шу каби маош ҳисоблаш билан боғлиқ барча муаммоларни осон ҳал қилишингиз мумкин бўлади.`;
const bolim6Parag = `Компаниянинг барча турдаги пул маблағларининг аниқ ва ишончли юритилиши.

Ушбу бўлим компания раҳбари, бухгалтерия ва касса бўлими учун зарурий йечимларни беради.

Дастурда исталганча микдорда кассаларни киритиш ва улар бўйича амалиётларни қилиш мумкин. Бу билан
компаниянинг пули, айнан, қайерда турибди, қайси кассада қандай кирим-чиқимлар бўлаётганини аниқ билиб
туриш мумкин.

Кассаларда исталганча турдаги валюталарни алоҳида-алоҳида тарзда ҳисобини юритиш мумкин.

Муҳим касса ҳужжатлари тасдиқлангандан сўнггина базадаги ҳисоб-китобларда акс етади. Тасдиқни еса
фақат олдиндан белгиланган масъул шахсларгина қўя оладилар.

Натижада, масъул шахслар ҳар бир операцияни кўриб, хабардор бўлиб туришлари таъминланади.`;
const bolim7Parag = `Корхона ички қонун-қоидалари ва тартиби назоратини ягона база орқали назорат қилиш имкониятини беради.

БAСCО ЕРП платформасининг Назорат бўлими компания раҳбари ҳамда маош бўлими учун фойдали бўлади.

Назоратчи томонидан ҳар кунлик жарима, бонус ва рағбатлантришларни ўша куниёқ киритиб бориш ҳамда жарима, бонус ва рағбатлантиришларни кун, хафта, ой ва йиллар бўйича саралаш имкониятини беради.

Ундан ташқари, Назорат бўлими сотув менежерларини безовта қилмаган ҳолда, уларнинг мижоз билан музокараларини назорат қилиш имкониятини беради.`;
const bolim8Parag = `Склад бўлими савдо вақтида тайёр маҳсулотлар ҳаракати ва қолдиғини реал вақт режимида кўриб туриш имконияти.

Склад бўлими компания раҳбари, савдо ва бухгалтерия бўлими учун фойдали бўлади.

БAСCО ЕРП платформасининг енг муҳим имкониятлари қуйидагилар:

●Складга маҳсулот қабул қилиш функсияси;
●Складга кирим бўлган маҳсулотларнинг алоҳида ҳисоботи;
●Складдан чиқим бўлган маҳсулотларнинг алоҳида ҳисоботи;
●Маҳсулотлар қолдиғи енг кам миқдоридан камайганда бу ҳақида махсус ҳисоботда билиб туриш мумкин;
●Натижада ҳеч қачон тўсатдан маҳсулот йетишмаслиги юзага келмайди. Сабаби, камайгани олдиндан билинади;
●Маҳсулотлар қолдиғи енг кўп микдоридан кўпайганда бу ҳақида махсус ҳисоботда билиб туриш мумкин;
●Натижада, омборда бир турдаги маҳсулотларнинг меъёрдан ортиб кетиши олди олинади.

Ушбу бўлим орқали товарлар заҳирасини доимий кузатиб туриш ва ҳисоботларни тўғри юритиш осон амалга оширилади.`;
const bolim9Parag = `Таъминотчининг компанияга хом-ашё ва маҳсулот йетказиб берувчилар ҳақидаги маълумотларини тез ва
қулай топиш имконияти.

Ушбу бўлим орқали компаниянинг таъминотчилар билан ишлаш самарадорлиги ошади. Компания раҳбариятига тайёрланадиган ҳисоботлар вақти қисқаради.

Бу бўлимда, нафақат, тайёр маҳсулот, балки хизмат сотиш ва сотиб олиш орқали фаолиятидаги компанияларга таъминотни киритиб бориш имконини беради.

Таъминот бўлимининг муҳим имкониятларининг баъзиларини кўриб чиқамиз:


●Таъминотчининг компанияга хом-ашё ва маҳсулот йетказиб берувчилар ҳақидаги маълумотларини тез ва қулай топиш имконияти;
●Таъминотчининг кунлик режасини тез, қулай автоматик ташкил қилиб бериш имконияти;
●Таъминотчи билан суҳбатлашиш вақти келганда унинг карточкасига янги суҳбат мазмунини қўшмай туриб, будилник вақтини ўзгартириб бўлмайди. Бу таъминотчи билан суҳбатлашмай, шунчаки, вақтни суриб куйишнинг олдини олади.
●Таъминотчилар билан бўлган суҳбатлар бир марта базага ёзилганидан кейин уни ҳодим ўзи ўчириб ёки ўзгартириб юбора олмайди. Бу билан маълумотлар кейинчалик ўзгартириб куйилиши хавфининг олди олинади;`;
const bolim10Parag = `Турли шахслар билан ишлаш самарадорлиги сезиларли даражада ошади.

Бўлимнинг умумий имкониятлари:

●Таъминотчилар билан пул олди-бердиси акт сверкаларини осон кўриш имконияти.
●Турли шахслар билан умумий ҳисоб-китобларда манфаатлардан кечиш ҳисобига келишувлар бўлганда корректировка қилиш функсияси.
●Турли шахслар билан исталган валютада ҳисоб-китобларни алоҳида-алоҳида қилиб олиб юриш мумкин. Бу билан ҳисоб-китоблар доимо аниқ ҳолатда бўлади.
●Турли шахслар исталган валютада пул кирим-чиқим қилиш, қабул килаётганда пул суммасини бир валютадан бошқасига конвертация қилиб олиш мумкин. Бу билан бир вақтнинг ўзида ҳам касса ҳисобкитоблари, ҳам таъминотчи билан олди берди реал ҳолатда куринади.
●Турли шахслардан маҳсулотлар сотиб олиш нархини сўмда ёки AҚСҲ долларида белгиласа бўлади. Бу сиз истаган нархни осонлик билан кўришда ёрдам беради.
●Турли шахслардан исталган вақт оралиғида сотиб олинган хизматлар ҳисоботи.
●Турли шахслар ҳаракати ҳисоботи орқали ҳар бир таъсисчи ва турли шахсларни индивидуал анализ қилиш имконияти.
●Турли шахслардан хизмат сотиб олиш ва сотиш.

БAСCО ЕРП платформасининг ушбу бўлими компаниянгизнинг турли шахслар билан бўладиган барча муносабатларини назорат қилади ҳамда тартибга солади.`;
const bolim11Parag = `Барча асосий воситаларнинг ҳисоб-китоблари, ескириши ҳамда уларни сотишдан олинадиган фойда ва зарарлар ягона жойда.

Бўлимнинг умумий имкониятлари:

●Aсосий воситаларга махсус инвентар рақам бериш мумкин. Ва шу рақамга асосан уларнинг ҳисоб-китоблари юритилади.
●Aсосий воситалар, яъни ишлаб чиқариш жиҳозлари, офис жиҳозлари сотиб олиш ва компания балансида олиб юриш.
●Aсосий воситаларга фоизда ойлик ескиришини ҳисоблаш.
●Aсосий воситаларни сотиш ва балансдан олиб ташлаш.
●Aсосий воситаларнинг умумий батафсил рўйхати.
●Aсосий восита сотишдан фойда (зарар) ҳисоботи.
●Aсосий воситаларнинг сотиш ва сотиб олиш ҳаракати.
●Aсосий воситаларнинг маълум кун учун колдиғи ҳисоботи

Бу бўлим орқали компания реал даромадининг асосий воситалар ескиришида ўрни қанчалик муҳимлиги сезила бошлайди.`;
const bolim12Parag = `Ishlab chiqarish bo’limi orqali kompaniya ishlab chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.

Boʻlimning umumiy imkoniyatlari:


●Mahsulot ishlab chiqarish.
●Mahsulot ishlab chiqarishda har bir mahsulotga ketadigan xom-ashyolarni toʻliq kiritish imkoniyati orqali har bir mahsulotning tannarxini ham hisoblash imkoniyati.
●Mahsulot ishlab chiqarishda xom-ashyo bilan birga polufabrikatlarni ham tayyor mahsulot ishlab chiqarish ichiga kiritish imkoniyati.
●Ishlab chiqarilayotgan mahsulotning soniga karab tannarxi va summasini ham koʻrish mumkin.
●Mahsulot ishlab chiqarishda xom-ashyo yoki polufabrikat agar skladda bulmasa, ishlab chiqarishga ruxsat bermaydi. Bu real holatni analiz qilib turishni osonlashtiradi.
●Ishlab chiqariladigan mahsulotlar roʻyxatini kiritganda unga kerakli boʻlgan xom-ashyolarni skladdan avtomatik toʻldirib quyish imkoniyati mavjud.
●Yaroqsiz mahsulotlar skladga kaytganda mahsulotlarni qayta ishlash funksiyasi ham mavjud.
●Qayta ishlash funksiyasi orqali bir turdagi mahsulotdan ikkinchi turdagi mahsulotni ham qayta ishlash mumkin.
●Ishlab chiqarish uchun kerak boʻlgan xom-ashyolarni xom-ashyo skladidan ajratib saqlash uchun va tayyor boʻlgan mahsulotlarni saqlash uchun alohida ishlab chiqarish skladi.
●Skladdan skladga xom-ashyo va tayyor mahsulot oʻtkazish funksiyasi.
●Ishlab chiqarish skladini nazorat qilish uchun sklad hisoboti.
●Ishlab chiqarish uchun norma belgilash orqali xohlagan davrni tanlab, ishlab chiqarish kam yoki koʻp boʻlayotgani haqida maʼlumot olish.
●Ishlab chiqarishga mahsulot buyurtma berish.
●Ishlab chiqarish uchun kerakli xom-ashyolarga buyurtma berish.
●Kamaygan va koʻpaygan mahsulotlar haqida hisobot olish orqali mahsulotlar miqdorini toʻgʻri nazorat qila olish imkoniyati.
●Ishlab chiqarishga sarflangan xom-ashyoning kam yoki koʻp sarf boʻlayotgani haqida hisobot olish.
●Bir mahsulot uchun koʻp turdagi kalkulyatsiya kiritish imkoniyati.`;
const bolim13Parag = `Компания реал даромади ва харажатларини, банкдаги операцияларни солиқ, коммунал хизматларга
қилинаётган харажатларни доим назорат қилиб бориш имконияти пайдо бўлади.

Бўлимнинг умумий имкониятлари:
●Маошнинг бухгалтерия бўлимига доир бўлган операцияларни тўғридан-тўғри амалга ошириш.
●Ходимлар пластик картасига пул ўтказиш, уларга нақд пул тўлаш, маошдан ушланмаларни ёзиб бориш.
●Компаниянинг исталган солиқларини ҳисоблаб бориш ва уларни ҳар ойлик тизимда корхона харажатларида киргизиб бориш.
●Компания солиқларини банк орқали тўлов қилиб бориш.
●Компаниянинг исталган коммунал хизматларни ҳисоблаб бориш ва уларни ҳар ойлик тизимда корхона харажатларида киргизиб бориш.
●Компаниянинг коммунал хизматларини банк орқали тўлов қилиб бориш.
●Банк орқали бўладиган барча харажатларни тўғри юритиш учун киритиб бориш ва юритиш орқали компаниянинг ҳисоб рақамини кирим чиқимларини тўлиқ назорат қилиш мумкин.
●Компания фаолиятида турли шахслар билан пул олди-бердисининг ҳисоб-китобларини юритиш имконияти.
●Ходимларга ҳисобланган маошларни ва маошдан ташқари пуллар бериш.
●Компания мижозлари, таъминотчилари, турли шахслар фирмалари реквизитларини осон топиш, рус ва ўзбек тилидаги ҳисоб фактураларга осон киритиш ва қулай фойдаланиш.
●Компаниянинг барча тузилган шартномалар рўйхати.
●Коммунал хизматларга, солиқларга, турли шахсларга қилинаётган ҳаражатлар ҳисоботи алоҳида ҳолатда доим автоматик янгиланиб боради.
●Ходимларнинг маошдан турли ушланмалар ҳисоботи орқали исталган ойдаги маош ушланмалар тарихини кўриш мумкин.`;
function Directions() {
  const [clicked, setClicked] = useState(0);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [shower, setShower] = useState(false);
  return (
    <>
      <section className="directions">
        <div className=" container">
          <div className="directions-top">
            <h3 className="directions-top__subject">
              Basco ERP platforma yo'nalishlari
            </h3>
            <p className="directions-top__text">
              Basco ERP platformasining yo’nalishlari - biznesingizning barcha
              bo'limlari uchun yagona komplex yechim
            </p>
          </div>
          <div className="directions-middle">
            <ul className="directions-middle__list">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--1">
                    <img
                      src={kluch}
                      alt="trade"
                      className="directions-middle-card__img "
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    CRM boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Mijozlar bilan munosabat- larni boshqarishni avtomat-
                    lashtirish uchun qulay va optimal yondashuv
                  </p>
                  <button
                    className="directions-middle-card__btn directions-middle-card__btn--1"
                    onClick={() => {
                      openModal();
                      setClicked(2);
                    }}
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--2">
                    <img
                      src={trade}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Savdo boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(3);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--2"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--3">
                    <img
                      src={resource}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    HR boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                    ostingizda!
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(4);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--3"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={sss}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ta’minot bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                    beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                    imkoniyati.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(9);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--4"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--5">
                    <img
                      src={money}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Kassa boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                    ishonchli yuritilishi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(6);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--5"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--6">
                    <img
                      src={house}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Sklad boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                    qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(8);
                    }}
                    className="directions-middle-card__btn  directions-middle-card__btn--6"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--7">
                    <img src={setting} alt="trade" className=" " />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Nazorat boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Korxona ichki qonun-qoida-lari va tartibi nazoratini yagona
                    baza orqali nazorat qilish imkoniyatini beradi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(7);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--7"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={star}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Rahbar boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar sifatida
                    sizning vaqtingiz ejaladi, samaradorlik oshadi.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(1);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--8"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          {shower ? (
            <div className="directions-middle">
              <ul className="directions-middle__list">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box  directions-middle-card__box--4  sariq">
                      <img
                        width={62}
                        height={62}
                        src={persons}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Turli shaxslar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Turli shaxslar bilan ishlash samaradorligi sezilarli
                      darajada oshadi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(10);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--9"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                    directions-middle-card__box--2"
                    >
                      <img
                        src={auto}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>

                    <h3 className="directions-middle-card__subject">
                      Asosiy vositalar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Barcha asosiy vositalarning hisob-kitoblari, eskirishi
                      hamda ularni sotishdan olinadigan foyda va zararlar yagona
                      joyda.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(11);
                      }}
                      className="directions-middle-card__btn"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                    directions-middle-card__box--5"
                    >
                      <img
                        src={work}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ishlab chiqarish bo’limi;
                    </h3>
                    <p className="directions-middle-card__text">
                      Ishlab chiqarish bo’limi orqali kompaniya ishlab
                      chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi
                      hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(12);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--5"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                    directions-middle-card__box--6"
                    >
                      <img
                        src={moliya}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Buxgalteriya bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniya real daromadi va xarajatlarini, bankdagi
                      operatsiyalarni soliq, kommunal xizmatlarga qilinayotgan
                      xarajatlarni doim nazorat qilib borish imkoniyati paydo
                      boʻladi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(13);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--6"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item directions__items">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box


directions-middle-card__box--3"
                    >
                      <img
                        src={maosh}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Maosh bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Xodimlaringizga istalgan turda maosh hisoblash mumkin
                      (tabel asosida, KPI asosida, bonus shaklida, ishbay
                      shaklda).
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(5);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--3"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="directions-bottom">
            <button
              onClick={() => setShower(!shower)}
              className="directions-bottom__btn"
            >
              {shower ? "Yopish" : " Barcha bo`limlar"}
            </button>
          </div>
          {/* /////////////////////////////////////////////// */}
          <Splide
            className="directions__splide"
            aria-label="My Favorite Images"
          >
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--1">
                      <img
                        src={kluch}
                        alt="trade"
                        className="directions-middle-card__img "
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(2);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--1"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--2">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Savdo boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(3);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--2"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--3">
                      <img
                        src={resource}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      HR boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                      ostingizda!
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(4);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--3"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--1">
                      <img
                        src={sss}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ta’minot bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                      beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                      imkoniyati.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(9);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--4"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>

            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--5">
                      <img
                        src={money}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Kassa boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                      ishonchli yuritilishi
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(6);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--5"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--6">
                      <img
                        src={house}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Sklad boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                      qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(8);
                      }}
                      className="directions-middle-card__btn  directions-middle-card__btn--6"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--7">
                      <img src={setting} alt="trade" className=" " />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Nazorat boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Korxona ichki qonun-qoida-lari va tartibi nazoratini
                      yagona baza orqali nazorat qilish imkoniyatini beradi
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(7);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--7"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--8">
                      <img
                        src={star}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Rahbar boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar
                      sifatida sizning vaqtingiz ejaladi, samaradorlik oshadi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(1);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--8"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box  directions-middle-card__box--4">
                      <img
                        width={62}
                        height={62}
                        src={persons}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Turli shaxslar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Turli shaxslar bilan ishlash samaradorligi sezilarli
                      darajada oshadi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(10);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--9  "
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--2"
                    >
                      <img
                        src={auto}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Asosiy vositalar bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Barcha asosiy vositalarning hisob-kitoblari, eskirishi
                      hamda ularni sotishdan olinadigan foyda va zararlar yagona
                      joyda.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(11);
                      }}
                      className="directions-middle-card__btn"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>

            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--5"
                    >
                      <img
                        src={work}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ishlab chiqarish bo’limi;
                    </h3>
                    <p className="directions-middle-card__text">
                      Ishlab chiqarish bo’limi orqali kompaniya ishlab
                      chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi
                      hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(12);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--5"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--6"
                    >
                      <img
                        src={moliya}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Buxgalteriya bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniya real daromadi va xarajatlarini, bankdagi
                      operatsiyalarni soliq, kommunal xizmatlarga qilinayotgan
                      xarajatlarni doim nazorat qilib borish imkoniyati paydo
                      boʻladi.
                    </p>
                    <button
                      onClick={() => {
                        openModal();
                        setClicked(13);
                      }}
                      className="directions-middle-card__btn directions-middle-card__btn--6"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
            <SplideSlide className="dicretions__splide--item">
              <div className="directions__title directions__titles">
                <li className="directions-middle__item directions__items">
                  <div className="directions-middle__card">
                    <div
                      className="directions-middle-card__box
                      directions-middle-card__box--3"
                    >
                      <img
                        src={maosh}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Maosh bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Xodimlaringizga istalgan turda maosh hisoblash mumkin
                      (tabel asosida, KPI asosida, bonus shaklida, ishbay
                      shaklda).
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--3">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </div>
            </SplideSlide>
          </Splide>
          {/* ////////////////////////////////////// */}
          <Splide
            className="directions__splides"
            aria-label="My Favorite Images"
          >
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--1">
                    <img
                      src={kluch}
                      alt="trade"
                      className="directions-middle-card__img "
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    CRM boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Mijozlar bilan munosabat- larni boshqarishni avtomat-
                    lashtirish uchun qulay va optimal yondashuv
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(2);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--1"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--2">
                    <img
                      src={trade}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Savdo boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(3);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--2"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--3">
                    <img
                      src={resource}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>

                  <h3 className="directions-middle-card__subject">
                    HR boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                    ostingizda!
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(4);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--3"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={sss}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ta’minot bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                    beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                    imkoniyati.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(9);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--4"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--5">
                    <img
                      src={money}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Kassa boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                    ishonchli yuritilishi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(6);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--5"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--6">
                    <img
                      src={house}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Sklad boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                    qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(8);
                    }}
                    className="directions-middle-card__btn  directions-middle-card__btn--6"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--7">
                    <img src={setting} alt="trade" className=" " />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Nazorat boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Korxona ichki qonun-qoida-lari va tartibi nazoratini yagona
                    baza orqali nazorat qilish imkoniyatini beradi
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(7);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--7"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={star}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Rahbar boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar sifatida
                    sizning vaqtingiz ejaladi, samaradorlik oshadi.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(1);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--8"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box  directions-middle-card__box--4">
                    <img
                      width={62}
                      height={62}
                      src={persons}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Turli shaxslar bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Turli shaxslar bilan ishlash samaradorligi sezilarli
                    darajada oshadi.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(10);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--9"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>

            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--2"
                  >
                    <img
                      src={auto}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Asosiy vositalar bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Barcha asosiy vositalarning hisob-kitoblari, eskirishi hamda
                    ularni sotishdan olinadigan foyda va zararlar yagona joyda.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(11);
                    }}
                    className="directions-middle-card__btn "
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--5"
                  >
                    <img
                      src={work}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ishlab chiqarish bo’limi;
                  </h3>
                  <p className="directions-middle-card__text">
                    Ishlab chiqarish bo’limi orqali kompaniya ishlab chiqarishda
                    bo’layotgan ortiqcha xarajatlarni ko’ra oladi hamda real
                    ishlab chiqarishni to’g’ri nazorat qila oladi.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(12);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--5"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--6"
                  >
                    <img
                      src={moliya}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Buxgalteriya bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniya real daromadi va xarajatlarini, bankdagi
                    operatsiyalarni soliq, kommunal xizmatlarga qilinayotgan
                    xarajatlarni doim nazorat qilib borish imkoniyati paydo
                    boʻladi.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(13);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--6"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>

            <SplideSlide className="directions__splides--title">
              <li className="directions-middle__item directions__items">
                <div className="directions-middle__card">
                  <div
                    className="directions-middle-card__box
                      directions-middle-card__box--3"
                  >
                    <img
                      src={maosh}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Ishlab chiqarish bo’limi
                  </h3>
                  <p className="directions-middle-card__text">
                    Ishlab chiqarish bo’limi orqali kompaniya ishlab chiqarishda
                    bo’layotgan ortiqcha xarajatlarni ko’ra oladi hamda real
                    ishlab chiqarishni to’g’ri nazorat qila oladi.
                  </p>
                  <button
                    onClick={() => {
                      openModal();
                      setClicked(12);
                    }}
                    className="directions-middle-card__btn directions-middle-card__btn--3"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </SplideSlide>
          </Splide>
          <div className="modal__section">
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 className="directions__modal-name">
                {clicked === 1
                  ? bolim1Title
                  : clicked === 2
                  ? bolim2Title
                  : clicked === 3
                  ? bolim3Title
                  : clicked === 4
                  ? bolim4Title
                  : clicked === 5
                  ? bolim5Title
                  : clicked === 6
                  ? bolim6Title
                  : clicked === 7
                  ? bolim7Title
                  : clicked === 8
                  ? bolim8Title
                  : clicked === 9
                  ? bolim9Title
                  : clicked === 10
                  ? bolim10Title
                  : clicked === 11
                  ? bolim11Title
                  : clicked === 12
                  ? bolim12Title
                  : clicked === 13
                  ? bolim13Title
                  : ""}
              </h2>
              <p className="directions__modal-text">
                {clicked === 1
                  ? bolim1Parag
                  : clicked === 2
                  ? bolim2Parag
                  : clicked === 3
                  ? bolim3Parag
                  : clicked === 4
                  ? bolim4Parag
                  : clicked === 5
                  ? bolim5Parag
                  : clicked === 6
                  ? bolim6Parag
                  : clicked === 7
                  ? bolim7Parag
                  : clicked === 8
                  ? bolim8Parag
                  : clicked === 9
                  ? bolim9Parag
                  : clicked === 10
                  ? bolim10Parag
                  : clicked === 11
                  ? bolim11Parag
                  : clicked === 12
                  ? bolim12Parag
                  : clicked === 13
                  ? bolim13Parag
                  : ""}
              </p>

              <button
                className="directions__modal-btn"
                style={{ cursor: "pointer" }}
                onClick={closeModal}
              >
                Ёпиш
              </button>
            </Modal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Directions;
