import uuidGenerator from "@/components/utils/uuid"

describe('testing uuid functionality', () => {
    const uuidLength = 6;
    
    it('generates a uuid', () => {
        let uuid = uuidGenerator(uuidLength)

        expect(typeof uuid).toBe('string')
    })

    it('generates a uuid with provided length', () => {
        let uuid = uuidGenerator(uuidLength)

        expect(uuid).toHaveLength(uuidLength)
    })

    it('generates a unique uuid', () => {
        let uuids = new Set()

        for (let i = 0; i < 100; i++){
            uuids.add(uuidGenerator(uuidLength))
        }

        expect(uuids.size).toBe(100);
    })

})