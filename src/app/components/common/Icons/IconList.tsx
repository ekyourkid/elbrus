import React from "react";

import BurgerBar from "./icons/burgerbar.svg";
import Arrow from "./icons/arrow-right.svg";
import Money from './icons/money.svg'
import Pencil from './icons/pencil.svg'
import Search from './icons/search.svg'
import Clock from './icons/clock.svg'
import Rupiah from './icons/rupiah.svg'
import Tick from './icons/tick.svg'
import EyeHide from './icons/eye-hide.svg'
import ArrowLeft from './icons/arrow-left.svg'

const iconTypes = {
    burgerbar: BurgerBar,
    arrow: Arrow,
    money: Money,
    pencil: Pencil,
    search: Search,
    clock: Clock,
    rupiah: Rupiah,
    tick: Tick,
    arrowLeft: ArrowLeft,
    eyeHide: EyeHide,
};

const Icon = ({ name }: { name: 'burgerbar' | 'arrow' | 'money' | 'pencil' | 'search' | 'rupiah' | 'clock' | 'tick' | 'eyeHide' | 'arrowLeft' }) => {
    let Icon = iconTypes[name];
    return <Icon />;
};

export default Icon;
