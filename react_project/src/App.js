import React from 'react';
import Characters from "./components/Characters/Characters";
const App = () => {
    return (
        <div>
            <Characters id={243} name={'Mr. Needful'} status={'Alive'} species={'Humanoid'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/243.jpeg'}/>;
            <Characters id={70} name={'Concerto'} status={'Dead'} species={'Humanoid'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/70.jpeg'}/>;
            <Characters id={569} name={'Shadow Jacker'} status={'Alive'} species={'Mythological Creature'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/569.jpeg'}/>;
            <Characters id={701} name={'Metal Rick'} status={'Dead'} species={'Robot'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/701.jpeg'}/>;
            <Characters id={371} name={'Tumblorkian'} status={'Alive'} species={'Alien'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/371.jpeg'}/>;
            <Characters id={792} name={'Alien Crow'} status={'Dead'} species={'Alien'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/792.jpeg'}/>;
            <Characters id={214} name={'Man Painted Silver Who Makes Robot Noises'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/214.jpeg'}/>;
        </div>
    );
};

export default App;
