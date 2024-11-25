export default function uuidGenerator(length: number): string {
    let uuid = []
    
    for(let i = 0; i < length; i++) {
        uuid.push(Math.random() * 10 | 0)
    }
    return uuid.join('')
}
