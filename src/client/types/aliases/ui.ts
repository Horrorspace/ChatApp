import {ReactElement} from 'react';

export type ElementCreator<T> = (Props: T) => ReactElement;