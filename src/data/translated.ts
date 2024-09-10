const wordsList = [
    {
        id: 0,
        ru: 'покидать',
        en: 'abandon'
    },
    {
        id: 1,
        ru: 'способность',
        en: 'ability'
    },
    {
        id: 2,
        ru: 'способный',
        en: 'able'
    },
    {
        id: 3,
        ru: 'о',
        en: 'about'
    },
    {
        id: 4,
        ru: 'выше',
        en: 'above'
    },
    {
        id: 5,
        ru: 'за границей',
        en: 'abroad'
    },
    {
        id: 6,
        ru: 'абсолютный',
        en: 'absolute'
    },
    {
        id: 7,
        ru: 'абсолютно',
        en: 'absolutely'
    },
    {
        id: 8,
        ru: 'академический',
        en: 'academic'
    },
    {
        id: 9,
        ru: 'принимать',
        en: 'accept'
    },
    {
        id: 10,
        ru: 'приемлемый',
        en: 'acceptable'
    },
    {
        id: 11,
        ru: 'доступ',
        en: 'access'
    },
    {
        id: 12,
        ru: 'несчастный случай',
        en: 'accident'
    },
    {
        id: 13,
        ru: 'размещение',
        en: 'accommodation'
    },
    {
        id: 14,
        ru: 'сопровождать',
        en: 'accompany'
    },
    {
        id: 15,
        ru: 'согласно',
        en: 'according'
    },
    {
        id: 16,
        ru: 'счет',
        en: 'account'
    },
    {
        id: 17,
        ru: 'точный',
        en: 'accurate'
    },
    {
        id: 18,
        ru: 'обвинять',
        en: 'accuse'
    },
    {
        id: 19,
        ru: 'достигать',
        en: 'achieve'
    },
    {
        id: 20,
        ru: 'достижение',
        en: 'achievement'
    },
    {
        id: 21,
        ru: 'сознавать',
        en: 'acknowledge'
    },
    {
        id: 22,
        ru: 'приобретать',
        en: 'acquire'
    },
    {
        id: 23,
        ru: 'через',
        en: 'across'
    },
    {
        id: 24,
        ru: 'действовать',
        en: 'act'
    },
    {
        id: 25,
        ru: 'действие',
        en: 'action'
    },
    {
        id: 26,
        ru: 'активный',
        en: 'active'
    },
    {
        id: 27,
        ru: 'активность',
        en: 'activity'
    },
    {
        id: 28,
        ru: 'актер',
        en: 'actor'
    },
    {
        id: 29,
        ru: 'актриса',
        en: 'actress'
    },
    {
        id: 30,
        ru: 'действительный',
        en: 'actual'
    },
    {
        id: 31,
        ru: 'на самом деле',
        en: 'actually'
    },
    {
        id: 32,
        ru: 'объявление',
        en: 'ad'
    },
    {
        id: 33,
        ru: 'адаптироваться',
        en: 'adapt'
    },
    {
        id: 34,
        ru: 'добавлять',
        en: 'add'
    },
    {
        id: 35,
        ru: 'добавление',
        en: 'addition'
    },
    {
        id: 36,
        ru: 'дополнительный',
        en: 'additional'
    },
    {
        id: 37,
        ru: 'адрес',
        en: 'address'
    },
    {
        id: 38,
        ru: 'администрация',
        en: 'administration'
    },
    {
        id: 39,
        ru: 'восхищаться',
        en: 'admire'
    },
    {
        id: 40,
        ru: 'признавать',
        en: 'admit'
    },
    {
        id: 41,
        ru: 'усыновить',
        en: 'adopt'
    },
    {
        id: 42,
        ru: 'взрослый',
        en: 'adult'
    },
    {
        id: 43,
        ru: 'продвигать',
        en: 'advance'
    },
    {
        id: 44,
        ru: 'передовой',
        en: 'advanced'
    },
    {
        id: 45,
        ru: 'преимущество',
        en: 'advantage'
    },
    {
        id: 46,
        ru: 'приключение',
        en: 'adventure'
    },
    {
        id: 47,
        ru: 'рекламировать',
        en: 'advertise'
    },
    {
        id: 48,
        ru: 'реклама',
        en: 'advertisement'
    },
    {
        id: 49,
        ru: 'реклама',
        en: 'advertising'
    },
    {
        id: 50,
        ru: 'совет',
        en: 'advice'
    },
    {
        id: 51,
        ru: 'советовать',
        en: 'advise'
    },
    {
        id: 52,
        ru: 'роман',
        en: 'affair'
    },
    {
        id: 53,
        ru: 'оказывать воздействие',
        en: 'affect'
    },
    {
        id: 54,
        ru: 'предоставлять',
        en: 'afford'
    },
    {
        id: 55,
        ru: 'испуганный',
        en: 'afraid'
    },
    {
        id: 56,
        ru: 'после',
        en: 'after'
    },
    {
        id: 57,
        ru: 'полдень',
        en: 'afternoon'
    },
    {
        id: 58,
        ru: 'после',
        en: 'afterwards'
    },
    {
        id: 59,
        ru: 'снова',
        en: 'again'
    },
    {
        id: 60,
        ru: 'против',
        en: 'against'
    },
    {
        id: 61,
        ru: 'возраст',
        en: 'age'
    },
    {
        id: 62,
        ru: 'в возрасте',
        en: 'aged'
    },
    {
        id: 63,
        ru: 'агентство',
        en: 'agency'
    },
    {
        id: 64,
        ru: 'повестка дня',
        en: 'agenda'
    },
    {
        id: 65,
        ru: 'агент',
        en: 'agent'
    },
    {
        id: 66,
        ru: 'агрессивный',
        en: 'aggressive'
    },
    {
        id: 67,
        ru: 'назад',
        en: 'ago'
    },
    {
        id: 68,
        ru: 'соглашаться',
        en: 'agree'
    },
    {
        id: 69,
        ru: 'соглашение',
        en: 'agreement'
    },
    {
        id: 70,
        ru: 'ах',
        en: 'ah'
    },
    {
        id: 71,
        ru: 'предстоящий',
        en: 'ahead'
    },
    {
        id: 72,
        ru: 'помогать',
        en: 'aid'
    },
    {
        id: 73,
        ru: 'цель',
        en: 'aim'
    },
    {
        id: 74,
        ru: 'воздух',
        en: 'air'
    },
    {
        id: 75,
        ru: 'самолет',
        en: 'aircraft'
    },
    {
        id: 76,
        ru: 'авиакомпания',
        en: 'airline'
    },
    {
        id: 77,
        ru: 'аэропорт',
        en: 'airport'
    },
    {
        id: 78,
        ru: 'тревога',
        en: 'alarm'
    },
    {
        id: 79,
        ru: 'альбом',
        en: 'album'
    },
    {
        id: 80,
        ru: 'алкоголь',
        en: 'alcohol'
    },
    {
        id: 81,
        ru: 'алкоголик',
        en: 'alcoholic'
    },
    {
        id: 82,
        ru: 'живой',
        en: 'alive'
    },
    {
        id: 83,
        ru: 'все',
        en: 'all'
    },
    {
        id: 84,
        ru: 'все',
        en: 'all'
    },
    {
        id: 85,
        ru: 'позволять',
        en: 'allow'
    },
    {
        id: 86,
        ru: 'почти',
        en: 'almost'
    },
    {
        id: 87,
        ru: 'один',
        en: 'alone'
    },
    {
        id: 88,
        ru: 'вдоль',
        en: 'along'
    },
    {
        id: 89,
        ru: 'уже',
        en: 'already'
    },
    {
        id: 90,
        ru: 'также',
        en: 'also'
    },
    {
        id: 91,
        ru: 'изменить',
        en: 'alter'
    },
    {
        id: 92,
        ru: 'альтернатива',
        en: 'alternative'
    },
    {
        id: 93,
        ru: 'хотя',
        en: 'although'
    },
    {
        id: 94,
        ru: 'всегда',
        en: 'always'
    },
    {
        id: 95,
        ru: 'поражен',
        en: 'amazed'
    },
    {
        id: 96,
        ru: 'удивительный',
        en: 'amazing'
    },
    {
        id: 97,
        ru: 'амбиции',
        en: 'ambition'
    },
    {
        id: 98,
        ru: 'амбициозный',
        en: 'ambitious'
    },
    {
        id: 99,
        ru: 'среди',
        en: 'among'
    },
    {
        id: 100,
        ru: 'количество',
        en: 'amount'
    },
    {
        id: 101,
        ru: 'анализировать',
        en: 'analyse'
    },
    {
        id: 102,
        ru: 'анализ',
        en: 'analysis'
    },
    {
        id: 103,
        ru: 'древний',
        en: 'ancient'
    },
    {
        id: 104,
        ru: 'и',
        en: 'and'
    },
    {
        id: 105,
        ru: 'злость',
        en: 'anger'
    },
    {
        id: 106,
        ru: 'угол',
        en: 'angle'
    },
    {
        id: 107,
        ru: 'злой',
        en: 'angry'
    },
    {
        id: 108,
        ru: 'животное',
        en: 'animal'
    },
    {
        id: 109,
        ru: 'лодыжка',
        en: 'ankle'
    },
    {
        id: 110,
        ru: 'годовщина',
        en: 'anniversary'
    },
    {
        id: 111,
        ru: 'объявлять',
        en: 'announce'
    },
    {
        id: 112,
        ru: 'объявление',
        en: 'announcement'
    },
    {
        id: 113,
        ru: 'раздражать',
        en: 'annoy'
    },
    {
        id: 114,
        ru: 'раздраженный',
        en: 'annoyed'
    },
    {
        id: 115,
        ru: 'раздражающий',
        en: 'annoying'
    },
    {
        id: 116,
        ru: 'ежегодный',
        en: 'annual'
    },
    {
        id: 117,
        ru: 'другой',
        en: 'another'
    },
    {
        id: 118,
        ru: 'отвечать',
        en: 'answer'
    },
    {
        id: 119,
        ru: 'тревожный',
        en: 'anxious'
    },
    {
        id: 120,
        ru: 'любой',
        en: 'any'
    },
    {
        id: 121,
        ru: 'кто-нибудь',
        en: 'anybody'
    },
    {
        id: 122,
        ru: 'любой',
        en: 'any'
    },
    {
        id: 123,
        ru: 'любой',
        en: 'anyone'
    },
    {
        id: 124,
        ru: 'что-либо',
        en: 'anything'
    },
    {
        id: 125,
        ru: 'в любом случае',
        en: 'anyway'
    },
    {
        id: 126,
        ru: 'где угодно',
        en: 'anywhere'
    },
    {
        id: 127,
        ru: 'отдельно',
        en: 'apart'
    },
    {
        id: 128,
        ru: 'квартира',
        en: 'apartment'
    },
    {
        id: 129,
        ru: 'извиняться',
        en: 'apologize'
    },
    {
        id: 130,
        ru: 'приложение',
        en: 'app'
    },
    {
        id: 131,
        ru: 'очевидный',
        en: 'apparent'
    },
    {
        id: 132,
        ru: 'видимо',
        en: 'apparently'
    },
    {
        id: 133,
        ru: 'обращаться',
        en: 'appeal'
    },
    {
        id: 134,
        ru: 'появляться',
        en: 'appear'
    },
    {
        id: 135,
        ru: 'появление',
        en: 'appearance'
    },
    {
        id: 136,
        ru: 'яблоко',
        en: 'apple'
    },
    {
        id: 137,
        ru: 'приложение',
        en: 'application'
    },
    {
        id: 138,
        ru: 'применять',
        en: 'apply'
    },
    {
        id: 139,
        ru: 'встреча',
        en: 'appointment'
    },
    {
        id: 140,
        ru: 'ценить',
        en: 'appreciate'
    },
    {
        id: 141,
        ru: 'подход',
        en: 'approach'
    },
    {
        id: 142,
        ru: 'соответствующий',
        en: 'appropriate'
    },
    {
        id: 143,
        ru: 'одобрение',
        en: 'approval'
    },
    {
        id: 144,
        ru: 'утвердить',
        en: 'approve'
    },
    {
        id: 145,
        ru: 'примерно',
        en: 'approximately'
    },
    {
        id: 146,
        ru: 'Апрель',
        en: 'April'
    },
    {
        id: 147,
        ru: 'архитектор',
        en: 'architect'
    },
    {
        id: 148,
        ru: 'архитектура',
        en: 'architecture'
    },
    {
        id: 149,
        ru: 'область',
        en: 'area'
    },
    {
        id: 150,
        ru: 'спорить',
        en: 'argue'
    },
    {
        id: 151,
        ru: 'аргумент',
        en: 'argument'
    },
    {
        id: 152,
        ru: 'возникают',
        en: 'arise'
    },
    {
        id: 153,
        ru: 'рука',
        en: 'arm'
    },
    {
        id: 154,
        ru: 'вооруженный',
        en: 'armed'
    },
    {
        id: 155,
        ru: 'оружие',
        en: 'arms'
    },
    {
        id: 156,
        ru: 'армия',
        en: 'army'
    },
    {
        id: 157,
        ru: 'вокруг',
        en: 'around'
    },
    {
        id: 158,
        ru: 'договариваться',
        en: 'arrange'
    },
    {
        id: 159,
        ru: 'договоренность',
        en: 'arrangement'
    },
    {
        id: 160,
        ru: 'арестовать',
        en: 'arrest'
    },
    {
        id: 161,
        ru: 'прибытие',
        en: 'arrival'
    },
    {
        id: 162,
        ru: 'приезжать',
        en: 'arrive'
    },
    {
        id: 163,
        ru: 'искусство',
        en: 'art'
    },
    {
        id: 164,
        ru: 'статья',
        en: 'article'
    },
    {
        id: 165,
        ru: 'искусственный',
        en: 'artificial'
    },
    {
        id: 166,
        ru: 'художник',
        en: 'artist'
    },
    {
        id: 167,
        ru: 'художественный',
        en: 'artistic'
    },
    {
        id: 168,
        ru: 'как',
        en: 'as'
    },
    {
        id: 169,
        ru: 'стыдящийся',
        en: 'ashamed'
    },
    {
        id: 170,
        ru: 'просить',
        en: 'ask'
    },
    {
        id: 171,
        ru: 'спящий',
        en: 'asleep'
    },
    {
        id: 172,
        ru: 'аспект',
        en: 'aspect'
    },
    {
        id: 173,
        ru: 'оценивать',
        en: 'assess'
    },
    {
        id: 174,
        ru: 'оценка',
        en: 'assessment'
    },
    {
        id: 175,
        ru: 'назначение',
        en: 'assignment'
    },
    {
        id: 176,
        ru: 'помогать',
        en: 'assist'
    },
    {
        id: 177,
        ru: 'помощник',
        en: 'assistant'
    },
    {
        id: 178,
        ru: 'ассоциированный',
        en: 'associate'
    },
    {
        id: 179,
        ru: 'связанный',
        en: 'associated'
    },
    {
        id: 180,
        ru: 'ассоциация',
        en: 'association'
    },
    {
        id: 181,
        ru: 'предполагать',
        en: 'assume'
    },
    {
        id: 182,
        ru: 'в',
        en: 'at'
    },
    {
        id: 183,
        ru: 'спортсмен',
        en: 'athlete'
    },
    {
        id: 184,
        ru: 'атмосфера',
        en: 'atmosphere'
    },
    {
        id: 185,
        ru: 'прикреплять',
        en: 'attach'
    },
    {
        id: 186,
        ru: 'атака',
        en: 'attack'
    },
    {
        id: 187,
        ru: 'пытаться',
        en: 'attempt'
    },
    {
        id: 188,
        ru: 'посещать',
        en: 'attend'
    },
    {
        id: 189,
        ru: 'внимание',
        en: 'attention'
    },
    {
        id: 190,
        ru: 'отношение',
        en: 'attitude'
    },
    {
        id: 191,
        ru: 'привлекать',
        en: 'attract'
    },
    {
        id: 192,
        ru: 'притяжение',
        en: 'attraction'
    },
    {
        id: 193,
        ru: 'привлекательный',
        en: 'attractive'
    },
    {
        id: 194,
        ru: 'аудитория',
        en: 'audience'
    },
    {
        id: 195,
        ru: 'Август',
        en: 'August'
    },
    {
        id: 196,
        ru: 'тетя',
        en: 'aunt'
    },
    {
        id: 197,
        ru: 'автор',
        en: 'author'
    },
    {
        id: 198,
        ru: 'власть',
        en: 'authority'
    },
    {
        id: 199,
        ru: 'осень',
        en: 'autumn'
    },
    {
        id: 200,
        ru: 'доступный',
        en: 'available'
    },
    {
        id: 201,
        ru: 'средний',
        en: 'average'
    },
    {
        id: 202,
        ru: 'избегать',
        en: 'avoid'
    },
    {
        id: 203,
        ru: 'награда',
        en: 'award'
    },
    {
        id: 204,
        ru: 'осведомленный',
        en: 'aware'
    },
    {
        id: 205,
        ru: 'прочь',
        en: 'away'
    },
    {
        id: 206,
        ru: 'ужасный',
        en: 'awful'
    },
    {
        id: 207,
        ru: 'малыш',
        en: 'baby'
    },
    {
        id: 208,
        ru: 'назад',
        en: 'back'
    },
    {
        id: 209,
        ru: 'фон',
        en: 'background'
    },
    {
        id: 210,
        ru: 'назад',
        en: 'backwards'
    },
    {
        id: 211,
        ru: 'бактерии',
        en: 'bacteria'
    },
    {
        id: 212,
        ru: 'плохой',
        en: 'bad'
    },
    {
        id: 213,
        ru: 'плохо',
        en: 'badly'
    },
    {
        id: 214,
        ru: 'сумка',
        en: 'bag'
    },
    {
        id: 215,
        ru: 'выпекать',
        en: 'bake'
    },
    {
        id: 216,
        ru: 'баланс',
        en: 'balance'
    },
    {
        id: 217,
        ru: 'мяч',
        en: 'ball'
    },
    {
        id: 218,
        ru: 'запретить',
        en: 'ban'
    },
    {
        id: 219,
        ru: 'банан',
        en: 'banana'
    },
    {
        id: 220,
        ru: 'группа',
        en: 'band'
    },
    {
        id: 221,
        ru: 'банк',
        en: 'bank'
    },
    {
        id: 222,
        ru: 'банк',
        en: 'bank'
    },
    {
        id: 223,
        ru: 'бар',
        en: 'bar'
    },
    {
        id: 224,
        ru: 'барьер',
        en: 'barrier'
    },
    {
        id: 225,
        ru: 'база',
        en: 'base'
    },
    {
        id: 226,
        ru: 'бейсбол',
        en: 'baseball'
    },
    {
        id: 227,
        ru: 'основанный на',
        en: 'based'
    },
    {
        id: 228,
        ru: 'базовый',
        en: 'basic'
    },
    {
        id: 229,
        ru: 'по сути',
        en: 'basically'
    },
    {
        id: 230,
        ru: 'основа',
        en: 'basis'
    },
    {
        id: 231,
        ru: 'баскетбол',
        en: 'basketball'
    },
    {
        id: 232,
        ru: 'ванна',
        en: 'bath'
    },
    {
        id: 233,
        ru: 'ванная комната',
        en: 'bathroom'
    },
    {
        id: 234,
        ru: 'батарея',
        en: 'battery'
    },
    {
        id: 235,
        ru: 'боевой',
        en: 'battle'
    },
    {
        id: 236,
        ru: 'быть',
        en: 'be'
    },
    {
        id: 237,
        ru: 'пляж',
        en: 'beach'
    },
    {
        id: 238,
        ru: 'фасоль',
        en: 'bean'
    },
    {
        id: 239,
        ru: 'медведь',
        en: 'bear'
    },
    {
        id: 240,
        ru: 'медведь',
        en: 'bear'
    },
    {
        id: 241,
        ru: 'бить',
        en: 'beat'
    },
    {
        id: 242,
        ru: 'красивый',
        en: 'beautiful'
    },
    {
        id: 243,
        ru: 'красота',
        en: 'beauty'
    },
    {
        id: 244,
        ru: 'потому что',
        en: 'because'
    },
    {
        id: 245,
        ru: 'становиться',
        en: 'become'
    },
    {
        id: 246,
        ru: 'кровать',
        en: 'bed'
    },
    {
        id: 247,
        ru: 'спальня',
        en: 'bedroom'
    },
    {
        id: 248,
        ru: 'пчела',
        en: 'bee'
    },
    {
        id: 249,
        ru: 'говядина',
        en: 'beef'
    },
    {
        id: 250,
        ru: 'пиво',
        en: 'beer'
    },
    {
        id: 251,
        ru: 'до',
        en: 'before'
    },
    {
        id: 252,
        ru: 'умолять',
        en: 'beg'
    },
    {
        id: 253,
        ru: 'начинать',
        en: 'begin'
    },
    {
        id: 254,
        ru: 'начало',
        en: 'beginning'
    },
    {
        id: 255,
        ru: 'вести себя',
        en: 'behave'
    },
    {
        id: 256,
        ru: 'поведение',
        en: 'behaviour'
    },
    {
        id: 257,
        ru: 'позади',
        en: 'behind'
    },
    {
        id: 258,
        ru: 'существование',
        en: 'being'
    },
    {
        id: 259,
        ru: 'вера',
        en: 'belief'
    },
    {
        id: 260,
        ru: 'полагать',
        en: 'believe'
    },
    {
        id: 261,
        ru: 'колокол',
        en: 'bell'
    },
    {
        id: 262,
        ru: 'принадлежать',
        en: 'belong'
    },
    {
        id: 263,
        ru: 'ниже',
        en: 'below'
    },
    {
        id: 264,
        ru: 'пояс',
        en: 'belt'
    },
    {
        id: 265,
        ru: 'сгибать',
        en: 'bend'
    },
    {
        id: 266,
        ru: 'выгода',
        en: 'benefit'
    },
    {
        id: 267,
        ru: 'согнутый',
        en: 'bent'
    },
    {
        id: 268,
        ru: 'лучший',
        en: 'best'
    },
    {
        id: 269,
        ru: 'ставка',
        en: 'bet'
    },
    {
        id: 270,
        ru: 'лучше',
        en: 'better'
    },
    {
        id: 271,
        ru: 'между',
        en: 'between'
    },
    {
        id: 272,
        ru: 'вне',
        en: 'beyond'
    },
    {
        id: 273,
        ru: 'велосипед',
        en: 'bicycle'
    },
    {
        id: 274,
        ru: 'большой',
        en: 'big'
    },
    {
        id: 275,
        ru: 'велосипед',
        en: 'bike'
    },
    {
        id: 276,
        ru: 'счет',
        en: 'bill'
    },
    {
        id: 277,
        ru: 'миллиард',
        en: 'billion'
    },
    {
        id: 278,
        ru: 'мусорное ведро',
        en: 'bin'
    },
    {
        id: 279,
        ru: 'биология',
        en: 'biology'
    },
    {
        id: 280,
        ru: 'птица',
        en: 'bird'
    },
    {
        id: 281,
        ru: 'рождение',
        en: 'birth'
    },
    {
        id: 282,
        ru: 'день рождения',
        en: 'birthday'
    },
    {
        id: 283,
        ru: 'печенье',
        en: 'biscuit'
    },
    {
        id: 284,
        ru: 'кусочек',
        en: 'bit'
    },
    {
        id: 285,
        ru: 'кусать',
        en: 'bite'
    },
    {
        id: 286,
        ru: 'горький',
        en: 'bitter'
    },
    {
        id: 287,
        ru: 'черный',
        en: 'black'
    },
    {
        id: 288,
        ru: 'обвинять',
        en: 'blame'
    },
    {
        id: 289,
        ru: 'пустой',
        en: 'blank'
    },
    {
        id: 290,
        ru: 'слепой',
        en: 'blind'
    },
    {
        id: 291,
        ru: 'блокировать',
        en: 'block'
    },
    {
        id: 292,
        ru: 'блог',
        en: 'blog'
    },
    {
        id: 293,
        ru: 'блондинка',
        en: 'blonde'
    },
    {
        id: 294,
        ru: 'кровь',
        en: 'blood'
    },
    {
        id: 295,
        ru: 'дуть',
        en: 'blow'
    },
    {
        id: 296,
        ru: 'синий',
        en: 'blue'
    },
    {
        id: 297,
        ru: 'доска',
        en: 'board'
    },
    {
        id: 298,
        ru: 'лодка',
        en: 'boat'
    },
    {
        id: 299,
        ru: 'тело',
        en: 'body'
    },
    {
        id: 300,
        ru: 'кипятить',
        en: 'boil'
    },
    {
        id: 301,
        ru: 'бомбить',
        en: 'bomb'
    },
    {
        id: 302,
        ru: 'связь',
        en: 'bond'
    },
    {
        id: 303,
        ru: 'кость',
        en: 'bone'
    },
    {
        id: 304,
        ru: 'книга',
        en: 'book'
    },
    {
        id: 305,
        ru: 'ботинок',
        en: 'boot'
    },
    {
        id: 306,
        ru: 'граница',
        en: 'border'
    },
    {
        id: 307,
        ru: 'скучающий',
        en: 'bored'
    },
    {
        id: 308,
        ru: 'скучный',
        en: 'boring'
    },
    {
        id: 309,
        ru: 'рожденный',
        en: 'born'
    },
    {
        id: 310,
        ru: 'занимать',
        en: 'borrow'
    },
    {
        id: 311,
        ru: 'босс',
        en: 'boss'
    },
    {
        id: 312,
        ru: 'оба',
        en: 'both'
    },
    {
        id: 313,
        ru: 'беспокоить',
        en: 'bother'
    },
    {
        id: 314,
        ru: 'бутылка',
        en: 'bottle'
    },
    {
        id: 315,
        ru: 'нижний',
        en: 'bottom'
    },
    {
        id: 316,
        ru: 'чаша',
        en: 'bowl'
    },
    {
        id: 317,
        ru: 'коробка',
        en: 'box'
    },
    {
        id: 318,
        ru: 'мальчик',
        en: 'boy'
    },
    {
        id: 319,
        ru: 'парень',
        en: 'boyfriend'
    },
    {
        id: 320,
        ru: 'мозг',
        en: 'brain'
    },
    {
        id: 321,
        ru: 'ветвь',
        en: 'branch'
    },
    {
        id: 322,
        ru: 'бренд',
        en: 'brand'
    },
    {
        id: 323,
        ru: 'храбрый',
        en: 'brave'
    },
    {
        id: 324,
        ru: 'хлеб',
        en: 'bread'
    },
    {
        id: 325,
        ru: 'перерыв',
        en: 'break'
    },
    {
        id: 326,
        ru: 'завтрак',
        en: 'breakfast'
    },
    {
        id: 327,
        ru: 'грудь',
        en: 'breast'
    },
    {
        id: 328,
        ru: 'дыхание',
        en: 'breath'
    },
    {
        id: 329,
        ru: 'дышать',
        en: 'breathe'
    },
    {
        id: 330,
        ru: 'дыхание',
        en: 'breathing'
    },
    {
        id: 331,
        ru: 'невеста',
        en: 'bride'
    },
    {
        id: 332,
        ru: 'мост',
        en: 'bridge'
    },
    {
        id: 333,
        ru: 'краткий',
        en: 'brief'
    },
    {
        id: 334,
        ru: 'яркий',
        en: 'bright'
    },
    {
        id: 335,
        ru: 'блестящий',
        en: 'brilliant'
    },
    {
        id: 336,
        ru: 'приносить',
        en: 'bring'
    },
    {
        id: 337,
        ru: 'широкий',
        en: 'broad'
    },
    {
        id: 338,
        ru: 'транслировать',
        en: 'broadcast'
    },
    {
        id: 339,
        ru: 'сломанный',
        en: 'broken'
    },
    {
        id: 340,
        ru: 'брат',
        en: 'brother'
    },
    {
        id: 341,
        ru: 'коричневый',
        en: 'brown'
    },
    {
        id: 342,
        ru: 'щетка',
        en: 'brush'
    },
    {
        id: 343,
        ru: 'пузырь',
        en: 'bubble'
    },
    {
        id: 344,
        ru: 'бюджет',
        en: 'budget'
    },
    {
        id: 345,
        ru: 'строить',
        en: 'build'
    },
    {
        id: 346,
        ru: 'здание',
        en: 'building'
    },
    {
        id: 347,
        ru: 'пуля',
        en: 'bullet'
    },
    {
        id: 348,
        ru: 'связка',
        en: 'bunch'
    },
    {
        id: 349,
        ru: 'гореть',
        en: 'burn'
    },
    {
        id: 350,
        ru: 'хоронить',
        en: 'bury'
    },
    {
        id: 351,
        ru: 'автобус',
        en: 'bus'
    },
    {
        id: 352,
        ru: 'куст',
        en: 'bush'
    },
    {
        id: 353,
        ru: 'бизнес',
        en: 'business'
    },
    {
        id: 354,
        ru: 'бизнесмен',
        en: 'businessman'
    },
    {
        id: 355,
        ru: 'занятый',
        en: 'busy'
    },
    {
        id: 356,
        ru: 'но',
        en: 'but'
    },
    {
        id: 357,
        ru: 'масло',
        en: 'butter'
    },
    {
        id: 358,
        ru: 'кнопка',
        en: 'button'
    },
    {
        id: 359,
        ru: 'купить',
        en: 'buy'
    },
    {
        id: 360,
        ru: 'к',
        en: 'by'
    },
    {
        id: 361,
        ru: 'пока',
        en: 'bye'
    },
    {
        id: 362,
        ru: 'кабель',
        en: 'cable'
    },
    {
        id: 363,
        ru: 'кафе',
        en: 'cafe'
    },
    {
        id: 364,
        ru: 'торт',
        en: 'cake'
    },
    {
        id: 365,
        ru: 'вычислить',
        en: 'calculate'
    },
    {
        id: 366,
        ru: 'вызов',
        en: 'call'
    },
    {
        id: 367,
        ru: 'спокойствие',
        en: 'calm'
    },
    {
        id: 368,
        ru: 'камера',
        en: 'camera'
    },
    {
        id: 369,
        ru: 'лагерь',
        en: 'camp'
    },
    {
        id: 370,
        ru: 'кампания',
        en: 'campaign'
    },
    {
        id: 371,
        ru: 'кемпинг',
        en: 'camping'
    },
    {
        id: 372,
        ru: 'кампус',
        en: 'campus'
    },
    {
        id: 373,
        ru: 'может',
        en: 'can'
    },
    {
        id: 374,
        ru: 'может',
        en: 'can'
    },
    {
        id: 375,
        ru: 'отмена',
        en: 'cancel'
    },
    {
        id: 376,
        ru: 'рак',
        en: 'cancer'
    },
    {
        id: 377,
        ru: 'кандидат',
        en: 'candidate'
    },
    {
        id: 378,
        ru: 'не может',
        en: 'cannot'
    },
    {
        id: 379,
        ru: 'колпачок',
        en: 'cap'
    },
    {
        id: 380,
        ru: 'способный',
        en: 'capable'
    },
    {
        id: 381,
        ru: 'емкость',
        en: 'capacity'
    },
    {
        id: 382,
        ru: 'капитал',
        en: 'capital'
    },
    {
        id: 383,
        ru: 'капитан',
        en: 'captain'
    },
    {
        id: 384,
        ru: 'захватывать',
        en: 'capture'
    },
    {
        id: 385,
        ru: 'машина',
        en: 'car'
    },
    {
        id: 386,
        ru: 'карта',
        en: 'card'
    },
    {
        id: 387,
        ru: 'заботиться',
        en: 'care'
    },
    {
        id: 388,
        ru: 'карьера',
        en: 'career'
    },
    {
        id: 389,
        ru: 'осторожный',
        en: 'careful'
    },
    {
        id: 390,
        ru: 'осторожно',
        en: 'carefully'
    },
    {
        id: 391,
        ru: 'беспечный',
        en: 'careless'
    },
    {
        id: 392,
        ru: 'ковер',
        en: 'carpet'
    },
    {
        id: 393,
        ru: 'морковь',
        en: 'carrot'
    },
    {
        id: 394,
        ru: 'нести',
        en: 'carry'
    },
    {
        id: 395,
        ru: 'мультфильм',
        en: 'cartoon'
    },
    {
        id: 396,
        ru: 'случай',
        en: 'case'
    },
    {
        id: 397,
        ru: 'наличные',
        en: 'cash'
    },
    {
        id: 398,
        ru: 'бросать',
        en: 'cast'
    },
    {
        id: 399,
        ru: 'замок',
        en: 'castle'
    },
    {
        id: 400,
        ru: 'кот',
        en: 'cat'
    },
    {
        id: 401,
        ru: 'ловить',
        en: 'catch'
    },
    {
        id: 402,
        ru: 'категория',
        en: 'category'
    },
    {
        id: 403,
        ru: 'причина',
        en: 'cause'
    },
    {
        id: 404,
        ru: 'компакт-диск',
        en: 'CD'
    },
    {
        id: 405,
        ru: 'потолок',
        en: 'ceiling'
    },
    {
        id: 406,
        ru: 'праздновать',
        en: 'celebrate'
    },
    {
        id: 407,
        ru: 'празднование',
        en: 'celebration'
    },
    {
        id: 408,
        ru: 'знаменитость',
        en: 'celebrity'
    },
    {
        id: 409,
        ru: 'клетка',
        en: 'cell'
    },
    {
        id: 410,
        ru: 'цент',
        en: 'cent'
    },
    {
        id: 411,
        ru: 'центральный',
        en: 'central'
    },
    {
        id: 412,
        ru: 'центр',
        en: 'centre'
    },
    {
        id: 413,
        ru: 'век',
        en: 'century'
    },
    {
        id: 414,
        ru: 'церемония',
        en: 'ceremony'
    },
    {
        id: 415,
        ru: 'определенный',
        en: 'certain'
    },
    {
        id: 416,
        ru: 'конечно',
        en: 'certainly'
    },
    {
        id: 417,
        ru: 'цепь',
        en: 'chain'
    },
    {
        id: 418,
        ru: 'стул',
        en: 'chair'
    },
    {
        id: 419,
        ru: 'председатель',
        en: 'chairman'
    },
    {
        id: 420,
        ru: 'испытание',
        en: 'challenge'
    },
    {
        id: 421,
        ru: 'чемпион',
        en: 'champion'
    },
    {
        id: 422,
        ru: 'шанс',
        en: 'chance'
    },
    {
        id: 423,
        ru: 'изменять',
        en: 'change'
    },
    {
        id: 424,
        ru: 'канал',
        en: 'channel'
    },
    {
        id: 425,
        ru: 'глава',
        en: 'chapter'
    },
    {
        id: 426,
        ru: 'характер',
        en: 'character'
    },
    {
        id: 427,
        ru: 'характеристика',
        en: 'characteristic'
    },
    {
        id: 428,
        ru: 'заряжать',
        en: 'charge'
    },
    {
        id: 429,
        ru: 'благотворительность',
        en: 'charity'
    },
    {
        id: 430,
        ru: 'диаграмма',
        en: 'chart'
    },
    {
        id: 431,
        ru: 'чат',
        en: 'chat'
    },
    {
        id: 432,
        ru: 'дешевый',
        en: 'cheap'
    },
    {
        id: 433,
        ru: 'изменять',
        en: 'cheat'
    },
    {
        id: 434,
        ru: 'проверять',
        en: 'check'
    },
    {
        id: 435,
        ru: 'жизнерадостный',
        en: 'cheerful'
    },
    {
        id: 436,
        ru: 'сыр',
        en: 'cheese'
    },
    {
        id: 437,
        ru: 'шеф-повар',
        en: 'chef'
    },
    {
        id: 438,
        ru: 'химический',
        en: 'chemical'
    },
    {
        id: 439,
        ru: 'химия',
        en: 'chemistry'
    },
    {
        id: 440,
        ru: 'грудь',
        en: 'chest'
    },
    {
        id: 441,
        ru: 'курица',
        en: 'chicken'
    },
    {
        id: 442,
        ru: 'главный',
        en: 'chief'
    },
    {
        id: 443,
        ru: 'ребенок',
        en: 'child'
    },
    {
        id: 444,
        ru: 'детство',
        en: 'childhood'
    },
    {
        id: 445,
        ru: 'чип',
        en: 'chip'
    },
    {
        id: 446,
        ru: 'шоколад',
        en: 'chocolate'
    },
    {
        id: 447,
        ru: 'выбор',
        en: 'choice'
    },
    {
        id: 448,
        ru: 'выбирать',
        en: 'choose'
    },
    {
        id: 449,
        ru: 'церковь',
        en: 'church'
    },
    {
        id: 450,
        ru: 'сигарета',
        en: 'cigarette'
    },
    {
        id: 451,
        ru: 'кино',
        en: 'cinema'
    },
    {
        id: 452,
        ru: 'круг',
        en: 'circle'
    },
    {
        id: 453,
        ru: 'обстоятельство',
        en: 'circumstance'
    },
    {
        id: 454,
        ru: 'цитировать',
        en: 'cite'
    },
    {
        id: 455,
        ru: 'гражданин',
        en: 'citizen'
    },
    {
        id: 456,
        ru: 'город',
        en: 'city'
    },
    {
        id: 457,
        ru: 'гражданский',
        en: 'civil'
    },
    {
        id: 458,
        ru: 'требовать',
        en: 'claim'
    },
    {
        id: 459,
        ru: 'сорт',
        en: 'class'
    },
    {
        id: 460,
        ru: 'классический',
        en: 'classic'
    },
    {
        id: 461,
        ru: 'классический',
        en: 'classical'
    },
    {
        id: 462,
        ru: 'класс',
        en: 'classroom'
    },
    {
        id: 463,
        ru: 'пункт',
        en: 'clause'
    },
    {
        id: 464,
        ru: 'чистый',
        en: 'clean'
    },
    {
        id: 465,
        ru: 'прозрачный',
        en: 'clear'
    },
    {
        id: 466,
        ru: 'четко',
        en: 'clearly'
    },
    {
        id: 467,
        ru: 'умный',
        en: 'clever'
    },
    {
        id: 468,
        ru: 'нажмите',
        en: 'click'
    },
    {
        id: 469,
        ru: 'клиент',
        en: 'client'
    },
    {
        id: 470,
        ru: 'климат',
        en: 'climate'
    },
    {
        id: 471,
        ru: 'взбираться',
        en: 'climb'
    },
    {
        id: 472,
        ru: 'часы',
        en: 'clock'
    },
    {
        id: 473,
        ru: 'закрывать',
        en: 'close'
    },
    {
        id: 474,
        ru: 'закрывать',
        en: 'close'
    },
    {
        id: 475,
        ru: 'закрыто',
        en: 'closed'
    },
    {
        id: 476,
        ru: 'тесно',
        en: 'closely'
    },
    {
        id: 477,
        ru: 'ткань',
        en: 'cloth'
    },
    {
        id: 478,
        ru: 'одежда',
        en: 'clothes'
    },
    {
        id: 479,
        ru: 'одежда',
        en: 'clothing'
    },
    {
        id: 480,
        ru: 'облако',
        en: 'cloud'
    },
    {
        id: 481,
        ru: 'клуб',
        en: 'club'
    },
    {
        id: 482,
        ru: 'зацепка',
        en: 'clue'
    },
    {
        id: 483,
        ru: 'тренер',
        en: 'coach'
    },
    {
        id: 484,
        ru: 'уголь',
        en: 'coal'
    },
    {
        id: 485,
        ru: 'побережье',
        en: 'coast'
    },
    {
        id: 486,
        ru: 'пальто',
        en: 'coat'
    },
    {
        id: 487,
        ru: 'код',
        en: 'code'
    },
    {
        id: 488,
        ru: 'кофе',
        en: 'coffee'
    },
    {
        id: 489,
        ru: 'монета',
        en: 'coin'
    },
    {
        id: 490,
        ru: 'холодный',
        en: 'cold'
    },
    {
        id: 491,
        ru: 'крах',
        en: 'collapse'
    },
    {
        id: 492,
        ru: 'коллега',
        en: 'colleague'
    },
    {
        id: 493,
        ru: 'собирать',
        en: 'collect'
    },
    {
        id: 494,
        ru: 'коллекция',
        en: 'collection'
    },
    {
        id: 495,
        ru: 'колледж',
        en: 'college'
    },
    {
        id: 496,
        ru: 'цвет',
        en: 'colour'
    },
    {
        id: 497,
        ru: 'цветной',
        en: 'coloured'
    },
    {
        id: 498,
        ru: 'столбец',
        en: 'column'
    },
    {
        id: 499,
        ru: 'сочетание',
        en: 'combination'
    },
    {
        id: 500,
        ru: 'объединить',
        en: 'combine'
    },
    {
        id: 501,
        ru: 'приходить',
        en: 'come'
    },
    {
        id: 502,
        ru: 'комедия',
        en: 'comedy'
    },
    {
        id: 503,
        ru: 'комфорт',
        en: 'comfort'
    },
    {
        id: 504,
        ru: 'комфортный',
        en: 'comfortable'
    },
    {
        id: 505,
        ru: 'команда',
        en: 'command'
    },
    {
        id: 506,
        ru: 'комментарий',
        en: 'comment'
    },
    {
        id: 507,
        ru: 'коммерческий',
        en: 'commercial'
    },
    {
        id: 508,
        ru: 'комиссия',
        en: 'commission'
    },
    {
        id: 509,
        ru: 'совершить',
        en: 'commit'
    },
    {
        id: 510,
        ru: 'обязательство',
        en: 'commitment'
    },
    {
        id: 511,
        ru: 'комитет',
        en: 'committee'
    },
    {
        id: 512,
        ru: 'общий',
        en: 'common'
    },
    {
        id: 513,
        ru: 'обычно',
        en: 'commonly'
    },
    {
        id: 514,
        ru: 'общаться',
        en: 'communicate'
    },
    {
        id: 515,
        ru: 'коммуникация',
        en: 'communication'
    },
    {
        id: 516,
        ru: 'сообщество',
        en: 'community'
    },
    {
        id: 517,
        ru: 'компания',
        en: 'company'
    },
    {
        id: 518,
        ru: 'сравнивать',
        en: 'compare'
    },
    {
        id: 519,
        ru: 'сравнение',
        en: 'comparison'
    },
    {
        id: 520,
        ru: 'конкурировать',
        en: 'compete'
    },
    {
        id: 521,
        ru: 'соревнование',
        en: 'competition'
    },
    {
        id: 522,
        ru: 'конкурентоспособный',
        en: 'competitive'
    },
    {
        id: 523,
        ru: 'конкурент',
        en: 'competitor'
    },
    {
        id: 524,
        ru: 'жаловаться',
        en: 'complain'
    },
    {
        id: 525,
        ru: 'жалоба',
        en: 'complaint'
    },
    {
        id: 526,
        ru: 'полный',
        en: 'complete'
    },
    {
        id: 527,
        ru: 'полностью',
        en: 'completely'
    },
    {
        id: 528,
        ru: 'сложный',
        en: 'complex'
    },
    {
        id: 529,
        ru: 'сложный',
        en: 'complicated'
    },
    {
        id: 530,
        ru: 'компонент',
        en: 'component'
    },
    {
        id: 531,
        ru: 'компьютер',
        en: 'computer'
    },
    {
        id: 532,
        ru: 'концентрат',
        en: 'concentrate'
    },
    {
        id: 533,
        ru: 'концентрация',
        en: 'concentration'
    },
    {
        id: 534,
        ru: 'концепция',
        en: 'concept'
    },
    {
        id: 535,
        ru: 'беспокойство',
        en: 'concern'
    },
    {
        id: 536,
        ru: 'обеспокоенный',
        en: 'concerned'
    },
    {
        id: 537,
        ru: 'концерт',
        en: 'concert'
    },
    {
        id: 538,
        ru: 'заключить',
        en: 'conclude'
    },
    {
        id: 539,
        ru: 'заключение',
        en: 'conclusion'
    },
    {
        id: 540,
        ru: 'состояние',
        en: 'condition'
    },
    {
        id: 541,
        ru: 'руководить',
        en: 'conduct'
    },
    {
        id: 542,
        ru: 'конференция',
        en: 'conference'
    },
    {
        id: 543,
        ru: 'уверенность',
        en: 'confidence'
    },
    {
        id: 544,
        ru: 'уверенный',
        en: 'confident'
    },
    {
        id: 545,
        ru: 'подтверждать',
        en: 'confirm'
    },
    {
        id: 546,
        ru: 'конфликт',
        en: 'conflict'
    },
    {
        id: 547,
        ru: 'запутать',
        en: 'confuse'
    },
    {
        id: 548,
        ru: 'смущенный',
        en: 'confused'
    },
    {
        id: 549,
        ru: 'запутанный',
        en: 'confusing'
    },
    {
        id: 550,
        ru: 'соединять',
        en: 'connect'
    },
    {
        id: 551,
        ru: 'подключен',
        en: 'connected'
    },
    {
        id: 552,
        ru: 'связь',
        en: 'connection'
    },
    {
        id: 553,
        ru: 'сознательный',
        en: 'conscious'
    },
    {
        id: 554,
        ru: 'последствие',
        en: 'consequence'
    },
    {
        id: 555,
        ru: 'консервативный',
        en: 'conservative'
    },
    {
        id: 556,
        ru: 'учитывать',
        en: 'consider'
    },
    {
        id: 557,
        ru: 'рассмотрение',
        en: 'consideration'
    },
    {
        id: 558,
        ru: 'состоять',
        en: 'consist'
    },
    {
        id: 559,
        ru: 'последовательный',
        en: 'consistent'
    },
    {
        id: 560,
        ru: 'постоянный',
        en: 'constant'
    },
    {
        id: 561,
        ru: 'постоянно',
        en: 'constantly'
    },
    {
        id: 562,
        ru: 'построить',
        en: 'construct'
    },
    {
        id: 563,
        ru: 'строительство',
        en: 'construction'
    },
    {
        id: 564,
        ru: 'потреблять',
        en: 'consume'
    },
    {
        id: 565,
        ru: 'потребитель',
        en: 'consumer'
    },
    {
        id: 566,
        ru: 'контакт',
        en: 'contact'
    },
    {
        id: 567,
        ru: 'содержать',
        en: 'contain'
    },
    {
        id: 568,
        ru: 'контейнер',
        en: 'container'
    },
    {
        id: 569,
        ru: 'современный',
        en: 'contemporary'
    },
    {
        id: 570,
        ru: 'содержание',
        en: 'content'
    },
    {
        id: 571,
        ru: 'конкурс',
        en: 'contest'
    },
    {
        id: 572,
        ru: 'контекст',
        en: 'context'
    },
    {
        id: 573,
        ru: 'континент',
        en: 'continent'
    },
    {
        id: 574,
        ru: 'продолжать',
        en: 'continue'
    },
    {
        id: 575,
        ru: 'непрерывный',
        en: 'continuous'
    },
    {
        id: 576,
        ru: 'договор',
        en: 'contract'
    },
    {
        id: 577,
        ru: 'контраст',
        en: 'contrast'
    },
    {
        id: 578,
        ru: 'способствовать',
        en: 'contribute'
    },
    {
        id: 579,
        ru: 'вклад',
        en: 'contribution'
    },
    {
        id: 580,
        ru: 'контроль',
        en: 'control'
    },
    {
        id: 581,
        ru: 'удобный',
        en: 'convenient'
    },
    {
        id: 582,
        ru: 'беседа',
        en: 'conversation'
    },
    {
        id: 583,
        ru: 'преобразовать',
        en: 'convert'
    },
    {
        id: 584,
        ru: 'убеждать',
        en: 'convince'
    },
    {
        id: 585,
        ru: 'убежденный',
        en: 'convinced'
    },
    {
        id: 586,
        ru: 'готовить',
        en: 'cook'
    },
    {
        id: 587,
        ru: 'плита',
        en: 'cooker'
    },
    {
        id: 588,
        ru: 'приготовление пищи',
        en: 'cooking'
    },
    {
        id: 589,
        ru: 'прохладный',
        en: 'cool'
    },
    {
        id: 590,
        ru: 'копия',
        en: 'copy'
    },
    {
        id: 591,
        ru: 'основной',
        en: 'core'
    },
    {
        id: 592,
        ru: 'угол',
        en: 'corner'
    },
    {
        id: 593,
        ru: 'корпоративный',
        en: 'corporate'
    },
    {
        id: 594,
        ru: 'правильный',
        en: 'correct'
    },
    {
        id: 595,
        ru: 'правильно',
        en: 'correctly'
    },
    {
        id: 596,
        ru: 'расходы',
        en: 'cost'
    },
    {
        id: 597,
        ru: 'костюм',
        en: 'costume'
    },
    {
        id: 598,
        ru: 'коттедж',
        en: 'cottage'
    },
    {
        id: 599,
        ru: 'хлопок',
        en: 'cotton'
    },
    {
        id: 600,
        ru: 'мог',
        en: 'could'
    },
    {
        id: 601,
        ru: 'совет',
        en: 'council'
    },
    {
        id: 602,
        ru: 'считать',
        en: 'count'
    },
    {
        id: 603,
        ru: 'страна',
        en: 'country'
    },
    {
        id: 604,
        ru: 'сельская местность',
        en: 'countryside'
    },
    {
        id: 605,
        ru: 'графство',
        en: 'county'
    },
    {
        id: 606,
        ru: 'пара',
        en: 'couple'
    },
    {
        id: 607,
        ru: 'храбрость',
        en: 'courage'
    },
    {
        id: 608,
        ru: 'курс',
        en: 'course'
    },
    {
        id: 609,
        ru: 'суд',
        en: 'court'
    },
    {
        id: 610,
        ru: 'двоюродный брат',
        en: 'cousin'
    },
    {
        id: 611,
        ru: 'крышка',
        en: 'cover'
    },
    {
        id: 612,
        ru: 'покрытый',
        en: 'covered'
    },
    {
        id: 613,
        ru: 'корова',
        en: 'cow'
    },
    {
        id: 614,
        ru: 'крушение',
        en: 'crash'
    },
    {
        id: 615,
        ru: 'сумасшедший',
        en: 'crazy'
    },
    {
        id: 616,
        ru: 'крем',
        en: 'cream'
    },
    {
        id: 617,
        ru: 'создавать',
        en: 'create'
    },
    {
        id: 618,
        ru: 'создание',
        en: 'creation'
    },
    {
        id: 619,
        ru: 'творческий',
        en: 'creative'
    },
    {
        id: 620,
        ru: 'существо',
        en: 'creature'
    },
    {
        id: 621,
        ru: 'кредит',
        en: 'credit'
    },
    {
        id: 622,
        ru: 'экипаж',
        en: 'crew'
    },
    {
        id: 623,
        ru: 'преступление',
        en: 'crime'
    },
    {
        id: 624,
        ru: 'преступник',
        en: 'criminal'
    },
    {
        id: 625,
        ru: 'кризис',
        en: 'crisis'
    },
    {
        id: 626,
        ru: 'критерий',
        en: 'criterion'
    },
    {
        id: 627,
        ru: 'критик',
        en: 'critic'
    },
    {
        id: 628,
        ru: 'критический',
        en: 'critical'
    },
    {
        id: 629,
        ru: 'критика',
        en: 'criticism'
    },
    {
        id: 630,
        ru: 'критиковать',
        en: 'criticize'
    },
    {
        id: 631,
        ru: 'обрезать',
        en: 'crop'
    },
    {
        id: 632,
        ru: 'крест',
        en: 'cross'
    },
    {
        id: 633,
        ru: 'толпа',
        en: 'crowd'
    },
    {
        id: 634,
        ru: 'переполненный',
        en: 'crowded'
    },
    {
        id: 635,
        ru: 'ключевой',
        en: 'crucial'
    },
    {
        id: 636,
        ru: 'жестокий',
        en: 'cruel'
    },
    {
        id: 637,
        ru: 'плакать',
        en: 'cry'
    },
    {
        id: 638,
        ru: 'культурный',
        en: 'cultural'
    },
    {
        id: 639,
        ru: 'культура',
        en: 'culture'
    },
    {
        id: 640,
        ru: 'чашка',
        en: 'cup'
    },
    {
        id: 641,
        ru: 'буфет',
        en: 'cupboard'
    },
    {
        id: 642,
        ru: 'излечивать',
        en: 'cure'
    },
    {
        id: 643,
        ru: 'кудрявый',
        en: 'curly'
    },
    {
        id: 644,
        ru: 'валюта',
        en: 'currency'
    },
    {
        id: 645,
        ru: 'текущий',
        en: 'current'
    },
    {
        id: 646,
        ru: 'в настоящее время',
        en: 'currently'
    },
    {
        id: 647,
        ru: 'занавес',
        en: 'curtain'
    },
    {
        id: 648,
        ru: 'изгиб',
        en: 'curve'
    },
    {
        id: 649,
        ru: 'изогнутый',
        en: 'curved'
    },
    {
        id: 650,
        ru: 'обычай',
        en: 'custom'
    },
    {
        id: 651,
        ru: 'клиент',
        en: 'customer'
    },
    {
        id: 652,
        ru: 'резать',
        en: 'cut'
    },
    {
        id: 653,
        ru: 'цикл',
        en: 'cycle'
    },
    {
        id: 654,
        ru: 'папа',
        en: 'dad'
    },
    {
        id: 655,
        ru: 'ежедневно',
        en: 'daily'
    },
    {
        id: 656,
        ru: 'повреждать',
        en: 'damage'
    },
    {
        id: 657,
        ru: 'танец',
        en: 'dance'
    },
    {
        id: 658,
        ru: 'танцор',
        en: 'dancer'
    },
    {
        id: 659,
        ru: 'танцы',
        en: 'dancing'
    },
    {
        id: 660,
        ru: 'Опасность',
        en: 'danger'
    },
    {
        id: 661,
        ru: 'опасный',
        en: 'dangerous'
    },
    {
        id: 662,
        ru: 'темный',
        en: 'dark'
    },
    {
        id: 663,
        ru: 'данные',
        en: 'data'
    },
    {
        id: 664,
        ru: 'дата',
        en: 'date'
    },
    {
        id: 665,
        ru: 'дочь',
        en: 'daughter'
    },
    {
        id: 666,
        ru: 'день',
        en: 'day'
    },
    {
        id: 667,
        ru: 'мертвый',
        en: 'dead'
    },
    {
        id: 668,
        ru: 'иметь дело',
        en: 'deal'
    },
    {
        id: 669,
        ru: 'дорогой',
        en: 'dear'
    },
    {
        id: 670,
        ru: 'смерть',
        en: 'death'
    },
    {
        id: 671,
        ru: 'дебаты',
        en: 'debate'
    },
    {
        id: 672,
        ru: 'долг',
        en: 'debt'
    },
    {
        id: 673,
        ru: 'десятилетие',
        en: 'decade'
    },
    {
        id: 674,
        ru: 'декабрь',
        en: 'December'
    },
    {
        id: 675,
        ru: 'приличный',
        en: 'decent'
    },
    {
        id: 676,
        ru: 'решать',
        en: 'decide'
    },
    {
        id: 677,
        ru: 'решение',
        en: 'decision'
    },
    {
        id: 678,
        ru: 'объявить',
        en: 'declare'
    },
    {
        id: 679,
        ru: 'отклонить',
        en: 'decline'
    },
    {
        id: 680,
        ru: 'украшать',
        en: 'decorate'
    },
    {
        id: 681,
        ru: 'украшение',
        en: 'decoration'
    },
    {
        id: 682,
        ru: 'снижаться',
        en: 'decrease'
    },
    {
        id: 683,
        ru: 'глубокий',
        en: 'deep'
    },
    {
        id: 684,
        ru: 'глубоко',
        en: 'deeply'
    },
    {
        id: 685,
        ru: 'поражение',
        en: 'defeat'
    },
    {
        id: 686,
        ru: 'защита',
        en: 'defence'
    },
    {
        id: 687,
        ru: 'защищать',
        en: 'defend'
    },
    {
        id: 688,
        ru: 'определять',
        en: 'define'
    },
    {
        id: 689,
        ru: 'определенный',
        en: 'definite'
    },
    {
        id: 690,
        ru: 'определенно',
        en: 'definitely'
    },
    {
        id: 691,
        ru: 'определение',
        en: 'definition'
    },
    {
        id: 692,
        ru: 'степень',
        en: 'degree'
    },
    {
        id: 693,
        ru: 'задерживать',
        en: 'delay'
    },
    {
        id: 694,
        ru: 'преднамеренный',
        en: 'deliberate'
    },
    {
        id: 695,
        ru: 'умышленно',
        en: 'deliberately'
    },
    {
        id: 696,
        ru: 'вкусный',
        en: 'delicious'
    },
    {
        id: 697,
        ru: 'восторг',
        en: 'delight'
    },
    {
        id: 698,
        ru: 'получивший удовольствие',
        en: 'delighted'
    },
    {
        id: 699,
        ru: 'доставлять',
        en: 'deliver'
    },
    {
        id: 700,
        ru: 'доставка',
        en: 'delivery'
    },
    {
        id: 701,
        ru: 'требовать',
        en: 'demand'
    },
    {
        id: 702,
        ru: 'продемонстрировать',
        en: 'demonstrate'
    },
    {
        id: 703,
        ru: 'стоматолог',
        en: 'dentist'
    },
    {
        id: 704,
        ru: 'отрицать',
        en: 'deny'
    },
    {
        id: 705,
        ru: 'отделение',
        en: 'department'
    },
    {
        id: 706,
        ru: 'отправление',
        en: 'departure'
    },
    {
        id: 707,
        ru: 'зависеть',
        en: 'depend'
    },
    {
        id: 708,
        ru: 'подавленный',
        en: 'depressed'
    },
    {
        id: 709,
        ru: 'удручающий',
        en: 'depressing'
    },
    {
        id: 710,
        ru: 'глубина',
        en: 'depth'
    },
    {
        id: 711,
        ru: 'описывать',
        en: 'describe'
    },
    {
        id: 712,
        ru: 'описание',
        en: 'description'
    },
    {
        id: 713,
        ru: 'пустыня',
        en: 'desert'
    },
    {
        id: 714,
        ru: 'заслуживать',
        en: 'deserve'
    },
    {
        id: 715,
        ru: 'дизайн',
        en: 'design'
    },
    {
        id: 716,
        ru: 'дизайнер',
        en: 'designer'
    },
    {
        id: 717,
        ru: 'желание',
        en: 'desire'
    },
    {
        id: 718,
        ru: 'рабочий стол',
        en: 'desk'
    },
    {
        id: 719,
        ru: 'отчаянный',
        en: 'desperate'
    },
    {
        id: 720,
        ru: 'несмотря на',
        en: 'despite'
    },
    {
        id: 721,
        ru: 'место назначения',
        en: 'destination'
    },
    {
        id: 722,
        ru: 'разрушать',
        en: 'destroy'
    },
    {
        id: 723,
        ru: 'деталь',
        en: 'detail'
    },
    {
        id: 724,
        ru: 'подробный',
        en: 'detailed'
    },
    {
        id: 725,
        ru: 'обнаружить',
        en: 'detect'
    },
    {
        id: 726,
        ru: 'детектив',
        en: 'detective'
    },
    {
        id: 727,
        ru: 'определять',
        en: 'determine'
    },
    {
        id: 728,
        ru: 'определенный',
        en: 'determined'
    },
    {
        id: 729,
        ru: 'развивать',
        en: 'develop'
    },
    {
        id: 730,
        ru: 'разработка',
        en: 'development'
    },
    {
        id: 731,
        ru: 'устройство',
        en: 'device'
    },
    {
        id: 732,
        ru: 'диаграмма',
        en: 'diagram'
    },
    {
        id: 733,
        ru: 'диалог',
        en: 'dialogue'
    },
    {
        id: 734,
        ru: 'алмаз',
        en: 'diamond'
    },
    {
        id: 735,
        ru: 'дневник',
        en: 'diary'
    },
    {
        id: 736,
        ru: 'словарь',
        en: 'dictionary'
    },
    {
        id: 737,
        ru: 'умереть',
        en: 'die'
    },
    {
        id: 738,
        ru: 'диета',
        en: 'diet'
    },
    {
        id: 739,
        ru: 'разница',
        en: 'difference'
    },
    {
        id: 740,
        ru: 'другой',
        en: 'different'
    },
    {
        id: 741,
        ru: 'по-разному',
        en: 'differently'
    },
    {
        id: 742,
        ru: 'трудный',
        en: 'difficult'
    },
    {
        id: 743,
        ru: 'трудность',
        en: 'difficulty'
    },
    {
        id: 744,
        ru: 'копать',
        en: 'dig'
    },
    {
        id: 745,
        ru: 'цифровой',
        en: 'digital'
    },
    {
        id: 746,
        ru: 'ужин',
        en: 'dinner'
    },
    {
        id: 747,
        ru: 'прямой',
        en: 'direct'
    },
    {
        id: 748,
        ru: 'направление',
        en: 'direction'
    },
    {
        id: 749,
        ru: 'напрямую',
        en: 'directly'
    },
    {
        id: 750,
        ru: 'директор',
        en: 'director'
    },
    {
        id: 751,
        ru: 'грязь',
        en: 'dirt'
    },
    {
        id: 752,
        ru: 'грязный',
        en: 'dirty'
    },
    {
        id: 753,
        ru: 'недостаток',
        en: 'disadvantage'
    },
    {
        id: 754,
        ru: 'не согласен',
        en: 'disagree'
    },
    {
        id: 755,
        ru: 'пропадать',
        en: 'disappear'
    },
    {
        id: 756,
        ru: 'расстроенный',
        en: 'disappointed'
    },
    {
        id: 757,
        ru: 'разочаровывающий',
        en: 'disappointing'
    },
    {
        id: 758,
        ru: 'катастрофа',
        en: 'disaster'
    },
    {
        id: 759,
        ru: 'диск',
        en: 'disc'
    },
    {
        id: 760,
        ru: 'дисциплина',
        en: 'discipline'
    },
    {
        id: 761,
        ru: 'скидка',
        en: 'discount'
    },
    {
        id: 762,
        ru: 'обнаружить',
        en: 'discover'
    },
    {
        id: 763,
        ru: 'открытие',
        en: 'discovery'
    },
    {
        id: 764,
        ru: 'обсуждать',
        en: 'discuss'
    },
    {
        id: 765,
        ru: 'обсуждение',
        en: 'discussion'
    },
    {
        id: 766,
        ru: 'болезнь',
        en: 'disease'
    },
    {
        id: 767,
        ru: 'блюдо',
        en: 'dish'
    },
    {
        id: 768,
        ru: 'нечестный',
        en: 'dishonest'
    },
    {
        id: 769,
        ru: 'не нравится',
        en: 'dislike'
    },
    {
        id: 770,
        ru: 'увольнять',
        en: 'dismiss'
    },
    {
        id: 771,
        ru: 'отображать',
        en: 'display'
    },
    {
        id: 772,
        ru: 'расстояние',
        en: 'distance'
    },
    {
        id: 773,
        ru: 'распространять',
        en: 'distribute'
    },
    {
        id: 774,
        ru: 'распределение',
        en: 'distribution'
    },
    {
        id: 775,
        ru: 'округ',
        en: 'district'
    },
    {
        id: 776,
        ru: 'разделять',
        en: 'divide'
    },
    {
        id: 777,
        ru: 'разделение',
        en: 'division'
    },
    {
        id: 778,
        ru: 'в разводе',
        en: 'divorced'
    },
    {
        id: 779,
        ru: 'делать',
        en: 'do'
    },
    {
        id: 780,
        ru: 'доктор',
        en: 'doctor'
    },
    {
        id: 781,
        ru: 'документ',
        en: 'document'
    },
    {
        id: 782,
        ru: 'документальный фильм',
        en: 'documentary'
    },
    {
        id: 783,
        ru: 'собака',
        en: 'dog'
    },
    {
        id: 784,
        ru: 'доллар',
        en: 'dollar'
    },
    {
        id: 785,
        ru: 'одомашненный',
        en: 'domestic'
    },
    {
        id: 786,
        ru: 'доминировать',
        en: 'dominate'
    },
    {
        id: 787,
        ru: 'пожертвовать',
        en: 'donate'
    },
    {
        id: 788,
        ru: 'дверь',
        en: 'door'
    },
    {
        id: 789,
        ru: 'двойной',
        en: 'double'
    },
    {
        id: 790,
        ru: 'нареч.',
        en: 'adv.'
    },
    {
        id: 791,
        ru: 'сомневаться',
        en: 'doubt'
    },
    {
        id: 792,
        ru: 'вниз',
        en: 'down'
    },
    {
        id: 793,
        ru: 'скачать',
        en: 'download'
    },
    {
        id: 794,
        ru: 'внизу',
        en: 'downstairs'
    },
    {
        id: 795,
        ru: 'вниз',
        en: 'downwards'
    },
    {
        id: 796,
        ru: 'дюжина',
        en: 'dozen'
    },
    {
        id: 797,
        ru: 'черновик',
        en: 'draft'
    },
    {
        id: 798,
        ru: 'тащить',
        en: 'drag'
    },
    {
        id: 799,
        ru: 'драма',
        en: 'drama'
    },
    {
        id: 800,
        ru: 'драматический',
        en: 'dramatic'
    },
    {
        id: 801,
        ru: 'рисовать',
        en: 'draw'
    },
    {
        id: 802,
        ru: 'рисунок',
        en: 'drawing'
    },
    {
        id: 803,
        ru: 'мечтать',
        en: 'dream'
    },
    {
        id: 804,
        ru: 'одеваться',
        en: 'dress'
    },
    {
        id: 805,
        ru: 'одетый',
        en: 'dressed'
    },
    {
        id: 806,
        ru: 'напиток',
        en: 'drink'
    },
    {
        id: 807,
        ru: 'водить машину',
        en: 'drive'
    },
    {
        id: 808,
        ru: 'водитель',
        en: 'driver'
    },
    {
        id: 809,
        ru: 'вождение',
        en: 'driving'
    },
    {
        id: 810,
        ru: 'уронить',
        en: 'drop'
    },
    {
        id: 811,
        ru: 'лекарство',
        en: 'drug'
    },
    {
        id: 812,
        ru: 'барабан',
        en: 'drum'
    },
    {
        id: 813,
        ru: 'пьяный',
        en: 'drunk'
    },
    {
        id: 814,
        ru: 'сухой',
        en: 'dry'
    },
    {
        id: 815,
        ru: 'должный',
        en: 'due'
    },
    {
        id: 816,
        ru: 'в течение',
        en: 'during'
    },
    {
        id: 817,
        ru: 'пыль',
        en: 'dust'
    },
    {
        id: 818,
        ru: 'долг',
        en: 'duty'
    },
    {
        id: 819,
        ru: 'ДВД',
        en: 'DVD'
    },
    {
        id: 820,
        ru: 'каждый',
        en: 'each'
    },
    {
        id: 821,
        ru: 'ухо',
        en: 'ear'
    },
    {
        id: 822,
        ru: 'рано',
        en: 'early'
    },
    {
        id: 823,
        ru: 'зарабатывать',
        en: 'earn'
    },
    {
        id: 824,
        ru: 'земля',
        en: 'earth'
    },
    {
        id: 825,
        ru: 'землетрясение',
        en: 'earthquake'
    },
    {
        id: 826,
        ru: 'легко',
        en: 'easily'
    },
    {
        id: 827,
        ru: 'восток',
        en: 'east'
    },
    {
        id: 828,
        ru: 'восточный',
        en: 'eastern'
    },
    {
        id: 829,
        ru: 'легкий',
        en: 'easy'
    },
    {
        id: 830,
        ru: 'есть',
        en: 'eat'
    },
    {
        id: 831,
        ru: 'экономический',
        en: 'economic'
    },
    {
        id: 832,
        ru: 'экономика',
        en: 'economy'
    },
    {
        id: 833,
        ru: 'край',
        en: 'edge'
    },
    {
        id: 834,
        ru: 'редактировать',
        en: 'edit'
    },
    {
        id: 835,
        ru: 'версия',
        en: 'edition'
    },
    {
        id: 836,
        ru: 'редактор',
        en: 'editor'
    },
    {
        id: 837,
        ru: 'обучать',
        en: 'educate'
    },
    {
        id: 838,
        ru: 'образованный',
        en: 'educated'
    },
    {
        id: 839,
        ru: 'образование',
        en: 'education'
    },
    {
        id: 840,
        ru: 'образовательный',
        en: 'educational'
    },
    {
        id: 841,
        ru: 'эффект',
        en: 'effect'
    },
    {
        id: 842,
        ru: 'эффективный',
        en: 'effective'
    },
    {
        id: 843,
        ru: 'эффективно',
        en: 'effectively'
    },
    {
        id: 844,
        ru: 'эффективный',
        en: 'efficient'
    },
    {
        id: 845,
        ru: 'усилие',
        en: 'effort'
    },
    {
        id: 846,
        ru: 'яйцо',
        en: 'egg'
    },
    {
        id: 847,
        ru: 'восемь',
        en: 'eight'
    },
    {
        id: 848,
        ru: 'восемнадцать',
        en: 'eighteen'
    },
    {
        id: 849,
        ru: 'восемьдесят',
        en: 'eighty'
    },
    {
        id: 850,
        ru: 'или',
        en: 'either'
    },
    {
        id: 851,
        ru: 'пожилые люди',
        en: 'elderly'
    },
    {
        id: 852,
        ru: 'избрать',
        en: 'elect'
    },
    {
        id: 853,
        ru: 'выборы',
        en: 'election'
    },
    {
        id: 854,
        ru: 'электрический',
        en: 'electric'
    },
    {
        id: 855,
        ru: 'электрический',
        en: 'electrical'
    },
    {
        id: 856,
        ru: 'электричество',
        en: 'electricity'
    },
    {
        id: 857,
        ru: 'электронный',
        en: 'electronic'
    },
    {
        id: 858,
        ru: 'элемент',
        en: 'element'
    },
    {
        id: 859,
        ru: 'слон',
        en: 'elephant'
    },
    {
        id: 860,
        ru: 'одиннадцать',
        en: 'eleven'
    },
    {
        id: 861,
        ru: 'еще',
        en: 'else'
    },
    {
        id: 862,
        ru: 'в другом месте',
        en: 'elsewhere'
    },
    {
        id: 863,
        ru: 'электронная почта',
        en: 'email'
    },
    {
        id: 864,
        ru: 'смущенный',
        en: 'embarrassed'
    },
    {
        id: 865,
        ru: 'смущающий',
        en: 'embarrassing'
    },
    {
        id: 866,
        ru: 'появляться',
        en: 'emerge'
    },
    {
        id: 867,
        ru: 'чрезвычайная ситуация',
        en: 'emergency'
    },
    {
        id: 868,
        ru: 'эмоция',
        en: 'emotion'
    },
    {
        id: 869,
        ru: 'эмоциональный',
        en: 'emotional'
    },
    {
        id: 870,
        ru: 'акцент',
        en: 'emphasis'
    },
    {
        id: 871,
        ru: 'подчеркивать',
        en: 'emphasize'
    },
    {
        id: 872,
        ru: 'нанимать',
        en: 'employ'
    },
    {
        id: 873,
        ru: 'сотрудник',
        en: 'employee'
    },
    {
        id: 874,
        ru: 'работодатель',
        en: 'employer'
    },
    {
        id: 875,
        ru: 'работа',
        en: 'employment'
    },
    {
        id: 876,
        ru: 'пустой',
        en: 'empty'
    },
    {
        id: 877,
        ru: 'давать возможность',
        en: 'enable'
    },
    {
        id: 878,
        ru: 'сталкиваться',
        en: 'encounter'
    },
    {
        id: 879,
        ru: 'поощрять',
        en: 'encourage'
    },
    {
        id: 880,
        ru: 'конец',
        en: 'end'
    },
    {
        id: 881,
        ru: 'окончание',
        en: 'ending'
    },
    {
        id: 882,
        ru: 'враг',
        en: 'enemy'
    },
    {
        id: 883,
        ru: 'энергия',
        en: 'energy'
    },
    {
        id: 884,
        ru: 'привлекать',
        en: 'engage'
    },
    {
        id: 885,
        ru: 'помолвлен',
        en: 'engaged'
    },
    {
        id: 886,
        ru: 'двигатель',
        en: 'engine'
    },
    {
        id: 887,
        ru: 'инженер',
        en: 'engineer'
    },
    {
        id: 888,
        ru: 'инжиниринг',
        en: 'engineering'
    },
    {
        id: 889,
        ru: 'усиливать',
        en: 'enhance'
    },
    {
        id: 890,
        ru: 'наслаждаться',
        en: 'enjoy'
    },
    {
        id: 891,
        ru: 'громадный',
        en: 'enormous'
    },
    {
        id: 892,
        ru: 'достаточно',
        en: 'enough'
    },
    {
        id: 893,
        ru: 'расследование',
        en: 'enquiry'
    },
    {
        id: 894,
        ru: 'гарантировать',
        en: 'ensure'
    },
    {
        id: 895,
        ru: 'входить',
        en: 'enter'
    },
    {
        id: 896,
        ru: 'развлекать',
        en: 'entertain'
    },
    {
        id: 897,
        ru: 'развлечение',
        en: 'entertainment'
    },
    {
        id: 898,
        ru: 'энтузиазм',
        en: 'enthusiasm'
    },
    {
        id: 899,
        ru: 'восторженный',
        en: 'enthusiastic'
    },
    {
        id: 900,
        ru: 'весь',
        en: 'entire'
    },
    {
        id: 901,
        ru: 'полностью',
        en: 'entirely'
    },
    {
        id: 902,
        ru: 'вход',
        en: 'entrance'
    },
    {
        id: 903,
        ru: 'вход',
        en: 'entry'
    },
    {
        id: 904,
        ru: 'среда',
        en: 'environment'
    },
    {
        id: 905,
        ru: 'относящийся к окружающей среде',
        en: 'environmental'
    },
    {
        id: 906,
        ru: 'эпизод',
        en: 'episode'
    },
    {
        id: 907,
        ru: 'равный',
        en: 'equal'
    },
    {
        id: 908,
        ru: 'одинаково',
        en: 'equally'
    },
    {
        id: 909,
        ru: 'оборудование',
        en: 'equipment'
    },
    {
        id: 910,
        ru: 'ошибка',
        en: 'error'
    },
    {
        id: 911,
        ru: 'побег',
        en: 'escape'
    },
    {
        id: 912,
        ru: 'особенно',
        en: 'especially'
    },
    {
        id: 913,
        ru: 'эссе',
        en: 'essay'
    },
    {
        id: 914,
        ru: 'существенный',
        en: 'essential'
    },
    {
        id: 915,
        ru: 'учреждать',
        en: 'establish'
    },
    {
        id: 916,
        ru: 'имущество',
        en: 'estate'
    },
    {
        id: 917,
        ru: 'оценивать',
        en: 'estimate'
    },
    {
        id: 918,
        ru: 'этический',
        en: 'ethical'
    },
    {
        id: 919,
        ru: 'евро',
        en: 'euro'
    },
    {
        id: 920,
        ru: 'оценивать',
        en: 'evaluate'
    },
    {
        id: 921,
        ru: 'даже',
        en: 'even'
    },
    {
        id: 922,
        ru: 'вечер',
        en: 'evening'
    },
    {
        id: 923,
        ru: 'событие',
        en: 'event'
    },
    {
        id: 924,
        ru: 'в конце концов',
        en: 'eventually'
    },
    {
        id: 925,
        ru: 'всегда',
        en: 'ever'
    },
    {
        id: 926,
        ru: 'каждый',
        en: 'every'
    },
    {
        id: 927,
        ru: 'все',
        en: 'everybody'
    },
    {
        id: 928,
        ru: 'каждый день',
        en: 'everyday'
    },
    {
        id: 929,
        ru: 'каждый',
        en: 'everyone'
    },
    {
        id: 930,
        ru: 'все',
        en: 'everything'
    },
    {
        id: 931,
        ru: 'повсюду',
        en: 'everywhere'
    },
    {
        id: 932,
        ru: 'доказательство',
        en: 'evidence'
    },
    {
        id: 933,
        ru: 'зло',
        en: 'evil'
    },
    {
        id: 934,
        ru: 'точный',
        en: 'exact'
    },
    {
        id: 935,
        ru: 'точно',
        en: 'exactly'
    },
    {
        id: 936,
        ru: 'экзамен',
        en: 'exam'
    },
    {
        id: 937,
        ru: 'экспертиза',
        en: 'examination'
    },
    {
        id: 938,
        ru: 'исследовать',
        en: 'examine'
    },
    {
        id: 939,
        ru: 'пример',
        en: 'example'
    },
    {
        id: 940,
        ru: 'отличный',
        en: 'excellent'
    },
    {
        id: 941,
        ru: 'кроме',
        en: 'except'
    },
    {
        id: 942,
        ru: 'обмен',
        en: 'exchange'
    },
    {
        id: 943,
        ru: 'взволнованный',
        en: 'excited'
    },
    {
        id: 944,
        ru: 'возбуждение',
        en: 'excitement'
    },
    {
        id: 945,
        ru: 'захватывающий',
        en: 'exciting'
    },
    {
        id: 946,
        ru: 'извинение',
        en: 'excuse'
    },
    {
        id: 947,
        ru: 'исполнительный',
        en: 'executive'
    },
    {
        id: 948,
        ru: 'упражнение',
        en: 'exercise'
    },
    {
        id: 949,
        ru: 'выставка',
        en: 'exhibition'
    },
    {
        id: 950,
        ru: 'существовать',
        en: 'exist'
    },
    {
        id: 951,
        ru: 'существование',
        en: 'existence'
    },
    {
        id: 952,
        ru: 'расширять',
        en: 'expand'
    },
    {
        id: 953,
        ru: 'ожидать',
        en: 'expect'
    },
    {
        id: 954,
        ru: 'ожидание',
        en: 'expectation'
    },
    {
        id: 955,
        ru: 'ожидал',
        en: 'expected'
    },
    {
        id: 956,
        ru: 'экспедиция',
        en: 'expedition'
    },
    {
        id: 957,
        ru: 'расходы',
        en: 'expense'
    },
    {
        id: 958,
        ru: 'дорогой',
        en: 'expensive'
    },
    {
        id: 959,
        ru: 'опыт',
        en: 'experience'
    },
    {
        id: 960,
        ru: 'опытный',
        en: 'experienced'
    },
    {
        id: 961,
        ru: 'эксперимент',
        en: 'experiment'
    },
    {
        id: 962,
        ru: 'эксперт',
        en: 'expert'
    },
    {
        id: 963,
        ru: 'объяснять',
        en: 'explain'
    },
    {
        id: 964,
        ru: 'объяснение',
        en: 'explanation'
    },
    {
        id: 965,
        ru: 'взорваться',
        en: 'explode'
    },
    {
        id: 966,
        ru: 'разведка',
        en: 'exploration'
    },
    {
        id: 967,
        ru: 'исследовать',
        en: 'explore'
    },
    {
        id: 968,
        ru: 'взрыв',
        en: 'explosion'
    },
    {
        id: 969,
        ru: 'экспорт',
        en: 'export'
    },
    {
        id: 970,
        ru: 'разоблачать',
        en: 'expose'
    },
    {
        id: 971,
        ru: 'выражать',
        en: 'express'
    },
    {
        id: 972,
        ru: 'выражение',
        en: 'expression'
    },
    {
        id: 973,
        ru: 'продлевать',
        en: 'extend'
    },
    {
        id: 974,
        ru: 'степень',
        en: 'extent'
    },
    {
        id: 975,
        ru: 'внешний',
        en: 'external'
    },
    {
        id: 976,
        ru: 'дополнительный',
        en: 'extra'
    },
    {
        id: 977,
        ru: 'необычайный',
        en: 'extraordinary'
    },
    {
        id: 978,
        ru: 'экстремальный',
        en: 'extreme'
    },
    {
        id: 979,
        ru: 'очень сильно',
        en: 'extremely'
    },
    {
        id: 980,
        ru: 'глаз',
        en: 'eye'
    },
    {
        id: 981,
        ru: 'лицо',
        en: 'face'
    },
    {
        id: 982,
        ru: 'средство',
        en: 'facility'
    },
    {
        id: 983,
        ru: 'факт',
        en: 'fact'
    },
    {
        id: 984,
        ru: 'фактор',
        en: 'factor'
    },
    {
        id: 985,
        ru: 'фабрика',
        en: 'factory'
    },
    {
        id: 986,
        ru: 'неудача',
        en: 'fail'
    },
    {
        id: 987,
        ru: 'отказ',
        en: 'failure'
    },
    {
        id: 988,
        ru: 'справедливый',
        en: 'fair'
    },
    {
        id: 989,
        ru: 'весьма',
        en: 'fairly'
    },
    {
        id: 990,
        ru: 'вера',
        en: 'faith'
    },
    {
        id: 991,
        ru: 'падать',
        en: 'fall'
    },
    {
        id: 992,
        ru: 'FALSE',
        en: 'FALSE'
    },
    {
        id: 993,
        ru: 'привычный',
        en: 'familiar'
    },
    {
        id: 994,
        ru: 'семья',
        en: 'family'
    },
    {
        id: 995,
        ru: 'известный',
        en: 'famous'
    },
    {
        id: 996,
        ru: 'вентилятор',
        en: 'fan'
    },
    {
        id: 997,
        ru: 'изысканный',
        en: 'fancy'
    },
    {
        id: 998,
        ru: 'фантастический',
        en: 'fantastic'
    },
    {
        id: 999,
        ru: 'далеко',
        en: 'far'
    },
    {
        id: 1000,
        ru: 'ферма',
        en: 'farm'
    },
    {
        id: 1001,
        ru: 'фермер',
        en: 'farmer'
    },
    {
        id: 1002,
        ru: 'сельское хозяйство',
        en: 'farming'
    },
    {
        id: 1003,
        ru: 'очаровательный',
        en: 'fascinating'
    },
    {
        id: 1004,
        ru: 'мода',
        en: 'fashion'
    },
    {
        id: 1005,
        ru: 'модный',
        en: 'fashionable'
    },
    {
        id: 1006,
        ru: 'быстрый',
        en: 'fast'
    },
    {
        id: 1007,
        ru: 'закрепить',
        en: 'fasten'
    },
    {
        id: 1008,
        ru: 'толстый',
        en: 'fat'
    },
    {
        id: 1009,
        ru: 'отец',
        en: 'father'
    },
    {
        id: 1010,
        ru: 'вина',
        en: 'fault'
    },
    {
        id: 1011,
        ru: 'услуга',
        en: 'favour'
    },
    {
        id: 1012,
        ru: 'любимый',
        en: 'favourite'
    },
    {
        id: 1013,
        ru: 'страх',
        en: 'fear'
    },
    {
        id: 1014,
        ru: 'перо',
        en: 'feather'
    },
    {
        id: 1015,
        ru: 'особенность',
        en: 'feature'
    },
    {
        id: 1016,
        ru: 'февраль',
        en: 'February'
    },
    {
        id: 1017,
        ru: 'платеж',
        en: 'fee'
    },
    {
        id: 1018,
        ru: 'кормить',
        en: 'feed'
    },
    {
        id: 1019,
        ru: 'обратная связь',
        en: 'feedback'
    },
    {
        id: 1020,
        ru: 'чувствовать',
        en: 'feel'
    },
    {
        id: 1021,
        ru: 'чувство',
        en: 'feeling'
    },
    {
        id: 1022,
        ru: 'парень',
        en: 'fellow'
    },
    {
        id: 1023,
        ru: 'женский',
        en: 'female'
    },
    {
        id: 1024,
        ru: 'изгородь',
        en: 'fence'
    },
    {
        id: 1025,
        ru: 'фестиваль',
        en: 'festival'
    },
    {
        id: 1026,
        ru: 'немного',
        en: 'few'
    },
    {
        id: 1027,
        ru: 'вымысел',
        en: 'fiction'
    },
    {
        id: 1028,
        ru: 'поле',
        en: 'field'
    },
    {
        id: 1029,
        ru: 'пятнадцать',
        en: 'fifteen'
    },
    {
        id: 1030,
        ru: 'пятый',
        en: 'fifth'
    },
    {
        id: 1031,
        ru: 'пятьдесят',
        en: 'fifty'
    },
    {
        id: 1032,
        ru: 'драться',
        en: 'fight'
    },
    {
        id: 1033,
        ru: 'борьба',
        en: 'fighting'
    },
    {
        id: 1034,
        ru: 'фигура',
        en: 'figure'
    },
    {
        id: 1035,
        ru: 'файл',
        en: 'file'
    },
    {
        id: 1036,
        ru: 'наполнять',
        en: 'fill'
    },
    {
        id: 1037,
        ru: 'фильм',
        en: 'film'
    },
    {
        id: 1038,
        ru: 'финал',
        en: 'final'
    },
    {
        id: 1039,
        ru: 'окончательно',
        en: 'finally'
    },
    {
        id: 1040,
        ru: 'финансы',
        en: 'finance'
    },
    {
        id: 1041,
        ru: 'финансовый',
        en: 'financial'
    },
    {
        id: 1042,
        ru: 'находить',
        en: 'find'
    },
    {
        id: 1043,
        ru: 'находка',
        en: 'finding'
    },
    {
        id: 1044,
        ru: 'отлично',
        en: 'fine'
    },
    {
        id: 1045,
        ru: 'палец',
        en: 'finger'
    },
    {
        id: 1046,
        ru: 'заканчивать',
        en: 'finish'
    },
    {
        id: 1047,
        ru: 'огонь',
        en: 'fire'
    },
    {
        id: 1048,
        ru: 'твердый',
        en: 'firm'
    },
    {
        id: 1049,
        ru: 'первый',
        en: 'first'
    },
    {
        id: 1050,
        ru: 'во-первых',
        en: 'firstly'
    },
    {
        id: 1051,
        ru: 'рыба',
        en: 'fish'
    },
    {
        id: 1052,
        ru: 'рыбалка',
        en: 'fishing'
    },
    {
        id: 1053,
        ru: 'соответствовать',
        en: 'fit'
    },
    {
        id: 1054,
        ru: 'фитнес',
        en: 'fitness'
    },
    {
        id: 1055,
        ru: 'пять',
        en: 'five'
    },
    {
        id: 1056,
        ru: 'исправить',
        en: 'fix'
    },
    {
        id: 1057,
        ru: 'зафиксированный',
        en: 'fixed'
    },
    {
        id: 1058,
        ru: 'флаг',
        en: 'flag'
    },
    {
        id: 1059,
        ru: 'пламя',
        en: 'flame'
    },
    {
        id: 1060,
        ru: 'вспышка',
        en: 'flash'
    },
    {
        id: 1061,
        ru: 'плоский',
        en: 'flat'
    },
    {
        id: 1062,
        ru: 'гибкий',
        en: 'flexible'
    },
    {
        id: 1063,
        ru: 'полет',
        en: 'flight'
    },
    {
        id: 1064,
        ru: 'плавать',
        en: 'float'
    },
    {
        id: 1065,
        ru: 'наводнение',
        en: 'flood'
    },
    {
        id: 1066,
        ru: 'пол',
        en: 'floor'
    },
    {
        id: 1067,
        ru: 'мука',
        en: 'flour'
    },
    {
        id: 1068,
        ru: 'поток',
        en: 'flow'
    },
    {
        id: 1069,
        ru: 'цветок',
        en: 'flower'
    },
    {
        id: 1070,
        ru: 'грипп',
        en: 'flu'
    },
    {
        id: 1071,
        ru: 'летать',
        en: 'fly'
    },
    {
        id: 1072,
        ru: 'летающий',
        en: 'flying'
    },
    {
        id: 1073,
        ru: 'фокус',
        en: 'focus'
    },
    {
        id: 1074,
        ru: 'складывать',
        en: 'fold'
    },
    {
        id: 1075,
        ru: 'складной',
        en: 'folding'
    },
    {
        id: 1076,
        ru: 'народный',
        en: 'folk'
    },
    {
        id: 1077,
        ru: 'следовать',
        en: 'follow'
    },
    {
        id: 1078,
        ru: 'следующий',
        en: 'following'
    },
    {
        id: 1079,
        ru: 'еда',
        en: 'food'
    },
    {
        id: 1080,
        ru: 'ступня',
        en: 'foot'
    },
    {
        id: 1081,
        ru: 'футбол',
        en: 'football'
    },
    {
        id: 1082,
        ru: 'для',
        en: 'for'
    },
    {
        id: 1083,
        ru: 'сила',
        en: 'force'
    },
    {
        id: 1084,
        ru: 'иностранный',
        en: 'foreign'
    },
    {
        id: 1085,
        ru: 'лес',
        en: 'forest'
    },
    {
        id: 1086,
        ru: 'навсегда',
        en: 'forever'
    },
    {
        id: 1087,
        ru: 'забывать',
        en: 'forget'
    },
    {
        id: 1088,
        ru: 'простить',
        en: 'forgive'
    },
    {
        id: 1089,
        ru: 'вилка',
        en: 'fork'
    },
    {
        id: 1090,
        ru: 'форма',
        en: 'form'
    },
    {
        id: 1091,
        ru: 'формальный',
        en: 'formal'
    },
    {
        id: 1092,
        ru: 'бывший',
        en: 'former'
    },
    {
        id: 1093,
        ru: 'к счастью',
        en: 'fortunately'
    },
    {
        id: 1094,
        ru: 'удача',
        en: 'fortune'
    },
    {
        id: 1095,
        ru: 'сорок',
        en: 'forty'
    },
    {
        id: 1096,
        ru: 'вперед',
        en: 'forward'
    },
    {
        id: 1097,
        ru: 'найденный',
        en: 'found'
    },
    {
        id: 1098,
        ru: 'четыре',
        en: 'four'
    },
    {
        id: 1099,
        ru: 'четырнадцать',
        en: 'fourteen'
    },
    {
        id: 1100,
        ru: 'четвертый',
        en: 'fourth'
    },
    {
        id: 1101,
        ru: 'рамка',
        en: 'frame'
    },
    {
        id: 1102,
        ru: 'бесплатно',
        en: 'free'
    },
    {
        id: 1103,
        ru: 'свобода',
        en: 'freedom'
    },
    {
        id: 1104,
        ru: 'заморозить',
        en: 'freeze'
    },
    {
        id: 1105,
        ru: 'частота',
        en: 'frequency'
    },
    {
        id: 1106,
        ru: 'часто',
        en: 'frequently'
    },
    {
        id: 1107,
        ru: 'свежий',
        en: 'fresh'
    },
    {
        id: 1108,
        ru: 'Пятница',
        en: 'Friday'
    },
    {
        id: 1109,
        ru: 'холодильник',
        en: 'fridge'
    },
    {
        id: 1110,
        ru: 'друг',
        en: 'friend'
    },
    {
        id: 1111,
        ru: 'дружелюбно',
        en: 'friendly'
    },
    {
        id: 1112,
        ru: 'дружба',
        en: 'friendship'
    },
    {
        id: 1113,
        ru: 'пугать',
        en: 'frighten'
    },
    {
        id: 1114,
        ru: 'испуганный',
        en: 'frightened'
    },
    {
        id: 1115,
        ru: 'пугающий',
        en: 'frightening'
    },
    {
        id: 1116,
        ru: 'лягушка',
        en: 'frog'
    },
    {
        id: 1117,
        ru: 'от',
        en: 'from'
    },
    {
        id: 1118,
        ru: 'передний',
        en: 'front'
    },
    {
        id: 1119,
        ru: 'замороженный',
        en: 'frozen'
    },
    {
        id: 1120,
        ru: 'фрукты',
        en: 'fruit'
    },
    {
        id: 1121,
        ru: 'жарить',
        en: 'fry'
    },
    {
        id: 1122,
        ru: 'топливо',
        en: 'fuel'
    },
    {
        id: 1123,
        ru: 'полный',
        en: 'full'
    },
    {
        id: 1124,
        ru: 'полностью',
        en: 'fully'
    },
    {
        id: 1125,
        ru: 'веселье',
        en: 'fun'
    },
    {
        id: 1126,
        ru: 'функция',
        en: 'function'
    },
    {
        id: 1127,
        ru: 'фонд',
        en: 'fund'
    },
    {
        id: 1128,
        ru: 'фундаментальный',
        en: 'fundamental'
    },
    {
        id: 1129,
        ru: 'финансирование',
        en: 'funding'
    },
    {
        id: 1130,
        ru: 'забавный',
        en: 'funny'
    },
    {
        id: 1131,
        ru: 'шерсть',
        en: 'fur'
    },
    {
        id: 1132,
        ru: 'мебель',
        en: 'furniture'
    },
    {
        id: 1133,
        ru: 'дальше',
        en: 'further'
    },
    {
        id: 1134,
        ru: 'более того',
        en: 'furthermore'
    },
    {
        id: 1135,
        ru: 'будущее',
        en: 'future'
    },
    {
        id: 1136,
        ru: 'прирост',
        en: 'gain'
    },
    {
        id: 1137,
        ru: 'галерея',
        en: 'gallery'
    },
    {
        id: 1138,
        ru: 'игра',
        en: 'game'
    },
    {
        id: 1139,
        ru: 'банда',
        en: 'gang'
    },
    {
        id: 1140,
        ru: 'зазор',
        en: 'gap'
    },
    {
        id: 1141,
        ru: 'гараж',
        en: 'garage'
    },
    {
        id: 1142,
        ru: 'сад',
        en: 'garden'
    },
    {
        id: 1143,
        ru: 'газ',
        en: 'gas'
    },
    {
        id: 1144,
        ru: 'ворота',
        en: 'gate'
    },
    {
        id: 1145,
        ru: 'собирать',
        en: 'gather'
    },
    {
        id: 1146,
        ru: 'общий',
        en: 'general'
    },
    {
        id: 1147,
        ru: 'в целом',
        en: 'generally'
    },
    {
        id: 1148,
        ru: 'генерировать',
        en: 'generate'
    },
    {
        id: 1149,
        ru: 'поколение',
        en: 'generation'
    },
    {
        id: 1150,
        ru: 'щедрый',
        en: 'generous'
    },
    {
        id: 1151,
        ru: 'жанр',
        en: 'genre'
    },
    {
        id: 1152,
        ru: 'нежный',
        en: 'gentle'
    },
    {
        id: 1153,
        ru: 'джентльмен',
        en: 'gentleman'
    },
    {
        id: 1154,
        ru: 'география',
        en: 'geography'
    },
    {
        id: 1155,
        ru: 'получать',
        en: 'get'
    },
    {
        id: 1156,
        ru: 'призрак',
        en: 'ghost'
    },
    {
        id: 1157,
        ru: 'гигант',
        en: 'giant'
    },
    {
        id: 1158,
        ru: 'подарок',
        en: 'gift'
    },
    {
        id: 1159,
        ru: 'девочка',
        en: 'girl'
    },
    {
        id: 1160,
        ru: 'подруга',
        en: 'girlfriend'
    },
    {
        id: 1161,
        ru: 'давать',
        en: 'give'
    },
    {
        id: 1162,
        ru: 'радостный',
        en: 'glad'
    },
    {
        id: 1163,
        ru: 'стекло',
        en: 'glass'
    },
    {
        id: 1164,
        ru: 'глобальный',
        en: 'global'
    },
    {
        id: 1165,
        ru: 'перчатка',
        en: 'glove'
    },
    {
        id: 1166,
        ru: 'идти',
        en: 'go'
    },
    {
        id: 1167,
        ru: 'цель',
        en: 'goal'
    },
    {
        id: 1168,
        ru: 'бог',
        en: 'god'
    },
    {
        id: 1169,
        ru: 'золото',
        en: 'gold'
    },
    {
        id: 1170,
        ru: 'гольф',
        en: 'golf'
    },
    {
        id: 1171,
        ru: 'хороший',
        en: 'good'
    },
    {
        id: 1172,
        ru: 'до свидания',
        en: 'goodbye'
    },
    {
        id: 1173,
        ru: 'товары',
        en: 'goods'
    },
    {
        id: 1174,
        ru: 'управлять',
        en: 'govern'
    },
    {
        id: 1175,
        ru: 'правительство',
        en: 'government'
    },
    {
        id: 1176,
        ru: 'схватить',
        en: 'grab'
    },
    {
        id: 1177,
        ru: 'оценка',
        en: 'grade'
    },
    {
        id: 1178,
        ru: 'постепенно',
        en: 'gradually'
    },
    {
        id: 1179,
        ru: 'выпускник',
        en: 'graduate'
    },
    {
        id: 1180,
        ru: 'зерно',
        en: 'grain'
    },
    {
        id: 1181,
        ru: 'большой',
        en: 'grand'
    },
    {
        id: 1182,
        ru: 'дедушка',
        en: 'grandfather'
    },
    {
        id: 1183,
        ru: 'бабушка',
        en: 'grandmother'
    },
    {
        id: 1184,
        ru: 'дедушка и бабушка',
        en: 'grandparent'
    },
    {
        id: 1185,
        ru: 'грант',
        en: 'grant'
    },
    {
        id: 1186,
        ru: 'трава',
        en: 'grass'
    },
    {
        id: 1187,
        ru: 'благодарный',
        en: 'grateful'
    },
    {
        id: 1188,
        ru: 'большой',
        en: 'great'
    },
    {
        id: 1189,
        ru: 'зеленый',
        en: 'green'
    },
    {
        id: 1190,
        ru: 'приветствовать',
        en: 'greet'
    },
    {
        id: 1191,
        ru: 'серый',
        en: 'grey'
    },
    {
        id: 1192,
        ru: 'земля',
        en: 'ground'
    },
    {
        id: 1193,
        ru: 'группа',
        en: 'group'
    },
    {
        id: 1194,
        ru: 'расти',
        en: 'grow'
    },
    {
        id: 1195,
        ru: 'рост',
        en: 'growth'
    },
    {
        id: 1196,
        ru: 'гарантия',
        en: 'guarantee'
    },
    {
        id: 1197,
        ru: 'сторожить',
        en: 'guard'
    },
    {
        id: 1198,
        ru: 'предполагать',
        en: 'guess'
    },
    {
        id: 1199,
        ru: 'гость',
        en: 'guest'
    },
    {
        id: 1200,
        ru: 'гид',
        en: 'guide'
    },
    {
        id: 1201,
        ru: 'виновный',
        en: 'guilty'
    },
    {
        id: 1202,
        ru: 'гитара',
        en: 'guitar'
    },
    {
        id: 1203,
        ru: 'пистолет',
        en: 'gun'
    },
    {
        id: 1204,
        ru: 'парень',
        en: 'guy'
    },
    {
        id: 1205,
        ru: 'спортзал',
        en: 'gym'
    },
    {
        id: 1206,
        ru: 'привычка',
        en: 'habit'
    },
    {
        id: 1207,
        ru: 'волосы',
        en: 'hair'
    },
    {
        id: 1208,
        ru: 'половина',
        en: 'half'
    },
    {
        id: 1209,
        ru: 'зал',
        en: 'hall'
    },
    {
        id: 1210,
        ru: 'рука',
        en: 'hand'
    },
    {
        id: 1211,
        ru: 'ручка',
        en: 'handle'
    },
    {
        id: 1212,
        ru: 'вешать',
        en: 'hang'
    },
    {
        id: 1213,
        ru: 'случаться',
        en: 'happen'
    },
    {
        id: 1214,
        ru: 'счастливо',
        en: 'happily'
    },
    {
        id: 1215,
        ru: 'счастье',
        en: 'happiness'
    },
    {
        id: 1216,
        ru: 'счастливый',
        en: 'happy'
    },
    {
        id: 1217,
        ru: 'жесткий',
        en: 'hard'
    },
    {
        id: 1218,
        ru: 'едва ли',
        en: 'hardly'
    },
    {
        id: 1219,
        ru: 'вред',
        en: 'harm'
    },
    {
        id: 1220,
        ru: 'вредный',
        en: 'harmful'
    },
    {
        id: 1221,
        ru: 'шляпа',
        en: 'hat'
    },
    {
        id: 1222,
        ru: 'ненавидеть',
        en: 'hate'
    },
    {
        id: 1223,
        ru: 'иметь',
        en: 'have'
    },
    {
        id: 1224,
        ru: 'иметь',
        en: 'have'
    },
    {
        id: 1225,
        ru: 'он',
        en: 'he'
    },
    {
        id: 1226,
        ru: 'голова',
        en: 'head'
    },
    {
        id: 1227,
        ru: 'головная боль',
        en: 'headache'
    },
    {
        id: 1228,
        ru: 'заголовок',
        en: 'headline'
    },
    {
        id: 1229,
        ru: 'здоровье',
        en: 'health'
    },
    {
        id: 1230,
        ru: 'здоровый',
        en: 'healthy'
    },
    {
        id: 1231,
        ru: 'слышать',
        en: 'hear'
    },
    {
        id: 1232,
        ru: 'слушание',
        en: 'hearing'
    },
    {
        id: 1233,
        ru: 'сердце',
        en: 'heart'
    },
    {
        id: 1234,
        ru: 'нагревать',
        en: 'heat'
    },
    {
        id: 1235,
        ru: 'обогрев',
        en: 'heating'
    },
    {
        id: 1236,
        ru: 'небеса',
        en: 'heaven'
    },
    {
        id: 1237,
        ru: 'тяжело',
        en: 'heavily'
    },
    {
        id: 1238,
        ru: 'тяжелый',
        en: 'heavy'
    },
    {
        id: 1239,
        ru: 'каблук',
        en: 'heel'
    },
    {
        id: 1240,
        ru: 'высота',
        en: 'height'
    },
    {
        id: 1241,
        ru: 'вертолет',
        en: 'helicopter'
    },
    {
        id: 1242,
        ru: 'ад',
        en: 'hell'
    },
    {
        id: 1243,
        ru: 'привет',
        en: 'hello'
    },
    {
        id: 1244,
        ru: 'помощь',
        en: 'help'
    },
    {
        id: 1245,
        ru: 'полезный',
        en: 'helpful'
    },
    {
        id: 1246,
        ru: 'ее',
        en: 'her'
    },
    {
        id: 1247,
        ru: 'здесь',
        en: 'here'
    },
    {
        id: 1248,
        ru: 'герой',
        en: 'hero'
    },
    {
        id: 1249,
        ru: 'ее',
        en: 'hers'
    },
    {
        id: 1250,
        ru: 'себя',
        en: 'herself'
    },
    {
        id: 1251,
        ru: 'сомневаться',
        en: 'hesitate'
    },
    {
        id: 1252,
        ru: 'привет',
        en: 'hey'
    },
    {
        id: 1253,
        ru: 'привет',
        en: 'hi'
    },
    {
        id: 1254,
        ru: 'скрывать',
        en: 'hide'
    },
    {
        id: 1255,
        ru: 'высокий',
        en: 'high'
    },
    {
        id: 1256,
        ru: 'выделять',
        en: 'highlight'
    },
    {
        id: 1257,
        ru: 'высоко',
        en: 'highly'
    },
    {
        id: 1258,
        ru: 'холм',
        en: 'hill'
    },
    {
        id: 1259,
        ru: 'ему',
        en: 'him'
    },
    {
        id: 1260,
        ru: 'сам',
        en: 'himself'
    },
    {
        id: 1261,
        ru: 'нанимать',
        en: 'hire'
    },
    {
        id: 1262,
        ru: 'его',
        en: 'his'
    },
    {
        id: 1263,
        ru: 'исторический',
        en: 'historic'
    },
    {
        id: 1264,
        ru: 'исторический',
        en: 'historical'
    },
    {
        id: 1265,
        ru: 'история',
        en: 'history'
    },
    {
        id: 1266,
        ru: 'ударять',
        en: 'hit'
    },
    {
        id: 1267,
        ru: 'хобби',
        en: 'hobby'
    },
    {
        id: 1268,
        ru: 'хоккей',
        en: 'hockey'
    },
    {
        id: 1269,
        ru: 'держать',
        en: 'hold'
    },
    {
        id: 1270,
        ru: 'дыра',
        en: 'hole'
    },
    {
        id: 1271,
        ru: 'праздничный день',
        en: 'holiday'
    },
    {
        id: 1272,
        ru: 'пустой',
        en: 'hollow'
    },
    {
        id: 1273,
        ru: 'святой',
        en: 'holy'
    },
    {
        id: 1274,
        ru: 'дом',
        en: 'home'
    },
    {
        id: 1275,
        ru: 'домашнее задание',
        en: 'homework'
    },
    {
        id: 1276,
        ru: 'честный',
        en: 'honest'
    },
    {
        id: 1277,
        ru: 'честь',
        en: 'honour'
    },
    {
        id: 1278,
        ru: 'надеяться',
        en: 'hope'
    },
    {
        id: 1279,
        ru: 'ужасный',
        en: 'horrible'
    },
    {
        id: 1280,
        ru: 'ужас',
        en: 'horror'
    },
    {
        id: 1281,
        ru: 'лошадь',
        en: 'horse'
    },
    {
        id: 1282,
        ru: 'больница',
        en: 'hospital'
    },
    {
        id: 1283,
        ru: 'хозяин',
        en: 'host'
    },
    {
        id: 1284,
        ru: 'горячий',
        en: 'hot'
    },
    {
        id: 1285,
        ru: 'отель',
        en: 'hotel'
    },
    {
        id: 1286,
        ru: 'час',
        en: 'hour'
    },
    {
        id: 1287,
        ru: 'дом',
        en: 'house'
    },
    {
        id: 1288,
        ru: 'семья',
        en: 'household'
    },
    {
        id: 1289,
        ru: 'жилье',
        en: 'housing'
    },
    {
        id: 1290,
        ru: 'как',
        en: 'how'
    },
    {
        id: 1291,
        ru: 'однако',
        en: 'however'
    },
    {
        id: 1292,
        ru: 'огромный',
        en: 'huge'
    },
    {
        id: 1293,
        ru: 'человек',
        en: 'human'
    },
    {
        id: 1294,
        ru: 'юмористический',
        en: 'humorous'
    },
    {
        id: 1295,
        ru: 'юмор',
        en: 'humour'
    },
    {
        id: 1296,
        ru: 'сто',
        en: 'hundred'
    },
    {
        id: 1297,
        ru: 'голодный',
        en: 'hungry'
    },
    {
        id: 1298,
        ru: 'охота',
        en: 'hunt'
    },
    {
        id: 1299,
        ru: 'охота',
        en: 'hunting'
    },
    {
        id: 1300,
        ru: 'ураган',
        en: 'hurricane'
    },
    {
        id: 1301,
        ru: 'торопиться',
        en: 'hurry'
    },
    {
        id: 1302,
        ru: 'повредить',
        en: 'hurt'
    },
    {
        id: 1303,
        ru: 'муж',
        en: 'husband'
    },
    {
        id: 1304,
        ru: 'я',
        en: 'I'
    },
    {
        id: 1305,
        ru: 'лед',
        en: 'ice'
    },
    {
        id: 1306,
        ru: 'лед',
        en: 'ice'
    },
    {
        id: 1307,
        ru: 'идея',
        en: 'idea'
    },
    {
        id: 1308,
        ru: 'идеальный',
        en: 'ideal'
    },
    {
        id: 1309,
        ru: 'идентифицировать',
        en: 'identify'
    },
    {
        id: 1310,
        ru: 'личность',
        en: 'identity'
    },
    {
        id: 1311,
        ru: 'если',
        en: 'if'
    },
    {
        id: 1312,
        ru: 'игнорировать',
        en: 'ignore'
    },
    {
        id: 1313,
        ru: 'больной',
        en: 'ill'
    },
    {
        id: 1314,
        ru: 'незаконный',
        en: 'illegal'
    },
    {
        id: 1315,
        ru: 'болезнь',
        en: 'illness'
    },
    {
        id: 1316,
        ru: 'проиллюстрировать',
        en: 'illustrate'
    },
    {
        id: 1317,
        ru: 'иллюстрация',
        en: 'illustration'
    },
    {
        id: 1318,
        ru: 'изображение',
        en: 'image'
    },
    {
        id: 1319,
        ru: 'воображаемый',
        en: 'imaginary'
    },
    {
        id: 1320,
        ru: 'воображение',
        en: 'imagination'
    },
    {
        id: 1321,
        ru: 'представлять себе',
        en: 'imagine'
    },
    {
        id: 1322,
        ru: 'немедленный',
        en: 'immediate'
    },
    {
        id: 1323,
        ru: 'немедленно',
        en: 'immediately'
    },
    {
        id: 1324,
        ru: 'иммигрант',
        en: 'immigrant'
    },
    {
        id: 1325,
        ru: 'влияние',
        en: 'impact'
    },
    {
        id: 1326,
        ru: 'нетерпеливый',
        en: 'impatient'
    },
    {
        id: 1327,
        ru: 'подразумевать',
        en: 'imply'
    },
    {
        id: 1328,
        ru: 'импорт',
        en: 'import'
    },
    {
        id: 1329,
        ru: 'важность',
        en: 'importance'
    },
    {
        id: 1330,
        ru: 'важный',
        en: 'important'
    },
    {
        id: 1331,
        ru: 'навязывать',
        en: 'impose'
    },
    {
        id: 1332,
        ru: 'невозможный',
        en: 'impossible'
    },
    {
        id: 1333,
        ru: 'произвести впечатление',
        en: 'impress'
    },
    {
        id: 1334,
        ru: 'впечатленный',
        en: 'impressed'
    },
    {
        id: 1335,
        ru: 'впечатление',
        en: 'impression'
    },
    {
        id: 1336,
        ru: 'впечатляющий',
        en: 'impressive'
    },
    {
        id: 1337,
        ru: 'улучшать',
        en: 'improve'
    },
    {
        id: 1338,
        ru: 'улучшение',
        en: 'improvement'
    },
    {
        id: 1339,
        ru: 'в',
        en: 'in'
    },
    {
        id: 1340,
        ru: 'дюйм',
        en: 'inch'
    },
    {
        id: 1341,
        ru: 'инцидент',
        en: 'incident'
    },
    {
        id: 1342,
        ru: 'включать',
        en: 'include'
    },
    {
        id: 1343,
        ru: 'включено',
        en: 'included'
    },
    {
        id: 1344,
        ru: 'включая',
        en: 'including'
    },
    {
        id: 1345,
        ru: 'доход',
        en: 'income'
    },
    {
        id: 1346,
        ru: 'увеличивать',
        en: 'increase'
    },
    {
        id: 1347,
        ru: 'все больше и больше',
        en: 'increasingly'
    },
    {
        id: 1348,
        ru: 'невероятный',
        en: 'incredible'
    },
    {
        id: 1349,
        ru: 'невероятно',
        en: 'incredibly'
    },
    {
        id: 1350,
        ru: 'действительно',
        en: 'indeed'
    },
    {
        id: 1351,
        ru: 'независимый',
        en: 'independent'
    },
    {
        id: 1352,
        ru: 'указывать',
        en: 'indicate'
    },
    {
        id: 1353,
        ru: 'косвенный',
        en: 'indirect'
    },
    {
        id: 1354,
        ru: 'индивидуальный',
        en: 'individual'
    },
    {
        id: 1355,
        ru: 'в помещении',
        en: 'indoor'
    },
    {
        id: 1356,
        ru: 'в помещении',
        en: 'indoors'
    },
    {
        id: 1357,
        ru: 'промышленный',
        en: 'industrial'
    },
    {
        id: 1358,
        ru: 'промышленность',
        en: 'industry'
    },
    {
        id: 1359,
        ru: 'инфекция',
        en: 'infection'
    },
    {
        id: 1360,
        ru: 'влияние',
        en: 'influence'
    },
    {
        id: 1361,
        ru: 'информировать',
        en: 'inform'
    },
    {
        id: 1362,
        ru: 'неофициальный',
        en: 'informal'
    },
    {
        id: 1363,
        ru: 'информация',
        en: 'information'
    },
    {
        id: 1364,
        ru: 'ингредиент',
        en: 'ingredient'
    },
    {
        id: 1365,
        ru: 'исходный',
        en: 'initial'
    },
    {
        id: 1366,
        ru: 'изначально',
        en: 'initially'
    },
    {
        id: 1367,
        ru: 'инициатива',
        en: 'initiative'
    },
    {
        id: 1368,
        ru: 'ранить',
        en: 'injure'
    },
    {
        id: 1369,
        ru: 'раненый',
        en: 'injured'
    },
    {
        id: 1370,
        ru: 'рана',
        en: 'injury'
    },
    {
        id: 1371,
        ru: 'внутренний',
        en: 'inner'
    },
    {
        id: 1372,
        ru: 'невиновный',
        en: 'innocent'
    },
    {
        id: 1373,
        ru: 'насекомое',
        en: 'insect'
    },
    {
        id: 1374,
        ru: 'внутри',
        en: 'inside'
    },
    {
        id: 1375,
        ru: 'понимание',
        en: 'insight'
    },
    {
        id: 1376,
        ru: 'настаивать',
        en: 'insist'
    },
    {
        id: 1377,
        ru: 'вдохновлять',
        en: 'inspire'
    },
    {
        id: 1378,
        ru: 'установить',
        en: 'install'
    },
    {
        id: 1379,
        ru: 'пример',
        en: 'instance'
    },
    {
        id: 1380,
        ru: 'вместо',
        en: 'instead'
    },
    {
        id: 1381,
        ru: 'институт',
        en: 'institute'
    },
    {
        id: 1382,
        ru: 'учреждение',
        en: 'institution'
    },
    {
        id: 1383,
        ru: 'инструкция',
        en: 'instruction'
    },
    {
        id: 1384,
        ru: 'инструктор',
        en: 'instructor'
    },
    {
        id: 1385,
        ru: 'инструмент',
        en: 'instrument'
    },
    {
        id: 1386,
        ru: 'страхование',
        en: 'insurance'
    },
    {
        id: 1387,
        ru: 'интеллект',
        en: 'intelligence'
    },
    {
        id: 1388,
        ru: 'разумный',
        en: 'intelligent'
    },
    {
        id: 1389,
        ru: 'намереваться',
        en: 'intend'
    },
    {
        id: 1390,
        ru: 'намеревался',
        en: 'intended'
    },
    {
        id: 1391,
        ru: 'интенсивный',
        en: 'intense'
    },
    {
        id: 1392,
        ru: 'намерение',
        en: 'intention'
    },
    {
        id: 1393,
        ru: 'интерес',
        en: 'interest'
    },
    {
        id: 1394,
        ru: 'заинтересованный',
        en: 'interested'
    },
    {
        id: 1395,
        ru: 'интересный',
        en: 'interesting'
    },
    {
        id: 1396,
        ru: 'внутренний',
        en: 'internal'
    },
    {
        id: 1397,
        ru: 'международный',
        en: 'international'
    },
    {
        id: 1398,
        ru: 'интернет',
        en: 'internet'
    },
    {
        id: 1399,
        ru: 'интерпретировать',
        en: 'interpret'
    },
    {
        id: 1400,
        ru: 'прерывать',
        en: 'interrupt'
    },
    {
        id: 1401,
        ru: 'интервью',
        en: 'interview'
    },
    {
        id: 1402,
        ru: 'в',
        en: 'into'
    },
    {
        id: 1403,
        ru: 'представлять',
        en: 'introduce'
    },
    {
        id: 1404,
        ru: 'введение',
        en: 'introduction'
    },
    {
        id: 1405,
        ru: 'изобретать',
        en: 'invent'
    },
    {
        id: 1406,
        ru: 'изобретение',
        en: 'invention'
    },
    {
        id: 1407,
        ru: 'инвестировать',
        en: 'invest'
    },
    {
        id: 1408,
        ru: 'расследовать',
        en: 'investigate'
    },
    {
        id: 1409,
        ru: 'расследование',
        en: 'investigation'
    },
    {
        id: 1410,
        ru: 'инвестиции',
        en: 'investment'
    },
    {
        id: 1411,
        ru: 'приглашение',
        en: 'invitation'
    },
    {
        id: 1412,
        ru: 'приглашать',
        en: 'invite'
    },
    {
        id: 1413,
        ru: 'вовлекать',
        en: 'involve'
    },
    {
        id: 1414,
        ru: 'вовлеченный',
        en: 'involved'
    },
    {
        id: 1415,
        ru: 'железо',
        en: 'iron'
    },
    {
        id: 1416,
        ru: 'остров',
        en: 'island'
    },
    {
        id: 1417,
        ru: 'проблема',
        en: 'issue'
    },
    {
        id: 1418,
        ru: 'ЭТО',
        en: 'IT'
    },
    {
        id: 1419,
        ru: 'это',
        en: 'it'
    },
    {
        id: 1420,
        ru: 'элемент',
        en: 'item'
    },
    {
        id: 1421,
        ru: 'его',
        en: 'its'
    },
    {
        id: 1422,
        ru: 'сам по себе',
        en: 'itself'
    },
    {
        id: 1423,
        ru: 'куртка',
        en: 'jacket'
    },
    {
        id: 1424,
        ru: 'варенье',
        en: 'jam'
    },
    {
        id: 1425,
        ru: 'январь',
        en: 'January'
    },
    {
        id: 1426,
        ru: 'джаз',
        en: 'jazz'
    },
    {
        id: 1427,
        ru: 'джинсы',
        en: 'jeans'
    },
    {
        id: 1428,
        ru: 'ювелирные изделия',
        en: 'jewellery'
    },
    {
        id: 1429,
        ru: 'работа',
        en: 'job'
    },
    {
        id: 1430,
        ru: 'присоединиться',
        en: 'join'
    },
    {
        id: 1431,
        ru: 'шутить',
        en: 'joke'
    },
    {
        id: 1432,
        ru: 'журнал',
        en: 'journal'
    },
    {
        id: 1433,
        ru: 'журналист',
        en: 'journalist'
    },
    {
        id: 1434,
        ru: 'путешествие',
        en: 'journey'
    },
    {
        id: 1435,
        ru: 'радость',
        en: 'joy'
    },
    {
        id: 1436,
        ru: 'судить',
        en: 'judge'
    },
    {
        id: 1437,
        ru: 'суждение',
        en: 'judgement'
    },
    {
        id: 1438,
        ru: 'сок',
        en: 'juice'
    },
    {
        id: 1439,
        ru: 'Июль',
        en: 'July'
    },
    {
        id: 1440,
        ru: 'прыжок',
        en: 'jump'
    },
    {
        id: 1441,
        ru: 'Июнь',
        en: 'June'
    },
    {
        id: 1442,
        ru: 'младший',
        en: 'junior'
    },
    {
        id: 1443,
        ru: 'только',
        en: 'just'
    },
    {
        id: 1444,
        ru: 'справедливость',
        en: 'justice'
    },
    {
        id: 1445,
        ru: 'оправдывать',
        en: 'justify'
    },
    {
        id: 1446,
        ru: 'увлеченный',
        en: 'keen'
    },
    {
        id: 1447,
        ru: 'держать',
        en: 'keep'
    },
    {
        id: 1448,
        ru: 'ключ',
        en: 'key'
    },
    {
        id: 1449,
        ru: 'клавиатура',
        en: 'keyboard'
    },
    {
        id: 1450,
        ru: 'пинать',
        en: 'kick'
    },
    {
        id: 1451,
        ru: 'ребенок',
        en: 'kid'
    },
    {
        id: 1452,
        ru: 'убийство',
        en: 'kill'
    },
    {
        id: 1453,
        ru: 'убийство',
        en: 'killing'
    },
    {
        id: 1454,
        ru: 'километр',
        en: 'kilometre'
    },
    {
        id: 1455,
        ru: 'добрый',
        en: 'kind'
    },
    {
        id: 1456,
        ru: 'добрый',
        en: 'kind'
    },
    {
        id: 1457,
        ru: 'король',
        en: 'king'
    },
    {
        id: 1458,
        ru: 'целовать',
        en: 'kiss'
    },
    {
        id: 1459,
        ru: 'кухня',
        en: 'kitchen'
    },
    {
        id: 1460,
        ru: 'колено',
        en: 'knee'
    },
    {
        id: 1461,
        ru: 'нож',
        en: 'knife'
    },
    {
        id: 1462,
        ru: 'стук',
        en: 'knock'
    },
    {
        id: 1463,
        ru: 'знать',
        en: 'know'
    },
    {
        id: 1464,
        ru: 'знание',
        en: 'knowledge'
    },
    {
        id: 1465,
        ru: 'лаборатория',
        en: 'lab'
    },
    {
        id: 1466,
        ru: 'этикетка',
        en: 'label'
    },
    {
        id: 1467,
        ru: 'лаборатория',
        en: 'laboratory'
    },
    {
        id: 1468,
        ru: 'труд',
        en: 'labour'
    },
    {
        id: 1469,
        ru: 'недостаток',
        en: 'lack'
    },
    {
        id: 1470,
        ru: 'леди',
        en: 'lady'
    },
    {
        id: 1471,
        ru: 'озеро',
        en: 'lake'
    },
    {
        id: 1472,
        ru: 'лампа',
        en: 'lamp'
    },
    {
        id: 1473,
        ru: 'земля',
        en: 'land'
    },
    {
        id: 1474,
        ru: 'пейзаж',
        en: 'landscape'
    },
    {
        id: 1475,
        ru: 'язык',
        en: 'language'
    },
    {
        id: 1476,
        ru: 'ноутбук',
        en: 'laptop'
    },
    {
        id: 1477,
        ru: 'большой',
        en: 'large'
    },
    {
        id: 1478,
        ru: 'в значительной степени',
        en: 'largely'
    },
    {
        id: 1479,
        ru: 'последний',
        en: 'last'
    },
    {
        id: 1480,
        ru: 'последний',
        en: 'last'
    },
    {
        id: 1481,
        ru: 'поздно',
        en: 'late'
    },
    {
        id: 1482,
        ru: 'позже',
        en: 'later'
    },
    {
        id: 1483,
        ru: 'последний',
        en: 'latest'
    },
    {
        id: 1484,
        ru: 'смех',
        en: 'laugh'
    },
    {
        id: 1485,
        ru: 'смех',
        en: 'laughter'
    },
    {
        id: 1486,
        ru: 'запуск',
        en: 'launch'
    },
    {
        id: 1487,
        ru: 'закон',
        en: 'law'
    },
    {
        id: 1488,
        ru: 'адвокат',
        en: 'lawyer'
    },
    {
        id: 1489,
        ru: 'класть',
        en: 'lay'
    },
    {
        id: 1490,
        ru: 'слой',
        en: 'layer'
    },
    {
        id: 1491,
        ru: 'ленивый',
        en: 'lazy'
    },
    {
        id: 1492,
        ru: 'вести',
        en: 'lead'
    },
    {
        id: 1493,
        ru: 'лидер',
        en: 'leader'
    },
    {
        id: 1494,
        ru: 'лидерство',
        en: 'leadership'
    },
    {
        id: 1495,
        ru: 'ведущий',
        en: 'leading'
    },
    {
        id: 1496,
        ru: 'лист',
        en: 'leaf'
    },
    {
        id: 1497,
        ru: 'лига',
        en: 'league'
    },
    {
        id: 1498,
        ru: 'наклонять',
        en: 'lean'
    },
    {
        id: 1499,
        ru: 'учиться',
        en: 'learn'
    },
    {
        id: 1500,
        ru: 'обучение',
        en: 'learning'
    },
    {
        id: 1501,
        ru: 'наименее',
        en: 'least'
    },
    {
        id: 1502,
        ru: 'кожа',
        en: 'leather'
    },
    {
        id: 1503,
        ru: 'оставлять',
        en: 'leave'
    },
    {
        id: 1504,
        ru: 'лекция',
        en: 'lecture'
    },
    {
        id: 1505,
        ru: 'левый',
        en: 'left'
    },
    {
        id: 1506,
        ru: 'нога',
        en: 'leg'
    },
    {
        id: 1507,
        ru: 'юридический',
        en: 'legal'
    },
    {
        id: 1508,
        ru: 'досуг',
        en: 'leisure'
    },
    {
        id: 1509,
        ru: 'лимон',
        en: 'lemon'
    },
    {
        id: 1510,
        ru: 'одалживать',
        en: 'lend'
    },
    {
        id: 1511,
        ru: 'длина',
        en: 'length'
    },
    {
        id: 1512,
        ru: 'меньше',
        en: 'less'
    },
    {
        id: 1513,
        ru: 'урок',
        en: 'lesson'
    },
    {
        id: 1514,
        ru: 'позволять',
        en: 'let'
    },
    {
        id: 1515,
        ru: 'письмо',
        en: 'letter'
    },
    {
        id: 1516,
        ru: 'уровень',
        en: 'level'
    },
    {
        id: 1517,
        ru: 'библиотека',
        en: 'library'
    },
    {
        id: 1518,
        ru: 'лицензия',
        en: 'licence'
    },
    {
        id: 1519,
        ru: 'ложь',
        en: 'lie'
    },
    {
        id: 1520,
        ru: 'ложь',
        en: 'lie'
    },
    {
        id: 1521,
        ru: 'жизнь',
        en: 'life'
    },
    {
        id: 1522,
        ru: 'образ жизни',
        en: 'lifestyle'
    },
    {
        id: 1523,
        ru: 'поднимать',
        en: 'lift'
    },
    {
        id: 1524,
        ru: 'свет',
        en: 'light'
    },
    {
        id: 1525,
        ru: 'прил.',
        en: 'adj.'
    },
    {
        id: 1526,
        ru: 'свет',
        en: 'light'
    },
    {
        id: 1527,
        ru: 'нравиться',
        en: 'like'
    },
    {
        id: 1528,
        ru: 'нравиться',
        en: 'like'
    },
    {
        id: 1529,
        ru: 'н.',
        en: 'n.'
    },
    {
        id: 1530,
        ru: 'вероятный',
        en: 'likely'
    },
    {
        id: 1531,
        ru: 'предел',
        en: 'limit'
    },
    {
        id: 1532,
        ru: 'ограниченный',
        en: 'limited'
    },
    {
        id: 1533,
        ru: 'линия',
        en: 'line'
    },
    {
        id: 1534,
        ru: 'связь',
        en: 'link'
    },
    {
        id: 1535,
        ru: 'лев',
        en: 'lion'
    },
    {
        id: 1536,
        ru: 'губа',
        en: 'lip'
    },
    {
        id: 1537,
        ru: 'жидкость',
        en: 'liquid'
    },
    {
        id: 1538,
        ru: 'список',
        en: 'list'
    },
    {
        id: 1539,
        ru: 'слушать',
        en: 'listen'
    },
    {
        id: 1540,
        ru: 'слушатель',
        en: 'listener'
    },
    {
        id: 1541,
        ru: 'литература',
        en: 'literature'
    },
    {
        id: 1542,
        ru: 'маленький',
        en: 'little'
    },
    {
        id: 1543,
        ru: 'жить',
        en: 'live'
    },
    {
        id: 1544,
        ru: 'жить',
        en: 'live'
    },
    {
        id: 1545,
        ru: 'живой',
        en: 'lively'
    },
    {
        id: 1546,
        ru: 'жизнь',
        en: 'living'
    },
    {
        id: 1547,
        ru: 'нагрузка',
        en: 'load'
    },
    {
        id: 1548,
        ru: 'заем',
        en: 'loan'
    },
    {
        id: 1549,
        ru: 'местный',
        en: 'local'
    },
    {
        id: 1550,
        ru: 'найти',
        en: 'locate'
    },
    {
        id: 1551,
        ru: 'расположен',
        en: 'located'
    },
    {
        id: 1552,
        ru: 'расположение',
        en: 'location'
    },
    {
        id: 1553,
        ru: 'замок',
        en: 'lock'
    },
    {
        id: 1554,
        ru: 'логичный',
        en: 'logical'
    },
    {
        id: 1555,
        ru: 'одинокий',
        en: 'lonely'
    },
    {
        id: 1556,
        ru: 'длинный',
        en: 'long'
    },
    {
        id: 1557,
        ru: 'долгосрочный',
        en: 'long-term'
    },
    {
        id: 1558,
        ru: 'смотреть',
        en: 'look'
    },
    {
        id: 1559,
        ru: 'свободный',
        en: 'loose'
    },
    {
        id: 1560,
        ru: 'господин',
        en: 'lord'
    },
    {
        id: 1561,
        ru: 'грузовик',
        en: 'lorry'
    },
    {
        id: 1562,
        ru: 'терять',
        en: 'lose'
    },
    {
        id: 1563,
        ru: 'потеря',
        en: 'loss'
    },
    {
        id: 1564,
        ru: 'потерянный',
        en: 'lost'
    },
    {
        id: 1565,
        ru: 'много',
        en: 'lot'
    },
    {
        id: 1566,
        ru: 'громкий',
        en: 'loud'
    },
    {
        id: 1567,
        ru: 'громко',
        en: 'loudly'
    },
    {
        id: 1568,
        ru: 'любовь',
        en: 'love'
    },
    {
        id: 1569,
        ru: 'прекрасный',
        en: 'lovely'
    },
    {
        id: 1570,
        ru: 'низкий',
        en: 'low'
    },
    {
        id: 1571,
        ru: 'ниже',
        en: 'lower'
    },
    {
        id: 1572,
        ru: 'удача',
        en: 'luck'
    },
    {
        id: 1573,
        ru: 'удачливый',
        en: 'lucky'
    },
    {
        id: 1574,
        ru: 'обед',
        en: 'lunch'
    },
    {
        id: 1575,
        ru: 'легкое',
        en: 'lung'
    },
    {
        id: 1576,
        ru: 'роскошь',
        en: 'luxury'
    },
    {
        id: 1577,
        ru: 'машина',
        en: 'machine'
    },
    {
        id: 1578,
        ru: 'безумный',
        en: 'mad'
    },
    {
        id: 1579,
        ru: 'журнал',
        en: 'magazine'
    },
    {
        id: 1580,
        ru: 'магия',
        en: 'magic'
    },
    {
        id: 1581,
        ru: 'почта',
        en: 'mail'
    },
    {
        id: 1582,
        ru: 'основной',
        en: 'main'
    },
    {
        id: 1583,
        ru: 'в основном',
        en: 'mainly'
    },
    {
        id: 1584,
        ru: 'поддерживать',
        en: 'maintain'
    },
    {
        id: 1585,
        ru: 'главный',
        en: 'major'
    },
    {
        id: 1586,
        ru: 'большинство',
        en: 'majority'
    },
    {
        id: 1587,
        ru: 'делать',
        en: 'make'
    },
    {
        id: 1588,
        ru: 'мужской',
        en: 'male'
    },
    {
        id: 1589,
        ru: 'торговый центр',
        en: 'mall'
    },
    {
        id: 1590,
        ru: 'мужчина',
        en: 'man'
    },
    {
        id: 1591,
        ru: 'управлять',
        en: 'manage'
    },
    {
        id: 1592,
        ru: 'управление',
        en: 'management'
    },
    {
        id: 1593,
        ru: 'менеджер',
        en: 'manager'
    },
    {
        id: 1594,
        ru: 'манера',
        en: 'manner'
    },
    {
        id: 1595,
        ru: 'много',
        en: 'many'
    },
    {
        id: 1596,
        ru: 'карта',
        en: 'map'
    },
    {
        id: 1597,
        ru: 'Маршировать',
        en: 'March'
    },
    {
        id: 1598,
        ru: 'отметка',
        en: 'mark'
    },
    {
        id: 1599,
        ru: 'рынок',
        en: 'market'
    },
    {
        id: 1600,
        ru: 'маркетинг',
        en: 'marketing'
    },
    {
        id: 1601,
        ru: 'свадьба',
        en: 'marriage'
    },
    {
        id: 1602,
        ru: 'женатый',
        en: 'married'
    },
    {
        id: 1603,
        ru: 'жениться',
        en: 'marry'
    },
    {
        id: 1604,
        ru: 'масса',
        en: 'mass'
    },
    {
        id: 1605,
        ru: 'массивный',
        en: 'massive'
    },
    {
        id: 1606,
        ru: 'владелец',
        en: 'master'
    },
    {
        id: 1607,
        ru: 'соответствовать',
        en: 'match'
    },
    {
        id: 1608,
        ru: 'соответствие',
        en: 'matching'
    },
    {
        id: 1609,
        ru: 'материал',
        en: 'material'
    },
    {
        id: 1610,
        ru: 'математика',
        en: 'mathematics'
    },
    {
        id: 1611,
        ru: 'математика',
        en: 'maths'
    },
    {
        id: 1612,
        ru: 'иметь значение',
        en: 'matter'
    },
    {
        id: 1613,
        ru: 'максимум',
        en: 'maximum'
    },
    {
        id: 1614,
        ru: 'Может',
        en: 'May'
    },
    {
        id: 1615,
        ru: 'может',
        en: 'may'
    },
    {
        id: 1616,
        ru: 'может быть',
        en: 'maybe'
    },
    {
        id: 1617,
        ru: 'мне',
        en: 'me'
    },
    {
        id: 1618,
        ru: 'еда',
        en: 'meal'
    },
    {
        id: 1619,
        ru: 'иметь в виду',
        en: 'mean'
    },
    {
        id: 1620,
        ru: 'значение',
        en: 'meaning'
    },
    {
        id: 1621,
        ru: 'означает',
        en: 'means'
    },
    {
        id: 1622,
        ru: 'тем временем',
        en: 'meanwhile'
    },
    {
        id: 1623,
        ru: 'мера',
        en: 'measure'
    },
    {
        id: 1624,
        ru: 'измерение',
        en: 'measurement'
    },
    {
        id: 1625,
        ru: 'мясо',
        en: 'meat'
    },
    {
        id: 1626,
        ru: 'СМИ',
        en: 'media'
    },
    {
        id: 1627,
        ru: 'медицинский',
        en: 'medical'
    },
    {
        id: 1628,
        ru: 'лекарство',
        en: 'medicine'
    },
    {
        id: 1629,
        ru: 'середина',
        en: 'medium'
    },
    {
        id: 1630,
        ru: 'встретиться',
        en: 'meet'
    },
    {
        id: 1631,
        ru: 'встреча',
        en: 'meeting'
    },
    {
        id: 1632,
        ru: 'таять',
        en: 'melt'
    },
    {
        id: 1633,
        ru: 'член',
        en: 'member'
    },
    {
        id: 1634,
        ru: 'память',
        en: 'memory'
    },
    {
        id: 1635,
        ru: 'умственный',
        en: 'mental'
    },
    {
        id: 1636,
        ru: 'упомянуть',
        en: 'mention'
    },
    {
        id: 1637,
        ru: 'меню',
        en: 'menu'
    },
    {
        id: 1638,
        ru: 'беспорядок',
        en: 'mess'
    },
    {
        id: 1639,
        ru: 'сообщение',
        en: 'message'
    },
    {
        id: 1640,
        ru: 'металл',
        en: 'metal'
    },
    {
        id: 1641,
        ru: 'метод',
        en: 'method'
    },
    {
        id: 1642,
        ru: 'метр',
        en: 'metre'
    },
    {
        id: 1643,
        ru: 'середина',
        en: 'middle'
    },
    {
        id: 1644,
        ru: 'полночь',
        en: 'midnight'
    },
    {
        id: 1645,
        ru: 'мощь',
        en: 'might'
    },
    {
        id: 1646,
        ru: 'мягкий',
        en: 'mild'
    },
    {
        id: 1647,
        ru: 'миля',
        en: 'mile'
    },
    {
        id: 1648,
        ru: 'военный',
        en: 'military'
    },
    {
        id: 1649,
        ru: 'молоко',
        en: 'milk'
    },
    {
        id: 1650,
        ru: 'миллион',
        en: 'million'
    },
    {
        id: 1651,
        ru: 'разум',
        en: 'mind'
    },
    {
        id: 1652,
        ru: 'мой',
        en: 'mine'
    },
    {
        id: 1653,
        ru: 'мой',
        en: 'mine'
    },
    {
        id: 1654,
        ru: 'минерал',
        en: 'mineral'
    },
    {
        id: 1655,
        ru: 'минимум',
        en: 'minimum'
    },
    {
        id: 1656,
        ru: 'министр',
        en: 'minister'
    },
    {
        id: 1657,
        ru: 'незначительный',
        en: 'minor'
    },
    {
        id: 1658,
        ru: 'меньшинство',
        en: 'minority'
    },
    {
        id: 1659,
        ru: 'минута',
        en: 'minute'
    },
    {
        id: 1660,
        ru: 'зеркало',
        en: 'mirror'
    },
    {
        id: 1661,
        ru: 'скучать',
        en: 'miss'
    },
    {
        id: 1662,
        ru: 'отсутствующий',
        en: 'missing'
    },
    {
        id: 1663,
        ru: 'миссия',
        en: 'mission'
    },
    {
        id: 1664,
        ru: 'ошибка',
        en: 'mistake'
    },
    {
        id: 1665,
        ru: 'смешивание',
        en: 'mix'
    },
    {
        id: 1666,
        ru: 'смешанный',
        en: 'mixed'
    },
    {
        id: 1667,
        ru: 'смесь',
        en: 'mixture'
    },
    {
        id: 1668,
        ru: 'мобильный',
        en: 'mobile'
    },
    {
        id: 1669,
        ru: 'модель',
        en: 'model'
    },
    {
        id: 1670,
        ru: 'современный',
        en: 'modern'
    },
    {
        id: 1671,
        ru: 'изменить',
        en: 'modify'
    },
    {
        id: 1672,
        ru: 'момент',
        en: 'moment'
    },
    {
        id: 1673,
        ru: 'Понедельник',
        en: 'Monday'
    },
    {
        id: 1674,
        ru: 'деньги',
        en: 'money'
    },
    {
        id: 1675,
        ru: 'монитор',
        en: 'monitor'
    },
    {
        id: 1676,
        ru: 'обезьяна',
        en: 'monkey'
    },
    {
        id: 1677,
        ru: 'месяц',
        en: 'month'
    },
    {
        id: 1678,
        ru: 'настроение',
        en: 'mood'
    },
    {
        id: 1679,
        ru: 'луна',
        en: 'moon'
    },
    {
        id: 1680,
        ru: 'моральный',
        en: 'moral'
    },
    {
        id: 1681,
        ru: 'более',
        en: 'more'
    },
    {
        id: 1682,
        ru: 'утро',
        en: 'morning'
    },
    {
        id: 1683,
        ru: 'большинство',
        en: 'most'
    },
    {
        id: 1684,
        ru: 'по большей части',
        en: 'mostly'
    },
    {
        id: 1685,
        ru: 'мать',
        en: 'mother'
    },
    {
        id: 1686,
        ru: 'мотор',
        en: 'motor'
    },
    {
        id: 1687,
        ru: 'мотоцикл',
        en: 'motorcycle'
    },
    {
        id: 1688,
        ru: 'устанавливать',
        en: 'mount'
    },
    {
        id: 1689,
        ru: 'гора',
        en: 'mountain'
    },
    {
        id: 1690,
        ru: 'мышь',
        en: 'mouse'
    },
    {
        id: 1691,
        ru: 'рот',
        en: 'mouth'
    },
    {
        id: 1692,
        ru: 'двигаться',
        en: 'move'
    },
    {
        id: 1693,
        ru: 'движение',
        en: 'movement'
    },
    {
        id: 1694,
        ru: 'фильм',
        en: 'movie'
    },
    {
        id: 1695,
        ru: 'много',
        en: 'much'
    },
    {
        id: 1696,
        ru: 'грязь',
        en: 'mud'
    },
    {
        id: 1697,
        ru: 'несколько',
        en: 'multiple'
    },
    {
        id: 1698,
        ru: 'умножить',
        en: 'multiply'
    },
    {
        id: 1699,
        ru: 'мама',
        en: 'mum'
    },
    {
        id: 1700,
        ru: 'убийство',
        en: 'murder'
    },
    {
        id: 1701,
        ru: 'мышца',
        en: 'muscle'
    },
    {
        id: 1702,
        ru: 'музей',
        en: 'museum'
    },
    {
        id: 1703,
        ru: 'музыка',
        en: 'music'
    },
    {
        id: 1704,
        ru: 'музыкальный',
        en: 'musical'
    },
    {
        id: 1705,
        ru: 'музыкант',
        en: 'musician'
    },
    {
        id: 1706,
        ru: 'должен',
        en: 'must'
    },
    {
        id: 1707,
        ru: 'мой',
        en: 'my'
    },
    {
        id: 1708,
        ru: 'сам',
        en: 'myself'
    },
    {
        id: 1709,
        ru: 'таинственный',
        en: 'mysterious'
    },
    {
        id: 1710,
        ru: 'тайна',
        en: 'mystery'
    },
    {
        id: 1711,
        ru: 'ноготь',
        en: 'nail'
    },
    {
        id: 1712,
        ru: 'имя',
        en: 'name'
    },
    {
        id: 1713,
        ru: 'повествование',
        en: 'narrative'
    },
    {
        id: 1714,
        ru: 'узкий',
        en: 'narrow'
    },
    {
        id: 1715,
        ru: 'нация',
        en: 'nation'
    },
    {
        id: 1716,
        ru: 'национальный',
        en: 'national'
    },
    {
        id: 1717,
        ru: 'родной',
        en: 'native'
    },
    {
        id: 1718,
        ru: 'естественный',
        en: 'natural'
    },
    {
        id: 1719,
        ru: 'естественно',
        en: 'naturally'
    },
    {
        id: 1720,
        ru: 'природа',
        en: 'nature'
    },
    {
        id: 1721,
        ru: 'около',
        en: 'near'
    },
    {
        id: 1722,
        ru: 'около',
        en: 'nearly'
    },
    {
        id: 1723,
        ru: 'аккуратный',
        en: 'neat'
    },
    {
        id: 1724,
        ru: 'обязательно',
        en: 'necessarily'
    },
    {
        id: 1725,
        ru: 'необходимый',
        en: 'necessary'
    },
    {
        id: 1726,
        ru: 'шея',
        en: 'neck'
    },
    {
        id: 1727,
        ru: 'нуждаться',
        en: 'need'
    },
    {
        id: 1728,
        ru: 'иголка',
        en: 'needle'
    },
    {
        id: 1729,
        ru: 'отрицательный',
        en: 'negative'
    },
    {
        id: 1730,
        ru: 'сосед',
        en: 'neighbour'
    },
    {
        id: 1731,
        ru: 'район',
        en: 'neighbourhood'
    },
    {
        id: 1732,
        ru: 'ни один',
        en: 'neither'
    },
    {
        id: 1733,
        ru: 'нерв',
        en: 'nerve'
    },
    {
        id: 1734,
        ru: 'нервный',
        en: 'nervous'
    },
    {
        id: 1735,
        ru: 'сеть',
        en: 'net'
    },
    {
        id: 1736,
        ru: 'сеть',
        en: 'network'
    },
    {
        id: 1737,
        ru: 'никогда',
        en: 'never'
    },
    {
        id: 1738,
        ru: 'тем не менее',
        en: 'nevertheless'
    },
    {
        id: 1739,
        ru: 'новый',
        en: 'new'
    },
    {
        id: 1740,
        ru: 'новости',
        en: 'news'
    },
    {
        id: 1741,
        ru: 'газета',
        en: 'newspaper'
    },
    {
        id: 1742,
        ru: 'следующий',
        en: 'next'
    },
    {
        id: 1743,
        ru: 'следующий',
        en: 'next'
    },
    {
        id: 1744,
        ru: 'хороший',
        en: 'nice'
    },
    {
        id: 1745,
        ru: 'ночь',
        en: 'night'
    },
    {
        id: 1746,
        ru: 'кошмар',
        en: 'nightmare'
    },
    {
        id: 1747,
        ru: 'девять',
        en: 'nine'
    },
    {
        id: 1748,
        ru: 'девятнадцать',
        en: 'nineteen'
    },
    {
        id: 1749,
        ru: 'девяносто',
        en: 'ninety'
    },
    {
        id: 1750,
        ru: 'нет',
        en: 'no'
    },
    {
        id: 1751,
        ru: 'нет',
        en: 'no'
    },
    {
        id: 1752,
        ru: 'никто',
        en: 'nobody'
    },
    {
        id: 1753,
        ru: 'шум',
        en: 'noise'
    },
    {
        id: 1754,
        ru: 'шумный',
        en: 'noisy'
    },
    {
        id: 1755,
        ru: 'никто',
        en: 'none'
    },
    {
        id: 1756,
        ru: 'ни',
        en: 'nor'
    },
    {
        id: 1757,
        ru: 'нормальный',
        en: 'normal'
    },
    {
        id: 1758,
        ru: 'обычно',
        en: 'normally'
    },
    {
        id: 1759,
        ru: 'север',
        en: 'north'
    },
    {
        id: 1760,
        ru: 'северный',
        en: 'northern'
    },
    {
        id: 1761,
        ru: 'нос',
        en: 'nose'
    },
    {
        id: 1762,
        ru: 'нет',
        en: 'not'
    },
    {
        id: 1763,
        ru: 'примечание',
        en: 'note'
    },
    {
        id: 1764,
        ru: 'ничего',
        en: 'nothing'
    },
    {
        id: 1765,
        ru: 'уведомление',
        en: 'notice'
    },
    {
        id: 1766,
        ru: 'понятие',
        en: 'notion'
    },
    {
        id: 1767,
        ru: 'роман',
        en: 'novel'
    },
    {
        id: 1768,
        ru: 'ноябрь',
        en: 'November'
    },
    {
        id: 1769,
        ru: 'сейчас',
        en: 'now'
    },
    {
        id: 1770,
        ru: 'нигде',
        en: 'nowhere'
    },
    {
        id: 1771,
        ru: 'ядерный',
        en: 'nuclear'
    },
    {
        id: 1772,
        ru: 'число',
        en: 'number'
    },
    {
        id: 1773,
        ru: 'многочисленные',
        en: 'numerous'
    },
    {
        id: 1774,
        ru: 'медсестра',
        en: 'nurse'
    },
    {
        id: 1775,
        ru: 'орех',
        en: 'nut'
    },
    {
        id: 1776,
        ru: 'подчиняться',
        en: 'obey'
    },
    {
        id: 1777,
        ru: 'объект',
        en: 'object'
    },
    {
        id: 1778,
        ru: 'цель',
        en: 'objective'
    },
    {
        id: 1779,
        ru: 'обязательство',
        en: 'obligation'
    },
    {
        id: 1780,
        ru: 'наблюдение',
        en: 'observation'
    },
    {
        id: 1781,
        ru: 'наблюдать',
        en: 'observe'
    },
    {
        id: 1782,
        ru: 'получать',
        en: 'obtain'
    },
    {
        id: 1783,
        ru: 'очевидный',
        en: 'obvious'
    },
    {
        id: 1784,
        ru: 'очевидно',
        en: 'obviously'
    },
    {
        id: 1785,
        ru: 'случай',
        en: 'occasion'
    },
    {
        id: 1786,
        ru: 'изредка',
        en: 'occasionally'
    },
    {
        id: 1787,
        ru: 'происходить',
        en: 'occur'
    },
    {
        id: 1788,
        ru: 'океан',
        en: 'ocean'
    },
    {
        id: 1789,
        ru: 'час',
        en: 'o’clock'
    },
    {
        id: 1790,
        ru: 'октябрь',
        en: 'October'
    },
    {
        id: 1791,
        ru: 'странный',
        en: 'odd'
    },
    {
        id: 1792,
        ru: 'из',
        en: 'of'
    },
    {
        id: 1793,
        ru: 'выключенный',
        en: 'off'
    },
    {
        id: 1794,
        ru: 'правонарушение',
        en: 'offence'
    },
    {
        id: 1795,
        ru: 'обидеть',
        en: 'offend'
    },
    {
        id: 1796,
        ru: 'оскорбительный',
        en: 'offensive'
    },
    {
        id: 1797,
        ru: 'предложение',
        en: 'offer'
    },
    {
        id: 1798,
        ru: 'офис',
        en: 'office'
    },
    {
        id: 1799,
        ru: 'офицер',
        en: 'officer'
    },
    {
        id: 1800,
        ru: 'официальный',
        en: 'official'
    },
    {
        id: 1801,
        ru: 'часто',
        en: 'often'
    },
    {
        id: 1802,
        ru: 'ой',
        en: 'oh'
    },
    {
        id: 1803,
        ru: 'масло',
        en: 'oil'
    },
    {
        id: 1804,
        ru: 'ХОРОШО',
        en: 'OK'
    },
    {
        id: 1805,
        ru: 'старый',
        en: 'old'
    },
    {
        id: 1806,
        ru: 'старомодный',
        en: 'old-fashioned'
    },
    {
        id: 1807,
        ru: 'на',
        en: 'on'
    },
    {
        id: 1808,
        ru: 'один раз',
        en: 'once'
    },
    {
        id: 1809,
        ru: 'один',
        en: 'one'
    },
    {
        id: 1810,
        ru: 'лук',
        en: 'onion'
    },
    {
        id: 1811,
        ru: 'онлайн',
        en: 'online'
    },
    {
        id: 1812,
        ru: 'только',
        en: 'only'
    },
    {
        id: 1813,
        ru: 'на',
        en: 'onto'
    },
    {
        id: 1814,
        ru: 'открыть',
        en: 'open'
    },
    {
        id: 1815,
        ru: 'открытие',
        en: 'opening'
    },
    {
        id: 1816,
        ru: 'работать',
        en: 'operate'
    },
    {
        id: 1817,
        ru: 'операция',
        en: 'operation'
    },
    {
        id: 1818,
        ru: 'мнение',
        en: 'opinion'
    },
    {
        id: 1819,
        ru: 'противник',
        en: 'opponent'
    },
    {
        id: 1820,
        ru: 'возможность',
        en: 'opportunity'
    },
    {
        id: 1821,
        ru: 'выступать против',
        en: 'oppose'
    },
    {
        id: 1822,
        ru: 'выступил против',
        en: 'opposed'
    },
    {
        id: 1823,
        ru: 'противоположный',
        en: 'opposite'
    },
    {
        id: 1824,
        ru: 'оппозиция',
        en: 'opposition'
    },
    {
        id: 1825,
        ru: 'вариант',
        en: 'option'
    },
    {
        id: 1826,
        ru: 'или',
        en: 'or'
    },
    {
        id: 1827,
        ru: 'апельсин',
        en: 'orange'
    },
    {
        id: 1828,
        ru: 'заказ',
        en: 'order'
    },
    {
        id: 1829,
        ru: 'обычный',
        en: 'ordinary'
    },
    {
        id: 1830,
        ru: 'орган',
        en: 'organ'
    },
    {
        id: 1831,
        ru: 'организация',
        en: 'organization'
    },
    {
        id: 1832,
        ru: 'организовать',
        en: 'organize'
    },
    {
        id: 1833,
        ru: 'организованный',
        en: 'organized'
    },
    {
        id: 1834,
        ru: 'организатор',
        en: 'organizer'
    },
    {
        id: 1835,
        ru: 'источник',
        en: 'origin'
    },
    {
        id: 1836,
        ru: 'оригинальный',
        en: 'original'
    },
    {
        id: 1837,
        ru: 'изначально',
        en: 'originally'
    },
    {
        id: 1838,
        ru: 'другой',
        en: 'other'
    },
    {
        id: 1839,
        ru: 'в противном случае',
        en: 'otherwise'
    },
    {
        id: 1840,
        ru: 'должен',
        en: 'ought'
    },
    {
        id: 1841,
        ru: 'наш',
        en: 'our'
    },
    {
        id: 1842,
        ru: 'наш',
        en: 'ours'
    },
    {
        id: 1843,
        ru: 'мы сами',
        en: 'ourselves'
    },
    {
        id: 1844,
        ru: 'вне',
        en: 'out'
    },
    {
        id: 1845,
        ru: 'исход',
        en: 'outcome'
    },
    {
        id: 1846,
        ru: 'на открытом воздухе',
        en: 'outdoor'
    },
    {
        id: 1847,
        ru: 'на открытом воздухе',
        en: 'outdoors'
    },
    {
        id: 1848,
        ru: 'внешний',
        en: 'outer'
    },
    {
        id: 1849,
        ru: 'контур',
        en: 'outline'
    },
    {
        id: 1850,
        ru: 'снаружи',
        en: 'outside'
    },
    {
        id: 1851,
        ru: 'А',
        en: 'A'
    },
    {
        id: 1852,
        ru: 'печь',
        en: 'oven'
    },
    {
        id: 1853,
        ru: 'над',
        en: 'over'
    },
    {
        id: 1854,
        ru: 'общий',
        en: 'overall'
    },
    {
        id: 1855,
        ru: 'быть должным',
        en: 'owe'
    },
    {
        id: 1856,
        ru: 'собственный',
        en: 'own'
    },
    {
        id: 1857,
        ru: 'владелец',
        en: 'owner'
    },
    {
        id: 1858,
        ru: 'шаг',
        en: 'pace'
    },
    {
        id: 1859,
        ru: 'пакет',
        en: 'pack'
    },
    {
        id: 1860,
        ru: 'упаковка',
        en: 'package'
    },
    {
        id: 1861,
        ru: 'страница',
        en: 'page'
    },
    {
        id: 1862,
        ru: 'боль',
        en: 'pain'
    },
    {
        id: 1863,
        ru: 'болезненный',
        en: 'painful'
    },
    {
        id: 1864,
        ru: 'краска',
        en: 'paint'
    },
    {
        id: 1865,
        ru: 'художник',
        en: 'painter'
    },
    {
        id: 1866,
        ru: 'рисование',
        en: 'painting'
    },
    {
        id: 1867,
        ru: 'пара',
        en: 'pair'
    },
    {
        id: 1868,
        ru: 'дворец',
        en: 'palace'
    },
    {
        id: 1869,
        ru: 'бледный',
        en: 'pale'
    },
    {
        id: 1870,
        ru: 'кастрюля',
        en: 'pan'
    },
    {
        id: 1871,
        ru: 'панель',
        en: 'panel'
    },
    {
        id: 1872,
        ru: 'брюки',
        en: 'pants'
    },
    {
        id: 1873,
        ru: 'бумага',
        en: 'paper'
    },
    {
        id: 1874,
        ru: 'абзац',
        en: 'paragraph'
    },
    {
        id: 1875,
        ru: 'родитель',
        en: 'parent'
    },
    {
        id: 1876,
        ru: 'парк',
        en: 'park'
    },
    {
        id: 1877,
        ru: 'стоянка',
        en: 'parking'
    },
    {
        id: 1878,
        ru: 'парламент',
        en: 'parliament'
    },
    {
        id: 1879,
        ru: 'часть',
        en: 'part'
    },
    {
        id: 1880,
        ru: 'участник',
        en: 'participant'
    },
    {
        id: 1881,
        ru: 'участвовать',
        en: 'participate'
    },
    {
        id: 1882,
        ru: 'особый',
        en: 'particular'
    },
    {
        id: 1883,
        ru: 'особенно',
        en: 'particularly'
    },
    {
        id: 1884,
        ru: 'частично',
        en: 'partly'
    },
    {
        id: 1885,
        ru: 'партнер',
        en: 'partner'
    },
    {
        id: 1886,
        ru: 'вечеринка',
        en: 'party'
    },
    {
        id: 1887,
        ru: 'проходить',
        en: 'pass'
    },
    {
        id: 1888,
        ru: 'проход',
        en: 'passage'
    },
    {
        id: 1889,
        ru: 'пассажир',
        en: 'passenger'
    },
    {
        id: 1890,
        ru: 'страсть',
        en: 'passion'
    },
    {
        id: 1891,
        ru: 'паспорт',
        en: 'passport'
    },
    {
        id: 1892,
        ru: 'прошлое',
        en: 'past'
    },
    {
        id: 1893,
        ru: 'путь',
        en: 'path'
    },
    {
        id: 1894,
        ru: 'пациент',
        en: 'patient'
    },
    {
        id: 1895,
        ru: 'шаблон',
        en: 'pattern'
    },
    {
        id: 1896,
        ru: 'платить',
        en: 'pay'
    },
    {
        id: 1897,
        ru: 'оплата',
        en: 'payment'
    },
    {
        id: 1898,
        ru: 'мир',
        en: 'peace'
    },
    {
        id: 1899,
        ru: 'мирный',
        en: 'peaceful'
    },
    {
        id: 1900,
        ru: 'ручка',
        en: 'pen'
    },
    {
        id: 1901,
        ru: 'карандаш',
        en: 'pencil'
    },
    {
        id: 1902,
        ru: 'пенни',
        en: 'penny'
    },
    {
        id: 1903,
        ru: 'пенсия',
        en: 'pension'
    },
    {
        id: 1904,
        ru: 'люди',
        en: 'people'
    },
    {
        id: 1905,
        ru: 'перец',
        en: 'pepper'
    },
    {
        id: 1906,
        ru: 'за',
        en: 'per'
    },
    {
        id: 1907,
        ru: 'за',
        en: 'per'
    },
    {
        id: 1908,
        ru: 'процент',
        en: 'percentage'
    },
    {
        id: 1909,
        ru: 'идеальный',
        en: 'perfect'
    },
    {
        id: 1910,
        ru: 'отлично',
        en: 'perfectly'
    },
    {
        id: 1911,
        ru: 'выполнять',
        en: 'perform'
    },
    {
        id: 1912,
        ru: 'производительность',
        en: 'performance'
    },
    {
        id: 1913,
        ru: 'возможно',
        en: 'perhaps'
    },
    {
        id: 1914,
        ru: 'период',
        en: 'period'
    },
    {
        id: 1915,
        ru: 'постоянный',
        en: 'permanent'
    },
    {
        id: 1916,
        ru: 'разрешение',
        en: 'permission'
    },
    {
        id: 1917,
        ru: 'разрешать',
        en: 'permit'
    },
    {
        id: 1918,
        ru: 'человек',
        en: 'person'
    },
    {
        id: 1919,
        ru: 'личный',
        en: 'personal'
    },
    {
        id: 1920,
        ru: 'личность',
        en: 'personality'
    },
    {
        id: 1921,
        ru: 'лично',
        en: 'personally'
    },
    {
        id: 1922,
        ru: 'перспектива',
        en: 'perspective'
    },
    {
        id: 1923,
        ru: 'убеждать',
        en: 'persuade'
    },
    {
        id: 1924,
        ru: 'домашний питомец',
        en: 'pet'
    },
    {
        id: 1925,
        ru: 'бензин',
        en: 'petrol'
    },
    {
        id: 1926,
        ru: 'фаза',
        en: 'phase'
    },
    {
        id: 1927,
        ru: 'явление',
        en: 'phenomenon'
    },
    {
        id: 1928,
        ru: 'философия',
        en: 'philosophy'
    },
    {
        id: 1929,
        ru: 'телефон',
        en: 'phone'
    },
    {
        id: 1930,
        ru: 'фото',
        en: 'photo'
    },
    {
        id: 1931,
        ru: 'фотография',
        en: 'photograph'
    },
    {
        id: 1932,
        ru: 'фотограф',
        en: 'photographer'
    },
    {
        id: 1933,
        ru: 'фотография',
        en: 'photography'
    },
    {
        id: 1934,
        ru: 'фраза',
        en: 'phrase'
    },
    {
        id: 1935,
        ru: 'физический',
        en: 'physical'
    },
    {
        id: 1936,
        ru: 'физика',
        en: 'physics'
    },
    {
        id: 1937,
        ru: 'пианино',
        en: 'piano'
    },
    {
        id: 1938,
        ru: 'выбирать',
        en: 'pick'
    },
    {
        id: 1939,
        ru: 'картина',
        en: 'picture'
    },
    {
        id: 1940,
        ru: 'кусок',
        en: 'piece'
    },
    {
        id: 1941,
        ru: 'свинья',
        en: 'pig'
    },
    {
        id: 1942,
        ru: 'куча',
        en: 'pile'
    },
    {
        id: 1943,
        ru: 'пилот',
        en: 'pilot'
    },
    {
        id: 1944,
        ru: 'приколоть',
        en: 'pin'
    },
    {
        id: 1945,
        ru: 'розовый',
        en: 'pink'
    },
    {
        id: 1946,
        ru: 'трубка',
        en: 'pipe'
    },
    {
        id: 1947,
        ru: 'подача',
        en: 'pitch'
    },
    {
        id: 1948,
        ru: 'место',
        en: 'place'
    },
    {
        id: 1949,
        ru: 'простой',
        en: 'plain'
    },
    {
        id: 1950,
        ru: 'план',
        en: 'plan'
    },
    {
        id: 1951,
        ru: 'самолет',
        en: 'plane'
    },
    {
        id: 1952,
        ru: 'планета',
        en: 'planet'
    },
    {
        id: 1953,
        ru: 'планирование',
        en: 'planning'
    },
    {
        id: 1954,
        ru: 'растение',
        en: 'plant'
    },
    {
        id: 1955,
        ru: 'пластик',
        en: 'plastic'
    },
    {
        id: 1956,
        ru: 'тарелка',
        en: 'plate'
    },
    {
        id: 1957,
        ru: 'платформа',
        en: 'platform'
    },
    {
        id: 1958,
        ru: 'играть',
        en: 'play'
    },
    {
        id: 1959,
        ru: 'игрок',
        en: 'player'
    },
    {
        id: 1960,
        ru: 'приятный',
        en: 'pleasant'
    },
    {
        id: 1961,
        ru: 'пожалуйста',
        en: 'please'
    },
    {
        id: 1962,
        ru: 'довольный',
        en: 'pleased'
    },
    {
        id: 1963,
        ru: 'удовольствие',
        en: 'pleasure'
    },
    {
        id: 1964,
        ru: 'множество',
        en: 'plenty'
    },
    {
        id: 1965,
        ru: 'сюжет',
        en: 'plot'
    },
    {
        id: 1966,
        ru: 'плюс',
        en: 'plus'
    },
    {
        id: 1967,
        ru: 'карман',
        en: 'pocket'
    },
    {
        id: 1968,
        ru: 'стихотворение',
        en: 'poem'
    },
    {
        id: 1969,
        ru: 'поэт',
        en: 'poet'
    },
    {
        id: 1970,
        ru: 'поэзия',
        en: 'poetry'
    },
    {
        id: 1971,
        ru: 'точка',
        en: 'point'
    },
    {
        id: 1972,
        ru: 'заостренный',
        en: 'pointed'
    },
    {
        id: 1973,
        ru: 'яд',
        en: 'poison'
    },
    {
        id: 1974,
        ru: 'ядовитый',
        en: 'poisonous'
    },
    {
        id: 1975,
        ru: 'полиция',
        en: 'police'
    },
    {
        id: 1976,
        ru: 'полицейский',
        en: 'policeman'
    },
    {
        id: 1977,
        ru: 'политика',
        en: 'policy'
    },
    {
        id: 1978,
        ru: 'вежливый',
        en: 'polite'
    },
    {
        id: 1979,
        ru: 'политический',
        en: 'political'
    },
    {
        id: 1980,
        ru: 'политик',
        en: 'politician'
    },
    {
        id: 1981,
        ru: 'политика',
        en: 'politics'
    },
    {
        id: 1982,
        ru: 'загрязнение',
        en: 'pollution'
    },
    {
        id: 1983,
        ru: 'бассейн',
        en: 'pool'
    },
    {
        id: 1984,
        ru: 'бедный',
        en: 'poor'
    },
    {
        id: 1985,
        ru: 'поп',
        en: 'pop'
    },
    {
        id: 1986,
        ru: 'популярный',
        en: 'popular'
    },
    {
        id: 1987,
        ru: 'популярность',
        en: 'popularity'
    },
    {
        id: 1988,
        ru: 'население',
        en: 'population'
    },
    {
        id: 1989,
        ru: 'порт',
        en: 'port'
    },
    {
        id: 1990,
        ru: 'портрет',
        en: 'portrait'
    },
    {
        id: 1991,
        ru: 'поза',
        en: 'pose'
    },
    {
        id: 1992,
        ru: 'позиция',
        en: 'position'
    },
    {
        id: 1993,
        ru: 'положительный',
        en: 'positive'
    },
    {
        id: 1994,
        ru: 'владеть',
        en: 'possess'
    },
    {
        id: 1995,
        ru: 'владение',
        en: 'possession'
    },
    {
        id: 1996,
        ru: 'возможность',
        en: 'possibility'
    },
    {
        id: 1997,
        ru: 'возможный',
        en: 'possible'
    },
    {
        id: 1998,
        ru: 'возможно',
        en: 'possibly'
    },
    {
        id: 1999,
        ru: 'почта',
        en: 'post'
    },
    {
        id: 2000,
        ru: 'постер',
        en: 'poster'
    },
    {
        id: 2001,
        ru: 'горшок',
        en: 'pot'
    },
    {
        id: 2002,
        ru: 'картофель',
        en: 'potato'
    },
    {
        id: 2003,
        ru: 'потенциал',
        en: 'potential'
    },
    {
        id: 2004,
        ru: 'фунт',
        en: 'pound'
    },
    {
        id: 2005,
        ru: 'налить',
        en: 'pour'
    },
    {
        id: 2006,
        ru: 'бедность',
        en: 'poverty'
    },
    {
        id: 2007,
        ru: 'пудра',
        en: 'powder'
    },
    {
        id: 2008,
        ru: 'власть',
        en: 'power'
    },
    {
        id: 2009,
        ru: 'мощный',
        en: 'powerful'
    },
    {
        id: 2010,
        ru: 'практичный',
        en: 'practical'
    },
    {
        id: 2011,
        ru: 'упражняться',
        en: 'practice'
    },
    {
        id: 2012,
        ru: 'упражняться',
        en: 'practise'
    },
    {
        id: 2013,
        ru: 'хвалить',
        en: 'praise'
    },
    {
        id: 2014,
        ru: 'молиться',
        en: 'pray'
    },
    {
        id: 2015,
        ru: 'молитва',
        en: 'prayer'
    },
    {
        id: 2016,
        ru: 'предсказывать',
        en: 'predict'
    },
    {
        id: 2017,
        ru: 'прогноз',
        en: 'prediction'
    },
    {
        id: 2018,
        ru: 'предпочитать',
        en: 'prefer'
    },
    {
        id: 2019,
        ru: 'беременная',
        en: 'pregnant'
    },
    {
        id: 2020,
        ru: 'подготовка',
        en: 'preparation'
    },
    {
        id: 2021,
        ru: 'подготовить',
        en: 'prepare'
    },
    {
        id: 2022,
        ru: 'готовый',
        en: 'prepared'
    },
    {
        id: 2023,
        ru: 'присутствие',
        en: 'presence'
    },
    {
        id: 2024,
        ru: 'подарок',
        en: 'present'
    },
    {
        id: 2025,
        ru: 'презентация',
        en: 'presentation'
    },
    {
        id: 2026,
        ru: 'сохранять',
        en: 'preserve'
    },
    {
        id: 2027,
        ru: 'президент',
        en: 'president'
    },
    {
        id: 2028,
        ru: 'нажимать',
        en: 'press'
    },
    {
        id: 2029,
        ru: 'давление',
        en: 'pressure'
    },
    {
        id: 2030,
        ru: 'притворяться',
        en: 'pretend'
    },
    {
        id: 2031,
        ru: 'симпатичный',
        en: 'pretty'
    },
    {
        id: 2032,
        ru: 'предотвращать',
        en: 'prevent'
    },
    {
        id: 2033,
        ru: 'предыдущий',
        en: 'previous'
    },
    {
        id: 2034,
        ru: 'ранее',
        en: 'previously'
    },
    {
        id: 2035,
        ru: 'цена',
        en: 'price'
    },
    {
        id: 2036,
        ru: 'священник',
        en: 'priest'
    },
    {
        id: 2037,
        ru: 'начальный',
        en: 'primary'
    },
    {
        id: 2038,
        ru: 'основной',
        en: 'prime'
    },
    {
        id: 2039,
        ru: 'принц',
        en: 'prince'
    },
    {
        id: 2040,
        ru: 'принцесса',
        en: 'princess'
    },
    {
        id: 2041,
        ru: 'принцип',
        en: 'principle'
    },
    {
        id: 2042,
        ru: 'печать',
        en: 'print'
    },
    {
        id: 2043,
        ru: 'принтер',
        en: 'printer'
    },
    {
        id: 2044,
        ru: 'печать',
        en: 'printing'
    },
    {
        id: 2045,
        ru: 'приоритет',
        en: 'priority'
    },
    {
        id: 2046,
        ru: 'тюрьма',
        en: 'prison'
    },
    {
        id: 2047,
        ru: 'заключенный',
        en: 'prisoner'
    },
    {
        id: 2048,
        ru: 'конфиденциальность',
        en: 'privacy'
    },
    {
        id: 2049,
        ru: 'частный',
        en: 'private'
    },
    {
        id: 2050,
        ru: 'приз',
        en: 'prize'
    },
    {
        id: 2051,
        ru: 'вероятно',
        en: 'probably'
    },
    {
        id: 2052,
        ru: 'проблема',
        en: 'problem'
    },
    {
        id: 2053,
        ru: 'процедура',
        en: 'procedure'
    },
    {
        id: 2054,
        ru: 'процесс',
        en: 'process'
    },
    {
        id: 2055,
        ru: 'производить',
        en: 'produce'
    },
    {
        id: 2056,
        ru: 'производитель',
        en: 'producer'
    },
    {
        id: 2057,
        ru: 'продукт',
        en: 'product'
    },
    {
        id: 2058,
        ru: 'производство',
        en: 'production'
    },
    {
        id: 2059,
        ru: 'профессия',
        en: 'profession'
    },
    {
        id: 2060,
        ru: 'профессиональный',
        en: 'professional'
    },
    {
        id: 2061,
        ru: 'профессор',
        en: 'professor'
    },
    {
        id: 2062,
        ru: 'профиль',
        en: 'profile'
    },
    {
        id: 2063,
        ru: 'выгода',
        en: 'profit'
    },
    {
        id: 2064,
        ru: 'программа',
        en: 'program'
    },
    {
        id: 2065,
        ru: 'программа',
        en: 'programme'
    },
    {
        id: 2066,
        ru: 'прогресс',
        en: 'progress'
    },
    {
        id: 2067,
        ru: 'проект',
        en: 'project'
    },
    {
        id: 2068,
        ru: 'обещать',
        en: 'promise'
    },
    {
        id: 2069,
        ru: 'продвигать',
        en: 'promote'
    },
    {
        id: 2070,
        ru: 'произносить',
        en: 'pronounce'
    },
    {
        id: 2071,
        ru: 'доказательство',
        en: 'proof'
    },
    {
        id: 2072,
        ru: 'правильный',
        en: 'proper'
    },
    {
        id: 2073,
        ru: 'правильно',
        en: 'properly'
    },
    {
        id: 2074,
        ru: 'свойство',
        en: 'property'
    },
    {
        id: 2075,
        ru: 'предложение',
        en: 'proposal'
    },
    {
        id: 2076,
        ru: 'предложить',
        en: 'propose'
    },
    {
        id: 2077,
        ru: 'перспектива',
        en: 'prospect'
    },
    {
        id: 2078,
        ru: 'защищать',
        en: 'protect'
    },
    {
        id: 2079,
        ru: 'защита',
        en: 'protection'
    },
    {
        id: 2080,
        ru: 'протест',
        en: 'protest'
    },
    {
        id: 2081,
        ru: 'гордый',
        en: 'proud'
    },
    {
        id: 2082,
        ru: 'доказывать',
        en: 'prove'
    },
    {
        id: 2083,
        ru: 'предоставлять',
        en: 'provide'
    },
    {
        id: 2084,
        ru: 'психолог',
        en: 'psychologist'
    },
    {
        id: 2085,
        ru: 'психология',
        en: 'psychology'
    },
    {
        id: 2086,
        ru: 'паб',
        en: 'pub'
    },
    {
        id: 2087,
        ru: 'публичный',
        en: 'public'
    },
    {
        id: 2088,
        ru: 'публикация',
        en: 'publication'
    },
    {
        id: 2089,
        ru: 'публиковать',
        en: 'publish'
    },
    {
        id: 2090,
        ru: 'тянуть',
        en: 'pull'
    },
    {
        id: 2091,
        ru: 'наказывать',
        en: 'punish'
    },
    {
        id: 2092,
        ru: 'наказание',
        en: 'punishment'
    },
    {
        id: 2093,
        ru: 'ученик',
        en: 'pupil'
    },
    {
        id: 2094,
        ru: 'покупка',
        en: 'purchase'
    },
    {
        id: 2095,
        ru: 'чистый',
        en: 'pure'
    },
    {
        id: 2096,
        ru: 'фиолетовый',
        en: 'purple'
    },
    {
        id: 2097,
        ru: 'цель',
        en: 'purpose'
    },
    {
        id: 2098,
        ru: 'преследовать',
        en: 'pursue'
    },
    {
        id: 2099,
        ru: 'толкать',
        en: 'push'
    },
    {
        id: 2100,
        ru: 'помещать',
        en: 'put'
    },
    {
        id: 2101,
        ru: 'квалификация',
        en: 'qualification'
    },
    {
        id: 2102,
        ru: 'квалифицированный',
        en: 'qualified'
    },
    {
        id: 2103,
        ru: 'квалифицироваться',
        en: 'qualify'
    },
    {
        id: 2104,
        ru: 'качество',
        en: 'quality'
    },
    {
        id: 2105,
        ru: 'количество',
        en: 'quantity'
    },
    {
        id: 2106,
        ru: 'четверть',
        en: 'quarter'
    },
    {
        id: 2107,
        ru: 'королева',
        en: 'queen'
    },
    {
        id: 2108,
        ru: 'вопрос',
        en: 'question'
    },
    {
        id: 2109,
        ru: 'очередь',
        en: 'queue'
    },
    {
        id: 2110,
        ru: 'быстрый',
        en: 'quick'
    },
    {
        id: 2111,
        ru: 'быстро',
        en: 'quickly'
    },
    {
        id: 2112,
        ru: 'тихий',
        en: 'quiet'
    },
    {
        id: 2113,
        ru: 'тихо',
        en: 'quietly'
    },
    {
        id: 2114,
        ru: 'покидать',
        en: 'quit'
    },
    {
        id: 2115,
        ru: 'довольно',
        en: 'quite'
    },
    {
        id: 2116,
        ru: 'цитата',
        en: 'quotation'
    },
    {
        id: 2117,
        ru: 'цитировать',
        en: 'quote'
    },
    {
        id: 2118,
        ru: 'раса',
        en: 'race'
    },
    {
        id: 2119,
        ru: 'раса',
        en: 'race'
    },
    {
        id: 2120,
        ru: 'гонки',
        en: 'racing'
    },
    {
        id: 2121,
        ru: 'радио',
        en: 'radio'
    },
    {
        id: 2122,
        ru: 'железная дорога',
        en: 'railway'
    },
    {
        id: 2123,
        ru: 'дождь',
        en: 'rain'
    },
    {
        id: 2124,
        ru: 'поднимать',
        en: 'raise'
    },
    {
        id: 2125,
        ru: 'диапазон',
        en: 'range'
    },
    {
        id: 2126,
        ru: 'классифицировать',
        en: 'rank'
    },
    {
        id: 2127,
        ru: 'стремительный',
        en: 'rapid'
    },
    {
        id: 2128,
        ru: 'быстро',
        en: 'rapidly'
    },
    {
        id: 2129,
        ru: 'редкий',
        en: 'rare'
    },
    {
        id: 2130,
        ru: 'редко',
        en: 'rarely'
    },
    {
        id: 2131,
        ru: 'ставка',
        en: 'rate'
    },
    {
        id: 2132,
        ru: 'скорее',
        en: 'rather'
    },
    {
        id: 2133,
        ru: 'сырой',
        en: 'raw'
    },
    {
        id: 2134,
        ru: 'достигать',
        en: 'reach'
    },
    {
        id: 2135,
        ru: 'реагировать',
        en: 'react'
    },
    {
        id: 2136,
        ru: 'реакция',
        en: 'reaction'
    },
    {
        id: 2137,
        ru: 'читать',
        en: 'read'
    },
    {
        id: 2138,
        ru: 'читатель',
        en: 'reader'
    },
    {
        id: 2139,
        ru: 'чтение',
        en: 'reading'
    },
    {
        id: 2140,
        ru: 'готовый',
        en: 'ready'
    },
    {
        id: 2141,
        ru: 'настоящий',
        en: 'real'
    },
    {
        id: 2142,
        ru: 'реалистичный',
        en: 'realistic'
    },
    {
        id: 2143,
        ru: 'реальность',
        en: 'reality'
    },
    {
        id: 2144,
        ru: 'понимать',
        en: 'realize'
    },
    {
        id: 2145,
        ru: 'Действительно',
        en: 'really'
    },
    {
        id: 2146,
        ru: 'причина',
        en: 'reason'
    },
    {
        id: 2147,
        ru: 'разумный',
        en: 'reasonable'
    },
    {
        id: 2148,
        ru: 'отзывать',
        en: 'recall'
    },
    {
        id: 2149,
        ru: 'квитанция',
        en: 'receipt'
    },
    {
        id: 2150,
        ru: 'получать',
        en: 'receive'
    },
    {
        id: 2151,
        ru: 'недавний',
        en: 'recent'
    },
    {
        id: 2152,
        ru: 'недавно',
        en: 'recently'
    },
    {
        id: 2153,
        ru: 'прием',
        en: 'reception'
    },
    {
        id: 2154,
        ru: 'рецепт',
        en: 'recipe'
    },
    {
        id: 2155,
        ru: 'распознавать',
        en: 'recognize'
    },
    {
        id: 2156,
        ru: 'рекомендовать',
        en: 'recommend'
    },
    {
        id: 2157,
        ru: 'рекомендация',
        en: 'recommendation'
    },
    {
        id: 2158,
        ru: 'записывать',
        en: 'record'
    },
    {
        id: 2159,
        ru: 'запись',
        en: 'recording'
    },
    {
        id: 2160,
        ru: 'восстанавливаться',
        en: 'recover'
    },
    {
        id: 2161,
        ru: 'перерабатывать',
        en: 'recycle'
    },
    {
        id: 2162,
        ru: 'красный',
        en: 'red'
    },
    {
        id: 2163,
        ru: 'уменьшать',
        en: 'reduce'
    },
    {
        id: 2164,
        ru: 'снижение',
        en: 'reduction'
    },
    {
        id: 2165,
        ru: 'ссылаться',
        en: 'refer'
    },
    {
        id: 2166,
        ru: 'ссылка',
        en: 'reference'
    },
    {
        id: 2167,
        ru: 'отражать',
        en: 'reflect'
    },
    {
        id: 2168,
        ru: 'мусор',
        en: 'refuse'
    },
    {
        id: 2169,
        ru: 'внимание',
        en: 'regard'
    },
    {
        id: 2170,
        ru: 'область',
        en: 'region'
    },
    {
        id: 2171,
        ru: 'региональный',
        en: 'regional'
    },
    {
        id: 2172,
        ru: 'зарегистрироваться',
        en: 'register'
    },
    {
        id: 2173,
        ru: 'сожалеть',
        en: 'regret'
    },
    {
        id: 2174,
        ru: 'обычный',
        en: 'regular'
    },
    {
        id: 2175,
        ru: 'регулярно',
        en: 'regularly'
    },
    {
        id: 2176,
        ru: 'регулирование',
        en: 'regulation'
    },
    {
        id: 2177,
        ru: 'отклонять',
        en: 'reject'
    },
    {
        id: 2178,
        ru: 'иметь отношение к',
        en: 'relate'
    },
    {
        id: 2179,
        ru: 'связанный',
        en: 'related'
    },
    {
        id: 2180,
        ru: 'связь',
        en: 'relation'
    },
    {
        id: 2181,
        ru: 'отношение',
        en: 'relationship'
    },
    {
        id: 2182,
        ru: 'родственник',
        en: 'relative'
    },
    {
        id: 2183,
        ru: 'относительно',
        en: 'relatively'
    },
    {
        id: 2184,
        ru: 'расслабляться',
        en: 'relax'
    },
    {
        id: 2185,
        ru: 'расслабленный',
        en: 'relaxed'
    },
    {
        id: 2186,
        ru: 'расслабляющий',
        en: 'relaxing'
    },
    {
        id: 2187,
        ru: 'выпускать',
        en: 'release'
    },
    {
        id: 2188,
        ru: 'соответствующий',
        en: 'relevant'
    },
    {
        id: 2189,
        ru: 'надежный',
        en: 'reliable'
    },
    {
        id: 2190,
        ru: 'облегчение',
        en: 'relief'
    },
    {
        id: 2191,
        ru: 'религия',
        en: 'religion'
    },
    {
        id: 2192,
        ru: 'религиозный',
        en: 'religious'
    },
    {
        id: 2193,
        ru: 'полагаться',
        en: 'rely'
    },
    {
        id: 2194,
        ru: 'оставаться',
        en: 'remain'
    },
    {
        id: 2195,
        ru: 'замечание',
        en: 'remark'
    },
    {
        id: 2196,
        ru: 'помнить',
        en: 'remember'
    },
    {
        id: 2197,
        ru: 'напоминать',
        en: 'remind'
    },
    {
        id: 2198,
        ru: 'удаленный',
        en: 'remote'
    },
    {
        id: 2199,
        ru: 'удалять',
        en: 'remove'
    },
    {
        id: 2200,
        ru: 'арендовать',
        en: 'rent'
    },
    {
        id: 2201,
        ru: 'ремонт',
        en: 'repair'
    },
    {
        id: 2202,
        ru: 'повторить',
        en: 'repeat'
    },
    {
        id: 2203,
        ru: 'повторный',
        en: 'repeated'
    },
    {
        id: 2204,
        ru: 'заменять',
        en: 'replace'
    },
    {
        id: 2205,
        ru: 'отвечать',
        en: 'reply'
    },
    {
        id: 2206,
        ru: 'отчет',
        en: 'report'
    },
    {
        id: 2207,
        ru: 'репортер',
        en: 'reporter'
    },
    {
        id: 2208,
        ru: 'представлять',
        en: 'represent'
    },
    {
        id: 2209,
        ru: 'представитель',
        en: 'representative'
    },
    {
        id: 2210,
        ru: 'репутация',
        en: 'reputation'
    },
    {
        id: 2211,
        ru: 'запрос',
        en: 'request'
    },
    {
        id: 2212,
        ru: 'требовать',
        en: 'require'
    },
    {
        id: 2213,
        ru: 'требование',
        en: 'requirement'
    },
    {
        id: 2214,
        ru: 'спасать',
        en: 'rescue'
    },
    {
        id: 2215,
        ru: 'исследовать',
        en: 'research'
    },
    {
        id: 2216,
        ru: 'исследователь',
        en: 'researcher'
    },
    {
        id: 2217,
        ru: 'бронирование',
        en: 'reservation'
    },
    {
        id: 2218,
        ru: 'бронировать',
        en: 'reserve'
    },
    {
        id: 2219,
        ru: 'резидент',
        en: 'resident'
    },
    {
        id: 2220,
        ru: 'сопротивляться',
        en: 'resist'
    },
    {
        id: 2221,
        ru: 'решать',
        en: 'resolve'
    },
    {
        id: 2222,
        ru: 'прибегнуть',
        en: 'resort'
    },
    {
        id: 2223,
        ru: 'ресурс',
        en: 'resource'
    },
    {
        id: 2224,
        ru: 'уважать',
        en: 'respect'
    },
    {
        id: 2225,
        ru: 'отвечать',
        en: 'respond'
    },
    {
        id: 2226,
        ru: 'ответ',
        en: 'response'
    },
    {
        id: 2227,
        ru: 'ответственность',
        en: 'responsibility'
    },
    {
        id: 2228,
        ru: 'ответственный',
        en: 'responsible'
    },
    {
        id: 2229,
        ru: 'отдых',
        en: 'rest'
    },
    {
        id: 2230,
        ru: 'отдых',
        en: 'rest'
    },
    {
        id: 2231,
        ru: 'ресторан',
        en: 'restaurant'
    },
    {
        id: 2232,
        ru: 'результат',
        en: 'result'
    },
    {
        id: 2233,
        ru: 'удерживать',
        en: 'retain'
    },
    {
        id: 2234,
        ru: 'уходить в отставку',
        en: 'retire'
    },
    {
        id: 2235,
        ru: 'ушедший на пенсию',
        en: 'retired'
    },
    {
        id: 2236,
        ru: 'возвращаться',
        en: 'return'
    },
    {
        id: 2237,
        ru: 'раскрывать',
        en: 'reveal'
    },
    {
        id: 2238,
        ru: 'обзор',
        en: 'review'
    },
    {
        id: 2239,
        ru: 'исправлять',
        en: 'revise'
    },
    {
        id: 2240,
        ru: 'революция',
        en: 'revolution'
    },
    {
        id: 2241,
        ru: 'награда',
        en: 'reward'
    },
    {
        id: 2242,
        ru: 'ритм',
        en: 'rhythm'
    },
    {
        id: 2243,
        ru: 'рис',
        en: 'rice'
    },
    {
        id: 2244,
        ru: 'богатый',
        en: 'rich'
    },
    {
        id: 2245,
        ru: 'избавлять',
        en: 'rid'
    },
    {
        id: 2246,
        ru: 'поездка',
        en: 'ride'
    },
    {
        id: 2247,
        ru: 'верно',
        en: 'right'
    },
    {
        id: 2248,
        ru: 'кольцо',
        en: 'ring'
    },
    {
        id: 2249,
        ru: 'кольцо',
        en: 'ring'
    },
    {
        id: 2250,
        ru: 'рост',
        en: 'rise'
    },
    {
        id: 2251,
        ru: 'риск',
        en: 'risk'
    },
    {
        id: 2252,
        ru: 'река',
        en: 'river'
    },
    {
        id: 2253,
        ru: 'дорога',
        en: 'road'
    },
    {
        id: 2254,
        ru: 'робот',
        en: 'robot'
    },
    {
        id: 2255,
        ru: 'камень',
        en: 'rock'
    },
    {
        id: 2256,
        ru: 'камень',
        en: 'rock'
    },
    {
        id: 2257,
        ru: 'роль',
        en: 'role'
    },
    {
        id: 2258,
        ru: 'рулон',
        en: 'roll'
    },
    {
        id: 2259,
        ru: 'романтический',
        en: 'romantic'
    },
    {
        id: 2260,
        ru: 'крыша',
        en: 'roof'
    },
    {
        id: 2261,
        ru: 'комната',
        en: 'room'
    },
    {
        id: 2262,
        ru: 'корень',
        en: 'root'
    },
    {
        id: 2263,
        ru: 'веревка',
        en: 'rope'
    },
    {
        id: 2264,
        ru: 'грубый',
        en: 'rough'
    },
    {
        id: 2265,
        ru: 'круглый',
        en: 'round'
    },
    {
        id: 2266,
        ru: 'маршрут',
        en: 'route'
    },
    {
        id: 2267,
        ru: 'рутина',
        en: 'routine'
    },
    {
        id: 2268,
        ru: 'ряд',
        en: 'row'
    },
    {
        id: 2269,
        ru: 'королевский',
        en: 'royal'
    },
    {
        id: 2270,
        ru: 'руб',
        en: 'rub'
    },
    {
        id: 2271,
        ru: 'резина',
        en: 'rubber'
    },
    {
        id: 2272,
        ru: 'мусор',
        en: 'rubbish'
    },
    {
        id: 2273,
        ru: 'грубый',
        en: 'rude'
    },
    {
        id: 2274,
        ru: 'регби',
        en: 'rugby'
    },
    {
        id: 2275,
        ru: 'правило',
        en: 'rule'
    },
    {
        id: 2276,
        ru: 'бегать',
        en: 'run'
    },
    {
        id: 2277,
        ru: 'бегун',
        en: 'runner'
    },
    {
        id: 2278,
        ru: 'бег',
        en: 'running'
    },
    {
        id: 2279,
        ru: 'деревенский',
        en: 'rural'
    },
    {
        id: 2280,
        ru: 'торопиться',
        en: 'rush'
    },
    {
        id: 2281,
        ru: 'грустно',
        en: 'sad'
    },
    {
        id: 2282,
        ru: 'грустно',
        en: 'sadly'
    },
    {
        id: 2283,
        ru: 'безопасный',
        en: 'safe'
    },
    {
        id: 2284,
        ru: 'безопасность',
        en: 'safety'
    },
    {
        id: 2285,
        ru: 'плыть',
        en: 'sail'
    },
    {
        id: 2286,
        ru: 'парусный спорт',
        en: 'sailing'
    },
    {
        id: 2287,
        ru: 'моряк',
        en: 'sailor'
    },
    {
        id: 2288,
        ru: 'салат',
        en: 'salad'
    },
    {
        id: 2289,
        ru: 'зарплата',
        en: 'salary'
    },
    {
        id: 2290,
        ru: 'распродажа',
        en: 'sale'
    },
    {
        id: 2291,
        ru: 'соль',
        en: 'salt'
    },
    {
        id: 2292,
        ru: 'такой же',
        en: 'same'
    },
    {
        id: 2293,
        ru: 'образец',
        en: 'sample'
    },
    {
        id: 2294,
        ru: 'песок',
        en: 'sand'
    },
    {
        id: 2295,
        ru: 'сэндвич',
        en: 'sandwich'
    },
    {
        id: 2296,
        ru: 'спутник',
        en: 'satellite'
    },
    {
        id: 2297,
        ru: 'удовлетворен',
        en: 'satisfied'
    },
    {
        id: 2298,
        ru: 'удовлетворять',
        en: 'satisfy'
    },
    {
        id: 2299,
        ru: 'Суббота',
        en: 'Saturday'
    },
    {
        id: 2300,
        ru: 'соус',
        en: 'sauce'
    },
    {
        id: 2301,
        ru: 'сохранять',
        en: 'save'
    },
    {
        id: 2302,
        ru: 'экономия',
        en: 'saving'
    },
    {
        id: 2303,
        ru: 'сказать',
        en: 'say'
    },
    {
        id: 2304,
        ru: 'шкала',
        en: 'scale'
    },
    {
        id: 2305,
        ru: 'сканировать',
        en: 'scan'
    },
    {
        id: 2306,
        ru: 'испуганный',
        en: 'scared'
    },
    {
        id: 2307,
        ru: 'страшный',
        en: 'scary'
    },
    {
        id: 2308,
        ru: 'сцена',
        en: 'scene'
    },
    {
        id: 2309,
        ru: 'расписание',
        en: 'schedule'
    },
    {
        id: 2310,
        ru: 'схема',
        en: 'scheme'
    },
    {
        id: 2311,
        ru: 'школа',
        en: 'school'
    },
    {
        id: 2312,
        ru: 'наука',
        en: 'science'
    },
    {
        id: 2313,
        ru: 'научный',
        en: 'scientific'
    },
    {
        id: 2314,
        ru: 'ученый',
        en: 'scientist'
    },
    {
        id: 2315,
        ru: 'счет',
        en: 'score'
    },
    {
        id: 2316,
        ru: 'крик',
        en: 'scream'
    },
    {
        id: 2317,
        ru: 'экран',
        en: 'screen'
    },
    {
        id: 2318,
        ru: 'сценарий',
        en: 'script'
    },
    {
        id: 2319,
        ru: 'скульптура',
        en: 'sculpture'
    },
    {
        id: 2320,
        ru: 'море',
        en: 'sea'
    },
    {
        id: 2321,
        ru: 'поиск',
        en: 'search'
    },
    {
        id: 2322,
        ru: 'сезон',
        en: 'season'
    },
    {
        id: 2323,
        ru: 'сиденье',
        en: 'seat'
    },
    {
        id: 2324,
        ru: 'второй',
        en: 'second'
    },
    {
        id: 2325,
        ru: 'число',
        en: 'number'
    },
    {
        id: 2326,
        ru: 'второй',
        en: 'second'
    },
    {
        id: 2327,
        ru: 'вторичный',
        en: 'secondary'
    },
    {
        id: 2328,
        ru: 'во-вторых',
        en: 'secondly'
    },
    {
        id: 2329,
        ru: 'секрет',
        en: 'secret'
    },
    {
        id: 2330,
        ru: 'секретарь',
        en: 'secretary'
    },
    {
        id: 2331,
        ru: 'раздел',
        en: 'section'
    },
    {
        id: 2332,
        ru: 'сектор',
        en: 'sector'
    },
    {
        id: 2333,
        ru: 'безопасный',
        en: 'secure'
    },
    {
        id: 2334,
        ru: 'безопасность',
        en: 'security'
    },
    {
        id: 2335,
        ru: 'видеть',
        en: 'see'
    },
    {
        id: 2336,
        ru: 'семя',
        en: 'seed'
    },
    {
        id: 2337,
        ru: 'искать',
        en: 'seek'
    },
    {
        id: 2338,
        ru: 'казаться',
        en: 'seem'
    },
    {
        id: 2339,
        ru: 'выбирать',
        en: 'select'
    },
    {
        id: 2340,
        ru: 'выбор',
        en: 'selection'
    },
    {
        id: 2341,
        ru: 'себя',
        en: 'self'
    },
    {
        id: 2342,
        ru: 'продавать',
        en: 'sell'
    },
    {
        id: 2343,
        ru: 'отправлять',
        en: 'send'
    },
    {
        id: 2344,
        ru: 'старший',
        en: 'senior'
    },
    {
        id: 2345,
        ru: 'смысл',
        en: 'sense'
    },
    {
        id: 2346,
        ru: 'разумный',
        en: 'sensible'
    },
    {
        id: 2347,
        ru: 'чувствительный',
        en: 'sensitive'
    },
    {
        id: 2348,
        ru: 'предложение',
        en: 'sentence'
    },
    {
        id: 2349,
        ru: 'отдельный',
        en: 'separate'
    },
    {
        id: 2350,
        ru: 'Сентябрь',
        en: 'September'
    },
    {
        id: 2351,
        ru: 'последовательность',
        en: 'sequence'
    },
    {
        id: 2352,
        ru: 'ряд',
        en: 'series'
    },
    {
        id: 2353,
        ru: 'серьезный',
        en: 'serious'
    },
    {
        id: 2354,
        ru: 'серьезно',
        en: 'seriously'
    },
    {
        id: 2355,
        ru: 'слуга',
        en: 'servant'
    },
    {
        id: 2356,
        ru: 'служить',
        en: 'serve'
    },
    {
        id: 2357,
        ru: 'услуга',
        en: 'service'
    },
    {
        id: 2358,
        ru: 'сессия',
        en: 'session'
    },
    {
        id: 2359,
        ru: 'набор',
        en: 'set'
    },
    {
        id: 2360,
        ru: 'набор',
        en: 'set'
    },
    {
        id: 2361,
        ru: 'параметр',
        en: 'setting'
    },
    {
        id: 2362,
        ru: 'решить',
        en: 'settle'
    },
    {
        id: 2363,
        ru: 'Семь',
        en: 'seven'
    },
    {
        id: 2364,
        ru: 'семнадцать',
        en: 'seventeen'
    },
    {
        id: 2365,
        ru: 'семьдесят',
        en: 'seventy'
    },
    {
        id: 2366,
        ru: 'несколько',
        en: 'several'
    },
    {
        id: 2367,
        ru: 'серьезный',
        en: 'severe'
    },
    {
        id: 2368,
        ru: 'секс',
        en: 'sex'
    },
    {
        id: 2369,
        ru: 'сексуальный',
        en: 'sexual'
    },
    {
        id: 2370,
        ru: 'оттенок',
        en: 'shade'
    },
    {
        id: 2371,
        ru: 'тень',
        en: 'shadow'
    },
    {
        id: 2372,
        ru: 'встряхнуть',
        en: 'shake'
    },
    {
        id: 2373,
        ru: 'должен',
        en: 'shall'
    },
    {
        id: 2374,
        ru: 'мелкий',
        en: 'shallow'
    },
    {
        id: 2375,
        ru: 'стыд',
        en: 'shame'
    },
    {
        id: 2376,
        ru: 'форма',
        en: 'shape'
    },
    {
        id: 2377,
        ru: 'делиться',
        en: 'share'
    },
    {
        id: 2378,
        ru: 'острый',
        en: 'sharp'
    },
    {
        id: 2379,
        ru: 'она',
        en: 'she'
    },
    {
        id: 2380,
        ru: 'овца',
        en: 'sheep'
    },
    {
        id: 2381,
        ru: 'лист',
        en: 'sheet'
    },
    {
        id: 2382,
        ru: 'полка',
        en: 'shelf'
    },
    {
        id: 2383,
        ru: 'оболочка',
        en: 'shell'
    },
    {
        id: 2384,
        ru: 'приют',
        en: 'shelter'
    },
    {
        id: 2385,
        ru: 'сдвиг',
        en: 'shift'
    },
    {
        id: 2386,
        ru: 'светить',
        en: 'shine'
    },
    {
        id: 2387,
        ru: 'блестящий',
        en: 'shiny'
    },
    {
        id: 2388,
        ru: 'корабль',
        en: 'ship'
    },
    {
        id: 2389,
        ru: 'рубашка',
        en: 'shirt'
    },
    {
        id: 2390,
        ru: 'шок',
        en: 'shock'
    },
    {
        id: 2391,
        ru: 'шокирован',
        en: 'shocked'
    },
    {
        id: 2392,
        ru: 'башмак',
        en: 'shoe'
    },
    {
        id: 2393,
        ru: 'стрелять',
        en: 'shoot'
    },
    {
        id: 2394,
        ru: 'стрельба',
        en: 'shooting'
    },
    {
        id: 2395,
        ru: 'магазин',
        en: 'shop'
    },
    {
        id: 2396,
        ru: 'шоппинг',
        en: 'shopping'
    },
    {
        id: 2397,
        ru: 'короткий',
        en: 'short'
    },
    {
        id: 2398,
        ru: 'выстрелил',
        en: 'shot'
    },
    {
        id: 2399,
        ru: 'должен',
        en: 'should'
    },
    {
        id: 2400,
        ru: 'плечо',
        en: 'shoulder'
    },
    {
        id: 2401,
        ru: 'кричать',
        en: 'shout'
    },
    {
        id: 2402,
        ru: 'показывать',
        en: 'show'
    },
    {
        id: 2403,
        ru: 'душ',
        en: 'shower'
    },
    {
        id: 2404,
        ru: 'закрыть',
        en: 'shut'
    },
    {
        id: 2405,
        ru: 'застенчивый',
        en: 'shy'
    },
    {
        id: 2406,
        ru: 'больной',
        en: 'sick'
    },
    {
        id: 2407,
        ru: 'сторона',
        en: 'side'
    },
    {
        id: 2408,
        ru: 'взгляд',
        en: 'sight'
    },
    {
        id: 2409,
        ru: 'знак',
        en: 'sign'
    },
    {
        id: 2410,
        ru: 'сигнал',
        en: 'signal'
    },
    {
        id: 2411,
        ru: 'значительный',
        en: 'significant'
    },
    {
        id: 2412,
        ru: 'существенно',
        en: 'significantly'
    },
    {
        id: 2413,
        ru: 'тишина',
        en: 'silence'
    },
    {
        id: 2414,
        ru: 'тихий',
        en: 'silent'
    },
    {
        id: 2415,
        ru: 'шелк',
        en: 'silk'
    },
    {
        id: 2416,
        ru: 'глупый',
        en: 'silly'
    },
    {
        id: 2417,
        ru: 'серебро',
        en: 'silver'
    },
    {
        id: 2418,
        ru: 'похожий',
        en: 'similar'
    },
    {
        id: 2419,
        ru: 'сходство',
        en: 'similarity'
    },
    {
        id: 2420,
        ru: 'сходным образом',
        en: 'similarly'
    },
    {
        id: 2421,
        ru: 'простой',
        en: 'simple'
    },
    {
        id: 2422,
        ru: 'просто',
        en: 'simply'
    },
    {
        id: 2423,
        ru: 'с',
        en: 'since'
    },
    {
        id: 2424,
        ru: 'искренний',
        en: 'sincere'
    },
    {
        id: 2425,
        ru: 'петь',
        en: 'sing'
    },
    {
        id: 2426,
        ru: 'певец',
        en: 'singer'
    },
    {
        id: 2427,
        ru: 'пение',
        en: 'singing'
    },
    {
        id: 2428,
        ru: 'одинокий',
        en: 'single'
    },
    {
        id: 2429,
        ru: 'раковина',
        en: 'sink'
    },
    {
        id: 2430,
        ru: 'сэр',
        en: 'sir'
    },
    {
        id: 2431,
        ru: 'сестра',
        en: 'sister'
    },
    {
        id: 2432,
        ru: 'сидеть',
        en: 'sit'
    },
    {
        id: 2433,
        ru: 'сайт',
        en: 'site'
    },
    {
        id: 2434,
        ru: 'ситуация',
        en: 'situation'
    },
    {
        id: 2435,
        ru: 'шесть',
        en: 'six'
    },
    {
        id: 2436,
        ru: 'шестнадцать',
        en: 'sixteen'
    },
    {
        id: 2437,
        ru: 'шестьдесят',
        en: 'sixty'
    },
    {
        id: 2438,
        ru: 'размер',
        en: 'size'
    },
    {
        id: 2439,
        ru: 'лыжи',
        en: 'ski'
    },
    {
        id: 2440,
        ru: 'катание на лыжах',
        en: 'skiing'
    },
    {
        id: 2441,
        ru: 'навык',
        en: 'skill'
    },
    {
        id: 2442,
        ru: 'кожа',
        en: 'skin'
    },
    {
        id: 2443,
        ru: 'юбка',
        en: 'skirt'
    },
    {
        id: 2444,
        ru: 'небо',
        en: 'sky'
    },
    {
        id: 2445,
        ru: 'раб',
        en: 'slave'
    },
    {
        id: 2446,
        ru: 'спать',
        en: 'sleep'
    },
    {
        id: 2447,
        ru: 'ломтик',
        en: 'slice'
    },
    {
        id: 2448,
        ru: 'слайд',
        en: 'slide'
    },
    {
        id: 2449,
        ru: 'небольшой',
        en: 'slight'
    },
    {
        id: 2450,
        ru: 'немного',
        en: 'slightly'
    },
    {
        id: 2451,
        ru: 'соскальзывать',
        en: 'slip'
    },
    {
        id: 2452,
        ru: 'склон',
        en: 'slope'
    },
    {
        id: 2453,
        ru: 'медленный',
        en: 'slow'
    },
    {
        id: 2454,
        ru: 'медленно',
        en: 'slowly'
    },
    {
        id: 2455,
        ru: 'маленький',
        en: 'small'
    },
    {
        id: 2456,
        ru: 'умный',
        en: 'smart'
    },
    {
        id: 2457,
        ru: 'смартфон',
        en: 'smartphone'
    },
    {
        id: 2458,
        ru: 'запах',
        en: 'smell'
    },
    {
        id: 2459,
        ru: 'улыбка',
        en: 'smile'
    },
    {
        id: 2460,
        ru: 'дым',
        en: 'smoke'
    },
    {
        id: 2461,
        ru: 'курение',
        en: 'smoking'
    },
    {
        id: 2462,
        ru: 'гладкий',
        en: 'smooth'
    },
    {
        id: 2463,
        ru: 'змея',
        en: 'snake'
    },
    {
        id: 2464,
        ru: 'снег',
        en: 'snow'
    },
    {
        id: 2465,
        ru: 'так',
        en: 'so'
    },
    {
        id: 2466,
        ru: 'мыло',
        en: 'soap'
    },
    {
        id: 2467,
        ru: 'футбольный',
        en: 'soccer'
    },
    {
        id: 2468,
        ru: 'социальный',
        en: 'social'
    },
    {
        id: 2469,
        ru: 'общество',
        en: 'society'
    },
    {
        id: 2470,
        ru: 'носок',
        en: 'sock'
    },
    {
        id: 2471,
        ru: 'мягкий',
        en: 'soft'
    },
    {
        id: 2472,
        ru: 'программное обеспечение',
        en: 'software'
    },
    {
        id: 2473,
        ru: 'земля',
        en: 'soil'
    },
    {
        id: 2474,
        ru: 'солнечный',
        en: 'solar'
    },
    {
        id: 2475,
        ru: 'солдат',
        en: 'soldier'
    },
    {
        id: 2476,
        ru: 'твердый',
        en: 'solid'
    },
    {
        id: 2477,
        ru: 'решение',
        en: 'solution'
    },
    {
        id: 2478,
        ru: 'решать',
        en: 'solve'
    },
    {
        id: 2479,
        ru: 'некоторый',
        en: 'some'
    },
    {
        id: 2480,
        ru: 'кто-нибудь',
        en: 'somebody'
    },
    {
        id: 2481,
        ru: 'кто-то',
        en: 'someone'
    },
    {
        id: 2482,
        ru: 'что-нибудь',
        en: 'something'
    },
    {
        id: 2483,
        ru: 'иногда',
        en: 'sometimes'
    },
    {
        id: 2484,
        ru: 'несколько',
        en: 'somewhat'
    },
    {
        id: 2485,
        ru: 'где-то',
        en: 'somewhere'
    },
    {
        id: 2486,
        ru: 'сын',
        en: 'son'
    },
    {
        id: 2487,
        ru: 'песня',
        en: 'song'
    },
    {
        id: 2488,
        ru: 'скоро',
        en: 'soon'
    },
    {
        id: 2489,
        ru: 'извини',
        en: 'sorry'
    },
    {
        id: 2490,
        ru: 'сортировать',
        en: 'sort'
    },
    {
        id: 2491,
        ru: 'душа',
        en: 'soul'
    },
    {
        id: 2492,
        ru: 'звук',
        en: 'sound'
    },
    {
        id: 2493,
        ru: 'суп',
        en: 'soup'
    },
    {
        id: 2494,
        ru: 'источник',
        en: 'source'
    },
    {
        id: 2495,
        ru: 'юг',
        en: 'south'
    },
    {
        id: 2496,
        ru: 'южный',
        en: 'southern'
    },
    {
        id: 2497,
        ru: 'космос',
        en: 'space'
    },
    {
        id: 2498,
        ru: 'говорить',
        en: 'speak'
    },
    {
        id: 2499,
        ru: 'спикер',
        en: 'speaker'
    },
    {
        id: 2500,
        ru: 'особенный',
        en: 'special'
    },
    {
        id: 2501,
        ru: 'специалист',
        en: 'specialist'
    },
    {
        id: 2502,
        ru: 'разновидность',
        en: 'species'
    },
    {
        id: 2503,
        ru: 'специфический',
        en: 'specific'
    },
    {
        id: 2504,
        ru: 'конкретно',
        en: 'specifically'
    },
    {
        id: 2505,
        ru: 'речь',
        en: 'speech'
    },
    {
        id: 2506,
        ru: 'скорость',
        en: 'speed'
    },
    {
        id: 2507,
        ru: 'заклинание',
        en: 'spell'
    },
    {
        id: 2508,
        ru: 'написание',
        en: 'spelling'
    },
    {
        id: 2509,
        ru: 'тратить',
        en: 'spend'
    },
    {
        id: 2510,
        ru: 'расходы',
        en: 'spending'
    },
    {
        id: 2511,
        ru: 'пряный',
        en: 'spicy'
    },
    {
        id: 2512,
        ru: 'паук',
        en: 'spider'
    },
    {
        id: 2513,
        ru: 'дух',
        en: 'spirit'
    },
    {
        id: 2514,
        ru: 'духовный',
        en: 'spiritual'
    },
    {
        id: 2515,
        ru: 'расколоть',
        en: 'split'
    },
    {
        id: 2516,
        ru: 'разговорный',
        en: 'spoken'
    },
    {
        id: 2517,
        ru: 'спонсор',
        en: 'sponsor'
    },
    {
        id: 2518,
        ru: 'ложка',
        en: 'spoon'
    },
    {
        id: 2519,
        ru: 'спорт',
        en: 'sport'
    },
    {
        id: 2520,
        ru: 'место',
        en: 'spot'
    },
    {
        id: 2521,
        ru: 'распространение',
        en: 'spread'
    },
    {
        id: 2522,
        ru: 'весна',
        en: 'spring'
    },
    {
        id: 2523,
        ru: 'квадрат',
        en: 'square'
    },
    {
        id: 2524,
        ru: 'стабильный',
        en: 'stable'
    },
    {
        id: 2525,
        ru: 'стадион',
        en: 'stadium'
    },
    {
        id: 2526,
        ru: 'персонал',
        en: 'staff'
    },
    {
        id: 2527,
        ru: 'этап',
        en: 'stage'
    },
    {
        id: 2528,
        ru: 'лестница',
        en: 'stair'
    },
    {
        id: 2529,
        ru: 'штамп',
        en: 'stamp'
    },
    {
        id: 2530,
        ru: 'стоять',
        en: 'stand'
    },
    {
        id: 2531,
        ru: 'стандартный',
        en: 'standard'
    },
    {
        id: 2532,
        ru: 'звезда',
        en: 'star'
    },
    {
        id: 2533,
        ru: 'смотреть',
        en: 'stare'
    },
    {
        id: 2534,
        ru: 'начинать',
        en: 'start'
    },
    {
        id: 2535,
        ru: 'состояние',
        en: 'state'
    },
    {
        id: 2536,
        ru: 'заявление',
        en: 'statement'
    },
    {
        id: 2537,
        ru: 'станция',
        en: 'station'
    },
    {
        id: 2538,
        ru: 'статистика',
        en: 'statistic'
    },
    {
        id: 2539,
        ru: 'статуя',
        en: 'statue'
    },
    {
        id: 2540,
        ru: 'статус',
        en: 'status'
    },
    {
        id: 2541,
        ru: 'оставаться',
        en: 'stay'
    },
    {
        id: 2542,
        ru: 'устойчивый',
        en: 'steady'
    },
    {
        id: 2543,
        ru: 'воровать',
        en: 'steal'
    },
    {
        id: 2544,
        ru: 'сталь',
        en: 'steel'
    },
    {
        id: 2545,
        ru: 'отвесный',
        en: 'steep'
    },
    {
        id: 2546,
        ru: 'шаг',
        en: 'step'
    },
    {
        id: 2547,
        ru: 'палка',
        en: 'stick'
    },
    {
        id: 2548,
        ru: 'палка',
        en: 'stick'
    },
    {
        id: 2549,
        ru: 'липкий',
        en: 'sticky'
    },
    {
        id: 2550,
        ru: 'жесткий',
        en: 'stiff'
    },
    {
        id: 2551,
        ru: 'все еще',
        en: 'still'
    },
    {
        id: 2552,
        ru: 'запас',
        en: 'stock'
    },
    {
        id: 2553,
        ru: 'желудок',
        en: 'stomach'
    },
    {
        id: 2554,
        ru: 'камень',
        en: 'stone'
    },
    {
        id: 2555,
        ru: 'останавливаться',
        en: 'stop'
    },
    {
        id: 2556,
        ru: 'магазин',
        en: 'store'
    },
    {
        id: 2557,
        ru: 'шторм',
        en: 'storm'
    },
    {
        id: 2558,
        ru: 'история',
        en: 'story'
    },
    {
        id: 2559,
        ru: 'прямой',
        en: 'straight'
    },
    {
        id: 2560,
        ru: 'странный',
        en: 'strange'
    },
    {
        id: 2561,
        ru: 'незнакомец',
        en: 'stranger'
    },
    {
        id: 2562,
        ru: 'стратегия',
        en: 'strategy'
    },
    {
        id: 2563,
        ru: 'транслировать',
        en: 'stream'
    },
    {
        id: 2564,
        ru: 'улица',
        en: 'street'
    },
    {
        id: 2565,
        ru: 'сила',
        en: 'strength'
    },
    {
        id: 2566,
        ru: 'стресс',
        en: 'stress'
    },
    {
        id: 2567,
        ru: 'потягиваться',
        en: 'stretch'
    },
    {
        id: 2568,
        ru: 'строгий',
        en: 'strict'
    },
    {
        id: 2569,
        ru: 'ударять',
        en: 'strike'
    },
    {
        id: 2570,
        ru: 'нить',
        en: 'string'
    },
    {
        id: 2571,
        ru: 'сильный',
        en: 'strong'
    },
    {
        id: 2572,
        ru: 'сильно',
        en: 'strongly'
    },
    {
        id: 2573,
        ru: 'структура',
        en: 'structure'
    },
    {
        id: 2574,
        ru: 'борьба',
        en: 'struggle'
    },
    {
        id: 2575,
        ru: 'студент',
        en: 'student'
    },
    {
        id: 2576,
        ru: 'студия',
        en: 'studio'
    },
    {
        id: 2577,
        ru: 'изучать',
        en: 'study'
    },
    {
        id: 2578,
        ru: 'вещи',
        en: 'stuff'
    },
    {
        id: 2579,
        ru: 'глупый',
        en: 'stupid'
    },
    {
        id: 2580,
        ru: 'стиль',
        en: 'style'
    },
    {
        id: 2581,
        ru: 'предмет',
        en: 'subject'
    },
    {
        id: 2582,
        ru: 'представлять на рассмотрение',
        en: 'submit'
    },
    {
        id: 2583,
        ru: 'вещество',
        en: 'substance'
    },
    {
        id: 2584,
        ru: 'преуспевать',
        en: 'succeed'
    },
    {
        id: 2585,
        ru: 'успех',
        en: 'success'
    },
    {
        id: 2586,
        ru: 'успешный',
        en: 'successful'
    },
    {
        id: 2587,
        ru: 'успешно',
        en: 'successfully'
    },
    {
        id: 2588,
        ru: 'такой',
        en: 'such'
    },
    {
        id: 2589,
        ru: 'внезапный',
        en: 'sudden'
    },
    {
        id: 2590,
        ru: 'внезапно',
        en: 'suddenly'
    },
    {
        id: 2591,
        ru: 'страдать',
        en: 'suffer'
    },
    {
        id: 2592,
        ru: 'сахар',
        en: 'sugar'
    },
    {
        id: 2593,
        ru: 'предлагать',
        en: 'suggest'
    },
    {
        id: 2594,
        ru: 'предположение',
        en: 'suggestion'
    },
    {
        id: 2595,
        ru: 'подходить',
        en: 'suit'
    },
    {
        id: 2596,
        ru: 'подходящий',
        en: 'suitable'
    },
    {
        id: 2597,
        ru: 'сумма',
        en: 'sum'
    },
    {
        id: 2598,
        ru: 'подвести итог',
        en: 'summarize'
    },
    {
        id: 2599,
        ru: 'краткое содержание',
        en: 'summary'
    },
    {
        id: 2600,
        ru: 'лето',
        en: 'summer'
    },
    {
        id: 2601,
        ru: 'солнце',
        en: 'sun'
    },
    {
        id: 2602,
        ru: 'Воскресенье',
        en: 'Sunday'
    },
    {
        id: 2603,
        ru: 'супермаркет',
        en: 'supermarket'
    },
    {
        id: 2604,
        ru: 'поставлять',
        en: 'supply'
    },
    {
        id: 2605,
        ru: 'поддерживать',
        en: 'support'
    },
    {
        id: 2606,
        ru: 'сторонник',
        en: 'supporter'
    },
    {
        id: 2607,
        ru: 'предполагать',
        en: 'suppose'
    },
    {
        id: 2608,
        ru: 'конечно',
        en: 'sure'
    },
    {
        id: 2609,
        ru: 'конечно',
        en: 'surely'
    },
    {
        id: 2610,
        ru: 'поверхность',
        en: 'surface'
    },
    {
        id: 2611,
        ru: 'операция',
        en: 'surgery'
    },
    {
        id: 2612,
        ru: 'сюрприз',
        en: 'surprise'
    },
    {
        id: 2613,
        ru: 'удивлен',
        en: 'surprised'
    },
    {
        id: 2614,
        ru: 'удивительно',
        en: 'surprising'
    },
    {
        id: 2615,
        ru: 'окружать',
        en: 'surround'
    },
    {
        id: 2616,
        ru: 'окружающий',
        en: 'surrounding'
    },
    {
        id: 2617,
        ru: 'опрос',
        en: 'survey'
    },
    {
        id: 2618,
        ru: 'выживать',
        en: 'survive'
    },
    {
        id: 2619,
        ru: 'подозревать',
        en: 'suspect'
    },
    {
        id: 2620,
        ru: 'ругаться',
        en: 'swear'
    },
    {
        id: 2621,
        ru: 'свитер',
        en: 'sweater'
    },
    {
        id: 2622,
        ru: 'мести',
        en: 'sweep'
    },
    {
        id: 2623,
        ru: 'сладкий',
        en: 'sweet'
    },
    {
        id: 2624,
        ru: 'плавать',
        en: 'swim'
    },
    {
        id: 2625,
        ru: 'плавание',
        en: 'swimming'
    },
    {
        id: 2626,
        ru: 'выключатель',
        en: 'switch'
    },
    {
        id: 2627,
        ru: 'символ',
        en: 'symbol'
    },
    {
        id: 2628,
        ru: 'сочувствие',
        en: 'sympathy'
    },
    {
        id: 2629,
        ru: 'симптом',
        en: 'symptom'
    },
    {
        id: 2630,
        ru: 'система',
        en: 'system'
    },
    {
        id: 2631,
        ru: 'стол',
        en: 'table'
    },
    {
        id: 2632,
        ru: 'планшет',
        en: 'tablet'
    },
    {
        id: 2633,
        ru: 'хвост',
        en: 'tail'
    },
    {
        id: 2634,
        ru: 'брать',
        en: 'take'
    },
    {
        id: 2635,
        ru: 'сказка',
        en: 'tale'
    },
    {
        id: 2636,
        ru: 'талант',
        en: 'talent'
    },
    {
        id: 2637,
        ru: 'талантливый',
        en: 'talented'
    },
    {
        id: 2638,
        ru: 'разговаривать',
        en: 'talk'
    },
    {
        id: 2639,
        ru: 'высокий',
        en: 'tall'
    },
    {
        id: 2640,
        ru: 'танк',
        en: 'tank'
    },
    {
        id: 2641,
        ru: 'лента',
        en: 'tape'
    },
    {
        id: 2642,
        ru: 'цель',
        en: 'target'
    },
    {
        id: 2643,
        ru: 'задача',
        en: 'task'
    },
    {
        id: 2644,
        ru: 'вкус',
        en: 'taste'
    },
    {
        id: 2645,
        ru: 'налог',
        en: 'tax'
    },
    {
        id: 2646,
        ru: 'такси',
        en: 'taxi'
    },
    {
        id: 2647,
        ru: 'чай',
        en: 'tea'
    },
    {
        id: 2648,
        ru: 'учить',
        en: 'teach'
    },
    {
        id: 2649,
        ru: 'учитель',
        en: 'teacher'
    },
    {
        id: 2650,
        ru: 'преподавание',
        en: 'teaching'
    },
    {
        id: 2651,
        ru: 'команда',
        en: 'team'
    },
    {
        id: 2652,
        ru: 'рвать',
        en: 'tear'
    },
    {
        id: 2653,
        ru: 'рвать',
        en: 'tear'
    },
    {
        id: 2654,
        ru: 'технический',
        en: 'technical'
    },
    {
        id: 2655,
        ru: 'техника',
        en: 'technique'
    },
    {
        id: 2656,
        ru: 'технология',
        en: 'technology'
    },
    {
        id: 2657,
        ru: 'подростковый',
        en: 'teenage'
    },
    {
        id: 2658,
        ru: 'подросток',
        en: 'teenager'
    },
    {
        id: 2659,
        ru: 'телефон',
        en: 'telephone'
    },
    {
        id: 2660,
        ru: 'телевидение',
        en: 'television'
    },
    {
        id: 2661,
        ru: 'рассказывать',
        en: 'tell'
    },
    {
        id: 2662,
        ru: 'температура',
        en: 'temperature'
    },
    {
        id: 2663,
        ru: 'временный',
        en: 'temporary'
    },
    {
        id: 2664,
        ru: 'десять',
        en: 'ten'
    },
    {
        id: 2665,
        ru: 'иметь тенденцию',
        en: 'tend'
    },
    {
        id: 2666,
        ru: 'теннис',
        en: 'tennis'
    },
    {
        id: 2667,
        ru: 'палатка',
        en: 'tent'
    },
    {
        id: 2668,
        ru: 'срок',
        en: 'term'
    },
    {
        id: 2669,
        ru: 'ужасный',
        en: 'terrible'
    },
    {
        id: 2670,
        ru: 'тест',
        en: 'test'
    },
    {
        id: 2671,
        ru: 'текст',
        en: 'text'
    },
    {
        id: 2672,
        ru: 'чем',
        en: 'than'
    },
    {
        id: 2673,
        ru: 'благодарить',
        en: 'thank'
    },
    {
        id: 2674,
        ru: 'Спасибо',
        en: 'thanks'
    },
    {
        id: 2675,
        ru: 'что',
        en: 'that'
    },
    {
        id: 2676,
        ru: '',
        en: 'the'
    },
    {
        id: 2677,
        ru: 'театр',
        en: 'theatre'
    },
    {
        id: 2678,
        ru: 'их',
        en: 'their'
    },
    {
        id: 2679,
        ru: 'их',
        en: 'theirs'
    },
    {
        id: 2680,
        ru: 'их',
        en: 'them'
    },
    {
        id: 2681,
        ru: 'тема',
        en: 'theme'
    },
    {
        id: 2682,
        ru: 'сами себя',
        en: 'themselves'
    },
    {
        id: 2683,
        ru: 'затем',
        en: 'then'
    },
    {
        id: 2684,
        ru: 'теория',
        en: 'theory'
    },
    {
        id: 2685,
        ru: 'терапия',
        en: 'therapy'
    },
    {
        id: 2686,
        ru: 'там',
        en: 'there'
    },
    {
        id: 2687,
        ru: 'поэтому',
        en: 'therefore'
    },
    {
        id: 2688,
        ru: 'они',
        en: 'they'
    },
    {
        id: 2689,
        ru: 'толстый',
        en: 'thick'
    },
    {
        id: 2690,
        ru: 'вор',
        en: 'thief'
    },
    {
        id: 2691,
        ru: 'тонкий',
        en: 'thin'
    },
    {
        id: 2692,
        ru: 'вещь',
        en: 'thing'
    },
    {
        id: 2693,
        ru: 'думать',
        en: 'think'
    },
    {
        id: 2694,
        ru: 'думая',
        en: 'thinking'
    },
    {
        id: 2695,
        ru: 'третий',
        en: 'third'
    },
    {
        id: 2696,
        ru: 'испытывающий жажду',
        en: 'thirsty'
    },
    {
        id: 2697,
        ru: 'тринадцать',
        en: 'thirteen'
    },
    {
        id: 2698,
        ru: 'тридцать',
        en: 'thirty'
    },
    {
        id: 2699,
        ru: 'этот',
        en: 'this'
    },
    {
        id: 2700,
        ru: 'хотя',
        en: 'though'
    },
    {
        id: 2701,
        ru: 'мысль',
        en: 'thought'
    },
    {
        id: 2702,
        ru: 'тысяча',
        en: 'thousand'
    },
    {
        id: 2703,
        ru: 'угроза',
        en: 'threat'
    },
    {
        id: 2704,
        ru: 'угрожать',
        en: 'threaten'
    },
    {
        id: 2705,
        ru: 'три',
        en: 'three'
    },
    {
        id: 2706,
        ru: 'горло',
        en: 'throat'
    },
    {
        id: 2707,
        ru: 'через',
        en: 'through'
    },
    {
        id: 2708,
        ru: 'через',
        en: 'throughout'
    },
    {
        id: 2709,
        ru: 'бросать',
        en: 'throw'
    },
    {
        id: 2710,
        ru: 'Четверг',
        en: 'Thursday'
    },
    {
        id: 2711,
        ru: 'таким образом',
        en: 'thus'
    },
    {
        id: 2712,
        ru: 'билет',
        en: 'ticket'
    },
    {
        id: 2713,
        ru: 'аккуратный',
        en: 'tidy'
    },
    {
        id: 2714,
        ru: 'галстук',
        en: 'tie'
    },
    {
        id: 2715,
        ru: 'тугой',
        en: 'tight'
    },
    {
        id: 2716,
        ru: 'до',
        en: 'till'
    },
    {
        id: 2717,
        ru: 'время',
        en: 'time'
    },
    {
        id: 2718,
        ru: 'олово',
        en: 'tin'
    },
    {
        id: 2719,
        ru: 'крошечный',
        en: 'tiny'
    },
    {
        id: 2720,
        ru: 'кончик',
        en: 'tip'
    },
    {
        id: 2721,
        ru: 'усталый',
        en: 'tired'
    },
    {
        id: 2722,
        ru: 'заголовок',
        en: 'title'
    },
    {
        id: 2723,
        ru: 'к',
        en: 'to'
    },
    {
        id: 2724,
        ru: 'сегодня',
        en: 'today'
    },
    {
        id: 2725,
        ru: 'палец на ноге',
        en: 'toe'
    },
    {
        id: 2726,
        ru: 'вместе',
        en: 'together'
    },
    {
        id: 2727,
        ru: 'туалет',
        en: 'toilet'
    },
    {
        id: 2728,
        ru: 'помидор',
        en: 'tomato'
    },
    {
        id: 2729,
        ru: 'завтра',
        en: 'tomorrow'
    },
    {
        id: 2730,
        ru: 'тон',
        en: 'tone'
    },
    {
        id: 2731,
        ru: 'язык',
        en: 'tongue'
    },
    {
        id: 2732,
        ru: 'сегодня вечером',
        en: 'tonight'
    },
    {
        id: 2733,
        ru: 'слишком',
        en: 'too'
    },
    {
        id: 2734,
        ru: 'инструмент',
        en: 'tool'
    },
    {
        id: 2735,
        ru: 'зуб',
        en: 'tooth'
    },
    {
        id: 2736,
        ru: 'вершина',
        en: 'top'
    },
    {
        id: 2737,
        ru: 'тема',
        en: 'topic'
    },
    {
        id: 2738,
        ru: 'общий',
        en: 'total'
    },
    {
        id: 2739,
        ru: 'полностью',
        en: 'totally'
    },
    {
        id: 2740,
        ru: 'трогать',
        en: 'touch'
    },
    {
        id: 2741,
        ru: 'жесткий',
        en: 'tough'
    },
    {
        id: 2742,
        ru: 'тур',
        en: 'tour'
    },
    {
        id: 2743,
        ru: 'туризм',
        en: 'tourism'
    },
    {
        id: 2744,
        ru: 'турист',
        en: 'tourist'
    },
    {
        id: 2745,
        ru: 'к',
        en: 'towards'
    },
    {
        id: 2746,
        ru: 'полотенце',
        en: 'towel'
    },
    {
        id: 2747,
        ru: 'башня',
        en: 'tower'
    },
    {
        id: 2748,
        ru: 'город',
        en: 'town'
    },
    {
        id: 2749,
        ru: 'игрушка',
        en: 'toy'
    },
    {
        id: 2750,
        ru: 'отслеживать',
        en: 'track'
    },
    {
        id: 2751,
        ru: 'торговля',
        en: 'trade'
    },
    {
        id: 2752,
        ru: 'традиция',
        en: 'tradition'
    },
    {
        id: 2753,
        ru: 'традиционный',
        en: 'traditional'
    },
    {
        id: 2754,
        ru: 'трафик',
        en: 'traffic'
    },
    {
        id: 2755,
        ru: 'тренироваться',
        en: 'train'
    },
    {
        id: 2756,
        ru: 'тренер',
        en: 'trainer'
    },
    {
        id: 2757,
        ru: 'обучение',
        en: 'training'
    },
    {
        id: 2758,
        ru: 'передача',
        en: 'transfer'
    },
    {
        id: 2759,
        ru: 'трансформировать',
        en: 'transform'
    },
    {
        id: 2760,
        ru: 'переход',
        en: 'transition'
    },
    {
        id: 2761,
        ru: 'переводить',
        en: 'translate'
    },
    {
        id: 2762,
        ru: 'перевод',
        en: 'translation'
    },
    {
        id: 2763,
        ru: 'транспорт',
        en: 'transport'
    },
    {
        id: 2764,
        ru: 'путешествовать',
        en: 'travel'
    },
    {
        id: 2765,
        ru: 'путешественник',
        en: 'traveller'
    },
    {
        id: 2766,
        ru: 'обращаться',
        en: 'treat'
    },
    {
        id: 2767,
        ru: 'уход',
        en: 'treatment'
    },
    {
        id: 2768,
        ru: 'дерево',
        en: 'tree'
    },
    {
        id: 2769,
        ru: 'тенденция',
        en: 'trend'
    },
    {
        id: 2770,
        ru: 'пробный',
        en: 'trial'
    },
    {
        id: 2771,
        ru: 'обманывать',
        en: 'trick'
    },
    {
        id: 2772,
        ru: 'путешествие',
        en: 'trip'
    },
    {
        id: 2773,
        ru: 'тропический',
        en: 'tropical'
    },
    {
        id: 2774,
        ru: 'беда',
        en: 'trouble'
    },
    {
        id: 2775,
        ru: 'брюки',
        en: 'trousers'
    },
    {
        id: 2776,
        ru: 'грузовик',
        en: 'truck'
    },
    {
        id: 2777,
        ru: 'Правда',
        en: 'TRUE'
    },
    {
        id: 2778,
        ru: 'действительно',
        en: 'truly'
    },
    {
        id: 2779,
        ru: 'доверять',
        en: 'trust'
    },
    {
        id: 2780,
        ru: 'правда',
        en: 'truth'
    },
    {
        id: 2781,
        ru: 'пытаться',
        en: 'try'
    },
    {
        id: 2782,
        ru: 'футболка',
        en: 'T-shirt'
    },
    {
        id: 2783,
        ru: 'трубка',
        en: 'tube'
    },
    {
        id: 2784,
        ru: 'Вторник',
        en: 'Tuesday'
    },
    {
        id: 2785,
        ru: 'мелодия',
        en: 'tune'
    },
    {
        id: 2786,
        ru: 'туннель',
        en: 'tunnel'
    },
    {
        id: 2787,
        ru: 'повернуть',
        en: 'turn'
    },
    {
        id: 2788,
        ru: 'ТВ',
        en: 'TV'
    },
    {
        id: 2789,
        ru: 'двенадцать',
        en: 'twelve'
    },
    {
        id: 2790,
        ru: 'двадцать',
        en: 'twenty'
    },
    {
        id: 2791,
        ru: 'дважды',
        en: 'twice'
    },
    {
        id: 2792,
        ru: 'близнец',
        en: 'twin'
    },
    {
        id: 2793,
        ru: 'два',
        en: 'two'
    },
    {
        id: 2794,
        ru: 'тип',
        en: 'type'
    },
    {
        id: 2795,
        ru: 'типичный',
        en: 'typical'
    },
    {
        id: 2796,
        ru: 'типично',
        en: 'typically'
    },
    {
        id: 2797,
        ru: 'шина',
        en: 'tyre'
    },
    {
        id: 2798,
        ru: 'уродливый',
        en: 'ugly'
    },
    {
        id: 2799,
        ru: 'в конечном счете',
        en: 'ultimately'
    },
    {
        id: 2800,
        ru: 'зонтик',
        en: 'umbrella'
    },
    {
        id: 2801,
        ru: 'не могущий',
        en: 'unable'
    },
    {
        id: 2802,
        ru: 'дядя',
        en: 'uncle'
    },
    {
        id: 2803,
        ru: 'неудобно',
        en: 'uncomfortable'
    },
    {
        id: 2804,
        ru: 'бессознательный',
        en: 'unconscious'
    },
    {
        id: 2805,
        ru: 'под',
        en: 'under'
    },
    {
        id: 2806,
        ru: 'под землей',
        en: 'underground'
    },
    {
        id: 2807,
        ru: 'понимать',
        en: 'understand'
    },
    {
        id: 2808,
        ru: 'понимание',
        en: 'understanding'
    },
    {
        id: 2809,
        ru: 'нижнее белье',
        en: 'underwear'
    },
    {
        id: 2810,
        ru: 'безработный',
        en: 'unemployed'
    },
    {
        id: 2811,
        ru: 'безработица',
        en: 'unemployment'
    },
    {
        id: 2812,
        ru: 'непредвиденный',
        en: 'unexpected'
    },
    {
        id: 2813,
        ru: 'несправедливый',
        en: 'unfair'
    },
    {
        id: 2814,
        ru: 'к сожалению',
        en: 'unfortunately'
    },
    {
        id: 2815,
        ru: 'несчастный',
        en: 'unhappy'
    },
    {
        id: 2816,
        ru: 'униформа',
        en: 'uniform'
    },
    {
        id: 2817,
        ru: 'союз',
        en: 'union'
    },
    {
        id: 2818,
        ru: 'уникальный',
        en: 'unique'
    },
    {
        id: 2819,
        ru: 'единица',
        en: 'unit'
    },
    {
        id: 2820,
        ru: 'объединенный',
        en: 'united'
    },
    {
        id: 2821,
        ru: 'вселенная',
        en: 'universe'
    },
    {
        id: 2822,
        ru: 'университет',
        en: 'university'
    },
    {
        id: 2823,
        ru: 'неизвестный',
        en: 'unknown'
    },
    {
        id: 2824,
        ru: 'пока не',
        en: 'unless'
    },
    {
        id: 2825,
        ru: 'в отличие от',
        en: 'unlike'
    },
    {
        id: 2826,
        ru: 'маловероятно',
        en: 'unlikely'
    },
    {
        id: 2827,
        ru: 'ненужный',
        en: 'unnecessary'
    },
    {
        id: 2828,
        ru: 'неприятный',
        en: 'unpleasant'
    },
    {
        id: 2829,
        ru: 'до',
        en: 'until'
    },
    {
        id: 2830,
        ru: 'необычный',
        en: 'unusual'
    },
    {
        id: 2831,
        ru: 'вверх',
        en: 'up'
    },
    {
        id: 2832,
        ru: 'обновлять',
        en: 'update'
    },
    {
        id: 2833,
        ru: 'на',
        en: 'upon'
    },
    {
        id: 2834,
        ru: 'верхний',
        en: 'upper'
    },
    {
        id: 2835,
        ru: 'расстройство',
        en: 'upset'
    },
    {
        id: 2836,
        ru: 'наверху',
        en: 'upstairs'
    },
    {
        id: 2837,
        ru: 'вверх',
        en: 'upwards'
    },
    {
        id: 2838,
        ru: 'городской',
        en: 'urban'
    },
    {
        id: 2839,
        ru: 'побуждать',
        en: 'urge'
    },
    {
        id: 2840,
        ru: 'нас',
        en: 'us'
    },
    {
        id: 2841,
        ru: 'использовать',
        en: 'use'
    },
    {
        id: 2842,
        ru: 'использовал',
        en: 'used'
    },
    {
        id: 2843,
        ru: 'использовал',
        en: 'used'
    },
    {
        id: 2844,
        ru: 'использовал',
        en: 'used'
    },
    {
        id: 2845,
        ru: 'полезный',
        en: 'useful'
    },
    {
        id: 2846,
        ru: 'пользователь',
        en: 'user'
    },
    {
        id: 2847,
        ru: 'обычный',
        en: 'usual'
    },
    {
        id: 2848,
        ru: 'обычно',
        en: 'usually'
    },
    {
        id: 2849,
        ru: 'отпуск',
        en: 'vacation'
    },
    {
        id: 2850,
        ru: 'долина',
        en: 'valley'
    },
    {
        id: 2851,
        ru: 'ценный',
        en: 'valuable'
    },
    {
        id: 2852,
        ru: 'ценить',
        en: 'value'
    },
    {
        id: 2853,
        ru: 'фургон',
        en: 'van'
    },
    {
        id: 2854,
        ru: 'разнообразие',
        en: 'variety'
    },
    {
        id: 2855,
        ru: 'различный',
        en: 'various'
    },
    {
        id: 2856,
        ru: 'отличаться',
        en: 'vary'
    },
    {
        id: 2857,
        ru: 'огромный',
        en: 'vast'
    },
    {
        id: 2858,
        ru: 'овощ',
        en: 'vegetable'
    },
    {
        id: 2859,
        ru: 'транспортное средство',
        en: 'vehicle'
    },
    {
        id: 2860,
        ru: 'место проведения',
        en: 'venue'
    },
    {
        id: 2861,
        ru: 'версия',
        en: 'version'
    },
    {
        id: 2862,
        ru: 'очень',
        en: 'very'
    },
    {
        id: 2863,
        ru: 'с помощью',
        en: 'via'
    },
    {
        id: 2864,
        ru: 'жертва',
        en: 'victim'
    },
    {
        id: 2865,
        ru: 'победа',
        en: 'victory'
    },
    {
        id: 2866,
        ru: 'видео',
        en: 'video'
    },
    {
        id: 2867,
        ru: 'вид',
        en: 'view'
    },
    {
        id: 2868,
        ru: 'зритель',
        en: 'viewer'
    },
    {
        id: 2869,
        ru: 'деревня',
        en: 'village'
    },
    {
        id: 2870,
        ru: 'насилие',
        en: 'violence'
    },
    {
        id: 2871,
        ru: 'жестокий',
        en: 'violent'
    },
    {
        id: 2872,
        ru: 'виртуальный',
        en: 'virtual'
    },
    {
        id: 2873,
        ru: 'вирус',
        en: 'virus'
    },
    {
        id: 2874,
        ru: 'зрение',
        en: 'vision'
    },
    {
        id: 2875,
        ru: 'посещать',
        en: 'visit'
    },
    {
        id: 2876,
        ru: 'посетитель',
        en: 'visitor'
    },
    {
        id: 2877,
        ru: 'визуальный',
        en: 'visual'
    },
    {
        id: 2878,
        ru: 'жизненно важный',
        en: 'vital'
    },
    {
        id: 2879,
        ru: 'витамин',
        en: 'vitamin'
    },
    {
        id: 2880,
        ru: 'голос',
        en: 'voice'
    },
    {
        id: 2881,
        ru: 'объем',
        en: 'volume'
    },
    {
        id: 2882,
        ru: 'доброволец',
        en: 'volunteer'
    },
    {
        id: 2883,
        ru: 'голосование',
        en: 'vote'
    },
    {
        id: 2884,
        ru: 'заработная плата',
        en: 'wage'
    },
    {
        id: 2885,
        ru: 'ждать',
        en: 'wait'
    },
    {
        id: 2886,
        ru: 'официант',
        en: 'waiter'
    },
    {
        id: 2887,
        ru: 'будить',
        en: 'wake'
    },
    {
        id: 2888,
        ru: 'ходить',
        en: 'walk'
    },
    {
        id: 2889,
        ru: 'стена',
        en: 'wall'
    },
    {
        id: 2890,
        ru: 'хотеть',
        en: 'want'
    },
    {
        id: 2891,
        ru: 'война',
        en: 'war'
    },
    {
        id: 2892,
        ru: 'теплый',
        en: 'warm'
    },
    {
        id: 2893,
        ru: 'предупреждать',
        en: 'warn'
    },
    {
        id: 2894,
        ru: 'предупреждение',
        en: 'warning'
    },
    {
        id: 2895,
        ru: 'стирать',
        en: 'wash'
    },
    {
        id: 2896,
        ru: 'стирка',
        en: 'washing'
    },
    {
        id: 2897,
        ru: 'напрасно тратить',
        en: 'waste'
    },
    {
        id: 2898,
        ru: 'смотреть',
        en: 'watch'
    },
    {
        id: 2899,
        ru: 'вода',
        en: 'water'
    },
    {
        id: 2900,
        ru: 'волна',
        en: 'wave'
    },
    {
        id: 2901,
        ru: 'способ',
        en: 'way'
    },
    {
        id: 2902,
        ru: 'мы',
        en: 'we'
    },
    {
        id: 2903,
        ru: 'слабый',
        en: 'weak'
    },
    {
        id: 2904,
        ru: 'слабость',
        en: 'weakness'
    },
    {
        id: 2905,
        ru: 'богатство',
        en: 'wealth'
    },
    {
        id: 2906,
        ru: 'богатый',
        en: 'wealthy'
    },
    {
        id: 2907,
        ru: 'оружие',
        en: 'weapon'
    },
    {
        id: 2908,
        ru: 'носить',
        en: 'wear'
    },
    {
        id: 2909,
        ru: 'погода',
        en: 'weather'
    },
    {
        id: 2910,
        ru: 'веб',
        en: 'web'
    },
    {
        id: 2911,
        ru: 'веб-сайт',
        en: 'website'
    },
    {
        id: 2912,
        ru: 'свадьба',
        en: 'wedding'
    },
    {
        id: 2913,
        ru: 'Среда',
        en: 'Wednesday'
    },
    {
        id: 2914,
        ru: 'неделя',
        en: 'week'
    },
    {
        id: 2915,
        ru: 'выходные',
        en: 'weekend'
    },
    {
        id: 2916,
        ru: 'весить',
        en: 'weigh'
    },
    {
        id: 2917,
        ru: 'масса',
        en: 'weight'
    },
    {
        id: 2918,
        ru: 'добро пожаловать',
        en: 'welcome'
    },
    {
        id: 2919,
        ru: 'хорошо',
        en: 'well'
    },
    {
        id: 2920,
        ru: 'запад',
        en: 'west'
    },
    {
        id: 2921,
        ru: 'западный',
        en: 'western'
    },
    {
        id: 2922,
        ru: 'влажный',
        en: 'wet'
    },
    {
        id: 2923,
        ru: 'что',
        en: 'what'
    },
    {
        id: 2924,
        ru: 'что бы ни',
        en: 'whatever'
    },
    {
        id: 2925,
        ru: 'колесо',
        en: 'wheel'
    },
    {
        id: 2926,
        ru: 'когда',
        en: 'when'
    },
    {
        id: 2927,
        ru: 'в любое время',
        en: 'whenever'
    },
    {
        id: 2928,
        ru: 'где',
        en: 'where'
    },
    {
        id: 2929,
        ru: 'тогда как',
        en: 'whereas'
    },
    {
        id: 2930,
        ru: 'где бы то ни было',
        en: 'wherever'
    },
    {
        id: 2931,
        ru: 'ли',
        en: 'whether'
    },
    {
        id: 2932,
        ru: 'который',
        en: 'which'
    },
    {
        id: 2933,
        ru: 'пока',
        en: 'while'
    },
    {
        id: 2934,
        ru: 'шепот',
        en: 'whisper'
    },
    {
        id: 2935,
        ru: 'белый',
        en: 'white'
    },
    {
        id: 2936,
        ru: 'ВОЗ',
        en: 'who'
    },
    {
        id: 2937,
        ru: 'весь',
        en: 'whole'
    },
    {
        id: 2938,
        ru: 'кому',
        en: 'whom'
    },
    {
        id: 2939,
        ru: 'чей',
        en: 'whose'
    },
    {
        id: 2940,
        ru: 'почему',
        en: 'why'
    },
    {
        id: 2941,
        ru: 'широкий',
        en: 'wide'
    },
    {
        id: 2942,
        ru: 'широко',
        en: 'widely'
    },
    {
        id: 2943,
        ru: 'жена',
        en: 'wife'
    },
    {
        id: 2944,
        ru: 'дикий',
        en: 'wild'
    },
    {
        id: 2945,
        ru: 'дикая природа',
        en: 'wildlife'
    },
    {
        id: 2946,
        ru: 'воля',
        en: 'will'
    },
    {
        id: 2947,
        ru: 'готовый',
        en: 'willing'
    },
    {
        id: 2948,
        ru: 'победить',
        en: 'win'
    },
    {
        id: 2949,
        ru: 'ветер',
        en: 'wind'
    },
    {
        id: 2950,
        ru: 'ветер',
        en: 'wind'
    },
    {
        id: 2951,
        ru: 'окно',
        en: 'window'
    },
    {
        id: 2952,
        ru: 'вино',
        en: 'wine'
    },
    {
        id: 2953,
        ru: 'крыло',
        en: 'wing'
    },
    {
        id: 2954,
        ru: 'победитель',
        en: 'winner'
    },
    {
        id: 2955,
        ru: 'зима',
        en: 'winter'
    },
    {
        id: 2956,
        ru: 'проволока',
        en: 'wire'
    },
    {
        id: 2957,
        ru: 'мудрый',
        en: 'wise'
    },
    {
        id: 2958,
        ru: 'желание',
        en: 'wish'
    },
    {
        id: 2959,
        ru: 'с',
        en: 'with'
    },
    {
        id: 2960,
        ru: 'в пределах',
        en: 'within'
    },
    {
        id: 2961,
        ru: 'без',
        en: 'without'
    },
    {
        id: 2962,
        ru: 'свидетель',
        en: 'witness'
    },
    {
        id: 2963,
        ru: 'женщина',
        en: 'woman'
    },
    {
        id: 2964,
        ru: 'удивляться',
        en: 'wonder'
    },
    {
        id: 2965,
        ru: 'замечательный',
        en: 'wonderful'
    },
    {
        id: 2966,
        ru: 'древесина',
        en: 'wood'
    },
    {
        id: 2967,
        ru: 'деревянный',
        en: 'wooden'
    },
    {
        id: 2968,
        ru: 'шерсть',
        en: 'wool'
    },
    {
        id: 2969,
        ru: 'слово',
        en: 'word'
    },
    {
        id: 2970,
        ru: 'работа',
        en: 'work'
    },
    {
        id: 2971,
        ru: 'работник',
        en: 'worker'
    },
    {
        id: 2972,
        ru: 'работающий',
        en: 'working'
    },
    {
        id: 2973,
        ru: 'мир',
        en: 'world'
    },
    {
        id: 2974,
        ru: 'во всем мире',
        en: 'worldwide'
    },
    {
        id: 2975,
        ru: 'волновался',
        en: 'worried'
    },
    {
        id: 2976,
        ru: 'волноваться',
        en: 'worry'
    },
    {
        id: 2977,
        ru: 'худший',
        en: 'worse'
    },
    {
        id: 2978,
        ru: 'худший',
        en: 'worst'
    },
    {
        id: 2979,
        ru: 'ценность',
        en: 'worth'
    },
    {
        id: 2980,
        ru: 'бы',
        en: 'would'
    },
    {
        id: 2981,
        ru: 'ранить',
        en: 'wound'
    },
    {
        id: 2982,
        ru: 'ух ты',
        en: 'wow'
    },
    {
        id: 2983,
        ru: 'сворачивать',
        en: 'wrap'
    },
    {
        id: 2984,
        ru: 'писать',
        en: 'write'
    },
    {
        id: 2985,
        ru: 'писатель',
        en: 'writer'
    },
    {
        id: 2986,
        ru: 'письмо',
        en: 'writing'
    },
    {
        id: 2987,
        ru: 'написано',
        en: 'written'
    },
    {
        id: 2988,
        ru: 'неправильный',
        en: 'wrong'
    },
    {
        id: 2989,
        ru: 'площадка',
        en: 'yard'
    },
    {
        id: 2990,
        ru: 'ага',
        en: 'yeah'
    },
    {
        id: 2991,
        ru: 'год',
        en: 'year'
    },
    {
        id: 2992,
        ru: 'желтый',
        en: 'yellow'
    },
    {
        id: 2993,
        ru: 'да',
        en: 'yes'
    },
    {
        id: 2994,
        ru: 'вчера',
        en: 'yesterday'
    },
    {
        id: 2995,
        ru: 'еще',
        en: 'yet'
    },
    {
        id: 2996,
        ru: 'ты',
        en: 'you'
    },
    {
        id: 2997,
        ru: 'молодой',
        en: 'young'
    },
    {
        id: 2998,
        ru: 'твой',
        en: 'your'
    },
    {
        id: 2999,
        ru: 'твой',
        en: 'yours'
    },
    {
        id: 3000,
        ru: 'сам',
        en: 'yourself'
    },
    {
        id: 3001,
        ru: 'молодость',
        en: 'youth'
    },
    {
        id: 3002,
        ru: 'ноль',
        en: 'zero'
    },
    {
        id: 3003,
        ru: 'зона',
        en: 'zone'
    },
    {
        id: 3004,
        ru: 'отменять',
        en: 'abolish'
    },
    {
        id: 3005,
        ru: 'аборт',
        en: 'abortion'
    },
    {
        id: 3006,
        ru: 'отсутствие',
        en: 'absence'
    },
    {
        id: 3007,
        ru: 'отсутствующий',
        en: 'absent'
    },
    {
        id: 3008,
        ru: 'поглощать',
        en: 'absorb'
    },
    {
        id: 3009,
        ru: 'абстрактный',
        en: 'abstract'
    },
    {
        id: 3010,
        ru: 'абсурдный',
        en: 'absurd'
    },
    {
        id: 3011,
        ru: 'избыток',
        en: 'abundance'
    },
    {
        id: 3012,
        ru: 'злоупотреблять',
        en: 'abuse'
    },
    {
        id: 3013,
        ru: 'академия',
        en: 'academy'
    },
    {
        id: 3014,
        ru: 'ускорить',
        en: 'accelerate'
    },
    {
        id: 3015,
        ru: 'акцент',
        en: 'accent'
    },
    {
        id: 3016,
        ru: 'принятие',
        en: 'acceptance'
    },
    {
        id: 3017,
        ru: 'доступный',
        en: 'accessible'
    },
    {
        id: 3018,
        ru: 'случайно',
        en: 'accidentally'
    },
    {
        id: 3019,
        ru: 'разместить',
        en: 'accommodate'
    },
    {
        id: 3020,
        ru: 'выполнить',
        en: 'accomplish'
    },
    {
        id: 3021,
        ru: 'достижение',
        en: 'accomplishment'
    },
    {
        id: 3022,
        ru: 'соответствие',
        en: 'accordance'
    },
    {
        id: 3023,
        ru: 'соответственно',
        en: 'accordingly'
    },
    {
        id: 3024,
        ru: 'подотчетность',
        en: 'accountability'
    },
    {
        id: 3025,
        ru: 'подотчетный',
        en: 'accountable'
    },
    {
        id: 3026,
        ru: 'бухгалтер',
        en: 'accountant'
    },
    {
        id: 3027,
        ru: 'накапливать',
        en: 'accumulate'
    },
    {
        id: 3028,
        ru: 'накопление',
        en: 'accumulation'
    },
    {
        id: 3029,
        ru: 'точность',
        en: 'accuracy'
    },
    {
        id: 3030,
        ru: 'точно',
        en: 'accurately'
    },
    {
        id: 3031,
        ru: 'обвинение',
        en: 'accusation'
    },
    {
        id: 3032,
        ru: 'обвиняемый',
        en: 'accused'
    },
    {
        id: 3033,
        ru: 'кислота',
        en: 'acid'
    },
    {
        id: 3034,
        ru: 'приобретение',
        en: 'acquisition'
    },
    {
        id: 3035,
        ru: 'акр',
        en: 'acre'
    },
    {
        id: 3036,
        ru: 'активировать',
        en: 'activate'
    },
    {
        id: 3037,
        ru: 'активация',
        en: 'activation'
    },
    {
        id: 3038,
        ru: 'активист',
        en: 'activist'
    },
    {
        id: 3039,
        ru: 'острый',
        en: 'acute'
    },
    {
        id: 3040,
        ru: 'приспособление',
        en: 'adaptation'
    },
    {
        id: 3041,
        ru: 'зависимость',
        en: 'addiction'
    },
    {
        id: 3042,
        ru: 'кроме того',
        en: 'additionally'
    },
    {
        id: 3043,
        ru: 'адекватный',
        en: 'adequate'
    },
    {
        id: 3044,
        ru: 'адекватно',
        en: 'adequately'
    },
    {
        id: 3045,
        ru: 'придерживаться',
        en: 'adhere'
    },
    {
        id: 3046,
        ru: 'соседний',
        en: 'adjacent'
    },
    {
        id: 3047,
        ru: 'регулировать',
        en: 'adjust'
    },
    {
        id: 3048,
        ru: 'корректирование',
        en: 'adjustment'
    },
    {
        id: 3049,
        ru: 'администрировать',
        en: 'administer'
    },
    {
        id: 3050,
        ru: 'административный',
        en: 'administrative'
    },
    {
        id: 3051,
        ru: 'администратор',
        en: 'administrator'
    },
    {
        id: 3052,
        ru: 'допуск',
        en: 'admission'
    },
    {
        id: 3053,
        ru: 'подросток',
        en: 'adolescent'
    },
    {
        id: 3054,
        ru: 'принятие',
        en: 'adoption'
    },
    {
        id: 3055,
        ru: 'неблагоприятный',
        en: 'adverse'
    },
    {
        id: 3056,
        ru: 'защитник',
        en: 'advocate'
    },
    {
        id: 3057,
        ru: 'эстетический',
        en: 'aesthetic'
    },
    {
        id: 3058,
        ru: 'привязанность',
        en: 'affection'
    },
    {
        id: 3059,
        ru: 'доступный',
        en: 'affordable'
    },
    {
        id: 3060,
        ru: 'последствия',
        en: 'aftermath'
    },
    {
        id: 3061,
        ru: 'агрессия',
        en: 'aggression'
    },
    {
        id: 3062,
        ru: 'сельскохозяйственный',
        en: 'agricultural'
    },
    {
        id: 3063,
        ru: 'сельское хозяйство',
        en: 'agriculture'
    },
    {
        id: 3064,
        ru: 'помощник',
        en: 'aide'
    },
    {
        id: 3065,
        ru: 'СПИД',
        en: 'AIDS'
    },
    {
        id: 3066,
        ru: 'хотя',
        en: 'albeit'
    },
    {
        id: 3067,
        ru: 'тревога',
        en: 'alert'
    },
    {
        id: 3068,
        ru: 'чужак',
        en: 'alien'
    },
    {
        id: 3069,
        ru: 'выровнять',
        en: 'align'
    },
    {
        id: 3070,
        ru: 'выравнивание',
        en: 'alignment'
    },
    {
        id: 3071,
        ru: 'одинаково',
        en: 'alike'
    },
    {
        id: 3072,
        ru: 'утверждение',
        en: 'allegation'
    },
    {
        id: 3073,
        ru: 'утверждают',
        en: 'allege'
    },
    {
        id: 3074,
        ru: 'якобы',
        en: 'allegedly'
    },
    {
        id: 3075,
        ru: 'альянс',
        en: 'alliance'
    },
    {
        id: 3076,
        ru: 'выделять',
        en: 'allocate'
    },
    {
        id: 3077,
        ru: 'распределение',
        en: 'allocation'
    },
    {
        id: 3078,
        ru: 'разрешение',
        en: 'allowance'
    },
    {
        id: 3079,
        ru: 'союзник',
        en: 'ally'
    },
    {
        id: 3080,
        ru: 'рядом',
        en: 'alongside'
    },
    {
        id: 3081,
        ru: 'в целом',
        en: 'altogether'
    },
    {
        id: 3082,
        ru: 'алюминий',
        en: 'aluminium'
    },
    {
        id: 3083,
        ru: 'любитель',
        en: 'amateur'
    },
    {
        id: 3084,
        ru: 'посол',
        en: 'ambassador'
    },
    {
        id: 3085,
        ru: 'скорая помощь',
        en: 'ambulance'
    },
    {
        id: 3086,
        ru: 'исправлять',
        en: 'amend'
    },
    {
        id: 3087,
        ru: 'поправка',
        en: 'amendment'
    },
    {
        id: 3088,
        ru: 'среди',
        en: 'amid'
    },
    {
        id: 3089,
        ru: 'занимательный',
        en: 'amusing'
    },
    {
        id: 3090,
        ru: 'аналогия',
        en: 'analogy'
    },
    {
        id: 3091,
        ru: 'аналитик',
        en: 'analyst'
    },
    {
        id: 3092,
        ru: 'предок',
        en: 'ancestor'
    },
    {
        id: 3093,
        ru: 'якорь',
        en: 'anchor'
    },
    {
        id: 3094,
        ru: 'ангел',
        en: 'angel'
    },
    {
        id: 3095,
        ru: 'анимация',
        en: 'animation'
    },
    {
        id: 3096,
        ru: 'ежегодно',
        en: 'annually'
    },
    {
        id: 3097,
        ru: 'анонимный',
        en: 'anonymous'
    },
    {
        id: 3098,
        ru: 'предвидеть',
        en: 'anticipate'
    },
    {
        id: 3099,
        ru: 'беспокойство',
        en: 'anxiety'
    },
    {
        id: 3100,
        ru: 'извинение',
        en: 'apology'
    },
    {
        id: 3101,
        ru: 'аппарат',
        en: 'apparatus'
    },
    {
        id: 3102,
        ru: 'привлекательный',
        en: 'appealing'
    },
    {
        id: 3103,
        ru: 'аппетит',
        en: 'appetite'
    },
    {
        id: 3104,
        ru: 'аплодировать',
        en: 'applaud'
    },
    {
        id: 3105,
        ru: 'применимый',
        en: 'applicable'
    },
    {
        id: 3106,
        ru: 'заявитель',
        en: 'applicant'
    },
    {
        id: 3107,
        ru: 'назначать',
        en: 'appoint'
    },
    {
        id: 3108,
        ru: 'признательность',
        en: 'appreciation'
    },
    {
        id: 3109,
        ru: 'соответствующим образом',
        en: 'appropriately'
    },
    {
        id: 3110,
        ru: 'произвольный',
        en: 'arbitrary'
    },
    {
        id: 3111,
        ru: 'архитектурный',
        en: 'architectural'
    },
    {
        id: 3112,
        ru: 'архив',
        en: 'archive'
    },
    {
        id: 3113,
        ru: 'арена',
        en: 'arena'
    },
    {
        id: 3114,
        ru: 'возможно',
        en: 'arguably'
    },
    {
        id: 3115,
        ru: 'рука',
        en: 'arm'
    },
    {
        id: 3116,
        ru: 'множество',
        en: 'array'
    },
    {
        id: 3117,
        ru: 'стрелка',
        en: 'arrow'
    },
    {
        id: 3118,
        ru: 'артикулировать',
        en: 'articulate'
    },
    {
        id: 3119,
        ru: 'произведение искусства',
        en: 'artwork'
    },
    {
        id: 3120,
        ru: 'пепел',
        en: 'ash'
    },
    {
        id: 3121,
        ru: 'в сторону',
        en: 'aside'
    },
    {
        id: 3122,
        ru: 'стремление',
        en: 'aspiration'
    },
    {
        id: 3123,
        ru: 'стремиться',
        en: 'aspire'
    },
    {
        id: 3124,
        ru: 'убийство',
        en: 'assassination'
    },
    {
        id: 3125,
        ru: 'атаковать',
        en: 'assault'
    },
    {
        id: 3126,
        ru: 'собрать',
        en: 'assemble'
    },
    {
        id: 3127,
        ru: 'сборка',
        en: 'assembly'
    },
    {
        id: 3128,
        ru: 'утверждать',
        en: 'assert'
    },
    {
        id: 3129,
        ru: 'утверждение',
        en: 'assertion'
    },
    {
        id: 3130,
        ru: 'объект',
        en: 'asset'
    },
    {
        id: 3131,
        ru: 'назначать',
        en: 'assign'
    },
    {
        id: 3132,
        ru: 'помощь',
        en: 'assistance'
    },
    {
        id: 3133,
        ru: 'предположение',
        en: 'assumption'
    },
    {
        id: 3134,
        ru: 'уверенность',
        en: 'assurance'
    },
    {
        id: 3135,
        ru: 'гарантировать',
        en: 'assure'
    },
    {
        id: 3136,
        ru: 'удивительный',
        en: 'astonishing'
    },
    {
        id: 3137,
        ru: 'убежище',
        en: 'asylum'
    },
    {
        id: 3138,
        ru: 'зверство',
        en: 'atrocity'
    },
    {
        id: 3139,
        ru: 'вложение',
        en: 'attachment'
    },
    {
        id: 3140,
        ru: 'достичь',
        en: 'attain'
    },
    {
        id: 3141,
        ru: 'посещаемость',
        en: 'attendance'
    },
    {
        id: 3142,
        ru: 'адвокат',
        en: 'attorney'
    },
    {
        id: 3143,
        ru: 'атрибут',
        en: 'attribute'
    },
    {
        id: 3144,
        ru: 'аукцион',
        en: 'auction'
    },
    {
        id: 3145,
        ru: 'аудио',
        en: 'audio'
    },
    {
        id: 3146,
        ru: 'аудит',
        en: 'audit'
    },
    {
        id: 3147,
        ru: 'аутентичный',
        en: 'authentic'
    },
    {
        id: 3148,
        ru: 'авторизовать',
        en: 'authorize'
    },
    {
        id: 3149,
        ru: 'авто',
        en: 'auto'
    },
    {
        id: 3150,
        ru: 'автоматический',
        en: 'automatic'
    },
    {
        id: 3151,
        ru: 'автоматически',
        en: 'automatically'
    },
    {
        id: 3152,
        ru: 'автономия',
        en: 'autonomy'
    },
    {
        id: 3153,
        ru: 'доступность',
        en: 'availability'
    },
    {
        id: 3154,
        ru: 'ждать',
        en: 'await'
    },
    {
        id: 3155,
        ru: 'осведомленность',
        en: 'awareness'
    },
    {
        id: 3156,
        ru: 'неуклюжий',
        en: 'awkward'
    },
    {
        id: 3157,
        ru: 'фон',
        en: 'backdrop'
    },
    {
        id: 3158,
        ru: 'поддержка',
        en: 'backing'
    },
    {
        id: 3159,
        ru: 'резервное копирование',
        en: 'backup'
    },
    {
        id: 3160,
        ru: 'значок',
        en: 'badge'
    },
    {
        id: 3161,
        ru: 'залог',
        en: 'bail'
    },
    {
        id: 3162,
        ru: 'сбалансированный',
        en: 'balanced'
    },
    {
        id: 3163,
        ru: 'балет',
        en: 'ballet'
    },
    {
        id: 3164,
        ru: 'воздушный шар',
        en: 'balloon'
    },
    {
        id: 3165,
        ru: 'бюллетень для голосования',
        en: 'ballot'
    },
    {
        id: 3166,
        ru: 'баннер',
        en: 'banner'
    },
    {
        id: 3167,
        ru: 'голый',
        en: 'bare'
    },
    {
        id: 3168,
        ru: 'едва',
        en: 'barely'
    },
    {
        id: 3169,
        ru: 'торговаться',
        en: 'bargain'
    },
    {
        id: 3170,
        ru: 'бочка',
        en: 'barrel'
    },
    {
        id: 3171,
        ru: 'подвал',
        en: 'basement'
    },
    {
        id: 3172,
        ru: 'корзина',
        en: 'basket'
    },
    {
        id: 3173,
        ru: 'бас',
        en: 'bass'
    },
    {
        id: 3174,
        ru: 'летучая мышь',
        en: 'bat'
    },
    {
        id: 3175,
        ru: 'поле битвы',
        en: 'battlefield'
    },
    {
        id: 3176,
        ru: 'залив',
        en: 'bay'
    },
    {
        id: 3177,
        ru: 'луч',
        en: 'beam'
    },
    {
        id: 3178,
        ru: 'зверь',
        en: 'beast'
    },
    {
        id: 3179,
        ru: 'от имени',
        en: 'behalf'
    },
    {
        id: 3180,
        ru: 'возлюбленный',
        en: 'beloved'
    },
    {
        id: 3181,
        ru: 'лавка',
        en: 'bench'
    },
    {
        id: 3182,
        ru: 'бенчмарк',
        en: 'benchmark'
    },
    {
        id: 3183,
        ru: 'под',
        en: 'beneath'
    },
    {
        id: 3184,
        ru: 'выгодный',
        en: 'beneficial'
    },
    {
        id: 3185,
        ru: 'бенефициар',
        en: 'beneficiary'
    },
    {
        id: 3186,
        ru: 'рядом',
        en: 'beside'
    },
    {
        id: 3187,
        ru: 'кроме',
        en: 'besides'
    },
    {
        id: 3188,
        ru: 'предавать',
        en: 'betray'
    },
    {
        id: 3189,
        ru: 'предвзятость',
        en: 'bias'
    },
    {
        id: 3190,
        ru: 'делать ставку',
        en: 'bid'
    },
    {
        id: 3191,
        ru: 'связывать',
        en: 'bind'
    },
    {
        id: 3192,
        ru: 'биография',
        en: 'biography'
    },
    {
        id: 3193,
        ru: 'биологический',
        en: 'biological'
    },
    {
        id: 3194,
        ru: 'епископ',
        en: 'bishop'
    },
    {
        id: 3195,
        ru: 'странный',
        en: 'bizarre'
    },
    {
        id: 3196,
        ru: 'лезвие',
        en: 'blade'
    },
    {
        id: 3197,
        ru: 'одеяло',
        en: 'blanket'
    },
    {
        id: 3198,
        ru: 'взрыв',
        en: 'blast'
    },
    {
        id: 3199,
        ru: 'кровоточить',
        en: 'bleed'
    },
    {
        id: 3200,
        ru: 'смешивать',
        en: 'blend'
    },
    {
        id: 3201,
        ru: 'благословить',
        en: 'bless'
    },
    {
        id: 3202,
        ru: 'благословение',
        en: 'blessing'
    },
    {
        id: 3203,
        ru: 'дуть',
        en: 'blow'
    },
    {
        id: 3204,
        ru: 'хвастаться',
        en: 'boast'
    },
    {
        id: 3205,
        ru: 'смелый',
        en: 'bold'
    },
    {
        id: 3206,
        ru: 'бомбардировка',
        en: 'bombing'
    },
    {
        id: 3207,
        ru: 'бонус',
        en: 'bonus'
    },
    {
        id: 3208,
        ru: 'бронирование',
        en: 'booking'
    },
    {
        id: 3209,
        ru: 'бум',
        en: 'boom'
    },
    {
        id: 3210,
        ru: 'способствовать росту',
        en: 'boost'
    },
    {
        id: 3211,
        ru: 'подпрыгивать',
        en: 'bounce'
    },
    {
        id: 3212,
        ru: 'граница',
        en: 'bound'
    },
    {
        id: 3213,
        ru: 'граница',
        en: 'boundary'
    },
    {
        id: 3214,
        ru: 'поклон',
        en: 'bow'
    },
    {
        id: 3215,
        ru: 'нарушение',
        en: 'breach'
    },
    {
        id: 3216,
        ru: 'авария',
        en: 'breakdown'
    },
    {
        id: 3217,
        ru: 'прорыв',
        en: 'breakthrough'
    },
    {
        id: 3218,
        ru: 'порода',
        en: 'breed'
    },
    {
        id: 3219,
        ru: 'кирпич',
        en: 'brick'
    },
    {
        id: 3220,
        ru: 'кратко',
        en: 'briefly'
    },
    {
        id: 3221,
        ru: 'широкополосный',
        en: 'broadband'
    },
    {
        id: 3222,
        ru: 'вещатель',
        en: 'broadcaster'
    },
    {
        id: 3223,
        ru: 'в целом',
        en: 'broadly'
    },
    {
        id: 3224,
        ru: 'браузер',
        en: 'browser'
    },
    {
        id: 3225,
        ru: 'жестокий',
        en: 'brutal'
    },
    {
        id: 3226,
        ru: 'доллар',
        en: 'buck'
    },
    {
        id: 3227,
        ru: 'приятель',
        en: 'buddy'
    },
    {
        id: 3228,
        ru: 'буфер',
        en: 'buffer'
    },
    {
        id: 3229,
        ru: 'ошибка',
        en: 'bug'
    },
    {
        id: 3230,
        ru: 'масса',
        en: 'bulk'
    },
    {
        id: 3231,
        ru: 'груз',
        en: 'burden'
    },
    {
        id: 3232,
        ru: 'бюрократия',
        en: 'bureaucracy'
    },
    {
        id: 3233,
        ru: 'захоронение',
        en: 'burial'
    },
    {
        id: 3234,
        ru: 'лопаться',
        en: 'burst'
    },
    {
        id: 3235,
        ru: 'кабина',
        en: 'cabin'
    },
    {
        id: 3236,
        ru: 'кабинет',
        en: 'cabinet'
    },
    {
        id: 3237,
        ru: 'расчет',
        en: 'calculation'
    },
    {
        id: 3238,
        ru: 'канал',
        en: 'canal'
    },
    {
        id: 3239,
        ru: 'свеча',
        en: 'candle'
    },
    {
        id: 3240,
        ru: 'холст',
        en: 'canvas'
    },
    {
        id: 3241,
        ru: 'способность',
        en: 'capability'
    },
    {
        id: 3242,
        ru: 'капитализм',
        en: 'capitalism'
    },
    {
        id: 3243,
        ru: 'капиталистический',
        en: 'capitalist'
    },
    {
        id: 3244,
        ru: 'углерод',
        en: 'carbon'
    },
    {
        id: 3245,
        ru: 'груз',
        en: 'cargo'
    },
    {
        id: 3246,
        ru: 'перевозка',
        en: 'carriage'
    },
    {
        id: 3247,
        ru: 'вырезать',
        en: 'carve'
    },
    {
        id: 3248,
        ru: 'казино',
        en: 'casino'
    },
    {
        id: 3249,
        ru: 'повседневный',
        en: 'casual'
    },
    {
        id: 3250,
        ru: 'несчастный случай',
        en: 'casualty'
    },
    {
        id: 3251,
        ru: 'каталог',
        en: 'catalogue'
    },
    {
        id: 3252,
        ru: 'обслуживать',
        en: 'cater'
    },
    {
        id: 3253,
        ru: 'крупный рогатый скот',
        en: 'cattle'
    },
    {
        id: 3254,
        ru: 'осторожность',
        en: 'caution'
    },
    {
        id: 3255,
        ru: 'осторожный',
        en: 'cautious'
    },
    {
        id: 3256,
        ru: 'пещера',
        en: 'cave'
    },
    {
        id: 3257,
        ru: 'прекратить',
        en: 'cease'
    },
    {
        id: 3258,
        ru: 'кладбище',
        en: 'cemetery'
    },
    {
        id: 3259,
        ru: 'уверенность',
        en: 'certainty'
    },
    {
        id: 3260,
        ru: 'сертификат',
        en: 'certificate'
    },
    {
        id: 3261,
        ru: 'испытывающий',
        en: 'challenging'
    },
    {
        id: 3262,
        ru: 'камера',
        en: 'chamber'
    },
    {
        id: 3263,
        ru: 'чемпионат',
        en: 'championship'
    },
    {
        id: 3264,
        ru: 'хаос',
        en: 'chaos'
    },
    {
        id: 3265,
        ru: 'характеризовать',
        en: 'characterize'
    },
    {
        id: 3266,
        ru: 'очарование',
        en: 'charm'
    },
    {
        id: 3267,
        ru: 'очаровательный',
        en: 'charming'
    },
    {
        id: 3268,
        ru: 'устав',
        en: 'charter'
    },
    {
        id: 3269,
        ru: 'гнаться',
        en: 'chase'
    },
    {
        id: 3270,
        ru: 'щека',
        en: 'cheek'
    },
    {
        id: 3271,
        ru: 'радость',
        en: 'cheer'
    },
    {
        id: 3272,
        ru: 'хор',
        en: 'choir'
    },
    {
        id: 3273,
        ru: 'нарезать',
        en: 'chop'
    },
    {
        id: 3274,
        ru: 'хронический',
        en: 'chronic'
    },
    {
        id: 3275,
        ru: 'кусок',
        en: 'chunk'
    },
    {
        id: 3276,
        ru: 'схема',
        en: 'circuit'
    },
    {
        id: 3277,
        ru: 'циркулировать',
        en: 'circulate'
    },
    {
        id: 3278,
        ru: 'циркуляция',
        en: 'circulation'
    },
    {
        id: 3279,
        ru: 'гражданство',
        en: 'citizenship'
    },
    {
        id: 3280,
        ru: 'гражданский',
        en: 'civic'
    },
    {
        id: 3281,
        ru: 'гражданский',
        en: 'civilian'
    },
    {
        id: 3282,
        ru: 'цивилизация',
        en: 'civilization'
    },
    {
        id: 3283,
        ru: 'объяснить',
        en: 'clarify'
    },
    {
        id: 3284,
        ru: 'ясность',
        en: 'clarity'
    },
    {
        id: 3285,
        ru: 'столкновение',
        en: 'clash'
    },
    {
        id: 3286,
        ru: 'классификация',
        en: 'classification'
    },
    {
        id: 3287,
        ru: 'классифицировать',
        en: 'classify'
    },
    {
        id: 3288,
        ru: 'клерк',
        en: 'clerk'
    },
    {
        id: 3289,
        ru: 'утес',
        en: 'cliff'
    },
    {
        id: 3290,
        ru: 'цепляться',
        en: 'cling'
    },
    {
        id: 3291,
        ru: 'клиника',
        en: 'clinic'
    },
    {
        id: 3292,
        ru: 'клинический',
        en: 'clinical'
    },
    {
        id: 3293,
        ru: 'клип',
        en: 'clip'
    },
    {
        id: 3294,
        ru: 'закрытие',
        en: 'closure'
    },
    {
        id: 3295,
        ru: 'кластер',
        en: 'cluster'
    },
    {
        id: 3296,
        ru: 'коалиция',
        en: 'coalition'
    },
    {
        id: 3297,
        ru: 'прибрежный',
        en: 'coastal'
    },
    {
        id: 3298,
        ru: 'коктейль',
        en: 'cocktail'
    },
    {
        id: 3299,
        ru: 'когнитивный',
        en: 'cognitive'
    },
    {
        id: 3300,
        ru: 'совпадают',
        en: 'coincide'
    },
    {
        id: 3301,
        ru: 'совпадение',
        en: 'coincidence'
    },
    {
        id: 3302,
        ru: 'сотрудничать',
        en: 'collaborate'
    },
    {
        id: 3303,
        ru: 'сотрудничество',
        en: 'collaboration'
    },
    {
        id: 3304,
        ru: 'коллектив',
        en: 'collective'
    },
    {
        id: 3305,
        ru: 'коллекционер',
        en: 'collector'
    },
    {
        id: 3306,
        ru: 'столкновение',
        en: 'collision'
    },
    {
        id: 3307,
        ru: 'колониальный',
        en: 'colonial'
    },
    {
        id: 3308,
        ru: 'колония',
        en: 'colony'
    },
    {
        id: 3309,
        ru: 'красочный',
        en: 'colourful'
    },
    {
        id: 3310,
        ru: 'обозреватель',
        en: 'columnist'
    },
    {
        id: 3311,
        ru: 'бой',
        en: 'combat'
    },
    {
        id: 3312,
        ru: 'комический',
        en: 'comic'
    },
    {
        id: 3313,
        ru: 'командир',
        en: 'commander'
    },
    {
        id: 3314,
        ru: 'начать',
        en: 'commence'
    },
    {
        id: 3315,
        ru: 'комментарий',
        en: 'commentary'
    },
    {
        id: 3316,
        ru: 'комментатор',
        en: 'commentator'
    },
    {
        id: 3317,
        ru: 'коммерция',
        en: 'commerce'
    },
    {
        id: 3318,
        ru: 'комиссар',
        en: 'commissioner'
    },
    {
        id: 3319,
        ru: 'товар',
        en: 'commodity'
    },
    {
        id: 3320,
        ru: 'коммунист',
        en: 'communist'
    },
    {
        id: 3321,
        ru: 'компаньон',
        en: 'companion'
    },
    {
        id: 3322,
        ru: 'сопоставимый',
        en: 'comparable'
    },
    {
        id: 3323,
        ru: 'сравнительный',
        en: 'comparative'
    },
    {
        id: 3324,
        ru: 'сострадание',
        en: 'compassion'
    },
    {
        id: 3325,
        ru: 'заставлять',
        en: 'compel'
    },
    {
        id: 3326,
        ru: 'неотразимый',
        en: 'compelling'
    },
    {
        id: 3327,
        ru: 'компенсировать',
        en: 'compensate'
    },
    {
        id: 3328,
        ru: 'компенсация',
        en: 'compensation'
    },
    {
        id: 3329,
        ru: 'компетентность',
        en: 'competence'
    },
    {
        id: 3330,
        ru: 'компетентный',
        en: 'competent'
    },
    {
        id: 3331,
        ru: 'компилировать',
        en: 'compile'
    },
    {
        id: 3332,
        ru: 'дополнять',
        en: 'complement'
    },
    {
        id: 3333,
        ru: 'завершение',
        en: 'completion'
    },
    {
        id: 3334,
        ru: 'сложность',
        en: 'complexity'
    },
    {
        id: 3335,
        ru: 'согласие',
        en: 'compliance'
    },
    {
        id: 3336,
        ru: 'осложнение',
        en: 'complication'
    },
    {
        id: 3337,
        ru: 'исполнять',
        en: 'comply'
    },
    {
        id: 3338,
        ru: 'сочинять',
        en: 'compose'
    },
    {
        id: 3339,
        ru: 'композитор',
        en: 'composer'
    },
    {
        id: 3340,
        ru: 'состав',
        en: 'composition'
    },
    {
        id: 3341,
        ru: 'сложный',
        en: 'compound'
    },
    {
        id: 3342,
        ru: 'всесторонний',
        en: 'comprehensive'
    },
    {
        id: 3343,
        ru: 'включают в себя',
        en: 'comprise'
    },
    {
        id: 3344,
        ru: 'компромисс',
        en: 'compromise'
    },
    {
        id: 3345,
        ru: 'принудительный',
        en: 'compulsory'
    },
    {
        id: 3346,
        ru: 'вычислить',
        en: 'compute'
    },
    {
        id: 3347,
        ru: 'скрыть',
        en: 'conceal'
    },
    {
        id: 3348,
        ru: 'уступить',
        en: 'concede'
    },
    {
        id: 3349,
        ru: 'зачать',
        en: 'conceive'
    },
    {
        id: 3350,
        ru: 'зачатие',
        en: 'conception'
    },
    {
        id: 3351,
        ru: 'концессия',
        en: 'concession'
    },
    {
        id: 3352,
        ru: 'конкретный',
        en: 'concrete'
    },
    {
        id: 3353,
        ru: 'осуждать',
        en: 'condemn'
    },
    {
        id: 3354,
        ru: 'присуждать',
        en: 'confer'
    },
    {
        id: 3355,
        ru: 'признаваться',
        en: 'confess'
    },
    {
        id: 3356,
        ru: 'признание',
        en: 'confession'
    },
    {
        id: 3357,
        ru: 'конфигурация',
        en: 'configuration'
    },
    {
        id: 3358,
        ru: 'ограничивать',
        en: 'confine'
    },
    {
        id: 3359,
        ru: 'подтверждение',
        en: 'confirmation'
    },
    {
        id: 3360,
        ru: 'противостоять',
        en: 'confront'
    },
    {
        id: 3361,
        ru: 'конфронтация',
        en: 'confrontation'
    },
    {
        id: 3362,
        ru: 'путаница',
        en: 'confusion'
    },
    {
        id: 3363,
        ru: 'поздравляю',
        en: 'congratulate'
    },
    {
        id: 3364,
        ru: 'конгрегация',
        en: 'congregation'
    },
    {
        id: 3365,
        ru: 'конгрессмен',
        en: 'congressional'
    },
    {
        id: 3366,
        ru: 'завоевывать',
        en: 'conquer'
    },
    {
        id: 3367,
        ru: 'совесть',
        en: 'conscience'
    },
    {
        id: 3368,
        ru: 'сознание',
        en: 'consciousness'
    },
    {
        id: 3369,
        ru: 'последовательный',
        en: 'consecutive'
    },
    {
        id: 3370,
        ru: 'консенсус',
        en: 'consensus'
    },
    {
        id: 3371,
        ru: 'согласие',
        en: 'consent'
    },
    {
        id: 3372,
        ru: 'следовательно',
        en: 'consequently'
    },
    {
        id: 3373,
        ru: 'сохранение',
        en: 'conservation'
    },
    {
        id: 3374,
        ru: 'сохранять',
        en: 'conserve'
    },
    {
        id: 3375,
        ru: 'значительный',
        en: 'considerable'
    },
    {
        id: 3376,
        ru: 'значительно',
        en: 'considerably'
    },
    {
        id: 3377,
        ru: 'последовательность',
        en: 'consistency'
    },
    {
        id: 3378,
        ru: 'последовательно',
        en: 'consistently'
    },
    {
        id: 3379,
        ru: 'консолидировать',
        en: 'consolidate'
    },
    {
        id: 3380,
        ru: 'заговор',
        en: 'conspiracy'
    },
    {
        id: 3381,
        ru: 'избирательный округ',
        en: 'constituency'
    },
    {
        id: 3382,
        ru: 'составляют',
        en: 'constitute'
    },
    {
        id: 3383,
        ru: 'конституция',
        en: 'constitution'
    },
    {
        id: 3384,
        ru: 'конституционный',
        en: 'constitutional'
    },
    {
        id: 3385,
        ru: 'ограничение',
        en: 'constraint'
    },
    {
        id: 3386,
        ru: 'проконсультироваться',
        en: 'consult'
    },
    {
        id: 3387,
        ru: 'консультант',
        en: 'consultant'
    },
    {
        id: 3388,
        ru: 'консультация',
        en: 'consultation'
    },
    {
        id: 3389,
        ru: 'потребление',
        en: 'consumption'
    },
    {
        id: 3390,
        ru: 'созерцать',
        en: 'contemplate'
    },
    {
        id: 3391,
        ru: 'презрение',
        en: 'contempt'
    },
    {
        id: 3392,
        ru: 'утверждают',
        en: 'contend'
    },
    {
        id: 3393,
        ru: 'претендент',
        en: 'contender'
    },
    {
        id: 3394,
        ru: 'содержание',
        en: 'content'
    },
    {
        id: 3395,
        ru: 'разногласие',
        en: 'contention'
    },
    {
        id: 3396,
        ru: 'постоянно',
        en: 'continually'
    },
    {
        id: 3397,
        ru: 'подрядчик',
        en: 'contractor'
    },
    {
        id: 3398,
        ru: 'противоречие',
        en: 'contradiction'
    },
    {
        id: 3399,
        ru: 'вопреки',
        en: 'contrary'
    },
    {
        id: 3400,
        ru: 'участник',
        en: 'contributor'
    },
    {
        id: 3401,
        ru: 'спорный',
        en: 'controversial'
    },
    {
        id: 3402,
        ru: 'противоречие',
        en: 'controversy'
    },
    {
        id: 3403,
        ru: 'удобство',
        en: 'convenience'
    },
    {
        id: 3404,
        ru: 'соглашение',
        en: 'convention'
    },
    {
        id: 3405,
        ru: 'общепринятый',
        en: 'conventional'
    },
    {
        id: 3406,
        ru: 'конверсия',
        en: 'conversion'
    },
    {
        id: 3407,
        ru: 'передавать',
        en: 'convey'
    },
    {
        id: 3408,
        ru: 'осуждённый',
        en: 'convict'
    },
    {
        id: 3409,
        ru: 'убеждение',
        en: 'conviction'
    },
    {
        id: 3410,
        ru: 'убедительный',
        en: 'convincing'
    },
    {
        id: 3411,
        ru: 'сотрудничать',
        en: 'cooperate'
    },
    {
        id: 3412,
        ru: 'кооперативный',
        en: 'cooperative'
    },
    {
        id: 3413,
        ru: 'координата',
        en: 'coordinate'
    },
    {
        id: 3414,
        ru: 'координация',
        en: 'coordination'
    },
    {
        id: 3415,
        ru: 'координатор',
        en: 'coordinator'
    },
    {
        id: 3416,
        ru: 'коп',
        en: 'cop'
    },
    {
        id: 3417,
        ru: 'справляться',
        en: 'cope'
    },
    {
        id: 3418,
        ru: 'медь',
        en: 'copper'
    },
    {
        id: 3419,
        ru: 'авторское право',
        en: 'copyright'
    },
    {
        id: 3420,
        ru: 'корпорация',
        en: 'corporation'
    },
    {
        id: 3421,
        ru: 'исправление',
        en: 'correction'
    },
    {
        id: 3422,
        ru: 'коррелировать',
        en: 'correlate'
    },
    {
        id: 3423,
        ru: 'корреляция',
        en: 'correlation'
    },
    {
        id: 3424,
        ru: 'соответствовать',
        en: 'correspond'
    },
    {
        id: 3425,
        ru: 'переписка',
        en: 'correspondence'
    },
    {
        id: 3426,
        ru: 'корреспондент',
        en: 'correspondent'
    },
    {
        id: 3427,
        ru: 'соответствующий',
        en: 'corresponding'
    },
    {
        id: 3428,
        ru: 'коридор',
        en: 'corridor'
    },
    {
        id: 3429,
        ru: 'коррумпированный',
        en: 'corrupt'
    },
    {
        id: 3430,
        ru: 'коррупция',
        en: 'corruption'
    },
    {
        id: 3431,
        ru: 'дорогостоящий',
        en: 'costly'
    },
    {
        id: 3432,
        ru: 'советник',
        en: 'councillor'
    },
    {
        id: 3433,
        ru: 'консультирование',
        en: 'counselling'
    },
    {
        id: 3434,
        ru: 'консультант',
        en: 'counsellor'
    },
    {
        id: 3435,
        ru: 'прилавок',
        en: 'counter'
    },
    {
        id: 3436,
        ru: 'прилавок',
        en: 'counter'
    },
    {
        id: 3437,
        ru: 'коллега',
        en: 'counterpart'
    },
    {
        id: 3438,
        ru: 'бесчисленное множество',
        en: 'countless'
    },
    {
        id: 3439,
        ru: 'переворот',
        en: 'coup'
    },
    {
        id: 3440,
        ru: 'учтивость',
        en: 'courtesy'
    },
    {
        id: 3441,
        ru: 'покрытие',
        en: 'coverage'
    },
    {
        id: 3442,
        ru: 'трескаться',
        en: 'crack'
    },
    {
        id: 3443,
        ru: 'ремесло',
        en: 'craft'
    },
    {
        id: 3444,
        ru: 'ползти',
        en: 'crawl'
    },
    {
        id: 3445,
        ru: 'креативность',
        en: 'creativity'
    },
    {
        id: 3446,
        ru: 'создатель',
        en: 'creator'
    },
    {
        id: 3447,
        ru: 'доверие',
        en: 'credibility'
    },
    {
        id: 3448,
        ru: 'заслуживающий доверия',
        en: 'credible'
    },
    {
        id: 3449,
        ru: 'слизняк',
        en: 'creep'
    },
    {
        id: 3450,
        ru: 'критически',
        en: 'critically'
    },
    {
        id: 3451,
        ru: 'критика',
        en: 'critique'
    },
    {
        id: 3452,
        ru: 'корона',
        en: 'crown'
    },
    {
        id: 3453,
        ru: 'сырой',
        en: 'crude'
    },
    {
        id: 3454,
        ru: 'круиз',
        en: 'cruise'
    },
    {
        id: 3455,
        ru: 'раздавить',
        en: 'crush'
    },
    {
        id: 3456,
        ru: 'кристалл',
        en: 'crystal'
    },
    {
        id: 3457,
        ru: 'кий',
        en: 'cue'
    },
    {
        id: 3458,
        ru: 'культ',
        en: 'cult'
    },
    {
        id: 3459,
        ru: 'культивировать',
        en: 'cultivate'
    },
    {
        id: 3460,
        ru: 'любопытство',
        en: 'curiosity'
    },
    {
        id: 3461,
        ru: 'любопытный',
        en: 'curious'
    },
    {
        id: 3462,
        ru: 'учебный план',
        en: 'curriculum'
    },
    {
        id: 3463,
        ru: 'попечение',
        en: 'custody'
    },
    {
        id: 3464,
        ru: 'милый',
        en: 'cute'
    },
    {
        id: 3465,
        ru: 'резка',
        en: 'cutting'
    },
    {
        id: 3466,
        ru: 'циничный',
        en: 'cynical'
    },
    {
        id: 3467,
        ru: 'молочный',
        en: 'dairy'
    },
    {
        id: 3468,
        ru: 'плотина',
        en: 'dam'
    },
    {
        id: 3469,
        ru: 'разрушительный',
        en: 'damaging'
    },
    {
        id: 3470,
        ru: 'сметь',
        en: 'dare'
    },
    {
        id: 3471,
        ru: 'тьма',
        en: 'darkness'
    },
    {
        id: 3472,
        ru: 'база данных',
        en: 'database'
    },
    {
        id: 3473,
        ru: 'рассвет',
        en: 'dawn'
    },
    {
        id: 3474,
        ru: 'крайний срок',
        en: 'deadline'
    },
    {
        id: 3475,
        ru: 'смертельный',
        en: 'deadly'
    },
    {
        id: 3476,
        ru: 'дилер',
        en: 'dealer'
    },
    {
        id: 3477,
        ru: 'обломки',
        en: 'debris'
    },
    {
        id: 3478,
        ru: 'дебют',
        en: 'debut'
    },
    {
        id: 3479,
        ru: 'принятие решений',
        en: 'decision-making'
    },
    {
        id: 3480,
        ru: 'решительный',
        en: 'decisive'
    },
    {
        id: 3481,
        ru: 'палуба',
        en: 'deck'
    },
    {
        id: 3482,
        ru: 'декларация',
        en: 'declaration'
    },
    {
        id: 3483,
        ru: 'преданный',
        en: 'dedicated'
    },
    {
        id: 3484,
        ru: 'преданность',
        en: 'dedication'
    },
    {
        id: 3485,
        ru: 'поступок',
        en: 'deed'
    },
    {
        id: 3486,
        ru: 'считаем',
        en: 'deem'
    },
    {
        id: 3487,
        ru: 'по умолчанию',
        en: 'default'
    },
    {
        id: 3488,
        ru: 'дефект',
        en: 'defect'
    },
    {
        id: 3489,
        ru: 'защитник',
        en: 'defender'
    },
    {
        id: 3490,
        ru: 'оборонительный',
        en: 'defensive'
    },
    {
        id: 3491,
        ru: 'дефицит',
        en: 'deficiency'
    },
    {
        id: 3492,
        ru: 'дефицит',
        en: 'deficit'
    },
    {
        id: 3493,
        ru: 'бросать вызов',
        en: 'defy'
    },
    {
        id: 3494,
        ru: 'делегат',
        en: 'delegate'
    },
    {
        id: 3495,
        ru: 'делегация',
        en: 'delegation'
    },
    {
        id: 3496,
        ru: 'удалить',
        en: 'delete'
    },
    {
        id: 3497,
        ru: 'деликатный',
        en: 'delicate'
    },
    {
        id: 3498,
        ru: 'демократия',
        en: 'democracy'
    },
    {
        id: 3499,
        ru: 'демократический',
        en: 'democratic'
    },
    {
        id: 3500,
        ru: 'демон',
        en: 'demon'
    },
    {
        id: 3501,
        ru: 'демонстрация',
        en: 'demonstration'
    },
    {
        id: 3502,
        ru: 'отрицание',
        en: 'denial'
    },
    {
        id: 3503,
        ru: 'денонсировать',
        en: 'denounce'
    },
    {
        id: 3504,
        ru: 'плотный',
        en: 'dense'
    },
    {
        id: 3505,
        ru: 'плотность',
        en: 'density'
    },
    {
        id: 3506,
        ru: 'отходить',
        en: 'depart'
    },
    {
        id: 3507,
        ru: 'зависимость',
        en: 'dependence'
    },
    {
        id: 3508,
        ru: 'зависимый',
        en: 'dependent'
    },
    {
        id: 3509,
        ru: 'изображать',
        en: 'depict'
    },
    {
        id: 3510,
        ru: 'развертывать',
        en: 'deploy'
    },
    {
        id: 3511,
        ru: 'развертывание',
        en: 'deployment'
    },
    {
        id: 3512,
        ru: 'депозит',
        en: 'deposit'
    },
    {
        id: 3513,
        ru: 'депрессия',
        en: 'depression'
    },
    {
        id: 3514,
        ru: 'лишать',
        en: 'deprive'
    },
    {
        id: 3515,
        ru: 'заместитель',
        en: 'deputy'
    },
    {
        id: 3516,
        ru: 'выводить',
        en: 'derive'
    },
    {
        id: 3517,
        ru: 'спускаться',
        en: 'descend'
    },
    {
        id: 3518,
        ru: 'спуск',
        en: 'descent'
    },
    {
        id: 3519,
        ru: 'назначать',
        en: 'designate'
    },
    {
        id: 3520,
        ru: 'желательно',
        en: 'desirable'
    },
    {
        id: 3521,
        ru: 'рабочий стол',
        en: 'desktop'
    },
    {
        id: 3522,
        ru: 'отчаянно',
        en: 'desperately'
    },
    {
        id: 3523,
        ru: 'разрушение',
        en: 'destruction'
    },
    {
        id: 3524,
        ru: 'разрушительный',
        en: 'destructive'
    },
    {
        id: 3525,
        ru: 'задерживать',
        en: 'detain'
    },
    {
        id: 3526,
        ru: 'обнаружение',
        en: 'detection'
    },
    {
        id: 3527,
        ru: 'задержание',
        en: 'detention'
    },
    {
        id: 3528,
        ru: 'ухудшаться',
        en: 'deteriorate'
    },
    {
        id: 3529,
        ru: 'определение',
        en: 'determination'
    },
    {
        id: 3530,
        ru: 'опустошать',
        en: 'devastate'
    },
    {
        id: 3531,
        ru: 'дьявол',
        en: 'devil'
    },
    {
        id: 3532,
        ru: 'изобретать',
        en: 'devise'
    },
    {
        id: 3533,
        ru: 'посвящать',
        en: 'devote'
    },
    {
        id: 3534,
        ru: 'диагностировать',
        en: 'diagnose'
    },
    {
        id: 3535,
        ru: 'диагноз',
        en: 'diagnosis'
    },
    {
        id: 3536,
        ru: 'диктовать',
        en: 'dictate'
    },
    {
        id: 3537,
        ru: 'диктатор',
        en: 'dictator'
    },
    {
        id: 3538,
        ru: 'отличаются',
        en: 'differ'
    },
    {
        id: 3539,
        ru: 'дифференцировать',
        en: 'differentiate'
    },
    {
        id: 3540,
        ru: 'достоинство',
        en: 'dignity'
    },
    {
        id: 3541,
        ru: 'дилемма',
        en: 'dilemma'
    },
    {
        id: 3542,
        ru: 'измерение',
        en: 'dimension'
    },
    {
        id: 3543,
        ru: 'уменьшать',
        en: 'diminish'
    },
    {
        id: 3544,
        ru: 'окунать',
        en: 'dip'
    },
    {
        id: 3545,
        ru: 'дипломат',
        en: 'diplomat'
    },
    {
        id: 3546,
        ru: 'дипломатический',
        en: 'diplomatic'
    },
    {
        id: 3547,
        ru: 'каталог',
        en: 'directory'
    },
    {
        id: 3548,
        ru: 'инвалидность',
        en: 'disability'
    },
    {
        id: 3549,
        ru: 'неполноценный',
        en: 'disabled'
    },
    {
        id: 3550,
        ru: 'несогласие',
        en: 'disagreement'
    },
    {
        id: 3551,
        ru: 'разочаровать',
        en: 'disappoint'
    },
    {
        id: 3552,
        ru: 'разочарование',
        en: 'disappointment'
    },
    {
        id: 3553,
        ru: 'катастрофический',
        en: 'disastrous'
    },
    {
        id: 3554,
        ru: 'отказаться',
        en: 'discard'
    },
    {
        id: 3555,
        ru: 'увольнять',
        en: 'discharge'
    },
    {
        id: 3556,
        ru: 'раскрывать',
        en: 'disclose'
    },
    {
        id: 3557,
        ru: 'раскрытие информации',
        en: 'disclosure'
    },
    {
        id: 3558,
        ru: 'обескураживать',
        en: 'discourage'
    },
    {
        id: 3559,
        ru: 'дискурс',
        en: 'discourse'
    },
    {
        id: 3560,
        ru: 'осмотрительность',
        en: 'discretion'
    },
    {
        id: 3561,
        ru: 'дискриминация',
        en: 'discrimination'
    },
    {
        id: 3562,
        ru: 'увольнение',
        en: 'dismissal'
    },
    {
        id: 3563,
        ru: 'расстройство',
        en: 'disorder'
    },
    {
        id: 3564,
        ru: 'вытеснять',
        en: 'displace'
    },
    {
        id: 3565,
        ru: 'утилизация',
        en: 'disposal'
    },
    {
        id: 3566,
        ru: 'распоряжаться',
        en: 'dispose'
    },
    {
        id: 3567,
        ru: 'спор',
        en: 'dispute'
    },
    {
        id: 3568,
        ru: 'нарушать',
        en: 'disrupt'
    },
    {
        id: 3569,
        ru: 'нарушение',
        en: 'disruption'
    },
    {
        id: 3570,
        ru: 'растворяться',
        en: 'dissolve'
    },
    {
        id: 3571,
        ru: 'далекий',
        en: 'distant'
    },
    {
        id: 3572,
        ru: 'отчетливый',
        en: 'distinct'
    },
    {
        id: 3573,
        ru: 'различие',
        en: 'distinction'
    },
    {
        id: 3574,
        ru: 'отличительный',
        en: 'distinctive'
    },
    {
        id: 3575,
        ru: 'различать',
        en: 'distinguish'
    },
    {
        id: 3576,
        ru: 'искажать',
        en: 'distort'
    },
    {
        id: 3577,
        ru: 'отвлекать',
        en: 'distract'
    },
    {
        id: 3578,
        ru: 'бедствие',
        en: 'distress'
    },
    {
        id: 3579,
        ru: 'беспокоить',
        en: 'disturb'
    },
    {
        id: 3580,
        ru: 'тревожный',
        en: 'disturbing'
    },
    {
        id: 3581,
        ru: 'нырять',
        en: 'dive'
    },
    {
        id: 3582,
        ru: 'разнообразный',
        en: 'diverse'
    },
    {
        id: 3583,
        ru: 'разнообразие',
        en: 'diversity'
    },
    {
        id: 3584,
        ru: 'отвлекать',
        en: 'divert'
    },
    {
        id: 3585,
        ru: 'божественный',
        en: 'divine'
    },
    {
        id: 3586,
        ru: 'развод',
        en: 'divorce'
    },
    {
        id: 3587,
        ru: 'доктрина',
        en: 'doctrine'
    },
    {
        id: 3588,
        ru: 'документация',
        en: 'documentation'
    },
    {
        id: 3589,
        ru: 'домен',
        en: 'domain'
    },
    {
        id: 3590,
        ru: 'доминирование',
        en: 'dominance'
    },
    {
        id: 3591,
        ru: 'доминирующий',
        en: 'dominant'
    },
    {
        id: 3592,
        ru: 'пожертвование',
        en: 'donation'
    },
    {
        id: 3593,
        ru: 'донор',
        en: 'donor'
    },
    {
        id: 3594,
        ru: 'доза',
        en: 'dose'
    },
    {
        id: 3595,
        ru: 'точка',
        en: 'dot'
    },
    {
        id: 3596,
        ru: 'центр города',
        en: 'downtown'
    },
    {
        id: 3597,
        ru: 'осушать',
        en: 'drain'
    },
    {
        id: 3598,
        ru: 'драматически',
        en: 'dramatically'
    },
    {
        id: 3599,
        ru: 'дрейф',
        en: 'drift'
    },
    {
        id: 3600,
        ru: 'вождение',
        en: 'driving'
    },
    {
        id: 3601,
        ru: 'засуха',
        en: 'drought'
    },
    {
        id: 3602,
        ru: 'тонуть',
        en: 'drown'
    },
    {
        id: 3603,
        ru: 'двойной',
        en: 'dual'
    },
    {
        id: 3604,
        ru: 'дубляж',
        en: 'dub'
    },
    {
        id: 3605,
        ru: 'тупой',
        en: 'dull'
    },
    {
        id: 3606,
        ru: 'тупой',
        en: 'dumb'
    },
    {
        id: 3607,
        ru: 'свалка',
        en: 'dump'
    },
    {
        id: 3608,
        ru: 'дуэт',
        en: 'duo'
    },
    {
        id: 3609,
        ru: 'продолжительность',
        en: 'duration'
    },
    {
        id: 3610,
        ru: 'динамический',
        en: 'dynamic'
    },
    {
        id: 3611,
        ru: 'жаждущий',
        en: 'eager'
    },
    {
        id: 3612,
        ru: 'заработок',
        en: 'earnings'
    },
    {
        id: 3613,
        ru: 'простота',
        en: 'ease'
    },
    {
        id: 3614,
        ru: 'эхо',
        en: 'echo'
    },
    {
        id: 3615,
        ru: 'экологический',
        en: 'ecological'
    },
    {
        id: 3616,
        ru: 'экономика',
        en: 'economics'
    },
    {
        id: 3617,
        ru: 'экономист',
        en: 'economist'
    },
    {
        id: 3618,
        ru: 'редакционная статья',
        en: 'editorial'
    },
    {
        id: 3619,
        ru: 'педагог',
        en: 'educator'
    },
    {
        id: 3620,
        ru: 'эффективность',
        en: 'effectiveness'
    },
    {
        id: 3621,
        ru: 'эффективность',
        en: 'efficiency'
    },
    {
        id: 3622,
        ru: 'эффективно',
        en: 'efficiently'
    },
    {
        id: 3623,
        ru: 'эго',
        en: 'ego'
    },
    {
        id: 3624,
        ru: 'разрабатывать',
        en: 'elaborate'
    },
    {
        id: 3625,
        ru: 'локоть',
        en: 'elbow'
    },
    {
        id: 3626,
        ru: 'избирательный',
        en: 'electoral'
    },
    {
        id: 3627,
        ru: 'электроника',
        en: 'electronics'
    },
    {
        id: 3628,
        ru: 'элегантный',
        en: 'elegant'
    },
    {
        id: 3629,
        ru: 'элементарный',
        en: 'elementary'
    },
    {
        id: 3630,
        ru: 'возвышать',
        en: 'elevate'
    },
    {
        id: 3631,
        ru: 'имеющий право',
        en: 'eligible'
    },
    {
        id: 3632,
        ru: 'устранять',
        en: 'eliminate'
    },
    {
        id: 3633,
        ru: 'элита',
        en: 'elite'
    },
    {
        id: 3634,
        ru: 'встать на якорь',
        en: 'embark'
    },
    {
        id: 3635,
        ru: 'смущение',
        en: 'embarrassment'
    },
    {
        id: 3636,
        ru: 'посольство',
        en: 'embassy'
    },
    {
        id: 3637,
        ru: 'вставлять',
        en: 'embed'
    },
    {
        id: 3638,
        ru: 'воплощать',
        en: 'embody'
    },
    {
        id: 3639,
        ru: 'объятие',
        en: 'embrace'
    },
    {
        id: 3640,
        ru: 'возникновение',
        en: 'emergence'
    },
    {
        id: 3641,
        ru: 'эмиссия',
        en: 'emission'
    },
    {
        id: 3642,
        ru: 'эмоционально',
        en: 'emotionally'
    },
    {
        id: 3643,
        ru: 'империя',
        en: 'empire'
    },
    {
        id: 3644,
        ru: 'эмпирический',
        en: 'empirical'
    },
    {
        id: 3645,
        ru: 'уполномочить',
        en: 'empower'
    },
    {
        id: 3646,
        ru: 'принять',
        en: 'enact'
    },
    {
        id: 3647,
        ru: 'охватывать',
        en: 'encompass'
    },
    {
        id: 3648,
        ru: 'поощрение',
        en: 'encouragement'
    },
    {
        id: 3649,
        ru: 'поощрение',
        en: 'encouraging'
    },
    {
        id: 3650,
        ru: 'стараться',
        en: 'endeavour'
    },
    {
        id: 3651,
        ru: 'бесконечный',
        en: 'endless'
    },
    {
        id: 3652,
        ru: 'одобрять',
        en: 'endorse'
    },
    {
        id: 3653,
        ru: 'поддержка',
        en: 'endorsement'
    },
    {
        id: 3654,
        ru: 'терпеть',
        en: 'endure'
    },
    {
        id: 3655,
        ru: 'обеспечивать соблюдение',
        en: 'enforce'
    },
    {
        id: 3656,
        ru: 'исполнение',
        en: 'enforcement'
    },
    {
        id: 3657,
        ru: 'обручение',
        en: 'engagement'
    },
    {
        id: 3658,
        ru: 'увлекательный',
        en: 'engaging'
    },
    {
        id: 3659,
        ru: 'приятный',
        en: 'enjoyable'
    },
    {
        id: 3660,
        ru: 'запросить',
        en: 'enquire'
    },
    {
        id: 3661,
        ru: 'обогащать',
        en: 'enrich'
    },
    {
        id: 3662,
        ru: 'зарегистрироваться',
        en: 'enrol'
    },
    {
        id: 3663,
        ru: 'последовать',
        en: 'ensue'
    },
    {
        id: 3664,
        ru: 'предприятие',
        en: 'enterprise'
    },
    {
        id: 3665,
        ru: 'развлекательный',
        en: 'entertaining'
    },
    {
        id: 3666,
        ru: 'энтузиаст',
        en: 'enthusiast'
    },
    {
        id: 3667,
        ru: 'давать право',
        en: 'entitle'
    },
    {
        id: 3668,
        ru: 'сущность',
        en: 'entity'
    },
    {
        id: 3669,
        ru: 'предприниматель',
        en: 'entrepreneur'
    },
    {
        id: 3670,
        ru: 'конверт',
        en: 'envelope'
    },
    {
        id: 3671,
        ru: 'эпидемия',
        en: 'epidemic'
    },
    {
        id: 3672,
        ru: 'равенство',
        en: 'equality'
    },
    {
        id: 3673,
        ru: 'уравнение',
        en: 'equation'
    },
    {
        id: 3674,
        ru: 'оборудовать',
        en: 'equip'
    },
    {
        id: 3675,
        ru: 'эквивалент',
        en: 'equivalent'
    },
    {
        id: 3676,
        ru: 'эра',
        en: 'era'
    },
    {
        id: 3677,
        ru: 'прямостоячий',
        en: 'erect'
    },
    {
        id: 3678,
        ru: 'извергаться',
        en: 'erupt'
    },
    {
        id: 3679,
        ru: 'обострять',
        en: 'escalate'
    },
    {
        id: 3680,
        ru: 'сущность',
        en: 'essence'
    },
    {
        id: 3681,
        ru: 'по сути',
        en: 'essentially'
    },
    {
        id: 3682,
        ru: 'учреждение',
        en: 'establishment'
    },
    {
        id: 3683,
        ru: 'вечный',
        en: 'eternal'
    },
    {
        id: 3684,
        ru: 'этика',
        en: 'ethic'
    },
    {
        id: 3685,
        ru: 'этнический',
        en: 'ethnic'
    },
    {
        id: 3686,
        ru: 'эвакуируюсь',
        en: 'evacuate'
    },
    {
        id: 3687,
        ru: 'оценка',
        en: 'evaluation'
    },
    {
        id: 3688,
        ru: 'очевидный',
        en: 'evident'
    },
    {
        id: 3689,
        ru: 'вызывать',
        en: 'evoke'
    },
    {
        id: 3690,
        ru: 'эволюция',
        en: 'evolution'
    },
    {
        id: 3691,
        ru: 'эволюционный',
        en: 'evolutionary'
    },
    {
        id: 3692,
        ru: 'эволюционировать',
        en: 'evolve'
    },
    {
        id: 3693,
        ru: 'преувеличивать',
        en: 'exaggerate'
    },
    {
        id: 3694,
        ru: 'превосходить',
        en: 'exceed'
    },
    {
        id: 3695,
        ru: 'совершенство',
        en: 'excellence'
    },
    {
        id: 3696,
        ru: 'исключение',
        en: 'exception'
    },
    {
        id: 3697,
        ru: 'исключительный',
        en: 'exceptional'
    },
    {
        id: 3698,
        ru: 'избыток',
        en: 'excess'
    },
    {
        id: 3699,
        ru: 'излишний',
        en: 'excessive'
    },
    {
        id: 3700,
        ru: 'исключать',
        en: 'exclude'
    },
    {
        id: 3701,
        ru: 'исключение',
        en: 'exclusion'
    },
    {
        id: 3702,
        ru: 'эксклюзивный',
        en: 'exclusive'
    },
    {
        id: 3703,
        ru: 'исключительно',
        en: 'exclusively'
    },
    {
        id: 3704,
        ru: 'выполнять',
        en: 'execute'
    },
    {
        id: 3705,
        ru: 'исполнение',
        en: 'execution'
    },
    {
        id: 3706,
        ru: 'оказывать',
        en: 'exert'
    },
    {
        id: 3707,
        ru: 'экспонат',
        en: 'exhibit'
    },
    {
        id: 3708,
        ru: 'изгнание',
        en: 'exile'
    },
    {
        id: 3709,
        ru: 'Выход',
        en: 'exit'
    },
    {
        id: 3710,
        ru: 'экзотический',
        en: 'exotic'
    },
    {
        id: 3711,
        ru: 'расширение',
        en: 'expansion'
    },
    {
        id: 3712,
        ru: 'расходы',
        en: 'expenditure'
    },
    {
        id: 3713,
        ru: 'экспериментальный',
        en: 'experimental'
    },
    {
        id: 3714,
        ru: 'экспертиза',
        en: 'expertise'
    },
    {
        id: 3715,
        ru: 'истекает',
        en: 'expire'
    },
    {
        id: 3716,
        ru: 'явный',
        en: 'explicit'
    },
    {
        id: 3717,
        ru: 'явно',
        en: 'explicitly'
    },
    {
        id: 3718,
        ru: 'эксплуатировать',
        en: 'exploit'
    },
    {
        id: 3719,
        ru: 'эксплуатация',
        en: 'exploitation'
    },
    {
        id: 3720,
        ru: 'взрывчатое вещество',
        en: 'explosive'
    },
    {
        id: 3721,
        ru: 'контакт',
        en: 'exposure'
    },
    {
        id: 3722,
        ru: 'расширение',
        en: 'extension'
    },
    {
        id: 3723,
        ru: 'обширный',
        en: 'extensive'
    },
    {
        id: 3724,
        ru: 'экстенсивно',
        en: 'extensively'
    },
    {
        id: 3725,
        ru: 'извлекать',
        en: 'extract'
    },
    {
        id: 3726,
        ru: 'экстремистский',
        en: 'extremist'
    },
    {
        id: 3727,
        ru: 'ткань',
        en: 'fabric'
    },
    {
        id: 3728,
        ru: 'поразительнй',
        en: 'fabulous'
    },
    {
        id: 3729,
        ru: 'способствовать',
        en: 'facilitate'
    },
    {
        id: 3730,
        ru: 'фракция',
        en: 'faction'
    },
    {
        id: 3731,
        ru: 'факультет',
        en: 'faculty'
    },
    {
        id: 3732,
        ru: 'тускнеть',
        en: 'fade'
    },
    {
        id: 3733,
        ru: 'неуспешный',
        en: 'failed'
    },
    {
        id: 3734,
        ru: 'справедливость',
        en: 'fairness'
    },
    {
        id: 3735,
        ru: 'фальшивый',
        en: 'fake'
    },
    {
        id: 3736,
        ru: 'слава',
        en: 'fame'
    },
    {
        id: 3737,
        ru: 'фантастика',
        en: 'fantasy'
    },
    {
        id: 3738,
        ru: 'плата за проезд',
        en: 'fare'
    },
    {
        id: 3739,
        ru: 'фатальный',
        en: 'fatal'
    },
    {
        id: 3740,
        ru: 'судьба',
        en: 'fate'
    },
    {
        id: 3741,
        ru: 'благоприятный',
        en: 'favourable'
    },
    {
        id: 3742,
        ru: 'подвиг',
        en: 'feat'
    },
    {
        id: 3743,
        ru: 'федеральный',
        en: 'federal'
    },
    {
        id: 3744,
        ru: 'феминистка',
        en: 'feminist'
    },
    {
        id: 3745,
        ru: 'высокая температура',
        en: 'fever'
    },
    {
        id: 3746,
        ru: 'волокно',
        en: 'fibre'
    },
    {
        id: 3747,
        ru: 'яростный',
        en: 'fierce'
    },
    {
        id: 3748,
        ru: 'кинорежиссер',
        en: 'film-maker'
    },
    {
        id: 3749,
        ru: 'фильтр',
        en: 'filter'
    },
    {
        id: 3750,
        ru: 'отлично',
        en: 'fine'
    },
    {
        id: 3751,
        ru: 'огнестрельное оружие',
        en: 'firearm'
    },
    {
        id: 3752,
        ru: 'пожарный',
        en: 'firefighter'
    },
    {
        id: 3753,
        ru: 'фейерверк',
        en: 'firework'
    },
    {
        id: 3754,
        ru: 'твердый',
        en: 'firm'
    },
    {
        id: 3755,
        ru: 'твердо',
        en: 'firmly'
    },
    {
        id: 3756,
        ru: 'соответствовать',
        en: 'fit'
    },
    {
        id: 3757,
        ru: 'приспособление',
        en: 'fixture'
    },
    {
        id: 3758,
        ru: 'вкус',
        en: 'flavour'
    },
    {
        id: 3759,
        ru: 'недостаток',
        en: 'flaw'
    },
    {
        id: 3760,
        ru: 'несовершенный',
        en: 'flawed'
    },
    {
        id: 3761,
        ru: 'бежать',
        en: 'flee'
    },
    {
        id: 3762,
        ru: 'флот',
        en: 'fleet'
    },
    {
        id: 3763,
        ru: 'плоть',
        en: 'flesh'
    },
    {
        id: 3764,
        ru: 'гибкость',
        en: 'flexibility'
    },
    {
        id: 3765,
        ru: 'процветать',
        en: 'flourish'
    },
    {
        id: 3766,
        ru: 'жидкость',
        en: 'fluid'
    },
    {
        id: 3767,
        ru: 'любящий',
        en: 'fond'
    },
    {
        id: 3768,
        ru: 'дурак',
        en: 'fool'
    },
    {
        id: 3769,
        ru: 'отснятый материал',
        en: 'footage'
    },
    {
        id: 3770,
        ru: 'запрещать',
        en: 'forbid'
    },
    {
        id: 3771,
        ru: 'прогноз',
        en: 'forecast'
    },
    {
        id: 3772,
        ru: 'иностранец',
        en: 'foreigner'
    },
    {
        id: 3773,
        ru: 'кузница',
        en: 'forge'
    },
    {
        id: 3774,
        ru: 'формат',
        en: 'format'
    },
    {
        id: 3775,
        ru: 'формирование',
        en: 'formation'
    },
    {
        id: 3776,
        ru: 'раньше',
        en: 'formerly'
    },
    {
        id: 3777,
        ru: 'формула',
        en: 'formula'
    },
    {
        id: 3778,
        ru: 'формулировать',
        en: 'formulate'
    },
    {
        id: 3779,
        ru: 'вперед',
        en: 'forth'
    },
    {
        id: 3780,
        ru: 'предстоящий',
        en: 'forthcoming'
    },
    {
        id: 3781,
        ru: 'повезло',
        en: 'fortunate'
    },
    {
        id: 3782,
        ru: 'форум',
        en: 'forum'
    },
    {
        id: 3783,
        ru: 'ископаемое',
        en: 'fossil'
    },
    {
        id: 3784,
        ru: 'взращивать',
        en: 'foster'
    },
    {
        id: 3785,
        ru: 'фундамент',
        en: 'foundation'
    },
    {
        id: 3786,
        ru: 'основатель',
        en: 'founder'
    },
    {
        id: 3787,
        ru: 'дробь',
        en: 'fraction'
    },
    {
        id: 3788,
        ru: 'хрупкий',
        en: 'fragile'
    },
    {
        id: 3789,
        ru: 'фрагмент',
        en: 'fragment'
    },
    {
        id: 3790,
        ru: 'рамки',
        en: 'framework'
    },
    {
        id: 3791,
        ru: 'франшиза',
        en: 'franchise'
    },
    {
        id: 3792,
        ru: 'честно говоря',
        en: 'frankly'
    },
    {
        id: 3793,
        ru: 'мошенничество',
        en: 'fraud'
    },
    {
        id: 3794,
        ru: 'свободно',
        en: 'freely'
    },
    {
        id: 3795,
        ru: 'частый',
        en: 'frequent'
    },
    {
        id: 3796,
        ru: 'расстроенный',
        en: 'frustrated'
    },
    {
        id: 3797,
        ru: 'раздражающий',
        en: 'frustrating'
    },
    {
        id: 3798,
        ru: 'разочарование',
        en: 'frustration'
    },
    {
        id: 3799,
        ru: 'выполнить',
        en: 'fulfil'
    },
    {
        id: 3800,
        ru: 'на постоянной основе',
        en: 'full-time'
    },
    {
        id: 3801,
        ru: 'функциональный',
        en: 'functional'
    },
    {
        id: 3802,
        ru: 'принципиально',
        en: 'fundamentally'
    },
    {
        id: 3803,
        ru: 'сбор средств',
        en: 'fundraising'
    },
    {
        id: 3804,
        ru: 'похороны',
        en: 'funeral'
    },
    {
        id: 3805,
        ru: 'яростный',
        en: 'furious'
    },
    {
        id: 3806,
        ru: 'галлон',
        en: 'gallon'
    },
    {
        id: 3807,
        ru: 'играть в азартные игры',
        en: 'gambling'
    },
    {
        id: 3808,
        ru: 'игровой',
        en: 'gaming'
    },
    {
        id: 3809,
        ru: 'встреча',
        en: 'gathering'
    },
    {
        id: 3810,
        ru: 'гей',
        en: 'gay'
    },
    {
        id: 3811,
        ru: 'взгляд',
        en: 'gaze'
    },
    {
        id: 3812,
        ru: 'механизм',
        en: 'gear'
    },
    {
        id: 3813,
        ru: 'пол',
        en: 'gender'
    },
    {
        id: 3814,
        ru: 'ген',
        en: 'gene'
    },
    {
        id: 3815,
        ru: 'общий',
        en: 'generic'
    },
    {
        id: 3816,
        ru: 'генетический',
        en: 'genetic'
    },
    {
        id: 3817,
        ru: 'гений',
        en: 'genius'
    },
    {
        id: 3818,
        ru: 'геноцид',
        en: 'genocide'
    },
    {
        id: 3819,
        ru: 'подлинный',
        en: 'genuine'
    },
    {
        id: 3820,
        ru: 'искренне',
        en: 'genuinely'
    },
    {
        id: 3821,
        ru: 'жест',
        en: 'gesture'
    },
    {
        id: 3822,
        ru: 'концерт',
        en: 'gig'
    },
    {
        id: 3823,
        ru: 'взглянуть мельком',
        en: 'glance'
    },
    {
        id: 3824,
        ru: 'случайно заметить',
        en: 'glimpse'
    },
    {
        id: 3825,
        ru: 'глобализация',
        en: 'globalization'
    },
    {
        id: 3826,
        ru: 'глобус',
        en: 'globe'
    },
    {
        id: 3827,
        ru: 'славный',
        en: 'glorious'
    },
    {
        id: 3828,
        ru: 'слава',
        en: 'glory'
    },
    {
        id: 3829,
        ru: 'золотой',
        en: 'golden'
    },
    {
        id: 3830,
        ru: 'доброта',
        en: 'goodness'
    },
    {
        id: 3831,
        ru: 'великолепный',
        en: 'gorgeous'
    },
    {
        id: 3832,
        ru: 'управление',
        en: 'governance'
    },
    {
        id: 3833,
        ru: 'губернатор',
        en: 'governor'
    },
    {
        id: 3834,
        ru: 'милость',
        en: 'grace'
    },
    {
        id: 3835,
        ru: 'графический',
        en: 'graphic'
    },
    {
        id: 3836,
        ru: 'графика',
        en: 'graphics'
    },
    {
        id: 3837,
        ru: 'понять',
        en: 'grasp'
    },
    {
        id: 3838,
        ru: 'могила',
        en: 'grave'
    },
    {
        id: 3839,
        ru: 'могила',
        en: 'grave'
    },
    {
        id: 3840,
        ru: 'гравитация',
        en: 'gravity'
    },
    {
        id: 3841,
        ru: 'в значительной степени',
        en: 'greatly'
    },
    {
        id: 3842,
        ru: 'теплица',
        en: 'greenhouse'
    },
    {
        id: 3843,
        ru: 'сетка',
        en: 'grid'
    },
    {
        id: 3844,
        ru: 'горе',
        en: 'grief'
    },
    {
        id: 3845,
        ru: 'ухмылка',
        en: 'grin'
    },
    {
        id: 3846,
        ru: 'молоть',
        en: 'grind'
    },
    {
        id: 3847,
        ru: 'схватить',
        en: 'grip'
    },
    {
        id: 3848,
        ru: 'бакалея',
        en: 'grocery'
    },
    {
        id: 3849,
        ru: 'валовой',
        en: 'gross'
    },
    {
        id: 3850,
        ru: 'партизан',
        en: 'guerrilla'
    },
    {
        id: 3851,
        ru: 'руководство',
        en: 'guidance'
    },
    {
        id: 3852,
        ru: 'руководство',
        en: 'guideline'
    },
    {
        id: 3853,
        ru: 'вина',
        en: 'guilt'
    },
    {
        id: 3854,
        ru: 'кишка',
        en: 'gut'
    },
    {
        id: 3855,
        ru: 'среда обитания',
        en: 'habitat'
    },
    {
        id: 3856,
        ru: 'град',
        en: 'hail'
    },
    {
        id: 3857,
        ru: 'наполовину',
        en: 'halfway'
    },
    {
        id: 3858,
        ru: 'остановка',
        en: 'halt'
    },
    {
        id: 3859,
        ru: 'горстка',
        en: 'handful'
    },
    {
        id: 3860,
        ru: 'умение обращаться',
        en: 'handling'
    },
    {
        id: 3861,
        ru: 'удобный',
        en: 'handy'
    },
    {
        id: 3862,
        ru: 'домогательство',
        en: 'harassment'
    },
    {
        id: 3863,
        ru: 'гавань',
        en: 'harbour'
    },
    {
        id: 3864,
        ru: 'аппаратное обеспечение',
        en: 'hardware'
    },
    {
        id: 3865,
        ru: 'гармония',
        en: 'harmony'
    },
    {
        id: 3866,
        ru: 'жесткий',
        en: 'harsh'
    },
    {
        id: 3867,
        ru: 'урожай',
        en: 'harvest'
    },
    {
        id: 3868,
        ru: 'ненависть',
        en: 'hatred'
    },
    {
        id: 3869,
        ru: 'преследовать',
        en: 'haunt'
    },
    {
        id: 3870,
        ru: 'опасность',
        en: 'hazard'
    },
    {
        id: 3871,
        ru: 'штаб-квартира',
        en: 'headquarters'
    },
    {
        id: 3872,
        ru: 'лечить',
        en: 'heal'
    },
    {
        id: 3873,
        ru: 'здравоохранение',
        en: 'healthcare'
    },
    {
        id: 3874,
        ru: 'усиливать',
        en: 'heighten'
    },
    {
        id: 3875,
        ru: 'шлем',
        en: 'helmet'
    },
    {
        id: 3876,
        ru: 'следовательно',
        en: 'hence'
    },
    {
        id: 3877,
        ru: 'трава',
        en: 'herb'
    },
    {
        id: 3878,
        ru: 'наследство',
        en: 'heritage'
    },
    {
        id: 3879,
        ru: 'скрытый',
        en: 'hidden'
    },
    {
        id: 3880,
        ru: 'иерархия',
        en: 'hierarchy'
    },
    {
        id: 3881,
        ru: 'высококлассный',
        en: 'high-profile'
    },
    {
        id: 3882,
        ru: 'шоссе',
        en: 'highway'
    },
    {
        id: 3883,
        ru: 'веселый',
        en: 'hilarious'
    },
    {
        id: 3884,
        ru: 'намекать',
        en: 'hint'
    },
    {
        id: 3885,
        ru: 'бедро',
        en: 'hip'
    },
    {
        id: 3886,
        ru: 'историк',
        en: 'historian'
    },
    {
        id: 3887,
        ru: 'родина',
        en: 'homeland'
    },
    {
        id: 3888,
        ru: 'бездомный',
        en: 'homeless'
    },
    {
        id: 3889,
        ru: 'честность',
        en: 'honesty'
    },
    {
        id: 3890,
        ru: 'крюк',
        en: 'hook'
    },
    {
        id: 3891,
        ru: 'обнадеживающий',
        en: 'hopeful'
    },
    {
        id: 3892,
        ru: 'с надеждой',
        en: 'hopefully'
    },
    {
        id: 3893,
        ru: 'горизонт',
        en: 'horizon'
    },
    {
        id: 3894,
        ru: 'рог',
        en: 'horn'
    },
    {
        id: 3895,
        ru: 'заложник',
        en: 'hostage'
    },
    {
        id: 3896,
        ru: 'враждебный',
        en: 'hostile'
    },
    {
        id: 3897,
        ru: 'враждебность',
        en: 'hostility'
    },
    {
        id: 3898,
        ru: 'гуманитарный',
        en: 'humanitarian'
    },
    {
        id: 3899,
        ru: 'человечество',
        en: 'humanity'
    },
    {
        id: 3900,
        ru: 'скромный',
        en: 'humble'
    },
    {
        id: 3901,
        ru: 'голод',
        en: 'hunger'
    },
    {
        id: 3902,
        ru: 'водород',
        en: 'hydrogen'
    },
    {
        id: 3903,
        ru: 'гипотеза',
        en: 'hypothesis'
    },
    {
        id: 3904,
        ru: 'икона',
        en: 'icon'
    },
    {
        id: 3905,
        ru: 'ИДЕНТИФИКАТОР',
        en: 'ID'
    },
    {
        id: 3906,
        ru: 'идентичный',
        en: 'identical'
    },
    {
        id: 3907,
        ru: 'идентификация',
        en: 'identification'
    },
    {
        id: 3908,
        ru: 'идеологический',
        en: 'ideological'
    },
    {
        id: 3909,
        ru: 'идеология',
        en: 'ideology'
    },
    {
        id: 3910,
        ru: 'идиот',
        en: 'idiot'
    },
    {
        id: 3911,
        ru: 'невежество',
        en: 'ignorance'
    },
    {
        id: 3912,
        ru: 'иллюзия',
        en: 'illusion'
    },
    {
        id: 3913,
        ru: 'образы',
        en: 'imagery'
    },
    {
        id: 3914,
        ru: 'огромный',
        en: 'immense'
    },
    {
        id: 3915,
        ru: 'иммиграция',
        en: 'immigration'
    },
    {
        id: 3916,
        ru: 'неизбежный',
        en: 'imminent'
    },
    {
        id: 3917,
        ru: 'иммунный',
        en: 'immune'
    },
    {
        id: 3918,
        ru: 'осуществлять',
        en: 'implement'
    },
    {
        id: 3919,
        ru: 'выполнение',
        en: 'implementation'
    },
    {
        id: 3920,
        ru: 'импликация',
        en: 'implication'
    },
    {
        id: 3921,
        ru: 'сажать в тюрьму',
        en: 'imprison'
    },
    {
        id: 3922,
        ru: 'тюремное заключение',
        en: 'imprisonment'
    },
    {
        id: 3923,
        ru: 'неспособность',
        en: 'inability'
    },
    {
        id: 3924,
        ru: 'неадекватный',
        en: 'inadequate'
    },
    {
        id: 3925,
        ru: 'неприличный',
        en: 'inappropriate'
    },
    {
        id: 3926,
        ru: 'стимул',
        en: 'incentive'
    },
    {
        id: 3927,
        ru: 'заболеваемость',
        en: 'incidence'
    },
    {
        id: 3928,
        ru: 'наклонный',
        en: 'inclined'
    },
    {
        id: 3929,
        ru: 'включение',
        en: 'inclusion'
    },
    {
        id: 3930,
        ru: 'включить',
        en: 'incorporate'
    },
    {
        id: 3931,
        ru: 'неправильный',
        en: 'incorrect'
    },
    {
        id: 3932,
        ru: 'нести',
        en: 'incur'
    },
    {
        id: 3933,
        ru: 'независимость',
        en: 'independence'
    },
    {
        id: 3934,
        ru: 'индекс',
        en: 'index'
    },
    {
        id: 3935,
        ru: 'указание',
        en: 'indication'
    },
    {
        id: 3936,
        ru: 'индикатор',
        en: 'indicator'
    },
    {
        id: 3937,
        ru: 'обвинительный акт',
        en: 'indictment'
    },
    {
        id: 3938,
        ru: 'местный',
        en: 'indigenous'
    },
    {
        id: 3939,
        ru: 'вызывать',
        en: 'induce'
    },
    {
        id: 3940,
        ru: 'предаваться',
        en: 'indulge'
    },
    {
        id: 3941,
        ru: 'неравенство',
        en: 'inequality'
    },
    {
        id: 3942,
        ru: 'неизбежный',
        en: 'inevitable'
    },
    {
        id: 3943,
        ru: 'неизбежно',
        en: 'inevitably'
    },
    {
        id: 3944,
        ru: 'позорный',
        en: 'infamous'
    },
    {
        id: 3945,
        ru: 'младенец',
        en: 'infant'
    },
    {
        id: 3946,
        ru: 'заражать',
        en: 'infect'
    },
    {
        id: 3947,
        ru: 'вывести',
        en: 'infer'
    },
    {
        id: 3948,
        ru: 'инфляция',
        en: 'inflation'
    },
    {
        id: 3949,
        ru: 'наносить',
        en: 'inflict'
    },
    {
        id: 3950,
        ru: 'влиятельный',
        en: 'influential'
    },
    {
        id: 3951,
        ru: 'информация',
        en: 'info'
    },
    {
        id: 3952,
        ru: 'инфраструктура',
        en: 'infrastructure'
    },
    {
        id: 3953,
        ru: 'житель',
        en: 'inhabitant'
    },
    {
        id: 3954,
        ru: 'присущий',
        en: 'inherent'
    },
    {
        id: 3955,
        ru: 'наследовать',
        en: 'inherit'
    },
    {
        id: 3956,
        ru: 'подавлять',
        en: 'inhibit'
    },
    {
        id: 3957,
        ru: 'инициировать',
        en: 'initiate'
    },
    {
        id: 3958,
        ru: 'вводить',
        en: 'inject'
    },
    {
        id: 3959,
        ru: 'инъекция',
        en: 'injection'
    },
    {
        id: 3960,
        ru: 'несправедливость',
        en: 'injustice'
    },
    {
        id: 3961,
        ru: 'чернила',
        en: 'ink'
    },
    {
        id: 3962,
        ru: 'заключенный',
        en: 'inmate'
    },
    {
        id: 3963,
        ru: 'инновации',
        en: 'innovation'
    },
    {
        id: 3964,
        ru: 'инновационный',
        en: 'innovative'
    },
    {
        id: 3965,
        ru: 'вход',
        en: 'input'
    },
    {
        id: 3966,
        ru: 'вставлять',
        en: 'insert'
    },
    {
        id: 3967,
        ru: 'вставка',
        en: 'insertion'
    },
    {
        id: 3968,
        ru: 'инсайдер',
        en: 'insider'
    },
    {
        id: 3969,
        ru: 'осмотреть',
        en: 'inspect'
    },
    {
        id: 3970,
        ru: 'осмотр',
        en: 'inspection'
    },
    {
        id: 3971,
        ru: 'инспектор',
        en: 'inspector'
    },
    {
        id: 3972,
        ru: 'вдохновение',
        en: 'inspiration'
    },
    {
        id: 3973,
        ru: 'установка',
        en: 'installation'
    },
    {
        id: 3974,
        ru: 'мгновенный',
        en: 'instant'
    },
    {
        id: 3975,
        ru: 'немедленно',
        en: 'instantly'
    },
    {
        id: 3976,
        ru: 'инстинкт',
        en: 'instinct'
    },
    {
        id: 3977,
        ru: 'институциональный',
        en: 'institutional'
    },
    {
        id: 3978,
        ru: 'инструктировать',
        en: 'instruct'
    },
    {
        id: 3979,
        ru: 'инструментальный',
        en: 'instrumental'
    },
    {
        id: 3980,
        ru: 'недостаточный',
        en: 'insufficient'
    },
    {
        id: 3981,
        ru: 'оскорблять',
        en: 'insult'
    },
    {
        id: 3982,
        ru: 'нетронутый',
        en: 'intact'
    },
    {
        id: 3983,
        ru: 'потребление',
        en: 'intake'
    },
    {
        id: 3984,
        ru: 'интеграл',
        en: 'integral'
    },
    {
        id: 3985,
        ru: 'интегрировать',
        en: 'integrate'
    },
    {
        id: 3986,
        ru: 'интегрированный',
        en: 'integrated'
    },
    {
        id: 3987,
        ru: 'интеграция',
        en: 'integration'
    },
    {
        id: 3988,
        ru: 'честность',
        en: 'integrity'
    },
    {
        id: 3989,
        ru: 'интеллектуальный',
        en: 'intellectual'
    },
    {
        id: 3990,
        ru: 'усиливать',
        en: 'intensify'
    },
    {
        id: 3991,
        ru: 'интенсивность',
        en: 'intensity'
    },
    {
        id: 3992,
        ru: 'интенсивный',
        en: 'intensive'
    },
    {
        id: 3993,
        ru: 'намерение',
        en: 'intent'
    },
    {
        id: 3994,
        ru: 'взаимодействовать',
        en: 'interact'
    },
    {
        id: 3995,
        ru: 'взаимодействие',
        en: 'interaction'
    },
    {
        id: 3996,
        ru: 'интерактивный',
        en: 'interactive'
    },
    {
        id: 3997,
        ru: 'интерфейс',
        en: 'interface'
    },
    {
        id: 3998,
        ru: 'вмешиваться',
        en: 'interfere'
    },
    {
        id: 3999,
        ru: 'вмешательство',
        en: 'interference'
    },
    {
        id: 4000,
        ru: 'временный',
        en: 'interim'
    },
    {
        id: 4001,
        ru: 'интерьер',
        en: 'interior'
    },
    {
        id: 4002,
        ru: 'средний',
        en: 'intermediate'
    },
    {
        id: 4003,
        ru: 'интерпретация',
        en: 'interpretation'
    },
    {
        id: 4004,
        ru: 'интервал',
        en: 'interval'
    },
    {
        id: 4005,
        ru: 'вмешиваться',
        en: 'intervene'
    },
    {
        id: 4006,
        ru: 'вмешательство',
        en: 'intervention'
    },
    {
        id: 4007,
        ru: 'интимный',
        en: 'intimate'
    },
    {
        id: 4008,
        ru: 'интригующий',
        en: 'intriguing'
    },
    {
        id: 4009,
        ru: 'вторгаться',
        en: 'invade'
    },
    {
        id: 4010,
        ru: 'вторжение',
        en: 'invasion'
    },
    {
        id: 4011,
        ru: 'следователь',
        en: 'investigator'
    },
    {
        id: 4012,
        ru: 'инвестор',
        en: 'investor'
    },
    {
        id: 4013,
        ru: 'невидимый',
        en: 'invisible'
    },
    {
        id: 4014,
        ru: 'вызывать',
        en: 'invoke'
    },
    {
        id: 4015,
        ru: 'участие',
        en: 'involvement'
    },
    {
        id: 4016,
        ru: 'ироничный',
        en: 'ironic'
    },
    {
        id: 4017,
        ru: 'по иронии судьбы',
        en: 'ironically'
    },
    {
        id: 4018,
        ru: 'ирония',
        en: 'irony'
    },
    {
        id: 4019,
        ru: 'не имеющий отношения',
        en: 'irrelevant'
    },
    {
        id: 4020,
        ru: 'изолировать',
        en: 'isolate'
    },
    {
        id: 4021,
        ru: 'изолированный',
        en: 'isolated'
    },
    {
        id: 4022,
        ru: 'изоляция',
        en: 'isolation'
    },
    {
        id: 4023,
        ru: 'тюрьма',
        en: 'jail'
    },
    {
        id: 4024,
        ru: 'струя',
        en: 'jet'
    },
    {
        id: 4025,
        ru: 'соединение',
        en: 'joint'
    },
    {
        id: 4026,
        ru: 'журналистика',
        en: 'journalism'
    },
    {
        id: 4027,
        ru: 'судебный',
        en: 'judicial'
    },
    {
        id: 4028,
        ru: 'перекресток',
        en: 'junction'
    },
    {
        id: 4029,
        ru: 'юрисдикция',
        en: 'jurisdiction'
    },
    {
        id: 4030,
        ru: 'жюри',
        en: 'jury'
    },
    {
        id: 4031,
        ru: 'только',
        en: 'just'
    },
    {
        id: 4032,
        ru: 'оправдание',
        en: 'justification'
    },
    {
        id: 4033,
        ru: 'похищать',
        en: 'kidnap'
    },
    {
        id: 4034,
        ru: 'почка',
        en: 'kidney'
    },
    {
        id: 4035,
        ru: 'королевство',
        en: 'kingdom'
    },
    {
        id: 4036,
        ru: 'набор',
        en: 'kit'
    },
    {
        id: 4037,
        ru: 'парень',
        en: 'lad'
    },
    {
        id: 4038,
        ru: 'лестница',
        en: 'ladder'
    },
    {
        id: 4039,
        ru: 'посадка',
        en: 'landing'
    },
    {
        id: 4040,
        ru: 'домовладелец',
        en: 'landlord'
    },
    {
        id: 4041,
        ru: 'достопримечательность',
        en: 'landmark'
    },
    {
        id: 4042,
        ru: 'переулок',
        en: 'lane'
    },
    {
        id: 4043,
        ru: 'колени',
        en: 'lap'
    },
    {
        id: 4044,
        ru: 'крупномасштабный',
        en: 'large-scale'
    },
    {
        id: 4045,
        ru: 'лазер',
        en: 'laser'
    },
    {
        id: 4046,
        ru: 'недавно',
        en: 'lately'
    },
    {
        id: 4047,
        ru: 'последний',
        en: 'latter'
    },
    {
        id: 4048,
        ru: 'лужайка',
        en: 'lawn'
    },
    {
        id: 4049,
        ru: 'судебный процесс',
        en: 'lawsuit'
    },
    {
        id: 4050,
        ru: 'макет',
        en: 'layout'
    },
    {
        id: 4051,
        ru: 'листовка',
        en: 'leaflet'
    },
    {
        id: 4052,
        ru: 'утечка',
        en: 'leak'
    },
    {
        id: 4053,
        ru: 'прыгнуть',
        en: 'leap'
    },
    {
        id: 4054,
        ru: 'наследие',
        en: 'legacy'
    },
    {
        id: 4055,
        ru: 'легенда',
        en: 'legend'
    },
    {
        id: 4056,
        ru: 'легендарный',
        en: 'legendary'
    },
    {
        id: 4057,
        ru: 'законодательство',
        en: 'legislation'
    },
    {
        id: 4058,
        ru: 'законодательный',
        en: 'legislative'
    },
    {
        id: 4059,
        ru: 'законодательный орган',
        en: 'legislature'
    },
    {
        id: 4060,
        ru: 'законный',
        en: 'legitimate'
    },
    {
        id: 4061,
        ru: 'длинный',
        en: 'lengthy'
    },
    {
        id: 4062,
        ru: 'линза',
        en: 'lens'
    },
    {
        id: 4063,
        ru: 'лесбиянка',
        en: 'lesbian'
    },
    {
        id: 4064,
        ru: 'меньший',
        en: 'lesser'
    },
    {
        id: 4065,
        ru: 'смертельный',
        en: 'lethal'
    },
    {
        id: 4066,
        ru: 'ответственный',
        en: 'liable'
    },
    {
        id: 4067,
        ru: 'либеральный',
        en: 'liberal'
    },
    {
        id: 4068,
        ru: 'освобождение',
        en: 'liberation'
    },
    {
        id: 4069,
        ru: 'свобода',
        en: 'liberty'
    },
    {
        id: 4070,
        ru: 'лицензия',
        en: 'license'
    },
    {
        id: 4071,
        ru: 'пожизненный',
        en: 'lifelong'
    },
    {
        id: 4072,
        ru: 'продолжительность жизни',
        en: 'lifetime'
    },
    {
        id: 4073,
        ru: 'освещение',
        en: 'lighting'
    },
    {
        id: 4074,
        ru: 'вероятность',
        en: 'likelihood'
    },
    {
        id: 4075,
        ru: 'так же',
        en: 'likewise'
    },
    {
        id: 4076,
        ru: 'конечность',
        en: 'limb'
    },
    {
        id: 4077,
        ru: 'ограничение',
        en: 'limitation'
    },
    {
        id: 4078,
        ru: 'линейный',
        en: 'linear'
    },
    {
        id: 4079,
        ru: 'расстановка',
        en: 'line-up'
    },
    {
        id: 4080,
        ru: 'задерживаться',
        en: 'linger'
    },
    {
        id: 4081,
        ru: 'листинг',
        en: 'listing'
    },
    {
        id: 4082,
        ru: 'грамотность',
        en: 'literacy'
    },
    {
        id: 4083,
        ru: 'буквально',
        en: 'literally'
    },
    {
        id: 4084,
        ru: 'литературный',
        en: 'literary'
    },
    {
        id: 4085,
        ru: 'литр',
        en: 'litre'
    },
    {
        id: 4086,
        ru: 'мусор',
        en: 'litter'
    },
    {
        id: 4087,
        ru: 'печень',
        en: 'liver'
    },
    {
        id: 4088,
        ru: 'лобби',
        en: 'lobby'
    },
    {
        id: 4089,
        ru: 'бревно',
        en: 'log'
    },
    {
        id: 4090,
        ru: 'логика',
        en: 'logic'
    },
    {
        id: 4091,
        ru: 'логотип',
        en: 'logo'
    },
    {
        id: 4092,
        ru: 'давний',
        en: 'long-standing'
    },
    {
        id: 4093,
        ru: 'много времени',
        en: 'long-time'
    },
    {
        id: 4094,
        ru: 'ткацкий станок',
        en: 'loom'
    },
    {
        id: 4095,
        ru: 'петля',
        en: 'loop'
    },
    {
        id: 4096,
        ru: 'лотерея',
        en: 'lottery'
    },
    {
        id: 4097,
        ru: 'лояльный',
        en: 'loyal'
    },
    {
        id: 4098,
        ru: 'верность',
        en: 'loyalty'
    },
    {
        id: 4099,
        ru: 'лирический',
        en: 'lyric'
    },
    {
        id: 4100,
        ru: 'машины',
        en: 'machinery'
    },
    {
        id: 4101,
        ru: 'волшебный',
        en: 'magical'
    },
    {
        id: 4102,
        ru: 'магистрат',
        en: 'magistrate'
    },
    {
        id: 4103,
        ru: 'магнитный',
        en: 'magnetic'
    },
    {
        id: 4104,
        ru: 'великолепный',
        en: 'magnificent'
    },
    {
        id: 4105,
        ru: 'величина',
        en: 'magnitude'
    },
    {
        id: 4106,
        ru: 'материк',
        en: 'mainland'
    },
    {
        id: 4107,
        ru: 'мейнстрим',
        en: 'mainstream'
    },
    {
        id: 4108,
        ru: 'обслуживание',
        en: 'maintenance'
    },
    {
        id: 4109,
        ru: 'составить',
        en: 'make-up'
    },
    {
        id: 4110,
        ru: 'изготовление',
        en: 'making'
    },
    {
        id: 4111,
        ru: 'мандат',
        en: 'mandate'
    },
    {
        id: 4112,
        ru: 'обязательный',
        en: 'mandatory'
    },
    {
        id: 4113,
        ru: 'манифест',
        en: 'manifest'
    },
    {
        id: 4114,
        ru: 'манипулировать',
        en: 'manipulate'
    },
    {
        id: 4115,
        ru: 'манипуляция',
        en: 'manipulation'
    },
    {
        id: 4116,
        ru: 'производство',
        en: 'manufacture'
    },
    {
        id: 4117,
        ru: 'производство',
        en: 'manufacturing'
    },
    {
        id: 4118,
        ru: 'рукопись',
        en: 'manuscript'
    },
    {
        id: 4119,
        ru: 'марафон',
        en: 'marathon'
    },
    {
        id: 4120,
        ru: 'маршировать',
        en: 'march'
    },
    {
        id: 4121,
        ru: 'допуск',
        en: 'margin'
    },
    {
        id: 4122,
        ru: 'маргинальный',
        en: 'marginal'
    },
    {
        id: 4123,
        ru: 'морской',
        en: 'marine'
    },
    {
        id: 4124,
        ru: 'маркер',
        en: 'marker'
    },
    {
        id: 4125,
        ru: 'рынок',
        en: 'marketplace'
    },
    {
        id: 4126,
        ru: 'боевые',
        en: 'martial'
    },
    {
        id: 4127,
        ru: 'маска',
        en: 'mask'
    },
    {
        id: 4128,
        ru: 'резня',
        en: 'massacre'
    },
    {
        id: 4129,
        ru: 'приятель',
        en: 'mate'
    },
    {
        id: 4130,
        ru: 'математический',
        en: 'mathematical'
    },
    {
        id: 4131,
        ru: 'зрелый',
        en: 'mature'
    },
    {
        id: 4132,
        ru: 'максимизировать',
        en: 'maximize'
    },
    {
        id: 4133,
        ru: 'мэр',
        en: 'mayor'
    },
    {
        id: 4134,
        ru: 'значимый',
        en: 'meaningful'
    },
    {
        id: 4135,
        ru: 'тем временем',
        en: 'meantime'
    },
    {
        id: 4136,
        ru: 'механик',
        en: 'mechanic'
    },
    {
        id: 4137,
        ru: 'механический',
        en: 'mechanical'
    },
    {
        id: 4138,
        ru: 'механизм',
        en: 'mechanism'
    },
    {
        id: 4139,
        ru: 'медаль',
        en: 'medal'
    },
    {
        id: 4140,
        ru: 'медикамент',
        en: 'medication'
    },
    {
        id: 4141,
        ru: 'средневековый',
        en: 'medieval'
    },
    {
        id: 4142,
        ru: 'медитация',
        en: 'meditation'
    },
    {
        id: 4143,
        ru: 'мелодия',
        en: 'melody'
    },
    {
        id: 4144,
        ru: 'членство',
        en: 'membership'
    },
    {
        id: 4145,
        ru: 'меморандум',
        en: 'memo'
    },
    {
        id: 4146,
        ru: 'мемуары',
        en: 'memoir'
    },
    {
        id: 4147,
        ru: 'памятный',
        en: 'memorable'
    },
    {
        id: 4148,
        ru: 'мемориал',
        en: 'memorial'
    },
    {
        id: 4149,
        ru: 'наставник',
        en: 'mentor'
    },
    {
        id: 4150,
        ru: 'торговец',
        en: 'merchant'
    },
    {
        id: 4151,
        ru: 'милосердие',
        en: 'mercy'
    },
    {
        id: 4152,
        ru: 'просто',
        en: 'mere'
    },
    {
        id: 4153,
        ru: 'просто',
        en: 'merely'
    },
    {
        id: 4154,
        ru: 'слияние',
        en: 'merge'
    },
    {
        id: 4155,
        ru: 'слияние',
        en: 'merger'
    },
    {
        id: 4156,
        ru: 'заслуга',
        en: 'merit'
    },
    {
        id: 4157,
        ru: 'метафора',
        en: 'metaphor'
    },
    {
        id: 4158,
        ru: 'методология',
        en: 'methodology'
    },
    {
        id: 4159,
        ru: 'середина',
        en: 'midst'
    },
    {
        id: 4160,
        ru: 'миграция',
        en: 'migration'
    },
    {
        id: 4161,
        ru: 'воинствующий',
        en: 'militant'
    },
    {
        id: 4162,
        ru: 'милиция',
        en: 'militia'
    },
    {
        id: 4163,
        ru: 'мельница',
        en: 'mill'
    },
    {
        id: 4164,
        ru: 'шахтер',
        en: 'miner'
    },
    {
        id: 4165,
        ru: 'минимальный',
        en: 'minimal'
    },
    {
        id: 4166,
        ru: 'минимизировать',
        en: 'minimize'
    },
    {
        id: 4167,
        ru: 'добыча',
        en: 'mining'
    },
    {
        id: 4168,
        ru: 'министерство',
        en: 'ministry'
    },
    {
        id: 4169,
        ru: 'минута',
        en: 'minute'
    },
    {
        id: 4170,
        ru: 'чудо',
        en: 'miracle'
    },
    {
        id: 4171,
        ru: 'убогий',
        en: 'miserable'
    },
    {
        id: 4172,
        ru: 'невзгоды',
        en: 'misery'
    },
    {
        id: 4173,
        ru: 'вводящий в заблуждение',
        en: 'misleading'
    },
    {
        id: 4174,
        ru: 'ракета',
        en: 'missile'
    },
    {
        id: 4175,
        ru: 'толпа',
        en: 'mob'
    },
    {
        id: 4176,
        ru: 'мобильность',
        en: 'mobility'
    },
    {
        id: 4177,
        ru: 'мобилизовать',
        en: 'mobilize'
    },
    {
        id: 4178,
        ru: 'режим',
        en: 'mode'
    },
    {
        id: 4179,
        ru: 'умеренный',
        en: 'moderate'
    },
    {
        id: 4180,
        ru: 'скромный',
        en: 'modest'
    },
    {
        id: 4181,
        ru: 'модификация',
        en: 'modification'
    },
    {
        id: 4182,
        ru: 'импульс',
        en: 'momentum'
    },
    {
        id: 4183,
        ru: 'монах',
        en: 'monk'
    },
    {
        id: 4184,
        ru: 'монополия',
        en: 'monopoly'
    },
    {
        id: 4185,
        ru: 'монстр',
        en: 'monster'
    },
    {
        id: 4186,
        ru: 'ежемесячно',
        en: 'monthly'
    },
    {
        id: 4187,
        ru: 'памятник',
        en: 'monument'
    },
    {
        id: 4188,
        ru: 'мораль',
        en: 'morality'
    },
    {
        id: 4189,
        ru: 'более того',
        en: 'moreover'
    },
    {
        id: 4190,
        ru: 'ипотека',
        en: 'mortgage'
    },
    {
        id: 4191,
        ru: 'мечеть',
        en: 'mosque'
    },
    {
        id: 4192,
        ru: 'движение',
        en: 'motion'
    },
    {
        id: 4193,
        ru: 'мотивировать',
        en: 'motivate'
    },
    {
        id: 4194,
        ru: 'мотивация',
        en: 'motivation'
    },
    {
        id: 4195,
        ru: 'мотив',
        en: 'motive'
    },
    {
        id: 4196,
        ru: 'автомобилист',
        en: 'motorist'
    },
    {
        id: 4197,
        ru: 'движущийся',
        en: 'moving'
    },
    {
        id: 4198,
        ru: 'муниципальный',
        en: 'municipal'
    },
    {
        id: 4199,
        ru: 'взаимный',
        en: 'mutual'
    },
    {
        id: 4200,
        ru: 'миф',
        en: 'myth'
    },
    {
        id: 4201,
        ru: 'голый',
        en: 'naked'
    },
    {
        id: 4202,
        ru: 'а именно',
        en: 'namely'
    },
    {
        id: 4203,
        ru: 'противный',
        en: 'nasty'
    },
    {
        id: 4204,
        ru: 'по всей стране',
        en: 'nationwide'
    },
    {
        id: 4205,
        ru: 'военно-морской',
        en: 'naval'
    },
    {
        id: 4206,
        ru: 'навигация',
        en: 'navigation'
    },
    {
        id: 4207,
        ru: 'рядом',
        en: 'nearby'
    },
    {
        id: 4208,
        ru: 'необходимость',
        en: 'necessity'
    },
    {
        id: 4209,
        ru: 'пренебрегать',
        en: 'neglect'
    },
    {
        id: 4210,
        ru: 'вести переговоры',
        en: 'negotiate'
    },
    {
        id: 4211,
        ru: 'переговоры',
        en: 'negotiation'
    },
    {
        id: 4212,
        ru: 'соседний',
        en: 'neighbouring'
    },
    {
        id: 4213,
        ru: 'гнездо',
        en: 'nest'
    },
    {
        id: 4214,
        ru: 'сеть',
        en: 'net'
    },
    {
        id: 4215,
        ru: 'нейтральный',
        en: 'neutral'
    },
    {
        id: 4216,
        ru: 'недавно',
        en: 'newly'
    },
    {
        id: 4217,
        ru: 'информационный бюллетень',
        en: 'newsletter'
    },
    {
        id: 4218,
        ru: 'ниша',
        en: 'niche'
    },
    {
        id: 4219,
        ru: 'благородный',
        en: 'noble'
    },
    {
        id: 4220,
        ru: 'кивок',
        en: 'nod'
    },
    {
        id: 4221,
        ru: 'номинировать',
        en: 'nominate'
    },
    {
        id: 4222,
        ru: 'номинация',
        en: 'nomination'
    },
    {
        id: 4223,
        ru: 'номинант',
        en: 'nominee'
    },
    {
        id: 4224,
        ru: 'тем не менее',
        en: 'nonetheless'
    },
    {
        id: 4225,
        ru: 'некоммерческий',
        en: 'non-profit'
    },
    {
        id: 4226,
        ru: 'ерунда',
        en: 'nonsense'
    },
    {
        id: 4227,
        ru: 'полдень',
        en: 'noon'
    },
    {
        id: 4228,
        ru: 'норма',
        en: 'norm'
    },
    {
        id: 4229,
        ru: 'заметный',
        en: 'notable'
    },
    {
        id: 4230,
        ru: 'в частности',
        en: 'notably'
    },
    {
        id: 4231,
        ru: 'блокнот',
        en: 'notebook'
    },
    {
        id: 4232,
        ru: 'уведомить',
        en: 'notify'
    },
    {
        id: 4233,
        ru: 'печально известный',
        en: 'notorious'
    },
    {
        id: 4234,
        ru: 'роман',
        en: 'novel'
    },
    {
        id: 4235,
        ru: 'романист',
        en: 'novelist'
    },
    {
        id: 4236,
        ru: 'настоящее время',
        en: 'nowadays'
    },
    {
        id: 4237,
        ru: 'питомник',
        en: 'nursery'
    },
    {
        id: 4238,
        ru: 'сестринское дело',
        en: 'nursing'
    },
    {
        id: 4239,
        ru: 'питание',
        en: 'nutrition'
    },
    {
        id: 4240,
        ru: 'ожирение',
        en: 'obesity'
    },
    {
        id: 4241,
        ru: 'возражение',
        en: 'objection'
    },
    {
        id: 4242,
        ru: 'обязывать',
        en: 'oblige'
    },
    {
        id: 4243,
        ru: 'наблюдатель',
        en: 'observer'
    },
    {
        id: 4244,
        ru: 'одержимость',
        en: 'obsess'
    },
    {
        id: 4245,
        ru: 'одержимость',
        en: 'obsession'
    },
    {
        id: 4246,
        ru: 'препятствие',
        en: 'obstacle'
    },
    {
        id: 4247,
        ru: 'случайный',
        en: 'occasional'
    },
    {
        id: 4248,
        ru: 'занятие',
        en: 'occupation'
    },
    {
        id: 4249,
        ru: 'занимают',
        en: 'occupy'
    },
    {
        id: 4250,
        ru: 'возникновение',
        en: 'occurrence'
    },
    {
        id: 4251,
        ru: 'шансы',
        en: 'odds'
    },
    {
        id: 4252,
        ru: 'преступник',
        en: 'offender'
    },
    {
        id: 4253,
        ru: 'предлагая',
        en: 'offering'
    },
    {
        id: 4254,
        ru: 'потомство',
        en: 'offspring'
    },
    {
        id: 4255,
        ru: 'непрерывный',
        en: 'ongoing'
    },
    {
        id: 4256,
        ru: 'открыто',
        en: 'openly'
    },
    {
        id: 4257,
        ru: 'опера',
        en: 'opera'
    },
    {
        id: 4258,
        ru: 'оперативный',
        en: 'operational'
    },
    {
        id: 4259,
        ru: 'оператор',
        en: 'operator'
    },
    {
        id: 4260,
        ru: 'выбрать',
        en: 'opt'
    },
    {
        id: 4261,
        ru: 'оптический',
        en: 'optical'
    },
    {
        id: 4262,
        ru: 'оптимизм',
        en: 'optimism'
    },
    {
        id: 4263,
        ru: 'оптимистичный',
        en: 'optimistic'
    },
    {
        id: 4264,
        ru: 'устный',
        en: 'oral'
    },
    {
        id: 4265,
        ru: 'оркестр',
        en: 'orchestra'
    },
    {
        id: 4266,
        ru: 'органический',
        en: 'organic'
    },
    {
        id: 4267,
        ru: 'организационный',
        en: 'organizational'
    },
    {
        id: 4268,
        ru: 'ориентация',
        en: 'orientation'
    },
    {
        id: 4269,
        ru: 'зарождаться',
        en: 'originate'
    },
    {
        id: 4270,
        ru: 'вспышка',
        en: 'outbreak'
    },
    {
        id: 4271,
        ru: 'одежда',
        en: 'outfit'
    },
    {
        id: 4272,
        ru: 'вылазка',
        en: 'outing'
    },
    {
        id: 4273,
        ru: 'выход',
        en: 'outlet'
    },
    {
        id: 4274,
        ru: 'перспективы',
        en: 'outlook'
    },
    {
        id: 4275,
        ru: 'выход',
        en: 'output'
    },
    {
        id: 4276,
        ru: 'возмущение',
        en: 'outrage'
    },
    {
        id: 4277,
        ru: 'аутсайдер',
        en: 'outsider'
    },
    {
        id: 4278,
        ru: 'выдающийся',
        en: 'outstanding'
    },
    {
        id: 4279,
        ru: 'преодолеть',
        en: 'overcome'
    },
    {
        id: 4280,
        ru: 'упускать из виду',
        en: 'overlook'
    },
    {
        id: 4281,
        ru: 'чрезмерно',
        en: 'overly'
    },
    {
        id: 4282,
        ru: 'на ночь',
        en: 'overnight'
    },
    {
        id: 4283,
        ru: 'за границей',
        en: 'overseas'
    },
    {
        id: 4284,
        ru: 'контролировать',
        en: 'oversee'
    },
    {
        id: 4285,
        ru: 'переворачивать',
        en: 'overturn'
    },
    {
        id: 4286,
        ru: 'подавлять',
        en: 'overwhelm'
    },
    {
        id: 4287,
        ru: 'подавляющий',
        en: 'overwhelming'
    },
    {
        id: 4288,
        ru: 'собственность',
        en: 'ownership'
    },
    {
        id: 4289,
        ru: 'кислород',
        en: 'oxygen'
    },
    {
        id: 4290,
        ru: 'пакет',
        en: 'packet'
    },
    {
        id: 4291,
        ru: 'прокладка',
        en: 'pad'
    },
    {
        id: 4292,
        ru: 'ладонь',
        en: 'palm'
    },
    {
        id: 4293,
        ru: 'паника',
        en: 'panic'
    },
    {
        id: 4294,
        ru: 'парад',
        en: 'parade'
    },
    {
        id: 4295,
        ru: 'параллельный',
        en: 'parallel'
    },
    {
        id: 4296,
        ru: 'параметр',
        en: 'parameter'
    },
    {
        id: 4297,
        ru: 'родительский',
        en: 'parental'
    },
    {
        id: 4298,
        ru: 'приход',
        en: 'parish'
    },
    {
        id: 4299,
        ru: 'парламентский',
        en: 'parliamentary'
    },
    {
        id: 4300,
        ru: 'частичный',
        en: 'partial'
    },
    {
        id: 4301,
        ru: 'частично',
        en: 'partially'
    },
    {
        id: 4302,
        ru: 'участие',
        en: 'participation'
    },
    {
        id: 4303,
        ru: 'партнерство',
        en: 'partnership'
    },
    {
        id: 4304,
        ru: 'неполная занятость',
        en: 'part-time'
    },
    {
        id: 4305,
        ru: 'прохождение',
        en: 'passing'
    },
    {
        id: 4306,
        ru: 'страстный',
        en: 'passionate'
    },
    {
        id: 4307,
        ru: 'пассивный',
        en: 'passive'
    },
    {
        id: 4308,
        ru: 'пароль',
        en: 'password'
    },
    {
        id: 4309,
        ru: 'пастор',
        en: 'pastor'
    },
    {
        id: 4310,
        ru: 'пластырь',
        en: 'patch'
    },
    {
        id: 4311,
        ru: 'патент',
        en: 'patent'
    },
    {
        id: 4312,
        ru: 'тропа',
        en: 'pathway'
    },
    {
        id: 4313,
        ru: 'терпение',
        en: 'patience'
    },
    {
        id: 4314,
        ru: 'патруль',
        en: 'patrol'
    },
    {
        id: 4315,
        ru: 'покровитель',
        en: 'patron'
    },
    {
        id: 4316,
        ru: 'пауза',
        en: 'pause'
    },
    {
        id: 4317,
        ru: 'пик',
        en: 'peak'
    },
    {
        id: 4318,
        ru: 'крестьянин',
        en: 'peasant'
    },
    {
        id: 4319,
        ru: 'своеобразный',
        en: 'peculiar'
    },
    {
        id: 4320,
        ru: 'вглядеться',
        en: 'peer'
    },
    {
        id: 4321,
        ru: 'штраф',
        en: 'penalty'
    },
    {
        id: 4322,
        ru: 'воспринимать',
        en: 'perceive'
    },
    {
        id: 4323,
        ru: 'восприятие',
        en: 'perception'
    },
    {
        id: 4324,
        ru: 'постоянно',
        en: 'permanently'
    },
    {
        id: 4325,
        ru: 'сопротивляться',
        en: 'persist'
    },
    {
        id: 4326,
        ru: 'настойчивый',
        en: 'persistent'
    },
    {
        id: 4327,
        ru: 'персонал',
        en: 'personnel'
    },
    {
        id: 4328,
        ru: 'петиция',
        en: 'petition'
    },
    {
        id: 4329,
        ru: 'философ',
        en: 'philosopher'
    },
    {
        id: 4330,
        ru: 'философский',
        en: 'philosophical'
    },
    {
        id: 4331,
        ru: 'врач',
        en: 'physician'
    },
    {
        id: 4332,
        ru: 'таблетка',
        en: 'pill'
    },
    {
        id: 4333,
        ru: 'пионер',
        en: 'pioneer'
    },
    {
        id: 4334,
        ru: 'трубопровод',
        en: 'pipeline'
    },
    {
        id: 4335,
        ru: 'пират',
        en: 'pirate'
    },
    {
        id: 4336,
        ru: 'яма',
        en: 'pit'
    },
    {
        id: 4337,
        ru: 'жалость',
        en: 'pity'
    },
    {
        id: 4338,
        ru: 'размещение',
        en: 'placement'
    },
    {
        id: 4339,
        ru: 'мольба',
        en: 'plea'
    },
    {
        id: 4340,
        ru: 'умолять',
        en: 'plead'
    },
    {
        id: 4341,
        ru: 'приносить присягу',
        en: 'pledge'
    },
    {
        id: 4342,
        ru: 'затыкать',
        en: 'plug'
    },
    {
        id: 4343,
        ru: 'нырять',
        en: 'plunge'
    },
    {
        id: 4344,
        ru: 'полюс',
        en: 'pole'
    },
    {
        id: 4345,
        ru: 'голосование',
        en: 'poll'
    },
    {
        id: 4346,
        ru: 'пруд',
        en: 'pond'
    },
    {
        id: 4347,
        ru: 'поп',
        en: 'pop'
    },
    {
        id: 4348,
        ru: 'портфель',
        en: 'portfolio'
    },
    {
        id: 4349,
        ru: 'часть',
        en: 'portion'
    },
    {
        id: 4350,
        ru: 'изображать',
        en: 'portray'
    },
    {
        id: 4351,
        ru: 'откладывать',
        en: 'postpone'
    },
    {
        id: 4352,
        ru: 'послевоенный',
        en: 'post-war'
    },
    {
        id: 4353,
        ru: 'потенциально',
        en: 'potentially'
    },
    {
        id: 4354,
        ru: 'практикующий',
        en: 'practitioner'
    },
    {
        id: 4355,
        ru: 'проповедовать',
        en: 'preach'
    },
    {
        id: 4356,
        ru: 'предшествовать',
        en: 'precede'
    },
    {
        id: 4357,
        ru: 'прецедент',
        en: 'precedent'
    },
    {
        id: 4358,
        ru: 'драгоценный',
        en: 'precious'
    },
    {
        id: 4359,
        ru: 'точный',
        en: 'precise'
    },
    {
        id: 4360,
        ru: 'именно так',
        en: 'precisely'
    },
    {
        id: 4361,
        ru: 'точность',
        en: 'precision'
    },
    {
        id: 4362,
        ru: 'хищник',
        en: 'predator'
    },
    {
        id: 4363,
        ru: 'предшественник',
        en: 'predecessor'
    },
    {
        id: 4364,
        ru: 'предсказуемый',
        en: 'predictable'
    },
    {
        id: 4365,
        ru: 'преимущественно',
        en: 'predominantly'
    },
    {
        id: 4366,
        ru: 'предпочтение',
        en: 'preference'
    },
    {
        id: 4367,
        ru: 'беременность',
        en: 'pregnancy'
    },
    {
        id: 4368,
        ru: 'предрассудки',
        en: 'prejudice'
    },
    {
        id: 4369,
        ru: 'предварительный',
        en: 'preliminary'
    },
    {
        id: 4370,
        ru: 'премьер',
        en: 'premier'
    },
    {
        id: 4371,
        ru: 'предпосылка',
        en: 'premise'
    },
    {
        id: 4372,
        ru: 'премиум',
        en: 'premium'
    },
    {
        id: 4373,
        ru: 'прописывать',
        en: 'prescribe'
    },
    {
        id: 4374,
        ru: 'рецепт',
        en: 'prescription'
    },
    {
        id: 4375,
        ru: 'в настоящее время',
        en: 'presently'
    },
    {
        id: 4376,
        ru: 'сохранение',
        en: 'preservation'
    },
    {
        id: 4377,
        ru: 'председательствовать',
        en: 'preside'
    },
    {
        id: 4378,
        ru: 'президентство',
        en: 'presidency'
    },
    {
        id: 4379,
        ru: 'президентский',
        en: 'presidential'
    },
    {
        id: 4380,
        ru: 'престижный',
        en: 'prestigious'
    },
    {
        id: 4381,
        ru: 'предположительно',
        en: 'presumably'
    },
    {
        id: 4382,
        ru: 'предполагать',
        en: 'presume'
    },
    {
        id: 4383,
        ru: 'преобладать',
        en: 'prevail'
    },
    {
        id: 4384,
        ru: 'распространенность',
        en: 'prevalence'
    },
    {
        id: 4385,
        ru: 'профилактика',
        en: 'prevention'
    },
    {
        id: 4386,
        ru: 'добыча',
        en: 'prey'
    },
    {
        id: 4387,
        ru: 'гордость',
        en: 'pride'
    },
    {
        id: 4388,
        ru: 'в первую очередь',
        en: 'primarily'
    },
    {
        id: 4389,
        ru: 'главный',
        en: 'principal'
    },
    {
        id: 4390,
        ru: 'прежний',
        en: 'prior'
    },
    {
        id: 4391,
        ru: 'приватизация',
        en: 'privatization'
    },
    {
        id: 4392,
        ru: 'привилегия',
        en: 'privilege'
    },
    {
        id: 4393,
        ru: 'вероятность',
        en: 'probability'
    },
    {
        id: 4394,
        ru: 'вероятный',
        en: 'probable'
    },
    {
        id: 4395,
        ru: 'зонд',
        en: 'probe'
    },
    {
        id: 4396,
        ru: 'проблематичный',
        en: 'problematic'
    },
    {
        id: 4397,
        ru: 'продолжить',
        en: 'proceed'
    },
    {
        id: 4398,
        ru: 'разбирательство',
        en: 'proceedings'
    },
    {
        id: 4399,
        ru: 'доходы',
        en: 'proceeds'
    },
    {
        id: 4400,
        ru: 'обработка',
        en: 'processing'
    },
    {
        id: 4401,
        ru: 'процессор',
        en: 'processor'
    },
    {
        id: 4402,
        ru: 'провозглашать',
        en: 'proclaim'
    },
    {
        id: 4403,
        ru: 'продуктивный',
        en: 'productive'
    },
    {
        id: 4404,
        ru: 'производительность',
        en: 'productivity'
    },
    {
        id: 4405,
        ru: 'прибыльный',
        en: 'profitable'
    },
    {
        id: 4406,
        ru: 'глубокий',
        en: 'profound'
    },
    {
        id: 4407,
        ru: 'программирование',
        en: 'programming'
    },
    {
        id: 4408,
        ru: 'прогрессивный',
        en: 'progressive'
    },
    {
        id: 4409,
        ru: 'запрещать',
        en: 'prohibit'
    },
    {
        id: 4410,
        ru: 'проекция',
        en: 'projection'
    },
    {
        id: 4411,
        ru: 'видный',
        en: 'prominent'
    },
    {
        id: 4412,
        ru: 'многообещающий',
        en: 'promising'
    },
    {
        id: 4413,
        ru: 'повышение',
        en: 'promotion'
    },
    {
        id: 4414,
        ru: 'быстрый',
        en: 'prompt'
    },
    {
        id: 4415,
        ru: 'произносится',
        en: 'pronounced'
    },
    {
        id: 4416,
        ru: 'пропаганда',
        en: 'propaganda'
    },
    {
        id: 4417,
        ru: 'пропорция',
        en: 'proportion'
    },
    {
        id: 4418,
        ru: 'предложение',
        en: 'proposition'
    },
    {
        id: 4419,
        ru: 'преследовать в судебном порядке',
        en: 'prosecute'
    },
    {
        id: 4420,
        ru: 'преследование',
        en: 'prosecution'
    },
    {
        id: 4421,
        ru: 'прокурор',
        en: 'prosecutor'
    },
    {
        id: 4422,
        ru: 'перспективный',
        en: 'prospective'
    },
    {
        id: 4423,
        ru: 'процветание',
        en: 'prosperity'
    },
    {
        id: 4424,
        ru: 'защитный',
        en: 'protective'
    },
    {
        id: 4425,
        ru: 'белок',
        en: 'protein'
    },
    {
        id: 4426,
        ru: 'протестующий',
        en: 'protester'
    },
    {
        id: 4427,
        ru: 'протокол',
        en: 'protocol'
    },
    {
        id: 4428,
        ru: 'провинция',
        en: 'province'
    },
    {
        id: 4429,
        ru: 'провинциальный',
        en: 'provincial'
    },
    {
        id: 4430,
        ru: 'обеспечение',
        en: 'provision'
    },
    {
        id: 4431,
        ru: 'провоцировать',
        en: 'provoke'
    },
    {
        id: 4432,
        ru: 'психиатрический',
        en: 'psychiatric'
    },
    {
        id: 4433,
        ru: 'психологический',
        en: 'psychological'
    },
    {
        id: 4434,
        ru: 'публичность',
        en: 'publicity'
    },
    {
        id: 4435,
        ru: 'издательский',
        en: 'publishing'
    },
    {
        id: 4436,
        ru: 'пульс',
        en: 'pulse'
    },
    {
        id: 4437,
        ru: 'насос',
        en: 'pump'
    },
    {
        id: 4438,
        ru: 'ударить кулаком',
        en: 'punch'
    },
    {
        id: 4439,
        ru: 'панк',
        en: 'punk'
    },
    {
        id: 4440,
        ru: 'чисто',
        en: 'purely'
    },
    {
        id: 4441,
        ru: 'преследование',
        en: 'pursuit'
    },
    {
        id: 4442,
        ru: 'головоломка',
        en: 'puzzle'
    },
    {
        id: 4443,
        ru: 'запрос',
        en: 'query'
    },
    {
        id: 4444,
        ru: 'квест',
        en: 'quest'
    },
    {
        id: 4445,
        ru: 'вопросник',
        en: 'questionnaire'
    },
    {
        id: 4446,
        ru: 'квота',
        en: 'quota'
    },
    {
        id: 4447,
        ru: 'расовый',
        en: 'racial'
    },
    {
        id: 4448,
        ru: 'расизм',
        en: 'racism'
    },
    {
        id: 4449,
        ru: 'расистский',
        en: 'racist'
    },
    {
        id: 4450,
        ru: 'радар',
        en: 'radar'
    },
    {
        id: 4451,
        ru: 'радиация',
        en: 'radiation'
    },
    {
        id: 4452,
        ru: 'радикальный',
        en: 'radical'
    },
    {
        id: 4453,
        ru: 'ярость',
        en: 'rage'
    },
    {
        id: 4454,
        ru: 'рейд',
        en: 'raid'
    },
    {
        id: 4455,
        ru: 'рельс',
        en: 'rail'
    },
    {
        id: 4456,
        ru: 'ралли',
        en: 'rally'
    },
    {
        id: 4457,
        ru: 'случайный',
        en: 'random'
    },
    {
        id: 4458,
        ru: 'рейтинг',
        en: 'ranking'
    },
    {
        id: 4459,
        ru: 'изнасилование',
        en: 'rape'
    },
    {
        id: 4460,
        ru: 'крыса',
        en: 'rat'
    },
    {
        id: 4461,
        ru: 'рейтинг',
        en: 'rating'
    },
    {
        id: 4462,
        ru: 'соотношение',
        en: 'ratio'
    },
    {
        id: 4463,
        ru: 'рациональный',
        en: 'rational'
    },
    {
        id: 4464,
        ru: 'луч',
        en: 'ray'
    },
    {
        id: 4465,
        ru: 'легко',
        en: 'readily'
    },
    {
        id: 4466,
        ru: 'реализация',
        en: 'realization'
    },
    {
        id: 4467,
        ru: 'область',
        en: 'realm'
    },
    {
        id: 4468,
        ru: 'задний',
        en: 'rear'
    },
    {
        id: 4469,
        ru: 'разумно',
        en: 'reasonably'
    },
    {
        id: 4470,
        ru: 'рассуждение',
        en: 'reasoning'
    },
    {
        id: 4471,
        ru: 'успокаивать',
        en: 'reassure'
    },
    {
        id: 4472,
        ru: 'мятежник',
        en: 'rebel'
    },
    {
        id: 4473,
        ru: 'восстание',
        en: 'rebellion'
    },
    {
        id: 4474,
        ru: 'перестроить',
        en: 'rebuild'
    },
    {
        id: 4475,
        ru: 'приемник',
        en: 'receiver'
    },
    {
        id: 4476,
        ru: 'рецессия',
        en: 'recession'
    },
    {
        id: 4477,
        ru: 'получатель',
        en: 'recipient'
    },
    {
        id: 4478,
        ru: 'считать',
        en: 'reckon'
    },
    {
        id: 4479,
        ru: 'признание',
        en: 'recognition'
    },
    {
        id: 4480,
        ru: 'реконструкция',
        en: 'reconstruction'
    },
    {
        id: 4481,
        ru: 'пересчет',
        en: 'recount'
    },
    {
        id: 4482,
        ru: 'восстановление',
        en: 'recovery'
    },
    {
        id: 4483,
        ru: 'рекрут',
        en: 'recruit'
    },
    {
        id: 4484,
        ru: 'набор',
        en: 'recruitment'
    },
    {
        id: 4485,
        ru: 'судья',
        en: 'referee'
    },
    {
        id: 4486,
        ru: 'референдум',
        en: 'referendum'
    },
    {
        id: 4487,
        ru: 'отражение',
        en: 'reflection'
    },
    {
        id: 4488,
        ru: 'реформа',
        en: 'reform'
    },
    {
        id: 4489,
        ru: 'убежище',
        en: 'refuge'
    },
    {
        id: 4490,
        ru: 'беженец',
        en: 'refugee'
    },
    {
        id: 4491,
        ru: 'отказ',
        en: 'refusal'
    },
    {
        id: 4492,
        ru: 'вернуть',
        en: 'regain'
    },
    {
        id: 4493,
        ru: 'несмотря ни на что',
        en: 'regardless'
    },
    {
        id: 4494,
        ru: 'режим',
        en: 'regime'
    },
    {
        id: 4495,
        ru: 'регистрация',
        en: 'registration'
    },
    {
        id: 4496,
        ru: 'регулировать',
        en: 'regulate'
    },
    {
        id: 4497,
        ru: 'регулятор',
        en: 'regulator'
    },
    {
        id: 4498,
        ru: 'регулирующий',
        en: 'regulatory'
    },
    {
        id: 4499,
        ru: 'реабилитация',
        en: 'rehabilitation'
    },
    {
        id: 4500,
        ru: 'царствовать',
        en: 'reign'
    },
    {
        id: 4501,
        ru: 'усиливать',
        en: 'reinforce'
    },
    {
        id: 4502,
        ru: 'отклонение',
        en: 'rejection'
    },
    {
        id: 4503,
        ru: 'релевантность',
        en: 'relevance'
    },
    {
        id: 4504,
        ru: 'надежность',
        en: 'reliability'
    },
    {
        id: 4505,
        ru: 'облегчить',
        en: 'relieve'
    },
    {
        id: 4506,
        ru: 'с облегчением',
        en: 'relieved'
    },
    {
        id: 4507,
        ru: 'вынужденный',
        en: 'reluctant'
    },
    {
        id: 4508,
        ru: 'остаток',
        en: 'remainder'
    },
    {
        id: 4509,
        ru: 'останки',
        en: 'remains'
    },
    {
        id: 4510,
        ru: 'замечательный',
        en: 'remarkable'
    },
    {
        id: 4511,
        ru: 'замечательно',
        en: 'remarkably'
    },
    {
        id: 4512,
        ru: 'средство',
        en: 'remedy'
    },
    {
        id: 4513,
        ru: 'напоминание',
        en: 'reminder'
    },
    {
        id: 4514,
        ru: 'удаление',
        en: 'removal'
    },
    {
        id: 4515,
        ru: 'оказывать',
        en: 'render'
    },
    {
        id: 4516,
        ru: 'обновить',
        en: 'renew'
    },
    {
        id: 4517,
        ru: 'известный',
        en: 'renowned'
    },
    {
        id: 4518,
        ru: 'аренда',
        en: 'rental'
    },
    {
        id: 4519,
        ru: 'замена',
        en: 'replacement'
    },
    {
        id: 4520,
        ru: 'как сообщается',
        en: 'reportedly'
    },
    {
        id: 4521,
        ru: 'отчетность',
        en: 'reporting'
    },
    {
        id: 4522,
        ru: 'представление',
        en: 'representation'
    },
    {
        id: 4523,
        ru: 'воспроизводить',
        en: 'reproduce'
    },
    {
        id: 4524,
        ru: 'воспроизводство',
        en: 'reproduction'
    },
    {
        id: 4525,
        ru: 'республика',
        en: 'republic'
    },
    {
        id: 4526,
        ru: 'напоминать',
        en: 'resemble'
    },
    {
        id: 4527,
        ru: 'проживать',
        en: 'reside'
    },
    {
        id: 4528,
        ru: 'резиденция',
        en: 'residence'
    },
    {
        id: 4529,
        ru: 'Жилой',
        en: 'residential'
    },
    {
        id: 4530,
        ru: 'остаток',
        en: 'residue'
    },
    {
        id: 4531,
        ru: 'подать в отставку',
        en: 'resign'
    },
    {
        id: 4532,
        ru: 'отставка',
        en: 'resignation'
    },
    {
        id: 4533,
        ru: 'сопротивление',
        en: 'resistance'
    },
    {
        id: 4534,
        ru: 'разрешение',
        en: 'resolution'
    },
    {
        id: 4535,
        ru: 'соответствующий',
        en: 'respective'
    },
    {
        id: 4536,
        ru: 'соответственно',
        en: 'respectively'
    },
    {
        id: 4537,
        ru: 'восстановление',
        en: 'restoration'
    },
    {
        id: 4538,
        ru: 'восстановить',
        en: 'restore'
    },
    {
        id: 4539,
        ru: 'сдержанность',
        en: 'restraint'
    },
    {
        id: 4540,
        ru: 'ограничивать',
        en: 'restrict'
    },
    {
        id: 4541,
        ru: 'ограничение',
        en: 'restriction'
    },
    {
        id: 4542,
        ru: 'резюме',
        en: 'resume'
    },
    {
        id: 4543,
        ru: 'розничная торговля',
        en: 'retail'
    },
    {
        id: 4544,
        ru: 'выход на пенсию',
        en: 'retirement'
    },
    {
        id: 4545,
        ru: 'отступление',
        en: 'retreat'
    },
    {
        id: 4546,
        ru: 'забрать',
        en: 'retrieve'
    },
    {
        id: 4547,
        ru: 'откровение',
        en: 'revelation'
    },
    {
        id: 4548,
        ru: 'месть',
        en: 'revenge'
    },
    {
        id: 4549,
        ru: 'доход',
        en: 'revenue'
    },
    {
        id: 4550,
        ru: 'обеспечить регресс',
        en: 'reverse'
    },
    {
        id: 4551,
        ru: 'пересмотр',
        en: 'revision'
    },
    {
        id: 4552,
        ru: 'возрождение',
        en: 'revival'
    },
    {
        id: 4553,
        ru: 'возродить',
        en: 'revive'
    },
    {
        id: 4554,
        ru: 'революционный',
        en: 'revolutionary'
    },
    {
        id: 4555,
        ru: 'риторика',
        en: 'rhetoric'
    },
    {
        id: 4556,
        ru: 'нелепый',
        en: 'ridiculous'
    },
    {
        id: 4557,
        ru: 'винтовка',
        en: 'rifle'
    },
    {
        id: 4558,
        ru: 'бунт',
        en: 'riot'
    },
    {
        id: 4559,
        ru: 'рвать',
        en: 'rip'
    },
    {
        id: 4560,
        ru: 'рискованный',
        en: 'risky'
    },
    {
        id: 4561,
        ru: 'ритуал',
        en: 'ritual'
    },
    {
        id: 4562,
        ru: 'соперник',
        en: 'rival'
    },
    {
        id: 4563,
        ru: 'грабить',
        en: 'rob'
    },
    {
        id: 4564,
        ru: 'ограбление',
        en: 'robbery'
    },
    {
        id: 4565,
        ru: 'крепкий',
        en: 'robust'
    },
    {
        id: 4566,
        ru: 'камень',
        en: 'rock'
    },
    {
        id: 4567,
        ru: 'ракета',
        en: 'rocket'
    },
    {
        id: 4568,
        ru: 'стержень',
        en: 'rod'
    },
    {
        id: 4569,
        ru: 'романтика',
        en: 'romance'
    },
    {
        id: 4570,
        ru: 'роза',
        en: 'rose'
    },
    {
        id: 4571,
        ru: 'вращать',
        en: 'rotate'
    },
    {
        id: 4572,
        ru: 'вращение',
        en: 'rotation'
    },
    {
        id: 4573,
        ru: 'грубо',
        en: 'roughly'
    },
    {
        id: 4574,
        ru: 'руины',
        en: 'ruin'
    },
    {
        id: 4575,
        ru: 'постановление',
        en: 'ruling'
    },
    {
        id: 4576,
        ru: 'слух',
        en: 'rumour'
    },
    {
        id: 4577,
        ru: 'мешок',
        en: 'sack'
    },
    {
        id: 4578,
        ru: 'священный',
        en: 'sacred'
    },
    {
        id: 4579,
        ru: 'жертва',
        en: 'sacrifice'
    },
    {
        id: 4580,
        ru: 'святой',
        en: 'saint'
    },
    {
        id: 4581,
        ru: 'ради',
        en: 'sake'
    },
    {
        id: 4582,
        ru: 'санкция',
        en: 'sanction'
    },
    {
        id: 4583,
        ru: 'удовлетворение',
        en: 'satisfaction'
    },
    {
        id: 4584,
        ru: 'сказать',
        en: 'say'
    },
    {
        id: 4585,
        ru: 'скандал',
        en: 'scandal'
    },
    {
        id: 4586,
        ru: 'пугать',
        en: 'scare'
    },
    {
        id: 4587,
        ru: 'разбросанный',
        en: 'scattered'
    },
    {
        id: 4588,
        ru: 'ученый',
        en: 'scholar'
    },
    {
        id: 4589,
        ru: 'стипендия',
        en: 'scholarship'
    },
    {
        id: 4590,
        ru: 'объем',
        en: 'scope'
    },
    {
        id: 4591,
        ru: 'царапать',
        en: 'scratch'
    },
    {
        id: 4592,
        ru: 'скрининг',
        en: 'screening'
    },
    {
        id: 4593,
        ru: 'винт',
        en: 'screw'
    },
    {
        id: 4594,
        ru: 'проверка',
        en: 'scrutiny'
    },
    {
        id: 4595,
        ru: 'тюлень',
        en: 'seal'
    },
    {
        id: 4596,
        ru: 'сейзев.',
        en: 'seizev.'
    },
    {
        id: 4597,
        ru: 'редко',
        en: 'seldom'
    },
    {
        id: 4598,
        ru: 'селективный',
        en: 'selective'
    },
    {
        id: 4599,
        ru: 'семинар',
        en: 'seminar'
    },
    {
        id: 4600,
        ru: 'сенатор',
        en: 'senator'
    },
    {
        id: 4601,
        ru: 'ощущение',
        en: 'sensation'
    },
    {
        id: 4602,
        ru: 'чувствительность',
        en: 'sensitivity'
    },
    {
        id: 4603,
        ru: 'сентимент',
        en: 'sentiment'
    },
    {
        id: 4604,
        ru: 'разделение',
        en: 'separation'
    },
    {
        id: 4605,
        ru: 'серийный',
        en: 'serial'
    },
    {
        id: 4606,
        ru: 'урегулирование',
        en: 'settlement'
    },
    {
        id: 4607,
        ru: 'поселенец',
        en: 'settler'
    },
    {
        id: 4608,
        ru: 'строго',
        en: 'severely'
    },
    {
        id: 4609,
        ru: 'сексуальность',
        en: 'sexuality'
    },
    {
        id: 4610,
        ru: 'сексуальный',
        en: 'sexy'
    },
    {
        id: 4611,
        ru: 'в форме',
        en: 'shaped'
    },
    {
        id: 4612,
        ru: 'акционер',
        en: 'shareholder'
    },
    {
        id: 4613,
        ru: 'разбить',
        en: 'shatter'
    },
    {
        id: 4614,
        ru: 'сбрасывать',
        en: 'shed'
    },
    {
        id: 4615,
        ru: 'явный',
        en: 'sheer'
    },
    {
        id: 4616,
        ru: 'перевозки',
        en: 'shipping'
    },
    {
        id: 4617,
        ru: 'шокирующий',
        en: 'shocking'
    },
    {
        id: 4618,
        ru: 'стрелять',
        en: 'shoot'
    },
    {
        id: 4619,
        ru: 'берег',
        en: 'shore'
    },
    {
        id: 4620,
        ru: 'нехватка',
        en: 'shortage'
    },
    {
        id: 4621,
        ru: 'вскоре',
        en: 'shortly'
    },
    {
        id: 4622,
        ru: 'сокращать',
        en: 'shrink'
    },
    {
        id: 4623,
        ru: 'пожимание плечами',
        en: 'shrug'
    },
    {
        id: 4624,
        ru: 'брат или сестра',
        en: 'sibling'
    },
    {
        id: 4625,
        ru: 'подпись',
        en: 'signature'
    },
    {
        id: 4626,
        ru: 'значение',
        en: 'significance'
    },
    {
        id: 4627,
        ru: 'симулировать',
        en: 'simulate'
    },
    {
        id: 4628,
        ru: 'симуляция',
        en: 'simulation'
    },
    {
        id: 4629,
        ru: 'одновременно',
        en: 'simultaneously'
    },
    {
        id: 4630,
        ru: 'грех',
        en: 'sin'
    },
    {
        id: 4631,
        ru: 'эскиз',
        en: 'sketch'
    },
    {
        id: 4632,
        ru: 'квалифицированный',
        en: 'skilled'
    },
    {
        id: 4633,
        ru: 'пропускать',
        en: 'skip'
    },
    {
        id: 4634,
        ru: 'череп',
        en: 'skull'
    },
    {
        id: 4635,
        ru: 'слэм',
        en: 'slam'
    },
    {
        id: 4636,
        ru: 'шлепок',
        en: 'slap'
    },
    {
        id: 4637,
        ru: 'слэш',
        en: 'slash'
    },
    {
        id: 4638,
        ru: 'рабство',
        en: 'slavery'
    },
    {
        id: 4639,
        ru: 'лозунг',
        en: 'slogan'
    },
    {
        id: 4640,
        ru: 'слот',
        en: 'slot'
    },
    {
        id: 4641,
        ru: 'разгромить',
        en: 'smash'
    },
    {
        id: 4642,
        ru: 'щелчок',
        en: 'snap'
    },
    {
        id: 4643,
        ru: 'замачивать',
        en: 'soak'
    },
    {
        id: 4644,
        ru: 'парить',
        en: 'soar'
    },
    {
        id: 4645,
        ru: 'так называемый',
        en: 'so-called'
    },
    {
        id: 4646,
        ru: 'социалистический',
        en: 'socialist'
    },
    {
        id: 4647,
        ru: 'подошва',
        en: 'sole'
    },
    {
        id: 4648,
        ru: 'исключительно',
        en: 'solely'
    },
    {
        id: 4649,
        ru: 'адвокат',
        en: 'solicitor'
    },
    {
        id: 4650,
        ru: 'солидарность',
        en: 'solidarity'
    },
    {
        id: 4651,
        ru: 'соло',
        en: 'solo'
    },
    {
        id: 4652,
        ru: 'как-то',
        en: 'somehow'
    },
    {
        id: 4653,
        ru: 'когда-нибудь',
        en: 'sometime'
    },
    {
        id: 4654,
        ru: 'сложный',
        en: 'sophisticated'
    },
    {
        id: 4655,
        ru: 'звук',
        en: 'sound'
    },
    {
        id: 4656,
        ru: 'суверенитет',
        en: 'sovereignty'
    },
    {
        id: 4657,
        ru: 'спам',
        en: 'spam'
    },
    {
        id: 4658,
        ru: 'охватывать',
        en: 'span'
    },
    {
        id: 4659,
        ru: 'запасной',
        en: 'spare'
    },
    {
        id: 4660,
        ru: 'искра',
        en: 'spark'
    },
    {
        id: 4661,
        ru: 'специализироваться',
        en: 'specialize'
    },
    {
        id: 4662,
        ru: 'специализированный',
        en: 'specialized'
    },
    {
        id: 4663,
        ru: 'спецификация',
        en: 'specification'
    },
    {
        id: 4664,
        ru: 'указать',
        en: 'specify'
    },
    {
        id: 4665,
        ru: 'образец',
        en: 'specimen'
    },
    {
        id: 4666,
        ru: 'зрелище',
        en: 'spectacle'
    },
    {
        id: 4667,
        ru: 'зрелищный',
        en: 'spectacular'
    },
    {
        id: 4668,
        ru: 'зритель',
        en: 'spectator'
    },
    {
        id: 4669,
        ru: 'спектр',
        en: 'spectrum'
    },
    {
        id: 4670,
        ru: 'спекулировать',
        en: 'speculate'
    },
    {
        id: 4671,
        ru: 'спекуляция',
        en: 'speculation'
    },
    {
        id: 4672,
        ru: 'заклинание',
        en: 'spell'
    },
    {
        id: 4673,
        ru: 'сфера',
        en: 'sphere'
    },
    {
        id: 4674,
        ru: 'специи',
        en: 'spice'
    },
    {
        id: 4675,
        ru: 'разлив',
        en: 'spill'
    },
    {
        id: 4676,
        ru: 'вращаться',
        en: 'spin'
    },
    {
        id: 4677,
        ru: 'позвоночник',
        en: 'spine'
    },
    {
        id: 4678,
        ru: 'злость',
        en: 'spite'
    },
    {
        id: 4679,
        ru: 'портиться',
        en: 'spoil'
    },
    {
        id: 4680,
        ru: 'пресс-секретарь',
        en: 'spokesman'
    },
    {
        id: 4681,
        ru: 'пресс-секретарь',
        en: 'spokesperson'
    },
    {
        id: 4682,
        ru: 'пресс-секретарь',
        en: 'spokeswoman'
    },
    {
        id: 4683,
        ru: 'спонсорство',
        en: 'sponsorship'
    },
    {
        id: 4684,
        ru: 'спортивный',
        en: 'sporting'
    },
    {
        id: 4685,
        ru: 'в центре внимания',
        en: 'spotlight'
    },
    {
        id: 4686,
        ru: 'супруг',
        en: 'spouse'
    },
    {
        id: 4687,
        ru: 'шпион',
        en: 'spy'
    },
    {
        id: 4688,
        ru: 'отряд',
        en: 'squad'
    },
    {
        id: 4689,
        ru: 'сжимать',
        en: 'squeeze'
    },
    {
        id: 4690,
        ru: 'удар ножом',
        en: 'stab'
    },
    {
        id: 4691,
        ru: 'стабильность',
        en: 'stability'
    },
    {
        id: 4692,
        ru: 'стабилизировать',
        en: 'stabilize'
    },
    {
        id: 4693,
        ru: 'кол',
        en: 'stake'
    },
    {
        id: 4694,
        ru: 'ларек',
        en: 'stall'
    },
    {
        id: 4695,
        ru: 'позиция',
        en: 'stance'
    },
    {
        id: 4696,
        ru: 'стоя',
        en: 'standing'
    },
    {
        id: 4697,
        ru: 'суровый',
        en: 'stark'
    },
    {
        id: 4698,
        ru: 'голодать',
        en: 'starve'
    },
    {
        id: 4699,
        ru: 'статистический',
        en: 'statistical'
    },
    {
        id: 4700,
        ru: 'устойчиво',
        en: 'steadily'
    },
    {
        id: 4701,
        ru: 'пар',
        en: 'steam'
    },
    {
        id: 4702,
        ru: 'рулить',
        en: 'steer'
    },
    {
        id: 4703,
        ru: 'корень',
        en: 'stem'
    },
    {
        id: 4704,
        ru: 'стереотип',
        en: 'stereotype'
    },
    {
        id: 4705,
        ru: 'стимулировать',
        en: 'stimulate'
    },
    {
        id: 4706,
        ru: 'стимул',
        en: 'stimulus'
    },
    {
        id: 4707,
        ru: 'помешивать',
        en: 'stir'
    },
    {
        id: 4708,
        ru: 'хранилище',
        en: 'storage'
    },
    {
        id: 4709,
        ru: 'простой',
        en: 'straightforward'
    },
    {
        id: 4710,
        ru: 'напряжение',
        en: 'strain'
    },
    {
        id: 4711,
        ru: 'прядь',
        en: 'strand'
    },
    {
        id: 4712,
        ru: 'стратегический',
        en: 'strategic'
    },
    {
        id: 4713,
        ru: 'укреплять',
        en: 'strengthen'
    },
    {
        id: 4714,
        ru: 'строго',
        en: 'strictly'
    },
    {
        id: 4715,
        ru: 'поразительный',
        en: 'striking'
    },
    {
        id: 4716,
        ru: 'полоска',
        en: 'strip'
    },
    {
        id: 4717,
        ru: 'полоска',
        en: 'strip'
    },
    {
        id: 4718,
        ru: 'стремиться',
        en: 'strive'
    },
    {
        id: 4719,
        ru: 'гладить',
        en: 'stroke'
    },
    {
        id: 4720,
        ru: 'структурный',
        en: 'structural'
    },
    {
        id: 4721,
        ru: 'спотыкаться',
        en: 'stumble'
    },
    {
        id: 4722,
        ru: 'оглушить',
        en: 'stun'
    },
    {
        id: 4723,
        ru: 'оглушительный',
        en: 'stunning'
    },
    {
        id: 4724,
        ru: 'подчинение',
        en: 'submission'
    },
    {
        id: 4725,
        ru: 'подписчик',
        en: 'subscriber'
    },
    {
        id: 4726,
        ru: 'подписка',
        en: 'subscription'
    },
    {
        id: 4727,
        ru: 'последующий',
        en: 'subsequent'
    },
    {
        id: 4728,
        ru: 'впоследствии',
        en: 'subsequently'
    },
    {
        id: 4729,
        ru: 'субсидия',
        en: 'subsidy'
    },
    {
        id: 4730,
        ru: 'существенный',
        en: 'substantial'
    },
    {
        id: 4731,
        ru: 'существенно',
        en: 'substantially'
    },
    {
        id: 4732,
        ru: 'заменять',
        en: 'substitute'
    },
    {
        id: 4733,
        ru: 'замена',
        en: 'substitution'
    },
    {
        id: 4734,
        ru: 'тонкий',
        en: 'subtle'
    },
    {
        id: 4735,
        ru: 'пригород',
        en: 'suburb'
    },
    {
        id: 4736,
        ru: 'пригородный',
        en: 'suburban'
    },
    {
        id: 4737,
        ru: 'преемственность',
        en: 'succession'
    },
    {
        id: 4738,
        ru: 'последовательный',
        en: 'successive'
    },
    {
        id: 4739,
        ru: 'преемник',
        en: 'successor'
    },
    {
        id: 4740,
        ru: 'сосать',
        en: 'suck'
    },
    {
        id: 4741,
        ru: 'Сью',
        en: 'sue'
    },
    {
        id: 4742,
        ru: 'страдания',
        en: 'suffering'
    },
    {
        id: 4743,
        ru: 'достаточный',
        en: 'sufficient'
    },
    {
        id: 4744,
        ru: 'достаточно',
        en: 'sufficiently'
    },
    {
        id: 4745,
        ru: 'самоубийство',
        en: 'suicide'
    },
    {
        id: 4746,
        ru: 'сюита',
        en: 'suite'
    },
    {
        id: 4747,
        ru: 'саммит',
        en: 'summit'
    },
    {
        id: 4748,
        ru: 'супер',
        en: 'super'
    },
    {
        id: 4749,
        ru: 'превосходно',
        en: 'superb'
    },
    {
        id: 4750,
        ru: 'начальство',
        en: 'superior'
    },
    {
        id: 4751,
        ru: 'контролировать',
        en: 'supervise'
    },
    {
        id: 4752,
        ru: 'надзор',
        en: 'supervision'
    },
    {
        id: 4753,
        ru: 'руководитель',
        en: 'supervisor'
    },
    {
        id: 4754,
        ru: 'добавка',
        en: 'supplement'
    },
    {
        id: 4755,
        ru: 'поддерживающий',
        en: 'supportive'
    },
    {
        id: 4756,
        ru: 'предположительно',
        en: 'supposedly'
    },
    {
        id: 4757,
        ru: 'подавлять',
        en: 'suppress'
    },
    {
        id: 4758,
        ru: 'верховный',
        en: 'supreme'
    },
    {
        id: 4759,
        ru: 'всплеск',
        en: 'surge'
    },
    {
        id: 4760,
        ru: 'хирург',
        en: 'surgeon'
    },
    {
        id: 4761,
        ru: 'хирургический',
        en: 'surgical'
    },
    {
        id: 4762,
        ru: 'излишек',
        en: 'surplus'
    },
    {
        id: 4763,
        ru: 'сдаваться',
        en: 'surrender'
    },
    {
        id: 4764,
        ru: 'наблюдение',
        en: 'surveillance'
    },
    {
        id: 4765,
        ru: 'выживание',
        en: 'survival'
    },
    {
        id: 4766,
        ru: 'выживший',
        en: 'survivor'
    },
    {
        id: 4767,
        ru: 'приостановить',
        en: 'suspend'
    },
    {
        id: 4768,
        ru: 'приостановка',
        en: 'suspension'
    },
    {
        id: 4769,
        ru: 'подозрение',
        en: 'suspicion'
    },
    {
        id: 4770,
        ru: 'подозрительный',
        en: 'suspicious'
    },
    {
        id: 4771,
        ru: 'поддерживать',
        en: 'sustain'
    },
    {
        id: 4772,
        ru: 'устойчивый',
        en: 'sustainable'
    },
    {
        id: 4773,
        ru: 'глотать',
        en: 'swallow'
    },
    {
        id: 4774,
        ru: 'качать',
        en: 'swing'
    },
    {
        id: 4775,
        ru: 'меч',
        en: 'sword'
    },
    {
        id: 4776,
        ru: 'символический',
        en: 'symbolic'
    },
    {
        id: 4777,
        ru: 'сочувствующий',
        en: 'sympathetic'
    },
    {
        id: 4778,
        ru: 'синдром',
        en: 'syndrome'
    },
    {
        id: 4779,
        ru: 'синтез',
        en: 'synthesis'
    },
    {
        id: 4780,
        ru: 'систематический',
        en: 'systematic'
    },
    {
        id: 4781,
        ru: 'взяться',
        en: 'tackle'
    },
    {
        id: 4782,
        ru: 'тактика',
        en: 'tactic'
    },
    {
        id: 4783,
        ru: 'тактический',
        en: 'tactical'
    },
    {
        id: 4784,
        ru: 'ярлык',
        en: 'tag'
    },
    {
        id: 4785,
        ru: 'кран',
        en: 'tap'
    },
    {
        id: 4786,
        ru: 'налогоплательщик',
        en: 'taxpayer'
    },
    {
        id: 4787,
        ru: 'технологический',
        en: 'technological'
    },
    {
        id: 4788,
        ru: 'тинейджеры',
        en: 'teens'
    },
    {
        id: 4789,
        ru: 'храм',
        en: 'temple'
    },
    {
        id: 4790,
        ru: 'временно',
        en: 'temporarily'
    },
    {
        id: 4791,
        ru: 'соблазнять',
        en: 'tempt'
    },
    {
        id: 4792,
        ru: 'жилец',
        en: 'tenant'
    },
    {
        id: 4793,
        ru: 'тенденция',
        en: 'tendency'
    },
    {
        id: 4794,
        ru: 'нежный',
        en: 'tender'
    },
    {
        id: 4795,
        ru: 'напряжение',
        en: 'tension'
    },
    {
        id: 4796,
        ru: 'срок пребывания',
        en: 'tenure'
    },
    {
        id: 4797,
        ru: 'Терминал',
        en: 'terminal'
    },
    {
        id: 4798,
        ru: 'прекратить',
        en: 'terminate'
    },
    {
        id: 4799,
        ru: 'условия',
        en: 'terms'
    },
    {
        id: 4800,
        ru: 'местность',
        en: 'terrain'
    },
    {
        id: 4801,
        ru: 'ужасно',
        en: 'terribly'
    },
    {
        id: 4802,
        ru: 'потрясающий',
        en: 'terrific'
    },
    {
        id: 4803,
        ru: 'ужасать',
        en: 'terrify'
    },
    {
        id: 4804,
        ru: 'территория',
        en: 'territory'
    },
    {
        id: 4805,
        ru: 'террор',
        en: 'terror'
    },
    {
        id: 4806,
        ru: 'терроризм',
        en: 'terrorism'
    },
    {
        id: 4807,
        ru: 'террорист',
        en: 'terrorist'
    },
    {
        id: 4808,
        ru: 'свидетельствовать',
        en: 'testify'
    },
    {
        id: 4809,
        ru: 'показания',
        en: 'testimony'
    },
    {
        id: 4810,
        ru: 'тестирование',
        en: 'testing'
    },
    {
        id: 4811,
        ru: 'учебник',
        en: 'textbook'
    },
    {
        id: 4812,
        ru: 'текстура',
        en: 'texture'
    },
    {
        id: 4813,
        ru: 'к счастью',
        en: 'thankfully'
    },
    {
        id: 4814,
        ru: 'театральный',
        en: 'theatrical'
    },
    {
        id: 4815,
        ru: 'кража',
        en: 'theft'
    },
    {
        id: 4816,
        ru: 'теология',
        en: 'theology'
    },
    {
        id: 4817,
        ru: 'теоретический',
        en: 'theoretical'
    },
    {
        id: 4818,
        ru: 'терапевт',
        en: 'therapist'
    },
    {
        id: 4819,
        ru: 'после этого',
        en: 'thereafter'
    },
    {
        id: 4820,
        ru: 'тем самым',
        en: 'thereby'
    },
    {
        id: 4821,
        ru: 'тезис',
        en: 'thesis'
    },
    {
        id: 4822,
        ru: 'тщательный',
        en: 'thorough'
    },
    {
        id: 4823,
        ru: 'тщательно',
        en: 'thoroughly'
    },
    {
        id: 4824,
        ru: 'вдумчивый',
        en: 'thoughtful'
    },
    {
        id: 4825,
        ru: 'наводящий на размышления',
        en: 'thought-provoking'
    },
    {
        id: 4826,
        ru: 'нить',
        en: 'thread'
    },
    {
        id: 4827,
        ru: 'порог',
        en: 'threshold'
    },
    {
        id: 4828,
        ru: 'взволнованный',
        en: 'thrilled'
    },
    {
        id: 4829,
        ru: 'процветать',
        en: 'thrive'
    },
    {
        id: 4830,
        ru: 'большой палец',
        en: 'thumb'
    },
    {
        id: 4831,
        ru: 'прилив',
        en: 'tide'
    },
    {
        id: 4832,
        ru: 'затянуть',
        en: 'tighten'
    },
    {
        id: 4833,
        ru: 'древесина',
        en: 'timber'
    },
    {
        id: 4834,
        ru: 'своевременный',
        en: 'timely'
    },
    {
        id: 4835,
        ru: 'время',
        en: 'timing'
    },
    {
        id: 4836,
        ru: 'салфетка',
        en: 'tissue'
    },
    {
        id: 4837,
        ru: 'табак',
        en: 'tobacco'
    },
    {
        id: 4838,
        ru: 'толерантность',
        en: 'tolerance'
    },
    {
        id: 4839,
        ru: 'терпеть',
        en: 'tolerate'
    },
    {
        id: 4840,
        ru: 'потери',
        en: 'toll'
    },
    {
        id: 4841,
        ru: 'тонна',
        en: 'ton'
    },
    {
        id: 4842,
        ru: 'тонна',
        en: 'tonne'
    },
    {
        id: 4843,
        ru: 'вершина',
        en: 'top'
    },
    {
        id: 4844,
        ru: 'пытка',
        en: 'torture'
    },
    {
        id: 4845,
        ru: 'бросать',
        en: 'toss'
    },
    {
        id: 4846,
        ru: 'общий',
        en: 'total'
    },
    {
        id: 4847,
        ru: 'турнир',
        en: 'tournament'
    },
    {
        id: 4848,
        ru: 'токсичный',
        en: 'toxic'
    },
    {
        id: 4849,
        ru: 'след',
        en: 'trace'
    },
    {
        id: 4850,
        ru: 'торговая марка',
        en: 'trademark'
    },
    {
        id: 4851,
        ru: 'торговля',
        en: 'trading'
    },
    {
        id: 4852,
        ru: 'трагедия',
        en: 'tragedy'
    },
    {
        id: 4853,
        ru: 'трагический',
        en: 'tragic'
    },
    {
        id: 4854,
        ru: 'тащить',
        en: 'trail'
    },
    {
        id: 4855,
        ru: 'трейлер',
        en: 'trailer'
    },
    {
        id: 4856,
        ru: 'черта',
        en: 'trait'
    },
    {
        id: 4857,
        ru: 'сделка',
        en: 'transaction'
    },
    {
        id: 4858,
        ru: 'транскрипт',
        en: 'transcript'
    },
    {
        id: 4859,
        ru: 'трансформация',
        en: 'transformation'
    },
    {
        id: 4860,
        ru: 'транзит',
        en: 'transit'
    },
    {
        id: 4861,
        ru: 'передача инфекции',
        en: 'transmission'
    },
    {
        id: 4862,
        ru: 'передавать',
        en: 'transmit'
    },
    {
        id: 4863,
        ru: 'прозрачность',
        en: 'transparency'
    },
    {
        id: 4864,
        ru: 'прозрачный',
        en: 'transparent'
    },
    {
        id: 4865,
        ru: 'транспорт',
        en: 'transportation'
    },
    {
        id: 4866,
        ru: 'ловушка',
        en: 'trap'
    },
    {
        id: 4867,
        ru: 'травма',
        en: 'trauma'
    },
    {
        id: 4868,
        ru: 'сокровище',
        en: 'treasure'
    },
    {
        id: 4869,
        ru: 'договор',
        en: 'treaty'
    },
    {
        id: 4870,
        ru: 'огромный',
        en: 'tremendous'
    },
    {
        id: 4871,
        ru: 'племенной',
        en: 'tribal'
    },
    {
        id: 4872,
        ru: 'племя',
        en: 'tribe'
    },
    {
        id: 4873,
        ru: 'трибунал',
        en: 'tribunal'
    },
    {
        id: 4874,
        ru: 'дань уважения',
        en: 'tribute'
    },
    {
        id: 4875,
        ru: 'курок',
        en: 'trigger'
    },
    {
        id: 4876,
        ru: 'триллион',
        en: 'trillion'
    },
    {
        id: 4877,
        ru: 'трио',
        en: 'trio'
    },
    {
        id: 4878,
        ru: 'триумф',
        en: 'triumph'
    },
    {
        id: 4879,
        ru: 'отряд',
        en: 'troop'
    },
    {
        id: 4880,
        ru: 'трофей',
        en: 'trophy'
    },
    {
        id: 4881,
        ru: 'обеспокоенный',
        en: 'troubled'
    },
    {
        id: 4882,
        ru: 'попечитель',
        en: 'trustee'
    },
    {
        id: 4883,
        ru: 'цунами',
        en: 'tsunami'
    },
    {
        id: 4884,
        ru: 'обучение',
        en: 'tuition'
    },
    {
        id: 4885,
        ru: 'оказаться',
        en: 'turnout'
    },
    {
        id: 4886,
        ru: 'оборот',
        en: 'turnover'
    },
    {
        id: 4887,
        ru: 'крутить',
        en: 'twist'
    },
    {
        id: 4888,
        ru: 'окончательный',
        en: 'ultimate'
    },
    {
        id: 4889,
        ru: 'неприемлемо',
        en: 'unacceptable'
    },
    {
        id: 4890,
        ru: 'неопределенность',
        en: 'uncertainty'
    },
    {
        id: 4891,
        ru: 'подвергаться',
        en: 'undergo'
    },
    {
        id: 4892,
        ru: 'бакалавриат',
        en: 'undergraduate'
    },
    {
        id: 4893,
        ru: 'лежащий в основе',
        en: 'underlying'
    },
    {
        id: 4894,
        ru: 'подрывать',
        en: 'undermine'
    },
    {
        id: 4895,
        ru: 'предпринять',
        en: 'undertake'
    },
    {
        id: 4896,
        ru: 'несомненно',
        en: 'undoubtedly'
    },
    {
        id: 4897,
        ru: 'разворачиваться',
        en: 'unfold'
    },
    {
        id: 4898,
        ru: 'неудачный',
        en: 'unfortunate'
    },
    {
        id: 4899,
        ru: 'унифицировать',
        en: 'unify'
    },
    {
        id: 4900,
        ru: 'объединяться',
        en: 'unite'
    },
    {
        id: 4901,
        ru: 'единство',
        en: 'unity'
    },
    {
        id: 4902,
        ru: 'универсальный',
        en: 'universal'
    },
    {
        id: 4903,
        ru: 'беспрецедентный',
        en: 'unprecedented'
    },
    {
        id: 4904,
        ru: 'раскрывать',
        en: 'unveil'
    },
    {
        id: 4905,
        ru: 'предстоящий',
        en: 'upcoming'
    },
    {
        id: 4906,
        ru: 'обновление',
        en: 'upgrade'
    },
    {
        id: 4907,
        ru: 'поддерживать',
        en: 'uphold'
    },
    {
        id: 4908,
        ru: 'срочный',
        en: 'urgent'
    },
    {
        id: 4909,
        ru: 'использование',
        en: 'usage'
    },
    {
        id: 4910,
        ru: 'бесполезный',
        en: 'useless'
    },
    {
        id: 4911,
        ru: 'полезность',
        en: 'utility'
    },
    {
        id: 4912,
        ru: 'использовать',
        en: 'utilize'
    },
    {
        id: 4913,
        ru: 'крайне',
        en: 'utterly'
    },
    {
        id: 4914,
        ru: 'вакуум',
        en: 'vacuum'
    },
    {
        id: 4915,
        ru: 'нечеткий',
        en: 'vague'
    },
    {
        id: 4916,
        ru: 'действительный',
        en: 'valid'
    },
    {
        id: 4917,
        ru: 'действительность',
        en: 'validity'
    },
    {
        id: 4918,
        ru: 'исчезнуть',
        en: 'vanish'
    },
    {
        id: 4919,
        ru: 'переменная',
        en: 'variable'
    },
    {
        id: 4920,
        ru: 'вариация',
        en: 'variation'
    },
    {
        id: 4921,
        ru: 'разнообразный',
        en: 'varied'
    },
    {
        id: 4922,
        ru: 'вена',
        en: 'vein'
    },
    {
        id: 4923,
        ru: 'риск',
        en: 'venture'
    },
    {
        id: 4924,
        ru: 'словесный',
        en: 'verbal'
    },
    {
        id: 4925,
        ru: 'вердикт',
        en: 'verdict'
    },
    {
        id: 4926,
        ru: 'проверять',
        en: 'verify'
    },
    {
        id: 4927,
        ru: 'стих',
        en: 'verse'
    },
    {
        id: 4928,
        ru: 'против',
        en: 'versus'
    },
    {
        id: 4929,
        ru: 'вертикальный',
        en: 'vertical'
    },
    {
        id: 4930,
        ru: 'судно',
        en: 'vessel'
    },
    {
        id: 4931,
        ru: 'ветеран',
        en: 'veteran'
    },
    {
        id: 4932,
        ru: 'жизнеспособный',
        en: 'viable'
    },
    {
        id: 4933,
        ru: 'яркий',
        en: 'vibrant'
    },
    {
        id: 4934,
        ru: 'порок',
        en: 'vice'
    },
    {
        id: 4935,
        ru: 'беспощадный',
        en: 'vicious'
    },
    {
        id: 4936,
        ru: 'точка зрения',
        en: 'viewpoint'
    },
    {
        id: 4937,
        ru: 'сельский житель',
        en: 'villager'
    },
    {
        id: 4938,
        ru: 'нарушать',
        en: 'violate'
    },
    {
        id: 4939,
        ru: 'нарушение',
        en: 'violation'
    },
    {
        id: 4940,
        ru: 'достоинство',
        en: 'virtue'
    },
    {
        id: 4941,
        ru: 'виза',
        en: 'visa'
    },
    {
        id: 4942,
        ru: 'видимый',
        en: 'visible'
    },
    {
        id: 4943,
        ru: 'вокальный',
        en: 'vocal'
    },
    {
        id: 4944,
        ru: 'добровольный',
        en: 'voluntary'
    },
    {
        id: 4945,
        ru: 'голосование',
        en: 'voting'
    },
    {
        id: 4946,
        ru: 'клятва',
        en: 'vow'
    },
    {
        id: 4947,
        ru: 'уязвимость',
        en: 'vulnerability'
    },
    {
        id: 4948,
        ru: 'уязвимый',
        en: 'vulnerable'
    },
    {
        id: 4949,
        ru: 'бродить',
        en: 'wander'
    },
    {
        id: 4950,
        ru: 'сторожить',
        en: 'ward'
    },
    {
        id: 4951,
        ru: 'склад',
        en: 'warehouse'
    },
    {
        id: 4952,
        ru: 'война',
        en: 'warfare'
    },
    {
        id: 4953,
        ru: 'потепление',
        en: 'warming'
    },
    {
        id: 4954,
        ru: 'ордер',
        en: 'warrant'
    },
    {
        id: 4955,
        ru: 'воин',
        en: 'warrior'
    },
    {
        id: 4956,
        ru: 'ослабить',
        en: 'weaken'
    },
    {
        id: 4957,
        ru: 'ткать',
        en: 'weave'
    },
    {
        id: 4958,
        ru: 'сорняк',
        en: 'weed'
    },
    {
        id: 4959,
        ru: 'еженедельно',
        en: 'weekly'
    },
    {
        id: 4960,
        ru: 'странный',
        en: 'weird'
    },
    {
        id: 4961,
        ru: 'благосостояние',
        en: 'welfare'
    },
    {
        id: 4962,
        ru: 'хорошо',
        en: 'well'
    },
    {
        id: 4963,
        ru: 'благополучие',
        en: 'well-being'
    },
    {
        id: 4964,
        ru: 'что угодно',
        en: 'whatsoever'
    },
    {
        id: 4965,
        ru: 'пшеница',
        en: 'wheat'
    },
    {
        id: 4966,
        ru: 'посредством чего',
        en: 'whereby'
    },
    {
        id: 4967,
        ru: 'в то время как',
        en: 'whilst'
    },
    {
        id: 4968,
        ru: 'хлыст',
        en: 'whip'
    },
    {
        id: 4969,
        ru: 'кто бы ни',
        en: 'whoever'
    },
    {
        id: 4970,
        ru: 'полностью',
        en: 'wholly'
    },
    {
        id: 4971,
        ru: 'расширять',
        en: 'widen'
    },
    {
        id: 4972,
        ru: 'широко распространенный',
        en: 'widespread'
    },
    {
        id: 4973,
        ru: 'вдова',
        en: 'widow'
    },
    {
        id: 4974,
        ru: 'ширина',
        en: 'width'
    },
    {
        id: 4975,
        ru: 'готовность',
        en: 'willingness'
    },
    {
        id: 4976,
        ru: 'вытирать',
        en: 'wipe'
    },
    {
        id: 4977,
        ru: 'мудрость',
        en: 'wisdom'
    },
    {
        id: 4978,
        ru: 'остроумие',
        en: 'wit'
    },
    {
        id: 4979,
        ru: 'отзывать',
        en: 'withdraw'
    },
    {
        id: 4980,
        ru: 'снятие',
        en: 'withdrawal'
    },
    {
        id: 4981,
        ru: 'рабочая сила',
        en: 'workforce'
    },
    {
        id: 4982,
        ru: 'тренировка',
        en: 'workout'
    },
    {
        id: 4983,
        ru: 'рабочее место',
        en: 'workplace'
    },
    {
        id: 4984,
        ru: 'мастерская',
        en: 'workshop'
    },
    {
        id: 4985,
        ru: 'червь',
        en: 'worm'
    },
    {
        id: 4986,
        ru: 'поклонение',
        en: 'worship'
    },
    {
        id: 4987,
        ru: 'стоит того',
        en: 'worthwhile'
    },
    {
        id: 4988,
        ru: 'достойный',
        en: 'worthy'
    },
    {
        id: 4989,
        ru: 'запястье',
        en: 'wrist'
    },
    {
        id: 4990,
        ru: 'кричать',
        en: 'yell'
    },
    {
        id: 4991,
        ru: 'урожай',
        en: 'yield'
    },
    {
        id: 4992,
        ru: 'юнец',
        en: 'youngster'
    }
];

export default wordsList;
