
import { ReactNode, Context } from 'react'


export type BaseContextDataType<T> = {
    data: T,
}

export type ActionType<T, U> = {
    type: U, payload: BaseContextDataType<T>
}

export type BaseContextType<T> = BaseContextDataType<T> & {
    actions: object
}

export type BaseContextProviderType<T> = {
    value: BaseContextType<T>,
    children: ReactNode
    Context: Context<BaseContextType<T>>
}



