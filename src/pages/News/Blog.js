import * as React from 'react';
import MainContent from './MainContent';
import axios from 'axios';

const cardData = [
  {
    "title": "Сериал «Преступление и наказание»: где смотреть, актеры, сюжет",
    "link": "https://journal.tinkoff.ru/news/crime-and-punishment-released/#comments",
    "id": 201
  },
  {
    "title": "МИД Венгрии поздравил правящую партию Грузии с победой. Сийярто заявил, что попытки вмешательства не помешали выборам: Политика: Мир: Lenta.ru",
    "link": "https://lenta.ru/news/2024/10/27/mid-vengrii-pozdravil-pravyaschuyu-partiyu-gruzii-s-pobedoy-siyyarto-zayavil-chto-popytki-vmeshatelstva-ne-pomeshali-vyboram/",
    "id": 95
  },
  {
    "title": "Премьеру «Преступления и наказания» дважды перенесли: когда выйдет сериал",
    "link": "https://journal.tinkoff.ru/news/crime-and-punishment-delayed/#comments",
    "id": 199
  },
  {
    "title": "Премьеру «Преступления и наказания» дважды перенесли: когда выйдет сериал",
    "link": "https://journal.tinkoff.ru/news/crime-and-punishment-delayed/",
    "id": 198
  },
  {
    "title": "Начались съемки фильма «Король и Шут. Навсегда» — первые кадры со съемочной площадки",
    "link": "https://journal.tinkoff.ru/news/kish-filming-began/#comments",
    "id": 373
  },
  {
    "title": "Начались съемки фильма «Король и Шут. Навсегда» — первые кадры со съемочной площадки",
    "link": "https://journal.tinkoff.ru/news/kish-filming-began/",
    "id": 372
  },
  {
    "title": "Стали известны имена погибших при крушении вертолета в Кировской области: Происшествия: Россия: Lenta.ru",
    "link": "https://lenta.ru/news/2024/10/27/stali-izvestny-imena-pogibshih-pri-krushenii-vertoleta-v-kirovskoy-oblasti/",
    "id": 42
  },
  {
    "title": "Рэпера Гуфа доставили в суд Наро-Фоминска",
    "link": "https://mash.ru/news/199712/",
    "id": 2
  },
  {
    "title": "Второго фигуранта дела рэпера Гуфа о драке в подмосковной бане привезли в суд",
    "link": "https://mash.ru/news/199702/",
    "id": 3
  },
  {
    "title": "Упавший в Кировской области вертолет эксплуатировался почти 38 лет: Россия: Lenta.ru",
    "link": "https://lenta.ru/news/2024/10/26/upavshiy-v-kirovskoy-oblasti-vertolet-ekspluatirovalsya-pochti-38-let/",
    "id": 56
  },
  {
    "title": "Появились подробности об окружении ВСУ в Курской области: Политика: Россия: Lenta.ru",
    "link": "https://lenta.ru/news/2024/10/25/poyavilis-podrobnosti-ob-okruzhenii-vsu-v-kurskoy-oblasti/",
    "id": 181
  },
  {
    "title": "Путин назвал число находящихся в Курской области украинских солдат: Политика: Россия: Lenta.ru",
    "link": "https://lenta.ru/news/2024/10/24/putin-nazval-chislo-nahodyaschihsya-v-kurskoy-oblasti-ukrainskih-soldat/",
    "id": 147
  }
]

export default function Blog() {

  return (
    <div>
      <MainContent cardData={cardData} />
    </div>
  );
}
