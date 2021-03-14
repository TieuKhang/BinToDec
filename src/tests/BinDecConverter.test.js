import {convertBin, convertDec} from '../components/BinDecConverter';

//test binary to decimal converter
test('convert 101111 to decimal number', () => {
    expect(convertBin(101111)).toBe(47);
})

//test decimal to binary converter
test('convert 67 to decimal number', () => {
    expect(convertDec(67)).toBe(1000011);
})