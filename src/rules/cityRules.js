/* @flow */

import { ANDROGYNOUS } from '../gender';
import type { DeclentionModsT, DeclensionRuleSetT } from '../inclineRules';

export type DeclensionCityRuleT = {|
  test: string[],
  mods: DeclentionModsT,
  tags?: string[],
|};

export type DeclensionCityRuleSetT = {|
  exceptions: DeclensionCityRuleT[],
  suffixes: DeclensionCityRuleT[],
|};

export const frozenWords = ['форт-шевченко'];

export const frozenParts = [
  '-',
  ' ',
  'в',
  'на',
  'баден', // баден-Бадене
  'бледно',
  'буэнос',
  'вице', // вице-президенту
  'гаврилов',
  'йошкар', // Йошкар-Ола
  'коста',
  'лос',
  'норд',
  'нью', // Нью-Йорку,
  'орехово',
  'принс',
  'сан', // Сан-Франциско
  'санкт', // Санкт-Петербург
  'санта',
  'северо',
  'ситтард',
  'темно',
  'улан',
  'усолье', // Усолье-Сибирское
  'усть', // Усть-Каменогорске, Усть-Илимск
  'форт', // Форт-Шевченко
  'царь', // царь-пушке
  'экс', // экс-чемпиону
  'юго',
  'юрьев',
  'нур',
];

// do not decline words after this words
export const frozenPartsAfter = ['село', 'поселок', 'аул', 'город', 'деревня', 'урочище'];

const cityInflections: DeclensionCityRuleSetT = {
  exceptions: [
    {
      test: ['сочи', 'тбилиси'],
      mods: ['', '', '', '', ''],
    },
    {
      test: ['село', 'озеро', 'место'],
      mods: ['-а', '-у', '', 'м', '-е'],
    },
    {
      test: ['область'],
      mods: ['-и', '-и', '', 'ю', '-и'],
    },
    {
      test: ['деревня'],
      mods: ['-и', '-е', '-ю', '-ей', '-е'],
    },
    {
      test: ['море'],
      mods: ['-я', '-ю', '', 'м', ''],
    },
    {
      test: ['холм'],
      mods: ['а', 'у', '', 'ом', 'е'],
    },
    {
      test: ['орел', 'орёл'], // Орел, Орёл
      mods: ['--ла', '--лу', '--ла', '--лом', '--ле'],
    },
  ],
  suffixes: [
    {
      test: ['чёк', 'чек'], // Волочёк, Чернечек
      mods: ['--ка', '--ку', '', '--ком', '--ке'],
    },
    {
      test: ['чик', 'ич'], // Чик, Углич
      mods: ['а', 'у', '', 'ом', 'е'],
    },
    {
      test: ['жний', 'хний', 'шний', 'щий'], // Нижний, Вышний, Верхний
      mods: ['--его', '--ему', '', '-м', '--ем'],
    },
    {
      test: ['ще'], // Хлевище, Городище
      mods: ['-а', '-у', '', 'м', ''],
    },
    {
      test: ['щи'], // Мытищи
      mods: ['-', '-ам', '', '-ами', '-ах'],
    },
    {
      test: ['чье'], // Щучье
      mods: ['-я', '-ю', '', 'м', ''],
    },
    {
      test: ['ель', 'пль'], // норильский никель, Гузерипль
      mods: ['-я', '-ю', '', '-ем', '-е'],
    },
    {
      test: ['чь'], // Холмечь
      mods: ['-и', '-и', '', 'ю', '-и'],
    },
    {
      test: ['чи'], // Чепеничи
      mods: ['-ей', '-ам', '', '-ами', '-ах'],
    },
    {
      test: ['ые', 'ие'], // Набережные
      mods: ['-х', '-м', '', '-ми', '-х'],
    },
    {
      test: ['ый', 'ий', 'ое'], // Рижский, Раменское
      mods: ['--ого', '--ому', '', '-м', '--ом'],
    },
    {
      test: ['ая'], // Рижская
      mods: ['--ой', '--ой', '--ую', '--ой', '--ой'],
    },
    {
      test: ['гиев'], // Сергиев Посад, но не Киев
      mods: ['а', 'у', '', 'ым', 'ом'],
    },
    {
      test: ['ны', 'вцы'], // Челны, Черновцы
      mods: ['-ов', '-ам', '', '-ами', '-ах'],
    },
    {
      test: ['ша'], // Ропша
      mods: ['-и', '-е', '-у', '-ей', '-е'],
    },
    {
      test: [
        'ры', // Чебоксары, Шушары
        'цы', // Бельцы
        'ды', // минеральные воды
        'ги', // верхние киги
      ],
      mods: ['-', '-ам', '', '-ами', '-ах'],
    },
    {
      test: ['амень'], // Камень, но не Тюмень
      mods: ['---ня', '---ню', '', '---нем', '---не'],
    },
    {
      test: [
        'ьн', // Кёльн
        'нц', // Гленц
        'мм', // Гримм
      ],
      mods: ['а', 'у', '', 'ом', 'е'],
    },
  ],
  // Склонения городов можно подсмотреть тут https://ru.wiktionary.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD
};

export const cityRules: DeclensionRuleSetT = {
  exceptions: cityInflections.exceptions.map(o => ({ gender: ANDROGYNOUS, ...o })),
  suffixes: cityInflections.suffixes.map(o => ({ gender: ANDROGYNOUS, ...o })),
};
