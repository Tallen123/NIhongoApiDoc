import React from "react";
function testApiForm({JSON}) {
    return (
        <div>
            <form className="Pannel">
                <div>
                    <ol>
                        <div className="btnlist">
                        <label>Endpoints</label>
                            <li><button className="btn" id="Hiragana" type="button" onClick={Hiragana}>Hiragana</button></li>
                            <li><button className="btn" id="Katakana" type="button" onClick={Katakana}>Katakana</button></li>
                            <li><button className="btn" id="Kanji-JLPT" type="button" onClick={Kanji_JLPT} >Kanji JLPT</button></li>
                            <li><button className="btn" id="Kanji-GRADES" type="button" onClick={Kanji_GRADES} >Kanji GRADES</button></li>
                            <li><textarea style={{position:'relative',resize: 'none',fontSize:'1rem',fontWeight:'900',width:'90%'}} frameborder="0" name="" type='' id="Preview" rows="20">{JSON}</textarea></li>
                        </div>
                    </ol>
                </div>
            </form>
        </div>
    )
}
var alphabet = {
    "Hiragana": {
        "あ": "a",
        "い": "i",
        "う": "u",
        "え": "e",
        "お": "o",
        "か": "ka",
        "き": "ki",
        "く": "ku",
        "け": "ke",
        "こ": "ko",
        "さ": "sa",
        "し": "shi",
        "す": "su",
        "せ": "se",
        "そ": "so",
        "た": "ta",
        "ち": "chi",
        "つ": "tsu",
        "て": "te",
        "と": "to",
        "な": "na",
        "に": "ni",
        "ぬ": "nu",
        "ね": "ne",
        "の": "no",
        "は": "ha",
        "ひ": "hi",
        "ふ": "fu",
        "へ": "he",
        "ほ": "ho",
        "ま": "ma",
        "み": "mi",
        "む": "mu",
        "め": "me",
        "も": "mo",
        "や": "ya",
        "ゆ": "yu",
        "よ": "yo",
        "ら": "ra",
        "り": "ri",
        "る": "ru",
        "れ": "re",
        "ろ": "ro",
        "わ": "wa",
        "を": "wo",
        "ん": "n"
    },
    "Katakana": {
        "ア": "a",
        "イ": "i",
        "ウ": "u",
        "エ": "e",
        "オ": "o",
        "カ": "ka",
        "キ": "ki",
        "ク": "ku",
        "ケ": "ke",
        "コ": "ko",
        "サ": "sa",
        "シ": "shi",
        "ス": "su",
        "セ": "se",
        "ソ": "so",
        "タ": "ta",
        "チ": "chi",
        "ツ": "tsu",
        "テ": "te",
        "ト": "to",
        "ナ": "na",
        "ニ": "ni",
        "ヌ": "nu",
        "ネ": "ne",
        "ノ": "no",
        "ハ": "ha",
        "ヒ": "hi",
        "フ": "fu",
        "ヘ": "he",
        "ホ": "ho",
        "マ": "ma",
        "ミ": "mi",
        "ム": "mu",
        "メ": "me",
        "モ": "mo",
        "ヤ": "ya",
        "ユ": "yu",
        "ヨ": "yo",
        "ラ": "ra",
        "リ": "ri",
        "ル": "ru",
        "レ": "re",
        "ロ": "ro",
        "ワ": "wa",
        "ヰ": "wi",
        "ヱ": "we",
        "ヲ": "wo",
        "ン": "n"
    },
    "Kanji": {
        "JLPT": {
            "N5": {
                "分": "わかれる フン Part, minute of time, segment, share, degree, one's lot, duty",
                "番": "つがい バン Turn, number in a series ",
                "人": "ひと man, person",
                "日": "ひ day, sun, Japan  ",
                "一": "いち one ",
                "国": "くに country ",
                "年 ": "ねん year ",
                "大": "おおきい large, big ",
                "十": "じゅう ten ",
                "二": "に two ",
                "本": "ほん book ",
                "中": "なか inside ",
                "長": "なが long ",
                "出": "で exit,  leave ",
                "三": "さん three ",
                "時": "じ time, hour ",
                "行": "こう going,  journey ",
                "見": "み see,  hopes,  chances,  idea,  opinion,  look at,  visible ",
                "月": "つき month,  moon ",
                "後": "あと behind,  back,  later ",
                "前": "まえ in front,  before ",
                "生": "なま life,  genuine,  birth ",
                "五": "ご five ",
                "間": "ま interval,  space ",
                "上": "うえ above,  up ",
                "東": "ひがし east ",
                "四": "よん four ",
                "今": "いま now ",
                "金": "きん gold ",
                "九": "きゅう nine ",
                "入": "いり enter,  insert ",
                "学": "がく study,  learning,  science  ",
                "高": "こう tall,  high,  expensive ",
                "円": "えん circle,  yen,  round ",
                "子": "こ child ",
                "外": "そと outside ",
                "八": "はち eight ",
                "六": "ろく six ",
                "下": "した below,  down,  descend,  give,  low, inferior ",
                "来": "き come,  due,  next,  cause,  become ",
                "気": "き spirit,  mind ",
                "小": "しょう little,  small ",
                "七": "なな seven ",
                "山": "やま mountain ",
                "話": "はなし tale,  talk ",
                "女": "おんな woman,  female ",
                "北": "きた north ",
                "午": "うま noon,  sign of the horse,  seventh sign of Chinese zodiac ",
                "百": "ひゃく hundred ",
                "書": "しょ write ",
                "先": "さき before,  ahead,  previous,  future,  precedence ",
                "名": "な name,  reputation ",
                "川": "かわ river,  stream ",
                "千": "せん thousand ",
                "水": "みず water ",
                "半": "はん half ",
                "男": "おとこ man,  male ",
                "西": "にし west,  Spain ",
                "電": "でん electricity ",
                "校": "-こう exam,  school,  printing,  proof,  correction ",
                "語": "ご word,  speech,  language ",
                "土": "つち soil,  earth,  ground ",
                "木": "き tree,  wood ",
                "聞": "きき hear,  ask,  listen ",
                "食": "しょく meal,  food ",
                "車": "くるま car ",
                "何": "なん what ",
                "南": "みなみ south ",
                "万": "まん ten thousand ",
                "毎": "まい every ",
                "白": "しろ white ",
                "天": "てん heavens,  sky,  imperial ",
                "母": "はは mother, mama ",
                "火": "ひ Tuesday,  fire ",
                "右": "みぎ right,  right hand side ",
                "読": "よみ read,  reading ",
                "友": "とも friend ",
                "左": "ひだり left,  left hand side ",
                "休": "きゅう rest,  day off,  retire,  sleep ",
                "父": "ちち father ",
                "雨": "あめ rain "
            },
            "N4": {
                "的": "まと テキ target, adjectival suffix",
                "石": "いし セキ、シャク、コク stone",
                "会": "かい meeting,  meet,  party,  association,  interview,  join ",
                "同": "どう same,  agree,  equal ",
                "事": "こと matter,  thing,  fact,  business,  reason,  possibly ",
                "自": "じ self ",
                "社": "しゃ company,  association,  society ",
                "発": "はつ company,  firm,  office,  association,  shrine ",
                "者": "もの person ",
                "地": "ち ground,  land,  earth,  soil ",
                "業": "ごう work,  business,  study ",
                "方": "ほう side,  direction,  way ",
                "新": "しん thin ",
                "場": "ば place,  occasion,  situation ",
                "員": "-いん member ",
                "立": "たて just done ,  freshly baked ,  indicates activity only just occurred ",
                "開": "かい open,  unfold,  unseal ",
                "手": "て hand ",
                "力": "ちから power,  strong,  strain,  bear up,  exert ",
                "問": "もん question,  ask,  problem ",
                "代": "だい substitute,  change,  convert,  replace,  period,  age ",
                "明": "あきら bright,  light ",
                "動": "どう move,  motion,  change,  confusion,  shift,  shake ",
                "京": "きょう imperial capital ",
                "目": "め eye,  eyeball,  eyesight,  sight,  vision,  look,  stare,  glance ",
                "通": "つう traffic,  pass through,  avenue ",
                "言": "げん word,  remark,  statement, say ",
                "理": "り reason,  truth,  way of things,  justice,  ",
                "体": "からだ body,  health ",
                "田": "た rice field ",
                "主": "ぬし lord,  chief,  master ",
                "題": "だい topic,  subject ",
                "意": "い feelings,  thoughts,  meaning ",
                "不": "ふ un-,  non-,  negative prefix ",
                "作": "さく make,  production,  prepare,  build ",
                "用": "よう utilize,  business,  service,  use,  employ ",
                "度": "ど degrees,  occurrence,  time,  counter for occurrences ",
                "強": "きょう strong ",
                "公": "こう official,  public,  formal,  open,  governmental,  ",
                "持": "もち hold,   have ",
                "野": "の plains,   field,   rustic,   civilian life ",
                "以": "い by means of,   because,   in view of,   compared with ",
                "思": "おもう think ",
                "家": "いえ house,   home ",
                "世": "よ generation,  world,  society,  public ",
                "多": "さわ many,  frequent,  much ",
                "正": "ただし correct,  justice,  righteous ",
                "安": "あん relax,  cheap,  low,  quiet,  rested,  contented,  peaceful ",
                "院": "いん institution,  temple,  mansion,  school ",
                "心": "りっしんべん heart,  mind,  spirit ",
                "界": "さかい border,  boundary,  mental state ",
                "教": "える teach,  faith,  doctrine  ",
                "文": "ふみ sentence,  literature,  style,  art,  decoration,  figures,  plan  ",
                "元": "もと beginning,  former time,  origin ",
                "重": "じゅう heavy,  heap up,  pile up,  nest of boxes,  -fold ",
                "近": "きん near,  early,  akin,  tantamount ",
                "考": "かんがえ thinking,  thought,  ideas,  intention ",
                "画": "が brush-stroke,  picture ",
                "海": "うみ sea. ocean ",
                "売": "うり sell ",
                "知": "ち know,  wisdom ",
                "道": "みち road-way,  street,  district,  journey,  course,  moral,  teachings ",
                "集": "しゅう gather,  meet,  congregate,  swarm,  flock ",
                "別": "れる separate,  branch off,  diverge,  fork,  another,  extra,  specially ",
                "物": "もの thing,  object,  matter ",
                "使": "し use ",
                "品": "しな goods,  refinement,  dignity,  article,  counter for meal courses ",
                "計": "けい plot,  plan,  scheme,  measure ",
                "死": "し death,  die ",
                "特": "とく special ",
                "私": "わたくし private,  i,  me ",
                "始": "はじめ commence,  begin ",
                "朝": "あさ morning,  dynasty,  regime,  epoch,  period,  North  Korea ",
                "運": "うん carry,  luck,  destiny,  fate,  lot,  transport,  progress,  advance ",
                "終": "おわり end,  finish ",
                "台": "だい pedestal,  a stand,  counter for machines and vehicles ",
                "広": "ひろし wide,  broad,  spacious ",
                "住": "じゅう dwell,  reside,  live,  inhabit ",
                "真": "しん true,  reality,  Buddhist sect ",
                "有": "ゆう possess,  have,  exist,  happen,  occur,  approx ",
                "口": "くち mouth ",
                "少": "すくな few,  little ",
                "町": "まちvillage,  town,  block,  street ",
                "料": "-りょう fee,  materials ",
                "工": "こう craft,  construction ",
                "建": "けん build ",
                "空": "そら empty,  sky,  void,  vacant,  vacuum ",
                "急": "きゅう hurry,  emergency,  sudden,  steep ",
                "止": "とめ stop,  halt ",
                "送": "おくる escort,  send ",
                "切": "-る cut,  cutoff,  be sharp ",
                "転": "てん revolve,  turn around,  change ",
                "研": "けん polish,  study of,  sharpen ",
                "足": "あし leg,  foot,  be sufficient,  counter for pairs of footwear ",
                "究": "きわむ research,  study ",
                "楽": "らく music,  comfort,  ease ",
                "起": "き rouse,  wake up,  get up ",
                "着": "き don,  arrive,  wear,  counter for suits of clothing ",
                "店": "みせ store,  shop ",
                "病": "やまい ill,  sick ",
                "質": "しつ substance,  quality,  matter,  temperament ",
                "待": "まち wait,  depend on ",
                "試": "み test,  try,  attempt,  experiment,  ordeal ",
                "族": "ぞく tribe,  family ",
                "銀": "ぎん silver ",
                "早": "はや early,  fast ",
                "映": "えい reflect,  reflection,  projection ",
                "親": "おや parent,  intimacy,  relative,  familiarity,  dealer cards  ",
                "験": "げん verification,  effect,  testing ",
                "英": "えい England,  English ",
                "医": "い doctor,  medicine ",
                "仕": "し attend,  doing,  official,  serve ",
                "去": "さっ gone,  past,  quit,  leave,  elapse,  eliminate,  divorce ",
                "味": "あじ flavor,  taste ",
                "写": "うつし copy,  be photographed,  describe ",
                "字": "じ character,  letter,  word,  section of village ",
                "答": "こたえ solution,  answer ",
                "夜": "よる night,  evening ",
                "音": "おと sound,  noise  ",
                "注": "ちゅう pour,  irrigate,  shed tears ,  flow into,  concentrate on,  notes,  comment,  annotate  ",
                "帰": "き homecoming,  arrive at,  lead to,  result in ",
                "古": "ふる- old ",
                "歌": "うた song,  sing ",
                "買": "かい buy ",
                "悪": "わる bad,  vice,  rascal,  false,  evil,  wrong ",
                "図": "え map,  drawing,  plan,  unexpected,  accidentally ",
                "週": "しゅう week ",
                "室": "むろ room,  apartment,  chamber,  greenhouse,  cellar ",
                "歩": "あゆみ walk,  counter for steps ",
                "風": "かぜかざ- wind,  air,  style,  manner ",
                "紙": "かみ paper ",
                "黒": "くろ black ",
                "花": "はな flower ",
                "春": "はる springtime,  spring season  ",
                "赤": "あか red ",
                "青": "あお blue,  green ",
                "館": "やかた building,  mansion,  large building,  palace ",
                "屋": "-や roof,  house,  shop,  dealer,  seller ",
                "色": "いろ color ",
                "走": "そう run ",
                "秋": "あき autumn ",
                "夏": "なつ summer ",
                "習": "-う learn ",
                "駅": "えき station ",
                "洋": "よう ocean,  western style ",
                "旅": "たび trip,  travel ",
                "服": "ふく clothing,  admit,  obey,  discharge ",
                "夕": "ゆう evening ",
                "借": "かり borrow,  rent ",
                "曜": "よう weekday ",
                "飲": "いん drink,  smoke,  take ",
                "肉": "にく meat ",
                "貸": "かし lend, loan ",
                "堂": "どう public chamber,  hall ",
                "鳥": "とり bird,  chicken ",
                "飯": "めし meal,  boiled rice ",
                "勉": "つとむ exertion ",
                "冬": "ふゆ winter ",
                "昼": "ひる daytime,  noon ",
                "茶": "ちゃ tea ",
                "弟": "おとうと younger brother,  faithful service to elders ",
                "牛": "うし cow ",
                "魚": "さかな fish ",
                "兄": "あに elder brother,  big brother ",
                "犬": "いぬ dog ",
                "妹": "いもうと younger sister ",
                "姉": "あね elder sister ",
                "漢": "かん Sino-,  China "
            },
            "N3": {


                "供": "そな、とも キョウ、ク offer, accompany",

                "難": "かた、むずか ナン difficult, disaster",

                "済": "す サイ settle, relieve, finish",

                "若": "わか、も ジャク、ニャク young",

                "孝": "コウ filial piety",

                "割": "わ、わり、さ カツ divide, split",

                "収": "おさ シュウ take in, obtain, collect",

                "座": "すわ ザ seat, sit",

                "認": "みと ニン recognize",

                "論": "ロン argue, theory, thesis",

                "宅": "タク house, residence",

                "処": "ショ deal with, treat",

                "警": "ケイ guard against, warn, admonish",

                "状": "ジョウ form, condition, letter, circumstances",

                "支": "ささ シ branch, support",

                "判": "ハン、バン stamp, seal, judge",

                "制": "セイ system, control",

                "可": "カ  - able, approve",

                "確": "たし カク certain, verify",

                "限": "かぎ ゲン limit",

                "性": "セイ、ショウ nature, sex, -ity, gender",

                "術": "ジュツ practical art, technique",

                "情": "なさ ジョウ、セイ emotion, actual conditions",

                "構": "かま コウ construct, mind",

                "際": "きわ サイ verge, occasion, edge",

                "件": "ケン matter",

                "職": "ショク employment",

                "経": "へ、た ケイ、キョウ pass through, manage, sutra",

                "報": "むく ホウ inform, require, news, report, reward",

                "退": "しりぞ タイ retreat,drive away, repel",

                "示": "しめ シ、ジ show",

                "師": "n/a シ master, teacher",

                "財": "ザイ、サイ wealth, property, money",

                "演": "エン perform",

                "断": "た、ことわ ダン cut off, decision, refuse",

                "常": "つね、とこ ジョウ normal, regular, ever-, always",

                "非": "ヒ is not, mistake, non-, un-",

                "能": "ノウ ability, function, Noh play",

                "容": "ヨウ appearance, contain",

                "程": "ほど テイ extent, established form, degree",

                "解": "と カイ、ゲ take apart, dissolve, clarify, untie",

                "在": "あ ザイ be, exist",

                "現": "あらわ ゲン actual, appear, present",

                "増": "ま、ふ ゾウ increase",

                "識": "シキ discriminate, knowledge, know",

                "規": "キ regulation, measure",

                "備": "そな ビ provide, furnish",

                "務": "つと ム duty, work, serve",

                "労": "ロウ labor, toil",

                "殺": "ころ サツ、サイ、セツ kill",

                "民": "たみ ミン people",

                "積": "つ セキ accumulate",

                "産": "う、うぶ サン give birth, produce",

                "良": "よ、い リョウ good",

                "昨": "サク yesterday, last",

                "得": "え、う トク acquire, gain, profit",

                "争": "あらそ ソウ contend, dispute, argue",

                "敗": "やぶ ハイ be defeated",

                "側": "かわ ソク side",

                "念": "n/a ネン thought, desire, attention",

                "残": "のこ ザン remain, ruthless",

                "果": "は カ fruit",

                "参": "まい サン participate, visit a holy place",

                "置": "お チ place, put",

                "位": "くらい イ rank, position",

                "求": "もと キュウ seek, demand",

                "景": "ケイ scene",

                "共": "とも キョウ joint, together, both",

                "機": "はた キ machine, opportunity",

                "約": "ヤク promise, contract, approximately",

                "成": "な セイ、ジョウ form, achieve",

                "望": "のぞ ボウ、モウ hope, desire, look after",

                "続": "つづ ゾク continue",

                "告": "つ コク notify, tell, inform",

                "席": "セキ seat",

                "働": "はたら ドウ work",

                "最": "もっと サイ most",

                "初": "はじ、はつ、うい、そ ショ first",

                "伝": "つた デン transmit",

                "要": "い、かなめ ヨウ important, summarize, require",

                "必": "かなら ヒツ without failure, surely",

                "連": "つら、つ レン link, in succession, group, accompaniment",

                "失": "うしな シツ lose, slip",

                "変": "か ヘン change, abnormal",

                "単": " タン single",

                "達": "たち タツ attain, suffix for plural",

                "害": "ガイ harm, damage",

                "戦": "いくさ、たたか セン war, fight, battle",

                "末": "すえ マツ、バツ last part, end",

                "利": "き リ advantage, profit, be effective",

                "差": "さ サ difference",

                "費": "つい ヒ expense, spend, waste",

                "種": "たね シュ variety, seed, type, kind",

                "観": "カン view",

                "議": "ギ discuss, legislative body, deliberation",

                "説": "と セツ、ゼイ explain, theory, opinion",

                "満": "み マン full",

                "選": "えら セン choose, elect",

                "飛": "と ヒ fly",

                "関": "せき、かか カン concern, barrier",

                "信": "シン believe, trust, message",

                "然": "しかり しかし ゼン、ネン Sort of thing, so, if so, in that case, well ",

                "法": "ホウ、ハツ、ホツ law, method",

                "治": "おさ、なお ジ、チ govern, cure, heal",

                "平": "たいら ビョウ Even, flat, peace ",

                "想": "おもう ソウ ソ Concept, think, idea, thought ",

                "深": "ふかい ふかまる ふかめる シン Deep, heighten, intensify, strengthen ",

                "助": "たすける たすかる すける すけ ジョ Help, rescue, assist",

                "流": "ながれる ながれ ながす リュウ ル Current, a sink, flow, forfeit ",

                "係": "かかる かかり かかわる ケイ Person in charge, connection, duty, concern oneself ",

                "表": "あらわれる あらわす ヒョウ Surface, table, chart, diagram ",

                "面": "おもて つら メン ベン Mask, face, features, surface ",

                "対": "こたえる むかう タイ ツイ Vis-a-vis, opposite, even, equal, versus, anti-, compare ",

                "反": "そる そらす かえす かえる ハン ホン タン ホ  Anti-",

                "他": "ほか タ Other, another, the others",

                "式": "シキ Style, ceremony, rite, function, method, system, form, expression ",

                "定": "さだまる さだか テイ ジョウ Determine, fix, establish, decide ",

                "予": "あらかじめ ヨ シャ Beforehand, previous, myself, I",

                "取": "とる とり とり シュ Take, fetch, take up ",

                "期": "キ ゴ Period, time, date, term ",

                "談": "ダン Discuss, talk ",

                "相": "ソウ ショウ Inter-, mutual, together, each other, minister of state, councillor, aspect, phase, physiognomy ",

                "次": "つぐ つぎ ジ シ Next, order, sequence ",

                "号": "さけぶ よびな ゴウ Nickname, number, item, title, pseudonym, name, call ",

                "由": "よし よる ユ ユウ ユイ Wherefore, a reason ",

                "畑": "はた はたけ Farm, field, garden, one's specialty, (kokuji) ",

                "登": "のぼる あがる トウ チョウ Ascend, climb up ",

                "投": "なげる トウ Throw, discard, abandon, launch into, join, invest in, hurl, give up, sell at a loss",

                "速": "はやい はやめる すみやか ソク Quick, fast ",

                "勝": "すぐれる かつ ショウ Victory, win, prevail, excel ",

                "育": "そだてる はぐくむ イク Bring up, grow up, raise, rear ",

                "葉": "は ヨウ Leaf, plane, lobe, needle, blade, spear, counter for flat things, fragment, piece ",

                "和": "やわらぐ やわらげる ワ オ/カ Harmony, Japanese style, peace, soften, Japan ",

                "負": "まける まかす おう フ Defeat, negative, -, minus, bear, owe, assume a responsibility ",

                "客": "キャク カク Guest, visitor, customer, client ",

                "命": "いのち メイ ミョウ Fate, command, decree, destiny, life, appoint ",

                "落": "おとす おち おちる ラク Fall, drop, come down ",

                "放": "はなれる こく ホウ Set free, release, fire, shoot, emit, banish, liberate ",

                "乗": "のる のせる シ/ジョウ Ride, power, multiplication, record, counter for vehicles, board, mount, join ",

                "化": "ふける けする カ ケ Change, take the form of, influence, enchant, delude, -ization ",

                "役": "ヤク エキ Duty, war, campaign, drafted labor, office, service, role ",

                "球": "たま キュウ Ball, sphere ",

                "感": "カン Emotion, feeling, sensation ",

                "受": "うける うかる ジュ Accept, undergo, answer (phone), take, get, catch, receive ",

                "申": "もうす さる シン Have the honor to, sign of the monkey, 3-5PM, ninth sign of Chinese zodiac ",

                "様": "さま さん ヨウ ショウ Esq., way, manner, situation, polite suffix ",

                "配": "くばる ハイ Distribute, spouse, exile, rationing ",

                "向": "むかい むかう コウ Yonder, facing, beyond, confront, defy, tend toward, approach ",

                "横": "よこ オウ Sideways, side, horizontal, width, woof ",

                "所": "ところ どころ ショ Place ",

                "部": "ブ Section, bureau, dept, class, copy, part, portion, counter for copies of a newspaper or magazine ",

                "全": "まったく ゼン Whole, entire, all, complete, fulfill ",

                "実": "まことに ジツ シツ Reality, truth ",

                "決": "きまる ケツ Decide, fix, agree upon, appoint ",

                "調": "ととのえる チョウ Tune, tone, meter, key (music), writing style, prepare, exorcise, investigate ",

                "内": "うち ナイ Inside, within, between, among, house, home ",

                "交": "こもごも まじわる コウ Mingle, mixing, association, coming & going ",

                "頭": "あたま かぶり トウ Head, counter for large animals ",

                "太": "ふとる タイ Plump,thick,big around ",

                "引": "ひける イン Pull, tug, jerk, admit, install, quote, refer to ",

                "直": "ただちに チョク Straightaway,honesty,frankness,fix,repair ",

                "当": "まさにべし トウ Hit, right, appropriate, himself ",

                "里": "さと リ Ri, village, parent's home, league ",

                "米": "こめ よね メエトル Rice,USA,metre ",

                "首": "くび シュ Neck,counterfor songs and poems ",

                "記": "しるす キ Scribe, account, narrative ",

                "回": "カイエ まわす もとおる - times,round,game,revolve,counter for occurrences ",

                "声": "こえ セイ ショウ Voice",

                "科": "カ Department, course, section ",

                "数": "サク わずらわしい しばしば Number, strength, fate, law, figures ",

                "点": "テン ともす たてるSpot, point, mark, speck, decimal point",

                "活": "いかす カツ Lively, resuscitation, being helped, living ",

                "原": "はら ゲン Meadow, original, primitive, field, plain, prairie, tundra, wilderness ",

                "完": "カン  perfect,  completion,  end ",

                "降": " ろす  descend,  precipitate,  fall,  surrender ",

                "責": "める blame,  condemn,  censure ",

                "捕": " まえる つか  catch,  capture ",

                "危": "あぶ  dangerous,  fear,  uneasy ",

                "給": "たも  salary,  wage,  gift,  allow,  grant,  bestow on ",

                "苦": "しむ くる  suffering,  trial,  worry,  hardship,  feel bitter,  scowl ",

                "迎": "/  welcome,  meet,  greet ",

                "園": "/  park,  garden,  yard,  farm ",

                "具": "える  tool,  utensil,  means,  possess,  ingredients,  counter for armor,  suits,  sets of furniture ",

                "辞": "める いな  resign,  word,  term,  expression ",

                "因": "よる  cause,  factor,  be associated with,  depend on,  be limited to ",

                "馬": "うま  horse ",

                "愛": "  love,  affection,  favourite ",

                "富": "む  wealth,  enrich,  abundant ",

                "彼": "かれ かの  he,  that,  the ",

                "未": "だ ひつじ  un- ,  not yet,  hitherto,  still,  even now,  sign of the ram,  1 - 3 PM ",

                "舞": "う まい  dance,  flit,  circle,  wheel ",

                "亡": "ぶ ほろ  deceased,  the late,  dying,  perish ",

                "冷": "ます  cool,  coldbeer,  person ,  chill ",

                "適": "かな  suitable,  occasional,  rare,  qualified,  capable ",

                "婦": "/  lady,  woman,  wife,  bride ",

                "寄": "/  draw near,  stop in,  bring near,  gather,  collect,  send,  forward ",

                "込": "こみ  crowded,  mixture,  in bulk,  included,  kokuji  ",

                "顔": "ガン かお  face,  expression ",

                "類": "たぐい  sort,  kind,  variety,  class,  genus ",

                "余": "あま  too much,  myself,  surplus,  other,  remainder ",

                "王": "/  king,  rule,  magnate ",

                "返": "かえ  return,  answer,  fade,  repay ",

                "妻": "/  wife,  spouse ",

                "背": "そむける  stature,  height,  back,  behind ",

                "熱": "ネツ アツ.  heat,  temperature,  fever,  mania,  passion ",

                "宿": "やど やど  inn,  lodging,  relay station,  dwell,  lodge,  be pregnant,  home,  dwelling ",

                "薬": "/  medicine,  chemical,  enamel,  gunpowder,  benefit ",

                "険": "しい  precipitous,  inaccessible place,  impregnable position,  steep,  place,  sharp eyes ",

                "頼": "もしい  trust,  request ",

                "覚": "める さと  memorize,  learn,  remember,  awake,  sober up ",

                "船": "ふな  ship,  boat ",

                "途": "/  route,  way,  road ",

                "許": "ゆるす  permit,  approve ",

                "抜": "かす  slip out,  extract,  pull out,  pilfer,  quote,  remove,  omit ",

                "便": "たよ  convenience ",

                "留": "まる  detain,  fasten,  halt,  stop ",

                "罪": "つみ  guilt,  sin,  crime,  fault,  blame,  offense ",

                "努": "つと  toil,  diligent,  as much as possible ",

                "精": "/  refined,  ghost,  fairy,  energy,  vitality,  semen,  excellence ",

                "散": "らかる  scatter,  disperse, spend,  squander ",

                "静": "まる  quiet ",

                "婚": "/  marriage ",

                "喜": "よろこ  rejoice,  take pleasure in ",

                "浮": "かぶむ  floating,  float,  rise to surface ",

                "絶": "やすた  discontinue,  beyond,  sever,  cut off,  abstain,  interrupt,  suppress ",

                "幸": "いさち  happiness,  blessing,  fortune ",

                "押": "さえる  push,  stop,  check,  subdue,  attach,  seize,  weight,  shove,  press,  seal,  do inspite of ",

                "倒": "れたお  overthrow,  fall,  collapse,  drop,  break down ",

                "等": "しいなど  etc.,  and so forth,  classfirst ,  quality,  equal,  similar ",

                "老": "おいる  old man,  old age,  grow old ",

                "曲": "まがる  bend,  music,  melody,  composition,  pleasure,  injustice,  fault,  curve,  crooked,  perverse,  lean ",

                "払": "はらい  pay,  clear out,  prune,  banish,  dispose of ",

                "庭": "/  courtyard,  garden,  yard ",

                "徒": "いたずら  junior,  emptiness,  vanity,  futility,  uselessness,  ephemeral thing,  gang,  set,  party,  people ",

                "勤": "いそしむ  diligence,  become employed,  serve ",

                "遅": "らす  slow,  late,  back,  later ",

                "居": "るい  reside,  to be,  exist,  live with ",

                "雑": "まじる  miscellaneous ",

                "招": "まね  beckon,  invite,  summon,  engage ",

                "困": "こま  quandary,  become distressed,  annoyed ",

                "欠": "あくび  lack,  gap,  fail ",

                "更": "かす  grow late,  night watch,  sit up late,  of course ",

                "刻": "むきざ  engrave,  cut fine,  chop,  hash,  mince,  time,  carving ",

                "賛": "える  approve,  praise,  title or inscription on picture,  assist,  agree with ",

                "抱": "いだ  embrace,  hug,  hold in arms ",

                "犯": "おかす  crime,  sin,  offense ",

                "恐": "がる  fear,  dread,  awe ",

                "息": "いき  breath,  respiration,  son,  intereston money  ",

                "遠": "/  distant,  far ",

                "戻": "すもど  re-,  return,  revert,  resume,  restore,  go backwards ",

                "願": "ねが  petition,  request,  vow,  wish,  hope ",

                "絵": "/  picture,  drawing,  painting,  sketch ",

                "越": "える  surpass,  cross over,  move to,  exceed,  Vietnam ",

                "欲": "しい  longing,  covetousness,  greed,  passion,  desire,  craving ",

                "痛": "める  pain,  hurt,  damage,  bruise ",

                "笑": "わら  laugh ",

                "互": "いかたみ  mutually,  reciprocally,  together ",

                "束": "ねる  bundle,  sheaf,  ream,  tie in bundles,  govern,  manage,  control ",

                "似": "る  becoming,  resemble,  counterfeit,  imitate,  suitable ",

                "列": "/  file,  row,  rank,  tier,  column ",

                "探": "るさが  grope,  search,  look for ",

                "逃": "れる  escape,  flee,  shirk,  evade,  set free ",

                "遊": "バあそ  play ",

                "迷": "まよ  astray,  be perplexed,  in doubt,  lost,  err,  illusion ",

                "夢": "い  dream,  vision,  illusion ",

                "君": "きみ  old boy,  name - suffix ",

                "閉": "まる  closed,  shut ",

                "緒": "お  thong,  beginning,  inception,  end,  cord,  strap ",

                "折": "り  fold,  break,  fracture,  bend,  yield,  submit ",

                "草": "くさ   grass,  weeds,  herbs,  pasture,  write,  draft ",

                "暮": "れる  livelihood,  make a living,  spend time ",

                "酒": "さか  sake,  alcohol ",

                "悲": "しむ  jail cell,  grieve,  sad,  deplore,  regret ",

                "晴": "れる  clear up ",

                "掛": "かりかかり  hang,  suspend,  arrive at,  tax,  pour ",

                "到": "いたる  arrival,  proceed,  reach,  attain,  result in ",

                "寝": "める  lie down,  sleep,  rest,  bed,  remain unsold ",

                "暗": "くらい  darkness,  disappear,  shade,  informal,  grow dark,  be blinded ",

                "盗": "むぬす  steal,  rob,  pilfer ",

                "吸": "すう  suck,  imbibe,  inhale,  sip ",

                "陽": "/  sunshine,  yang principle,  positive,  male,  heaven,  daytime ",

                "御": "おん - お - み  honorable,  manipulate,  govern ",

                "歯": "いよわい  tooth,  cog ",

                "忘": "れる  forget ",

                "雪": "/  snow ",

                "吹": "/  blow,  breathe,  puff,  emit,  smoke ",

                "娘": "むすめ  daughter,  girl ",

                "誤": "あやま  mistake,  err,  do wrong,  mislead ",

                "洗": "/  wash,  inquire into,  probe ",

                "慣": "らす  accustomed,  get used to,  become experienced ",

                "礼": "/  salute,  bow,  ceremony,  thanks,  remuneration ",

                "窓": "けむだし  window,  pane ",

                "昔": "むかし  once upon a time,  antiquity,  old times ",

                "貧": "まず  poverty,  poor ",

                "怒": "おこ  angry,  be offended ",

                "泳": "およ  swim ",

                "祖": "/  ancestor,  pioneer,  founder ",

                "杯": "さかずき  counter for cupfuls,  wine glass,  glass,  toast ",

                "疲": "らす  exhausted,  tire,  weary ",

                "皆": "みな  all,  everything ",

                "鳴": "くな  chirp,  cry,  bark,  sound,  ring,  echo,  honk ",

                "腹": "はら  abdomen,  belly,  stomach ",

                "煙": "けむ  smoke ",

                "眠": "ねむ  sleep,  die,  sleepy ",

                "怖": "れる dreadful,  be frightened,  fearful ",

                "耳": "/  ear ",

                "頂": "くいただき  place on the head,  receive,  top of head,  top,  summit,  peak ",

                "箱": "はこ  box,  chest,  case,  bin,  railway car ",

                "晩": "/  nightfall,  night ",

                "寒": "カン  cold ",

                "髪": "カ  hair of the head ",

                "忙": "うれえるさま  busy,  occupied,  restless ",

                "才": "/  genius,  years old, cubic shaku ",

                "靴": "くつ  shoes ",

                "恥": "じらう  shame,  dishonor ",

                "偶": "たま  accidentally,  even number,  couple,  man & wife,  same kind ",

                "偉": "/  admirable,  greatness,  remarkable,  conceited,  famous,  excellent ",

                "猫": "ねこ  cat ",

                "幾": "つ  how many,  how much,  how far,  how long "
            },
            "N2": {
                "無": "な ム、ブ without, nothing",

                "党": "トウ  なかま むら  party,  faction,  clique ",

                "協": "キョウ  co-,  cooperation ",

                "総": "ソウ フ  す.べて すべ.て  general,  whole,  all,  full,  total ",

                "区": "ク オウ コウ  ward,  district ",

                "領": "リョウ  jurisdiction,  dominion,  territory,  fief,  reign ",

                "県": "ケン カ.ケ  prefecture ",

                "設": "セツ モウ.ケ   establishment,  provision,  prepare ",

                "改": "カイ  あらた.める あらた.まる  reformation,  change,  modify,  mend,  renew,  examine,  inspect,  search ",

                "府": "  borough,  urban prefecture,  govt office,  representative body,  storehouse ",

                "査": "サ  investigate ",

                "委": "イ ユダ.ネ  committee,  entrust to,  leave to,  devote,  discard ",

                "軍": "グン  army,  force,  troops,  war,  battle ",

                "団": "ダン トン  かたまり まる.い  group,  association ",

                "各": "カク オノオ  each,  every,  either ",

                "島": "トウ しま   island ",

                "革": "カク かわ  leather,  become serious,  skin,  hide,  pelt ",

                "村": "ソン ム  town,  village ",

                "勢": "セイ ゼイ ハズ  いきお.い  forces,  energy,  military strength ",

                "減": "ゲン  へ.る へ.らす  dwindle,  decrease,  reduce,  decline,  curtail,  get hungry ",

                "再": "サイ サ フタタ.  again,  twice,  second time ",

                "税": "ゼ  tax,  duty ",

                "営": "エイ  いとな.む いとな.み   occupation,  camp,  perform,  build,  conduct business  ",

                "比": "ヒ クラ.ベ  compare,  race,  ratio,  Philipines ",

                "防": "ボウ フセ.  ward off,  defend,  protect,  resist ",

                "補": "ホ  おぎな.う  supplement,  supply,  make good,  offset,  compensate,  assistant,  learner ",

                "境": "キョウ ケイ サカ  boundary,  border,  region ",

                "導": "ドウ ミチビ.  guidance,  leading,  conduct,  usher ",

                "副": "フ  vice-,  duplicate,  copy ",

                "算": "サン  そろ  calculate,  divining,  number,  abacus,  probability ",

                "輸": "ユ シュ  transport,  send,  be inferior ",

                "述": "ジュツ  の.べる  mention,  state,  speak,  relate ",

                "線": "セン  すじ  line,  track ",

                "農": "ノ  agriculture,  farmers ",

                "州": "シュウ ス  state,  province ",

                "武": "ブ ム タケ.  warrior,  military,  chivalry,  arms ",

                "象": "ショウ ゾウ カタド.  elephant,  pattern after,  imitate,  image,  shape,  sign of the times  ",

                "域": "イキ  range,  region,  limits,  stage,  level ",

                "額": "ガク ヒタ  forehead,  tablet,  plaque,  framed picture,  sum,  amount,  volume ",

                "欧": "オウ ハ. うた.う  Europe ",

                "担": "タン  かつ.ぐ にな.う  shouldering,  carry,  raise,  bear ",

                "準": "ジュン じゅん.じる じゅん.ずる なぞら.える のり ひと.しい みずもり  semi-,  correspond to,  proportionate to,  conform,  imitate ",

                "賞": "ショウ  ほ.める  prize,  reward,  praise ",

                "辺": "ヘン -  あた.り ほと.り  environs,  boundary,  border,  vicinity ",

                "造": "ゾウ -ヅク.  つく.る つく.り  create,  make,  structure,  physique ",

                "被": "ヒ カブ.セ  こうむ.る おお.う かぶ.る  incur,  cover,  veil,  brood over,  shelter,  wear,  put on,  be exposed film ,  receiving ",

                "技": "ギ  わざ  skill,  art,  craft,  ability,  feat,  performance,  vocation,  arts ",

                "低": "テイ  ひく.い ひく.める ひく.まる   lower,  short,  humble ",

                "復": "フク  また  restore,  return to,  revert,  resume ",

                "移": "イ  うつ.る うつ.す  shift,  move,  change,  drift,  catch cold,  fire ,  pass into ",

                "個": "コ カ  individual,  counter for articles and military units ",

                "門": "モン  かど  gates ",

                "課": "カ  chapter,  lesson,  section,  department,  division,  counter for chapters of a book  ",

                "脳": "ノウ ドウ  のうずる  brain,  memory ",

                "極": "キョク ゴク きわ.める きわ.まる きわ.まり きわ.み き.める -ぎ.め き.まる  poles,  settlement,  conclusion,  end,  highest rank,  electric poles,  very,  extremely,  most,  highly ",

                "含": "ガン  ふく.む ふく.める  include,  bear in mind,  understand,  cherish ",

                "蔵": "ゾウ ソウ カク.レ くら おさ.める  storehouse,  hide,  own,  have,  possess ",

                "量": "リョウ ハカ  quantity,  measure,  weight,  amount,  consider,  estimate,  surmise ",

                "型": "ケイ  かた -がた  mould,  type,  model ",

                "況": "キョウ  まし.て いわ.んや おもむき  condition,  situation ",

                "針": "シン ハ  needle,  pin,  staple,  stinger ",

                "専": "セン  もっぱ.ら  specialty,  exclusive,  mainly,  solely ",

                "谷": "たに  valley ",

                "史": "  history,  chronicle ",

                "階": "カイ キザハ  storey,  stair,  counter for storeys of a building ",

                "管": "カン ク  pipe,  tube,  wind instrument,  drunken talk ",

                "兵": "ヘイ ヒョウ ツワモ  soldier,  private,  troops,  army,  warfare,  strategy,  tactics ",

                "接": "セツ ショウ  つ.ぐ  touch,  contact,  adjoin,  piece together ",

                "細": "サイ  ほそ.い ほそ.る こま.か こま.かい  dainty,  get thin,  taper,  slender,  narrow ",

                "効": "コウ  き.く ききめ なら.う  merit,  efficacy,  efficiency,  benefit ",

                "丸": "ガン マル.  まる まる.める  round,  full,  month,  perfection,  -ship,  pills,  make round,  roll up,  curl up,  seduce,  explain away ",

                "湾": "ワン いりえ  gulf,  bay,  inlet ",

                "録": "ロク  record ",

                "省": "セイ ショウ ハブ.  かえり.みる  focus,  government ministry,  conserve ",

                "旧": "キュウ  ふる.い もと  old times,  old things,  old friend,  former,  ex- ",

                "橋": "キョウ ハ  bridge ",

                "岸": "ガン キ  beach ",

                "周": "シュウ マワ  circumference,  circuit,  lap ",

                "材": "ザ  lumber,  log,  timber,  wood,  talent ",

                "戸": "コ  door ",

                "央": "オ  center,  middle ",

                "券": "ケン  ticket ",

                "編": "ヘン  あ.む -あ.み  compilation,  knit,  plait,  braid,  twist,  editing,  completed poem,  part of a book ",

                "捜": "ソウ シュ シュウ  さが.す  search,  look for,  locate ",

                "竹": "チク タ  bamboo ",

                "超": "チョウ コ. こ.える  transcend,  super-,  ultra- ",

                "並": "ヘイ ホウ ナラ.ビ  な.み なら.べる なら.ぶ  row,  and,  besides,  as well as,  line up,  rank with,  rival,  equal ",

                "療": "リョウ  heal,  cure ",

                "採": "サイ  と.る  pick,  take,  fetch,  take up ",

                "森": "シン モ  forest,  woods ",

                "競": "キョウ ケイ セ.  きそ.う  emulate,  compete with,  bid,  sell at auction,  bout,  contest,  race ",

                "介": "カ  jammed in,  shellfish,  mediate,  concern oneself with ",

                "根": "コン  ね -ね  root,  radical,  head pimple  ",

                "販": "ハン  marketing,  sell,  trade ",

                "歴": "レキ レッキ  curriculum,  continuation,  passage of time ",

                "将": "ショウ ソウ モッ まさ.に はた まさ ひきい.る  leader,  commander,  general,  admiral,  or,  and again,  soon,  from now on,  just about ",

                "幅": "フク  はば  hanging scroll,  width ",

                "般": "ハン  carrier,  carry,  all ",

                "貿": "ボウ  trade,  exchange ",

                "講": "コウ  lecture,  club,  association ",

                "林": "リン ハヤ  grove,  forest ",

                "装": "ソウ ショウ  よそお.う よそお.い  attire,  dress,  pretend,  disguise,  profess ",

                "諸": "ショ  もろ  various,  many,  several,  together ",

                "劇": "ゲキ  drama,  play ",

                "河": "カ カ  river ",

                "航": "コ  navigate,  sail,  cruise,  fly ",

                "鉄": "テツ クロガ  iron ",

                "児": "ジ ニ ゲイ -ッ  こ -こ  newborn babe,  child,  young of animals ",

                "禁": "キン  prohibition,  ban,  forbid ",

                "印": "イン  しるし -じるし しる.す  stamp,  seal,  mark,  imprint,  symbol,  emblem,  trademark,  evidence,  souvenir,  India ",

                "逆": "ギャク ゲキ  さか さか.さ さか.らう  inverted,  reverse,  opposite,  wicked ",

                "換": "カン  か.える -か.える か.わる  interchange,  period,  charge,  change? ",

                "久": "キュウ ク ヒサ.シ  long time,  old story ",

                "短": "ン  みじか.い  short,  brevity,  fault,  defect,  weak point ",

                "油": "ユ ユウ  あぶら  oil,  fat ",

                "暴": "ボウ バク  あば.く あば.れる  outburst,  rave,  fret,  force,  violence,  cruelty,  outrage ",

                "輪": "リン  wheel,  ring,  circle,  link,  loop,  counter for wheels and flowers ",

                "占": "セン ウラナ. し.める  fortune-telling,  divining,  forecasting,  occupy,  hold,  have,  get,  take ",

                "植": "ショク ウ.ワ  う.える  plant ",

                "清": "セイ ショウ シン キヨ.メ  きよ.い きよ.まる  pure,  purify,  cleanse,  exorcise,  Manchu dynasty ",

                "倍": "バ  double,  twice,  times,  fold ",

                "均": "キン ナラ  level,  average ",

                "億": "オ  hundred million,  10**8 ",

                "圧": "アツ エン オウ  お.す へ.す おさ.える お.さえる  pressure,  push,  overwhelm,  oppress,  dominate ",

                "芸": "ゲイ ウン ワ  う.える のり  technique,  art,  craft,  performance,  acting,  trick,  stunt ",

                "署": "ショ  signature,  govt office,  police station ",

                "伸": "シン ノ.  の.びる の.ばす の.べる  expand,  stretch,  extend,  lengthen,  increase ",

                "停": "テイ  と.める と.まる  halt,  stopping ",

                "爆": "バク  は.ぜる  bomb,  burst open,  pop,  split ",

                "陸": "リク ロク オ  land,  six ",

                "玉": "ギョク -ダ  たま たま-  jewel,  ball ",

                "波": "ハ ナ  waves,  billows,  Poland ",

                "帯": "タイ オ  お.びる  sash,  belt,  obi,  zone,  region ",

                "延": "エン ノ.バ  の.びる の.べる の.べ  prolong,  stretching ",

                "羽": "ウ ハ  は わ  feathers,  counter for birds,  rabbits ",

                "固": "コ  かた.める かた.まる かた.まり かた.い  harden,  set,  clot,  curdle ",

                "則": "ソク ノット  rule,  follow,  based on,  model after ",

                "乱": "ラン ロン ワタ.  みだ.れる みだ.る みだ.す みだ おさ.める  riot,  war,  disorder,  disturb ",

                "普": "フ アマネ  あまね.く  universal,  widely ,  generally,  Prussia ",

                "測": "ソク  はか.る  fathom,  plan,  scheme,  measure ",

                "豊": "ホウ ブ ト  ゆた.か  bountiful,  excellent,  rich ",

                "厚": "コウ ア  あつ.い  thick,  heavy,  rich,  kind,  cordial,  brazen,  shameless ",

                "齢": "レイ  よわ.い とし  age ",

                "囲": "イ  かこ.む かこ.う かこ.い  surround,  besiege,  store,  paling,  enclosure,  encircle,  preserve,  keep ",

                "卒": "ソツ シュツ  そっ.する お.える お.わる ついに にわか  graduate,  soldier,  private,  die ",

                "略": "リャク ほぼ おか.す おさ.める はかりごと はか.る はぶ.く りゃく.す りゃく.する  abbreviation,  omission,  outline,  shorten,  capture,  plunder ",

                "承": "ショウ ウ.ケ  うけたまわ.る  acquiesce,  hear,  listen to,  be informed,  receive ",

                "順": "ジュ  obey,  order,  turn,  right,  docility,  occasion ",

                "岩": "ガン  いわ  boulder,  rock,  cliff ",

                "練": "レン ネ.  ね.る  practice,  gloss,  train,  drill,  polish,  refine ",

                "軽": "ケイ  かる.い かろ.やか かろ.んじる  lightly,  trifling,  unimportant ",

                "了": "リョ  complete,  finish ",

                "庁": "チョウ テイ  やくしょ  government office ",

                "城": "ジョウ シ  castle ",

                "患": "カン ワズラ  afflicted,  disease,  suffer from,  be ill ",

                "層": "ソウ  stratum,  social class,  layer,  story,  floor ",

                "版": "ハン  printing block,  printing plate,  edition,  impression,  label ",

                "令": "レ  orders,  ancient laws,  command,  decree ",

                "角": "カク ツ  かど  angle,  corner,  square,  horn,  antlers ",

                "絡": "ラク  から.む から.まる  entwine,  coil around,  get caught in ",

                "損": "ソン そこ.なう そこな.う -そこ.なう そこ.ねる -そこ.ねる  damage,  loss,  disadvantage,  hurt,  injure ",

                "募": "ボ  つの.る  recruit,  campaign,  gather contributions ,  enlist,  grow violent ",

                "裏": "リ うら  back,  amidst,  in,  reverse,  inside,  palm,  sole,  rear,  lining,  wrong side ",

                "仏": "ブツ フツ ほとけ  Buddha,  the dead,  France ",

                "績": "セ  exploits,  unreeling cocoons ",

                "築": "チク キズ.  fabricate,  build,  construct ",

                "貨": "カ  freight,  goods,  property ",

                "混": "コン  ま.じる -ま.じり ま.ざる ま.ぜる こ.む  mix,  blend,  confuse ",

                "昇": "ショウ ノボ.  rise up ",

                "池": "チ  いけ  pond,  cistern,  pool,  reservoir ",

                "血": "ケツ  ち  blood ",

                "温": "オン ヌ  あたた.か あたた.かい あたた.まる あたた.める  warm ",

                "季": "  seasons ",

                "星": "セイ ショウ  ほし -ぼし  star,  spot,  dot,  mark ",

                "永": "エイ ナガ.  eternity,  long,  lengthy ",

                "著": "チョ チャク  あらわ.す いちじる.しい  renowned,  publish,  write,  remarkable,  phenomenal,  put on,  don,  wear,  arrival,  finish race ,  counter for suit ",

                "誌": "シ  document,  records ",

                "庫": "コ ク  くら  warehouse,  storehouse ",

                "刊": "カン  publish,  carve,  engrave ",

                "像": "ゾ  statue,  picture,  image,  figure,  portrait ",

                "香": "コウ キョウ カオ.  か かお.り  incense,  smell,  perfume ",

                "坂": "ハン サ  slope,  incline,  hill ",

                "底": "テイ  そこ  bottom,  sole,  depth,  bottom price,  base,  kind,  sort ",

                "布": "フ ヌ  linen,  cloth ",

                "寺": "ジ てら  Buddhist temple ",

                "宇": "  leaves,  roof,  house,  heaven ",

                "巨": "キ  gigantic,  big,  large,  great ",

                "震": "シン  ふる.う ふる.える  quake,  shake,  tremble,  quiver,  shiver ",

                "希": "キ ケ マ  hope,  beg,  request,  pray,  beseech,  Greece,  dilute acid ,  rare,  few,  phenomenal ",

                "触": "ショク  ふ.れる さわ.る さわ  contact,  touch,  feel,  hit,  proclaim,  announce,  conflict ",

                "依": "イ エ ヨ.  reliant,  depend on,  consequently,  therefore,  due to ",

                "籍": "セキ  enroll,  domiciliary register,  membership ",

                "汚": "オ けが.す けが.れる けが.らわしい よご.す よご.れる きたな.い  dirty,  pollute,  disgrace,  rape,  defile ",

                "枚": "マイ バ  sheet of...,  counter for flat thin objects or sheets ",

                "複": "フク  duplicate,  double,  compound,  multiple ",

                "郵": "ユウ  mail,  stagecoach stop ",

                "仲": "チュウ ナ  go-between,  relationship ",

                "栄": "エイ ヨウ  さか.える は.え -ば.え は.える  flourish,  prosperity,  honor,  glory,  splendor ",

                "札": "サツ フ  tag,  paper money,  counter for bonds,  placard,  bid ",

                "板": "ハン バン  いた  plank,  board,  plate,  stage ",

                "骨": "コツ  ほね  skeleton,  bone,  remains,  frame ",

                "傾": "ケイ かたむ.く かたむ.ける かたぶ.く かた.げる かし.げる  lean,  incline,  tilt,  trend,  wane,  sink,  ruin,  bias ",

                "届": "カイ  とど.ける -とど.け とど.く  deliver,  reach,  arrive,  report,  notify,  forward ",

                "巻": "カン ケン  ま.く まき ま.き  scroll,  volume,  book,  part,  roll up,  wind up,  tie,  coil,  counter for texts or book scrolls  ",

                "燃": "ネン  も.える も.やす も.す  burn,  blaze,  glow ",

                "跡": "セキ  あと  tracks,  mark,  print,  impression ",

                "包": "ホウ クル.  つつ.む  wrap,  pack up,  cover,  conceal ",

                "駐": "チュウ  stop-over,  reside in,  resident ",

                "弱": "ジャク  よわ.い よわ.る よわ.まる よわ.める  weak,  frail ",

                "紹": "ショ  introduce,  inherit,  help ",

                "雇": "コ  やと.う  employ,  hire ",

                "替": "タイ カ.ワ  か.える か.え-  exchange,  spare,  substitute,  per- ",

                "預": "ヨ  あず.ける あず.かる  deposit,  custody,  leave with,  entrust to ",

                "焼": "ショウ ヤ.ケ  や.く や.き や.き- -や.き  bake,  burning ",

                "簡": "カン  simplicity,  brevity ",

                "章": "ショ  badge,  chapter,  composition,  poem,  design ",

                "臓": "ゾウ  はらわた  entrails,  viscera,  bowels ",

                "律": "リツ リチ レ  rhythm,  law,  regulation,  gauge,  control ",

                "贈": "ゾウ ソウ  おく.る  presents,  send,  give to,  award to,  confer on,  presenting something ",

                "照": "ショウ テ.レ  て.る て.らす  illuminate,  shine,  compare,  bashful ",

                "薄": "ハク うす.い うす- -うす うす.める うす.まる す.らぐ うす.ら- うす.れる すすき  dilute,  thin,  weak tea  ",

                "群": "グン ムラ.ガ  む.れる む.れ むら  flock,  group,  crowd,  herd,  swarm,  cluster ",

                "秒": "ビョウ  second 1,  60 minute  ",

                "奥": "オウ オク ク  おく.まる  heart,  interior ",

                "詰": "キツ キチ ツ.  つ.める つ.め -づ.め つ.まる  packed,  close,  pressed,  reprove,  rebuke,  blame ",

                "双": "ソウ フタ  ふた たぐい ならぶ  pair,  set,  comparison,  counter for pairs ",

                "刺": "シ  さ.す さ.さる さ.し さし とげ  thorn,  pierce,  stab,  prick,  sting,  calling card ",

                "純": "ジュ  genuine,  purity,  innocence,  net profit  ",

                "翌": "ヨク  the following,  next ",

                "快": "カイ  cheerful,  pleasant,  agreeable,  comfortable ",

                "片": "ヘン  かた- かた  one-sided,  leaf,  sheet ",

                "敬": "ケイ キョウ ウヤマ.  awe,  respect,  honor,  revere ",

                "悩": "ノウ  なや.む なや.ます なや.ましい なやみ  trouble,  worry,  in pain,  distress,  illness ",

                "泉": "セン イズ  spring,  fountain ",

                "皮": "けがわ  pelt,  skin,  hide,  leather ",

                "漁": "ギョ リョウ  あさ.る  fishing,  fishery ",

                "荒": "コウ スサ.  あら.い あら- あ.れる あ.らす -あ.らし  laid waste,  rough,  rude,  wild ",

                "貯": "チョ  た.める たくわ.える  savings,  store,  lay in,  keep,  wear mustache ",

                "硬": "コウ  かた.い  stiff,  hard ",

                "埋": "マイ う.める う.まる う.もれる うず.める うず.まる い.ける  bury,  be filled up,  embedded ",

                "柱": "チュウ  はしら  pillar,  post,  cylinder,  support ",

                "祭": "サイ  まつ.る まつ.り まつり  ritual,  offer prayers,  celebrate,  deify,  enshrine,  worship ",

                "袋": "タイ ダイ フク  sack,  bag,  pouch ",

                "筆": "ヒツ フ  writing brush,  writing,  painting brush,  handwriting ",

                "訓": "クン キン クン.ズ  おし.える よ.む  instruction,  Japanese character reading,  explanation,  read ",

                "浴": "ヨク ア.ビセ  あ.びる  bathe,  be favored with,  bask in ",

                "童": "ドウ ワラ  juvenile,  child ",

                "宝": "ホウ タカ  treasure,  wealth,  valuables ",

                "封": "フウ ホウ  seal,  closing ",

                "胸": "キョウ  むね むな-  bosom,  breast,  chest,  heart,  feelings ",

                "砂": "サ シャ ス  sand ",

                "塩": "エン しお  salt ",

                "賢": "ケン カシコ.  intelligent,  wise,  wisdom,  cleverness ",

                "腕": "ワン うで  arm,  ability,  talent ",

                "兆": "チョウ きざ.す きざ.し  portent,  10**12,  trillion,  sign,  omen,  symptoms ",

                "床": "ショウ とこ ゆか  bed,  floor,  padding,  tatami ",

                "毛": "モウ  fur,  hair,  feather,  down ",

                "緑": "リョク ロク  みどり  green ",

                "尊": "ソン トウト.  たっと.い とうと.い たっと.ぶ  revered,  valuable,  precious,  noble,  exalted ",

                "祝": "シュク シュウ イワ.  celebrate,  congratulate ",

                "柔": "ジュウ ニュウ ヤワ. やわ.らか やわ.らかい やわ  tender,  weakness,  gentleness,  softness ",

                "殿": "デン テン -ド との  Mr.,  hall,  mansion,  palace,  temple,  lord ",

                "濃": "ノウ コ.  concentrated,  thick,  dark,  undiluted ",

                "液": "エキ  fluid,  liquid,  juice,  sap,  secretion ",

                "衣": "イ エ ころも きぬ -ぎ  garment,  clothes,  dressing ",

                "肩": "ケン  かた  shoulder ",

                "零": "レイ ぜろ こぼ.す こぼ.れる  zero,  spill,  overflow,  nothing,  cipher ",

                "幼": "ヨウ オサナ.  infancy,  childhood ",

                "荷": "カ  baggage,  shoulder-pole load,  bear a burden ,  shoulder a gun ,  load,  cargo,  freight ",

                "泊": "ハク ト.メ  と.まる  overnight,  put up at,  ride at anchor,  3-day stay ",

                "黄": "コウ オウ き こ  yellow ",

                "甘": "カン ウマ.  あま.い あま.える あま.やかす  sweet,  coax,  pamper,  be content,  sugary ",

                "臣": "シン ジ  retainer,  subject ",

                "浅": "セン アサ.  shallow,  superficial,  frivolous,  wretched,  shameful ",

                "掃": "ソウ シュ ハ.  sweep,  brush ",

                "雲": "ウン -グ くも  cloud ",

                "掘": "クツ ホ.  dig,  delve,  excavate ",

                "捨": "シャ す.てる  discard,  throw away,  abandon,  resign,  reject,  sacrifice ",

                "軟": "ナン やわ.らか やわ.らかい  soft ",

                "沈": "チン ジン シズ.メ しず.む  sink,  be submerged,  subside,  be depressed,  aloes ",

                "凍": "トウ シ.ミ こお.る こご.える こご.る い.てる  frozen,  congeal,  refrigerate ",

                "乳": "ニュウ ちち ち  milk,  breasts ",

                "恋": "レン こ.う こい こい.しい  romance,  in love,  yearn for,  miss,  darling ",

                "紅": "コウ ク アカ. べに くれない  crimson,  deep red ",

                "郊": "コウ  outskirts,  suburbs,  rural area ",

                "腰": "ヨウ コ  loins,  hips,  waist,  low wainscoting ",

                "炭": "タン すみ  charcoal,  coal ",

                "踊": "ヨウ おど.る  jump,  dance,  leap,  skip ",

                "冊": "サツ サク ふみ  tome,  counter for books,  volume ",

                "勇": "ユウ イサ.  courage,  cheer up,  be in high spirits,  bravery,  heroism ",

                "械": "カイ かせ  contraption,  fetter,  machine,  instrument ",

                "菜": "サイ  vegetable,  side dish,  greens ",

                "珍": "チン タカ  めずら.しい  rare,  curious,  strange ",

                "卵": "ラン たまご  egg,  ovum,  spawn,  roe ",

                "湖": "コ ミズウ  lake ",

                "喫": "キツ  consume,  eat,  drink,  smoke,  receive a blow  ",

                "干": "カン ヒ. ほ.す ほ.し- -ぼ.し  dry,  parch ",

                "虫": "チュウ キ ム  insect,  bug,  temper ",

                "刷": "サツ す.る -ず.り -ずり は.く  printing,  print ",

                "湯": "トウ ゆ  hot water,  bath,  hot spring ",

                "溶": "ヨウ と.ける と.かす と.く  melt,  dissolve,  thaw ",

                "鉱": "コウ あらがね  mineral,  ore ",

                "涙": "ルイ レイ なみだ  tears,  sympathy ",

                "匹": "ヒツ ひき  equal,  head,  counter for small animals,  roll of cloth ",

                "孫": "ソン マ  grandchild,  descendants ",

                "鋭": "エイ スルド.  pointed,  sharpness,  edge,  weapon,  sharp,  violent ",

                "枝": "シ  bough,  branch,  twig,  limb ",

                "塗": "ト  ぬ.る ぬ.り まみ.れる  paint,  plaster,  daub,  smear,  coating ",

                "軒": "ケン のき  flats,  counter for houses,  eaves ",

                "毒": "ドク  poison,  virus,  venom,  germ,  harm,  injury,  spite ",

                "叫": "キョウ さけ.ぶ  shout,  exclaim,  yell  ",

                "拝": "ハイ おが.む おろが.む  worship,  adore,  pray to  ",

                "氷": "ヒョウ コオ. こおり ひ  icicle,  ice,  hail,  freeze,  congeal ",

                "乾": "カン ケン かわ.く かわ.かす ほ.す ひ.る いぬい  drought,  dry,  dessicate,  drink up,  heaven,  emperor ",

                "棒": "ボウ  rod,  stick,  cane,  pole,  club,  line ",

                "祈": "キ イノ.  pray,  wish ",

                "拾": "シュウ ジュウ ひろ.う  pick up,  gather,  find,  go on foot,  ten ",

                "粉": "フン デシメートル こ こな  flour,  powder,  dust ",

                "糸": "シ いと  thread ",

                "綿": "メン ワ  cotton ",

                "汗": "カン あせ  sweat,  perspire ",

                "銅": "ドウ あかがね  copper ",

                "湿": "シツ シュウ しめ.る しめ.す うるお.う うるお.す  damp,  wet,  moist ",

                "瓶": "ビン カ  flower pot,  bottle,  vial,  jar,  jug,  vat,  urn ",

                "咲": "ショウ -ザ さ.く  blossom,  bloom ",

                "召": "ショウ め.す  seduce,  call,  send for,  wear,  put on,  ride in,  buy,  eat,  drink,  catch cold  ",

                "缶": "カン カ  tin can,  container ",

                "隻": "セキ  vessels,  counter for ships,  fish,  birds,  arrows,  one of a pair ",

                "脂": "シ あぶら   fat,  grease,  tallow,  lard,  rosin,  gum,  tar ",

                "蒸": "ジョウ セイ む.す む.れる む.らす  steam,  heat,  sultry,  foment,  get musty ",

                "肌": "キ はだ  texture,  skin,  body,  grain ",

                "耕": "コウ タガヤ.  till,  plow,  cultivate ",

                "鈍": "ドン にぶ.い にぶ.る にぶ- なま.る なまく.ら  dull,  slow,  foolish,  blunt ",

                "泥": "デイ ナイ デ ニ ド  mud,  mire,  adhere to,  be attached to ",

                "隅": "グウ すみ  corner,  nook ",

                "灯": "トウ ひ ほ- ともしび とも.す あかり  lamp,  a light,  light,  counter for lights ",

                "辛": "シン から.い つら.い -づら.い かのと  spicy,  bitter,  hot,  acrid ",

                "磨": "マ ス. みが.く  grind,  polish,  scour,  improve,  brush teeth  ",

                "麦": "バク むぎ  barley,  wheat ",

                "姓": "セイ ショウ  surname ",

                "筒": "トウ つつ  cylinder,  pipe,  tube,  gun barrel,  sleeve ",

                "鼻": "ビ はな  nose,  snout ",

                "粒": "リュウ つぶ   grains,  drop,  counter for tiny particles ",

                "詞": "シ  part of speech,  words,  poetry ",

                "胃": "イ  stomach,  paunch,  crop,  craw ",

                "畳": "ジョウ チョウ たた.む たたみ かさ.なる  tatami mat,  counter for tatami mats,  fold,  shut up,  do away with ",

                "机": "キ つくえ  desk,  table ",

                "膚": "フ はだ  skin,  body,  grain,  texture,  disposition ",

                "濯": "タク すす.ぐ ゆす.ぐ  laundry,  wash,  pour on,  rinse ",

                "塔": "トウ  pagoda,  tower,  steeple ",

                "沸": "フツ わ.く わ.かす  seethe,  boil,  ferment,  uproar,  breed ",

                "灰": "カイ はい  ashes,  puckery juice,  cremate ",

                "菓": "カ  candy,  cakes,  fruit ",

                "帽": "ボウ モウ ずきん おお.う  cap,  headgear ",

                "枯": "コ か.れる か.らす  wither,  die,  dry up,  be seasoned ",

                "涼": "リョウ マコト すず.しい すず.む すず.やか うす.い ひや.す  refreshing,  nice and cool ",

                "舟": "シュウ ふね ふな- -ぶね  boat,  ship ",

                "貝": "バイ かい  shellfish ",

                "符": "フ  token,  sign,  mark,  tally,  charm ",

                "憎": "ゾウ にく.む にく.い にく.らしい にく.しみ  hate,  detest ",

                "皿": "ベイ さら  dish,  a helping,  plate ",

                "肯": "コウ がえんじ.る  agreement,  consent,  comply with ",

                "燥": "ソウ はしゃ.ぐ  parch,  dry up ",

                "畜": "チク  livestock,  domestic fowl and animals ",

                "挟": "キョウ ショウ はさ.む はさ.まる わきばさ.む さしはさ.む  pinch,  between ",

                "曇": "ドン クモ.  cloudy weather,  cloud up ",

                "滴": "テキ しずく したた.る  drip,  drop ",

                "伺": "シ うかが.う  pay respects,  visit,  ask,  inquire,  question,  implore "



            },
            "N1": {

                "氏": "シ うじ -うじ family name,  surname,  clan ",
                "統": "トウ ホビ. す.べる overall,  relationship,  ruling,  governing ",
                "保": "ホ ホウ タモ. protect,  guarantee,  keep,  preserve,  sustain,  support ",
                "第": "ダイ テイ No.,  residence ",
                "結": "ケツ ケチ ユ.ワエ むす.ぶ ゆ.う tie,  bind,  contract,  join,  organize,  do up hair,  fasten ",
                "派": "ハ faction,  group,  party,  clique,  sect,  school ",
                "案": "アン つくえ plan,  suggestion,  draft,  ponder,  fear,  proposition,  idea,  expectation,  bill,  worry ",
                "策": "サク scheme,  plan,  policy,  step,  means ",
                "基": "キ モト もと fundamentals,  radical chem ,  counter for machines,  foundation ",
                "価": "カ ケあたい value,  price ",
                "提": "テイ チョウ ダイ さ.げるpropose,  take along,  carry in hand ",
                "挙": "キョ コゾ. あ.げる あ.がるraise,  plan,  project,  behavior,  actions ",
                "応": "オウ ヨウ -ノウ コタ.エ あた.る まさにapply,  answer,  yes,  OK,  reply,  accept ",
                "企": "キくわだ.てる undertake,  scheme,  design,  attempt,  plan ",
                "検": "ケン しら.べる examination,  investigate ",
                "藤": "トウ ドウ フ wisteria ",
                "沢": " タク ツ さわ うるお.い うるお.す swamp ",
                "裁": "サイ た.つ さば.く tailor,  judge,  decision,  cut out pattern ",
                "証": "ショウ あかし evidence,  proof,  certificate",
                "援": "エン abet,  help,  save ",
                "施": "シ セ ほどこ.す alms,  apply bandages,  administer first-aid",
                "井": "セイ ショウ well,  well crib,  town,  community ",
                "護": "ゴ マモ. safeguard,  protect",
                "展": "テ unfold,  expand ",
                "態": "タイ わざ.と attitude,  condition,  figure,  appearance,  voice of verbs ",
                "鮮": "セン あざ.やか fresh,  vivid,  clear,  brilliant,  Korea ",
                "視": "シ ミ. inspection,  regard as,  see,  look at",
                "条": "ジョウ チョウ デキ えだ すじ article,  clause,  item,  stripe,  streak ",
                "幹": "カン ミ tree trunk ",
                "独": "ドク トク ヒト. single,  alone,  spontaneously,  Germany ",
                "宮": "キュウ グウ ク クウ ミ Shinto shrine,  constellations,  palace,  princess ",
                "率": "ソツ リツ シュツ ひき.いる ratio,  rate,  proportion,  %,  coefficient,  factor ",
                "衛": "エイ defense,  protection ",
                "張": "チョウ -バ. は.る -は.り lengthen,  counter for bows & stringed instruments,  stretch,  spread,  put up tent  ",
                "監": "カ oversee,  official,  govt office,  rule,  administer ",
                "環": "カン ring,  circle,  link,  wheel ",
                "審": "シン ツブサ. つまび.らか hearing,  judge,  trial ",
                "義": "righteousness,  justice,  morality,  honor,  loyalty,  meaning ",
                "訴": "ソ うった.える accusation,  sue,  complain of pain,  appeal to ",
                "株": "シュ かぶ stocks,  stump,  shares,  stock,  counter for small plants ",
                "姿": "シ スガ figure,  form,  shape ",
                "閣": "カク tower,  tall building,  palace ",
                "衆": "シュウ シュ おお.い masses,  great numbers,  multitude,  populace ",
                "評": "ヒョウ evaluate,  criticism,  comment ",
                "影": "エイ かげ shadow,  silhouette,  phantom ",
                "松": "ショウ マ pine tree ",
                "撃": "ゲキ う.つ beat,  attack,  defeat,  conquer ",
                "佐": "assistant,  help ",
                "核": "カク nucleus,  core,  kernel ",
                "整": "セイ トトノ. ととの.える organize,  arranging,  tune,  tone,  meter,  key music  ",
                "融": "ユウ ト.カ と.ける dissolve,  melt ",
                "製": "セイ made in...,  manufacture ",
                "票": "ヒョウ ballot,  label,  ticket,  sign ",
                "渉": "ショウ ワタ. ford,  ferry,  port ",
                "響": "キョウ ひび.くecho,  also N5116,  sound,  resound,  ring,  vibrate ",
                "推": "スイ お.す conjecture,  infer,  guess,  suppose,  support ",
                "請": "セイ シン ショウ ウ.ケ こ.う solicit,  invite,  ask ",
                "器": "キうつわ utensil,  vessel,  receptacle,  implement,  instrument,  ability,  container,  tool,  set ",
                "士": "gentleman,  samurai ",
                "討": "トウ う.つ chastise,  attack,  defeat,  destroy,  conquer ",
                "攻": "コウ セ.メ aggression,  attack ",
                "崎": "キ さき さい みさき promontory,  cape,  spit ",
                "督": "ト coach,  command,  urge,  lead,  supervise ",
                "授": "ジュ さず.ける さず.かる impart,  instruct,  grant,  confer ",
                "催": "サイ もよう.す もよお.す sponsor,  hold a meeting ,  give a dinner  ",
                "及": "キュウ オヨ.ボ およ.ぶ およ.び および reach out,  exert,  exercise,  cause ",
                "憲": "ケ constitution,  law ",
                "離": "リ はな.れる はな.す detach,  separation,  disjoin,  digress ",
                "激": "ゲキ はげ.しい violent,  get excited,  enraged,  chafe,  incite ",
                "摘": "テキ ツ. pinch,  pick,  pluck,  trim,  clip,  summarize ",
                "系": "ケイlineage,  system ",
                "批": "ヒ criticism,  strike ",
                "郎": "ロウ リョウ オト son,  counter for sons ",
                "健": "ケン スコ.ヤ healthy,  health,  strength,  persistence ",
                "盟": "メイ alliance,  oath ",
                "従": "ジュウ ショウ ジュ したが.う したが.える より accompany,  obey,  submit to,  comply,  follow,  secondary,  incidental,  subordinate ",
                "修": "シュウ シュ オサ.マ おさ.める discipline,  conduct oneself well,  study,  master ",
                "隊": "タイ regiment,  party,  company,  squad ",
                "織": "ショク シキ - オ. お.る お.り おり -おり weave,  fabric ",
                "拡": "カク コウ ひろ.がる ひろ.げる ひろ.める broaden,  extend,  expand,  enlarge ",
                "故": "コ ゆえ happenstance,  especially,  intentionally,  reason,  cause,  circumstances,  the late,  therefore,  consequently ",
                "振": "シン フ.ル ふ.る ぶ.る ふ.り -ぶ.り shake,  wave,  wag,  swing ",
                "弁": "ベン ヘン アラソ. わきま.える わ.ける はなびら valve,  petal,  braid,  speech,  dialect,  discrimination,  dispose of,  distinguish ",
                "就": "シュウ ジュ ツ.ケ つ.く concerning,  settle,  take position,  depart,  study,  per ",
                "異": "イ こと こと.なる け uncommon,  queerness,  strangeness,  wonderful,  curious,  unusual ",
                "献": "ケン コン たてまつ.る offering,  counter for drinks,  present,  offer ",
                "厳": "ゲン ゴン イツク おごそ.か きび.しい いか.めしい stern,  strictness,  severity,  rigidity ",
                "維": "fiber,  tie,  rope ",
                "浜": "ヒン はま seacoast,  beach,  seashore ",
                "遺": "イ ユイ bequeath,  leave behind,  reserve ",
                "塁": "ルイ ライ スイ トリ bases,  fort,  rampart,  walls,  baseball  ",
                "邦": "ホウくに home country,  country,  Japan ",
                "素": "ソ スもと elementary,  principle,  naked,  uncovered ",
                "遣": "ケンつか.う -つか.い -づか.い つか.わす や.る despatch,  send,  give,  donate,  do,  undertake ",
                "抗": "コウ confront,  resist,  defy,  oppose ",
                "模": "モ imitation,  copy,  mock ",
                "雄": "ユウ オm お- おす masculine,  male,  hero,  leader,  superiority,  excellence ",
                "益": "エキ ヤク マ. benefit,  gain,  profit,  advantage ",
                "緊": "キン tense,  solid,  hard,  reliable,  tight ",
                "標": "ヒョウ シルしるべ signpost,  seal,  mark,  stamp,  imprint,  symbol,  emblem,  trademark,  evidence,  souvenir,  target ",
                "宣": "セン ノタマ.ワのたむ.う proclaim,  say,  announce ",
                "昭": "ショ shining,  bright ",
                "廃": "ハイ すた.れる すた.る abolish,  obsolete,  cessation,  discarding,  abandon ",
                "伊": "イ カ Italy,  that one ",
                "江": "コウ creek,  inlet,  bay ",
                "僚": "リョウ colleague,  official,  companion ",
                "吉": "キチ キツ ヨ good luck,  joy,  congratulations ",
                "盛": "セイ ジョウ サカ. も.る さか.る boom,  prosper,  copulate ",
                "皇": "コウ オ emperor ",
                "臨": "リン ノゾ. look to,  face,  meet,  confront,  attend,  call on ",
                "踏": "トウ ふ.む ふ.まえる step,  trample,  carry through,  appraise,  evade payment ",
                "壊": "カイ エ こわ.す こわ.れる やぶ.る demolition,  break,  destroy ",
                "債": "サイ bond,  loan,  debt ",
                "興": "コウ キョウ オコ. おこ.る entertain,  revive,  retrieve,  interest,  pleasure ",
                "源": "ゲン ミナモ source,  origin ",
                "儀": "ceremony,  rule,  affair,  case,  a matter ",
                "創": "ソウ ショウ ケズ.シケ つく.る はじ.める きず genesis,  wound,  injury,  hurt,  start,  originate ",
                "障": "ショウ さわ.る hinder,  hurt,  harm ",
                "継": "ケイ つ.ぐ まま- inherit,  succeed,  patch,  graft tree  ",
                "筋": "キン すじ muscle,  sinew,  tendon,  fiber,  plot,  plan,  descent ",
                "闘": "トウ アラソ. たたか.う fight,  war ",
                "葬": "ソウ ホウム. interment,  bury,  shelve ",
                "避": "ヒ さ.ける よ.ける evade,  avoid,  avert,  ward off,  shirk,  shun ",
                "司": "シ ツカサド. director,  official,  govt office,  rule,  administer ",
                "康": "コ ease,  peace ",
                "善": "ゼン ヨシ.トス よ.い い.い よ.く virtuous,  good,  goodness ",
                "逮": "タイ apprehend,  chase ",
                "迫": "ハク セマ. urge,  force,  imminent,  spur on ",
                "惑": "ワク まど.う beguile,  delusion,  perplexity ",
                "崩": "ホウ くず.れる -くず.れ くず.す crumble,  die,  demolish,  level ",
                "紀": "chronicle,  account,  narrative,  history,  annals,  geologic period ",
                "聴": "チョウ テイ ユル. き.く listen,  headstrong,  naughty,  careful inquiry ",
                "脱": "ダツ ぬ.ぐ ぬ.げる undress,  removing,  escape from,  get rid of,  be left out,  take off ",
                "級": "キュ class,  rank,  grade ",
                "博": "ハク バ Dr.,  command,  esteem,  win acclaim,  Ph.D.,  exposition,  fair ",
                "締": "テイ し.まる し.まり し.める -し.め -じ.め tighten,  tie,  shut,  lock,  fasten ",
                "救": "キュウ すく.う salvation,  save,  help,  rescue,  reclaim ",
                "執": "シツ シュウ ト. tenacious,  take hold,  grasp,  take to heart ",
                "房": "ボウ フ tassel,  tuft,  fringe,  bunch,  lock hair ,  segment orange ,  house,  room ",
                "撤": "テツ remove,  withdraw,  disarm,  dismantle,  reject,  exclude ",
                "削": "サク ソ. けず.る はつ.る plane,  sharpen,  whittle,  pare ",
                "密": "ミツ ひそ.か secrecy,  density pop ,  minuteness,  carefulness ",
                "措": "ソお.く set aside,  give up,  suspend,  discontinue,  lay aside,  except ",
                "志": "シ シリング ココロザ こころざ.す intention,  plan,  resolve,  aspire,  motive,  hopes,  shilling ",
                "載": "サイ ノ. の.せる ride,  board,  get on,  place,  spread,  10**44 ",
                "陣": "ジン camp,  battle array,  ranks,  position ",
                "我": "ガ われ わ わ.が- わが ego,  I,  selfish,  our,  oneself ",
                "為": "イ ナ ため な.る な.す す.る たり つく.る do,  change,  make,  benefit,  welfare,  be of use,  reach to,  try,  practice,  cost,  serve as,  good,  advantage,  as a re ",
                "抑": "ヨク おさ.える repress,  well,  now,  in the first place,  push,  shove,  press,  seal,  do in spite of ",
                "幕": "マク バク curtain,  bunting,  act of play ",
                "染": "セン -シ.メ そ.める -ぞ.め -ぞめ そ.まる し.みる -じ.みる し.み dye,  color,  paint,  stain,  print ",
                "奈": "ナ ナイ ダイ いかん からなし Nara,  what? ",
                "傷": "ショウ きず いた.む いた.める wound,  hurt,  injure,  impair,  pain,  injury,  cut,  gash,  scar,  weak point ",
                "択": "タク えら.ぶ choose,  select,  elect,  prefer ",
                "秀": "シュウ ヒイ.デ excel,  excellence,  beauty,  surpass ",
                "徴": "チョウ チ しるし indications,  sign,  omen,  symptom,  collect,  seek,  refer to,  question ",
                "弾": "ダン タン ひ.く -ひ.き はず.む たま はじ.く はじ.ける ただ.す はじ.きゆみ bullet,  twang,  flip,  snap ",
                "償": "ショウ つぐな.う reparation,  make up for,  recompense,  redeem ",
                "功": "コウ ク イサ achievement,  merits,  success,  honor,  credit ",
                "拠": "キョ コ よ.る foothold,  based on,  follow,  therefore ",
                "秘": "ヒ ひ.める ひそ.か かく.す secret,  conceal ",
                "拒": "キョ ゴ こば.む repel,  refuse,  reject,  decline ",
                "刑": "ケ punish,  penalty,  sentence,  punishment ",
                "塚": "チョウ -ヅ つか hillock,  mound ",
                "致": "チ いた.す doth,  do,  send,  forward,  cause,  exert,  incur,  engage ",
                "繰": "ソウ ク. winding,  reel,  spin,  turn pages ,  look up,  refer to ",
                "尾": "ビ お tail,  end,  counter for fish,  lower slope of mountain ",
                "描": "ビョウ えが.く か.く sketch,  compose,  write,  draw,  paint ",
                "鈴": "レイ リン ス small bell,  buzzer ",
                "盤": "バ tray,  shallow bowl,  platter,  tub,  board,  phonograph record ",
                "項": "コウ うなじ paragraph,  nape of neck,  clause,  item,  term expression  ",
                "喪": "ソウ も miss,  mourning ",
                "伴": "ハン バン トモナ. consort,  accompany,  bring with,  companion ",
                "養": "ヨウ リョウ ヤシナ. foster,  bring up,  rear,  develop,  nurture ",
                "懸": "ケン ケ か.ける か.かる suspend,  hang,  10%,  install,  depend,  consult ",
                "街": "ガイ カイ マ boulevard,  street,  town ",
                "契": "ケイ ちぎ.る pledge,  promise,  vow ",
                "掲": "ケイ かか.げる put up a notice ,  put up,  hoist,  display,  hang out,  publish,  describe ",
                "躍": "ヤク オド. leap,  dance,  skip ",
                "棄": "キ す.てる abandon,  throw away,  discard,  resign,  reject,  sacrifice ",
                "邸": "テイ ヤシ residence,  mansion ",
                "縮": "シュクちぢ.む ちぢ.まる ちぢ.める ちぢ.れる ちぢ.らす shrink,  contract,  shrivel,  wrinkle,  reduce ",
                "還": "カン かえ.る send back,  return ",
                "属": "ゾク ショク ヤカ さかん つく belong,  genus,  subordinate official,  affiliated ",
                "慮": "リョ オモンパカ. おもんぱく.る prudence,  thought,  concern,  consider,  deliberate,  fear ",
                "枠": "わく frame,  framework,  spindle,  spool,  bounding-box,  kokuji  ",
                "恵": "ケイ エ メグ. めぐ.む favor,  blessing,  grace,  kindness ",
                "露": "ロ ロウ ツ dew,  tears,  expose,  Russia ",
                "沖": "チュウ おき おきつ ちゅう.する わく open sea,  offing,  rise high into sky ",
                "緩": "カン ユル.メ ゆる.い ゆる.やか ゆる.む slacken,  loosen,  relax,  lessen,  be moderate,  ease ",
                "節": "セツ セチ ノッ ふし -ぶし node,  season,  period,  occasion,  verse,  clause,  stanza,  honor,  joint,  knuckle,  knob,  knot,  tune,  melody ",
                "需": "ジュ demand,  request,  need ",
                "射": "シャ い.る さ.す shoot,  shine into,  onto,  archery ",
                "購": "コウ subscription,  buy ",
                "揮": "キ ふる.う brandish,  wave,  wag,  swing,  shake ",
                "充": "ジュウ ミ.タ あ.てる allot,  fill ",
                "貢": "コウ ク みつ.ぐ tribute,  support,  finance ",
                "鹿": "ロク しか deer ",
                "却": "キャク かえ.って しりぞ.く しりぞ.ける instead,  on the contrary,  rather ",
                "端": "タン ハ はし は はた -ばた edge,  origin,  end,  point,  border,  verge,  cape ",
                "賃": "チ fare,  fee,  hire,  rent,  wages,  charge ",
                "獲": "カク え.る seize,  get,  find,  earn,  acquire,  can,  may,  able to ",
                "郡": "グン こうり county,  district ",
                "併": "ヘイ あわ.せる join,  get together,  unite,  collective ",
                "徹": "テ penetrate,  clear,  pierce,  strike home,  sit up all night  ",
                "貴": "キ トウト. たっと.い とうと.い たっと.ぶ precious,  value,  prize,  esteem,  honor ",
                "衝": "ショウ つ.く collide,  brunt,  highway,  opposition astronomy ,  thrust,  pierce,  stab,  prick ",
                "焦": "ショウ こ.げる こ.がす こ.がれる あせ.る char,  hurry,  impatient,  irritate,  burn,  scorch,  singe ",
                "奪": "ダツ うば.う rob,  take by force,  snatch away,  dispossess,  plunder,  usurp ",
                "災": "サイ わざわ.い disaster,  calamity,  woe,  curse,  evil ",
                "浦": "ホ うら bay,  creek,  inlet,  gulf,  beach,  seacoast ",
                "析": "セキ chop,  divide,  tear,  analyze ",
                "譲": "ジョウ ユズ. defer,  turnover,  transfer,  convey ",
                "称": "ショウ ホメ. たた.える とな.える あ.げる かな.う はか.り はか.る appellation,  praise,  admire,  name,  title,  fame ",
                "納": "ノウ ナッ ナ ナン トウ オサ.マ おさ.める -おさ.める settlement,  obtain,  reap,  pay,  supply,  store ",
                "樹": "ジュ timber trees,  wood ",
                "挑": "チョウ いど.む challenge,  contend for,  make love to ",
                "誘": "ユウ イウ さそ.う いざな.う entice,  lead,  tempt,  invite,  ask,  call for,  seduce,  allure ",
                "紛": "フン まぎ.れる -まぎ.れ まぎ.らす まぎ.らわす まぎ.らわしい distract,  be mistaken for,  go astray,  divert ",
                "至": "シ イタ. climax,  arrive,  proceed,  reach,  attain,  result in ",
                "宗": "シュウ ソウ ム religion,  sect,  denomination,  main point,  origin,  essence ",
                "促": "ソク うなが.す stimulate,  urge,  press,  demand,  incite ",
                "慎": "シン ツツシ. つつし.む つつし humility,  be careful,  discrete,  prudent ",
                "控": "コウ ひか.える ひか.え withdraw,  draw in,  hold back,  refrain from,  be moderate ",
                "智": "wisdom,  intellect,  reason ",
                "握": "アク にぎ.る grip,  hold,  mould sushi,  bribe ",
                "宙": "チュ mid-air,  air,  space,  sky,  memorization,  interval of time ",
                "俊": "シュ sagacious,  genius,  excellence ",
                "銭": "セン ゼン ぜに すき coin,  .01 yen,  money ",
                "渋": "ジュウ シュウ しぶ しぶ.い しぶ.る astringent,  hesitate,  reluctant,  have diarrhea ",
                "銃": "ジュウ gun,  arms ",
                "操": "ソウ サン アヤツ. みさお maneuver,  manipulate,  operate,  steer,  chastity,  virginity,  fidelity ",
                "携": "ケイ たずさ.える たずさ.わる portable,  carry in hand ,  armed with,  bring along ",
                "診": "シン み.る checkup,  seeing,  diagnose,  examine ",
                "託": "タク かこつ.ける かこ.つ かこ.つける consign,  requesting,  entrusting with,  pretend,  hint ",
                "撮": "サツ と.る つま.む -ど.り snapshot,  take pictures ",
                "誕": "タン nativity,  be born,  declension,  lie,  be arbitrary ",
                "侵": "シン おか.す encroach,  invade,  raid,  trespass,  violate ",
                "括": "カツ くく.る fasten,  tie up,  arrest,  constrict ",
                "謝": "シャ アヤマ. apologize,  thank,  refuse ",
                "駆": "ク か.ける か.る drive,  run,  gallop,  advance,  inspire,  impel ",
                "透": "トウ トウ. す.く す.かす す.ける とう.る transparent,  permeate,  filter,  penetrate ",
                "津": "シン haven,  port,  harbor,  ferry ",
                "壁": "ヘキ かべ wall,  lining stomach ,  fence ",
                "稲": "トウ テ いね いな rice plant ",
                "仮": "カ ケ かり かり- sham,  temporary,  interim,  assumed name ,  informal ",
                "裂": "レツ さ.く さ.ける -ぎ.れ split,  rend,  tear ",
                "敏": "ビン サト cleverness,  agile,  alert ",
                "是": "ゼ シ これ just so,  this,  right,  justice ",
                "排": "ハ repudiate,  exclude,  expel,  reject ",
                "裕": "ユ abundant,  rich,  fertile ",
                "堅": "ケン -ガタ. かた.い strict,  hard,  solid,  tough,  tight,  reliable ",
                "訳": "ヤク わけ translate,  reason,  circumstance,  case ",
                "芝": "シ シ turf,  lawn ",
                "綱": "コウ つな hawser,  class genus ,  rope,  cord,  cable ",
                "典": "テン デ code,  ceremony,  law,  rule ",
                "賀": "congratulations,  joy ",
                "扱": "ショウ あつか.る あつか.い あつか.う handle,  entertain,  thresh,  strip ",
                "顧": "コ カエリ.ミ look back,  review,  examine oneself,  turn around ",
                "弘": "コウ グ ヒロ. vast,  broad,  wide ",
                "看": "カン み.る watch over,  see ",
                "訟": "ショウ sue,  accuse ",
                "戒": "カイ いまし.める commandment ",
                "祉": "シ welfare,  happiness ",
                "誉": "ヨ ホ.メ ほま.れ reputation,  praise,  honor,  glory ",
                "歓": "カン ヨロコ. delight,  joy ",
                "奏": "ソウ カナ.デ play music,  speak to a ruler,  complete ",
                "勧": "カン ケン すす.める persuade,  recommend,  advise,  encourage,  offer ",
                "騒": "ソウ さわ.ぐ うれい さわ.がしい boisterous,  make noise,  clamor,  disturb,  excite ",
                "閥": "バツ  clique,  lineage,  pedigree,  faction,  clan ",
                "甲": "コウ カン カ キノ armor,  high voice ,  A grade,  first class,  former,  instep,  carapace ",
                "縄": "ジョウ なわ ただ.す straw rope,  cord ",
                "郷": "キョウ ゴウ サ home town,  village,  native place,  district ",
                "揺": "ヨウ ゆ.れる ゆ.る ゆ.らぐ ゆ.るぐ ゆ.する ゆ.さぶる ゆ.すぶる うご.く swing,  shake,  sway,  rock,  tremble,  vibrate ",
                "免": "メン マヌガ.レ まぬか.れる excuse,  dismissal ",
                "既": "キ すで.に previously,  already,  long ago ",
                "薦": "セン スス.メ recommend,  mat,  advise,  encourage,  offer ",
                "隣": "リン トナ とな.る neighboring ",
                "華": "カ ケ ハ splendor,  flower,  petal,  shine,  luster,  ostentatious,  showy,  gay,  gorgeous ",
                "範": "ハ pattern,  example,  model ",
                "隠": "イン オン ヨ. かく.す かく.し かく.れる かか.す conceal,  hide,  cover ",
                "徳": "ト benevolence,  virtue,  goodness,  commanding respect ",
                "哲": "テ philosophy,  clear ",
                "杉": "サン すぎ cedar,  cryptomeria ",
                "釈": "シャク セキ ユル. とく す.てる explanation ",
                "己": "コ キ ツチノ おのれ self,  snake,  serpent ",
                "妥": "gentle,  peace,  depravity ",
                "威": "イ オド.カ おど.す おど.し intimidate,  dignity,  majesty,  menace,  threaten ",
                "豪": "ゴウ エラ. overpowering,  great,  powerful,  excelling,  Australia ",
                "熊": "ユウ くま bear ",
                "滞": "タイ テイ とどこお.る stagnate,  be delayed,  overdue,  arrears ",
                "微": "ビ カス. delicate,  minuteness,  insignificance ",
                "隆": "リュ hump,  high,  noble,  prosperity ",
                "症": "ショウ symptoms,  illness ",
                "暫": "ザン しばら.く temporarily,  a while,  moment,  long time ",
                "忠": "チュ loyalty,  fidelity,  faithfulness ",
                "倉": "ソウ くら godown,  warehouse,  storehouse,  cellar,  treasury ",
                "彦": "ゲン ヒ lad,  boy ancient  ",
                "肝": "カン きも liver,  pluck,  nerve,  chutzpah ",
                "喚": "カン わめ.く yell,  cry,  scream ",
                "沿": "エン そ.う -ぞ.い run alongside,  follow along,  run along,  lie along ",
                "妙": "ミョウ ビョウ たえ exquisite,  strange,  queer,  mystery,  miracle,  excellent,  delicate,  charming ",
                "唱": "ショウ とな.える chant,  recite,  call upon,  yell ",
                "阿": "ア オ オモネ. Africa,  flatter,  fawn upon,  corner,  nook,  recess ",
                "索": "サク cord,  rope ",
                "誠": "セイ マコ sincerity,  admonish,  warn,  prohibit,  truth,  fidelity ",
                "襲": "シュウ カサ. おそ.う attack,  advance on,  succeed to,  pile,  heap ",
                "懇": "コン ねんご.ろ sociable,  kind,  courteous,  hospitable,  cordial ",
                "俳": "ハイ haiku,  actor ",
                "柄": "ヘイ ツ がら え design,  pattern,  build,  nature,  handle,  crank,  grip,  knob,  shaft ",
                "驚": "キョウ おどろ.く おどろ.かす wonder,  be surprised,  frightened,  amazed ",
                "麻": "マ マア ア hemp,  flax ",
                "李": "リ スモ plum ",
                "浩": "コウ ヒロ. おおき.い wide expanse,  abundance,  vigorous ",
                "剤": "ザイ スイ セイ かる けず.る dose,  medicine,  drug ",
                "瀬": "ライ rapids,  current,  torrent,  shallows,  shoal ",
                "趣": "シュ おもむき おもむ.く gist,  proceed to,  tend,  become ",
                "陥": "カン おちい.る おとしい.れる collapse,  fall into,  cave in,  fall castle ,  slide into ",
                "斎": "サイ イ. とき つつし.む ものいみ purification,  Buddhist food,  room,  worship,  avoid,  alike ",
                "貫": "カン ヌ つらぬ.く ぬ.く pierce,  8 1,  3lbs,  penetrate,  brace ",
                "仙": "セン セン hermit,  wizard,  cent ",
                "慰": "イ なぐさ.める なぐさ.む consolation,  amusement,  seduce,  cheer,  make sport of,  comfort,  console ",
                "序": "ジョ ツイ つい.で preface,  beginning,  order,  precedence,  occasion,  chance,  incidentally ",
                "旬": "ジュン シュン decameron,  10day period,  season for specific products ",
                "兼": "ケン -カ.ネ か.ねる concurrently,  and ",
                "聖": "セイ ショウ ヒジ holy,  saint,  sage,  master,  priest ",
                "旨": "シ むね うま.い delicious,  relish,  show a liking for,  purport,  will,  clever,  expert ",
                "即": "ソク つ.く つ.ける すなわ.ち instant,  namely,  as is,  conform,  agree,  adapt ",
                "柳": "リュウ ヤナ willow ",
                "舎": "シャ セキ ヤド. cottage,  inn,  hut,  house,  mansion ",
                "偽": "ギ カ いつわ.る にせ いつわ.り falsehood,  lie,  deceive,  pretend,  counterfeit,  forgery ",
                "較": "カク コウ くら.べる contrast,  compare ",
                "覇": "ハ ハク はたがしら hegemony,  supremacy,  leadership,  champion ",
                "詳": "ショウ ツマビ.ラ くわ.しい detailed,  full,  minute,  accurate,  well-informed ",
                "抵": "テイ resist,  reach,  touch ",
                "脅": "キョウ おびや.かす おど.す おど.かす threaten,  coerce ",
                "茂": "モ シゲ.  overgrown,  grow thick,  be luxuriant ",
                "犠": "ギ キ いけにえ sacrifice ",
                "旗": "キ はた national flag,  banner,  standard ",
                "距": "キョ へだ.たる long-distance ",
                "雅": "ガ ミヤ. gracious,  elegant,  graceful,  refined ",
                "飾": "ショク カザ. かざ.る decorate,  ornament,  adorn,  embellish ",
                "網": "モウ ア netting,  network ",
                "竜": "リュウ リョウ ロウ イ たつ dragon,  imperial ",
                "詩": "poem,  poetry ",
                "翼": "ヨク つばさ wing,  plane,  flank ",
                "潟": "セキ -ガ かた lagoon ",
                "敵": "テキ かたき かな.う enemy,  foe,  opponent ",
                "魅": "ミ fascination,  charm,  bewitch ",
                "嫌": "ケン ゲン きら.う きら.い いや dislike,  detest,  hate ",
                "斉": "セイ サイ ハヤ そろ.う ひと.しい ひと.しく あたる adjusted,  alike,  equal,  similar variety of ",
                "敷": "フ -シ. し.く spread,  pave,  sit,  promulgate ",
                "擁": "ヨウ hug,  embrace,  possess,  protect,  lead ",
                "圏": "ケン かこ.い sphere,  circle,  radius,  range ",
                "酸": "サン す.い acid,  bitterness,  sour,  tart ",
                "罰": "バツ バチ ハツ ばっ.する penalty,  punishment ",
                "滅": "メツ ほろ.びる ほろ.ぶ ほろ.ぼす destroy,  ruin,  overthrow,  perish ",
                "礎": "ソ イシズ cornerstone,  foundation stone ",
                "腐": "フ くさ.る -くさ.る くさ.れる くさ.れ くさ.らす くさ.す rot,  decay,  sour ",
                "脚": "キャク キャ カク ア skids,  leg,  undercarriage ",
                "潮": "チョウ ウシ しお tide,  salt water,  opportunity ",
                "梅": "バイ うめ plum ",
                "尽": "ジン サン つ.くす -つ.くす -づ.くし -つ.く -づ.く -ず.く つ.きる exhaust,  use up,  run out of,  befriend,  serve ",
                "僕": "ボク しもべ me,  I male  ",
                "桜": "オウ ヨウ サク cherry ",
                "滑": "カツ コツ ナメ.ラ すべ.る slippery,  slide,  slip,  flunk ",
                "孤": "コ orphan,  alone ",
                "炎": "エン ホノ inflammation,  flame,  blaze ",
                "賠": "バイ compensation,  indemnify ",
                "句": "phrase,  clause,  sentence,  passage,  paragraph,  counter for haiku ",
                "鋼": "コウ はがね steel ",
                "頑": "ガン かたく stubborn,  foolish,  firmly ",
                "鎖": "サ くさり とざ.す chain,  irons,  connection ",
                "彩": "サイ イロド. coloring,  paint,  makeup ",
                "摩": "マ ま.する さ.する す.る chafe,  rub,  polish,  grind,  scrape ",
                "励": "レイ はげ.む はげ.ます encourage,  be diligent,  inspire ",
                "縦": "ジュウ たて vertical,  length,  height,  self-indulgent,  wayward ",
                "輝": "キ カガヤ. radiance,  shine,  sparkle,  gleam,  twinkle ",
                "蓄": "チク たくわ.える amass,  keeping a concubine,  phonograph ",
                "軸": "ジク axis,  pivot,  stem,  stalk,  counter for book scrolls ",
                "巡": "ジュン めぐ.る めぐ.り patrol,  go around,  circumference ",
                "稼": "カ かせ.ぐ earnings,  work,  earn money ",
                "瞬": "シュン またた.く wink,  blink,  twinkle ",
                "砲": "ホ cannon,  gun ",
                "噴": "フン ふ.く erupt,  spout,  emit,  flush out ",
                "誇": "コ ほこ.る boast,  be proud,  pride,  triumphantly ",
                "祥": "ショ auspicious,  happiness,  good omen ",
                "牲": "セイ animal sacrifice,  offering ",
                "秩": "チ regularity,  salary,  order ",
                "帝": "テイ みかど sovereign,  the emperor,  god,  creator ",
                "宏": "コウ ヒロ. wide,  large ",
                "唆": "サ そそのか.す tempt,  seduce,  instigate,  promote ",
                "阻": "ソ はば.む thwart,  separate from,  prevent,  obstruct,  deter,  impede ",
                "泰": "タ peaceful,  calm,  peace,  easy,  Thailand ",
                "賄": "ワイ まかな.う bribe,  board,  supply,  finance ",
                "撲": "ボク slap,  strike,  hit,  beat,  tell,  speak ",
                "堀": "クツ ホ ditch,  moat,  canal ",
                "菊": "キク chrysanthemum ",
                "絞": "コウ しぼ.る し.める し.まる strangle,  constrict,  wring ",
                "縁": "エン -ネン ふち ふちど.る ゆかり よすが へり えにし affinity,  relation,  connection,  edge,  border,  verge,  brink ",
                "唯": "ユイ イ タ solely,  only,  merely,  simply ",
                "膨": "ボウ ふく.らむ ふく.れる swell,  get fat,  thick ",
                "矢": "シ や dart,  arrow ",
                "耐": "タイ タ.エ -proof,  enduring ",
                "塾": "ジュク cram school,  private school ",
                "漏": "ロウ も.る も.れる も.らす leak,  escape,  time ",
                "慶": "ケイ ヨロコ. jubilation,  congratulate,  rejoice,  be happy ",
                "猛": "モ fierce,  rave,  rush,  become furious,  wildness,  strength ",
                "芳": "ホウ カンバ.シ perfume,  balmy,  flavorable,  fragrant ",
                "懲": "チョウ こ.りる こ.らす こ.らしめる penal,  chastise,  punish,  discipline ",
                "剣": "ケン つるぎ sabre,  sword,  blade,  clock hand ",
                "彰": "ショ patent,  clear ",
                "棋": "キ ご chess piece,  Japanese chess,  shogi ",
                "丁": "チョウ テイ ひのと street,  ward,  town,  counter for ",
                "恒": "コウ ツネ つね constancy,  always ",
                "揚": "ヨウ ア.ガ あ.げる -あ.げ hoist,  fry in deep fat ",
                "冒": "ボウ おか.す risk,  face,  defy,  dare,  damage,  assume a name  ",
                "之": "シ コ の これ おいて ゆく of,  this ",
                "倫": "リ ethics,  companion ",
                "陳": "チン ヒ.ネ exhibit,  state,  relate,  explain ",
                "憶": "オク recollection,  think,  remember ",
                "潜": "セン ひそ.む もぐ.る かく.れる くぐ.る ひそ.める submerge,  conceal,  hide,  lower voice ,  hush ",
                "梨": "リ ナ pear tree ",
                "仁": "ジン ニ ニ humanity,  virtue,  benevolence,  charity,  man,  kernel ",
                "克": "コク カ. overcome,  kindly,  skillfully ",
                "岳": "ガク タ point,  peak,  mountain ",
                "概": "ガイ おうむ.ね outline,  condition,  approximation,  generally ",
                "拘": "コウ かか.わる arrest,  seize,  concerned,  adhere to,  despite ",
                "墓": "ボ はか grave,  tomb ",
                "黙": "モク ボク だま.る もだ.す silence,  become silent,  stop speaking,  leave as is ",
                "須": "ス シュ モト.メ すべから.く すべし ひげ まつ もち.いる ought,  by all means,  necessarily ",
                "偏": "ヘン かたよ.る partial,  side,  left-side radical,  inclining,  biased ",
                "雰": "フン atmosphere,  fog ",
                "遇": "グウ あ.う interview,  treat,  entertain,  receive,  deal with ",
                "諮": "シ はか.る consult with ",
                "狭": "キョウ コウ せま.い せば.める せば.まる cramped,  narrow,  contract,  tight ",
                "卓": "タ eminent,  table,  desk,  high ",
                "亀": "キ キュウ キン カ tortoise,  turtle ",
                "糧": "リョウ ロウ かて provisions,  food,  bread ",
                "簿": "ボ register,  record book ",
                "炉": "ロ いろり hearth,  furnace,  kiln,  reactor ",
                "牧": "ボク マ breed,  care for,  shepherd,  feed,  pasture ",
                "殊": "シュ こと particularly,  especially,  exceptionally ",
                "殖": "ショク フ.ヤ ふ.える augment,  increase,  multiply,  raise ",
                "艦": "カン warship ",
                "輩": "ハイ -ばら やから やかい ともがら comrade,  fellow,  people,  companions ",
                "穴": "ケツ ア hole,  aperture,  slit,  cave,  den ",
                "奇": "キ く.しき あや.しい くし めずら.しい strange,  strangeness,  curiosity ",
                "慢": "マン ridicule,  laziness ",
                "鶴": "カク ツ crane,  stork ",
                "謀": "ボウ ム はか.る たばか.る はかりごと conspire,  cheat,  impose on,  plan,  devise,  scheme,  have in mind,  deceive ",
                "暖": "ダン ノン あたた.か あたた.かい あたた.まる あたた.める warmth ",
                "昌": "ショウ サカ prosperous,  bright,  clear ",
                "拍": "ハク ヒョウ clap,  beat music  ",
                "朗": "ロウ アキ.ラ ほが.らか melodious,  clear,  bright,  serene,  cheerful ",
                "寛": "カン ユル.ヤ くつろ.ぐ ひろ.い tolerant,  leniency,  generosity,  relax,  feel at home,  be at ease,  broadminded ",
                "覆": "フク おお.う くつがえ.す くつがえ.る capsize,  cover,  shade,  mantle,  be ruined ",
                "胞": "ホウ placenta,  sac,  sheath ",
                "泣": "キュウ な.く cry,  weep,  moan ",
                "隔": "カク へだ.てる へだ.たる isolate,  alternate,  distance,  separate,  gulf ",
                "浄": "ジョウ セイ きよ.める きよ.い clean,  purify,  cleanse,  exorcise,  Manchu Dynasty ",
                "没": "ボツ モツ おぼ.れる しず.む ない drown,  sink,  hide,  fall into,  disappear,  die ",
                "暇": "カ ひま いとま spare time,  rest,  leisure,  time,  leave of absence ",
                "肺": "ハイ lungs ",
                "貞": "テイ サ upright,  chastity,  constancy,  righteousness ",
                "靖": "セイ ジョウ ヤス.ンジ peaceful ",
                "鑑": "カン カガ かんが.みる specimen,  take warning from,  learn from ",
                "飼": "シ カ. domesticate,  raise,  keep,  feed ",
                "陰": "イン かげ かげ.る shade,  yin,  negative,  sex organs,  secret,  shadow ",
                "銘": "メ inscription,  signature of artisan  ",
                "随": "ズイ まにまに したが.う follow,  though,  notwithstanding,  while,  during,  both,  all,  obey,  submit to,  comply,  at the mercy of the wave ",
                "烈": "レツ ハゲ.シ ardent,  violent,  vehement,  furious,  severe,  extreme ",
                "尋": "ジン ヒ たず.ねる inquire,  fathom,  look for ",
                "稿": "コウ わら したがき draft,  copy,  manuscript,  straw ",
                "丹": "タン rust-colored,  red,  red lead,  pills ",
                "啓": "ケイ サト. ひら.く disclose,  open,  say ",
                "也": "ヤ エ マ なり か to be classical  ",
                "丘": "キュウ オ hill,  knoll ",
                "棟": "トウ むね むな- ridgepole,  ridge ",
                "壌": "ジョウ つち lot,  earth,  soil ",
                "漫": "マン みがりに cartoon,  involuntarily,  in spite of oneself,  corrupt ",
                "玄": "ゲ mysterious,  occultness ",
                "粘": "ネン ねば.る sticky,  glutinous,  greasy,  persevere ",
                "悟": "ゴ さと.る enlightenment,  perceive,  discern,  realize,  understand ",
                "舗": "shop,  store ",
                "妊": "ニン ジン はら.む みごも.る pregnancy ",
                "熟": "ジュク う.れる mellow,  ripen,  mature,  acquire skill ",
                "旭": "キョク アサ rising sun,  morning sun ",
                "恩": "オ grace,  kindness,  goodness,  favor,  mercy,  blessing,  benefit ",
                "騰": "トウ inflation,  advancing,  going ",
                "往": "オウ ユ. い.く いにしえ さき.に journey,  chase away,  let go,  going,  travel ",
                "豆": "トウ ズ まめ まめ beans,  pea,  midget ",
                "遂": "スイ と.げる つい.に consummate,  accomplish,  attain,  commit suicide  ",
                "狂": "キョウ くる.う くる.おしい くるお.しい lunatic,  insane,  crazy,  confuse ",
                "岐": "キ branch off,  fork in road,  scene,  arena,  theater ",
                "陛": "ヘイ highness,  steps of throne  ",
                "緯": "イ よこいと ぬき horizontal,  woof,  left & right,  latitude ",
                "培": "バイ つちか.う cultivate,  foster ",
                "衰": "スイ おとろ.える decline,  wane,  weaken ",
                "艇": "テイ rowboat,  small boat ",
                "屈": "クツ カガ.メ かが.む yield,  bend,  flinch,  submit ",
                "径": "ケイ みち こみち さしわたし ただちに diameter,  path,  method ",
                "淡": "タン あわ.い thin,  faint,  pale,  fleeting ",
                "抽": "チュウ ひき- pluck,  pull,  extract,  excel ",
                "披": "ヒ expose,  open ",
                "廷": "テ courts,  imperial court,  government office ",
                "錦": "キン ニシ brocade,  fine dress,  honors ",
                "准": "ジュン quasi-,  semi-,  associate ",
                "暑": "ショ あつ.い sultry,  hot,  summer heat ",
                "磯": "キ イ seashore,  beach ",
                "奨": "ショウ ソウ スス.メ exhort,  urge,  encourage ",
                "浸": "シン ひた.す ひた.る immersed,  soak,  dip,  steep,  moisten,  wet,  dunk ",
                "剰": "ジョウ あまつさえ あま.り あま.る surplus,  besides ",
                "胆": "タン キ gall bladder,  courage,  pluck,  nerve ",
                "繊": "セン slender,  fine,  thin kimono ",
                "駒": "ク こま pony,  horse,  colt ",
                "虚": "キョ コ むな.しい うつ.ろ void,  emptiness,  unpreparedness,  crack,  fissure,  untruth ",
                "霊": "レイ リョウ たま spirits,  soul ",
                "帳": "チョウ とばり notebook,  account book,  album ",
                "悔": "カイ く.いる く.やむ くや.しい repent,  regret ",
                "諭": "ユ サト. rebuke,  admonish,  charge,  warn,  persuade ",
                "惨": "サン ザン みじ.め いた.む むご.い wretched,  disaster,  cruelty,  harsh ",
                "虐": "ギャク しいた.げる tyrannize,  oppress ",
                "翻": "ホン ハン ひるがえ.る ひるがえ.す flip,  turn over,  wave,  flutter,  change mind  ",
                "墜": "ツイ crash,  fall down  ",
                "沼": "ショウ ぬま marsh,  lake,  bog,  swamp,  pond ",
                "据": "キョ す.える す.わる set,  lay a foundation,  install,  equip,  squat down,  sit down ",
                "肥": "ヒ フト. こ.える こえ こ.やす こ.やし fertilizer,  get fat,  fertile,  manure,  pamper ",
                "徐": "ジョ おもむ.ろに gradually,  slowly,  deliberately,  gently ",
                "糖": "トウ sugar ",
                "搭": "トウ board,  load a vehicle ,  ride ",
                "盾": "ジュン たて shield,  escutcheon,  pretext ",
                "脈": "ミャク すじ vein,  pulse,  hope ",
                "滝": "ロウ ソウ タ waterfall,  rapids,  cascade ",
                "軌": "キ rut,  wheel,  track,  model,  way of doing ",
                "俵": "ヒョウ たわら bag,  bale,  sack,  counter for bags ",
                "妨": "ボウ さまた.げる disturb,  prevent,  hamper,  obstruct ",
                "擦": "サツ す.る す.れる -ず.れ こす.る こす.れる grate,  rub,  scratch,  scrape,  chafe,  scour ",
                "鯨": "ゲイ くじら whale ",
                "荘": "ソウ ショウ チャン オゴソ. ほうき villa,  inn,  cottage,  feudal manor ",
                "諾": "ダク consent,  assent,  agreement ",
                "雷": "ライ カミナ thunder,  lightening bolt ",
                "漂": "ヒョウ ただよ.う drift,  float on liquid  ",
                "懐": "カイ エ オモ. ふところ なつ.かしい なつ.かしむ なつ.く なつ.ける なず.ける いだ.く pocket,  feelings,  heart,  yearn,  miss someone,  become attached to,  bosom,  breast ",
                "勘": "カ intuition,  perception ",
                "栽": "サイ plantation,  planting ",
                "拐": "カイ kidnap,  falsify ",
                "駄": "ダ タ burdensome,  pack horse,  horse load,  send by horse ",
                "添": "テン モ. そ.える そ.う も.える annexed,  accompany,  marry,  suit,  meet,  satisfy,  attach,  append,  garnish,  imitate ",
                "冠": "カン カンム crown,  best,  peerless ",
                "斜": "シャ なな.め はす diagonal,  slanting,  oblique ",
                "鏡": "キョウ ケイ カガ mirror,  speculum,  barrel-head,  round rice-cake offering ",
                "聡": "ソウ ミミザト. さと.い wise,  fast learner ",
                "浪": "ロ wandering,  waves,  billows ",
                "亜": "ア アシア ツ. Asia,  rank next,  come after,  -ous ",
                "覧": "ラン み.る perusal,  see ",
                "詐": "サ いつわ.る lie,  falsehood,  deceive,  pretend ",
                "壇": "ダン タン podium,  stage,  rostrum,  terrace ",
                "勲": "クン イサ meritorious deed,  merit ",
                "魔": "マ witch,  demon,  evil spirit ",
                "酬": "シュウ シュ トウ むく.いる repay,  reward,  retribution ",
                "紫": "シ ムラサ purple,  violet ",
                "曙": "ショ あけぼの dawn,  daybreak ",
                "紋": "モ family crest,  figures ",
                "卸": "シャ おろ.す おろし おろ.し wholesale ",
                "奮": "フン ふる.う stirred up,  be invigorated,  flourish ",
                "欄": "ラン てすり column,  handrail,  blank,  space ",
                "逸": "イツ ハグ.レ そ.れる そ.らす deviate,  idleness,  leisure,  miss the mark,  evade,  elude,  parry,  diverge ",
                "涯": "ガイ はて horizon,  shore ",
                "拓": "タク ヒラ. clear the land ,  open,  break up land  ",
                "眼": "ガン ゲン まなこ め eyeball ",
                "獄": "ゴク prison,  jail ",
                "尚": "ショウ ナ esteem,  furthermore,  still,  yet ",
                "彫": "チョウ ほ.る -ぼ.り carve,  engrave,  chisel ",
                "穏": "オン おだ.やか calm,  quiet,  moderation ",
                "顕": "ケン アラワ.レ あきらか appear,  existing ",
                "巧": "コウ ウマ. たく.み たく.む adroit,  skilled,  ingenuity ",
                "矛": "ム ボウ ほこ halberd,  arms,  festival float ",
                "垣": "エン カ hedge,  fence,  wall ",
                "欺": "ギ あざむ.く deceit,  cheat,  delude ",
                "釣": "チョウ つ.る つ.り つ.り angling,  fish,  catch,  allure,  ensnare ",
                "萩": "シュウ ハ bush clover ",
                "粛": "シュク スク つつし.む solemn,  quietly,  softly ",
                "栗": "リツ リ オノノ くり chestnut ",
                "愚": "グ おろ.か foolish,  folly,  absurdity,  stup",
                "嘉": "カ ヨ よみ.する applaud,  praise,  esteem ",
                "遭": "ソウ あ.う あ.わせる encounter,  meet,  party,  association,  interview,  join ",
                "架": "カ か.ける か.かる erect,  frame,  mount,  support,  shelf,  construct ",
                "鬼": "キ おに おに- ghost,  devil ",
                "庶": "ショ commoner,  all,  bastard ",
                "稚": "チ ジ オデ いとけない おさない おくて immature,  young ",
                "滋": "nourishing,  more & more,  be luxuriant,  planting,  turbidity ",
                "幻": "ゲン まぼろし phantasm,  vision,  dream,  illusion,  apparition ",
                "煮": "シャ に.る -に に.える に.やす boil,  cook ",
                "姫": "キ ひめ ひめ- princess ",
                "誓": "セイ ちか.う vow,  swear,  pledge ",
                "把": "ハ grasp,  faggot,  bunch,  counter for bundles ",
                "践": "セン ふ.む tread,  step on,  trample,  practice,  carry through ",
                "呈": "テイ display,  offer,  present,  send,  exhibit ",
                "疎": "ソ ショ うと.い うと.む まば.ら alienate,  rough,  neglect,  shun,  sparse ",
                "仰": "ギョウ コウ あお.ぐ おお.せ お.っしゃる おっしゃ.る face-up,  look up,  depend,  seek,  respect,  rever,  drink,  take ",
                "剛": "ゴ sturdy,  strength ",
                "疾": "シツ rapidly ",
                "征": "セ subjugate,  attack the rebellious,  collect taxes ",
                "砕": "サイ くだ.く くだ.ける smash,  break,  crush,  familiar,  popular ",
                "謡": "ヨウ うた.い うた.う noh chanting ",
                "嫁": "カよめ とつ.ぐ marry into,  bride ",
                "謙": "ケ self-effacing,  humble oneself,  condescend,  be modest ",
                "后": "コウ ゴ きさき empress,  queen,  after,  behind,  back,  later ",
                "嘆": "タン なげ.く なげ.かわしい sigh,  lament,  moan,  grieve ",
                "菌": "キン germ,  fungus,  bacteria ",
                "鎌": "レン ケン カ sickle,  scythe,  trick ",
                "巣": "ソウ す す.くう nest,  rookery,  hive,  cobweb,  den ",
                "頻": "ヒン しき.りに repeatedly,  recur ",
                "琴": "キン こと harp,  koto ",
                "班": "ハン squad,  corps,  unit,  group ",
                "棚": "ホウ たな -だな shelf,  ledge,  rack,  mount,  mantle,  trellis ",
                "潔": "ケツ イサギヨ. undefiled,  pure,  clean,  righteous,  gallant ",
                "酷": "コク ひど.い cruel,  severe,  atrocious,  unjust ",
                "宰": "サ superintend,  manager,  rule ",
                "廊": "ロウ corridor,  hall,  tower ",
                "寂": "ジャク セキ さび さび.しい さび.れる さみ.しい loneliness,  quietly,  mellow,  mature,  death of a priest ",
                "辰": "シン ジン タ sign of the dragon,  7-9AM,  fifth sign of Chinese zodiac ",
                "霞": "カ ゲ かすみ かす.む be hazy,  grow dim,  blurred ",
                "伏": "フク フ. ふ.せる prostrated,  bend down,  bow,  cover,  lay pipes  ",
                "碁": "ゴ Go ",
                "俗": "ゾク vulgar,  customs,  manners,  worldliness,  mundane things ",
                "漠": "バク vague,  obscure,  desert,  wide ",
                "邪": "ジャ よこし.ま wicked,  injustice,  wrong ",
                "晶": "ショ sparkle,  clear,  crystal ",
                "墨": "ボク ス  black ink,  India ink,  ink stick,  Mexico ",
                "鎮": "チン オサ しず.める しず.まる tranquilize,  ancient peace-preservation centers ",
                "洞": "ドウ ホ den,  cave,  excavation ",
                "履": "リ は.く footgear,  shoes,  boots,  put on the feet  ",
                "劣": "レツ おと.る inferiority,  be inferior to,  be worse ",
                "那": "ナ ダ イカ なに なんぞ what? ",
                "殴": "オウ なぐ.る assault,  hit,  beat,  thrash ",
                "娠": "シン with child,  pregnancy ",
                "奉": "たてまつ.る まつ.る observance,  offer,  present,  dedicate ",
                "憂": "うれ.える うれ.い う.い melancholy,  grieve,  lament,  be anxious,  sad",
                "朴": "ボク ほう ほお crude,  simple,  plain,  docile ",
                "亭": "テイ チン pavilion,  restaurant,  mansion,  arbor,  cottage,  vaudeville,  music",
                "淳": "ジュン シュン アツ. pure ",
                "怪": "あや.しい あや.しむ suspicious,  mystery,  apparition ",
                "鳩": "はと pigeon,  dove ",
                "酔": "よ.う よ.い drunk,  feel sick,  poisoned,  elated,  spellbound ",
                "惜": "お.しい お.しむ pity,  be sparing of,  frugal,  stingy,  regret ",
                "穫": "カク harvest,  reap ",
                "佳": "excellent,  beautiful,  good,  pleasing,  skilled ",
                "潤": "うるお.う うるお.す wet,  be watered,  profit by, steep ",
                "悼": "いた.む lament,  grieve over ",
                "乏": "とぼ.しい とも.しい destitution,  scarce,  limited ",
                "該": "ガイ above-stated,  the said,  that ",
                "赴": "おもむ.く proceed,  get,  become,  tend ",
                "桑": "ソウ ク mulberry ",
                "桂": "ケイ カツ Japanese Judas-tree,  cinnamon tree ",
                "髄": "ズイ marrow,  pith ",
                "虎": "コ ト tiger,  drunkard ",
                "盆": "ボン basin,  lantern festival,  tray ",
                "晋": "シン スス. advance ",
                "穂": "スイ ear,  ear grain ,  head,  crest wave  ",
                "壮": "サカ robust,  manhood,  prosperity ",
                "堤": "つつみ dike,  bank,  embankment ",
                "飢": "う.える hungry,  starve ",
                "傍": "かたわ.ら わき おか- はた bystander,  side,  besides,  while,  nearby,  3rd person ",
                "疫": "エキ ヤク epidemic ",
                "累": "ルイ accumulate,  involvement,  trouble,  tie up,  continually ",
                "痴": "し.れる おろか stupid,  foolish ",
                "搬": "ハン conveyor,  carry,  transport ",
                "晃": "コウ アキラ clear ",
                "癒": "ユ い.える いや.す healing,  cure,  quench thirst ,  ",
                "桐": "キ paulownia ",
                "寸": "ス measurement,  foot,  10 ",
                "郭": "カク クル enclosure,  quarters,  fortification,  red-light district ",
                "尿": "ニョウ urine ",
                "凶": "キョウ villain,  evil,  bad luck,  disaster ",
                "吐": "は.く つ.く spit,  vomit,  belch,  confess,  tell lies  ",
                "宴": "エン ウタ banquet,  feast,  party ",
                "鷹": "ヨウ オウ たか hawk ",
                "賓": "ヒン V.I.P.,  guest ",
                "虜": "とりこ とりく captive,  barbarian,  low epithet for the enemy ",
                "陶": "ト pottery,  porcelain ",
                "鐘": "かね bell,  gong,  chimes ",
                "憾": "カン うら.む remorse,  regret,  be sorry ",
                "猪": "チョ イノシ い boar ",
                "紘": "おおづな つな large ",
                "磁": "ジ magnet,  porcelain ",
                "弥": "ひさ.しい all the more,  increasingly ",
                "昆": "コン descendants,  elder brother,  insect ",
                "粗": "あら.い あら- coarse,  rough,  rugged ",
                "訂": "テイ revise,  correct,  decide ",
                "芽": "ガ bud,  sprout,  spear,  germ ",
                "庄": "ショウ ソ ソウ ",
                "ホ": "level ",
                "傘": "サン かさ umbrella ",
                "敦": "トン タイ ダン チョウ アツ. industry,  kindliness ",
                "騎": "キ equestrian,  riding on horses,  counter for equestrians ",
                "寧": "ネイ ムシ. rather,  preferably ",
                "循": "ジュン sequential,  fellow ",
                "忍": "バセ しの.ぶ endure,  bear,  put up with,  conceal,  secrete,  spy,  sneak ",
                "怠": "なま.ける neglect,  laziness ",
                "如": "ジョ ニョ ゴト.likeness,  like,  such as,  as if,  better,  best,  equal ",
                "寮": "リョウ dormitory,  hostel,  villa,  tea pavillion ",
                "祐": "ユウ ウ タス.ケ help ",
                "鵬": "ホウ おおとり phoenix ",
                "鉛": "エン なまり lead ",
                "珠": "シュ タ pearl,  gem,  jewel ",
                "凝": "こご.らせる congeal,  freeze,  stiff",
                "苗": "なえ なわ seedling,  sapling,  shoot ",
                "獣": "けだもの animal,  beast ",
                "哀": "あわ.れむ かな.しい pathetic,  grief,  sorrow,  pathos,  pity,  sympathize ",
                "跳": "は.ねる と.ぶ -と.びhop,  leap up,  spring,  jerk,  prance,  buck,  splash",
                "匠": "ショウ たくみ artisan,  workman,  carpenter ",
                "垂": "た.れ -た.れ droop,  suspend,  hang,  slouch ",
                "蛇": "イ ヤ ヘ snake,  serpent,  hard drinker ",
                "澄": "チョウ -ス.マ す.む す.ます lucidity,  be clear,  clear,  clarify,  settle",
                "縫": "ホウ ヌ. sew,  stitch,  embroider ",
                "僧": "ソウ Buddhist priest,  monk ",
                "眺": "チョウ なが.める stare,  watch,  look at,  see,  scrutinize ",
                "亘": "わた.る span,  request ",
                "呉": "ゴ ク く.れる give,  do something for ",
                "凡": "およ.そ おうよ.そ mediocre ",
                "憩": "いこ.い いこ.う recess,  rest,  relax,  repose ",
                "媛": "ひめ beautiful woman,  princess ",
                "溝": "コウ ミ gutter,  ditch,  sewer,  drain,  10**32 ",
                "恭": "ウヤウヤ.シ respect,  reverent ",
                "刈": "ガイ カイ カ. reap,  cut,  clip,  trim,  prune ",
                "睡": "スイ drowsy,  sleep,  die ",
                "錯": "サク シャク confused,  mix,  be in disorder ",
                "伯": "ハ chief,  count,  earl,  uncle,  Brazil ",
                "笹": "サ bamboo grass ",
                "穀": "コ cereals,  grain ",
                "陵": "みささぎ mausoleum,  imperial tomb ",
                "霧": "きり fog,  mist ",
                "魂": "コン たましい たま soul,  spirit ",
                "弊": "ヘイ abuse,  evil,  vice,  breakage ",
                "妃": "ヒ キサ queen,  princess ",
                "舶": "ハク liner,  ship ",
                "餓": "ガ う.える starve,  hungry,  thirst ",
                "窮": "きわ.める きわ.まる きわ.まり きわ.み hard up,  destitute,  suffer",
                "掌": "たなごころ manipulate,  rule,  administer,  conduct,  palm of hand ",
                "麗": "うるわ.しい lovely,  companion ",
                "綾": "リン ア design,  figured cloth,  twill ",
                "臭": "にお.う にお.い stinking,  ill-smelling,  suspicious looking,  odor, savor, fragrance",
                "悦": "よろこ.ぶ ecstasy,  joy,  rapture ",
                "刃": "は やいば blade,  sword,  edge ",
                "縛": "しば.る truss,  arrest,  bind,  tie,  restrain ",
                "暦": "こよみ calendar,  almanac ",
                "宜": "ギ ヨロ.シ よろ.しい best regards,  good ",
                "盲": "めくら blind,  blind man,  ignoramus ",
                "粋": "いき chic,  style,  purity,  essence,  pith,  cream,  elite,  choice ",
                "辱": "ジョク はずかし.める embarrass,  humiliate,  shame ",
                "毅": "キ ギ ツヨ. strong ",
                "轄": "くさび control,  wedge ",
                "猿": "エン サ monkey ",
                "弦": "ゲン つる bowstring,  chord,  hypotenuse ",
                "稔": "みの.る harvest,  ripen ",
                "窒": "チツ plug up,  obstruct ",
                "炊": "た.く cook,  boil ",
                "洪": "コ deluge,  flood,  vast ",
                "摂": "める かね.る vicarious,  surrogate,  act in addition to ",
                "飽": "あ.きる あ.かす sated,  tired of,  bored,  satiate ",
                "冗": "ジョウ superfluous,  uselessness ",
                "桃": "トウ モ peach tree ",
                "狩": "か.る か.り hunt,  raid,  gather ",
                "朱": "シュ ア vermilion,  cinnabar,  scarlet,  red,  bloody ",
                "渦": "カ うず whirlpool,  eddy,  vortex ",
                "紳": "シ sire,  good belt,  gentleman ",
                "枢": "スウ シュ とぼそ からくり hinge,  pivot,  door ",
                "碑": "ヒ いしぶみ tombstone,  monument ",
                "鍛": "タン キタ.エ forge,  discipline,  train ",
                "刀": "かたな sword,  saber,  knife ",
                "鼓": "つづみ drum,  beat,  rouse,  muster ",
                "裸": "はだか naked,  nude,  uncovered,  partially clothed ",
                "猶": "なお furthermore,  still,  yet ",
                "塊": "カイ ケ かたまり つちくれ clod,  lump,  chink,  clot,  mass ",
                "旋": "セン rotation,  go around ",
                "弓": "キュウ ユ bow,  bow archery,  violin  ",
                "幣": "ヘイ ヌ cash,  bad habit,  humble prefix,  gift,  Shinto offerings of cloth,  rope",
                "膜": "マク membrane ",
                "扇": "セン オウ fan,  folding fan ",
                "腸": "はらわた intestines,  guts,  bowels,  viscera ",
                "槽": "ふね vat,  tub,  tank ",
                "慈": "ジ イツク.シ mercy ",
                "楊": "ヨウ ヤナ かわ willow ",
                "伐": "そむ.く う.つ fell,  strike,  attack,  punish ",
                "駿": "スグ.レa good horse,  speed,  a fast person ",
                "漬": "かる -づ.け -づけ pickling,  soak,  moisten,  steep ",
                "糾": "ただ.す twist,  ask,  investigate,  verify ",
                "亮": "リョウ アキラ clear,  help ",
                "墳": "フン tomb,  mound ",
                "坪": "ヘイ つぼ two-mat area,  ~36 sq ft ",
                "紺": "コン dark blue,  navy ",
                "娯": "ゴ recreation,  pleasure ",
                "椿": "チン チュン ツバ camellia ",
                "舌": "ゼツ した tongue,  reed,  clapper ",
                "羅": "ラ gauze,  thin silk,  Rome ",
                "峡": "キョウ コウ ハザ gorge,  ravine ",
                "俸": "ホウ stipend,  salary ",
                "厘": "リン rin,  1,  10sen,  1,  10bu ",
                "峰": "みね summit,  peak ",
                "圭": "ケイ square jewel,  corner,  angle,  edge ",
                "醸": "ジョウ かも.す brew,  cause ",
                "蓮": "はす はちす lotus ",
                "弔": "とむら.う とぶら.う condolences,  mourning,  funeral ",
                "乙": "おと- きのと the latter,  duplicate,  strange,  witty ",
                "汁": "しる -しる つゆ soup,  juice,  broth,  sap,  gravy,  pus ",
                "尼": "あま nun ",
                "遍": "あまね.く everywhere,  times,  widely,  generally ",
                "衡": "コ equilibrium,  measuring rod,  scale ",
                "薫": "カオ send forth fragrance,  fragrant,  be scented,  smoke tobacco  ",
                "猟": "かり か.る game-hunting,  shooting,  game,  bag ",
                "癖": "くせ.に mannerism,  habit,  vice,  trait,  fault,  kink ",
                "愉": "たの.しい pleasure,  happy,  rejoice ",
                "寅": "イント sign of the tiger,  3-5AM,  third sign of Chinese zodiac ",
                "礁": "ショウ reef,  sunken rock ",
                "乃": "の すなわ.ち from,  possessive particle,  whereupon,  accordingly ",
                "洲": "シュウ ス しま continent,  sandbar,  island,  country ",
                "屯": "トン barracks,  police station,  camp ",
                "樺": "かば birch ",
                "槙": "こずえ twig,  ornamental evergreen ",
                "姻": "イン matrimony,  marry ",
                "巌": "いわお rock,  crag,  boulder ",
                "擬": "い もど.き mimic,  aim a gun  at,  nominate,  imitate ",
                "塀": "ヘイ ベイ fence,  wall,  kokuji  ",
                "唇": "くちびる lips ",
                "睦": "まじい むつ.む intimate,  friendly,  harmonious ",
                "閑": "カ leisure ",
                "胡": "ゴ ナン barbarian,  foreign ",
                "幽": "ユウ seclude,  confine to a room ",
                "峻": "けわ.しい high,  steep ",
                "曹": "へや cadet,  friend ",
                "詠": "よ.む recitation,  poem,  song,  composing ",
                "卑": "しめる lowly,  base,  vile,  vulgar ",
                "侮": "あなず.る scorn,  despise,  make light of,  contempt ",
                "鋳": "い.る casting,  mint ",
                "抹": "マツ rub,  paint,  erase ",
                "尉": "ジョウ military officer,  jailer,  old man,  rank ",
                "槻": "キ つき Zelkova tree ",
                "隷": "しもべ slave,  servant,  prisoner,  criminal,  follower ",
                "禍": "わざわい calamity,  misfortune,  evil,  curse ",
                "蝶": "チョウ butterfly ",
                "酪": "ラク dairy products,  whey,  broth,  fruit juice ",
                "茎": "くき stalk,  stem ",
                "帥": "スイ commander,  leading troops,  governor ",
                "逝": "ゆ.く departed,  die ",
                "汽": "キ vapor,  steam ",
                "琢": "ミガ. polish ",
                "匿": "かくま.う hide,  shelter,  shield ",
                "襟": "えり collar,  neck,  lapel ",
                "蛍": "ほたる lightning-bug,  firefly ",
                "蕉": "ショウ banana ",
                "寡": "カ widow,  minority,  few ",
                "琉": "リュウ ル lapis lazuli ",
                "痢": "リ diarrhea ",
                "庸": "ヨ commonplace,  ordinary,  employment ",
                "羊": "ヨウ ヒツ sheep ",
                "款": "カ goodwill,  article,  section,  friendship,  collusion ",
                "閲": "エツ けみ.する review,  inspection,  revision ",
                "偵": "テイ spy ",
                "喝": "カツ hoarse,  scold ",
                "敢": "えない あ.えず daring,  sad,  tragic,  pitiful,  frail,  feeble ",
                "胎": "タイ womb,  uterus ",
                "酵": "コウ fermentation ",
                "憤": "いきどお.る aroused,  resent,  be indignant,  anger ",
                "豚": "ぶた pork,  pig ",
                "遮": "さえぎ.る intercept,  interrupt,  obstruct ",
                "扉": "とびら front door,  title page,  front page ",
                "硫": "リュウ sulphur ",
                "赦": "シャ pardon,  forgiveness ",
                "窃": "ぬす.む ひそ.か stealth,  steal,  secret,  private,  hushed ",
                "泡": "あわ bubbles,  foam,  suds,  froth ",
                "瑞": "みず- congratulations ",
                "又": "また.の or again,  furthermore,  on the other hand ",
                "慨": "ガイ rue,  be sad,  sigh,  lament ",
                "紡": "つむ.ぐ spinning ",
                "恨": "めしい regret,  bear a grudge,  resentment,  malice,  hatred ",
                "肪": "ウ obese,  fat ",
                "扶": "ける aid,  help,  assist ",
                "戯": "れるじゃ.れる frolic,  play,  sport ",
                "伍": "ゴ イツ 5,  5-man squad,  file,  line ",
                "忌": "い.む い.み mourning,  abhor,  detestable,  death anniversary ",
                "濁": "にご.る voiced,  uncleanness,  wrong,  nigori,  impurity ",
                "奔": "ホン bustle,  run ",
                "斗": "ト ト Big Dipper,  10 sho vol ,  sake dipper ",
                "蘭": "ラン orchid,  Holland ",
                "迅": "ジン swift,  fast ",
                "肖": "あやか.る resemblance ",
                "鉢": "ハツ bowl,  rice tub,  pot,  crown ",
                "朽": "ク.チ decay,  rot,  remain in seclusion ",
                "殻": "から がら husk,  nut shell ",
                "享": "キョウ コウ ウ.ケ receive,  undergo,  answer phone ,  take,  get,  catch ",
                "秦": "シン ハ Manchu dynasty,  name given to naturalized foreigners ",
                "茅": "かや miscanthus reed ",
                "藩": "ハン clan,  enclosure ",
                "沙": "よなげる sand ",
                "輔": "ホ フ タス.ケ help ",
                "媒": "バイ mediator,  go-between ",
                "鶏": "にわとり chicken ",
                "禅": "しずか ゆず.る Zen,  silent meditation ",
                "嘱": "しょく.する entrust,  request,  send a message ",
                "胴": "ドウ trunk,  torso,  hull ship ,  hub of wheel ",
                "迭": "テツ transfer,  alternation ",
                "挿": "さ.す はさ.む insert,  put in,  graft,  wear sword  ",
                "嵐": "ラン アラ storm,  tempest ",
                "椎": "ツイ スイ ウ. つち oak,  mallet ",
                "絹": "きぬ silk ",
                "陪": "バイ obeisance,  follow,  accompany,  attend on ",
                "剖": "ボウ divide ",
                "譜": "フ musical score,  music,  note,  staff,  table,  genealogy",
                "郁": "イ cultural progress,  perfume ",
                "悠": "ユ permanence,  distant,  long time,  leisure ",
                "淑": "シュク シト.ヤ graceful,  gentle,  pure ",
                "帆": "ほ sail ",
                "暁": "ギョウ キョウ サト. あかつき daybreak,  dawn,  in the event ",
                "傑": "ケ greatness,  excellence ",
                "楠": "ナン ダン ゼン ",
                "ネ": "くす camphor tree ",
                "笛": "テキ フ flute,  clarinet,  pipe,  whistle,  bagpipe,  piccolo ",
                "玲": "レ sound of jewels ",
                "奴": "やつ guy,  slave,  manservant,  fellow ",
                "錠": "ジョウ lock,  fetters,  shackles ",
                "拳": "こぶし fist ",
                "翔": "かけ.る soar,  fly ",
                "遷": "みやこがえ transition,  move,  change ",
                "拙": "セツ つたな.い bungling,  clumsy,  unskillful ",
                "侍": "さむらい waiter,  samurai,  wait upon,  serve ",
                "尺": "シャ shaku,  Japanese foot,  measure,  scale,  rule ",
                "峠": "とうげ mountain peak,  mountain pass,  ",
                "篤": "トク あつ.い fervent,  kind,  cordial,  serious,  deliberate ",
                "肇": "はじ.める beginning ",
                "渇": "カツ かわ.く thirst,  dry up,  parch ",
                "叔": "シュ uncle,  youth ",
                "雌": "めん feminine,  female ",
                "亨": "タテマツ. undergo,  answer phone ,  take,  get,  catch ",
                "堪": "カン タン た.える たま.る こ.らえる こた.える withstand,  endure,  support,  resist ",
                "叙": "ジョ つい.ず ついで confer,  relate,  narrate,  describe ",
                "酢": "サク す vinegar,  sour,  acid,  tart ",
                "吟": "ギン versify,  singing,  recital ",
                "逓": "テイ かわ.る たがいに relay,  in turn,  sending ",
                "嶺": "レイ リョ peak,  summit ",
                "甚": "ジン ハナハ.ダシ はなは.だ tremendously,  very,  great,  exceedingly ",
                "喬": "キョウ タカ. high,  boasting ",
                "崇": "スウ アガ.メ adore,  respect,  revere,  worship ",
                "漆": "シツ ウル lacquer,  varnish,  seven ",
                "岬": "コウ ミサ headland,  cape,  spit, ",
                "朋": "とも companion,  friend ",
                "坑": "コウ pit,  hole ",
                "藍": "あい indigo ",
                "賊": "ゾク burglar,  rebel,  traitor,  robber ",
                "搾": "しぼ.る squeeze ",
                "畔": "ハン ア paddy ridge,  levee ",
                "遼": "リョ distant ",
                "唄": "バイ うた うた.う songs with samisen ",
                "孔": "コウア cavity,  hole,  slit,  very,  great,  exceedingly ",
                "橘": "キツ タチバ mandarin orange ",
                "漱": "ぐうがい gargle,  rinse mouth ",
                "呂": "ロ リョ セボ spine,  backbone ",
                "拷": "ゴウ torture,  beat ",
                "嬢": "ジョウ むすめ lass,  girl,  Miss,  daughter ",
                "苑": "その garden,  farm,  park ",
                "巽": "ソン たつみ southeast ",
                "杜": "ぐ やまなし woods,  grove ",
                "渓": "たにがわ mountain stream,  valley ",
                "翁": "オウ オキ venerable old man ",
                "廉": "レ bargain,  reason,  charge,  suspicion,  point,  account,  purity,  honest,  low",
                "謹": "キン つつし.む discreet,  reverently,  humbly ",
                "瞳": "ドウ トウ ヒト pupil ",
                "湧": "ユウ boil,  ferment,  seethe,  uproar,  breed ",
                "欣": "よろこ.ぶ take pleasure in,  rejoice ",
                "窯": "かま kiln,  oven,  furnace ",
                "褒": "める praise,  extol",
                "醜": "みにく.い しこ ugly,  unclean,  shame,  bad looking ",
                "升": "ショウ マ measuring box,  1.8 liter ",
                "殉": "ジュン martyrdom,  follow by resigning ",
                "煩": "わずら.わす anxiety,  trouble,  worry,  pain,  ill,  annoy,  nuisance,  irksome ",
                "巴": "ともえ comma-design ",
                "禎": "さいわ.い happiness ",
                "劾": "ガイ censure,  criminal investigation ",
                "堕": "れる degenerate,  descend to,  lapse into",
                "租": "ソ tariff,  crop tax,  borrowing ",
                "稜": "リョウ ロウ いつ かど angle,  edge,  corner,  power,  majesty ",
                "桟": "カケハ scaffold,  cleat,  frame,  jetty,  bolt door  ",
                "倭": "ワ イ シタガ. Yamato,  ancient Japan ",
                "婿": "セイ むこ bridegroom,  son-in-law ",
                "慕": "ボ した.う pining,  yearn for,  love dearly,  adore ",
                "斐": "ヒ beautiful,  patterned ",
                "罷": "ヒ まか.り- や.める quit,  stop,  leave,  withdraw,  go ",
                "矯": "キョウ た.める rectify,  straighten,  correct,  reform,  cure,  control,  pretend",
                "某": "なにがし so-and-so,  one,  a certain,  that person ",
                "囚": "とら.われる captured,  criminal,  arrest,  catch ",
                "魁": "さきがけ かしら charging ahead of others ",
                "虹": "にじ rainbow ",
                "鴻": "おおとり ひしくいlarge bird,  wild goose ",
                "泌": "ヒツヒ ooze,  flow,  soak in,  penetrate,  secrete ",
                "於": "けるああより at,  in,  on,  as for ",
                "赳": "キュ strong and brave ",
                "漸": "ゼン steadily,  gradually advancing,  finally,  barely ",
                "蚊": "ブン か mosquito ",
                "葵": "キ アオ hollyhock ",
                "厄": "ヤク unlucky,  misfortune,  bad luck,  disaster ",
                "藻": "ソウ も seaweed,  duckweed ",
                "禄": "ロク フ さいわ.い fief,  allowance,  pension,  grant,  happiness ",
                "孟": "ミョウ カシ chief,  beginning ",
                "嫡": "チャク テキ legitimate wife,  direct descent non-bastard  ",
                "尭": "ギョウ タカ. high,  far ",
                "嚇": "カク おど.かす menacing,  dignity,  majesty,  threaten ",
                "巳": "シ み sign of the snake or serpent,  9-11AM,  sixth sign of Chinese zodiac ",
                "凸": "トツ でこ convex,  beetle brow,  uneven ",
                "暢": "チョウ ノビ. stretch ",
                "韻": "イン rhyme,  elegance,  tone ",
                "霜": "ソウ しも frost ",
                "硝": "ショウ nitrate,  saltpeter ",
                "勅": "いまし.める imperial order ",
                "芹": "キン セ parsley ",
                "杏": "コウ アン apricot ",
                "棺": "カン coffin,  casket ",
                "儒": "ジュ Confucian ",
                "鳳": "ホウ フ male mythical bird ",
                "馨": "かお.る fragrant,  balmy,  favourable ",
                "慧": "ケイ エ サト wise ",
                "愁": "シュウ うれ.える うれ.い distress,  grieve,  lament,  be anxious ",
                "楼": "ロウ たかどの watchtower,  lookout,  high building",
                "彬": "うるわ.しい refined,  gentle ",
                "匡": "キョウ オウ スク correct,  save,  assist",
                "眉": "ビ ミ まゆ eyebrow",
                "欽": "キン コン ツツシ. respect,  revere,  long for ",
                "薪": "シン たきぎ まき fuel,  firewood,  kindling ",
                "褐": "カツ brown,  woollen kimono ",
                "賜": "シ たまわ.る たま.う たも.う grant,  gift,  boon,  results ",
                "嵯": "サ シ steep,  craggy,  rugged ",
                "綜": "ソウ おさ.める す.べる rule ",
                "繕": "ゼン つくろ.う darning,  repair,  mend,  trim,  tidy up,  adjust ",
                "栓": "セン plug,  bolt,  cork,  bung,  stopper ",
                "翠": "かわせみ green ",
                "鮎": "デン ネン ナマ あゆ freshwater trout,  smelt ",
                "榛": "シン ハン ハ はしばみ hazelnut,  filbert ",
                "凹": "オウ くぼ.む へこ.む ぼこ concave,  hollow,  sunken ",
                "艶": "やか つや.めく glossy,  luster,  glaze,  polish,  charm,  colorful,  captivating ",
                "惣": "いそが.しい all ",
                "蔦": "チョウ ツ vine,  iv",
                "錬": "レン ね.る tempering,  refine,  drill,  train,  polish ",
                "隼": "シュン ジュン ハヤブ falcon ",
                "渚": "ショ ナギ strand,  beach,  shore ",
                "衷": "チュウ inmost,  heart,  mind,  inside ",
                "逐": "チク pursue,  drive away,  chase,  accomplish,  attain,  commit ",
                "斥": "セキ しりぞ.ける reject,  retreat,  recede,  withdraw,  repel,  repulse ",
                "稀": "キ ケ まれ まばら rare,  phenomenal,  dilute acid  ",
                "芙": "lotus,  Mt Fuji ",
                "詔": "ショウ imperial edict ",
                "皐": "コウ サツ swamp,  shore ",
                "雛": "ひな ひよこ chick,  squab,  duckling,  doll ",
                "惟": "んみる これ consider,  reflect,  think ",
                "佑": "タス.ケ help,  assist ",
                "耀": "かがや. shine,  sparkle,  gleam,  twinkle ",
                "黛": "まゆずみ blackened eyebrows ",
                "渥": "あつ.い kindness ",
                "憧": "あこが.れる yearn after,  long for,  aspire to,  admire,  adore ",
                "宵": "ショウ よい wee hours,  evening,  early night ",
                "妄": "みだ.りにdelusion,  unnecessarily,  without authority,  reckless ",
                "惇": "シュン ジュン トン アツ. sincere,  kind,  considerate ",
                "脩": "シュウ ホジ おさ.める なが.い dried meat ",
                "甫": "ホ フ ハジ.メ for the first time,  not until ",
                "酌": "シャク く.む bar-tending,  serving sake,  the host,  draw water ,  ladle,  ",
                "蚕": "サン テン かいこ こ silkworm ",
                "嬉": "キ タノ.シ うれ.しい glad,  pleased,  rejoice ",
                "蒼": "ソウ あお.い blue,  pale ",
                "暉": "キ カガ.ヤ shine,  light ",
                "頒": "ハン わか.つ distribute,  disseminate,  partition,  understand ",
                "只": "シ ただ only,  free,  in addition ",
                "肢": "シ limb,  arms & legs ",
                "檀": "ダン タン まゆみ cedar,  sandlewood,  spindle tree ",
                "凱": "ガイ カイ かちどき やわらぐ victory song ",
                "彗": "スイ セイ ホウ comet ",
                "謄": "トウ mimeograph,  copy ",
                "梓": "シ あずさ catalpa tree ",
                "丑": "チュウ ウsign of the ox or cow,  1-3AM, second sign of Chinese zodiac ",
                "嗣": "heir,  succeed ",
                "叶": "かな.える grant,  answer ",
                "汐": "しお うしお eventide,  tide,  salt water,  opportunity ",
                "絢": "ケ kimono design ",
                "朔": "サク ツイタ conjunction astronomy ,  first day of month ",
                "伽": "とぎ nursing,  attending,  entertainer ",
                "畝": "せ うね furrow,  30 tsubo,  ridge,  rib ",
                "抄": "ショ extract,  selection,  summary,  copy,  spread thin ",
                "爽": "やか たがう refreshing,  bracing,  resonant,  sweet,  clear ",
                "黎": "レイリクロ. dark,  black,  many ",
                "惰": "ダ lazy,  laziness ",
                "蛮": "えびす barbarian ",
                "冴": "える こお.る be clear,  serene,  cold,  skilful ",
                "旺": "い さかん flourishing,  successful,  beautiful,  vigorous ",
                "萌": "す めばえ show symptoms of,  sprout,  bud,  malt ",
                "偲": "しの.ぶ recollect,  remember",
                "壱": "イツ ヒト I,  one ",
                "瑠": "リュ lapis lazuli ",
                "允": "まこと.に license,  sincerity,  permit ",
                "侯": "コウ marquis,  lord,  daimyo ",
                "蒔": "う.える sow seeds  ",
                "鯉": "リ こい carp ",
                "弧": "コ arc,  arch,  bow ",
                "遥": "はる.か far off,  distant,  long ago ",
                "舜": "シュ type of morning glory,  rose of Sharon,  althea ",
                "瑛": "エ sparkle of jewelry,  crystal ",
                "附": "つ.ける affixed,  attach,  refer to,  append ",
                "彪": "ヒョウ ヒュウ spotted,  mottled,  patterned,  small tiger ",
                "卯": "ボウ モウ sign of the hare or rabbit,  5-7AM,  fourth sign of Chinese",
                "但": "タン タダ. however,  but ",
                "綺": "キ あや figured cloth,  beautiful ",
                "芋": "ウ いも potato ",
                "茜": "あかね madder,  red dye,  Turkey red ",
                "凌": "しの.ぐ endure,  keep rain out,  stave off,  tide over,  defy,  slight",
                "皓": "しろ.い white,  clear ",
                "洸": "コ sparkling water ",
                "毬": "いが まり burr,  ball ",
                "婆": "バ ばば ばあ old woman,  grandma,  wet nurse ",
                "緋": "ヒ あけ あか scarlet,  cardinal ",
                "鯛": "チョウ たい sea bream,  red snapper ",
                "怜": "あわ.れむ wise ",
                "邑": "える くに village,  rural community,  right village radical no. 163  ",
                "倣": "ホウ なら.う emulate,  imitate ",
                "碧": "ヘキ ヒャ blue,  green ",
                "啄": "ついば.む peck,  pick up ",
                "穣": " わら good crops,  prosperity,  10**28 ",
                "酉": "ユウ ト west,  bird,  sign of the bird,  5-7PM,  tenth sign of Chinese zodiac",
                "悌": "テイ ダ serving our elders ",
                "倹": "つづまやか frugal,  economy,  thrifty ",
                "柚": "ゆず citron ",
                "繭": "まゆ きぬ cocoon ",
                "亦": "ヤク また also,  again ",
                "詢": "まこと consult with ",
                "采": "いろどり dice,  form,  appearance,  take,  coloring ",
                "紗": "ウスギ gauze,  gossamer ",
                "賦": "フ levy,  ode,  prose,  poem,  tribute,  installment ",
                "眸": "ひとみ pupil of the eye ",
                "玖": "キュウ beautiful black jewel,  nine ",
                "弐": "ふた.つ そえ II,  two,  second ",
                "錘": "つむ おもり weight,  plumb bob,  sinker ",
                "諄": "ねんご tedious ",
                "倖": "せ さいわ.い happiness,  luck ",
                "痘": "トウ pox,  smallpox ",
                "笙": "ふえ a reed instrument ",
                "侃": "カン ツヨ strong,  just,  righteous,  peace-loving ",
                "裟": "シャ Buddhist surplice ",
                "洵": "ぶ まこと.に alike,  truth ",
                "爾": "しかり その you,  thou,  second person ",
                "耗": "カウ decrease ",
                "昴": "すばる the Pleiades ",
                "銑": "セン pig iron ",
                "莞": "カン い reed used to cover tatami ",
                "伶": "ワザオ actor ",
                "碩": "きい large,  great,  eminent ",
                "宥": "ゆる.す soothe,  calm,  pacify ",
                "滉": "コウ ひろ.い deep and broad ",
                "晏": "アン おそ.い late,  quiet,  sets sun  ",
                "伎": "ギ キ わざ わざおぎ deed,  skill ",
                "朕": "チン majestic plural,  imperial we ",
                "迪": "びく すす.む edify,  way,  path ",
                "綸": "いと thread,  silk cloth ",
                "且": "ショウ カ. moreover,  also,  furthermore ",
                "竣": "ドウ シュン わらわ わらべ おわ.る end,  finish ",
                "晨": "シン あした とき あさ morning,  early ",
                "吏": "officer,  an official ",
                "燦": "めく brilliant ",
                "麿": "マ I,  you,  kokuji  ",
                "頌": "たた.える eulogy",
                "箇": "カ コ counters for things ",
                "楓": "フウ かえで maple ",
                "琳": "リン jewel,  tinkling of jewelry ",
                "梧": "ゴ あおぎり Chinese parasol tree,  phoenix tree ",
                "哉": "サイ かな how,  what,  alas,  question mark  ",
                "澪": "レイ みお water route,  shipping channel ",
                "匁": "もんめ め ひゃくめ monme,  3.75 grams,  kokuji  ",
                "晟": "セイ ジョウ あきらか clear ",
                "衿": "キン コン えり neck,  collar,  lapel ",
                "凪": "なぎ な. lull,  calm,  kokuji  ",
                "梢": "ショウ こずえ くすのき treetops,  twig ",
                "丙": "ヘイ ひのえ third class,  3rd,  3rd calendar sign ",
                "颯": "サツ ソウ さっ.と suddenly,  smoothly ",
                "茄": "カ eggplant ",
                "勺": "シャク ladle,  one tenth of a go,  dip ",
                "恕": "ジョ ショ ゆる.す excuse,  tolerate,  forgive ",
                "蕗": "ロ ル ふき butterbur,  bog rhubarb ",
                "瑚": "コ ゴ ancestral offering receptacle ",
                "遵": "ジュン abide by,  follow,  obey,  learn ",
                "瞭": "あきらか clear ",
                "燎": "かがりび burn,  bonfire ",
                "虞": "おそれ uneasiness,  fear,  anxiety,  concern ",
                "柊": "ひいらぎ holly ",
                "侑": "める urge to eat ",
                "謁": "エツ audience,  audience with king  ",
                "斤": "おの axe,  1.32 lb,  catty,  counter for loaves of bread ",
                "嵩": "かさ かさ.む be aggravated,  grow worse,  grow bulky,  swell ",
                "捺": "ナツ ダツ さ.す お.す press,  print,  affix a seal,  stamp ",
                "蓉": "ヨ lotus ",
                "茉": "マツ バツ jasmine ",
                "袈": "ケ カ a coarse camlet ",
                "燿": "ヨウ かがや.く ひかり shine ",
                "誼": "ギ よしみ よい friendship,  intimacy ",
                "冶": "ヤ イ. melting,  smelting ",
                "栞": "カン しおり bookmark,  guidebook ",
                "墾": "コン ground-breaking,  open up farmland ",
                "勁": "つよ.い strong ",
                "菖": "ショウ iris ",
                "旦": "あした nightbreak,  dawn,  morning ",
                "椋": "リョウ ム type of deciduous tree,  grey starling ",
                "叡": "エイ あき.らか intelligence,  imperial ",
                "紬": "チュウ つむぎ つむ.ぐ pongee a knotted silk cloth  ",
                "胤": "イン タ descendent,  issue,  offspring ",
                "凜": "リン きびし.い cold,  strict,  severe ",
                "亥": "ガイ カイ sign of the hog,  9-11PM,  twelfth sign of the Chinese zodiac ",
                "爵": "シャク baron,  peerage,  court rank ",
                "脹": "チョウ は.れる ふく.らむ ふく.れる dilate,  distend,  bulge,  fill out,  swell ",
                "麟": "リン Chinese unicorn,  genius,  giraffe,  bright,  shining ",
                "莉": "リ ライ レイ jasmine ",
                "汰": "る よな.げる luxury,  select ",
                "瑶": "ヨウ たま beautiful as a jewel ",
                "瑳": "サ みが.く polish ",
                "耶": "ヤ ジャ か question mark ",
                "椰": "ヤ やし coconut tree ",
                "絃": "ゲン いと string,  cord,  samisen music",
                "丞": "すく.う help ",
                "璃": "glassy,  lapis lazuli ",
                "奎": "ケイ キ star,  god of literature ",
                "塑": "ソ でく model,  molding ",
                "昂": "がる たか rise ",
                "柾": "まさき straight grain,  spindle tree,  kokuji ",
                "熙": "まる bright,  sunny,  prosperous,  merry ",
                "菫": "すみれ the violet ",
                "諒": "あきら.か fact,  reality,  understand,  appreciate ",
                "鞠": "キクキュウマ ball ",
                "崚": "リョウ towering in a row ",
                "濫": "りに みだ. excessive,  overflow,  spread out ",
                "捷": "ショウ ソウ ハヤ. victory,  fast "
            }
        },
        "GRADES": {
            "Grade1": {
                "一": "いち one ",
                "十": "じゅう ten ",
                "手": "て hand",
                "出": "で exit,  leave",
                "右": "みぎ right,  right hand side",
                "村": "ソン ム  town,  village",
                "入": "いり enter,  insert",
                "白": "しろ white",
                "女": "おんな woman,  female",
                "青": "あお blue,  green",
                "気": "き spirit,  mind",
                "音": "おと sound,  noise",
                "二": "に two",
                "見": "み see,  hopes,  chances,  idea,  opinion,  look at,  visible   ",
                "校": "-こう exam,  school,  printing,  proof,  correction",
                "先": "さき before,  ahead,  previous,  future,  precedence",
                "文": "ふみ sentence,  literature,  style,  art,  decoration,  figures, plan",
                "森": "シン モ  forest,  woods",
                "車": "くるま car",
                "目": "め eye,  eyeball,  eyesight,  sight,  vision,  look,  stare,  glance",
                "石": "いし セキ、シャク、コク stone",
                "空": "そら empty,  sky,  void,  vacant,  vacuum",
                "夕": "ゆう evening",
                "三": "さん three",
                "水": "みず water",
                "足": "あし leg,  foot,  be sufficient,  counter for pairs of footwear",
                "口": "くち mouth",
                "木": "き tree,  wood",
                "正": "ただし correct,  justice,  righteous",
                "金": "きん gold",
                "土": "つち soil,  earth,  ground",
                "日": "ひ day, sun, Japa",
                "小": "しょう little,  small",
                "立": "たて just done ,  freshly baked ,  indicates activity only just occurred",
                "本": "ほん book",
                "生": "なま life,  genuine,  birth",
                "草": "くさ   grass,  weeds,  herbs,  pasture,  write,  draft",
                "犬": "いぬ dog",
                "王": "/  king,  rule,  magnate",
                "貝": "バイ かい  shellfish",
                "糸": "シ いと  thread",
                "林": "リン ハヤ  grove,  forest",
                "四": "よん four",
                "六": "ろく six",
                "七": "なな seven",
                "八": "はち eight",
                "九": "きゅう nine",
                "上": "うえ above,  up",
                "山": "やま mountain",
                "雨": "あめ rain",
                "下": "した below,  down,  descend,  give,  low, inferior",
                "中": "なか inside",
                "左": "ひだり left,  left hand side",
                "川": "かわ river,  stream",
                "男": "おとこ man,  male",
                "天": "てん heavens,  sky,  imperial",
                "人": "ひと man, person",
                "花": "はな flower",
                "田": "た rice field"
            },
            "Grade2": {
                "話": "はなし tale,  talk ",
                "書": "しょ write ",
                "秋": "あき autumn ",
                "前": "まえ in front,  before ",
                "電": "でん electricity ",
                "会": "かい meeting,  meet,  party,  association,  interview,  join ",
                "茶": "ちゃ tea ",
                "新": "しん thin ",
                "教": "える teach,  faith,  doctrine  ",
                "黒": "くろ black ",
                "体": "からだ body,  health ",
                "切": "-る cut,  cutoff,  be sharp ",
                "心": "りっしんべん heart,  mind,  spirit ",
                "番": "つがい バン Turn, number in a series ",
                "室": "むろ room,  apartment,  chamber,  greenhouse,  cellar ",
                "走": "そう run ",
                "社": "しゃ company,  association,  society ",
                "午": "うま noon,  sign of the horse,  seventh sign of Chinese zodiac ",
                "間": "ま interval,  space ",
                "原": "はら ゲン Meadow, original, primitive, field, plain, prairie, tundra, wilderness ",
                "道": "みち road-way,  street,  district,  journey,  course,  moral,  teachings ",
                "分": "わかれる フン Part, minute of time, segment, share, degree, one's lot, duty",
                "工": "こう craft,  construction ",
                "晴": "れる  clear up ",
                "歩": "あゆみ walk,  counter for steps ",
                "歌": "うた song,  sing ",
                "活": "いかす カツ Lively, resuscitation, being helped, living ",
                "考": "かんがえ thinking,  thought,  ideas,  intention ",
                "計": "けい plot,  plan,  scheme,  measure ",
                "外": "そと outside ",
                "風": "かぜかざ- wind,  air,  style,  manner ",
                "答": "こたえ solution,  answer ",
                "曜": "よう weekday ",
                "点": "テン ともす たてるSpot, point, mark, speck, decimal point",
                "数": "サク わずらわしい しばしば Number, strength, fate, law, figures ",
                "帰": "き homecoming,  arrive at,  lead to,  result in ",
                "近": "きん near,  early,  akin,  tantamount ",
                "科": "カ Department, course, section ",
                "声": "こえ セイ ショウ Voice",
                "父": "ちち father ",
                "母": "はは mother, mama ",
                "強": "きょう strong ",
                "回": "カイエ まわす もとおる - times,round,game,revolve,counter for occurrences ",
                "記": "しるす キ Scribe, account, narrative ",
                "才": "/  genius,  years old, cubic shaku ",
                "公": "こう official,  public,  formal,  open,  governmental,  ",
                "馬": "うま  horse ",
                "台": "だい pedestal,  a stand,  counter for machines and vehicles ",
                "首": "くび シュ Neck,counterfor songs and poems ",
                "鳥": "とり bird,  chicken ",
                "語": "ご word,  speech,  language ",
                "京": "きょう imperial capital ",
                "雲": "ウン -グ くも  cloud ",
                "鳴": "くな  chirp,  cry,  bark,  sound,  ring,  echo,  honk ",
                "魚": "さかな fish ",
                "戸": "コ  door ",
                "黄": "コウ オウ き こ  yellow ",
                "谷": "たに  valley ",
                "細": "サイ  ほそ.い ほそ.る こま.か こま.かい  dainty,  get thin,  taper,  slender,  narrow ",
                "矢": "シ や dart,  arrow ",
                "寺": "ジ てら  Buddhist temple ",
                "星": "セイ ショウ  ほし -ぼし  star,  spot,  dot,  mark ",
                "親": "おや parent,  intimacy,  relative,  familiarity,  dealer cards  ",
                "船": "ふな  ship,  boat ",
                "池": "チ  いけ  pond,  cistern,  pool,  reservoir ",
                "刀": "かたな sword,  saber,  knife ",
                "麦": "バク むぎ  barley,  wheat ",
                "米": "こめ よね メエトル Rice,USA,metre ",
                "里": "さと リ Ri, village, parent's home, league ",
                "北": "きた north ",
                "古": "ふる- old ",
                "西": "にし west,  Spain ",
                "何": "なん what ",
                "友": "とも friend ",
                "紙": "かみ paper ",
                "雪": "/  snow ",
                "当": "まさにべし トウ Hit, right, appropriate, himself ",
                "知": "ち know,  wisdom ",
                "後": "あと behind,  back,  later ",
                "思": "おもう think ",
                "夜": "よる night,  evening ",
                "画": "が brush-stroke,  picture ",
                "直": "ただちに チョク Straightaway,honesty,frankness,fix,repair ",
                "引": "ひける イン Pull, tug, jerk, admit, install, quote, refer to ",
                "聞": "きき hear,  ask,  listen ",
                "野": "の plains,   field,   rustic,   civilian life ",
                "高": "こう tall,  high,  expensive ",
                "長": "なが long ",
                "楽": "らく music,  comfort,  ease ",
                "多": "さわ many,  frequent,  much ",
                "太": "ふとる タイ Plump,thick,big around ",
                "色": "いろ color ",
                "止": "とめ stop,  halt ",
                "遠": "/  distant,  far ",
                "方": "ほう side,  direction,  way ",
                "元": "もと beginning,  former time,  origin ",
                "頭": "あたま かぶり トウ Head, counter for large animals ",
                "図": "え map,  drawing,  plan,  unexpected,  accidentally ",
                "少": "すくな few,  little ",
                "自": "じ self ",
                "理": "り reason,  truth,  way of things,  justice,  ",
                "言": "げん word,  remark,  statement, say ",
                "国": "くに country ",
                "広": "ひろし wide,  broad,  spacious ",
                "同": "どう same,  agree,  equal ",
                "夏": "なつ summer ",
                "春": "はる springtime,  spring season  ",
                "交": "こもごも まじわる コウ Mingle, mixing, association, coming & going ",
                "時": "じ time, hour ",
                "通": "つう traffic,  pass through,  avenue ",
                "冬": "ふゆ winter ",
                "用": "よう utilize,  business,  service,  use,  employ ",
                "内": "うち ナイ Inside, within, between, among, house, home ",
                "半": "はん half ",
                "地": "ち ground,  land,  earth,  soil ",
                "角": "カク ツ  かど  angle,  corner,  square,  horn,  antlers ",
                "牛": "うし cow ",
                "店": "みせ store,  shop "
            },
            "Grade3": {
                "待": "まち wait,  depend on ",
                "開": "かい open,  unfold,  unseal ",
                "業": "ごう work,  business,  study ",
                "物": "もの thing,  object,  matter ",
                "習": "-う learn ",
                "調": "ととのえる チョウ Tune, tone, meter, key (music), writing style, prepare, exorcise, investigate ",
                "味": "あじ flavor,  taste ",
                "運": "うん carry,  luck,  destiny,  fate,  lot,  transport,  progress,  advance ",
                "動": "どう move,  motion,  change,  confusion,  shift,  shake ",
                "集": "しゅう gather,  meet,  congregate,  swarm,  flock ",
                "決": "きまる ケツ Decide, fix, agree upon, appoint ",
                "事": "こと matter,  thing,  fact,  business,  reason,  possibly ",
                "実": "まことに ジツ シツ Reality, truth ",
                "病": "やまい ill,  sick ",
                "発": "はつ company,  firm,  office,  association,  shrine ",
                "練": "レン ネ.  ね.る  practice,  gloss,  train,  drill,  polish,  refine ",
                "題": "だい topic,  subject ",
                "全": "まったく ゼン Whole, entire, all, complete, fulfill ",
                "部": "ブ Section, bureau, dept, class, copy, part, portion, counter for copies of a newspaper or magazine ",
                "研": "けん polish,  study of,  sharpen ",
                "重": "じゅう heavy,  heap up,  pile up,  nest of boxes,  -fold ",
                "寒": "カン  cold ",
                "暑": "ショ あつ.い sultry,  hot,  summer heat ",
                "駅": "えき station ",
                "所": "ところ どころ ショ Place ",
                "横": "よこ オウ Sideways, side, horizontal, width, woof ",
                "曲": "まがる  bend,  music,  melody,  composition,  pleasure,  injustice,  fault,  curve,  crooked,  perverse,  lean ",
                "橋": "キョウ ハ  bridge ",
                "向": "むかい むかう コウ Yonder, facing, beyond, confront, defy, tend toward, approach ",
                "世": "よ generation,  world,  society,  public ",
                "界": "さかい border,  boundary,  mental state ",
                "医": "い doctor,  medicine ",
                "者": "もの person ",
                "配": "くばる ハイ Distribute, spouse, exile, rationing ",
                "様": "さま さん ヨウ ショウ Esq., way, manner, situation, polite suffix ",
                "昔": "むかし  once upon a time,  antiquity,  old times ",
                "洋": "よう ocean,  western style ",
                "申": "もうす さる シン Have the honor to, sign of the monkey, 3-5PM, ninth sign of Chinese zodiac ",
                "主": "ぬし lord,  chief,  master ",
                "悲": "しむ  jail cell,  grieve,  sad,  deplore,  regret ",
                "員": "-いん member ",
                "服": "ふく clothing,  admit,  obey,  discharge ",
                "島": "トウ しま   island ",
                "受": "うける うかる ジュ Accept, undergo, answer (phone), take, get, catch, receive ",
                "感": "カン Emotion, feeling, sensation ",
                "送": "おくる escort,  send ",
                "球": "たま キュウ Ball, sphere ",
                "遊": "バあそ  play ",
                "役": "ヤク エキ Duty, war, campaign, drafted labor, office, service, role ",
                "化": "ふける けする カ ケ Change, take the form of, influence, enchant, delude, -ization ",
                "苦": "しむ くる  suffering,  trial,  worry,  hardship,  feel bitter,  scowl ",
                "乗": "のる のせる シ/ジョウ Ride, power, multiplication, record, counter for vehicles, board, mount, join ",
                "放": "はなれる こく ホウ Set free, release, fire, shoot, emit, banish, liberate ",
                "落": "おとす おち おちる ラク Fall, drop, come down ",
                "具": "える  tool,  utensil,  means,  possess,  ingredients,  counter for armor,  suits,  sets of furniture ",
                "命": "いのち メイ ミョウ Fate, command, decree, destiny, life, appoint ",
                "勉": "つとむ exertion ",
                "薬": "/  medicine,  chemical,  enamel,  gunpowder,  benefit ",
                "客": "キャク カク Guest, visitor, customer, client ",
                "息": "いき  breath,  respiration,  son,  intereston money  ",
                "拾": "シュウ ジュウ ひろ.う  pick up,  gather,  find,  go on foot,  ten ",
                "根": "コン  ね -ね  root,  radical,  head pimple  ",
                "荷": "カ  baggage,  shoulder-pole load,  bear a burden ,  shoulder a gun ,  load,  cargo,  freight ",
                "等": "しいなど  etc.,  and so forth,  classfirst ,  quality,  equal,  similar ",
                "負": "まける まかす おう フ Defeat, negative, -, minus, bear, owe, assume a responsibility ",
                "和": "やわらぐ やわらげる ワ オ/カ Harmony, Japanese style, peace, soften, Japan ",
                "鉄": "テツ クロガ  iron ",
                "鼻": "ビ はな  nose,  snout ",
                "安": "あん relax,  cheap,  low,  quiet,  rested,  contented,  peaceful ",
                "葉": "は ヨウ Leaf, plane, lobe, needle, blade, spear, counter for flat things, fragment, piece ",
                "板": "ハン バン  いた  plank,  board,  plate,  stage ",
                "階": "カイ キザハ  storey,  stair,  counter for storeys of a building ",
                "県": "ケン カ.ケ  prefecture ",
                "泳": "およ  swim ",
                "油": "ユ ユウ  あぶら  oil,  fat ",
                "庫": "コ ク  くら  warehouse,  storehouse ",
                "育": "そだてる はぐくむ イク Bring up, grow up, raise, rear ",
                "暗": "くらい  darkness,  disappear,  shade,  informal,  grow dark,  be blinded ",
                "住": "じゅう dwell,  reside,  live,  inhabit ",
                "委": "イ ユダ.ネ  committee,  entrust to,  leave to,  devote,  discard ",
                "央": "オ  center,  middle ",
                "勝": "すぐれる かつ ショウ Victory, win, prevail, excel ",
                "速": "はやい はやめる すみやか ソク Quick, fast ",
                "炭": "タン すみ  charcoal,  coal ",
                "柱": "チュウ  はしら  pillar,  post,  cylinder,  support ",
                "丁": "チョウ テイ ひのと street,  ward,  town,  counter for ",
                "帳": "チョウ とばり notebook,  account book,  album ",
                "笛": "テキ フ flute,  clarinet,  pipe,  whistle,  bagpipe,  piccolo ",
                "投": "なげる トウ Throw, discard, abandon, launch into, join, invest in, hurl, give up, sell at a loss",
                "豆": "トウ ズ まめ まめ beans,  pea,  midget ",
                "登": "のぼる あがる トウ チョウ Ascend, climb up ",
                "童": "ドウ ワラ  juvenile,  child ",
                "波": "ハ ナ  waves,  billows,  Poland ",
                "箱": "はこ  box,  chest,  case,  bin,  railway car ",
                "畑": "はた はたけ Farm, field, garden, one's specialty, (kokuji) ",
                "筆": "ヒツ フ  writing brush,  writing,  painting brush,  handwriting ",
                "氷": "ヒョウ コオ. こおり ひ  icicle,  ice,  hail,  freeze,  congeal ",
                "羊": "ヨウ ヒツ sheep ",
                "飲": "いん drink,  smoke,  take ",
                "返": "かえ  return,  answer,  fade,  repay ",
                "持": "もち hold,   have ",
                "短": "ン  みじか.い  short,  brevity,  fault,  defect,  weak point ",
                "着": "き don,  arrive,  wear,  counter for suits of clothing ",
                "問": "もん question,  ask,  problem ",
                "館": "やかた building,  mansion,  large building,  palace ",
                "礼": "/  salute,  bow,  ceremony,  thanks,  remuneration ",
                "由": "よし よる ユ ユウ ユイ Wherefore, a reason ",
                "度": "ど degrees,  occurrence,  time,  counter for occurrences ",
                "悪": "わる bad,  vice,  rascal,  false,  evil,  wrong ",
                "号": "さけぶ よびな ゴウ Nickname, number, item, title, pseudonym, name, call ",
                "究": "きわむ research,  study ",
                "仕": "し attend,  doing,  official,  serve ",
                "屋": "-や roof,  house,  shop,  dealer,  seller ",
                "使": "し use ",
                "急": "きゅう hurry,  emergency,  sudden,  steep ",
                "次": "つぐ つぎ ジ シ Next, order, sequence ",
                "銀": "ぎん silver ",
                "相": "ソウ ショウ Inter-, mutual, together, each other, minister of state, councillor, aspect, phase, physiognomy ",
                "談": "ダン Discuss, talk ",
                "期": "キ ゴ Period, time, date, term ",
                "宿": "やど やど  inn,  lodging,  relay station,  dwell,  lodge,  be pregnant,  home,  dwelling ",
                "旅": "たび trip,  travel ",
                "取": "とる とり とり シュ Take, fetch, take up ",
                "予": "あらかじめ ヨ シャ Beforehand, previous, myself, I",
                "定": "さだまる さだか テイ ジョウ Determine, fix, establish, decide ",
                "写": "うつし copy,  be photographed,  describe ",
                "真": "しん true,  reality,  Buddhist sect ",
                "意": "い feelings,  thoughts,  meaning ",
                "君": "きみ  old boy,  name - suffix ",
                "死": "し death,  die ",
                "式": "シキ Style, ceremony, rite, function, method, system, form, expression ",
                "他": "ほか タ Other, another, the others",
                "幸": "いさち  happiness,  blessing,  fortune ",
                "反": "そる そらす かえす かえる ハン ホン タン ホ  Anti-",
                "対": "こたえる むかう タイ ツイ Vis-a-vis, opposite, even, equal, versus, anti-, compare ",
                "品": "しな goods,  refinement,  dignity,  article,  counter for meal courses ",
                "級": "キュ class,  rank,  grade ",
                "面": "おもて つら メン ベン Mask, face, features, surface ",
                "第": "ダイ テイ No.,  residence ",
                "表": "あらわれる あらわす ヒョウ Surface, table, chart, diagram ",
                "係": "かかる かかり かかわる ケイ Person in charge, connection, duty, concern oneself ",
                "有": "ゆう possess,  have,  exist,  happen,  occur,  approx ",
                "流": "ながれる ながれ ながす リュウ ル Current, a sink, flow, forfeit ",
                "助": "たすける たすかる すける すけ ジョ Help, rescue, assist",
                "深": "ふかい ふかまる ふかめる シン Deep, heighten, intensify, strengthen ",
                "想": "おもう ソウ ソ Concept, think, idea, thought ",
                "平": "たいら ビョウ Even, flat, peace "
            },
            "Grade4": {
                "借": "かり borrow,  rent ",
                "治": "おさ、なお ジ、チ govern, cure, heal",
                "英": "えい England,  English ",
                "法": "ホウ、ハツ、ホツ law, method",
                "試": "み test,  try,  attempt,  experiment,  ordeal ",
                "験": "げん verification,  effect,  testing ",
                "卒": "ソツ シュツ  そっ.する お.える お.わる ついに にわか  graduate,  soldier,  private,  die ",
                "冷": "ます  cool,  coldbeer,  person ,  chill ",
                "辺": "ヘン -  あた.り ほと.り  environs,  boundary,  border,  vicinity ",
                "然": "しかり しかし ゼン、ネン Sort of thing, so, if so, in that case, well ",
                "信": "シン believe, trust, message",
                "泣": "キュウ な.く cry,  weep,  moan ",
                "不": "ふ un-,  non-,  negative prefix ",
                "建": "けん build ",
                "願": "ねが  petition,  request,  vow,  wish,  hope ",
                "関": "せき、かか カン concern, barrier",
                "特": "とく special ",
                "別": "れる separate,  branch off,  diverge,  fork,  another,  extra,  specially ",
                "愛": "  love,  affection,  favourite ",
                "飛": "と ヒ fly",
                "完": "カン  perfect,  completion,  end ",
                "選": "えら セン choose, elect",
                "養": "ヨウ リョウ ヤシナ. foster,  bring up,  rear,  develop,  nurture ",
                "型": "ケイ  かた -がた  mould,  type,  model ",
                "満": "み マン full",
                "協": "キョウ  co-,  cooperation ",
                "説": "と セツ、ゼイ explain, theory, opinion",
                "令": "レ  orders,  ancient laws,  command,  decree ",
                "議": "ギ discuss, legislative body, deliberation",
                "印": "イン  しるし -じるし しる.す  stamp,  seal,  mark,  imprint,  symbol,  emblem,  trademark,  evidence,  souvenir,  India ",
                "象": "ショウ ゾウ カタド.  elephant,  pattern after,  imitate,  image,  shape,  sign of the times  ",
                "観": "カン view",
                "種": "たね シュ variety, seed, type, kind",
                "笑": "わら  laugh ",
                "老": "おいる  old man,  old age,  grow old ",
                "清": "セイ ショウ シン キヨ.メ  きよ.い きよ.まる  pure,  purify,  cleanse,  exorcise,  Manchu dynasty ",
                "給": "たも  salary,  wage,  gift,  allow,  grant,  bestow on ",
                "費": "つい ヒ expense, spend, waste",
                "健": "ケン スコ.ヤ healthy,  health,  strength,  persistence ",
                "極": "キョク ゴク きわ.める きわ.まる きわ.まり きわ.み き.める -ぎ.め き.まる  poles,  settlement,  conclusion,  end,  highest rank,  electric poles,  very,  extremely,  most,  highly ",
                "節": "セツ セチ ノッ ふし -ぶし node,  season,  period,  occasion,  verse,  clause,  stanza,  honor,  joint,  knuckle,  knob,  knot,  tune,  melody ",
                "差": "さ サ difference",
                "刷": "サツ す.る -ず.り -ずり は.く  printing,  print ",
                "利": "き リ advantage, profit, be effective",
                "陸": "リク ロク オ  land,  six ",
                "末": "すえ マツ、バツ last part, end",
                "固": "コ  かた.める かた.まる かた.まり かた.い  harden,  set,  clot,  curdle ",
                "戦": "いくさ、たたか セン war, fight, battle",
                "害": "ガイ harm, damage",
                "努": "つと  toil,  diligent,  as much as possible ",
                "折": "り  fold,  break,  fracture,  bend,  yield,  submit ",
                "器": "キうつわ utensil,  vessel,  receptacle,  implement,  instrument,  ability,  container,  tool,  set ",
                "衣": "イ エ ころも きぬ -ぎ  garment,  clothes,  dressing ",
                "管": "カン ク  pipe,  tube,  wind instrument,  drunken talk ",
                "周": "シュウ マワ  circumference,  circuit,  lap ",
                "松": "ショウ マ pine tree ",
                "隊": "タイ regiment,  party,  company,  squad ",
                "仲": "チュウ ナ  go-between,  relationship ",
                "貯": "チョ  た.める たくわ.える  savings,  store,  lay in,  keep,  wear mustache ",
                "兆": "チョウ きざ.す きざ.し  portent,  10**12,  trillion,  sign,  omen,  symptoms ",
                "典": "テン デ code,  ceremony,  law,  rule ",
                "梅": "バイ うめ plum ",
                "堂": "どう public chamber,  hall ",
                "達": "たち タツ attain, suffix for plural",
                "単": " タン single",
                "低": "テイ  ひく.い ひく.める ひく.まる   lower,  short,  humble ",
                "以": "い by means of,   because,   in view of,   compared with ",
                "変": "か ヘン change, abnormal",
                "失": "うしな シツ lose, slip",
                "無": "な ム、ブ without, nothing",
                "連": "つら、つ レン link, in succession, group, accompaniment",
                "的": "まと テキ target, adjectival suffix",
                "必": "かなら ヒツ without failure, surely",
                "要": "い、かなめ ヨウ important, summarize, require",
                "伝": "つた デン transmit",
                "初": "はじ、はつ、うい、そ ショ first",
                "最": "もっと サイ most",
                "祝": "シュク シュウ イワ.  celebrate,  congratulate ",
                "料": "-りょう fee,  materials ",
                "働": "はたら ドウ work",
                "覚": "める さと  memorize,  learn,  remember,  awake,  sober up ",
                "席": "セキ seat",
                "熱": "ネツ アツ.  heat,  temperature,  fever,  mania,  passion ",
                "結": "ケツ ケチ ユ.ワエ むす.ぶ ゆ.う tie,  bind,  contract,  join,  organize,  do up hair,  fasten ",
                "飯": "めし meal,  boiled rice ",
                "喜": "よろこ  rejoice,  take pleasure in ",
                "告": "つ コク notify, tell, inform",
                "未": "だ ひつじ  un- ,  not yet,  hitherto,  still,  even now,  sign of the ram,  1 - 3 PM ",
                "希": "キ ケ マ  hope,  beg,  request,  pray,  beseech,  Greece,  dilute acid ,  rare,  few,  phenomenal ",
                "課": "カ  chapter,  lesson,  section,  department,  division,  counter for chapters of a book  ",
                "続": "つづ ゾク continue",
                "望": "のぞ ボウ、モウ hope, desire, look after",
                "成": "な セイ、ジョウ form, achieve",
                "功": "コウ ク イサ achievement,  merits,  success,  honor,  credit ",
                "約": "ヤク promise, contract, approximately",
                "束": "ねる  bundle,  sheaf,  ream,  tie in bundles,  govern,  manage,  control ",
                "機": "はた キ machine, opportunity",
                "共": "とも キョウ joint, together, both",
                "静": "まる  quiet ",
                "芸": "ゲイ ウン ワ  う.える のり  technique,  art,  craft,  performance,  acting,  trick,  stunt ",
                "景": "ケイ scene",
                "求": "もと キュウ seek, demand",
                "位": "くらい イ rank, position",
                "置": "お チ place, put",
                "参": "まい サン participate, visit a holy place",
                "果": "は カ fruit",
                "賞": "ショウ  ほ.める  prize,  reward,  praise ",
                "便": "たよ  convenience ",
                "材": "ザ  lumber,  log,  timber,  wood,  talent ",
                "残": "のこ ザン remain, ruthless",
                "念": "n/a ネン thought, desire, attention",
                "側": "かわ ソク side",
                "敗": "やぶ ハイ be defeated",
                "量": "リョウ ハカ  quantity,  measure,  weight,  amount,  consider,  estimate,  surmise ",
                "各": "カク オノオ  each,  every,  either ",
                "競": "キョウ ケイ セ.  きそ.う  emulate,  compete with,  bid,  sell at auction,  bout,  contest,  race ",
                "争": "あらそ ソウ contend, dispute, argue",
                "得": "え、う トク acquire, gain, profit",
                "昨": "サク yesterday, last",
                "良": "よ、い リョウ good",
                "散": "らかる  scatter,  disperse, spend,  squander ",
                "訓": "クン キン クン.ズ  おし.える よ.む  instruction,  Japanese character reading,  explanation,  read ",
                "勇": "ユウ イサ.  courage,  cheer up,  be in high spirits,  bravery,  heroism ",
                "案": "アン つくえ plan,  suggestion,  draft,  ponder,  fear,  proposition,  idea,  expectation,  bill,  worry ",
                "徒": "いたずら  junior,  emptiness,  vanity,  futility,  uselessness,  ephemeral thing,  gang,  set,  party,  people ",
                "改": "カイ  あらた.める あらた.まる  reformation,  change,  modify,  mend,  renew,  examine,  inspect,  search ",
                "漁": "ギョ リョウ  あさ.る  fishing,  fishery ",
                "街": "ガイ カイ マ boulevard,  street,  town ",
                "停": "テイ  と.める と.まる  halt,  stopping ",
                "府": "  borough,  urban prefecture,  govt office,  representative body,  storehouse ",
                "産": "う、うぶ サン give birth, produce",
                "省": "セイ ショウ ハブ.  かえり.みる  focus,  government ministry,  conserve ",
                "輪": "リン  wheel,  ring,  circle,  link,  loop,  counter for wheels and flowers ",
                "毒": "ドク  poison,  virus,  venom,  germ,  harm,  injury,  spite ",
                "康": "コ ease,  peace ",
                "積": "つ セキ accumulate",
                "脈": "ミャク すじ vein,  pulse,  hope ",
                "氏": "シ うじ -うじ family name,  surname,  clan ",
                "欠": "あくび  lack,  gap,  fail ",
                "菜": "サイ  vegetable,  side dish,  greens ",
                "牧": "ボク マ breed,  care for,  shepherd,  feed,  pasture ",
                "民": "たみ ミン people",
                "殺": "ころ サツ、サイ、セツ kill",
                "標": "ヒョウ シルしるべ signpost,  seal,  mark,  stamp,  imprint,  symbol,  emblem,  trademark,  evidence,  souvenir,  target ",
                "労": "ロウ labor, toil",
                "囲": "イ  かこ.む かこ.う かこ.い  surround,  besiege,  store,  paling,  enclosure,  encircle,  preserve,  keep ",
                "焼": "ショウ ヤ.ケ  や.く や.き や.き- -や.き  bake,  burning "
            },
            "Grade5": {
                "述": "ジュツ  の.べる  mention,  state,  speak,  relate ",
                "序": "ジョ ツイ つい.で preface,  beginning,  order,  precedence,  occasion,  chance,  incidentally ",
                "織": "ショク シキ - オ. お.る お.り おり -おり weave,  fabric ",
                "税": "ゼ  tax,  duty ",
                "版": "ハン  printing block,  printing plate,  edition,  impression,  label ",
                "貿": "ボウ  trade,  exchange ",
                "務": "つと ム duty, work, serve",
                "綿": "メン ワ  cotton ",
                "余": "あま  too much,  myself,  surplus,  other,  remainder ",
                "略": "リャク ほぼ おか.す おさ.める はかりごと はか.る はぶ.く りゃく.す りゃく.する  abbreviation,  omission,  outline,  shorten,  capture,  plunder ",
                "授": "ジュ さず.ける さず.かる impart,  instruct,  grant,  confer ",
                "貸": "かし lend, loan ",
                "準": "ジュン じゅん.じる じゅん.ずる なぞら.える のり ひと.しい みずもり  semi-,  correspond to,  proportionate to,  conform,  imitate ",
                "備": "そな ビ provide, furnish",
                "規": "キ regulation, measure",
                "則": "ソク ノット  rule,  follow,  based on,  model after ",
                "許": "ゆるす  permit,  approve ",
                "識": "シキ discriminate, knowledge, know",
                "招": "まね  beckon,  invite,  summon,  engage ",
                "講": "コウ  lecture,  club,  association ",
                "義": "righteousness,  justice,  morality,  honor,  loyalty,  meaning ",
                "基": "キ モト もと fundamentals,  radical chem ,  counter for machines,  foundation ",
                "厚": "コウ ア  あつ.い  thick,  heavy,  rich,  kind,  cordial,  brazen,  shameless ",
                "績": "セ  exploits,  unreeling cocoons ",
                "増": "ま、ふ ゾウ increase",
                "現": "あらわ ゲン actual, appear, present",
                "在": "あ ザイ be, exist",
                "夢": "い  dream,  vision,  illusion ",
                "賛": "える  approve,  praise,  title or inscription on picture,  assist,  agree with ",
                "解": "と カイ、ゲ take apart, dissolve, clarify, untie",
                "団": "ダン トン  かたまり まる.い  group,  association ",
                "弁": "ベン ヘン アラソ. わきま.える わ.ける はなびら valve,  petal,  braid,  speech,  dialect,  discrimination,  dispose of,  distinguish ",
                "護": "ゴ マモ. safeguard,  protect",
                "条": "ジョウ チョウ デキ えだ すじ article,  clause,  item,  stripe,  streak ",
                "程": "ほど テイ extent, established form, degree",
                "容": "ヨウ appearance, contain",
                "張": "チョウ -バ. は.る -は.り lengthen,  counter for bows & stringed instruments,  stretch,  spread,  put up tent  ",
                "技": "ギ  わざ  skill,  art,  craft,  ability,  feat,  performance,  vocation,  arts ",
                "能": "ノウ ability, function, Noh play",
                "非": "ヒ is not, mistake, non-, un-",
                "常": "つね、とこ ジョウ normal, regular, ever-, always",
                "舎": "シャ セキ ヤド. cottage,  inn,  hut,  house,  mansion ",
                "預": "ヨ  あず.ける あず.かる  deposit,  custody,  leave with,  entrust to ",
                "断": "た、ことわ ダン cut off, decision, refuse",
                "謝": "シャ アヤマ. apologize,  thank,  refuse ",
                "提": "テイ チョウ ダイ さ.げるpropose,  take along,  carry in hand ",
                "耕": "コウ タガヤ.  till,  plow,  cultivate ",
                "営": "エイ  いとな.む いとな.み   occupation,  camp,  perform,  build,  conduct business  ",
                "貧": "まず  poverty,  poor ",
                "責": "める blame,  condemn,  censure ",
                "益": "エキ ヤク マ. benefit,  gain,  profit,  advantage ",
                "独": "ドク トク ヒト. single,  alone,  spontaneously,  Germany ",
                "輸": "ユ シュ  transport,  send,  be inferior ",
                "燃": "ネン  も.える も.やす も.す  burn,  blaze,  glow ",
                "適": "かな  suitable,  occasional,  rare,  qualified,  capable ",
                "精": "/  refined,  ghost,  fairy,  energy,  vitality,  semen,  excellence ",
                "導": "ドウ ミチビ.  guidance,  leading,  conduct,  usher ",
                "混": "コン  ま.じる -ま.じり ま.ざる ま.ぜる こ.む  mix,  blend,  confuse ",
                "個": "コ カ  individual,  counter for articles and military units ",
                "演": "エン perform",
                "居": "るい  reside,  to be,  exist,  live with ",
                "移": "イ  うつ.る うつ.す  shift,  move,  change,  drift,  catch cold,  fire ,  pass into ",
                "統": "トウ ホビ. す.べる overall,  relationship,  ruling,  governing ",
                "肥": "ヒ フト. こ.える こえ こ.やす こ.やし fertilizer,  get fat,  fertile,  manure,  pamper ",
                "豊": "ホウ ブ ト  ゆた.か  bountiful,  excellent,  rich ",
                "衛": "エイ defense,  protection ",
                "迷": "まよ  astray,  be perplexed,  in doubt,  lost,  err,  illusion ",
                "編": "ヘン  あ.む -あ.み  compilation,  knit,  plait,  braid,  twist,  editing,  completed poem,  part of a book ",
                "永": "エイ ナガ.  eternity,  long,  lengthy ",
                "往": "オウ ユ. い.く いにしえ さき.に journey,  chase away,  let go,  going,  travel ",
                "鉱": "コウ あらがね  mineral,  ore ",
                "妻": "/  wife,  spouse ",
                "採": "サイ  と.る  pick,  take,  fetch,  take up ",
                "財": "ザイ、サイ wealth, property, money",
                "雑": "まじる  miscellaneous ",
                "師": "n/a シ master, teacher",
                "枝": "シ  bough,  branch,  twig,  limb ",
                "飼": "シ カ. domesticate,  raise,  keep,  feed ",
                "示": "しめ シ、ジ show",
                "舌": "ゼツ した tongue,  reed,  clapper ",
                "銭": "セン ゼン ぜに すき coin,  .01 yen,  money ",
                "祖": "/  ancestor,  pioneer,  founder ",
                "測": "ソク  はか.る  fathom,  plan,  scheme,  measure ",
                "属": "ゾク ショク ヤカ さかん つく belong,  genus,  subordinate official,  affiliated ",
                "損": "ソン そこ.なう そこな.う -そこ.なう そこ.ねる -そこ.ねる  damage,  loss,  disadvantage,  hurt,  injure ",
                "退": "しりぞ タイ retreat,drive away, repel",
                "銅": "ドウ あかがね  copper ",
                "徳": "ト benevolence,  virtue,  goodness,  commanding respect ",
                "犯": "おかす  crime,  sin,  offense ",
                "俵": "ヒョウ たわら bag,  bale,  sack,  counter for bags ",
                "婦": "/  lady,  woman,  wife,  bride ",
                "富": "む  wealth,  enrich,  abundant ",
                "武": "ブ ム タケ.  warrior,  military,  chivalry,  arms ",
                "複": "フク  duplicate,  double,  compound,  multiple ",
                "墓": "ボ はか grave,  tomb ",
                "報": "むく ホウ inform, require, news, report, reward",
                "防": "ボウ フセ.  ward off,  defend,  protect,  resist ",
                "領": "リョウ  jurisdiction,  dominion,  territory,  fief,  reign ",
                "質": "しつ substance,  quality,  matter,  temperament ",
                "経": "へ、た ケイ、キョウ pass through, manage, sutra",
                "接": "セツ ショウ  つ.ぐ  touch,  contact,  adjoin,  piece together ",
                "寄": "/  draw near,  stop in,  bring near,  gather,  collect,  send,  forward ",
                "職": "ショク employment",
                "件": "ケン matter",
                "査": "サ  investigate ",
                "際": "きわ サイ verge, occasion, edge",
                "構": "かま コウ construct, mind",
                "情": "なさ ジョウ、セイ emotion, actual conditions",
                "術": "ジュツ practical art, technique",
                "留": "まる  detain,  fasten,  halt,  stop ",
                "興": "コウ キョウ オコ. おこ.る entertain,  revive,  retrieve,  interest,  pleasure ",
                "像": "ゾ  statue,  picture,  image,  figure,  portrait ",
                "勢": "セイ ゼイ ハズ  いきお.い  forces,  energy,  military strength ",
                "性": "セイ、ショウ nature, sex, -ity, gender",
                "慣": "らす  accustomed,  get used to,  become experienced ",
                "復": "フク  また  restore,  return to,  revert,  resume ",
                "限": "かぎ ゲン limit",
                "確": "たし カク certain, verify",
                "保": "ホ ホウ タモ. protect,  guarantee,  keep,  preserve,  sustain,  support ",
                "証": "ショウ あかし evidence,  proof,  certificate",
                "比": "ヒ クラ.ベ  compare,  race,  ratio,  Philipines ",
                "素": "ソ スもと elementary,  principle,  naked,  uncovered ",
                "可": "カ  - able, approve",
                "句": "phrase,  clause,  sentence,  passage,  paragraph,  counter for haiku ",
                "応": "オウ ヨウ -ノウ コタ.エ あた.る まさにapply,  answer,  yes,  OK,  reply,  accept ",
                "制": "セイ system, control",
                "評": "ヒョウ evaluate,  criticism,  comment ",
                "判": "ハン、バン stamp, seal, judge",
                "率": "ソツ リツ シュツ ひき.いる ratio,  rate,  proportion,  %,  coefficient,  factor ",
                "価": "カ ケあたい value,  price ",
                "承": "ショウ ウ.ケ  うけたまわ.る  acquiesce,  hear,  listen to,  be informed,  receive ",
                "敵": "テキ かたき かな.う enemy,  foe,  opponent ",
                "支": "ささ シ branch, support",
                "似": "る  becoming,  resemble,  counterfeit,  imitate,  suitable ",
                "険": "しい  precipitous,  inaccessible place,  impregnable position,  steep,  place,  sharp eyes ",
                "状": "ジョウ form, condition, letter, circumstances"
            },
            "Grade6": {
                "宇": "  leaves,  roof,  house,  heaven ",
                "沿": "エン そ.う -ぞ.い run alongside,  follow along,  run along,  lie along ",
                "閣": "カク tower,  tall building,  palace ",
                "株": "シュ かぶ stocks,  stump,  shares,  stock,  counter for small plants ",
                "干": "カン ヒ. ほ.す ほ.し- -ぼ.し  dry,  parch ",
                "巻": "カン ケン  ま.く まき ま.き  scroll,  volume,  book,  part,  roll up,  wind up,  tie,  coil,  counter for texts or book scrolls  ",
                "看": "カン み.る watch over,  see ",
                "危": "あぶ  dangerous,  fear,  uneasy ",
                "揮": "キ ふる.う brandish,  wave,  wag,  swing,  shake ",
                "貴": "キ トウト. たっと.い とうと.い たっと.ぶ precious,  value,  prize,  esteem,  honor ",
                "郷": "キョウ ゴウ サ home town,  village,  native place,  district ",
                "警": "ケイ guard against, warn, admonish",
                "穴": "ケツ ア hole,  aperture,  slit,  cave,  den ",
                "憲": "ケ constitution,  law ",
                "源": "ゲン ミナモ source,  origin ",
                "己": "コ キ ツチノ おのれ self,  snake,  serpent ",
                "后": "コウ ゴ きさき empress,  queen,  after,  behind,  back,  later ",
                "紅": "コウ ク アカ. べに くれない  crimson,  deep red ",
                "鋼": "コウ はがね steel ",
                "刻": "むきざ  engrave,  cut fine,  chop,  hash,  mince,  time,  carving ",
                "穀": "コ cereals,  grain ",
                "砂": "サ シャ ス  sand ",
                "裁": "サイ た.つ さば.く tailor,  judge,  decision,  cut out pattern ",
                "策": "サク scheme,  plan,  policy,  step,  means ",
                "蚕": "サン テン かいこ こ silkworm ",
                "至": "シ イタ. climax,  arrive,  proceed,  reach,  attain,  result in ",
                "姿": "シ スガ figure,  form,  shape ",
                "視": "シ ミ. inspection,  regard as,  see,  look at",
                "磁": "ジ magnet,  porcelain ",
                "樹": "ジュ timber trees,  wood ",
                "宗": "シュウ ソウ ム religion,  sect,  denomination,  main point,  origin,  essence ",
                "就": "シュウ ジュ ツ.ケ つ.く concerning,  settle,  take position,  depart,  study,  per ",
                "衆": "シュウ シュ おお.い masses,  great numbers,  multitude,  populace ",
                "縦": "ジュウ たて vertical,  length,  height,  self-indulgent,  wayward ",
                "縮": "シュクちぢ.む ちぢ.まる ちぢ.める ちぢ.れる ちぢ.らす shrink,  contract,  shrivel,  wrinkle,  reduce ",
                "処": "ショ deal with, treat",
                "署": "ショ  signature,  govt office,  police station ",
                "諸": "ショ  もろ  various,  many,  several,  together ",
                "傷": "ショウ きず いた.む いた.める wound,  hurt,  injure,  impair,  pain,  injury,  cut,  gash,  scar,  weak point ",
                "蒸": "ジョウ セイ む.す む.れる む.らす  steam,  heat,  sultry,  foment,  get musty ",
                "針": "シン ハ  needle,  pin,  staple,  stinger ",
                "仁": "ジン ニ ニ humanity,  virtue,  benevolence,  charity,  man,  kernel ",
                "垂": "た.れ -た.れ droop,  suspend,  hang,  slouch ",
                "寸": "ス measurement,  foot,  10 ",
                "閉": "まる  closed,  shut ",
                "盛": "セイ ジョウ サカ. も.る さか.る boom,  prosper,  copulate ",
                "誠": "セイ マコ sincerity,  admonish,  warn,  prohibit,  truth,  fidelity ",
                "宣": "セン ノタマ.ワのたむ.う proclaim,  say,  announce ",
                "泉": "セン イズ  spring,  fountain ",
                "染": "セン -シ.メ そ.める -ぞ.め -ぞめ そ.まる し.みる -じ.みる し.み dye,  color,  paint,  stain,  print ",
                "善": "ゼン ヨシ.トス よ.い い.い よ.く virtuous,  good,  goodness ",
                "奏": "ソウ カナ.デ play music,  speak to a ruler,  complete ",
                "層": "ソウ  stratum,  social class,  layer,  story,  floor ",
                "操": "ソウ サン アヤツ. みさお maneuver,  manipulate,  operate,  steer,  chastity,  virginity,  fidelity ",
                "班": "ハン squad,  corps,  unit,  group ",
                "秘": "ヒ ひ.める ひそ.か かく.す secret,  conceal ",
                "腹": "はら  abdomen,  belly,  stomach ",
                "奮": "フン ふる.う stirred up,  be invigorated,  flourish ",
                "陛": "ヘイ highness,  steps of throne  ",
                "補": "ホ  おぎな.う  supplement,  supply,  make good,  offset,  compensate,  assistant,  learner ",
                "宝": "ホウ タカ  treasure,  wealth,  valuables ",
                "棒": "ボウ  rod,  stick,  cane,  pole,  club,  line ",
                "幕": "マク バク curtain,  bunting,  act of play ",
                "密": "ミツ ひそ.か secrecy,  density pop ,  minuteness,  carefulness ",
                "翌": "ヨク  the following,  next ",
                "卵": "ラン たまご  egg,  ovum,  spawn,  roe ",
                "覧": "ラン み.る perusal,  see ",
                "裏": "リ うら  back,  amidst,  in,  reverse,  inside,  palm,  sole,  rear,  lining,  wrong side ",
                "臨": "リン ノゾ. look to,  face,  meet,  confront,  attend,  call on ",
                "朗": "ロウ アキ.ラ ほが.らか melodious,  clear,  bright,  serene,  cheerful ",
                "痛": "める  pain,  hurt,  damage,  bruise ",
                "宅": "タク house, residence",
                "論": "ロン argue, theory, thesis",
                "律": "リツ リチ レ  rhythm,  law,  regulation,  gauge,  control ",
                "尊": "ソン トウト.  たっと.い とうと.い たっと.ぶ  revered,  valuable,  precious,  noble,  exalted ",
                "敬": "ケイ キョウ ウヤマ.  awe,  respect,  honor,  revere ",
                "延": "エン ノ.バ  の.びる の.べる の.べ  prolong,  stretching ",
                "届": "カイ  とど.ける -とど.け とど.く  deliver,  reach,  arrive,  report,  notify,  forward ",
                "暮": "れる  livelihood,  make a living,  spend time ",
                "誤": "あやま  mistake,  err,  do wrong,  mislead ",
                "片": "ヘン  かた- かた  one-sided,  leaf,  sheet ",
                "冊": "サツ サク ふみ  tome,  counter for books,  volume ",
                "拡": "カク コウ ひろ.がる ひろ.げる ひろ.める broaden,  extend,  expand,  enlarge ",
                "枚": "マイ バ  sheet of...,  counter for flat thin objects or sheets ",
                "創": "ソウ ショウ ケズ.シケ つく.る はじ.める きず genesis,  wound,  injury,  hurt,  start,  originate ",
                "認": "みと ニン recognize",
                "忠": "チュ loyalty,  fidelity,  faithfulness ",
                "座": "すわ ザ seat, sit",
                "劇": "ゲキ  drama,  play ",
                "尺": "シャ shaku,  Japanese foot,  measure,  scale,  rule ",
                "収": "おさ シュウ take in, obtain, collect",
                "亡": "ぶ ほろ  deceased,  the late,  dying,  perish ",
                "吸": "すう  suck,  imbibe,  inhale,  sip ",
                "筋": "キン すじ muscle,  sinew,  tendon,  fiber,  plot,  plan,  descent ",
                "純": "ジュ  genuine,  purity,  innocence,  net profit  ",
                "域": "イキ  range,  region,  limits,  stage,  level ",
                "灰": "カイ はい  ashes,  puckery juice,  cremate ",
                "割": "わ、わり、さ カツ divide, split",
                "絹": "きぬ silk ",
                "孝": "コウ filial piety",
                "装": "ソウ ショウ  よそお.う よそお.い  attire,  dress,  pretend,  disguise,  profess ",
                "臓": "ゾウ  はらわた  entrails,  viscera,  bowels ",
                "誕": "タン nativity,  be born,  declension,  lie,  be arbitrary ",
                "暖": "ダン ノン あたた.か あたた.かい あたた.まる あたた.める warmth ",
                "宙": "チュ mid-air,  air,  space,  sky,  memorization,  interval of time ",
                "庁": "チョウ テイ  やくしょ  government office ",
                "頂": "くいただき  place on the head,  receive,  top of head,  top,  summit,  peak ",
                "潮": "チョウ ウシ しお tide,  salt water,  opportunity ",
                "賃": "チ fare,  fee,  hire,  rent,  wages,  charge ",
                "討": "トウ う.つ chastise,  attack,  defeat,  destroy,  conquer ",
                "党": "トウ  なかま むら  party,  faction,  clique ",
                "糖": "トウ sugar ",
                "納": "ノウ ナッ ナ ナン トウ オサ.マ おさ.める -おさ.める settlement,  obtain,  reap,  pay,  supply,  store ",
                "脳": "ノウ ドウ  のうずる  brain,  memory ",
                "拝": "ハイ おが.む おろが.む  worship,  adore,  pray to  ",
                "肺": "ハイ lungs ",
                "俳": "ハイ haiku,  actor ",
                "盟": "メイ alliance,  oath ",
                "模": "モ imitation,  copy,  mock ",
                "郵": "ユウ  mail,  stagecoach stop ",
                "幼": "ヨウ オサナ.  infancy,  childhood ",
                "映": "えい reflect,  reflection,  projection ",
                "簡": "カン  simplicity,  brevity ",
                "困": "こま  quandary,  become distressed,  annoyed ",
                "背": "そむける  stature,  height,  back,  behind ",
                "若": "わか、も ジャク、ニャク young",
                "探": "るさが  grope,  search,  look for ",
                "済": "す サイ settle, relieve, finish",
                "難": "かた、むずか ナン difficult, disaster",
                "勤": "いそしむ  diligence,  become employed,  serve ",
                "机": "キ つくえ  desk,  table ",
                "欲": "しい  longing,  covetousness,  greed,  passion,  desire,  craving ",
                "供": "そな、とも キョウ、ク offer, accompany"
            }
        }
    }
}
function Hiragana(){
    var Preview = document.getElementById("Preview");
    Preview.innerHTML = JSON.stringify(alphabet.Hiragana,undefined,4)
}
function Katakana(){
    var Preview = document.getElementById("Preview");
    Preview.innerHTML = JSON.stringify(alphabet.Katakana,undefined,4)
}
function Kanji_JLPT(){
    var Preview = document.getElementById("Preview");
    Preview.innerHTML = JSON.stringify(alphabet.Kanji.JLPT,undefined,4)
}
function Kanji_GRADES(){
    var Preview = document.getElementById("Preview");
    Preview.innerHTML = JSON.stringify(alphabet.Kanji.GRADES,undefined,4)
}
export default testApiForm
