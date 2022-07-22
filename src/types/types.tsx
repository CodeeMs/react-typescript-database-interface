import { MouseEventHandler } from "react";

export interface IHeader{
    keys: any;
    openModal: () => void;
}

export interface IFooter{
    openModal: () => void;
}

export interface ICompany{
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IGeo{
    lat: number;
    lng: number;
}

export interface IAdress{
    street: string;
    city: string;
    zipcode: number;
    geo: IGeo;
}

export interface IUsers{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: ICompany;
    address: IAdress;
}

export interface IButton{
    children: string;
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface IRandomUser{
    id: number;
    name: string;
    username: string;
    email?: string;
    phone: string;
}

export interface IAddForm{
    addTextNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addNote: (e: React.MouseEvent<HTMLButtonElement>) => void;
    noteValue: string;
}

export interface IRandomPanel extends IAddForm{
    keys: any;
    getRandomUser: MouseEventHandler<HTMLButtonElement>;
    btnDis: boolean;
    warningClass: string;
}

export interface IAddInput{
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export interface IRandomProfileBlock{
    keyGetter: Function;
    btnDis: boolean;
    keys: number;
    getRandomInt: (arg: number) => number;
}

export interface IGlobalUsers extends IRandomUser{
    address: IAdress;
}

export interface IGetUserList{
    globalUsers: IGlobalUsers[];
}

export interface IModalWindow{
    modal: string;
    closeModal: (callback: any) => void;
    addOneKey: () => void;
    x: number;
    y: number;
    z:number;
    currentSum: number;
    justCloseModal: (callback: any) => void;
}

export interface IDragList{
    id: number;
    order: number;
    text: string;
    note: string;
    num: number;
}

export interface IStatistics{
    totalUnlock: any;
}

export interface ITarget{
    target?: HTMLDivElement | null;
    closest?: any;
}

export interface ISuccessBanner{
    successBannerClass: string;
    onClick: () => void;
}




