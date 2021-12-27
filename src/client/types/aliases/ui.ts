import {ReactElement} from 'react';

export type ElementCreator<T> = (Props: T) => ReactElement;

export type inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type btnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
