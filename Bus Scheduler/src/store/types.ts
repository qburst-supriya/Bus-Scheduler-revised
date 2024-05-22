
import { ReactNode, Context } from 'react'


export type StateType<T> = {
    data: T,
}

export type ActionType<T> = {
    type: string, payload: StateType<T>
}

export type ContextValueType<T> = {
    data: StateType<T>,
    actions: object
}

export type ContextProviderType<T> = {
    value: ContextValueType<T>,
    children: ReactNode
    Context: Context<ContextValueType<T>>
}



