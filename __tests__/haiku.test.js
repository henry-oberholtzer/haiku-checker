import { silentTrim, Haiku, syllableCount, haikuSplit, haikuSyllableCount} from './../src/js/haiku.js'

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
        expect(haikuSplit(
            "Wind in the blossoms A sweet fragrance in the air Bees drunk on nectar"))
            .toEqual([
                "Wind", "in", "the", "blossoms", 
                "A", "sweet", "fragrance", "in", "the", "air", 
                "Bees", "drunk", "on", "nectar"]);
    });
});

describe('haikuSyllableCount', () => {
    test('should count all syllables in the haikuSplit() array using syllableCount()', () => {
        expect(haikuSyllableCount(
            "Wind in the blossoms A sweet fragrance in the air Bees drunk on nectar"
        )).toEqual(17);
        expect(haikuSyllableCount(
            "A simple blade of grass without fanfare it quietly sustains life"
        )).toEqual(17);
        expect(haikuSyllableCount(
            "Flakes of crystal snow unhurried they gently fall soft snow geese landing"
        )).toEqual(17);
        expect(haikuSyllableCount(
            "White chrysanthemum purity nested in green a gift for my eyes"
        )).toEqual(17);
    });
});
