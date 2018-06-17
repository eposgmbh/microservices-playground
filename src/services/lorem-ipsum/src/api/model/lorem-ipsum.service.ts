import { EOL } from 'os';

export class LoremIpsumService {
    private static paragraphs = [
        'Lorem ipsum dolor sit amet, aliquam felis scelerisque rutrum, tristique pellentesque aenean libero, erat donec pede. Maecenas mus, aenean posuere sint tellus cursus quo facilisi, pellentesque velit nec lectus et, rutrum vestibulum dolor, consequat bibendum suspendisse et ultrices. Sodales curabitur ligula sit turpis, mauris ligula dui parturient eget vestibulum tortor, morbi malesuada, elit massa tellus id justo. Sed aliquam quis elit nulla quam. Sem nunc, ipsum tellus vestibulum, lorem fugit velit. Ornare molestie aliquam nonummy eros pulvinar tortor, fermentum euismod nam sed, rhoncus elementum fringilla sodales, molestie consectetuer consectetuer et eget, arcu sit pede ullamcorper proin debitis morbi. Neque quisque. Reiciendis nunc suscipit, erat tempus mi elit, quis venenatis mi sit diam neque montes. Eu quam, sed facilis dolor ultricies viverra, enim in cras malesuada odio, quis mattis ac dui facilisis nec, enim mauris ut lacinia amet scelerisque diam.',
        'Id montes pellentesque mus vitae auctor sollicitudin. Duis luctus posuere augue a vel, ullamcorper pellentesque, fusce in pharetra ornare arcu modi pellentesque, sollicitudin pede amet. Et sed in integer amet nulla, nec pellentesque ultricies consequat, egestas aenean in voluptatibus congue diam, vehicula dictumst tempus imperdiet asperiores interdum. A integer porttitor diam, amet hymenaeos velit consectetuer justo, eu donec vitae vel, lacus urna enim nec dui lobortis nascetur. At maecenas leo quia quisque nulla felis, magna cursus, erat cras ut amet interdum, vitae fermentum metus, integer nulla dolor urna nam eu luctus. Nunc suspendisse, commodi ut convallis lacinia, leo pede integer amet metus, est erat amet in integer lobortis pretium, eget nec mauris purus elit at. Vitae vitae odio suspendisse in a, lobortis est. Minima vestibulum, id integer eros posuere, ut imperdiet quisque maecenas vitae eros, elit eros, imperdiet tincidunt nulla quam vestibulum tellus. Ornare venenatis luctus fringilla proin. Curae ut, odio at laoreet lorem pretium.',
        'Amet placerat eget dignissim, diam est vehicula pulvinar, a sed. Pede wisi vulputate. Urna dolor molestie pellentesque nulla aliquet, mauris leo luctus ut vestibulum arcu auctor. Sollicitudin at amet sed, eros placerat ut, erat neque dis integer, sed risus commodo dapibus dui blandit. Vitae urna ipsum non lectus, nullam tincidunt eos egestas tristique eget. Est orci amet eget sit dolor, inventore tempus elit odio.',
        'Nisl in nulla, leo id sollicitudin, ac vestibulum, magna sociosqu taciti feugiat leo suspendisse tincidunt. Sit nunc nunc vel consequatur, etiam quis in sodales natoque, porttitor vel amet facilisis ut ac. Odio vestibulum massa massa pede, vestibulum ultricies auctor, lectus eleifend sed neque consequat, scelerisque ac sem quam convallis at consectetuer. Integer sed euismod praesent tortor sed, maecenas ut, sed lectus. Wisi non dolor at volutpat, sit vel varius non libero vitae. Posuere suspendisse eu elementum nulla enim, lacus rem sed suscipit phasellus, sit mollis cras blandit sed, wisi nulla, consectetuer fringilla etiam ut in magna. Imperdiet auctor tellus. Nec metus. Volutpat non magna blandit, malesuada lorem nunc per sollicitudin, nibh ultricies nam etiam tempor. Venenatis porttitor magna tortor mauris id euismod, placerat hendrerit non tellus ultrices a. Mauris erat, aliquam ut, magna vel ut, suspendisse at commodo tortor libero vitae, in odio nisl aliquam in ligula neque. Eleifend sed gravida at inceptos in, augue eu condimentum.',
        'Vivamus elit in ante ut. Dapibus aliquam mauris nam pharetra. Rutrum nascetur vitae amet nec vulputate, eu etiam mi sed vitae, nullam leo ligula sem mauris. A nullam pellentesque volutpat bibendum fermentum, quam velit excepteur ac a, consectetuer tellus amet, erat nulla ultricies morbi. Libero non, pede arcu, hymenaeos id, non fusce in mi, neque sed. Maecenas purus scelerisque sollicitudin, velit enim, elementum leo sed, tristique feugiat morbi et, neque ut metus odio. Dapibus accumsan, parturient tellus nec blandit sit. Lectus lorem nonummy dolor tempor pharetra, tincidunt blandit optio rutrum, lorem massa felis lectus, mauris urna justo mattis. Ullamcorper aenean lobortis varius hac ut, augue arcu aliquam augue sed purus vel, ut quam leo mollis. Commodo consectetuer aenean. Suspendisse non, laoreet cras rutrum, labore enim et nunc etiam, ac erat, amet non litora sodales eget wisi.',
        'Neque leo nunc pellentesque vulputate, amet elit. Sit leo blandit rhoncus est blandit at, vehicula a suspendisse felis eu arcu, cum amet sed, massa adipiscing orci turpis donec ligula, ut ut. Condimentum adipiscing vulputate laoreet pretium felis in, cras feugiat nunc, neque phasellus erat erat tristique, hymenaeos eget aenean ut in sed mollis, odio in ultrices vitae id urna etiam. Sed pulvinar pede. Libero id purus, hendrerit justo sit, venenatis feugiat quam bibendum venenatis augue, recusandae curabitur. Faucibus pulvinar duis mauris, morbi at tortor vitae quam, aliquam lacinia. Sollicitudin odio nunc hac augue, placerat platea sit, nunc faucibus sed lobortis nam, ornare praesent vivamus nulla, etiam dis sit pretium. Gravida curabitur eget mattis volutpat, pede non, sed dui. Sem erat non.',
        'Urna vestibulum torquent sociosqu, gravida erat enim ut malesuada eu, ultricies vulputate. In pellentesque, ut lectus morbi placerat molestie, lorem magna mauris porttitor lorem metus faucibus, sem et tempor nullam pellentesque. Nulla posuere sit eget metus ligula, vitae consequat a duis diam amet diam, eros neque interdum, sed in amet. Pede odio hendrerit eget pellentesque vestibulum torquent, tincidunt dolor praesent wisi auctor, temporibus enim phasellus lorem. Pretium ut sagittis pede eleifend, et pellentesque ullamcorper ullamcorper ut ad fugiat, consectetuer tellus aliquam, accumsan malesuada cras id, ac odio vestibulum vivamus euismod duis. Risus lectus a velit massa, ornare fusce cillum nulla mollis justo suscipit, magna quam pellentesque.',
        'Vitae enim in velit, porta et magna est nulla a, consectetuer aliquet, sit ac. Proin sed, lorem pulvinar donec velit. Pellentesque quam dolor. Suspendisse leo, vestibulum dictumst nunc a egestas. Volutpat arcu sed quam turpis nec, in phasellus eget vulputate sollicitudin cursus felis, sit adipiscing condimentum lacus ut quam nunc, adipiscing quia. Nostra pellentesque libero nam magna lacinia arcu, rutrum ligula urna hac auctor, dictum nonummy in nibh rhoncus sollicitudin, enim dolor egestas ad dictum, nullam lorem elit tristique dolor aliquam. Consectetuer scelerisque massa, sollicitudin nisl orci nunc, nibh nulla, vestibulum taciti ut tellus suspendisse vestibulum tristique, fames arcu lacinia commodo. Fringilla varius. Nunc sed scelerisque, porttitor arcu massa nonummy id, tempus ut elementum ultricies nec, arcu lorem quisque eget class eleifend. Nam lobortis ante, integer nostra quis mus lacus, interdum et in integer non turpis, accumsan non eros netus odio, quam praesent est quam suscipit.',
        'Et accumsan a, torquent etiam fusce pellentesque ipsum placerat non. Felis leo, cumque nec. Sodales luctus rhoncus elit a semper, vivamus felis tempus vitae. Sed at integer, dolor viverra vel lorem, consectetuer velit scelerisque, eget quam dui nullam donec sit arcu, ullamcorper hac augue lacus fames lobortis neque. Porta a aenean felis ultrices. Quis risus. Elit sed elit phasellus. Egestas hac auctor, risus molestie labore fusce lectus id tristique. Nulla dui elementum sed ipsum, accumsan donec purus nunc dui amet, pellentesque sed vel, integer sem diam rhoncus duis.',
        'Nibh cursus metus tellus ac duis fermentum, cras in in sed sed dolor. Cursus feugiat cum laoreet lobortis non habitant, nec ante rhoncus enim. Donec nec lacus lacus. Condimentum integer libero proin non duis. Penatibus pede nunc nulla amet ac, ut in lacus, quis augue tortor in dolor, vestibulum congue maecenas aliquam magnis. Fermentum facilisi massa at ornare, eget at aut, conubia facilisis, eros non, magna lacus sit. Venenatis gravida nulla non id egestas iaculis, eget cras. Hac sit phasellus imperdiet vivamus molestie, integer magna vestibulum at libero cum mauris, neque voluptates ligula imperdiet. Quis amet in adipiscing vestibulum et, lorem risus erat, rhoncus odio erat ut.',
        'In proin, sit phasellus, dolor mauris orci lobortis, vel varius sodales lobortis nunc odio aliquam, consectetuer tellus lectus. Consequat euismod etiam. Velit cum dui magna quisque nulla, varius convallis ut a mattis, donec lorem etiam purus ultricies id est, elementum aliquam egestas aut massa tincidunt, arcu ut per urna dolor felis cras. Imperdiet sodales aliquam nibh nisi nam nunc, suspendisse vestibulum posuere erat aliquam hendrerit. Beatae tellus, fusce ac dolor quam dignissim pharetra.',
        'Mauris lorem hac, sodales interdum elit mauris magna erat, nulla faucibus purus ut, non diam suscipit consectetuer dui elementum, et enim eros. Quam ut, in elit felis suscipit nunc. Egestas lacus vitae elementum ornare sagittis. Luctus ipsum porta elit placerat nec, libero nulla in, duis ante venenatis, arcu congue leo. In velit eu facilisis magnis quam.',
        'Eget mauris animi semper, urna ipsum est lorem, volutpat quis a auctor ut. Libero sed semper nulla vitae vivamus ipsum, nibh eros ac a. Tempor convallis fusce volutpat lacus, ut et. Id malesuada pellentesque ut, massa hac penatibus, fusce vestibulum. Provident egestas, nec aenean dui vivamus aliquam lacinia, natoque ut turpis sapien nibh mattis. Odio vulputate, euismod sit, placerat ut. Condimentum in a elit, amet quisque ut lacinia lectus, sed dictum ligula ut purus. Tincidunt adipiscing dolor dapibus, nec donec at lacinia nullam. Sit commodo, orci at, quis nulla, posuere nunc placerat orci suspendisse nonummy. Nibh urna faucibus rerum interdum mauris convallis, elementum a aenean sapien malesuada mauris, facilisis quis nec in non accumsan, vestibulum nibh erat, ut mattis tristique duis. Interdum curabitur pretium odio pellentesque, ut sagittis proin tincidunt magna tellus suspendisse, dolor massa lectus dolor ipsum, ligula sem, mattis integer dui quis posuere eget sollicitudin.',
        'Odio tortor eu laoreet nunc, donec massa eget vivamus doloribus, eget varius rutrum neque tellus, nec urna lacus turpis lobortis consequat amet, dignissim nam rutrum eleifend. Integer arcu sed, vivamus sapien a ipsum, urna ipsum in purus odio, sagittis sodales ipsum maecenas facere a, feugiat sit tempor vel sodales ante vel. Morbi luctus eros suspendisse scelerisque, consectetuer pellentesque mi. Leo ut minima, nec sapien integer mi ac sed, arcu elit augue amet, imperdiet convallis enim ornare quis ipsum ut. Lorem semper in velit nullam montes enim.',
        'Mi aliquam odio scelerisque ligula, elementum donec vel. Interdum vel wisi dignissim, metus vulputate lorem malesuada vestibulum. Integer malesuada nibh tincidunt. Commodo suspendisse aliquam, non aliquet tempor, mauris aliquam vel morbi, maecenas lectus elit saepe sagittis condimentum vel, mauris integer diam. Mollis quis at pede integer lorem, vivamus nec tristique dapibus, etiam nec nec donec tellus lorem, nulla taciti imperdiet fringilla non nonummy nulla. Sed convallis vulputate faucibus, sed taciti ipsum sed nam mattis enim, ultrices tristique risus elit. Eget pede, volutpat libero non, eget cras pede non magna, auctor etiam fusce facilisi. Phasellus sapien, erat nisl sit et ipsum, lectus aliquet non consectetuer at lectus sed, auctor elit erat magna ac eget magna, ut massa quis condimentum porta. Eu aspernatur netus dui consequat congue vitae. Nulla non in sit, nullam bibendum urna, nulla turpis, et tincidunt vivamus venenatis. Leo cursus cras elit nec, ut dolor, duis donec morbi, proin urna pellentesque nunc ligula ut nunc, tellus adipiscing neque mauris urna at ipsum.',
        'Sem magna vulputate sed nec ipsum maecenas. Vestibulum nisl, class condimentum cras, donec ac elit penatibus neque cras, orci eros porttitor dolor risus. Ut porta convallis sed, donec lectus integer in nisl, laoreet gravida gravida erat. Fusce tempor, massa id aliquam nam tincidunt felis, integer elementum sed mollis amet suspendisse lorem, elit purus vitae et. Vitae quam, diam aliquam pulvinar dapibus, risus morbi leo sed mollis. Urna nibh morbi erat ante a, massa ornare, suscipit lectus et id, vel quis, platea lectus posuere. Adipiscing erat commodo, in arcu pede, velit odio diam aenean imperdiet risus non, urna sed scelerisque. Duis sodales nulla ut vivamus venenatis.',
        'Metus praesent suspendisse velit mi. Egestas leo sit purus, non lectus velit amet felis elit nibh, quis in ut nulla. Erat vel velit cras nulla, luctus sociis leo tellus id nunc lectus, ornare habitasse et ut nisl magnis, aenean curabitur, mollis volutpat eros consectetuer quis sem. Pulvinar diam lorem, enim ac, proin vel ante nullam tempus amet a, iaculis ut a ac. Leo vestibulum vel dui, arcu in eget quis ac accumsan. Aliquet neque porta, imperdiet in egestas eu, dolor cras laoreet ornare elementum dignissim at, mollis tristique, eu auctor vestibulum enim ultricies neque risus. Morbi amet pulvinar netus ut blandit fringilla. Proin enim vivamus vivamus, nonummy sodales tempus. Ullamcorper orci suspendisse turpis montes cursus, amet vivamus diam sollicitudin, et pellentesque velit venenatis. Cras diam arcu vestibulum, lobortis adipiscing vitae, laoreet quam.',
        'Eros phasellus et nibh vitae dolor ligula, erat gravida sollicitudin, diam magna risus porta, cursus semper. Elit eu suscipit ante vitae vel, gravida feugiat sodales rhoncus id magna venenatis, adipiscing velit elit eget sodales ligula curabitur, pariatur felis amet quis molestie nullam rhoncus. Sed odio a malesuada eros id sit, in non sem, aenean hendrerit vitae nulla phasellus lacus quia, non in, vitae vivamus sed nec suscipit et mi. Porttitor suscipit habitasse. Placerat vel, nam sit dicta, potenti eleifend. Hymenaeos donec, viverra cras. Non vehicula.',
        'Sapien pharetra pellentesque nullam assumenda condimentum nulla, vel arcu et mauris blandit, pellentesque est eget, bibendum ut tempus donec, ligula et nostra est volutpat. Sollicitudin mattis gravida posuere velit tincidunt, torquent amet id amet, mauris quis. Sem habitant quis quam habitant faucibus est, tortor non, quam cursus cras nam, consequat libero, a nibh pellentesque non. Wisi consectetur, ipsum pulvinar nam neque, vehicula ligula nascetur tellus, augue enim enim sollicitudin vitae non, massa gravida urna nullam egestas. Diam laoreet arcu diam, sit lectus. Nunc dolorem, non ultrices penatibus amet quisque ut. Dapibus proin in nullam pellentesque placerat, egestas non fermentum eros non sit. Sit at tellus quis ac, lectus cursus ad, hendrerit consectetuer. Sit eu ultrices, rhoncus venenatis lacinia curabitur fames nulla, arcu erat nulla itaque est, lacinia senectus arcu vestibulum. Sit eros, gravida venenatis pellentesque tempor nec iaculis vitae. Ut auctor ornare ultricies egestas eleifend, metus venenatis vel tristique, malesuada leo fusce ut. Erat iaculis vitae proin non donec cillum.',
        'Integer in varius parturient facilisi, a massa orci sed at, integer mauris quis, parturient sem laoreet amet habitant wisi et. Fringilla nam diam pretium pellentesque, lorem elit metus morbi convallis et lorem, auctor vehicula congue et cursus consectetuer, urna eu cras ac mattis parturient in. Sodales a interdum cras, aliquam facilisi risus pharetra amet gravida id. At pretium lectus, donec feugiat, aliquam quisque wisi cras ante porta leo, in quis volutpat. Fames a vestibulum conubia, dolor sed consequat ipsum lorem. Vehicula aliquam lectus scelerisque pretium id nec. Vehicula ligula et est enim, dignissim orci tincidunt lobortis, aenean vestibulum enim dolor.'
    ];

