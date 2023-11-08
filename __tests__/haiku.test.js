import { silentTrim, Haiku } from './../src/js/haiku.js'

describe ('silentTrim', () => {
    test('should accept a string and trim any vowel at the end of a word', () => {
        expect(silentTrim("remove")).toEqual("remov");
        expect(silentTrim("waterloo")).toEqual("waterlo");
    });

    test('removes vowels that are next to each other', () => {
        expect(silentTrim("boragh")).toEqual("boragh");
        expect(silentTrim("eqal")).toEqual("eqal");
    });
});

describe ('syllableCount', () => {
    test('should count the syllables by vowels after silentTrim()', () => {
        expect(syllableCount("borough")).toEqual(2);
        expect(syllableCount("waterloo")).toEqual(3);
        expect(syllableCount("confirmation")).toEqual(4);
        expect(syllableCount("transmogrification")).toEqual(6);
    });
});

describe('haikuSplit', () => {
    test('this should split haiku by words', () => {
        expect(Haiku.haikuSplit(
            "Wind in the blossoms A sweet fragrance in the air Bees drunk on nectar"))
            .toEqual([
                "Wind", "in", "the", "blossoms", 
                "A", "sweet", "fragrance", "in", "the", "air", 
                "Bees", "drunk", "on", "nectar"])
    });
});

describe('haikuSyllableCount', () => {
    test('should count all syllables in the haikuSplit() array using syllableCount()', () => {
        expect(Haiku.haikuSyllableCount(
            "Wind in the blossoms A sweet fragrance in the air Bees drunk on nectar"
        )).toEqual(17);
    });
});
