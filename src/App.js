/* src/App.js */
import React from 'react';
import './App.css';

function App() {
  // Navigation items based on the image
  const navItems = [
    "發一崇德",
    "舊金山道務中心",
    "十組運作",
    "道務中心活動",
    "福慧園",
    "學界",
    "聯繫我們"
  ];

  return (
    <div className="app-container">
      {/* Top Header Section */}
      <header className="top-header">
        <div className="header-left">
          <span className="script-text">San Francisco</span>
          <div className="sub-logo-text">發一崇德<br/>Fa Yi Chong De</div>
        </div>
        
        <div className="header-center">
          <h1 className="main-title">美國舊金山道務中心全球資訊網</h1>
        </div>

        <div className="header-right">
          {/* Placeholder Icons */}
          <div className="icon-item">
            <div className="icon-placeholder"></div>
            <span>進修班</span>
          </div>
          <div className="icon-item">
            <div className="icon-placeholder"></div>
            <span>活動</span>
          </div>
          <div className="icon-item">
            <div className="icon-placeholder"></div>
            <span>行事曆</span>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="main-nav">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section with Background Image Placeholder */}
      <section className="hero-section">
        {/* Placeholder for the Golden Gate Bridge background */}
        <img 
          src="https://via.placeholder.com/1920x600/e0e0e0/888888?text=Golden+Gate+Bridge+Background" 
          alt="Background" 
          className="hero-placeholder-img" 
        />
        
        <div className="hero-overlay-text">
          <span className="poem-line">蔚藍的港灣 碧浪沖岸</span>
          <span className="poem-line">海天共山色 帶霧含煙</span>
          <span className="poem-line">如詩又如畫 似夢似幻</span>
          <span className="poem-line">我心與我情 如昨依</span>
          <br/>
          <small>- 不休息菩薩慈訓</small>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        發一崇德 » 發一崇德簡介
      </div>

      {/* Main Content Area */}
      <main className="content-container">
        <div className="content-left">
          <h2 className="content-title">發一崇德簡介</h2>
          <p className="text-paragraph">
            一貫道發一崇德源於大陸天津同興佛堂，當初大陸來台開荒之組線很多，約有十三組十八支線，追根朔源大都以原佛堂之名稱為其組線名，如基礎組、寶光組、興毅組……等，而發一組是咱老前人當初向師母老大人請示，由師母親賜之名號，所謂發一：就是發一組，指由韓老前人的帶領下的道場總稱，其下有十一個單位，如發一崇德、發一靈隱、發一天元、發一天恩……等等，發一崇德是由大德陳前人所帶領開創之道場，咱前人希望我們修道辦道要修身養德，一定要有崇高德性才行，所以用崇德二字來惕厲我們，前人常言：『不是一家人，不入一家門。』因而我們也常以姓「發一」名「崇德」自勉，以身為崇德人為榮！
          </p>
          <p className="text-paragraph">
            民國三十七年，前人大姑再次追隨老前人來台開荒，三十八年兩岸斷絕，從此前人以道場為家，以渡化眾生為職志，自立自強，突破千魔萬考，歷經層層考驗，可說是披荊斬棘，蓽路藍縷，才能開創出一貫大道發一崇德豐圓寬廣的大道場，創造了近代宗教史上的奇葩。
          </p>
          <p className="text-paragraph">
            早期剛來台灣開荒期間，因當時的政局不定，社會動盪不安，百業蕭條，渡人曾受到政府當局嚴厲取締，經歷過數十年的白色恐怖年代，然一切都有仙佛撥轉與救助，多少官考最後都能轉危為安，甚至化阻力為助力，回憶當初在斗六開創時期，實有許多顯化事蹟，如啞巴求道後，會開口說話；瘸子求道後，能與正常人一樣行走；還有脖子長瘤痊癒等等。一傳十，十傳百，造成很大的轟動，許多人聞言，拿著身分證來排隊掛號求道，如此一年又一年，前人大姑腳步，走過一村又一村，從無到有，從少到多，由鄉村到都市，自台灣到國外，走過了一甲子的歲月(2008年8月止)，現在發一崇德道場規模，這些都是前人用血淚一點一滴交織而成的。
          </p>
          <p className="text-paragraph">
            目前海內道場台灣規劃雲林、彰化、台北、台中、苗栗、高雄、台南等七大道場。
          </p>
          <p className="text-paragraph">
            大專院校之學界有台北、台中、台南、高雄、雲林、彰化、苗栗等七個道場。海外有日本、新加坡、吉隆坡、泰國、亞羅士打、洛杉磯、印尼雅加達等七個道場。另對正積極開荒中的國家，劃分了十二個道務中心，即舊金山、紐約、溫哥華、香港、澳門、菲律賓、棉蘭、奧克蘭、尼泊爾、古晉、雪梨、柬埔寨。
          </p>
          <p className="text-paragraph">
            此外，還有許多誠心道親正進行開荒之國家有越南、寮國、緬甸、印度、巴西、巴拉圭、南非、澳大利亞、英國、法國、荷蘭、義大利……等。
          </p>

          <h2 className="content-title">發一崇德舊金山道務中心</h2>
          <h3 className="content-subtitle">舊金山道務中心成立緣由</h3>
          <p className="text-paragraph">
            1999年法會，活佛老師臨壇，慈悲指示成立道務中心，翌年2000年，前人老慈悲蒞臨舊金山，正式成立舊金山道務中心。致使道務逐漸宏展，分別開設國語、粵語、英語、小天使、兒童讀經班等各研究班，以成全多元文化之道親，並安排講師提昇精進的課程，端正理念，凝聚道氣。於2008年祭孔大典中，兒童讀經班小朋友們的表演，獲當地媒體專題報導，得到社會界廣泛好評。
          </p>
          <h3 className="content-subtitle">遵循制度 人才培長</h3>
          <p className="text-paragraph">
            承蒙前人老睿智領導，提倡『集體領導，整體帶動』，推行道場『忠義字班』、『十組分工運作』，各組廣納賢良，團結合作，匯聚來自五湖四海的同修們，來自不同的生長環境與文化背景，但修辦的精神和道心是相同的，猶如手足情誼，佛堂讓漂泊的海外遊子有歸鄉溫暖的依靠。邁向前人老提倡的『三界一元化』造就老中青三代壇主、講師，學界的菁英，成為道場之棟梁，奠定穩固的基礎；皆是蒙沾上天的恩典與垂憫，才有舊金山道務中心！
          </p>
        </div>

        <div className="content-right">
          {/* Sidebar Image Placeholders */}
          <div className="sidebar-image-placeholder">
            Temple Image 1
          </div>
          <div className="sidebar-image-placeholder">
            Portrait Image
          </div>
          <div className="sidebar-image-placeholder">
            Courtyard Image
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
