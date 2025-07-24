/**
 * File: data/char-map.js
 * Description:
 *   - Character map between Russian (Cyrillic) and Latin-based keyboard layout (ABNT2).
 *   - Reverse map for bidirectional transliteration.
 *   - Basic Russian vocabulary organised by difficulty levels.
 */

/**
 * MAPA_CARACTERES (Character Map)
 *
 * Maps each Cyrillic character to a corresponding key on a Latin ABNT2 keyboard.
 * This facilitates typing Russian letters using a familiar physical layout.
 *
 * Example:
 *   'а' → 'f'
 *   'ж' → 'ç'
 */
export const MAPA_CARACTERES = {
  'а': 'f', 'б': ',', 'в': 'd', 'г': 'u', 'д': 'l', 'е': 't',
  'ё': "'", 'ж': 'ç', 'з': 'p', 'и': 'b', 'й': 'q', 'к': 'r',
  'л': 'k', 'м': 'v', 'н': 'y', 'о': 'j', 'п': 'g', 'р': 'h',
  'с': 'c', 'т': 'n', 'у': 'e', 'ф': 'a', 'х': '´', 'ц': 'w',
  'ч': 'x', 'ш': 'i', 'щ': 'o', 'ъ': '[', 'ы': 's', 'ь': 'm',
  'э': ']', 'ю': '.', 'я': 'z'
};

/**
 * REVERSE_MAP
 *
 * Generates the reverse mapping of MAPA_CARACTERES.
 * Enables transliteration from Latin input back into Cyrillic.
 */
export const REVERSE_MAP = Object.fromEntries(
  Object.entries(MAPA_CARACTERES).map(([cyr, lat]) => [lat, cyr])
);

/**
 * RUSSIAN_WORDS
 *
 * A basic Russian vocabulary dataset grouped by level (1 to 5).
 * Each word object includes:
 *   - `word`: a Russian word written in Cyrillic script.
 *   - `translation`: its English meaning (British spelling preserved where relevant).
 *
 * Intended for progressive language learning through typing and reading.
 */
export const RUSSIAN_WORDS = {
  1: [ // Beginner
    { word: 'да', translation: 'yes' },
    { word: 'нет', translation: 'no' },
    { word: 'он', translation: 'he' },
    { word: 'она', translation: 'she' },
    { word: 'я', translation: 'I' },
    { word: 'ты', translation: 'you (singular)' },
    { word: 'мы', translation: 'we' },
    { word: 'вы', translation: 'you (plural/formal)' },
    { word: 'что', translation: 'what' },
    { word: 'как', translation: 'how' },
    { word: 'где', translation: 'where' },
    { word: 'кто', translation: 'who' },
    { word: 'это', translation: 'this / that' },
    { word: 'тот', translation: 'that (one)' },
    { word: 'здесь', translation: 'here' },
    { word: 'там', translation: 'there' },
    { word: 'мама', translation: 'mum' },
    { word: 'папа', translation: 'dad' },
    { word: 'дом', translation: 'house' },
    { word: 'кот', translation: 'cat (male)' }
  ],
  2: [ // Basic nouns
    { word: 'собака', translation: 'dog' },
    { word: 'друг', translation: 'friend (male)' },
    { word: 'подруга', translation: 'friend (female)' },
    { word: 'брат', translation: 'brother' },
    { word: 'сестра', translation: 'sister' },
    { word: 'день', translation: 'day' },
    { word: 'ночь', translation: 'night' },
    { word: 'утро', translation: 'morning' },
    { word: 'вечер', translation: 'evening' },
    { word: 'время', translation: 'time' },
    { word: 'год', translation: 'year' },
    { word: 'жизнь', translation: 'life' },
    { word: 'ребёнок', translation: 'child' },
    { word: 'человек', translation: 'person / human' },
    { word: 'люди', translation: 'people' },
    { word: 'работа', translation: 'work / job' },
    { word: 'школа', translation: 'school' },
    { word: 'город', translation: 'city' },
    { word: 'страна', translation: 'country' },
    { word: 'вещь', translation: 'thing / object' }
  ],
  3: [ // Everyday vocabulary
    { word: 'любовь', translation: 'love' },
    { word: 'голос', translation: 'voice' },
    { word: 'слово', translation: 'word' },
    { word: 'язык', translation: 'language / tongue' },
    { word: 'телефон', translation: 'phone' },
    { word: 'машина', translation: 'car' },
    { word: 'поезд', translation: 'train' },
    { word: 'письмо', translation: 'letter' },
    { word: 'вопрос', translation: 'question' },
    { word: 'ответ', translation: 'answer' },
    { word: 'сегодня', translation: 'today' },
    { word: 'завтра', translation: 'tomorrow' },
    { word: 'вчера', translation: 'yesterday' },
    { word: 'сейчас', translation: 'now' },
    { word: 'позже', translation: 'later' },
    { word: 'раньше', translation: 'earlier' },
    { word: 'никогда', translation: 'never' },
    { word: 'всегда', translation: 'always' },
    { word: 'иногда', translation: 'sometimes' },
    { word: 'часто', translation: 'often' }
  ],
  4: [ // Descriptions, emotions, family
    { word: 'ещё', translation: 'still / more' },
    { word: 'жена', translation: 'wife' },
    { word: 'муж', translation: 'husband' },
    { word: 'жить', translation: 'to live' },
    { word: 'журнал', translation: 'magazine' },
    { word: 'жаркий', translation: 'hot (weather)' },
    { word: 'дочь', translation: 'daughter' },
    { word: 'медведь', translation: 'bear' },
    { word: 'счастье', translation: 'happiness' },
    { word: 'жизненный', translation: 'vital / life-related' },
    { word: 'ощущение', translation: 'sensation / feeling' },
    { word: 'чувство', translation: 'emotion / feeling' },
    { word: 'значение', translation: 'meaning' },
    { word: 'выглядеть', translation: 'to look like / appear' },
    { word: 'вещь', translation: 'thing / object' },
    { word: 'праздник', translation: 'holiday / celebration' },
    { word: 'здание', translation: 'building' },
    { word: 'объект', translation: 'object / facility' },
    { word: 'мышь', translation: 'mouse' },
    { word: 'ключ', translation: 'key' }
  ],
  5: [ // Advanced vocabulary
    { word: 'ответственность', translation: 'responsibility' },
    { word: 'представление', translation: 'presentation / idea' },
    { word: 'удивительный', translation: 'amazing' },
    { word: 'независимость', translation: 'independence' },
    { word: 'воспитание', translation: 'upbringing / education' },
    { word: 'превосходство', translation: 'superiority' },
    { word: 'определённость', translation: 'certainty' },
    { word: 'приближение', translation: 'approach / approximation' },
    { word: 'удостоверение', translation: 'identification / certificate' },
    { word: 'исключительность', translation: 'exclusivity' },
    { word: 'рассматривание', translation: 'consideration / viewing' },
    { word: 'восстановление', translation: 'restoration / recovery' },
    { word: 'переосмысление', translation: 'reconsideration / rethinking' },
    { word: 'неопределённый', translation: 'undefined / vague' },
    { word: 'сосредоточиться', translation: 'to concentrate' },
    { word: 'перевоспитание', translation: 're-education / rehabilitation' },
    { word: 'преобразование', translation: 'transformation' },
    { word: 'удовлетворение', translation: 'satisfaction' },
    { word: 'предпринимательство', translation: 'entrepreneurship' },
    { word: 'многозначительность', translation: 'meaningfulness / significance' }
  ]
};
