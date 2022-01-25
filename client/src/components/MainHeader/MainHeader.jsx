import './MainHeader.css';

function MainHeader () {
  return <div className="main-header">
    <h1 className="main-h1">BEAUTIFIER</h1>
    <p className="main-p-up">ДЛЯ ТЕХ, КТО ИЗ ЛУЧШЕГО <br />ВЫБИРАЕТ ИСКЛЮЧИТЕЛЬНОЕ</p>
    <p className="main-p-bottom">КУЗНЕЦОВЫЙ ПЕРЕУЛОК 5/2</p>
    <img className="main-img" src="/images/main.jpg" alt="" />
  </div>
}

export default MainHeader;