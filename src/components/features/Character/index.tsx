import React, {FC} from 'react';
import {RickAndMortyCharacter} from "@/types/RickAndMorty";
import cn from './Character.module.sass'
import Image from "next/image";
import Link from "next/link";

const Index: FC<RickAndMortyCharacter> = ({...character}) => {
    return (
        <Link href={'character-detail/' + character.id} className={cn.Character}>
            <div className={cn.CharacterImage}>
                <Image src={character.image} alt={character.name} width={200} height={200} />
            </div>
            <div className={cn.CharacterDescription}>
                <div className={cn.CharacterName}> {character.name} </div>
                <div className={cn.CharacterStatus}> {character.status} - {character.species} </div>
                <div> location: {character.location.name} </div>
            </div>
        </Link>
    );
};

export default Index;