    get loremIpsum() {
        return LoremIpsumService.paragraphs[0];
    }

    getParagraphs(numParagraphs: number) {
        const maxParagraphs = LoremIpsumService.paragraphs.length;
        const theCount = Math.min(maxParagraphs, numParagraphs);
        let theResult = '';

        for (let theIndex = 0; theIndex < theCount; theIndex++) {
            theResult += LoremIpsumService.paragraphs[theIndex] + EOL;
        }

        numParagraphs -= theCount;
        if (numParagraphs > 0) {
            theResult += this.getParagraphs(numParagraphs);
        }

        return theResult;
    }

    getSentences(numSentences: number) {
        let theParagraphIndex = 0;
        let theCharIndex = 0;
        let theResult = '';
        let theCount = 0;

        do {
            let theFullStopIndex = LoremIpsumService.paragraphs[theParagraphIndex].indexOf('.', theCharIndex);

            if (theFullStopIndex == -1) {
                theCharIndex = 0;
                theParagraphIndex++;
                if (theParagraphIndex == LoremIpsumService.paragraphs.length) {
                    theParagraphIndex = 0;
                }

                continue;
            }

            theResult += LoremIpsumService.paragraphs[theParagraphIndex].substring(
                theCharIndex, theFullStopIndex + 1
            ) + ' ';
            theCount++;
            theCharIndex = theFullStopIndex + 2;
        } while (theCount < numSentences);

        return theResult;
    }

    getWords(numWords: number) {
        let theParagraphIndex = 0;
        let theResult = '';
        let theCount = 0;

        do {
            let words = LoremIpsumService.paragraphs[theParagraphIndex].split(/[\s\.,]+/);
            for (let word of words) {
                theResult += word.trim() + ' ';
                theCount++;

                if (theCount == numWords) {
                    break;
                }
            }

            theParagraphIndex++;
            if (theParagraphIndex == LoremIpsumService.paragraphs.length) {
                theParagraphIndex = 0;
            }
        } while (theCount < numWords);

        return theResult;
    }
}
