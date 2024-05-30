import './App.css';
import Credit from './1stcomp';
import Mars from './2ndcomp';
import bim from './cartierbag.jpeg'
import bi from './cartrollers.jpeg'
import big from './bagg.jpeg'
function App(){
    let price = [40000, 30000, 45000]
       return (
        <div className='Appp'>
            <Credit/>
            <div className='comp'>
                <div>
                    <Mars
                    price={price[0]}
                    image={bim}
                    name='Cartier'
                    description='Classy with Elegant'
                    />
                </div>

                <div>
                    <Mars
                    price={price[1]}
                    image={bi}
                    name='Cart-Roller'
                    description='Unique with Quality'
                    />
                </div>

                <div>
                    <Mars
                    price={price[2]}
                    image={big}
                    name='Lushy'
                    // description={description[2]}
                    description='Easy to carry with vibe'
                    />
                </div>
            </div>
        </div>
    );
}

export default App;