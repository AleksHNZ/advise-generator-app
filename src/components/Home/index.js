import styles from '../../styles/css/main.css';

const btn = document.querySelector('.btn');
const id_tag = document.querySelector('.advice-id');
const advice_tag = document.querySelector('.advice');

function onBtnClick(){
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            id_tag.innerText = 'advice #' + jsonData['slip']['id'];
            advice_tag.innerText = '"' + jsonData['slip']['advice'] + '"';
        });

}

btn.addEventListener('click', onBtnClick);

onBtnClick();

const Home = () => {
    return (
        <main className='container'>
        {/* Card */}
           <div className='card'>
               <h5 className='advice-id'>Advice #117</h5>
               <div className='advice'>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</div>

                {/* Dice Button */}
                <div className='btn'>
                    <img src='./images/icon-dice.svg' alt='icon-dice' />
                </div>
                </div>
        </main>
    )
}

export default Home;