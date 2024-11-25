import { Tasktype } from '../utils/types'
import uuidGenerator from './uuid'

export const startTask:Tasktype[] = [
    {
        id: uuidGenerator(3),
        description: "Go to gym"
    },
    {
        id: uuidGenerator(3),
        description: "Hand in assignments"
    },
    {
        id: uuidGenerator(3),
        description: "Go skate"
    }
]

