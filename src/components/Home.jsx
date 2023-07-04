import React from 'react'
import Bodyimg from './Bodyimg'
import Counter from './Counter'
import Header from './Header'

const Home = () => {
    return (

        <div>
            <Counter />
            <div className="Bodyimgs" style={{ display: "flex", gap: '1' }}>
                <Bodyimg title='one' desc="desc-one" image='https://picsum.photos/300/400' />
                <Bodyimg title='two' desc="desc-two" image='https://picsum.photos/300/400' />
                <Bodyimg title='three' desc="desc-three" image='https://picsum.photos/300/400' />
                <Bodyimg title='four' desc="desc-four" image='https://picsum.photos/300/400' />
            </div>
        </div>
    )
}

export default Home
