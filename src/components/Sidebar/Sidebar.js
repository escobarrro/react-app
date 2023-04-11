import React from 'react';
import './Sidebar.css';
import { BulbOutline } from 'react-ionicons'
import { CodeOutline } from 'react-ionicons'
import { ImagesOutline } from 'react-ionicons'





class Sidebar extends React.Component {

    render() {
    return(
    <div id="sidebar">
        <ul id="list">
            <li onClick={() => this.props.handleClick(
            <div style={{padding: "10px", lineHeight: "1.7"}}>
                <h1 style={{textAlign: "center"}}>Zajawka do Front-endu</h1>
                <p style={{ textAlign: "justify", fontSize: "17px" }}>Moja zajawka do Front-endu pojawiła się gdzieś w okolicach Października 2022, kiedy na praktykach zainteresowałem się bardziej Front-endem i ogólnie Web develomentem. Zacząłem pisać swoje pierwsze podstawowe strony ulepszając je o nowo poznane rzeczy, nie były one jakoś bardzo skomplikowane i czułem że czegoś mi brakuje. Dlatego po paru dniach kupiłem kurs który miał mnie rozwinąć w całym zakresie Web Developmentu począwszy od przypomnienia podstaw HTML, przez CSS, JS aż do poznania biblioteki JS jaką jest React, jeśli chcesz się dowiedzieć więcej na temat tej biblioteki kliknij w 4 od góry przycisk na bocznym panelu. Wracając po nauce podstaw Reacta, React Hooks oraz Redux przeszedłem do poznania podstaw Back-endu która opierała się na Node.js oraz Express.js. Poznałem również jak działają i jak korzystać z baz danych, API itp. dodatkowo poznałem jak działa GitHub jak z niego korzystać, jak wygląda dzień Web Developera i pare porad jak zacząc szukać pracy i jak dalej polepszać swoje umiejętności. Na sam koniec kursu czekał na mnie wielki projekt, zająć się musiałem Front-endem jak i Back-endem nie było to wszystko takie proste ale dodało dużo nowych umiejętności, informacji a przedewszystkim zwiększało doświadczenie, które jest bardzo ważne. Poniżej zamieszcze kilka moich prac, wraz z kodem.</p>
                <h2 style={{textAlign: "center"}}>Moje przykładowe prace</h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px", textAlign: "center", marginTop: "50px"}}>
                    <div>
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/"><img src="https://picsum.photos/300/200?random=1" alt="" /></a>
                    </div>
                    <div class="item">
			        <a target="_blank" rel="noreferrer" href="https://www.yahoo.com/"><img src="https://picsum.photos/300/200?random=2" alt="" /></a>
		            </div>
		            <div class="item">
			        <a target="_blank" rel="noreferrer" href="https://www.bing.com/"><img src="https://picsum.photos/300/200?random=3" alt="" /></a>
		            </div>
                </div>
            </div>
            )}>
            <BulbOutline
            color={'#00000'}
            height="50px"
            width="50px"
            /></li>
            <li onClick={() => this.props.handleClick(
                <div style={{padding: "20px", lineHeight: "1.7"}}>
                    <h1 style={{textAlign: "center"}}>Co to Front-end</h1>
                    <p style={{ textAlign: "justify", fontSize: "20px" }}>Front-end to pojęcie odnoszące się do interaktywnej części strony internetowej, z którą użytkownik ma bezpośredni kontakt. Jest to zbiór technologii, narzędzi i języków programowania używanych do tworzenia interfejsów użytkownika, które obejmują wygląd, styl i zachowanie strony internetowej. Front-end zazwyczaj składa się z trzech podstawowych języków programowania: HTML, CSS i JavaScript. HTML służy do definiowania struktury strony internetowej, CSS do jej stylizacji i formatowania, a JavaScript do dodawania interaktywności, animacji i efektów specjalnych. Front-end jest ważnym elementem procesu projektowania i tworzenia stron internetowych, ponieważ zapewnia użytkownikom intuicyjny i łatwy w użyciu interfejs użytkownika. Oprócz podstawowych technologii jak HTML, CSS i JavaScript, front-end rozwija się również dzięki narzędziom i bibliotekom, które ułatwiają i przyspieszają pracę nad interfejsem użytkownika.</p>
                    <h2 style={{textAlign: "center"}}>Popularne narzędzia front-endowe</h2>
                    <ul style={{lineHeight: "2.4"}}>
                    <li style={{ fontSize: "20px" }}>Frameworki, takie jak React, Angular i Vue, które ułatwiają tworzenie skomplikowanych interfejsów użytkownika i aplikacji webowych</li>
                    <li style={{ fontSize: "20px" }}>Biblioteki, takie jak jQuery, Bootstrap i Font Awesome, które udostępniają gotowe elementy i style, co przyspiesza proces tworzenia stron internetowych</li>
                    <li style={{ fontSize: "20px" }}>Edytory kodu, takie jak Visual Studio Code, Sublime Text czy Atom, które oferują przyjazne środowiska pracy dla programistów front-endowych</li>
                    </ul>
                    <p style={{ textAlign: "justify", fontSize: "20px" }}>Podsumowując w dzisiejszych czasach rola front-end developera staje się coraz ważniejsza, ponieważ wzrasta liczba urządzeń, na których korzystamy z internetu (np. smartfony, tablety, komputery) oraz coraz bardziej rozbudowane wymagania dotyczące interaktywności i estetyki stron internetowych.</p>
                </div>
            )}>
            <CodeOutline
    color={'#00000'} 
    height="50px"
    width="50px"
    />
            </li>
            <li onClick={() => this.props.handleClick(
                <div style={{padding: "20px", lineHeight: "1.7"}}>
                <h1 style={{textAlign: "center"}}>AngularJS - podstawowe informacje</h1>
                <p style={{ fontSize: "18px" }}>AngularJS to popularny framework JavaScript, który umożliwia tworzenie dynamicznych aplikacji webowych. Został stworzony przez zespół programistów z Google i jest jednym z najpopularniejszych frameworków front-endowych obecnie dostępnych. AngularJS oferuje szereg narzędzi i funkcji, które ułatwiają tworzenie aplikacji internetowych, takich jak wstrzykiwanie zależności, wiązanie dwukierunkowe danych, dyrektywy, kontrolery, usługi i wiele innych. Framework ten również zapewnia prostą obsługę zdarzeń użytkownika, takich jak kliknięcia i wprowadzanie tekstu. Jedną z największych zalet AngularJS jest jego modułowa architektura, która ułatwia zarządzanie dużymi aplikacjami internetowymi. Framework ten również oferuje wiele gotowych rozwiązań, takich jak routing, walidacja formularzy, obsługa błędów i wiele innych, co pozwala na szybkie i efektywne tworzenie aplikacji internetowych. Warto też wspomnieć że w AngularJS zostały napisane takie strony jak Google, Microsoft, Apple, McDonald's, Adobe czy Cisco. Oprócz wymienionych przeze mnie zalet, warto również wspomnieć o kilku innych aspektach AngularJS: </p>
                <ul style={{lineHeight: "2.4"}}>
                    <li style={{ fontSize: "18px" }}>AngularJS używa języka TypeScript, który jest nadzbiorem JavaScriptu, co oznacza, że ​​dostarcza on dodatkowe funkcje i narzędzia programistyczne, takie jak statyczna kontrola typów, interfejsy i wiele innych.</li>
                    <li style={{ fontSize: "18px" }}>AngularJS ma silną społeczność użytkowników, co oznacza, że ​​istnieje wiele zasobów, takich jak dokumentacja, poradniki, kursy i fora, które mogą pomóc w nauce i rozwoju w tej technologii.</li>
                    <li style={{ fontSize: "18px" }}>AngularJS jest wysoce testowalnym frameworkiem. Dzięki wbudowanym narzędziom takim jak TestBed i Jasmine, programiści mogą łatwo pisać i uruchamiać testy jednostkowe i integracyjne, co pozwala na szybsze wykrycie i naprawienie błędów.</li>
                    <li style={{ fontSize: "18px" }}>AngularJS jest ciągle rozwijany i ulepszany przez Google i społeczność. Wersja Angular 2+ wprowadziła wiele usprawnień i zmian w porównaniu z AngularJS, co oznacza, że ​​dla niektórych projektów może być to lepszy wybór. Niemniej jednak, wiele aplikacji internetowych wciąż korzysta z AngularJS i jest to wciąż ważna technologia w branży programistycznej.</li>
                    </ul>
                </div>
            )}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="M1 5.3L15.892 0l15.284 5.218-2.47 19.694L15.892 32 3.286 25.004 1 5.3z" fill="#00000"/><path d="M31.176 5.218L15.892 0v32l12.814-7.088 2.47-19.694z" fill="#00000"/><path d="M15.915 3.74l-9.28 20.64 3.463-.07 1.87-4.664h8.3l2.032 4.7 3.302.07L15.915 3.74zm.023 6.626l3.14 6.557H13.2l2.747-6.557z" fill="#ffffff"/></svg></li>
            <li onClick={() => this.props.handleClick(
                <div style={{padding: "20px", lineHeight: "2"}}>  
                <h1 style={{textAlign: "center"}}>React - podstawowe informacje</h1>
                <p style={{ fontSize: "20px" }}>React to biblioteka JavaScript do tworzenia interaktywnych interfejsów użytkownika. React został stworzony przez Facebooka i jest powszechnie stosowany do tworzenia aplikacji internetowych. Główną cechą Reacta jest deklaratywny styl programowania, który umożliwia tworzenie skomplikowanych interfejsów użytkownika z mniejszą ilością kodu. React jest również bardzo elastyczny i łatwo go integrować z innymi bibliotekami lub frameworkami JavaScript. W React korzysta się z tzw. komponentów, które reprezentują fragmenty interfejsu użytkownika i pozwalają na ich ponowne użycie. React wprowadza również koncepcję jednokierunkowego przepływu danych (ang. "one-way data binding"), co oznacza, że zmiany w danych powodują automatyczną aktualizację widoku, ale zmiany w widoku nie wpływają bezpośrednio na dane. React wykorzystuje wirtualny DOM (ang. "virtual DOM"), czyli wirtualną reprezentację drzewa elementów interfejsu użytkownika, co umożliwia efektywną aktualizację tylko tych elementów, które uległy zmianie, a nie całego drzewa. React jest również często używany z innymi narzędziami, takimi jak Redux, React Router czy Axios, które ułatwiają zarządzanie stanem aplikacji, nawigację między widokami oraz komunikację z serwerem. W React zostały napisane między innymi takie Aplikacje jak Facebook, Tesla, Skype, Discord czy też Instagram. W internecie można znaleźć masę kursów zarówno dla początkujących jak i tych bardziej zaawansowanych, React jest bardzo przyszłościowym narzędziem który cały czas się rozwija i powiększa o nowe funkcje. React pozwala nam na zbudowanie wpełni od zera estetycznej oraz funkcjonalnej aplikacji, pozwala on nam na dodawane wielu róznych rozszerzeń oraz dodatków, które znacznie ułatwiają nam prace.</p>






                </div>
            )}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="50px" height="50px">    <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"/></svg></li>
            <li onClick={() => this.props.handleClick("Tekst do przycisku 5")}>
            <ImagesOutline
    color={'#00000'} 
    height="50px"
     width="50px"
    />
            </li>
        </ul>
    </div>
    )

}}

export default Sidebar;

