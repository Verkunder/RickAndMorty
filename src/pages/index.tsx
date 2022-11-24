import React, {FC} from 'react';
import {getCharacters} from "rickmortyapi";
import {RickAndMorty} from "@/types/RickAndMorty";
import Character from "@/components/features/Character";


const IndexPage: FC<RickAndMorty> = ({data}) => {
    return (
        <div className='wrapper'>
            <div className='catalog'>
            {data.map(item => <Character id={item.id} key={item.id} name={item.name} status={item.status} species={item.species}
                                         type={item.type} gender={item.gender} origin={item.origin}
                                         location={item.location} image={item.image} episode={item.episode}
                                         url={item.url} created={item.created}/>)}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const res = await getCharacters()
        const data = res.data.results
        return {props: {data}}
    } catch (e) {
        console.log(e)
    }
}


export default IndexPage;
