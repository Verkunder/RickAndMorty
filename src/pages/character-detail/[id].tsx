import React from 'react';
import Link from "next/link";
import {getCharacter} from "rickmortyapi";
import {RickAndMorty} from "@/types/RickAndMorty";
import Image from "next/image";

const item = ( { character } : RickAndMorty ) => {
    return (
        <div className='wrapper'>
            <Link href='/'>
                Home
            </Link>
            <h1>{character.name}</h1>
            <Image src={character.image} alt={character.name} width={300} height={300} />
            <div>Species: {character.species}</div>
        </div>
    );
};

export async function getServerSideProps(context: { query: { id: number; }; }) {
    const { id } = context.query
    const character = await getCharacter(Number(id))
    return {props: { character: character.data }}
}


export default item;