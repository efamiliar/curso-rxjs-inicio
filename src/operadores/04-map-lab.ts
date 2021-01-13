import { fromEvent, throwError } from "rxjs";
import { map, tap } from "rxjs/operators";


const text = document.createElement('div');
text.innerHTML = `
Deserunt reprehenderit id deserunt ad Lorem irure dolore adipisicing proident in sint qui. Ipsum qui Lorem deserunt quis est anim magna eu amet aliquip esse consectetur ipsum. Aliqua cupidatat esse est amet occaecat enim sit exercitation non eu nostrud sunt deserunt cupidatat. Proident ea minim enim laborum id.
<br/><br/>
Laboris id incididunt dolor elit incididunt fugiat. Ex sunt sunt laborum ex proident tempor magna in sint cupidatat ullamco elit fugiat aliquip. Consequat ad magna consequat anim sit.
<br/><br/>
Mollit ut nisi cillum qui aliqua excepteur. Eu consequat ex reprehenderit est irure amet eu commodo amet sit minim. Enim non elit do consectetur in sunt. Esse sit ut proident anim. Voluptate occaecat excepteur elit proident fugiat qui. Elit sit minim non nisi nulla.
<br/><br/>
Dolor amet pariatur ut sint commodo consequat proident ad id ut esse. Esse labore eiusmod sit laboris qui cillum adipisicing cillum aute nisi labore exercitation. Et irure dolor voluptate do enim ea dolor veniam incididunt fugiat. Reprehenderit labore sint aute excepteur labore aliquip ullamco deserunt.
<br/><br/>
Consectetur labore qui quis cillum deserunt sunt. Voluptate officia et ad minim do duis exercitation. Culpa labore reprehenderit velit quis pariatur minim.
<br/><br/>
Amet dolore fugiat qui duis Lorem anim consectetur amet enim labore irure cillum. Sunt eiusmod ipsum incididunt reprehenderit magna est ea quis in ex. Ullamco eiusmod incididunt mollit qui sunt non do. Aliquip tempor culpa nostrud ad laborum. Tempor occaecat ad veniam ea incididunt ut eu.
<br/><br/>
Exercitation duis et exercitation sit aute. Amet id eiusmod veniam elit irure Lorem velit cupidatat laboris sint incididunt proident amet exercitation. Eiusmod irure tempor et do. Magna anim quis adipisicing laborum dolor pariatur culpa. Nostrud in tempor est est eiusmod ea esse fugiat minim tempor excepteur eiusmod proident. Consectetur eiusmod duis ea amet occaecat eiusmod do nostrud.
<br/><br/>
Eu culpa elit consectetur dolor ut laboris deserunt eiusmod proident irure. Eu cupidatat elit elit culpa laboris. Adipisicing duis officia cupidatat Lorem laborum sint proident elit. Officia dolor fugiat non non aute veniam amet proident esse minim ullamco ad laboris.
<br/><br/>
Fugiat excepteur quis nulla cillum. Deserunt nisi nulla officia Lorem ad id magna minim excepteur qui. Exercitation non do magna excepteur nostrud sint commodo cupidatat dolore dolore.
<br/><br/>
Qui dolore fugiat velit consequat. Voluptate reprehenderit sint laboris est voluptate quis officia aute et. Nulla ullamco proident qui enim occaecat consequat tempor. Velit irure sint ad id velit proident incididunt. Pariatur aliquip ex occaecat pariatur deserunt nisi eu laborum fugiat ut culpa.
<br/><br/>
Ipsum officia nulla reprehenderit aliquip laboris duis. Nulla tempor enim ipsum eu laboris. Excepteur officia enim nulla sunt cillum elit officia consectetur enim sunt fugiat commodo enim in. Laboris nostrud dolore ipsum ullamco occaecat aliqua deserunt sint. Non minim exercitation elit est qui minim dolor proident cupidatat in cupidatat duis ad culpa.
<br/><br/>
Esse irure voluptate id duis enim cupidatat. Esse mollit ea dolor tempor culpa. Ipsum reprehenderit magna incididunt mollit. Aute reprehenderit velit do veniam. Sint ad elit quis minim duis tempor cupidatat. Reprehenderit amet proident culpa tempor dolor ad. Lorem tempor irure veniam exercitation ut aliquip voluptate pariatur dolor ullamco.
<br/><br/>
Id aute Lorem eu laborum do sit exercitation tempor non id aliqua consequat aliquip. Laborum irure aute aliquip sit labore adipisicing magna id laboris duis quis ex officia. Labore dolore aliqua esse ullamco ex esse enim nostrud non minim qui sit et est. Ipsum proident tempor do duis commodo culpa quis.
<br/><br/>
Ipsum deserunt enim pariatur quis officia nulla sint et eu officia et id anim. Labore cillum ut proident commodo magna tempor ex deserunt ad culpa qui. Nisi nisi laborum ea est duis ullamco laborum consectetur in ad laborum est. Do sit ea esse pariatur adipisicing elit do. Officia labore nisi nostrud quis mollit. Elit id ex ex nisi cillum voluptate adipisicing ad aliquip ullamco. Commodo ipsum anim officia incididunt laboris velit.
<br/><br/>
Sit aliqua fugiat magna nisi et occaecat tempor est fugiat velit. Non elit excepteur qui pariatur ipsum ut. Tempor aute sunt sit qui dolore velit mollit incididunt sunt minim. Commodo do est culpa sunt amet cillum ullamco labore ut do adipisicing.
<br/><br/>
Aute sit proident laboris velit pariatur id ex adipisicing dolor fugiat ex non ipsum eu. Excepteur aliquip sunt tempor ipsum tempor nisi amet nisi. Ipsum officia nisi est sunt adipisicing eu aute ipsum officia. Laboris officia dolore exercitation cillum do do eu velit sint esse.
<br/><br/>
Irure exercitation veniam eu sunt reprehenderit mollit ut incididunt. Voluptate incididunt tempor Lorem et dolore aliqua exercitation do tempor adipisicing cillum. Aliquip nulla sit eu tempor sint labore do ipsum veniam aute veniam commodo.
<br/><br/>
In laborum et laboris sit consectetur proident cupidatat et fugiat. Ad cillum aliqua enim eu labore excepteur non voluptate. Anim quis consectetur aliquip consequat proident. Labore aute do et aute ullamco pariatur pariatur aute ex. Mollit laboris elit aute dolor et magna laborum nisi. Dolore in dolor incididunt elit officia in officia voluptate.
<br/><br/>
Fugiat laborum adipisicing occaecat ut exercitation et cupidatat velit dolor aute dolore officia. Sunt sunt officia incididunt qui qui sint aliquip. Eiusmod nulla veniam velit consequat occaecat commodo magna amet ex dolor labore. Tempor fugiat excepteur officia aliquip. Aute in eiusmod ullamco sunt officia cillum veniam eiusmod ipsum dolore deserunt labore et.
<br/><br/>
Minim et officia deserunt sit adipisicing id dolore velit. Incididunt proident quis consequat fugiat ullamco et nostrud qui minim. Anim laboris excepteur magna commodo fugiat proident velit deserunt anim nostrud quis et eu veniam.
<br/><br/>
Ut pariatur amet proident et exercitation consectetur qui commodo id. Commodo ullamco eiusmod ipsum fugiat reprehenderit minim est sint in adipisicing. Sint amet duis reprehenderit in in elit. Sunt excepteur exercitation laboris do aute. Excepteur sunt anim nostrud anim. Culpa cupidatat incididunt cupidatat anim laboris ipsum commodo ex.
<br/><br/>
Duis laborum labore pariatur sunt excepteur ea sit ea non anim duis. Magna enim officia Lorem mollit ea. Minim in do do cupidatat laborum dolore magna occaecat. Duis reprehenderit qui nisi laboris occaecat officia enim ipsum commodo esse reprehenderit. Consectetur enim duis Lorem in pariatur proident tempor quis mollit commodo amet.
<br/><br/>
Ex aliquip ad commodo duis fugiat culpa do nostrud cupidatat nulla elit occaecat. Dolor minim consectetur aliqua reprehenderit. Incididunt commodo occaecat consectetur laborum incididunt Lorem ex amet ullamco adipisicing ad. Ex tempor anim esse sit et labore velit ut et elit.
<br/><br/>
Incididunt laborum in veniam aute pariatur veniam. Nostrud non id veniam incididunt sint tempor eu commodo id aliqua. Labore tempor amet in deserunt est ad minim do officia quis culpa sit. Excepteur laborum id amet laboris occaecat ipsum amet sint consectetur qui mollit labore. Minim labore Lorem ullamco mollit anim ut nulla exercitation ipsum minim cupidatat.
<br/><br/>
Sint proident elit aliqua commodo sit qui esse ea Lorem magna nisi ut. Ex esse ipsum minim minim aliquip deserunt ut sint consequat incididunt est. Sunt commodo anim laboris nostrud ex dolore officia. Aliquip sunt nulla duis ullamco sunt. Velit dolor proident adipisicing excepteur ad proident veniam laboris aliqua qui occaecat laborum. Proident est pariatur in eu qui et aliqua aute aliqua mollit magna consectetur esse.
<br/><br/>
Pariatur laborum consequat fugiat proident esse nisi commodo duis. Eu mollit eiusmod qui in qui consequat sit anim do dolor deserunt dolor ad. Quis nisi pariatur ullamco quis ipsum nostrud anim. Elit non pariatur adipisicing nisi. Id Lorem veniam duis non ut pariatur ullamco deserunt deserunt eiusmod cillum exercitation. Proident ex esse quis excepteur ullamco nulla Lorem amet pariatur duis. Dolore adipisicing voluptate pariatur eu dolor sit exercitation aute.
<br/><br/>
Esse adipisicing est et nisi consequat ad officia. Veniam dolore proident do velit est. Officia exercitation enim aliqua ea anim. Non nostrud id minim Lorem in veniam qui enim minim. Pariatur enim in Lorem exercitation minim quis eiusmod sint. Exercitation elit enim adipisicing exercitation veniam ipsum dolore dolor. Sunt cupidatat sit enim duis aute laboris culpa aute cillum nostrud do sunt tempor dolore.
<br/><br/>
Commodo elit cupidatat tempor adipisicing enim aliqua sint nulla do ipsum ad tempor dolore consequat. Consequat nostrud cupidatat non et deserunt culpa adipisicing laboris ex. Commodo aliqua anim commodo nostrud et esse do sunt. Ullamco commodo et qui pariatur fugiat fugiat exercitation ullamco aliquip esse mollit labore. Quis in commodo deserunt amet culpa commodo esse labore eiusmod nostrud. Amet dolore laborum dolore pariatur proident. Esse fugiat anim aliqua laboris.
<br/><br/>
Cillum velit reprehenderit aliquip reprehenderit. Velit cillum reprehenderit aliquip esse anim do consequat amet ex ut. Labore ut dolor duis voluptate commodo tempor tempor. Officia ut est veniam deserunt aliqua pariatur aliquip cupidatat ea. Non minim do nisi pariatur reprehenderit reprehenderit in enim culpa Lorem. Minim nostrud ea non in.
<br/><br/>
Ut laboris adipisicing nulla laborum aliqua Lorem. Aute non sint cillum voluptate exercitation nulla ipsum et qui officia mollit incididunt aute reprehenderit. Id do laboris ea sit. Adipisicing enim ipsum sit tempor dolor cillum Lorem amet duis voluptate cillum velit. Laborum ea enim ad tempor velit sit consequat ad quis.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document,'scroll');

/* scroll$.subscribe(
  console.log
)
 */
const calculaPorcentaje = (event: any) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return (scrollTop / ( scrollHeight - clientHeight )) * 100;
}
const progress$ = scroll$.pipe(
    map(calculaPorcentaje),
    tap(console.log)
);

progress$.subscribe( porcentaje =>

  progressBar.style.width = `${porcentaje}%`

  );