import React from 'react';
import { BsBagCheck, BsBagCheckFill } from 'react-icons/bs';

function CompleteIcon({completed}){
    const fillOrNot = completed ? <BsBagCheckFill /> : <BsBagCheck />
    return fillOrNot;
}

export { CompleteIcon };