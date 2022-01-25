import './Interior.css';

function Interior () {
  return <div className="interior-block">
    <h2>Наши интерьеры</h2>
    <div className="interior-photos-1-row">
      <img src="/images/interior/1.jpg" alt="interior-img" />
      <img src="/images/interior/2.jpg" alt="interior-img" />
      <img src="/images/interior/3.jpg" alt="interior-img" />
    </div>
    <div className="interior-photos-2-row">
      <img src="/images/interior/4.jpg" alt="interior-img" />
      <img src="/images/interior/5.jpg" alt="interior-img" />
    </div>
  </div>
}

export default Interior;